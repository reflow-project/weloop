import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type FollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type FollowMutation = (
  { __typename: 'RootMutationType' }
  & { createFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & { context: { __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Comment' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
      { __typename: 'User' }
      & Pick<Types.User, 'followerCount'>
      & { userId: Types.User['id'] }
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) }
  )> }
);

export type UnfollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type UnfollowMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | (
    { __typename: 'Follow' }
    & { context: { __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Comment' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'followerCount'>
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
      { __typename: 'User' }
      & Pick<Types.User, 'followerCount'>
      & { userId: Types.User['id'] }
      & { myFollow: Types.Maybe<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
      )> }
    ) }
  ) | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);


export const FollowDocument = gql`
    mutation follow($contextId: String!) {
  createFollow(contextId: $contextId) {
    context {
      ... on Collection {
        id
        myFollow {
          id
        }
        followerCount
      }
      ... on Community {
        id
        myFollow {
          id
        }
        followerCount
      }
      ... on User {
        userId: id
        myFollow {
          id
        }
        followerCount
      }
    }
  }
}
    `;
export type FollowMutationFn = ApolloReactCommon.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        return ApolloReactHooks.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, baseOptions);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = ApolloReactCommon.MutationResult<FollowMutation>;
export type FollowMutationOptions = ApolloReactCommon.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const UnfollowDocument = gql`
    mutation unfollow($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Follow {
      context {
        ... on Collection {
          id
          myFollow {
            id
          }
          followerCount
        }
        ... on Community {
          id
          myFollow {
            id
          }
          followerCount
        }
        ... on User {
          userId: id
          myFollow {
            id
          }
          followerCount
        }
      }
    }
  }
}
    `;
export type UnfollowMutationFn = ApolloReactCommon.MutationFunction<UnfollowMutation, UnfollowMutationVariables>;

/**
 * __useUnfollowMutation__
 *
 * To run a mutation, you first call `useUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowMutation, { data, loading, error }] = useUnfollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useUnfollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnfollowMutation, UnfollowMutationVariables>) {
        return ApolloReactHooks.useMutation<UnfollowMutation, UnfollowMutationVariables>(UnfollowDocument, baseOptions);
      }
export type UnfollowMutationHookResult = ReturnType<typeof useUnfollowMutation>;
export type UnfollowMutationResult = ApolloReactCommon.MutationResult<UnfollowMutation>;
export type UnfollowMutationOptions = ApolloReactCommon.BaseMutationOptions<UnfollowMutation, UnfollowMutationVariables>;


export interface FollowMutationOperation {
  operationName: 'follow'
  result: FollowMutation
  variables: FollowMutationVariables
  type: 'mutation'
}
export const FollowMutationName:FollowMutationOperation['operationName'] = 'follow'

export const FollowMutationRefetch = (
  variables:FollowMutationVariables, 
  context?:any
)=>({
  query:FollowDocument,
  variables,
  context
})
      


export interface UnfollowMutationOperation {
  operationName: 'unfollow'
  result: UnfollowMutation
  variables: UnfollowMutationVariables
  type: 'mutation'
}
export const UnfollowMutationName:UnfollowMutationOperation['operationName'] = 'unfollow'

export const UnfollowMutationRefetch = (
  variables:UnfollowMutationVariables, 
  context?:any
)=>({
  query:UnfollowDocument,
  variables,
  context
})
      
