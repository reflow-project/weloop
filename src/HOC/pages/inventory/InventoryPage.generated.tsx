import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type EconomicResourcesFilteredQueryVariables = {
  agent?: Types.Maybe<Array<Types.Maybe<Types.Scalars['ID']>>>
};


export type EconomicResourcesFilteredQuery = (
  { __typename: 'RootQueryType' }
  & { economicResourcesFiltered: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'EconomicResource' }
    & Pick<Types.EconomicResource, 'id' | 'name' | 'note' | 'image'>
    & { currentLocation: Types.Maybe<(
      { __typename: 'SpatialThing' }
      & Pick<Types.SpatialThing, 'name'>
    )>, onhandQuantity: Types.Maybe<(
      { __typename: 'Measure' }
      & Pick<Types.Measure, 'hasNumericalValue'>
      & { hasUnit: (
        { __typename: 'Unit' }
        & Pick<Types.Unit, 'id' | 'label'>
      ) }
    )>, primaryAccountable: Types.Maybe<(
      { __typename: 'Organization' }
      & Pick<Types.Organization, 'id' | 'name'>
    ) | (
      { __typename: 'Person' }
      & Pick<Types.Person, 'id' | 'name'>
    )> }
  )>>> }
);


export const EconomicResourcesFilteredDocument = gql`
    query economicResourcesFiltered($agent: [ID]) {
  economicResourcesFiltered(agent: $agent) {
    id
    name
    note
    image
    currentLocation {
      name
    }
    onhandQuantity {
      hasUnit {
        id
        label
      }
      hasNumericalValue
    }
    primaryAccountable {
      id
      name
    }
  }
}
    `;

/**
 * __useEconomicResourcesFilteredQuery__
 *
 * To run a query within a React component, call `useEconomicResourcesFilteredQuery` and pass it any options that fit your needs.
 * When your component renders, `useEconomicResourcesFilteredQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEconomicResourcesFilteredQuery({
 *   variables: {
 *      agent: // value for 'agent'
 *   },
 * });
 */
export function useEconomicResourcesFilteredQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EconomicResourcesFilteredQuery, EconomicResourcesFilteredQueryVariables>) {
        return ApolloReactHooks.useQuery<EconomicResourcesFilteredQuery, EconomicResourcesFilteredQueryVariables>(EconomicResourcesFilteredDocument, baseOptions);
      }
export function useEconomicResourcesFilteredLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EconomicResourcesFilteredQuery, EconomicResourcesFilteredQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EconomicResourcesFilteredQuery, EconomicResourcesFilteredQueryVariables>(EconomicResourcesFilteredDocument, baseOptions);
        }
export type EconomicResourcesFilteredQueryHookResult = ReturnType<typeof useEconomicResourcesFilteredQuery>;
export type EconomicResourcesFilteredLazyQueryHookResult = ReturnType<typeof useEconomicResourcesFilteredLazyQuery>;
export type EconomicResourcesFilteredQueryResult = ApolloReactCommon.QueryResult<EconomicResourcesFilteredQuery, EconomicResourcesFilteredQueryVariables>;


export interface EconomicResourcesFilteredQueryOperation {
  operationName: 'economicResourcesFiltered'
  result: EconomicResourcesFilteredQuery
  variables: EconomicResourcesFilteredQueryVariables
  type: 'query'
}
export const EconomicResourcesFilteredQueryName:EconomicResourcesFilteredQueryOperation['operationName'] = 'economicResourcesFiltered'

export const EconomicResourcesFilteredQueryRefetch = (
  variables:EconomicResourcesFilteredQueryVariables, 
  context?:any
)=>({
  query:EconomicResourcesFilteredDocument,
  variables,
  context
})
      
