import * as Types from '../../../graphql/types.generated';

import { FlagPreviewFragment } from '../../../HOC/modules/previews/flag/FlagPreview.generated';
import gql from 'graphql-tag';
import { FlagPreviewFragmentDoc } from '../../../HOC/modules/previews/flag/FlagPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type FlagPreviewDataQueryVariables = {
  flagId: Types.Scalars['String']
};


export type FlagPreviewDataQuery = (
  { __typename: 'RootQueryType' }
  & { flag: Types.Maybe<(
    { __typename: 'Flag' }
    & FlagPreviewFragment
  )> }
);

export type DeleteFlagMutationVariables = {
  flagId: Types.Scalars['String']
};


export type DeleteFlagMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | (
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  ) | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);

export type DeleteFlagContextMutationVariables = {
  contextId: Types.Scalars['String']
};


export type DeleteFlagContextMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Category' } | (
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id'>
  ) | (
    { __typename: 'Comment' }
    & Pick<Types.Comment, 'id'>
  ) | (
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
  ) | (
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  ) | (
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  ) | { __typename: 'Intent' } | (
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  ) | { __typename: 'Organisation' } | (
    { __typename: 'Resource' }
    & Pick<Types.Resource, 'id'>
  ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);

export type DeactivateFlaggedUserMutationVariables = {
  userId: Types.Scalars['String']
};


export type DeactivateFlaggedUserMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  )> }
);


export const FlagPreviewDataDocument = gql`
    query flagPreviewData($flagId: String!) {
  flag(flagId: $flagId) {
    ...FlagPreview
  }
}
    ${FlagPreviewFragmentDoc}`;

/**
 * __useFlagPreviewDataQuery__
 *
 * To run a query within a React component, call `useFlagPreviewDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlagPreviewDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlagPreviewDataQuery({
 *   variables: {
 *      flagId: // value for 'flagId'
 *   },
 * });
 */
export function useFlagPreviewDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>) {
        return ApolloReactHooks.useQuery<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>(FlagPreviewDataDocument, baseOptions);
      }
export function useFlagPreviewDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>(FlagPreviewDataDocument, baseOptions);
        }
export type FlagPreviewDataQueryHookResult = ReturnType<typeof useFlagPreviewDataQuery>;
export type FlagPreviewDataLazyQueryHookResult = ReturnType<typeof useFlagPreviewDataLazyQuery>;
export type FlagPreviewDataQueryResult = ApolloReactCommon.QueryResult<FlagPreviewDataQuery, FlagPreviewDataQueryVariables>;
export const DeleteFlagDocument = gql`
    mutation deleteFlag($flagId: String!) {
  delete(contextId: $flagId) {
    ... on Flag {
      id
    }
  }
}
    `;
export type DeleteFlagMutationFn = ApolloReactCommon.MutationFunction<DeleteFlagMutation, DeleteFlagMutationVariables>;

/**
 * __useDeleteFlagMutation__
 *
 * To run a mutation, you first call `useDeleteFlagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlagMutation, { data, loading, error }] = useDeleteFlagMutation({
 *   variables: {
 *      flagId: // value for 'flagId'
 *   },
 * });
 */
export function useDeleteFlagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFlagMutation, DeleteFlagMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteFlagMutation, DeleteFlagMutationVariables>(DeleteFlagDocument, baseOptions);
      }
export type DeleteFlagMutationHookResult = ReturnType<typeof useDeleteFlagMutation>;
export type DeleteFlagMutationResult = ApolloReactCommon.MutationResult<DeleteFlagMutation>;
export type DeleteFlagMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteFlagMutation, DeleteFlagMutationVariables>;
export const DeleteFlagContextDocument = gql`
    mutation deleteFlagContext($contextId: String!) {
  delete(contextId: $contextId) {
    ... on Collection {
      id
    }
    ... on Comment {
      id
    }
    ... on Community {
      id
    }
    ... on Flag {
      id
    }
    ... on Follow {
      id
    }
    ... on Like {
      id
    }
    ... on Resource {
      id
    }
  }
}
    `;
export type DeleteFlagContextMutationFn = ApolloReactCommon.MutationFunction<DeleteFlagContextMutation, DeleteFlagContextMutationVariables>;

/**
 * __useDeleteFlagContextMutation__
 *
 * To run a mutation, you first call `useDeleteFlagContextMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlagContextMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlagContextMutation, { data, loading, error }] = useDeleteFlagContextMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useDeleteFlagContextMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteFlagContextMutation, DeleteFlagContextMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteFlagContextMutation, DeleteFlagContextMutationVariables>(DeleteFlagContextDocument, baseOptions);
      }
export type DeleteFlagContextMutationHookResult = ReturnType<typeof useDeleteFlagContextMutation>;
export type DeleteFlagContextMutationResult = ApolloReactCommon.MutationResult<DeleteFlagContextMutation>;
export type DeleteFlagContextMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteFlagContextMutation, DeleteFlagContextMutationVariables>;
export const DeactivateFlaggedUserDocument = gql`
    mutation deactivateFlaggedUser($userId: String!) {
  delete(contextId: $userId) {
    ... on User {
      id
    }
  }
}
    `;
export type DeactivateFlaggedUserMutationFn = ApolloReactCommon.MutationFunction<DeactivateFlaggedUserMutation, DeactivateFlaggedUserMutationVariables>;

/**
 * __useDeactivateFlaggedUserMutation__
 *
 * To run a mutation, you first call `useDeactivateFlaggedUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeactivateFlaggedUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deactivateFlaggedUserMutation, { data, loading, error }] = useDeactivateFlaggedUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeactivateFlaggedUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeactivateFlaggedUserMutation, DeactivateFlaggedUserMutationVariables>) {
        return ApolloReactHooks.useMutation<DeactivateFlaggedUserMutation, DeactivateFlaggedUserMutationVariables>(DeactivateFlaggedUserDocument, baseOptions);
      }
export type DeactivateFlaggedUserMutationHookResult = ReturnType<typeof useDeactivateFlaggedUserMutation>;
export type DeactivateFlaggedUserMutationResult = ApolloReactCommon.MutationResult<DeactivateFlaggedUserMutation>;
export type DeactivateFlaggedUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeactivateFlaggedUserMutation, DeactivateFlaggedUserMutationVariables>;


export interface FlagPreviewDataQueryOperation {
  operationName: 'flagPreviewData'
  result: FlagPreviewDataQuery
  variables: FlagPreviewDataQueryVariables
  type: 'query'
}
export const FlagPreviewDataQueryName:FlagPreviewDataQueryOperation['operationName'] = 'flagPreviewData'

export const FlagPreviewDataQueryRefetch = (
  variables:FlagPreviewDataQueryVariables, 
  context?:any
)=>({
  query:FlagPreviewDataDocument,
  variables,
  context
})
      


export interface DeleteFlagMutationOperation {
  operationName: 'deleteFlag'
  result: DeleteFlagMutation
  variables: DeleteFlagMutationVariables
  type: 'mutation'
}
export const DeleteFlagMutationName:DeleteFlagMutationOperation['operationName'] = 'deleteFlag'

export const DeleteFlagMutationRefetch = (
  variables:DeleteFlagMutationVariables, 
  context?:any
)=>({
  query:DeleteFlagDocument,
  variables,
  context
})
      


export interface DeleteFlagContextMutationOperation {
  operationName: 'deleteFlagContext'
  result: DeleteFlagContextMutation
  variables: DeleteFlagContextMutationVariables
  type: 'mutation'
}
export const DeleteFlagContextMutationName:DeleteFlagContextMutationOperation['operationName'] = 'deleteFlagContext'

export const DeleteFlagContextMutationRefetch = (
  variables:DeleteFlagContextMutationVariables, 
  context?:any
)=>({
  query:DeleteFlagContextDocument,
  variables,
  context
})
      


export interface DeactivateFlaggedUserMutationOperation {
  operationName: 'deactivateFlaggedUser'
  result: DeactivateFlaggedUserMutation
  variables: DeactivateFlaggedUserMutationVariables
  type: 'mutation'
}
export const DeactivateFlaggedUserMutationName:DeactivateFlaggedUserMutationOperation['operationName'] = 'deactivateFlaggedUser'

export const DeactivateFlaggedUserMutationRefetch = (
  variables:DeactivateFlaggedUserMutationVariables, 
  context?:any
)=>({
  query:DeactivateFlaggedUserDocument,
  variables,
  context
})
      
