import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type IntentItemQueryVariables = {
  intentId?: Types.Maybe<Types.Scalars['ID']>
};


export type IntentItemQuery = (
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


export const IntentItemDocument = gql`
    query intentItem($intentId: ID) {
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
 * __useIntentItemQuery__
 *
 * To run a query within a React component, call `useIntentItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useIntentItemQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIntentItemQuery({
 *   variables: {
 *      intentId: // value for 'intentId'
 *   },
 * });
 */
export function useIntentItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IntentItemQuery, IntentItemQueryVariables>) {
        return ApolloReactHooks.useQuery<IntentItemQuery, IntentItemQueryVariables>(IntentItemDocument, baseOptions);
      }
export function useIntentItemLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IntentItemQuery, IntentItemQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IntentItemQuery, IntentItemQueryVariables>(IntentItemDocument, baseOptions);
        }
export type IntentItemQueryHookResult = ReturnType<typeof useIntentItemQuery>;
export type IntentItemLazyQueryHookResult = ReturnType<typeof useIntentItemLazyQuery>;
export type IntentItemQueryResult = ApolloReactCommon.QueryResult<IntentItemQuery, IntentItemQueryVariables>;


export interface IntentItemQueryOperation {
  operationName: 'intentItem'
  result: IntentItemQuery
  variables: IntentItemQueryVariables
  type: 'query'
}
export const IntentItemQueryName:IntentItemQueryOperation['operationName'] = 'intentItem'

export const IntentItemQueryRefetch = (
  variables:IntentItemQueryVariables, 
  context?:any
)=>({
  query:IntentItemDocument,
  variables,
  context
})
      
