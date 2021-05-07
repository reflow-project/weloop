import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type IntentPanelQueryVariables = {
  intentId?: Types.Maybe<Types.Scalars['ID']>
};

export type EconomicEvent = {
  intentId?: Types.Maybe<Types.Scalars['ID']>
};


export type IntentPanelQuery = (
  { __typename: 'RootQueryType' }
  & { intent: Types.Maybe<(
    { __typename: 'Intent' }
    & Pick<Types.Intent, 'hasBeginning' | 'hasPointInTime' | 'name' | 'note' | 'image'>
    & { tags: Types.Maybe<Array<Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | (
      { __typename: 'Taggable' }
      & Pick<Types.Taggable, 'name'>
    ) | { __typename: 'User' }>>>, resourceQuantity: Types.Maybe<(
      { __typename: 'Measure' }
      & Pick<Types.Measure, 'hasNumericalValue'>
      & { hasUnit: (
        { __typename: 'Unit' }
        & Pick<Types.Unit, 'label'>
      ) }
    )>, resourceInventoriedAs: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id'>
      & { trace: Types.Maybe<Array<(
        { __typename: 'EconomicEvent' }
        & Pick<Types.EconomicEvent, 'hasPointInTime'>
        & { action: (
          { __typename: 'Action' }
          & Pick<Types.Action, 'label'>
        ) }
      )>> }
    )>, provider: Types.Maybe<(
      { __typename: 'Organization' }
      & Pick<Types.Organization, 'name' | 'image' | 'id'>
    ) | (
      { __typename: 'Person' }
      & Pick<Types.Person, 'name' | 'image' | 'id'>
    )> }
  )> }
);

export const IntentPanelDocument = gql`
    query intentPanel($intentId: ID) {
  intent(id: $intentId) {
    hasBeginning
    hasPointInTime
    name
    note
    image
    tags {
      ... on Taggable {
        name
      }
    }
    resourceQuantity {
      hasUnit {
        label
      }
      hasNumericalValue
    }
    resourceInventoriedAs {
      id
      trace {
        hasPointInTime
        action {
          label
        }
      }
    }
    provider {
      name
      image
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
export function useIntentActionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentPanelQuery, any>) {
  return ApolloReactHooks.useQuery<any, any>(  gql`{
  actions {
    label
    id
    note
  }
}`, baseOptions);
}

  export function useIntentPanelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IntentPanelQuery, IntentPanelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IntentPanelQuery, IntentPanelQueryVariables>(IntentPanelDocument, baseOptions);
        }
export type IntentPanelQueryHookResult = ReturnType<typeof useIntentPanelQuery>;
export type IntentPanelLazyQueryHookResult = ReturnType<typeof useIntentPanelLazyQuery>;
export type IntentPanelQueryResult = ApolloReactCommon.QueryResult<IntentPanelQuery, IntentPanelQueryVariables>;


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