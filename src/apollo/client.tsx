import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { hasSubscription } from '@jumpn/utils-graphql';
import {
  defaultDataIdFromObject,
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, FetchResult, Observable } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import apolloLogger from 'apollo-link-logger';
import {
  AnonLoginMutationName,
  ConfirmEmailMutationName,
  ResetPwdMutationName,
  UpdateLostPasswordMutationName,
  ChangePasswordMutationName,
  AnonSignUpMutationName
} from '../fe/session/anon.generated';
// import { MeLogoutMutationName } from 'fe/session/me.generated';
import { GraphQLError } from 'graphql';
import HttpStatus from 'http-status-codes';
import { Socket as PhoenixSocket } from 'phoenix';
import { RootMutationType, RootQueryType } from '../graphql/types.generated';
import { GRAPHQL_ENDPOINT, IS_DEV, PHOENIX_SOCKET_ENDPOINT } from '../mn-constants';
import { getOpType } from '../util/apollo/operation';
import { KVStore } from '../util/keyvaluestore/types';
import { createUploadLink } from './uploadLink.js';
import introspectionQueryResultData from 'graphql/types.generated';
import { CreateUserMutationName } from '../HOC/pages/user/UserPage.generated';

export type MutationName = keyof RootMutationType;
export type QueryName = keyof RootQueryType;
export type OperationName = QueryName | MutationName;

interface Cfg {
  localKVStore: KVStore;
  appLinks: ApolloLink[];
}

const AUTH_TOKEN_KEY = 'AUTH_TOKEN';

export default async function initialise({ localKVStore, appLinks }: Cfg) {
  let authToken = localKVStore.get(AUTH_TOKEN_KEY);

  const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData
  });

  const cache = new InMemoryCache({
    fragmentMatcher,
    cacheRedirects: {
      Query: {
        activity: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Activity', id: args.activityId }),
        collection: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Collection', id: args.collectionId }),
        community: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Community', id: args.communityId }),
        comment: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Comment', id: args.commentId }),
        user: (_, args, { getCacheKey }) => getCacheKey({ __typename: 'User', id: args.userId }),
        thread: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Thread', id: args.threadId }),
        resource: (_, args, { getCacheKey }) =>
          getCacheKey({ __typename: 'Resource', id: args.resourceId })
      }
    },
    dataIdFromObject: obj => {
      switch (obj.__typename) {
        case 'User': {
          //@ts-ignore
          const id: string = 'userId' in obj ? obj.userId : obj.id;
          return id;
        }
        //   case 'Me': return (obj as Me).email
        default:
          return defaultDataIdFromObject(obj); // fall back to default handling
      }
    }
  });

  const setToken = (token?: string | null | undefined) => {
    if (!token) {
      delToken();
    } else {
      authToken = token;
      localKVStore.set(AUTH_TOKEN_KEY, token);
    }
  };

  const delToken = () => {
    authToken = undefined;
    localKVStore.del(AUTH_TOKEN_KEY);
  };

  const setTokenLink = new ApolloLink((operation, nextLink) => {
    const { operationName } = operation;

    if (
      operationName === ConfirmEmailMutationName ||
      operationName === ChangePasswordMutationName ||
      operationName === ResetPwdMutationName ||
      operationName === UpdateLostPasswordMutationName ||
      operationName === AnonSignUpMutationName ||
      operationName === AnonLoginMutationName
    ) {
      delToken();
    }

    return nextLink(operation).map(resp => {
      if (
        operationName === AnonLoginMutationName ||
        operationName === ConfirmEmailMutationName ||
        operationName === CreateUserMutationName
      ) {
        if (operationName === CreateUserMutationName && !resp.data?.login?.token) {
          return resp;
        }

        setToken(
          resp.data?.login?.token ||
            resp.data?.confirmEmail?.accountId ||
            resp.data?.resetPassword?.token
        );
      }
      return resp;
    });
  });

  /**
   * This context link is used to assign the necessary Authorization header
   * to all HTTP requests to the GraphQL backend. In the case that the user
   * is authenticated it sets their access token as the value, otherwise null.
   */
  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : null
      }
    };
  });

  const errorLink = onError(errorResponse => {
    const { operation, response, graphQLErrors, networkError } = errorResponse;
    if (networkError) {
      // NETWORK ERROR
      const message =
        'statusCode' in networkError
          ? HttpStatus.getStatusText(networkError.statusCode)
          : networkError.message;
      return Observable.of<FetchResult>({
        errors: [new GraphQLError(`network error:${message}`)]
      });
    } else if (graphQLErrors) {
      // GRAPHQL ERROR
      const unexpectedError = graphQLErrors.find(
        err =>
          /Failed to fetch/gi.test(err.message) ||
          /JSON.parse/gi.test(err.message) ||
          /ServerParseError/gi.test(err.message)
      );
      return Observable.of<FetchResult>({
        errors: unexpectedError ? [new GraphQLError(`Unexpected error`)] : graphQLErrors
      });
    } else if (response?.errors) {
      // RESPONSE ERROR
      return Observable.of<FetchResult>({
        data: response.data,
        errors: response.errors
      });
    } else {
      // UNKNOWN ERROR
      const respStr = JSON.stringify(response, null, 2);
      const message = `unknown error:\noperation:${operation}\nresponse:${respStr}`;
      return Observable.of<FetchResult>({
        errors: [new GraphQLError(message)]
      });
    }
  });

  const clientAwarenessHeadersLinkForNonApollo3Server = setContext((_, ctx) => {
    const { headers } = ctx;
    return {
      ...ctx,
      clientAwareness: undefined,
      headers: {
        ...headers
      }
    };
  });

  const ALLOWED_ANONYMOUS_MUTATIONS = [
    AnonSignUpMutationName,
    AnonLoginMutationName,
    ResetPwdMutationName,
    ConfirmEmailMutationName,
    ChangePasswordMutationName,
    UpdateLostPasswordMutationName
  ];
  const alertBlockMutationsForAnonymousLink = new ApolloLink((operation, nextLink) => {
    if (!authToken) {
      const optype = getOpType(operation);
      if (
        optype === 'mutation' &&
        //@ts-ignore
        !ALLOWED_ANONYMOUS_MUTATIONS.includes(operation.operationName)
      ) {
        return Observable.of<FetchResult>({
          errors: [new GraphQLError('You should log in for performing this operation!')]
        });
      }
    }

    return nextLink(operation);
  });
  // used for graphql query and mutations
  const httpLink = ApolloLink.from(
    [
      IS_DEV ? apolloLogger : null,
      ...appLinks,
      alertBlockMutationsForAnonymousLink,
      errorLink,
      authLink,
      clientAwarenessHeadersLinkForNonApollo3Server,
      setTokenLink,
      createUploadLink({ uri: GRAPHQL_ENDPOINT!! })
    ].filter(Boolean)
  );

  // used for graphql subscriptions
  const absintheSocket = createAbsintheSocketLink(
    AbsintheSocket.create(new PhoenixSocket(PHOENIX_SOCKET_ENDPOINT))
  );
  // if the operation is a subscription then use
  // the absintheSocket otherwise use the httpLink
  const link = ApolloLink.split(
    operation => hasSubscription(operation.query),
    absintheSocket,
    httpLink
  );
  const client = new ApolloClient({
    cache,
    link,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'ignore'
      },
      query: {
        fetchPolicy: 'cache-first',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  });
  return {
    client
  };
}
