import * as Types from '../../graphql/types.generated';

import { CommunityPageDataFragment } from '../../HOC/pages/community/CommunityPage.generated';
import gql from 'graphql-tag';
import { CommunityPageDataFragmentDoc } from '../../HOC/pages/community/CommunityPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CommunityDataQueryVariables = {
  communityId: Types.Scalars['String']
};


export type CommunityDataQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & CommunityPageDataFragment
  )> }
);


export const CommunityDataDocument = gql`
    query communityData($communityId: String!) {
  community(communityId: $communityId) {
    id
    ...CommunityPageData
  }
}
    ${CommunityPageDataFragmentDoc}`;

/**
 * __useCommunityDataQuery__
 *
 * To run a query within a React component, call `useCommunityDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityDataQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityDataQuery, CommunityDataQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityDataQuery, CommunityDataQueryVariables>(CommunityDataDocument, baseOptions);
      }
export function useCommunityDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityDataQuery, CommunityDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityDataQuery, CommunityDataQueryVariables>(CommunityDataDocument, baseOptions);
        }
export type CommunityDataQueryHookResult = ReturnType<typeof useCommunityDataQuery>;
export type CommunityDataLazyQueryHookResult = ReturnType<typeof useCommunityDataLazyQuery>;
export type CommunityDataQueryResult = ApolloReactCommon.QueryResult<CommunityDataQuery, CommunityDataQueryVariables>;


export interface CommunityDataQueryOperation {
  operationName: 'communityData'
  result: CommunityDataQuery
  variables: CommunityDataQueryVariables
  type: 'query'
}
export const CommunityDataQueryName:CommunityDataQueryOperation['operationName'] = 'communityData'

export const CommunityDataQueryRefetch = (
  variables:CommunityDataQueryVariables, 
  context?:any
)=>({
  query:CommunityDataDocument,
  variables,
  context
})
      
