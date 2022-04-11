import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & UseMeDataFragment
  )> }
);

export type UseMeDataFragment = (
  { __typename: 'Me' }
  & Pick<Types.Me, 'accountId'>
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { profile: Types.Maybe<(
      { __typename: 'Profile' }
      & Pick<Types.Profile, 'image' | 'icon' | 'name' | 'summary'>
    )>, character: Types.Maybe<(
      { __typename: 'Character' }
      & Pick<Types.Character, 'username'>
    )> }
  )>, users: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { profile: Types.Maybe<(
      { __typename: 'Profile' }
      & Pick<Types.Profile, 'name' | 'summary' | 'icon' | 'image'>
    )>, character: Types.Maybe<(
      { __typename: 'Character' }
      & Pick<Types.Character, 'username'>
    )> }
  )>>>, flagsForModeration: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Activity' }
    & Pick<Types.Activity, 'id'>
    & { verb: Types.Maybe<(
      { __typename: 'Verb' }
      & Pick<Types.Verb, 'verb' | 'verbDisplay'>
    )>, subject: Types.Maybe<{ __typename: 'Category' } | { __typename: 'SpatialThing' } | { __typename: 'User' }>, object: Types.Maybe<{ __typename: 'Activity' } | { __typename: 'Category' } | { __typename: 'EconomicEvent' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Post' } | { __typename: 'Process' } | { __typename: 'SpatialThing' } | { __typename: 'Tag' } | { __typename: 'User' }> }
  )>>>, userFeed: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Activity' }
    & Pick<Types.Activity, 'id'>
    & { verb: Types.Maybe<(
      { __typename: 'Verb' }
      & Pick<Types.Verb, 'verb' | 'verbDisplay'>
    )>, object: Types.Maybe<{ __typename: 'Activity' } | { __typename: 'Category' } | { __typename: 'EconomicEvent' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Post' } | { __typename: 'Process' } | { __typename: 'SpatialThing' } | { __typename: 'Tag' } | { __typename: 'User' }> }
  )>>> }
);

export const UseMeDataFragmentDoc = gql`
    fragment UseMeData on Me {
  accountId
  user {
    id
    profile {
      image
      icon
      name
      summary
    }
    character {
      username
    }
  }
  users {
    id
    profile {
      name
      summary
      icon
      image
    }
    character {
      username
    }
  }
  flagsForModeration {
    id
    verb {
      verb
      verbDisplay
    }
    subject {
      __typename
    }
    object {
      __typename
    }
  }
  userFeed {
    id
    verb {
      verb
      verbDisplay
    }
    object {
      __typename
    }
  }
}
    `;
export const MeDocument = gql`
    query me {
  me {
    ...UseMeData
  }
}
    ${UseMeDataFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;


export interface MeQueryOperation {
  operationName: 'me'
  result: MeQuery
  variables: MeQueryVariables
  type: 'query'
}
export const MeQueryName:MeQueryOperation['operationName'] = 'me'

export const MeQueryRefetch = (
  variables:MeQueryVariables, 
  context?:any
)=>({
  query:MeDocument,
  variables,
  context
})
      
