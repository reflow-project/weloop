import * as Types from '../../../graphql/types.generated';

import { CommunityPreviewFragment } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CommunityPreviewFragmentDoc } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type UserFollowedCommunitiesQueryVariables = {
  userId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type UserFollowedCommunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { communityFollows: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & Pick<Types.FollowsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { context: { __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | (
          { __typename: 'Community' }
          & UserFollowedCommunityFragment
        ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' } }
      )> }
    )> }
  )> }
);

export type UserFollowedCommunityFragment = (
  { __typename: 'Community' }
  & CommunityPreviewFragment
);

export const UserFollowedCommunityFragmentDoc = gql`
    fragment UserFollowedCommunity on Community {
  ...CommunityPreview
}
    ${CommunityPreviewFragmentDoc}`;
export const UserFollowedCommunitiesDocument = gql`
    query userFollowedCommunities($userId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  user(userId: $userId) @connection(key: "userFollowedCommunities", filter: ["userId"]) {
    id
    communityFollows(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        context {
          ... on Community {
            ...UserFollowedCommunity
          }
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${UserFollowedCommunityFragmentDoc}`;

/**
 * __useUserFollowedCommunitiesQuery__
 *
 * To run a query within a React component, call `useUserFollowedCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFollowedCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFollowedCommunitiesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUserFollowedCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserFollowedCommunitiesQuery, UserFollowedCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<UserFollowedCommunitiesQuery, UserFollowedCommunitiesQueryVariables>(UserFollowedCommunitiesDocument, baseOptions);
      }
export function useUserFollowedCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserFollowedCommunitiesQuery, UserFollowedCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserFollowedCommunitiesQuery, UserFollowedCommunitiesQueryVariables>(UserFollowedCommunitiesDocument, baseOptions);
        }
export type UserFollowedCommunitiesQueryHookResult = ReturnType<typeof useUserFollowedCommunitiesQuery>;
export type UserFollowedCommunitiesLazyQueryHookResult = ReturnType<typeof useUserFollowedCommunitiesLazyQuery>;
export type UserFollowedCommunitiesQueryResult = ApolloReactCommon.QueryResult<UserFollowedCommunitiesQuery, UserFollowedCommunitiesQueryVariables>;


export interface UserFollowedCommunitiesQueryOperation {
  operationName: 'userFollowedCommunities'
  result: UserFollowedCommunitiesQuery
  variables: UserFollowedCommunitiesQueryVariables
  type: 'query'
}
export const UserFollowedCommunitiesQueryName:UserFollowedCommunitiesQueryOperation['operationName'] = 'userFollowedCommunities'

export const UserFollowedCommunitiesQueryRefetch = (
  variables:UserFollowedCommunitiesQueryVariables, 
  context?:any
)=>({
  query:UserFollowedCommunitiesDocument,
  variables,
  context
})
      
