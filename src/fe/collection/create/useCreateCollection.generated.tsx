import * as Types from '../../../graphql/types.generated';

import { CollectionPageDataFragment } from '../../../HOC/pages/collection/CollectionPage.generated';
import gql from 'graphql-tag';
import { CollectionPageDataFragmentDoc } from '../../../HOC/pages/collection/CollectionPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CreateCollectionMutationVariables = {
  collection: Types.CollectionInput,
  contextId: Types.Scalars['String'],
  icon?: Types.Maybe<Types.UploadInput>
};


export type CreateCollectionMutation = (
  { __typename: 'RootMutationType' }
  & { createCollection: Types.Maybe<(
    { __typename: 'Collection' }
    & CollectionPageDataFragment
  )> }
);


export const CreateCollectionDocument = gql`
    mutation createCollection($collection: CollectionInput!, $contextId: String!, $icon: UploadInput) {
  createCollection(collection: $collection, contextId: $contextId, icon: $icon) {
    ...CollectionPageData
  }
}
    ${CollectionPageDataFragmentDoc}`;
export type CreateCollectionMutationFn = ApolloReactCommon.MutationFunction<CreateCollectionMutation, CreateCollectionMutationVariables>;

/**
 * __useCreateCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutation, { data, loading, error }] = useCreateCollectionMutation({
 *   variables: {
 *      collection: // value for 'collection'
 *      contextId: // value for 'contextId'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useCreateCollectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCollectionMutation, CreateCollectionMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCollectionMutation, CreateCollectionMutationVariables>(CreateCollectionDocument, baseOptions);
      }
export type CreateCollectionMutationHookResult = ReturnType<typeof useCreateCollectionMutation>;
export type CreateCollectionMutationResult = ApolloReactCommon.MutationResult<CreateCollectionMutation>;
export type CreateCollectionMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCollectionMutation, CreateCollectionMutationVariables>;


export interface CreateCollectionMutationOperation {
  operationName: 'createCollection'
  result: CreateCollectionMutation
  variables: CreateCollectionMutationVariables
  type: 'mutation'
}
export const CreateCollectionMutationName:CreateCollectionMutationOperation['operationName'] = 'createCollection'

export const CreateCollectionMutationRefetch = (
  variables:CreateCollectionMutationVariables, 
  context?:any
)=>({
  query:CreateCollectionDocument,
  variables,
  context
})
      
