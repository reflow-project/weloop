import * as Types from '../../../graphql/types.generated';

import { AddResourceCreateResourceMutationResultFragment } from '../../../HOC/modules/AddResource/addResource.generated';
import gql from 'graphql-tag';
import { AddResourceCreateResourceMutationResultFragmentDoc } from '../../../HOC/modules/AddResource/addResource.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type AddResourceCreateResourceMutationVariables = {
  contextId: Types.Scalars['String'],
  resource: Types.ResourceInput,
  icon?: Types.Maybe<Types.UploadInput>,
  content: Types.UploadInput
};


export type AddResourceCreateResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createResource: Types.Maybe<(
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id'>
    & AddResourceCreateResourceMutationResultFragment
  )> }
);


export const AddResourceCreateResourceDocument = gql`
    mutation addResourceCreateResource($contextId: String!, $resource: ResourceInput!, $icon: UploadInput, $content: UploadInput!) {
  createResource(contextId: $contextId, resource: $resource, content: $content, icon: $icon) {
    id
    ...AddResourceCreateResourceMutationResult
  }
}
    ${AddResourceCreateResourceMutationResultFragmentDoc}`;
export type AddResourceCreateResourceMutationFn = ApolloReactCommon.MutationFunction<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>;

/**
 * __useAddResourceCreateResourceMutation__
 *
 * To run a mutation, you first call `useAddResourceCreateResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddResourceCreateResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addResourceCreateResourceMutation, { data, loading, error }] = useAddResourceCreateResourceMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      resource: // value for 'resource'
 *      icon: // value for 'icon'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddResourceCreateResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>(AddResourceCreateResourceDocument, baseOptions);
      }
export type AddResourceCreateResourceMutationHookResult = ReturnType<typeof useAddResourceCreateResourceMutation>;
export type AddResourceCreateResourceMutationResult = ApolloReactCommon.MutationResult<AddResourceCreateResourceMutation>;
export type AddResourceCreateResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<AddResourceCreateResourceMutation, AddResourceCreateResourceMutationVariables>;


export interface AddResourceCreateResourceMutationOperation {
  operationName: 'addResourceCreateResource'
  result: AddResourceCreateResourceMutation
  variables: AddResourceCreateResourceMutationVariables
  type: 'mutation'
}
export const AddResourceCreateResourceMutationName:AddResourceCreateResourceMutationOperation['operationName'] = 'addResourceCreateResource'

export const AddResourceCreateResourceMutationRefetch = (
  variables:AddResourceCreateResourceMutationVariables, 
  context?:any
)=>({
  query:AddResourceCreateResourceDocument,
  variables,
  context
})
      
