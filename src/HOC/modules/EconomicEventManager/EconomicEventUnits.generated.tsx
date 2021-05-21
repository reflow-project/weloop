import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

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
      
