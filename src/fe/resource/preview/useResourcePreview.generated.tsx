import * as Types from '../../../graphql/types.generated';

import { ResourcePreviewFragment } from '../../../HOC/modules/previews/resource/ResourcePreview.generated';
import gql from 'graphql-tag';
import { ResourcePreviewFragmentDoc } from '../../../HOC/modules/previews/resource/ResourcePreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type ResourcePreviewQueryVariables = {
  resourceId: Types.Scalars['String']
};


export type ResourcePreviewQuery = (
  { __typename: 'RootQueryType' }
  & { resource: Types.Maybe<(
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id'>
    & ResourcePreviewFragment
  )> }
);


export const ResourcePreviewDocument = gql`
    query resourcePreview($resourceId: String!) {
  resource(resourceId: $resourceId) {
    id
    ...ResourcePreview
  }
}
    ${ResourcePreviewFragmentDoc}`;

/**
 * __useResourcePreviewQuery__
 *
 * To run a query within a React component, call `useResourcePreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useResourcePreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResourcePreviewQuery({
 *   variables: {
 *      resourceId: // value for 'resourceId'
 *   },
 * });
 */
export function useResourcePreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ResourcePreviewQuery, ResourcePreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<ResourcePreviewQuery, ResourcePreviewQueryVariables>(ResourcePreviewDocument, baseOptions);
      }
export function useResourcePreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ResourcePreviewQuery, ResourcePreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ResourcePreviewQuery, ResourcePreviewQueryVariables>(ResourcePreviewDocument, baseOptions);
        }
export type ResourcePreviewQueryHookResult = ReturnType<typeof useResourcePreviewQuery>;
export type ResourcePreviewLazyQueryHookResult = ReturnType<typeof useResourcePreviewLazyQuery>;
export type ResourcePreviewQueryResult = ApolloReactCommon.QueryResult<ResourcePreviewQuery, ResourcePreviewQueryVariables>;


export interface ResourcePreviewQueryOperation {
  operationName: 'resourcePreview'
  result: ResourcePreviewQuery
  variables: ResourcePreviewQueryVariables
  type: 'query'
}
export const ResourcePreviewQueryName:ResourcePreviewQueryOperation['operationName'] = 'resourcePreview'

export const ResourcePreviewQueryRefetch = (
  variables:ResourcePreviewQueryVariables, 
  context?:any
)=>({
  query:ResourcePreviewDocument,
  variables,
  context
})
      
