import * as Types from '../../../../graphql/types.generated';

import { UserPreviewFragment } from '../../../../HOC/modules/previews/user/UserPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { UserPreviewFragmentDoc } from '../../../../HOC/modules/previews/user/UserPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type UserFollowedUsersQueryVariables = {
  userId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type UserFollowedUsersQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { userFollows: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & Pick<Types.FollowsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { context: { __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
          { __typename: 'User' }
          & UserFollowedUserFragment
        ) }
      )> }
    )> }
  )> }
);

export type UserFollowedUserFragment = (
  { __typename: 'User' }
  & UserPreviewFragment
);

export const UserFollowedUserFragmentDoc = gql`
    fragment UserFollowedUser on User {
  ...UserPreview
}
    ${UserPreviewFragmentDoc}`;
export const UserFollowedUsersDocument = gql`
    query userFollowedUsers($userId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  user(userId: $userId) @connection(key: "userFollowedUsers", filter: ["userId"]) {
    id
    userFollows(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        context {
          ... on User {
            ...UserFollowedUser
          }
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${UserFollowedUserFragmentDoc}`;

/**
 * __useUserFollowedUsersQuery__
 *
 * To run a query within a React component, call `useUserFollowedUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowedUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowedUsersQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUserFollowedUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>(UserFollowedUsersDocument, baseOptions);
      }
export function useUserFollowedUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>(UserFollowedUsersDocument, baseOptions);
        }
export type UserFollowedUsersQueryHookResult = ReturnType<typeof useUserFollowedUsersQuery>;
export type UserFollowedUsersLazyQueryHookResult = ReturnType<typeof useUserFollowedUsersLazyQuery>;
export type UserFollowedUsersQueryResult = ApolloReactCommon.QueryResult<UserFollowedUsersQuery, UserFollowedUsersQueryVariables>;


export interface UserFollowedUsersQueryOperation {
  operationName: 'userFollowedUsers'
  result: UserFollowedUsersQuery
  variables: UserFollowedUsersQueryVariables
  type: 'query'
}
export const UserFollowedUsersQueryName:UserFollowedUsersQueryOperation['operationName'] = 'userFollowedUsers'

export const UserFollowedUsersQueryRefetch = (
  variables:UserFollowedUsersQueryVariables, 
  context?:any
)=>({
  query:UserFollowedUsersDocument,
  variables,
  context
})
      
