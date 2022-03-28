import * as Types from '../../graphql/types.generated';

import { CollectionPageDataFragment } from '../../HOC/pages/collection/CollectionPage.generated';
import gql from 'graphql-tag';
import { CollectionPageDataFragmentDoc } from '../../HOC/pages/collection/CollectionPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CollectionDataQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type CollectionDataQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPageDataFragment
  )> }
);


export const CollectionDataDocument = gql`
    query collectionData($collectionId: String!) {
  collection(collectionId: $collectionId) {
    ...CollectionPageData
  }
}
    ${CollectionPageDataFragmentDoc}`;

/**
 * __useCollectionDataQuery__
 *
 * To run a query within a React component, call `useCollectionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionDataQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionDataQuery, CollectionDataQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionDataQuery, CollectionDataQueryVariables>(CollectionDataDocument, baseOptions);
      }
export function useCollectionDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionDataQuery, CollectionDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionDataQuery, CollectionDataQueryVariables>(CollectionDataDocument, baseOptions);
        }
export type CollectionDataQueryHookResult = ReturnType<typeof useCollectionDataQuery>;
export type CollectionDataLazyQueryHookResult = ReturnType<typeof useCollectionDataLazyQuery>;
export type CollectionDataQueryResult = ApolloReactCommon.QueryResult<CollectionDataQuery, CollectionDataQueryVariables>;


export interface CollectionDataQueryOperation {
  operationName: 'collectionData'
  result: CollectionDataQuery
  variables: CollectionDataQueryVariables
  type: 'query'
}
export const CollectionDataQueryName:CollectionDataQueryOperation['operationName'] = 'collectionData'

export const CollectionDataQueryRefetch = (
  variables:CollectionDataQueryVariables, 
  context?:any
)=>({
  query:CollectionDataDocument,
  variables,
  context
})
      
