import * as Types from '../../../graphql/types.generated'

import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'

export type CreateEconomicEventAndNewResourceMutationVariables = {
  note?: Types.Maybe<Types.Scalars['String']>,
  action: Types.Scalars['ID'],
  provider: Types.Scalars['ID'],
  receiver: Types.Scalars['ID'],
  hasUnit: Types.Scalars['ID'],
  hasNumericalValue: Types.Scalars['Float'],
  name?: Types.Maybe<Types.Scalars['String']>
};


export type CreateEconomicEventAndNewResourceMutation = (
  { __typename: 'RootMutationType' }
  & {
  createEconomicEvent: Types.Maybe<(
    { __typename: 'EconomicEventResponse' }
    & {
    economicEvent: (
      { __typename: 'EconomicEvent' }
      & Pick<Types.EconomicEvent, 'id' | 'note'>
      & {
      receiver: (
        { __typename: 'Organization' }
        & Pick<Types.Organization, 'id' | 'name' | 'note'>
        ) | (
        { __typename: 'Person' }
        & Pick<Types.Person, 'id' | 'name' | 'note'>
        ), provider: (
        { __typename: 'Organization' }
        & Pick<Types.Organization, 'id' | 'name' | 'note'>
        ) | (
        { __typename: 'Person' }
        & Pick<Types.Person, 'id' | 'name' | 'note'>
        ), resourceQuantity: Types.Maybe<(
        { __typename: 'Measure' }
        & Pick<Types.Measure, 'hasNumericalValue'>
        & {
        hasUnit: (
          { __typename: 'Unit' }
          & Pick<Types.Unit, 'label' | 'symbol'>
          )
      }
        )>, resourceInventoriedAs: Types.Maybe<(
        { __typename: 'EconomicResource' }
        & Pick<Types.EconomicResource, 'id' | 'name'>
        & {
        onhandQuantity: Types.Maybe<(
          { __typename: 'Measure' }
          & Pick<Types.Measure, 'hasNumericalValue'>
          & {
          hasUnit: (
            { __typename: 'Unit' }
            & Pick<Types.Unit, 'label' | 'symbol'>
            )
        }
          )>, accountingQuantity: Types.Maybe<(
          { __typename: 'Measure' }
          & Pick<Types.Measure, 'hasNumericalValue'>
          & {
          hasUnit: (
            { __typename: 'Unit' }
            & Pick<Types.Unit, 'label' | 'symbol'>
            )
        }
          )>
      }
        )>
    }
      )
  }
    )>
}
  );


export const CreateEconomicEventAndNewResourceDocument = gql`
  mutation createEconomicEventAndNewResource($note: String, $action: ID!, $provider: ID!, $receiver: ID!, $hasUnit: ID!, $hasNumericalValue: Float!, $name: String) {
    createEconomicEvent(event: {note: $note, action: $action, provider: $provider, receiver: $receiver, resourceQuantity: {hasUnit: $hasUnit, hasNumericalValue: $hasNumericalValue}}, newInventoriedResource: {name: $name}) {
      economicEvent {
        id
        note
        receiver {
          id
          name
          note
        }
        provider {
          id
          name
          note
        }
        resourceQuantity {
          hasNumericalValue
          hasUnit {
            label
            symbol
          }
        }
        resourceInventoriedAs {
          id
          name
          onhandQuantity {
            hasNumericalValue
            hasUnit {
              label
              symbol
            }
          }
          accountingQuantity {
            hasNumericalValue
            hasUnit {
              label
              symbol
            }
          }
        }
      }
    }
  }
`
export type CreateEconomicEventAndNewResourceMutationFn = ApolloReactCommon.MutationFunction<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>;

/**
 * __useCreateEconomicEventAndNewResourceMutation__
 *
 * To run a mutation, you first call `useCreateEconomicEventAndNewResourceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEconomicEventAndNewResourceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEconomicEventAndNewResourceMutation, { data, loading, error }] = useCreateEconomicEventAndNewResourceMutation({
 *   variables: {
 *      note: // value for 'note'
 *      action: // value for 'action'
 *      provider: // value for 'provider'
 *      receiver: // value for 'receiver'
 *      hasUnit: // value for 'hasUnit'
 *      hasNumericalValue: // value for 'hasNumericalValue'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateEconomicEventAndNewResourceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>) {
  return ApolloReactHooks.useMutation<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>(CreateEconomicEventAndNewResourceDocument, baseOptions)
}

export type CreateEconomicEventAndNewResourceMutationHookResult = ReturnType<typeof useCreateEconomicEventAndNewResourceMutation>;
export type CreateEconomicEventAndNewResourceMutationResult = ApolloReactCommon.MutationResult<CreateEconomicEventAndNewResourceMutation>;
export type CreateEconomicEventAndNewResourceMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateEconomicEventAndNewResourceMutation, CreateEconomicEventAndNewResourceMutationVariables>;


export interface CreateEconomicEventAndNewResourceMutationOperation {
  operationName: 'createEconomicEventAndNewResource'
  result: CreateEconomicEventAndNewResourceMutation
  variables: CreateEconomicEventAndNewResourceMutationVariables
  type: 'mutation'
}

export const CreateEconomicEventAndNewResourceMutationName: CreateEconomicEventAndNewResourceMutationOperation['operationName'] = 'createEconomicEventAndNewResource'

export const CreateEconomicEventAndNewResourceMutationRefetch = (
  variables: CreateEconomicEventAndNewResourceMutationVariables,
  context?: any,
) => ({
  query: CreateEconomicEventAndNewResourceDocument,
  variables,
  context,
})
      
