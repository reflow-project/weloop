import * as Types from '../../../graphql/types.generated';
import gql from 'graphql-tag';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type IntentPanelQueryVariables = {
  intentId?: Types.Maybe<Types.Scalars['ID']>
};

export type EconomicEvent = {
  intentId?: Types.Maybe<Types.Scalars['ID']>
};


export const queryFilteredEconomicEvents = gql`
  query economicEventsFiltered($action: ID){
    economicEventsFiltered(action: $action) {
      id
      provider {
        id
        name
      }
      receiver {
        id
        name
      }
    }
  }
`

export const queryActions =gql`{
  actions {
    label
    id
    note
  }
}`

export const queryUnitsPages = gql `{
  unitsPages {
    edges {
      id
      symbol
      label
    }
  }
}`

export function useIntentActionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentPanelQueryVariables, any>) {
  return ApolloReactHooks.useQuery<any, any>( queryActions , baseOptions);
}

export function useFilteredEconomicEventsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentPanelQueryVariables, any>) {
  return ApolloReactHooks.useQuery<any, any>(queryFilteredEconomicEvents, baseOptions);
}

export function useUnitPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentPanelQueryVariables, any>) {
  return ApolloReactHooks.useQuery<any, any>(queryUnitsPages, baseOptions);
}