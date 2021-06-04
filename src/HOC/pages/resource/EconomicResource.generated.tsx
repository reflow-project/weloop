import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type EconomicResourceQueryVariables = {
  id: Types.Scalars['ID']
};


export type EconomicResourceQuery = (
  { __typename: 'RootQueryType' }
  & { economicResource: Types.Maybe<(
    { __typename: 'EconomicResource' }
    & Pick<Types.EconomicResource, 'id' | 'name' | 'note' | 'image'>
    & { currentLocation: Types.Maybe<(
      { __typename: 'SpatialThing' }
      & Pick<Types.SpatialThing, 'id' | 'name' | 'lat' | 'long'>
    )>, track: Types.Maybe<Array<(
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note'>
      & { resourceQuantity: Types.Maybe<(
        { __typename: 'Measure' }
        & Pick<Types.Measure, 'id' | 'hasNumericalValue'>
        & { hasUnit: (
          { __typename: 'Unit' }
          & Pick<Types.Unit, 'id' | 'label'>
        ) }
      )>, action: (
        { __typename: 'Action' }
        & Pick<Types.Action, 'id' | 'label'>
      ), provider: (
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
    )>>, onhandQuantity: Types.Maybe<(
      { __typename: 'Measure' }
      & Pick<Types.Measure, 'id' | 'hasNumericalValue'>
      & { hasUnit: (
        { __typename: 'Unit' }
        & Pick<Types.Unit, 'id' | 'label'>
      ) }
    )> }
  )> }
);


export const EconomicResourceDocument = gql`
    query economicResource($id: ID!) {
  economicResource(id: $id) {
    id
    name
    note
    image
    currentLocation {
      id
      name
      lat
      long
    }
    track {
      id
      note
      resourceQuantity {
        id
        hasUnit {
          id
          label
        }
        hasNumericalValue
      }
      action {
        id
        label
      }
      provider {
        id
        name
      }
      receiver {
        id
        name
      }
    }
    onhandQuantity {
      id
      hasNumericalValue
      hasUnit {
        id
        label
      }
    }
  }
}
    `;

/**
 * __useEconomicResourceQuery__
 *
 * To run a query within a React component, call `useEconomicResourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useEconomicResourceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEconomicResourceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEconomicResourceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EconomicResourceQuery, EconomicResourceQueryVariables>) {
        return ApolloReactHooks.useQuery<EconomicResourceQuery, EconomicResourceQueryVariables>(EconomicResourceDocument, baseOptions);
      }
export function useEconomicResourceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EconomicResourceQuery, EconomicResourceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EconomicResourceQuery, EconomicResourceQueryVariables>(EconomicResourceDocument, baseOptions);
        }
export type EconomicResourceQueryHookResult = ReturnType<typeof useEconomicResourceQuery>;
export type EconomicResourceLazyQueryHookResult = ReturnType<typeof useEconomicResourceLazyQuery>;
export type EconomicResourceQueryResult = ApolloReactCommon.QueryResult<EconomicResourceQuery, EconomicResourceQueryVariables>;


export interface EconomicResourceQueryOperation {
  operationName: 'economicResource'
  result: EconomicResourceQuery
  variables: EconomicResourceQueryVariables
  type: 'query'
}
export const EconomicResourceQueryName:EconomicResourceQueryOperation['operationName'] = 'economicResource'

export const EconomicResourceQueryRefetch = (
  variables:EconomicResourceQueryVariables, 
  context?:any
)=>({
  query:EconomicResourceDocument,
  variables,
  context
})
      
