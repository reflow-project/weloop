import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import gql from 'graphql-tag';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CollectionPreviewQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type CollectionPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id'>
    & CollectionPreviewFragment
  )> }
);


export const CollectionPreviewDocument = gql`
    query collectionPreview($collectionId: String!) {
  collection(collectionId: $collectionId) {
    id
    ...CollectionPreview
  }
}
    ${CollectionPreviewFragmentDoc}`;

/**
 * __useCollectionPreviewQuery__
 *
 * To run a query within a React component, call `useCollectionPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionPreviewQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionPreviewQuery, CollectionPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionPreviewQuery, CollectionPreviewQueryVariables>(CollectionPreviewDocument, baseOptions);
      }
export function useCollectionPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionPreviewQuery, CollectionPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionPreviewQuery, CollectionPreviewQueryVariables>(CollectionPreviewDocument, baseOptions);
        }
export type CollectionPreviewQueryHookResult = ReturnType<typeof useCollectionPreviewQuery>;
export type CollectionPreviewLazyQueryHookResult = ReturnType<typeof useCollectionPreviewLazyQuery>;
export type CollectionPreviewQueryResult = ApolloReactCommon.QueryResult<CollectionPreviewQuery, CollectionPreviewQueryVariables>;


export interface CollectionPreviewQueryOperation {
  operationName: 'collectionPreview'
  result: CollectionPreviewQuery
  variables: CollectionPreviewQueryVariables
  type: 'query'
}
export const CollectionPreviewQueryName:CollectionPreviewQueryOperation['operationName'] = 'collectionPreview'

export const CollectionPreviewQueryRefetch = (
  variables:CollectionPreviewQueryVariables, 
  context?:any
)=>({
  query:CollectionPreviewDocument,
  variables,
  context
})
      
