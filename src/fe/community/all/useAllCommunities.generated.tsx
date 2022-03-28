import * as Types from '../../../graphql/types.generated';

import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import { CommunityPreviewFragment } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type AllCommunitiesQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type AllCommunitiesQuery = (
  { __typename: 'RootQueryType' }
  & { communities: (
    { __typename: 'CommunitiesPage' }
    & Pick<Types.CommunitiesPage, 'totalCount'>
    & { edges: Array<(
      { __typename: 'Community' }
      & CommunityPreviewFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & FullPageInfoFragment
    ) }
  ) }
);


export const AllCommunitiesDocument = gql`
    query allCommunities($limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  communities(limit: $limit, before: $before, after: $after) @connection(key: "allCommunities") {
    edges {
      ...CommunityPreview
    }
    totalCount
    pageInfo {
      ...FullPageInfo
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${FullPageInfoFragmentDoc}`;

/**
 * __useAllCommunitiesQuery__
 *
 * To run a query within a React component, call `useAllCommunitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCommunitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCommunitiesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAllCommunitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllCommunitiesQuery, AllCommunitiesQueryVariables>(AllCommunitiesDocument, baseOptions);
      }
export function useAllCommunitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCommunitiesQuery, AllCommunitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllCommunitiesQuery, AllCommunitiesQueryVariables>(AllCommunitiesDocument, baseOptions);
        }
export type AllCommunitiesQueryHookResult = ReturnType<typeof useAllCommunitiesQuery>;
export type AllCommunitiesLazyQueryHookResult = ReturnType<typeof useAllCommunitiesLazyQuery>;
export type AllCommunitiesQueryResult = ApolloReactCommon.QueryResult<AllCommunitiesQuery, AllCommunitiesQueryVariables>;


export interface AllCommunitiesQueryOperation {
  operationName: 'allCommunities'
  result: AllCommunitiesQuery
  variables: AllCommunitiesQueryVariables
  type: 'query'
}
export const AllCommunitiesQueryName:AllCommunitiesQueryOperation['operationName'] = 'allCommunities'

export const AllCommunitiesQueryRefetch = (
  variables:AllCommunitiesQueryVariables, 
  context?:any
)=>({
  query:AllCommunitiesDocument,
  variables,
  context
})
      
