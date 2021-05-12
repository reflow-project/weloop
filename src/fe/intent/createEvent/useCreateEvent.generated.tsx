import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactHooks from '@apollo/react-hooks';
import {
  IntentPanelQuery,
  IntentPanelQueryVariables,
} from '../../../HOC/modules/IntentPanel/IntentPanel.generated'

export type CreateEventMutationVariables = {
  note: Types.Scalars['String'],
  action: Types.Scalars['ID'],
  provider: Types.Scalars['ID'],
  receiver: Types.Scalars['ID'],
  hasUnit: Types.Scalars['ID'],
  hasNumericalValue: Types.Scalars['Float']
};

export const mutationCreateEconomicEvent = gql`
mutation createEconomicEvent (
  $note: String,
  $action: ID!,
  $provider: ID!,
  $receiver: ID!,
  $hasUnit: ID!,
  $hasNumericalValue: Float!
) {
  createEconomicEvent (
    event: {
      note: $note,
      action: $action,
      provider: $provider,
      receiver: $receiver,
      resourceQuantity: {
      hasUnit: $hasUnit,
      hasNumericalValue: $hasNumericalValue
    }
  },
) {
    economicEvent {
      id
    },
    economicResource {
      id
    }
  }
}`


export const IntentPanelTrace = gql`
  query intentPanel($intentId: ID) {
  intent(id: $intentId) {
    resourceInventoriedAs {
      id
      trace {
        hasPointInTime
        action {
          label
        }
      }
    }
  }
}
`;


export function useCreateEconomicEvent(baseOptions?: ApolloReactHooks.MutationHookOptions<any, CreateEventMutationVariables>) {
  return ApolloReactHooks.useMutation<any, CreateEventMutationVariables>(mutationCreateEconomicEvent, baseOptions);
}

export function useIntentPanelTraceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentPanelQuery, IntentPanelQueryVariables>) {
  return ApolloReactHooks.useQuery<IntentPanelQuery, IntentPanelQueryVariables>(IntentPanelTrace, baseOptions);
}