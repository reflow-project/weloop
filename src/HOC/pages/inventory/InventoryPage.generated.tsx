import * as Types from '../../../graphql/types.generated';

import { OnhandQuantityFragment } from '../resource/EconomicResource.generated';
import { ResourceQuantityFragment } from '../resource/EconomicResource.generated';
import gql from 'graphql-tag';
import { ResourceQuantityFragmentDoc } from '../resource/EconomicResource.generated';
import { OnhandQuantityFragmentDoc } from '../resource/EconomicResource.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type EconomicResourcesFilteredQueryVariables = {
  agent?: Types.Maybe<Array<Types.Maybe<Types.Scalars['ID']>>>
};


export type EconomicResourcesFilteredQuery = (
  { __typename: 'RootQueryType' }
  & { economicResourcesFiltered: Types.Maybe<Array<Types.Maybe<(
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
  )>>> }
);


export const EconomicResourcesFilteredDocument = gql`
    query economicResourcesFiltered($agent: [ID]) {
  economicResourcesFiltered(agent: $agent) {
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

