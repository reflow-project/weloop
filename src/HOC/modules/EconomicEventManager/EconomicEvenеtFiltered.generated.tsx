import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type EconomicEventsFilteredQueryVariables = {
  action: Types.Scalars['ID']
};


export type EconomicEventsFilteredQuery = (
  { __typename: 'RootQueryType' }
  & { economicEventsFiltered: Types.Maybe<Array<(
    { __typename: 'EconomicEvent' }
    & Pick<Types.EconomicEvent, 'id'>
    & { provider: (
      { __typename: 'Organization' }
      & Pick<Types.Organization, 'id' | 'name'>
    ) | (
      { __typename: 'Person' }
      & Pick<Types.Person, 'id' | 'name'>
    ), receiver: (
      { __typename: 'Organization' }
      & Pick<Types.Organization, 'id' | 'name'>
    ) | (
      { __typename: 'Person' }
      & Pick<Types.Person, 'id' | 'name'>
    ) }
  )>> }
);


export const EconomicEventsFilteredDocument = gql`
    query economicEventsFiltered($action: ID!) {
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
    `;

/**
 * __useEconomicEventsFilteredQuery__
 *
 * To run a query within a React component, call `useEconomicEventsFilteredQuery` and pass it any options that fit your needs.
 * When your component renders, `useEconomicEventsFilteredQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEconomicEventsFilteredQuery({
 *   variables: {
 *      action: // value for 'action'
 *   },
 * });
 */
export function useEconomicEventsFilteredQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EconomicEventsFilteredQuery, EconomicEventsFilteredQueryVariables>) {
        return ApolloReactHooks.useQuery<EconomicEventsFilteredQuery, EconomicEventsFilteredQueryVariables>(EconomicEventsFilteredDocument, baseOptions);
      }
export function useEconomicEventsFilteredLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EconomicEventsFilteredQuery, EconomicEventsFilteredQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EconomicEventsFilteredQuery, EconomicEventsFilteredQueryVariables>(EconomicEventsFilteredDocument, baseOptions);
        }
export type EconomicEventsFilteredQueryHookResult = ReturnType<typeof useEconomicEventsFilteredQuery>;
export type EconomicEventsFilteredLazyQueryHookResult = ReturnType<typeof useEconomicEventsFilteredLazyQuery>;
export type EconomicEventsFilteredQueryResult = ApolloReactCommon.QueryResult<EconomicEventsFilteredQuery, EconomicEventsFilteredQueryVariables>;


export interface EconomicEventsFilteredQueryOperation {
  operationName: 'economicEventsFiltered'
  result: EconomicEventsFilteredQuery
  variables: EconomicEventsFilteredQueryVariables
  type: 'query'
}
export const EconomicEventsFilteredQueryName:EconomicEventsFilteredQueryOperation['operationName'] = 'economicEventsFiltered'

export const EconomicEventsFilteredQueryRefetch = (
  variables:EconomicEventsFilteredQueryVariables, 
  context?:any
)=>({
  query:EconomicEventsFilteredDocument,
  variables,
  context
})
      
