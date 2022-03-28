import * as Types from '../../../graphql/types.generated';

import { CommunityPageThreadFragment } from '../../../HOC/pages/community/CommunityPage.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CommunityPageThreadFragmentDoc } from '../../../HOC/pages/community/CommunityPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type CommunityThreadsQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type CommunityThreadsQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { threads: Types.Maybe<(
      { __typename: 'ThreadsPage' }
      & Pick<Types.ThreadsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Thread' }
        & CommunityThreadFragment
      )> }
    )> }
  )> }
);

export type CommunityThreadFragment = (
  { __typename: 'Thread' }
  & CommunityPageThreadFragment
);

export const CommunityThreadFragmentDoc = gql`
    fragment CommunityThread on Thread {
  ...CommunityPageThread
}
    ${CommunityPageThreadFragmentDoc}`;
export const CommunityThreadsDocument = gql`
    query communityThreads($communityId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  community(communityId: $communityId) @connection(key: "communityThreads", filter: ["communityId"]) {
    id
    threads(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CommunityThread
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CommunityThreadFragmentDoc}`;

/**
 * __useCommunityThreadsQuery__
 *
 * To run a query within a React component, call `useCommunityThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityThreadsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityThreadsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityThreadsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityThreadsQuery, CommunityThreadsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityThreadsQuery, CommunityThreadsQueryVariables>(CommunityThreadsDocument, baseOptions);
      }
export function useCommunityThreadsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityThreadsQuery, CommunityThreadsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityThreadsQuery, CommunityThreadsQueryVariables>(CommunityThreadsDocument, baseOptions);
        }
export type CommunityThreadsQueryHookResult = ReturnType<typeof useCommunityThreadsQuery>;
export type CommunityThreadsLazyQueryHookResult = ReturnType<typeof useCommunityThreadsLazyQuery>;
export type CommunityThreadsQueryResult = ApolloReactCommon.QueryResult<CommunityThreadsQuery, CommunityThreadsQueryVariables>;


export interface CommunityThreadsQueryOperation {
  operationName: 'communityThreads'
  result: CommunityThreadsQuery
  variables: CommunityThreadsQueryVariables
  type: 'query'
}
export const CommunityThreadsQueryName:CommunityThreadsQueryOperation['operationName'] = 'communityThreads'

export const CommunityThreadsQueryRefetch = (
  variables:CommunityThreadsQueryVariables, 
  context?:any
)=>({
  query:CommunityThreadsDocument,
  variables,
  context
})
      
