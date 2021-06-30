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
  image?: Types.Maybe<Types.Scalars['URI']>
};


export type CreateEconomicEventAndNewResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & { economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note'>
      & { receiver: (
        { __typename: 'Organization' }
        & Pick<Types.Organization, 'id' | 'name' | 'note'>
      ) | (
        { __typename: 'Person' }
        & Pick<Types.Person, 'id' | 'name' | 'note'>
      ), provider: (
        { __typename: 'Organization' }
        & Pick<Types.Organization, 'id' | 'name' | 'note'>
      ) | (
        { __typename: 'Person' }
        & Pick<Types.Person, 'id' | 'name' | 'note'>
      ), resourceQuantity: Types.Maybe<(
        { __typename: 'Measure' }
        & Pick<Types.Measure, 'hasNumericalValue'>
        & { hasUnit: (
          { __typename: 'Unit' }
          & Pick<Types.Unit, 'label' | 'symbol'>
        ) }
      )>, resourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name' | 'image'>
        & { onhandQuantity: Types.Maybe<(
          { __typename: 'Measure' }
          & Pick<Types.Measure, 'hasNumericalValue'>
          & { hasUnit: (
            { __typename: 'Unit' }
            & Pick<Types.Unit, 'label' | 'symbol'>
          ) }
        )>, accountingQuantity: Types.Maybe<(
          { __typename: 'Measure' }
          & Pick<Types.Measure, 'hasNumericalValue'>
          & { hasUnit: (
            { __typename: 'Unit' }
            & Pick<Types.Unit, 'label' | 'symbol'>
          ) }
        )> }
      )> }
    ) }
  )> }
);

export type CreateEconomicEventAndExistResourceMutationVariables = {
  id: Types.Scalars['ID'],
  note?: Types.Maybe<Types.Scalars['String']>,
  action: Types.Scalars['ID'],
  provider: Types.Scalars['ID'],
  receiver: Types.Scalars['ID'],
  hasUnit: Types.Scalars['ID'],
  hasNumericalValue: Types.Scalars['Float'],
  atLocation?: Types.Maybe<Types.Scalars['ID']>,
  name?: Types.Maybe<Types.Scalars['String']>,
  eventNote?: Types.Maybe<Types.Scalars['String']>,
  image?: Types.Maybe<Types.Scalars['URI']>
};


export type CreateEconomicEventAndExistResourceMutation = (
  { __typename: 'RootMutationType' }
  & { createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & { economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id'>
      & { action: (
        { __typename: 'Action' }
        & Pick<Types.Action, 'id'>
      ) }
    ), economicResource: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id'>
    )> }
  )> }
);

export type CreateDefaultEconomicEventMutationVariables = {
  name?: Types.Maybe<Types.Scalars['String']>,
  note?: Types.Maybe<Types.Scalars['String']>,
  action: Types.Scalars['ID']
};


export type CreateDefaultEconomicEventMutation = (
  { __typename: 'RootMutationType' }
  & { createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & { economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note'>
    ) }
  )> }
);


export const CreateEconomicEventAndNewResourceDocument = gql`
    mutation createEconomicEventAndNewResource($note: String, $atLocation: ID, $action: ID!, $provider: ID!, $receiver: ID!, $hasUnit: ID!, $hasNumericalValue: Float!, $name: String, $image: URI) {
  createEconomicEvent(event: {action: $action, atLocation: $atLocation, provider: $provider, receiver: $receiver, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}}, newInventoriedResource: {note: $note, name: $name, image: $image, currentLocation: $atLocation}) {
    economicEvent {
      id
      note
      receiver {
        id
        name
        note
      }
      provider {
        id
        name
        note
      }
      resourceQuantity {
        hasNumericalValue
        hasUnit {
          label
          symbol
        }
      }
      resourceInventoriedAs {
        id
        name
        image
        onhandQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
        accountingQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
      }
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
    mutation createEconomicEventAndExistResource($id: ID!, $note: String, $action: ID!, $provider: ID!, $receiver: ID!, $hasUnit: ID!, $hasNumericalValue: Float!, $atLocation: ID, $name: String, $eventNote: String, $image: URI) {
  createEconomicEvent(event: {resourceInventoriedAs: $id, note: $eventNote, action: $action, provider: $provider, receiver: $receiver, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}}, newInventoriedResource: {name: $name, note: $note, image: $image, currentLocation: $atLocation}) {
    economicEvent {
      id
      action {
        id
      }
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
 *      note: // value for 'note'
 *      action: // value for 'action'
 *      provider: // value for 'provider'
 *      receiver: // value for 'receiver'
 *      hasUnit: // value for 'hasUnit'
 *      hasNumericalValue: // value for 'hasNumericalValue'
 *      atLocation: // value for 'atLocation'
 *      name: // value for 'name'
 *      eventNote: // value for 'eventNote'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useCreateEconomicEventAndExistResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>(CreateEconomicEventAndExistResourceDocument, baseOptions);
      }
export type CreateEconomicEventAndExistResourceMutationHookResult = ReturnType<typeof useCreateEconomicEventAndExistResourceMutation>;
export type CreateEconomicEventAndExistResourceMutationResult = ApolloReactCommon.MutationResult<CreateEconomicEventAndExistResourceMutation>;
export type CreateEconomicEventAndExistResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEconomicEventAndExistResourceMutation, CreateEconomicEventAndExistResourceMutationVariables>;
export const CreateDefaultEconomicEventDocument = gql`
    mutation createDefaultEconomicEvent($name: String, $note: String, $action: ID!) {
  createEconomicEvent(event: {action: $action, note: $note}, newInventoriedResource: {name: $name, note: $note}) {
    economicEvent {
      id
      note
    }
  }
}
    `;
export type CreateDefaultEconomicEventMutationFn = ApolloReactCommon.MutationFunction<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>;

/**
 * __useCreateDefaultEconomicEventMutation__
 *
 * To run a mutation, you first call `useCreateDefaultEconomicEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDefaultEconomicEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDefaultEconomicEventMutation, { data, loading, error }] = useCreateDefaultEconomicEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      note: // value for 'note'
 *      action: // value for 'action'
 *   },
 * });
 */
export function useCreateDefaultEconomicEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>(CreateDefaultEconomicEventDocument, baseOptions);
      }
export type CreateDefaultEconomicEventMutationHookResult = ReturnType<typeof useCreateDefaultEconomicEventMutation>;
export type CreateDefaultEconomicEventMutationResult = ApolloReactCommon.MutationResult<CreateDefaultEconomicEventMutation>;
export type CreateDefaultEconomicEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>;


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
      


export interface CreateDefaultEconomicEventMutationOperation {
  operationName: 'createDefaultEconomicEvent'
  result: CreateDefaultEconomicEventMutation
  variables: CreateDefaultEconomicEventMutationVariables
  type: 'mutation'
}
export const CreateDefaultEconomicEventMutationName:CreateDefaultEconomicEventMutationOperation['operationName'] = 'createDefaultEconomicEvent'

export const CreateDefaultEconomicEventMutationRefetch = (
  variables:CreateDefaultEconomicEventMutationVariables, 
  context?:any
)=>({
  query:CreateDefaultEconomicEventDocument,
  variables,
  context
})
      
