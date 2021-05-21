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


export const SpatialThingsPagesDocument = gql`
    query spatialThingsPages {
  spatialThingsPages {
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
      
