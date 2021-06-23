import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type SpatialThingsPagesQueryVariables = {};


export type SpatialThingsPagesQuery = (
  { __typename: 'RootQueryType' }
  & { spatialThingsPages: (
    { __typename: 'SpatialThingsPage' }
    & { edges: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'SpatialThing' }
      & Pick<Types.SpatialThing, 'id' | 'name' | 'lat' | 'long'>
    )>>> }
  ) }
);

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

export type UnitsPagesQueryVariables = {};


export type UnitsPagesQuery = (
  { __typename: 'RootQueryType' }
  & { unitsPages: (
    { __typename: 'UnitsPage' }
    & { edges: Types.Maybe<Array<(
      { __typename: 'Unit' }
      & Pick<Types.Unit, 'id' | 'symbol' | 'label'>
    )>> }
  ) }
);

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename: 'RootQueryType' }
  & { users: (
    { __typename: 'UsersPage' }
    & { edges: Array<(
      { __typename: 'User' }
      & Pick<Types.User, 'id' | 'name'>
    )> }
  ) }
);


export const SpatialThingsPagesDocument = gql`
    query spatialThingsPages {
  spatialThingsPages(limit: 15) {
    edges {
      id
      name
      lat
      long
    }
  }
}
    `;

/**
 * __useSpatialThingsPagesQuery__
 *
 * To run a query within a React component, call `useSpatialThingsPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpatialThingsPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpatialThingsPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSpatialThingsPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SpatialThingsPagesQuery, SpatialThingsPagesQueryVariables>) {
        return ApolloReactHooks.useQuery<SpatialThingsPagesQuery, SpatialThingsPagesQueryVariables>(SpatialThingsPagesDocument, baseOptions);
      }
export function useSpatialThingsPagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SpatialThingsPagesQuery, SpatialThingsPagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SpatialThingsPagesQuery, SpatialThingsPagesQueryVariables>(SpatialThingsPagesDocument, baseOptions);
        }
export type SpatialThingsPagesQueryHookResult = ReturnType<typeof useSpatialThingsPagesQuery>;
export type SpatialThingsPagesLazyQueryHookResult = ReturnType<typeof useSpatialThingsPagesLazyQuery>;
export type SpatialThingsPagesQueryResult = ApolloReactCommon.QueryResult<SpatialThingsPagesQuery, SpatialThingsPagesQueryVariables>;
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
export const UnitsPagesDocument = gql`
    query unitsPages {
  unitsPages {
    edges {
      id
      symbol
      label
    }
  }
}
    `;

/**
 * __useUnitsPagesQuery__
 *
 * To run a query within a React component, call `useUnitsPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnitsPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnitsPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUnitsPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UnitsPagesQuery, UnitsPagesQueryVariables>) {
        return ApolloReactHooks.useQuery<UnitsPagesQuery, UnitsPagesQueryVariables>(UnitsPagesDocument, baseOptions);
      }
export function useUnitsPagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UnitsPagesQuery, UnitsPagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UnitsPagesQuery, UnitsPagesQueryVariables>(UnitsPagesDocument, baseOptions);
        }
export type UnitsPagesQueryHookResult = ReturnType<typeof useUnitsPagesQuery>;
export type UnitsPagesLazyQueryHookResult = ReturnType<typeof useUnitsPagesLazyQuery>;
export type UnitsPagesQueryResult = ApolloReactCommon.QueryResult<UnitsPagesQuery, UnitsPagesQueryVariables>;
export const UsersDocument = gql`
    query users {
  users {
    edges {
      id
      name
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
      }
export function useUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = ApolloReactCommon.QueryResult<UsersQuery, UsersQueryVariables>;


export interface SpatialThingsPagesQueryOperation {
  operationName: 'spatialThingsPages'
  result: SpatialThingsPagesQuery
  variables: SpatialThingsPagesQueryVariables
  type: 'query'
}
export const SpatialThingsPagesQueryName:SpatialThingsPagesQueryOperation['operationName'] = 'spatialThingsPages'

export const SpatialThingsPagesQueryRefetch = (
  variables:SpatialThingsPagesQueryVariables, 
  context?:any
)=>({
  query:SpatialThingsPagesDocument,
  variables,
  context
})
      


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
      


export interface UnitsPagesQueryOperation {
  operationName: 'unitsPages'
  result: UnitsPagesQuery
  variables: UnitsPagesQueryVariables
  type: 'query'
}
export const UnitsPagesQueryName:UnitsPagesQueryOperation['operationName'] = 'unitsPages'

export const UnitsPagesQueryRefetch = (
  variables:UnitsPagesQueryVariables, 
  context?:any
)=>({
  query:UnitsPagesDocument,
  variables,
  context
})
      


export interface UsersQueryOperation {
  operationName: 'users'
  result: UsersQuery
  variables: UsersQueryVariables
  type: 'query'
}
export const UsersQueryName:UsersQueryOperation['operationName'] = 'users'

export const UsersQueryRefetch = (
  variables:UsersQueryVariables, 
  context?:any
)=>({
  query:UsersDocument,
  variables,
  context
})
      
