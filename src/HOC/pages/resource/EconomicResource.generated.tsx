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
    & Pick<Types.EconomicResource, 'id' | 'trackingIdentifier' | 'name' | 'note' | 'image'>
    & { primaryAccountable: Types.Maybe<(
      { __typename: 'Organization' }
      & Pick<Types.Organization, 'id' | 'name' | 'image'>
      & { relationshipsAsObject: Types.Maybe<Array<(
        { __typename: 'AgentRelationship' }
        & Pick<Types.AgentRelationship, 'id'>
        & { relationship: (
          { __typename: 'AgentRelationshipRole' }
          & Pick<Types.AgentRelationshipRole, 'id' | 'inverseRoleLabel'>
        ) }
      )>> }
    ) | (
      { __typename: 'Person' }
      & Pick<Types.Person, 'id' | 'name' | 'image'>
      & { relationshipsAsObject: Types.Maybe<Array<(
        { __typename: 'AgentRelationship' }
        & Pick<Types.AgentRelationship, 'id'>
        & { relationship: (
          { __typename: 'AgentRelationshipRole' }
          & Pick<Types.AgentRelationshipRole, 'id' | 'inverseRoleLabel'>
        ) }
      )>> }
    )>, stage: Types.Maybe<(
      { __typename: 'ProcessSpecification' }
      & Pick<Types.ProcessSpecification, 'id' | 'name' | 'note'>
    )>, contains: Types.Maybe<Array<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'image'>
      & { track: Types.Maybe<Array<(
        { __typename: 'EconomicEvent' }
        & Pick<Types.EconomicEvent, 'id'>
        & { action: (
          { __typename: 'Action' }
          & Pick<Types.Action, 'id'>
        ), fulfills: Types.Maybe<Array<(
          { __typename: 'Fulfillment' }
          & { effortQuantity: Types.Maybe<(
            { __typename: 'Measure' }
            & Pick<Types.Measure, 'id'>
            & { hasUnit: (
              { __typename: 'Unit' }
              & Pick<Types.Unit, 'id' | 'label' | 'symbol'>
            ) }
          )> }
        )>> }
      )>> }
    )>>, containedIn: Types.Maybe<(
      { __typename: 'EconomicResource' }
      & Pick<Types.EconomicResource, 'id' | 'name'>
      & { trace: Types.Maybe<Array<(
        { __typename: 'EconomicEvent' }
        & Pick<Types.EconomicEvent, 'id' | 'note'>
      )>>, track: Types.Maybe<Array<(
        { __typename: 'EconomicEvent' }
        & Pick<Types.EconomicEvent, 'id' | 'note'>
      )>> }
    )>, currentLocation: Types.Maybe<(
      { __typename: 'SpatialThing' }
      & Pick<Types.SpatialThing, 'id' | 'name' | 'lat' | 'long'>
    )>, lot: Types.Maybe<(
      { __typename: 'ProductBatch' }
      & Pick<Types.ProductBatch, 'id' | 'expiryDate' | 'batchNumber'>
    )>, trace: Types.Maybe<Array<(
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note'>
      & { action: (
        { __typename: 'Action' }
        & Pick<Types.Action, 'id' | 'label'>
      ), resourceQuantity: Types.Maybe<(
        { __typename: 'Measure' }
        & Pick<Types.Measure, 'id' | 'hasNumericalValue'>
        & { hasUnit: (
          { __typename: 'Unit' }
          & Pick<Types.Unit, 'id' | 'label'>
        ) }
      )>, resourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
      )>, toResourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
      )>, provider: (
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
    )>>, track: Types.Maybe<Array<(
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note' | 'hasPointInTime'>
      & { resourceQuantity: Types.Maybe<(
        { __typename: 'Measure' }
        & Pick<Types.Measure, 'id' | 'hasNumericalValue'>
        & { hasUnit: (
          { __typename: 'Unit' }
          & Pick<Types.Unit, 'id' | 'label'>
        ) }
      )>, resourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
      )>, toResourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
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
    )>>, unitOfEffort: Types.Maybe<(
      { __typename: 'Unit' }
      & Pick<Types.Unit, 'id' | 'label'>
    )>, onhandQuantity: Types.Maybe<(
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
      track {
        id
        action {
          id
        }
        fulfills {
          effortQuantity {
            id
            hasUnit {
              id
              label
              symbol
            }
          }
        }
      }
    }
    stage {
      id
      name
      note
    }
    containedIn {
      id
      name
      trace {
        id
        note
      }
      track {
        id
        note
      }
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
    trace {
      id
      note
      action {
        id
        label
      }
      resourceQuantity {
        id
        hasUnit {
          id
          label
        }
        hasNumericalValue
      }
      resourceInventoriedAs {
        id
        name
      }
      toResourceInventoriedAs {
        id
        name
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
    trace {
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
      resourceInventoriedAs {
        id
        name
      }
      toResourceInventoriedAs {
        id
        name
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
    track {
      id
      note
      hasPointInTime
      resourceQuantity {
        id
        hasUnit {
          id
          label
        }
        hasNumericalValue
      }
      resourceInventoriedAs {
        id
        name
      }
      toResourceInventoriedAs {
        id
        name
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
    unitOfEffort {
      id
      label
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
      
