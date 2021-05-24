import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UserQueryVariables = {
  userId: Types.Scalars['String']
};


export type UserQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { edges: Array<(
        { __typename: 'Activity' }
        & Pick<Types.Activity, 'verb'>
        & { user: Types.Maybe<(
          { __typename: 'User' }
          & Pick<Types.User, 'name'>
          & { icon: Types.Maybe<(
            { __typename: 'Content' }
            & Pick<Types.Content, 'id'>
          )>, image: Types.Maybe<(
            { __typename: 'Content' }
            & Pick<Types.Content, 'id'>
          )> }
        )>, context: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | (
          { __typename: 'Comment' }
          & Pick<Types.Comment, 'content'>
        ) | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | (
          { __typename: 'Intent' }
          & Pick<Types.Intent, 'name' | 'canonicalUrl'>
        ) | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
      )>, pageInfo: (
        { __typename: 'PageInfo' }
        & Pick<Types.PageInfo, 'hasNextPage' | 'hasPreviousPage'>
      ) }
    )> }
  )> }
);


export const UserDocument = gql`
    query user($userId: String!) {
  user(userId: $userId) {
    outbox(limit: 15) {
      edges {
        user {
          icon {
            id
          }
          name
          image {
            id
          }
        }
        verb
        context {
          __typename
          ... on Intent {
            name
            canonicalUrl
          }
          ... on Comment {
            content
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;


export interface UserQueryOperation {
  operationName: 'user'
  result: UserQuery
  variables: UserQueryVariables
  type: 'query'
}
export const UserQueryName:UserQueryOperation['operationName'] = 'user'

export const UserQueryRefetch = (
  variables:UserQueryVariables, 
  context?:any
)=>({
  query:UserDocument,
  variables,
  context
})
      
