import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UpdateEconomicResourceMutationVariables = {
  id: Types.Scalars['ID'],
  note?: Types.Maybe<Types.Scalars['String']>,
  image?: Types.Maybe<Types.Scalars['URI']>
};


export type UpdateEconomicResourceMutation = (
  { __typename: 'RootMutationType' }
  & { updateEconomicResource: Types.Maybe<(
    { __typename: 'EconomicResourceResponse' }
    & { economicResource: (
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id'>
    ) }
  )> }
);


export const UpdateEconomicResourceDocument = gql`
    mutation updateEconomicResource($id: ID!, $note: String, $image: URI) {
  updateEconomicResource(resource: {id: $id, note: $note, image: $image}) {
    economicResource {
      id
    }
  }
}
    `;
export type UpdateEconomicResourceMutationFn = ApolloReactCommon.MutationFunction<UpdateEconomicResourceMutation, UpdateEconomicResourceMutationVariables>;

/**
 * __useUpdateEconomicResourceMutation__
 *
 * To run a mutation, you first call `useUpdateEconomicResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEconomicResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEconomicResourceMutation, { data, loading, error }] = useUpdateEconomicResourceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      note: // value for 'note'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useUpdateEconomicResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateEconomicResourceMutation, UpdateEconomicResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateEconomicResourceMutation, UpdateEconomicResourceMutationVariables>(UpdateEconomicResourceDocument, baseOptions);
      }
export type UpdateEconomicResourceMutationHookResult = ReturnType<typeof useUpdateEconomicResourceMutation>;
export type UpdateEconomicResourceMutationResult = ApolloReactCommon.MutationResult<UpdateEconomicResourceMutation>;
export type UpdateEconomicResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateEconomicResourceMutation, UpdateEconomicResourceMutationVariables>;


export interface UpdateEconomicResourceMutationOperation {
  operationName: 'updateEconomicResource'
  result: UpdateEconomicResourceMutation
  variables: UpdateEconomicResourceMutationVariables
  type: 'mutation'
}
export const UpdateEconomicResourceMutationName:UpdateEconomicResourceMutationOperation['operationName'] = 'updateEconomicResource'

export const UpdateEconomicResourceMutationRefetch = (
  variables:UpdateEconomicResourceMutationVariables, 
  context?:any
)=>({
  query:UpdateEconomicResourceDocument,
  variables,
  context
})
      
