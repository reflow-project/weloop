import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type DeleteEconomicResourceMutationVariables = {
  id: Types.Scalars['ID']
};


export type DeleteEconomicResourceMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'deleteEconomicResource'>
);


export const DeleteEconomicResourceDocument = gql`
    mutation deleteEconomicResource($id: ID!) {
  deleteEconomicResource(id: $id)
}
    `;
export type DeleteEconomicResourceMutationFn = ApolloReactCommon.MutationFunction<DeleteEconomicResourceMutation, DeleteEconomicResourceMutationVariables>;

/**
 * __useDeleteEconomicResourceMutation__
 *
 * To run a mutation, you first call `useDeleteEconomicResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEconomicResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEconomicResourceMutation, { data, loading, error }] = useDeleteEconomicResourceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEconomicResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteEconomicResourceMutation, DeleteEconomicResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteEconomicResourceMutation, DeleteEconomicResourceMutationVariables>(DeleteEconomicResourceDocument, baseOptions);
      }
export type DeleteEconomicResourceMutationHookResult = ReturnType<typeof useDeleteEconomicResourceMutation>;
export type DeleteEconomicResourceMutationResult = ApolloReactCommon.MutationResult<DeleteEconomicResourceMutation>;
export type DeleteEconomicResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteEconomicResourceMutation, DeleteEconomicResourceMutationVariables>;


export interface DeleteEconomicResourceMutationOperation {
  operationName: 'deleteEconomicResource'
  result: DeleteEconomicResourceMutation
  variables: DeleteEconomicResourceMutationVariables
  type: 'mutation'
}
export const DeleteEconomicResourceMutationName:DeleteEconomicResourceMutationOperation['operationName'] = 'deleteEconomicResource'

export const DeleteEconomicResourceMutationRefetch = (
  variables:DeleteEconomicResourceMutationVariables, 
  context?:any
)=>({
  query:DeleteEconomicResourceDocument,
  variables,
  context
})
      
