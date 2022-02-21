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
    & Pick<Types.EconomicResource, 'id' | 'image' | 'trackingIdentifier' | 'name' | 'note'>
    & { primaryAccountable: Types.Maybe<any>, stage: Types.Maybe<(
      { __typename: 'ProcessSpecification' }
      & Pick<Types.ProcessSpecification, 'id' | 'name' | 'note'>
    )>, contains: Types.Maybe<Array<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'image'>
    )>>, containedIn: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id' | 'name'>
    )>, currentLocation: Types.Maybe<(
      { __typename: 'SpatialThing' }
      & Pick<Types.SpatialThing, 'id' | 'name' | 'lat' | 'long'>
    )>, lot: Types.Maybe<(
      { __typename: 'ProductBatch' }
      & Pick<Types.ProductBatch, 'id' | 'expiryDate' | 'batchNumber'>
    )>, track: Types.Maybe<Array<(
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note' | 'hasPointInTime'>
      & { action: (
        { __typename: 'Action' }
        & Pick<Types.Action, 'id' | 'label'>
      ), toResourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
      )>, provider: any, receiver: any, atLocation: Types.Maybe<(
        { __typename: 'SpatialThing' }
        & Pick<Types.SpatialThing, 'id' | 'name'>
      )> }
      & ResourceQuantityFragment
    ) | { __typename: 'EconomicResource' } | { __typename: 'Process' }>>, trace: Types.Maybe<Array<(
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note' | 'hasPointInTime'>
      & { toResourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
      )>, action: (
        { __typename: 'Action' }
        & Pick<Types.Action, 'id' | 'label'>
      ), provider: any, receiver: any, atLocation: Types.Maybe<(
        { __typename: 'SpatialThing' }
        & Pick<Types.SpatialThing, 'id' | 'name'>
      )> }
      & ResourceQuantityFragment
    ) | { __typename: 'EconomicResource' } | { __typename: 'Process' }>>, unitOfEffort: Types.Maybe<(
      { __typename: 'Unit' }
      & Pick<Types.Unit, 'id' | 'label'>
    )> }
    & OnhandQuantityFragment
  )> }
);

export type OnhandQuantityFragment = (
  { __typename: 'EconomicResource' }
  & { onhandQuantity: Types.Maybe<(
    { __typename: 'Measure' }
    & Pick<Types.Measure, 'id' | 'hasNumericalValue'>
    & { hasUnit: (
      { __typename: 'Unit' }
      & Pick<Types.Unit, 'id' | 'label'>
    ) }
  )> }
);

export type ResourceQuantityFragment = (
  { __typename: 'EconomicEvent' }
  & { resourceQuantity: Types.Maybe<(
    { __typename: 'Measure' }
    & Pick<Types.Measure, 'hasNumericalValue' | 'canonicalUrl'>
    & { hasUnit: (
      { __typename: 'Unit' }
      & Pick<Types.Unit, 'id' | 'label' | 'symbol'>
    ) }
  )> }
);

export const OnhandQuantityFragmentDoc = gql`
    fragment OnhandQuantity on EconomicResource {
  onhandQuantity {
    id
    hasNumericalValue
    hasUnit {
      id
      label
    }
  }
}
    `;
export const ResourceQuantityFragmentDoc = gql`
    fragment ResourceQuantity on EconomicEvent {
  resourceQuantity {
    hasNumericalValue
    canonicalUrl
    hasUnit {
      id
      label
      symbol
    }
  }
}
    `;
export const EconomicResourceDocument = gql`
    query economicResource($id: ID!) {
  economicResource(id: $id) {
    id
    image
    trackingIdentifier
    primaryAccountable {
      id
      name
      image
      relationshipsAsObject {
        id
        relationship {
          id
          inverseRoleLabel
        }
      }
    }
    name
    note
    image
    stage {
      id
      name
      note
    }
    contains {
      image
    }
    stage {
      id
      name
      note
    }
    containedIn {
      id
      name
    }
    currentLocation {
      id
      name
      lat
      long
    }
    lot {
      id
      expiryDate
      batchNumber
    }
    track {
      __typename
      ... on EconomicEvent {
        id
        note
        action {
          id
          label
        }
        toResourceInventoriedAs {
          id
          name
        }
        hasPointInTime
        ...ResourceQuantity
        provider {
          id
          name
        }
        receiver {
          id
          name
        }
        atLocation {
          id
          name
        }
      }
    }
    trace {
      __typename
      ... on EconomicEvent {
        id
        note
        toResourceInventoriedAs {
          id
          name
        }
        hasPointInTime
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
        ...ResourceQuantity
        atLocation {
          id
          name
        }
      }
    }
    unitOfEffort {
      id
      label
    }
    ...OnhandQuantity
  }
}
    ${ResourceQuantityFragmentDoc}
${OnhandQuantityFragmentDoc}`;

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

