import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type InstanceInfoQueryVariables = {};


export type InstanceInfoQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & Pick<Types.Instance, 'description' | 'extraInfo' | 'hostname' | 'uploadIconTypes' | 'uploadImageTypes' | 'uploadMaxBytes' | 'uploadResourceTypes'>
  )> }
);


export const InstanceInfoDocument = gql`
    query instanceInfo {
  instance {
    description
    extraInfo
    hostname
    uploadIconTypes
    uploadImageTypes
    uploadMaxBytes
    uploadResourceTypes
  }
}
    `;

/**
 * __useInstanceInfoQuery__
 *
 * To run a query within a React component, call `useInstanceInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstanceInfoQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceInfoQuery, InstanceInfoQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceInfoQuery, InstanceInfoQueryVariables>(InstanceInfoDocument, baseOptions);
      }
export function useInstanceInfoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceInfoQuery, InstanceInfoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceInfoQuery, InstanceInfoQueryVariables>(InstanceInfoDocument, baseOptions);
        }
export type InstanceInfoQueryHookResult = ReturnType<typeof useInstanceInfoQuery>;
export type InstanceInfoLazyQueryHookResult = ReturnType<typeof useInstanceInfoLazyQuery>;
export type InstanceInfoQueryResult = ApolloReactCommon.QueryResult<InstanceInfoQuery, InstanceInfoQueryVariables>;


export interface InstanceInfoQueryOperation {
  operationName: 'instanceInfo'
  result: InstanceInfoQuery
  variables: InstanceInfoQueryVariables
  type: 'query'
}
export const InstanceInfoQueryName:InstanceInfoQueryOperation['operationName'] = 'instanceInfo'

export const InstanceInfoQueryRefetch = (
  variables:InstanceInfoQueryVariables, 
  context?:any
)=>({
  query:InstanceInfoDocument,
  variables,
  context
})
      
