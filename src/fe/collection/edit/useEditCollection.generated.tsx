import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type EditCollectionQueryDataFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name' | 'summary' | 'updatedAt'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export type EditCollectionDataQueryVariables = {
  collectionId: Types.Scalars['String']
};


export type EditCollectionDataQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & EditCollectionQueryDataFragment
  )> }
);

export type EditCollectionMutationVariables = {
  collection: Types.CollectionUpdateInput,
  collectionId: Types.Scalars['String'],
  icon?: Types.Maybe<Types.UploadInput>
};


export type EditCollectionMutation = (
  { __typename: 'RootMutationType' }
  & { updateCollection: Types.Maybe<(
    { __typename: 'Collection' }
    & EditCollectionQueryDataFragment
  )> }
);

export const EditCollectionQueryDataFragmentDoc = gql`
    fragment EditCollectionQueryData on Collection {
  id
  name
  summary
  icon {
    id
    url
  }
  updatedAt
}
    `;
export const EditCollectionDataDocument = gql`
    query editCollectionData($collectionId: String!) {
  collection(collectionId: $collectionId) {
    ...EditCollectionQueryData
  }
}
    ${EditCollectionQueryDataFragmentDoc}`;

/**
 * __useEditCollectionDataQuery__
 *
 * To run a query within a React component, call `useEditCollectionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditCollectionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditCollectionDataQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useEditCollectionDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditCollectionDataQuery, EditCollectionDataQueryVariables>) {
        return ApolloReactHooks.useQuery<EditCollectionDataQuery, EditCollectionDataQueryVariables>(EditCollectionDataDocument, baseOptions);
      }
export function useEditCollectionDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditCollectionDataQuery, EditCollectionDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditCollectionDataQuery, EditCollectionDataQueryVariables>(EditCollectionDataDocument, baseOptions);
        }
export type EditCollectionDataQueryHookResult = ReturnType<typeof useEditCollectionDataQuery>;
export type EditCollectionDataLazyQueryHookResult = ReturnType<typeof useEditCollectionDataLazyQuery>;
export type EditCollectionDataQueryResult = ApolloReactCommon.QueryResult<EditCollectionDataQuery, EditCollectionDataQueryVariables>;
export const EditCollectionDocument = gql`
    mutation editCollection($collection: CollectionUpdateInput!, $collectionId: String!, $icon: UploadInput) {
  updateCollection(collection: $collection, collectionId: $collectionId, icon: $icon) {
    ...EditCollectionQueryData
  }
}
    ${EditCollectionQueryDataFragmentDoc}`;
export type EditCollectionMutationFn = ApolloReactCommon.MutationFunction<EditCollectionMutation, EditCollectionMutationVariables>;

/**
 * __useEditCollectionMutation__
 *
 * To run a mutation, you first call `useEditCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCollectionMutation, { data, loading, error }] = useEditCollectionMutation({
 *   variables: {
 *      collection: // value for 'collection'
 *      collectionId: // value for 'collectionId'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useEditCollectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCollectionMutation, EditCollectionMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCollectionMutation, EditCollectionMutationVariables>(EditCollectionDocument, baseOptions);
      }
export type EditCollectionMutationHookResult = ReturnType<typeof useEditCollectionMutation>;
export type EditCollectionMutationResult = ApolloReactCommon.MutationResult<EditCollectionMutation>;
export type EditCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCollectionMutation, EditCollectionMutationVariables>;


export interface EditCollectionDataQueryOperation {
  operationName: 'editCollectionData'
  result: EditCollectionDataQuery
  variables: EditCollectionDataQueryVariables
  type: 'query'
}
export const EditCollectionDataQueryName:EditCollectionDataQueryOperation['operationName'] = 'editCollectionData'

export const EditCollectionDataQueryRefetch = (
  variables:EditCollectionDataQueryVariables, 
  context?:any
)=>({
  query:EditCollectionDataDocument,
  variables,
  context
})
      


export interface EditCollectionMutationOperation {
  operationName: 'editCollection'
  result: EditCollectionMutation
  variables: EditCollectionMutationVariables
  type: 'mutation'
}
export const EditCollectionMutationName:EditCollectionMutationOperation['operationName'] = 'editCollection'

export const EditCollectionMutationRefetch = (
  variables:EditCollectionMutationVariables, 
  context?:any
)=>({
  query:EditCollectionDocument,
  variables,
  context
})
      
