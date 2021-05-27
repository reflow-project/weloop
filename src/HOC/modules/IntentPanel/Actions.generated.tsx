import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ActionsQueryVariables = {};


export type ActionsQuery = (
  { __typename: 'RootQueryType' }
  & { actions: Types.Maybe<Array<(
    { __typename: 'Action' }
    & Pick<Types.Action, 'label' | 'id' | 'note'>
  )>> }
);


export const ActionsDocument = gql`
    query actions {
  actions {
    label
    id
    note
  }
}
    `;

/**
 * __useActionsQuery__
 *
 * To run a query within a React component, call `useActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useActionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActionsQuery, ActionsQueryVariables>) {
        return ApolloReactHooks.useQuery<ActionsQuery, ActionsQueryVariables>(ActionsDocument, baseOptions);
      }
export function useActionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActionsQuery, ActionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActionsQuery, ActionsQueryVariables>(ActionsDocument, baseOptions);
        }
export type ActionsQueryHookResult = ReturnType<typeof useActionsQuery>;
export type ActionsLazyQueryHookResult = ReturnType<typeof useActionsLazyQuery>;
export type ActionsQueryResult = ApolloReactCommon.QueryResult<ActionsQuery, ActionsQueryVariables>;


export interface ActionsQueryOperation {
  operationName: 'actions'
  result: ActionsQuery
  variables: ActionsQueryVariables
  type: 'query'
}
export const ActionsQueryName:ActionsQueryOperation['operationName'] = 'actions'

export const ActionsQueryRefetch = (
  variables:ActionsQueryVariables, 
  context?:any
)=>({
  query:ActionsDocument,
  variables,
  context
})
      
