import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateDefaultEconomicEventMutationVariables = {
  name?: Types.Maybe<Types.Scalars['String']>,
  note?: Types.Maybe<Types.Scalars['String']>,
  action: Types.Scalars['ID']
};


export type CreateDefaultEconomicEventMutation = (
  { __typename: 'RootMutationType' }
  & { createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & { economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note'>
    ) }
  )> }
);

export type AgentsQueryVariables = {};


export type AgentsQuery = (
  { __typename: 'RootQueryType' }
  & { agents: Types.Maybe<Array<(
    { __typename: 'Organization' }
    & Pick<Types.Organization, 'id' | 'name' | 'displayUsername'>
  ) | (
    { __typename: 'Person' }
    & Pick<Types.Person, 'id' | 'name' | 'displayUsername'>
  )>> }
);


export const CreateDefaultEconomicEventDocument = gql`
    mutation createDefaultEconomicEvent($name: String, $note: String, $action: ID!) {
  createEconomicEvent(event: {action: $action, note: $note}, newInventoriedResource: {name: $name, note: $note}) {
    economicEvent {
      id
      note
    }
  }
}
    `;
export type CreateDefaultEconomicEventMutationFn = ApolloReactCommon.MutationFunction<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>;

/**
 * __useCreateDefaultEconomicEventMutation__
 *
 * To run a mutation, you first call `useCreateDefaultEconomicEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDefaultEconomicEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDefaultEconomicEventMutation, { data, loading, error }] = useCreateDefaultEconomicEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      note: // value for 'note'
 *      action: // value for 'action'
 *   },
 * });
 */
export function useCreateDefaultEconomicEventMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>(CreateDefaultEconomicEventDocument, baseOptions);
      }
export type CreateDefaultEconomicEventMutationHookResult = ReturnType<typeof useCreateDefaultEconomicEventMutation>;
export type CreateDefaultEconomicEventMutationResult = ApolloReactCommon.MutationResult<CreateDefaultEconomicEventMutation>;
export type CreateDefaultEconomicEventMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDefaultEconomicEventMutation, CreateDefaultEconomicEventMutationVariables>;
export const AgentsDocument = gql`
    query agents {
  agents {
    id
    name
    displayUsername
  }
}
    `;

/**
 * __useAgentsQuery__
 *
 * To run a query within a React component, call `useAgentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAgentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAgentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAgentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AgentsQuery, AgentsQueryVariables>) {
        return ApolloReactHooks.useQuery<AgentsQuery, AgentsQueryVariables>(AgentsDocument, baseOptions);
      }
export function useAgentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AgentsQuery, AgentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AgentsQuery, AgentsQueryVariables>(AgentsDocument, baseOptions);
        }
export type AgentsQueryHookResult = ReturnType<typeof useAgentsQuery>;
export type AgentsLazyQueryHookResult = ReturnType<typeof useAgentsLazyQuery>;
export type AgentsQueryResult = ApolloReactCommon.QueryResult<AgentsQuery, AgentsQueryVariables>;


export interface CreateDefaultEconomicEventMutationOperation {
  operationName: 'createDefaultEconomicEvent'
  result: CreateDefaultEconomicEventMutation
  variables: CreateDefaultEconomicEventMutationVariables
  type: 'mutation'
}
export const CreateDefaultEconomicEventMutationName:CreateDefaultEconomicEventMutationOperation['operationName'] = 'createDefaultEconomicEvent'

export const CreateDefaultEconomicEventMutationRefetch = (
  variables:CreateDefaultEconomicEventMutationVariables, 
  context?:any
)=>({
  query:CreateDefaultEconomicEventDocument,
  variables,
  context
})
      


export interface AgentsQueryOperation {
  operationName: 'agents'
  result: AgentsQuery
  variables: AgentsQueryVariables
  type: 'query'
}
export const AgentsQueryName:AgentsQueryOperation['operationName'] = 'agents'

export const AgentsQueryRefetch = (
  variables:AgentsQueryVariables, 
  context?:any
)=>({
  query:AgentsDocument,
  variables,
  context
})
      
