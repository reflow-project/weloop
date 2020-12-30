import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AddFeaturedMutationVariables = {
  contextId: Types.Scalars['String']
};


export type AddFeaturedMutation = (
  { __typename: 'RootMutationType' }
  & { createFeature: Types.Maybe<(
    { __typename: 'Feature' }
    & { context: Types.Maybe<{ __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
    ) | { __typename: 'Comment' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
  )> }
);


export const AddFeaturedDocument = gql`
    mutation addFeatured($contextId: String!) {
  createFeature(contextId: $contextId) {
    context {
      ... on Collection {
        id
      }
      ... on Community {
        id
      }
    }
  }
}
    `;
export type AddFeaturedMutationFn = ApolloReactCommon.MutationFunction<AddFeaturedMutation, AddFeaturedMutationVariables>;

/**
 * __useAddFeaturedMutation__
 *
 * To run a mutation, you first call `useAddFeaturedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFeaturedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFeaturedMutation, { data, loading, error }] = useAddFeaturedMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useAddFeaturedMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddFeaturedMutation, AddFeaturedMutationVariables>) {
        return ApolloReactHooks.useMutation<AddFeaturedMutation, AddFeaturedMutationVariables>(AddFeaturedDocument, baseOptions);
      }
export type AddFeaturedMutationHookResult = ReturnType<typeof useAddFeaturedMutation>;
export type AddFeaturedMutationResult = ApolloReactCommon.MutationResult<AddFeaturedMutation>;
export type AddFeaturedMutationOptions = ApolloReactCommon.BaseMutationOptions<AddFeaturedMutation, AddFeaturedMutationVariables>;


export interface AddFeaturedMutationOperation {
  operationName: 'addFeatured'
  result: AddFeaturedMutation
  variables: AddFeaturedMutationVariables
  type: 'mutation'
}
export const AddFeaturedMutationName:AddFeaturedMutationOperation['operationName'] = 'addFeatured'

export const AddFeaturedMutationRefetch = (
  variables:AddFeaturedMutationVariables, 
  context?:any
)=>({
  query:AddFeaturedDocument,
  variables,
  context
})
      
