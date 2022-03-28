import * as Types from '../../../graphql/types.generated';

import { CommunityPreviewFragment } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../../../HOC/modules/previews/community/CommunityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CommunityPreviewQueryVariables = {
  communityId: Types.Scalars['String']
};


export type CommunityPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & CommunityPreviewFragment
  )> }
);


export const CommunityPreviewDocument = gql`
    query communityPreview($communityId: String!) {
  community(communityId: $communityId) {
    id
    ...CommunityPreview
  }
}
    ${CommunityPreviewFragmentDoc}`;

/**
 * __useCommunityPreviewQuery__
 *
 * To run a query within a React component, call `useCommunityPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityPreviewQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityPreviewQuery, CommunityPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityPreviewQuery, CommunityPreviewQueryVariables>(CommunityPreviewDocument, baseOptions);
      }
export function useCommunityPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityPreviewQuery, CommunityPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityPreviewQuery, CommunityPreviewQueryVariables>(CommunityPreviewDocument, baseOptions);
        }
export type CommunityPreviewQueryHookResult = ReturnType<typeof useCommunityPreviewQuery>;
export type CommunityPreviewLazyQueryHookResult = ReturnType<typeof useCommunityPreviewLazyQuery>;
export type CommunityPreviewQueryResult = ApolloReactCommon.QueryResult<CommunityPreviewQuery, CommunityPreviewQueryVariables>;


export interface CommunityPreviewQueryOperation {
  operationName: 'communityPreview'
  result: CommunityPreviewQuery
  variables: CommunityPreviewQueryVariables
  type: 'query'
}
export const CommunityPreviewQueryName:CommunityPreviewQueryOperation['operationName'] = 'communityPreview'

export const CommunityPreviewQueryRefetch = (
  variables:CommunityPreviewQueryVariables, 
  context?:any
)=>({
  query:CommunityPreviewDocument,
  variables,
  context
})
      
