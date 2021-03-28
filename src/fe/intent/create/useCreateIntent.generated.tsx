import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateIntentMutationVariables = {
  name: Types.Scalars['String'],
  communityId: Types.Scalars['ID'],
  note?: Types.Maybe<Types.Scalars['String']>
};


export type CreateIntentMutation = (
  { __typename: 'RootMutationType' }
  & { createIntent: Types.Maybe<(
    { __typename: 'IntentResponse' }
    & { intent: (
      { __typename: 'Intent' }
      & Pick<Types.Intent, 'id' | 'name' | 'note'>
      & { inScopeOf: Types.Maybe<Array<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Community' } | { __typename: 'Organisation' } | { __typename: 'Organization' } | { __typename: 'Person' } | { __typename: 'Taggable' } | { __typename: 'User' }>> }
    ) }
  )> }
);


export const CreateIntentDocument = gql`
    mutation createIntent($name: String!, $communityId: ID!, $note: String) {
  createIntent(intent: {action: "produced", name: $name, inScopeOf: [$communityId], note: $note}) {
    intent {
      id
      inScopeOf {
        __typename
      }
      name
      note
    }
  }
}
    `;
export type CreateIntentMutationFn = ApolloReactCommon.MutationFunction<CreateIntentMutation, CreateIntentMutationVariables>;

/**
 * __useCreateIntentMutation__
 *
 * To run a mutation, you first call `useCreateIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIntentMutation, { data, loading, error }] = useCreateIntentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      communityId: // value for 'communityId'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useCreateIntentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateIntentMutation, CreateIntentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateIntentMutation, CreateIntentMutationVariables>(CreateIntentDocument, baseOptions);
      }
export type CreateIntentMutationHookResult = ReturnType<typeof useCreateIntentMutation>;
export type CreateIntentMutationResult = ApolloReactCommon.MutationResult<CreateIntentMutation>;
export type CreateIntentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateIntentMutation, CreateIntentMutationVariables>;


export interface CreateIntentMutationOperation {
  operationName: 'createIntent'
  result: CreateIntentMutation
  variables: CreateIntentMutationVariables
  type: 'mutation'
}
export const CreateIntentMutationName:CreateIntentMutationOperation['operationName'] = 'createIntent'

export const CreateIntentMutationRefetch = (
  variables:CreateIntentMutationVariables, 
  context?:any
)=>({
  query:CreateIntentDocument,
  variables,
  context
})
      
