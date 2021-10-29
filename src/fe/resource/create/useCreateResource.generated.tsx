import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateEconomicEventAndNewResourceMutationVariables = {
  note?: Types.Maybe<Types.Scalars['String']>,
  atLocation?: Types.Maybe<Types.Scalars['ID']>,
  action: Types.Scalars['ID'],
  provider: Types.Scalars['ID'],
  receiver: Types.Scalars['ID'],
  hasUnit: Types.Scalars['ID'],
  hasNumericalValue: Types.Scalars['Float'],
  name?: Types.Maybe<Types.Scalars['String']>,
  image?: Types.Maybe<Types.Scalars['URI']>,
  eventNote?: Types.Maybe<Types.Scalars['String']>,
  hasPointInTime?: Types.Maybe<Types.Scalars['DateTime']>
};


export type CreateEconomicEventAndNewResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & { economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'hasPointInTime'>
      & { track: Types.Maybe<Array<{ __typename: 'EconomicResource' } | { __typename: 'Process' }>> }
    ), economicResource: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id'>
    )> }
  )> }
);

export type CreateEconomicEventAndExistResourceMutationVariables = {
  id: Types.Scalars['ID'],
  action: Types.Scalars['ID'],
  provider: Types.Scalars['ID'],
  receiver: Types.Scalars['ID'],
  hasUnit: Types.Scalars['ID'],
  hasNumericalValue: Types.Scalars['Float'],
  eventNote?: Types.Maybe<Types.Scalars['String']>
};


export type CreateEconomicEventAndExistResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & { economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id'>
    ), economicResource: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id'>
    )> }
  )> }
);


export const CreateEconomicEventAndNewResourceDocument = gql`
    mutation createEconomicEventAndNewResource($note: String, $atLocation: ID, $action: ID!, $provider: ID!, $receiver: ID!, $hasUnit: ID!, $hasNumericalValue: Float!, $name: String, $image: URI, $eventNote: String, $hasPointInTime: DateTime) {
  createEconomicEvent(event: {action: $action, atLocation: $atLocation, provider: $provider, receiver: $receiver, note: $eventNote, hasPointInTime: $hasPointInTime, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}}, newInventoriedResource: {note: $note, name: $name, image: $image, currentLocation: $atLocation}) {
    economicEvent {
      id
      hasPointInTime
      track {
        __typename
      }
    }
    economicResource {
      id
    }
  }
}
    `;
export type CreateEconomicEventAndNewResourceMutationFn = ApolloReactCommon.MutationFunction<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>;

/**
 * __useCreateEconomicEventAndNewResourceMutation__
 *
 * To run a mutation, you first call `useCreateEconomicEventAndNewResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEconomicEventAndNewResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEconomicEventAndNewResourceMutation, { data, loading, error }] = useCreateEconomicEventAndNewResourceMutation({
 *   variables: {
 *      note: // value for 'note'
 *      atLocation: // value for 'atLocation'
 *      action: // value for 'action'
 *      provider: // value for 'provider'
 *      receiver: // value for 'receiver'
 *      hasUnit: // value for 'hasUnit'
 *      hasNumericalValue: // value for 'hasNumericalValue'
 *      name: // value for 'name'
 *      image: // value for 'image'
 *      eventNote: // value for 'eventNote'
 *      hasPointInTime: // value for 'hasPointInTime'
 *   },
 * });
 */
export function useCreateEconomicEventAndNewResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>(CreateEconomicEventAndNewResourceDocument, baseOptions);
      }
export type CreateEconomicEventAndNewResourceMutationHookResult = ReturnType<typeof useCreateEconomicEventAndNewResourceMutation>;
export type CreateEconomicEventAndNewResourceMutationResult = ApolloReactCommon.MutationResult<CreateEconomicEventAndNewResourceMutation>;
export type CreateEconomicEventAndNewResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>;
export const CreateEconomicEventAndExistResourceDocument = gql`
    mutation createEconomicEventAndExistResource($id: ID!, $action: ID!, $provider: ID!, $receiver: ID!, $hasUnit: ID!, $hasNumericalValue: Float!, $eventNote: String) {
  createEconomicEvent(event: {resourceInventoriedAs: $id, note: $eventNote, action: $action, provider: $provider, receiver: $receiver, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}}) {
    economicEvent {
      id
    }
    economicResource {
      id
    }
  }
}
    `;
export type CreateEconomicEventAndExistResourceMutationFn = ApolloReactCommon.MutationFunction<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>;

/**
 * __useCreateEconomicEventAndExistResourceMutation__
 *
 * To run a mutation, you first call `useCreateEconomicEventAndExistResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEconomicEventAndExistResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEconomicEventAndExistResourceMutation, { data, loading, error }] = useCreateEconomicEventAndExistResourceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      action: // value for 'action'
 *      provider: // value for 'provider'
 *      receiver: // value for 'receiver'
 *      hasUnit: // value for 'hasUnit'
 *      hasNumericalValue: // value for 'hasNumericalValue'
 *      eventNote: // value for 'eventNote'
 *   },
 * });
 */
export function useCreateEconomicEventAndExistResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>(CreateEconomicEventAndExistResourceDocument, baseOptions);
      }
export type CreateEconomicEventAndExistResourceMutationHookResult = ReturnType<typeof useCreateEconomicEventAndExistResourceMutation>;
export type CreateEconomicEventAndExistResourceMutationResult = ApolloReactCommon.MutationResult<CreateEconomicEventAndExistResourceMutation>;
export type CreateEconomicEventAndExistResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>;


export interface CreateEconomicEventAndNewResourceMutationOperation {
  operationName: 'createEconomicEventAndNewResource'
  result: CreateEconomicEventAndNewResourceMutation
  variables: CreateEconomicEventAndNewResourceMutationVariables
  type: 'mutation'
}
export const CreateEconomicEventAndNewResourceMutationName:CreateEconomicEventAndNewResourceMutationOperation['operationName'] = 'createEconomicEventAndNewResource'

export const CreateEconomicEventAndNewResourceMutationRefetch = (
  variables:CreateEconomicEventAndNewResourceMutationVariables, 
  context?:any
)=>({
  query:CreateEconomicEventAndNewResourceDocument,
  variables,
  context
})
      


export interface CreateEconomicEventAndExistResourceMutationOperation {
  operationName: 'createEconomicEventAndExistResource'
  result: CreateEconomicEventAndExistResourceMutation
  variables: CreateEconomicEventAndExistResourceMutationVariables
  type: 'mutation'
}
export const CreateEconomicEventAndExistResourceMutationName:CreateEconomicEventAndExistResourceMutationOperation['operationName'] = 'createEconomicEventAndExistResource'

export const CreateEconomicEventAndExistResourceMutationRefetch = (
  variables:CreateEconomicEventAndExistResourceMutationVariables, 
  context?:any
)=>({
  query:CreateEconomicEventAndExistResourceDocument,
  variables,
  context
})
      
