import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type FlagMutationVariables = {
  contextId: Types.Scalars['String'],
  message: Types.Scalars['String']
};


export type FlagMutation = (
  { __typename: 'RootMutationType' }
  & { createFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & { context: { __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
      { __typename: 'User' }
      & { userId: Types.User['id'] }
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) }
  )> }
);

export type UnflagMutationVariables = {
  contextId: Types.Scalars['String']
};


export type UnflagMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | (
    { __typename: 'Flag' }
    & { context: { __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
      { __typename: 'User' }
      & { userId: Types.User['id'] }
      & { myFlag: Types.Maybe<(
        { __typename: 'Flag' }
        & Pick<Types.Flag, 'id'>
      )> }
    ) }
  ) | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);


export const FlagDocument = gql`
    mutation flag($contextId: String!, $message: String!) {
  createFlag(contextId: $contextId, message: $message) {
    context {
      ... on Collection {
        id
        myFlag {
          id
        }
      }
      ... on Comment {
        id
        myFlag {
          id
        }
      }
      ... on Community {
        id
        myFlag {
          id
        }
      }
      ... on Resource {
        id
        myFlag {
          id
        }
      }
      ... on User {
        userId: id
        myFlag {
          id
        }
      }
    }
  }
}
    `;
export type FlagMutationFn = ApolloReactCommon.MutationFunction<FlagMutation, FlagMutationVariables>;

/**
 * __useFlagMutation__
 *
 * To run a mutation, you first call `useFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [flagMutation, { data, loading, error }] = useFlagMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useFlagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FlagMutation, FlagMutationVariables>) {
        return ApolloReactHooks.useMutation<FlagMutation, FlagMutationVariables>(FlagDocument, baseOptions);
      }
export type FlagMutationHookResult = ReturnType<typeof useFlagMutation>;
export type FlagMutationResult = ApolloReactCommon.MutationResult<FlagMutation>;
export type FlagMutationOptions = ApolloReactCommon.BaseMutationOptions<FlagMutation, FlagMutationVariables>;
export const UnflagDocument = gql`
    mutation unflag($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Flag {
      context {
        ... on Collection {
          id
          myFlag {
            id
          }
        }
        ... on Comment {
          id
          myFlag {
            id
          }
        }
        ... on Community {
          id
          myFlag {
            id
          }
        }
        ... on Resource {
          id
          myFlag {
            id
          }
        }
        ... on User {
          userId: id
          myFlag {
            id
          }
        }
      }
    }
  }
}
    `;
export type UnflagMutationFn = ApolloReactCommon.MutationFunction<UnflagMutation, UnflagMutationVariables>;

/**
 * __useUnflagMutation__
 *
 * To run a mutation, you first call `useUnflagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnflagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unflagMutation, { data, loading, error }] = useUnflagMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useUnflagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnflagMutation, UnflagMutationVariables>) {
        return ApolloReactHooks.useMutation<UnflagMutation, UnflagMutationVariables>(UnflagDocument, baseOptions);
      }
export type UnflagMutationHookResult = ReturnType<typeof useUnflagMutation>;
export type UnflagMutationResult = ApolloReactCommon.MutationResult<UnflagMutation>;
export type UnflagMutationOptions = ApolloReactCommon.BaseMutationOptions<UnflagMutation, UnflagMutationVariables>;


export interface FlagMutationOperation {
  operationName: 'flag'
  result: FlagMutation
  variables: FlagMutationVariables
  type: 'mutation'
}
export const FlagMutationName:FlagMutationOperation['operationName'] = 'flag'

export const FlagMutationRefetch = (
  variables:FlagMutationVariables, 
  context?:any
)=>({
  query:FlagDocument,
  variables,
  context
})
      


export interface UnflagMutationOperation {
  operationName: 'unflag'
  result: UnflagMutation
  variables: UnflagMutationVariables
  type: 'mutation'
}
export const UnflagMutationName:UnflagMutationOperation['operationName'] = 'unflag'

export const UnflagMutationRefetch = (
  variables:UnflagMutationVariables, 
  context?:any
)=>({
  query:UnflagDocument,
  variables,
  context
})
      
