import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UserDataQueryVariables = {
  username: Types.Scalars['String']
};


export type UserDataQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & { userActivities: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Activity' }
      & Pick<Types.Activity, 'id'>
      & { verb: Types.Maybe<(
        { __typename: 'Verb' }
        & Pick<Types.Verb, 'verb' | 'verbDisplay'>
      )> }
    )>>>, posts: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Post' }
      & Pick<Types.Post, 'id'>
      & { postContent: Types.Maybe<(
        { __typename: 'PostContent' }
        & Pick<Types.PostContent, 'htmlBody' | 'summary' | 'title'>
      )> }
    )>>> }
    & HeroUserUserDataFragment
  )> }
);

export type HeroUserUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id'>
  & { profile: Types.Maybe<(
    { __typename: 'Profile' }
    & Pick<Types.Profile, 'name' | 'summary'>
  )>, character: Types.Maybe<(
    { __typename: 'Character' }
    & Pick<Types.Character, 'username'>
  )> }
);

export const HeroUserUserDataFragmentDoc = gql`
    fragment HeroUserUserData on User {
  id
  profile {
    name
    summary
  }
  character {
    username
  }
}
    `;
export const UserDataDocument = gql`
    query userData($username: String!) {
  user(filter: {username: $username}) {
    ...HeroUserUserData
    userActivities {
      id
      verb {
        verb
        verbDisplay
      }
    }
    posts {
      id
      postContent {
        htmlBody
        summary
        title
      }
    }
  }
}
    ${HeroUserUserDataFragmentDoc}`;

/**
 * __useUserDataQuery__
 *
 * To run a query within a React component, call `useUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
        return ApolloReactHooks.useQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
      }
export function useUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
        }
export type UserDataQueryHookResult = ReturnType<typeof useUserDataQuery>;
export type UserDataLazyQueryHookResult = ReturnType<typeof useUserDataLazyQuery>;
export type UserDataQueryResult = ApolloReactCommon.QueryResult<UserDataQuery, UserDataQueryVariables>;


export interface UserDataQueryOperation {
  operationName: 'userData'
  result: UserDataQuery
  variables: UserDataQueryVariables
  type: 'query'
}
export const UserDataQueryName:UserDataQueryOperation['operationName'] = 'userData'

export const UserDataQueryRefetch = (
  variables:UserDataQueryVariables, 
  context?:any
)=>({
  query:UserDataDocument,
  variables,
  context
})
      
