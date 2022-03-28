import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateIntentMutationVariables = {
  name: Types.Scalars['String'],
  action: Types.Scalars['String'],
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

export type CreateOfferMutationVariables = {
  action: Types.Scalars['String'],
  name: Types.Scalars['String'],
  communityId: Types.Scalars['ID'],
  note?: Types.Maybe<Types.Scalars['String']>,
  hasUnit: Types.Scalars['ID'],
  hasNumericalValue: Types.Scalars['Float'],
  atLocation?: Types.Maybe<Types.Scalars['ID']>
};


export type CreateOfferMutation = (
  { __typename: 'RootMutationType' }
  & { createOffer: Types.Maybe<(
    { __typename: 'IntentResponse' }
    & { intent: (
      { __typename: 'Intent' }
      & Pick<Types.Intent, 'id' | 'name' | 'note'>
      & { inScopeOf: Types.Maybe<Array<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Community' } | { __typename: 'Organisation' } | { __typename: 'Organization' } | { __typename: 'Person' } | { __typename: 'Taggable' } | { __typename: 'User' }>>, atLocation: Types.Maybe<(
        { __typename: 'SpatialThing' }
        & Pick<Types.SpatialThing, 'lat' | 'long' | 'alt'>
      )>, resourceQuantity: Types.Maybe<(
        { __typename: 'Measure' }
        & Pick<Types.Measure, 'hasNumericalValue'>
        & { hasUnit: (
          { __typename: 'Unit' }
          & Pick<Types.Unit, 'label' | 'id'>
        ) }
      )> }
    ) }
  )> }
);


export const CreateIntentDocument = gql`
    mutation createIntent($name: String!, $action: String!, $communityId: ID!, $note: String) {
  createIntent(intent: {action: $action, name: $name, inScopeOf: [$communityId], note: $note}) {
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
 *      action: // value for 'action'
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
export const CreateOfferDocument = gql`
    mutation createOffer($action: String!, $name: String!, $communityId: ID!, $note: String, $hasUnit: ID!, $hasNumericalValue: Float!, $atLocation: ID) {
  createOffer(intent: {action: $action, name: $name, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}, atLocation: $atLocation, inScopeOf: [$communityId], note: $note}) {
    intent {
      id
      inScopeOf {
        __typename
      }
      name
      note
      atLocation {
        lat
        long
        alt
      }
      resourceQuantity {
        hasUnit {
          label
          id
        }
        hasNumericalValue
      }
    }
  }
}
    `;
export type CreateOfferMutationFn = ApolloReactCommon.MutationFunction<CreateOfferMutation, CreateOfferMutationVariables>;

/**
 * __useCreateOfferMutation__
 *
 * To run a mutation, you first call `useCreateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfferMutation, { data, loading, error }] = useCreateOfferMutation({
 *   variables: {
 *      action: // value for 'action'
 *      name: // value for 'name'
 *      communityId: // value for 'communityId'
 *      note: // value for 'note'
 *      hasUnit: // value for 'hasUnit'
 *      hasNumericalValue: // value for 'hasNumericalValue'
 *      atLocation: // value for 'atLocation'
 *   },
 * });
 */
export function useCreateOfferMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOfferMutation, CreateOfferMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOfferMutation, CreateOfferMutationVariables>(CreateOfferDocument, baseOptions);
      }
export type CreateOfferMutationHookResult = ReturnType<typeof useCreateOfferMutation>;
export type CreateOfferMutationResult = ApolloReactCommon.MutationResult<CreateOfferMutation>;
export type CreateOfferMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOfferMutation, CreateOfferMutationVariables>;


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
      


export interface CreateOfferMutationOperation {
  operationName: 'createOffer'
  result: CreateOfferMutation
  variables: CreateOfferMutationVariables
  type: 'mutation'
}
export const CreateOfferMutationName:CreateOfferMutationOperation['operationName'] = 'createOffer'

export const CreateOfferMutationRefetch = (
  variables:CreateOfferMutationVariables, 
  context?:any
)=>({
  query:CreateOfferDocument,
  variables,
  context
})
      
