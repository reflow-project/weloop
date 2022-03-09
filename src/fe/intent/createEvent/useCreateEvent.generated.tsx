import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateEconomicEventMutationVariables = {
  note?: Types.Maybe<Types.Scalars['String']>,
  action: Types.Scalars['ID'],
  provider: Types.Scalars['ID'],
  receiver: Types.Scalars['ID'],
  hasUnit: Types.Scalars['ID'],
  hasPointInTime: Types.Scalars['DateTime'],
  hasNumericalValue: Types.Scalars['Float']
};


export type CreateEconomicEventMutation = (
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

export type IntentPanelQueryVariables = {
  intentId?: Types.Maybe<Types.Scalars['ID']>
};


export type IntentPanelQuery = (
  { __typename: 'RootQueryType' }
  & { intent: Types.Maybe<(
    { __typename: 'Intent' }
    & { resourceInventoriedAs: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id'>
    )> }
  )> }
);


export const CreateEconomicEventDocument = gql`
    mutation createEconomicEvent($note: String, $action: ID!, $provider: ID!, $receiver: ID!, $hasUnit: ID!, $hasPointInTime: DateTime!, $hasNumericalValue: Float!) {
  createEconomicEvent(event: {note: $note, action: $action, provider: $provider, receiver: $receiver, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}}) {
    economicEvent {
      id
    }
    economicResource {
      id
    }
  }
}
    `;
export type CreateEconomicEventMutationFn = ApolloReactCommon.MutationFunction<CreateEconomicEventMutation, CreateEconomicEventMutationVariables>;

/**
 * __useCreateEconomicEventMutation__
 *
 * To run a mutation, you first call `useCreateEconomicEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEconomicEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEconomicEventMutation, { data, loading, error }] = useCreateEconomicEventMutation({
 *   variables: {
 *      note: // value for 'note'
 *      action: // value for 'action'
 *      provider: // value for 'provider'
 *      receiver: // value for 'receiver'
 *      hasUnit: // value for 'hasUnit'
 *      hasPointInTime: // value for 'hasPointInTime'
 *      hasNumericalValue: // value for 'hasNumericalValue'
 *   },
 * });
 */
export function useCreateEconomicEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEconomicEventMutation, CreateEconomicEventMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateEconomicEventMutation, CreateEconomicEventMutationVariables>(CreateEconomicEventDocument, baseOptions);
      }
export type CreateEconomicEventMutationHookResult = ReturnType<typeof useCreateEconomicEventMutation>;
export type CreateEconomicEventMutationResult = ApolloReactCommon.MutationResult<CreateEconomicEventMutation>;
export type CreateEconomicEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEconomicEventMutation, CreateEconomicEventMutationVariables>;
export const IntentPanelDocument = gql`
    query intentPanel($intentId: ID) {
  intent(id: $intentId) {
    resourceInventoriedAs {
      id
    }
  }
}
    `;

/**
 * __useIntentPanelQuery__
 *
 * To run a query within a React component, call `useIntentPanelQuery` and pass it any options that fit your needs.
 * When your component renders, `useIntentPanelQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIntentPanelQuery({
 *   variables: {
 *      intentId: // value for 'intentId'
 *   },
 * });
 */
export function useIntentPanelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentPanelQuery, IntentPanelQueryVariables>) {
        return ApolloReactHooks.useQuery<IntentPanelQuery, IntentPanelQueryVariables>(IntentPanelDocument, baseOptions);
      }
export function useIntentPanelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IntentPanelQuery, IntentPanelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IntentPanelQuery, IntentPanelQueryVariables>(IntentPanelDocument, baseOptions);
        }
export type IntentPanelQueryHookResult = ReturnType<typeof useIntentPanelQuery>;
export type IntentPanelLazyQueryHookResult = ReturnType<typeof useIntentPanelLazyQuery>;
export type IntentPanelQueryResult = ApolloReactCommon.QueryResult<IntentPanelQuery, IntentPanelQueryVariables>;


export interface CreateEconomicEventMutationOperation {
  operationName: 'createEconomicEvent'
  result: CreateEconomicEventMutation
  variables: CreateEconomicEventMutationVariables
  type: 'mutation'
}
export const CreateEconomicEventMutationName:CreateEconomicEventMutationOperation['operationName'] = 'createEconomicEvent'

export const CreateEconomicEventMutationRefetch = (
  variables:CreateEconomicEventMutationVariables, 
  context?:any
)=>({
  query:CreateEconomicEventDocument,
  variables,
  context
})
      


export interface IntentPanelQueryOperation {
  operationName: 'intentPanel'
  result: IntentPanelQuery
  variables: IntentPanelQueryVariables
  type: 'query'
}
export const IntentPanelQueryName:IntentPanelQueryOperation['operationName'] = 'intentPanel'

export const IntentPanelQueryRefetch = (
  variables:IntentPanelQueryVariables, 
  context?:any
)=>({
  query:IntentPanelDocument,
  variables,
  context
})
      
