import * as Types from '../../../graphql/types.generated';

import { CommunityPreviewFragment } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import { SidebarFollowedCommunityFragment } from '../../../HOC/modules/Sidebar/Sidebar.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { SidebarFollowedCommunityFragmentDoc } from '../../../HOC/modules/Sidebar/Sidebar.generated';
import { CommunityPreviewFragmentDoc } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';




export type MyCommunityFollowsQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type MyCommunityFollowsQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & MyCommunityFollowsDataFragment
  )> }
);

export type MyCommunityFollowsDataFragment = (
  { __typename: 'Me' }
  & { user: (
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
          & MyFollowedCommunityDataFragment
        ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' } }
      )> }
    )> }
  ) }
);

export type MyFollowedCommunityDataFragment = (
  { __typename: 'Community' }
  & SidebarFollowedCommunityFragment
  & CommunityPreviewFragment
);

export const MyFollowedCommunityDataFragmentDoc = gql`
    fragment MyFollowedCommunityData on Community {
  ...SidebarFollowedCommunity
  ...CommunityPreview
}
    ${SidebarFollowedCommunityFragmentDoc}
${CommunityPreviewFragmentDoc}`;
export const MyCommunityFollowsDataFragmentDoc = gql`
    fragment MyCommunityFollowsData on Me {
  user {
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
            ...MyFollowedCommunityData
          }
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${MyFollowedCommunityDataFragmentDoc}`;
export const MyCommunityFollowsDocument = gql`
    query myCommunityFollows($limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  me @connection(key: "myCommunityFollows") {
    ...MyCommunityFollowsData
  }
}
    ${MyCommunityFollowsDataFragmentDoc}`;

/**
 * __useMyCommunityFollowsQuery__
 *
 * To run a query within a React component, call `useMyCommunityFollowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCommunityFollowsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCommunityFollowsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useMyCommunityFollowsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyCommunityFollowsQuery, MyCommunityFollowsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyCommunityFollowsQuery, MyCommunityFollowsQueryVariables>(MyCommunityFollowsDocument, baseOptions);
      }
export function useMyCommunityFollowsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyCommunityFollowsQuery, MyCommunityFollowsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyCommunityFollowsQuery, MyCommunityFollowsQueryVariables>(MyCommunityFollowsDocument, baseOptions);
        }
export type MyCommunityFollowsQueryHookResult = ReturnType<typeof useMyCommunityFollowsQuery>;
export type MyCommunityFollowsLazyQueryHookResult = ReturnType<typeof useMyCommunityFollowsLazyQuery>;
export type MyCommunityFollowsQueryResult = ApolloReactCommon.QueryResult<MyCommunityFollowsQuery, MyCommunityFollowsQueryVariables>;


export interface MyCommunityFollowsQueryOperation {
  operationName: 'myCommunityFollows'
  result: MyCommunityFollowsQuery
  variables: MyCommunityFollowsQueryVariables
  type: 'query'
}
export const MyCommunityFollowsQueryName:MyCommunityFollowsQueryOperation['operationName'] = 'myCommunityFollows'

export const MyCommunityFollowsQueryRefetch = (
  variables:MyCommunityFollowsQueryVariables, 
  context?:any
)=>({
  query:MyCommunityFollowsDocument,
  variables,
  context
})
      
