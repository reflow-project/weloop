import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type LikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type LikeMutation = (
  { __typename: 'RootMutationType' }
  & { createLike: Types.Maybe<(
    { __typename: 'Like' }
    & { context: { __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )>, likers: Types.Maybe<(
        { __typename: 'LikesPage' }
        & Pick<Types.LikesPage, 'totalCount'>
      )> }
    ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
      { __typename: 'User' }
      & Pick<Types.User, 'likerCount'>
      & { userId: Types.User['id'] }
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) }
  )> }
);

export type UnlikeMutationVariables = {
  contextId: Types.Scalars['String']
};


export type UnlikeMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | (
    { __typename: 'Like' }
    & { context: { __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Comment' }
      & Pick<Types.Comment, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id' | 'likerCount'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )>, likers: Types.Maybe<(
        { __typename: 'LikesPage' }
        & Pick<Types.LikesPage, 'totalCount'>
      )> }
    ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
      { __typename: 'User' }
      & Pick<Types.User, 'likerCount'>
      & { userId: Types.User['id'] }
      & { myLike: Types.Maybe<(
        { __typename: 'Like' }
        & Pick<Types.Like, 'id'>
      )> }
    ) }
  ) | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);


export const LikeDocument = gql`
    mutation like($contextId: String!) {
  createLike(contextId: $contextId) {
    context {
      ... on Collection {
        id
        myLike {
          id
        }
        likerCount
      }
      ... on Comment {
        id
        myLike {
          id
        }
        likerCount
      }
      ... on Community {
        id
        myLike {
          id
        }
        likerCount
      }
      ... on Resource {
        id
        myLike {
          id
        }
        likers {
          totalCount
        }
      }
      ... on User {
        userId: id
        myLike {
          id
        }
        likerCount
      }
    }
  }
}
    `;
export type LikeMutationFn = ApolloReactCommon.MutationFunction<LikeMutation, LikeMutationVariables>;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useLikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LikeMutation, LikeMutationVariables>) {
        return ApolloReactHooks.useMutation<LikeMutation, LikeMutationVariables>(LikeDocument, baseOptions);
      }
export type LikeMutationHookResult = ReturnType<typeof useLikeMutation>;
export type LikeMutationResult = ApolloReactCommon.MutationResult<LikeMutation>;
export type LikeMutationOptions = ApolloReactCommon.BaseMutationOptions<LikeMutation, LikeMutationVariables>;
export const UnlikeDocument = gql`
    mutation unlike($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Like {
      context {
        ... on Collection {
          id
          myLike {
            id
          }
          likerCount
        }
        ... on Comment {
          id
          myLike {
            id
          }
          likerCount
        }
        ... on Community {
          id
          myLike {
            id
          }
          likerCount
        }
        ... on Resource {
          id
          myLike {
            id
          }
          likers {
            totalCount
          }
        }
        ... on User {
          userId: id
          myLike {
            id
          }
          likerCount
        }
      }
    }
  }
}
    `;
export type UnlikeMutationFn = ApolloReactCommon.MutationFunction<UnlikeMutation, UnlikeMutationVariables>;

/**
 * __useUnlikeMutation__
 *
 * To run a mutation, you first call `useUnlikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeMutation, { data, loading, error }] = useUnlikeMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useUnlikeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UnlikeMutation, UnlikeMutationVariables>) {
        return ApolloReactHooks.useMutation<UnlikeMutation, UnlikeMutationVariables>(UnlikeDocument, baseOptions);
      }
export type UnlikeMutationHookResult = ReturnType<typeof useUnlikeMutation>;
export type UnlikeMutationResult = ApolloReactCommon.MutationResult<UnlikeMutation>;
export type UnlikeMutationOptions = ApolloReactCommon.BaseMutationOptions<UnlikeMutation, UnlikeMutationVariables>;


export interface LikeMutationOperation {
  operationName: 'like'
  result: LikeMutation
  variables: LikeMutationVariables
  type: 'mutation'
}
export const LikeMutationName:LikeMutationOperation['operationName'] = 'like'

export const LikeMutationRefetch = (
  variables:LikeMutationVariables, 
  context?:any
)=>({
  query:LikeDocument,
  variables,
  context
})
      


export interface UnlikeMutationOperation {
  operationName: 'unlike'
  result: UnlikeMutation
  variables: UnlikeMutationVariables
  type: 'mutation'
}
export const UnlikeMutationName:UnlikeMutationOperation['operationName'] = 'unlike'

export const UnlikeMutationRefetch = (
  variables:UnlikeMutationVariables, 
  context?:any
)=>({
  query:UnlikeDocument,
  variables,
  context
})
      
