import * as Types from '../../../graphql/types.generated';

import { FollowPreviewFragment } from '../../modules/previews/follow/FollowPreview.generated';
import { LikePreviewFragment } from '../../modules/previews/like/LikePreview.generated';
import { FlagPreviewFragment } from '../../modules/previews/flag/FlagPreview.generated';
import { CommentPreviewFragment } from '../../modules/previews/comment/CommentPreview.generated';
import { UserPreviewFragment } from '../../modules/previews/user/UserPreview.generated';
import { ResourcePreviewFragment } from '../../modules/previews/resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../../modules/previews/collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../../modules/previews/community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../../modules/previews/community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../../modules/previews/collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../../modules/previews/resource/ResourcePreview.generated';
import { UserPreviewFragmentDoc } from '../../modules/previews/user/UserPreview.generated';
import { CommentPreviewFragmentDoc } from '../../modules/previews/comment/CommentPreview.generated';
import { FlagPreviewFragmentDoc } from '../../modules/previews/flag/FlagPreview.generated';
import { LikePreviewFragmentDoc } from '../../modules/previews/like/LikePreview.generated';
import { FollowPreviewFragmentDoc } from '../../modules/previews/follow/FollowPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';









export type UserQueryVariables = {
  userId: Types.Scalars['String']
};


export type UserQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { edges: Array<(
        { __typename: 'Activity' }
        & Pick<Types.Activity, 'verb'>
        & { user: Types.Maybe<(
          { __typename: 'User' }
          & Pick<Types.User, 'name'>
          & { icon: Types.Maybe<(
            { __typename: 'Content' }
            & Pick<Types.Content, 'id'>
          )>, image: Types.Maybe<(
            { __typename: 'Content' }
            & Pick<Types.Content, 'id'>
          )> }
        )>, context: Types.Maybe<{ __typename: 'Category' } | (
          { __typename: 'Collection' }
          & CollectionPreviewFragment
        ) | (
          { __typename: 'Comment' }
          & CommentPreviewFragment
        ) | (
          { __typename: 'Community' }
          & CommunityPreviewFragment
        ) | (
          { __typename: 'Flag' }
          & FlagPreviewFragment
        ) | (
          { __typename: 'Follow' }
          & FollowPreviewFragment
        ) | { __typename: 'Intent' } | (
          { __typename: 'Like' }
          & LikePreviewFragment
        ) | { __typename: 'Organisation' } | (
          { __typename: 'Resource' }
          & ResourcePreviewFragment
        ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
          { __typename: 'User' }
          & UserPreviewFragment
        )> }
      )>, pageInfo: (
        { __typename: 'PageInfo' }
        & Pick<Types.PageInfo, 'hasNextPage' | 'hasPreviousPage'>
      ) }
    )> }
  )> }
);

export type UserActivityQueryVariables = {
  userId: Types.Scalars['String']
};


export type UserActivityQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'lastActivity'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & Pick<Types.PageInfo, 'hasNextPage' | 'startCursor' | 'endCursor' | 'hasPreviousPage'>
      ), edges: Array<(
        { __typename: 'Activity' }
        & { context: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | (
          { __typename: 'Community' }
          & Pick<Types.Community, 'id' | 'displayUsername'>
        ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
      )> }
    )> }
  )> }
);


export const UserDocument = gql`
    query user($userId: String!) {
  user(userId: $userId) {
    outbox(limit: 15) {
      edges {
        user {
          icon {
            id
          }
          name
          image {
            id
          }
        }
        verb
        context {
          ... on Community {
            ...CommunityPreview
          }
          ... on Collection {
            ...CollectionPreview
          }
          ... on Resource {
            ...ResourcePreview
          }
          ... on User {
            ...UserPreview
          }
          ... on Comment {
            ...CommentPreview
          }
          ... on Flag {
            ...FlagPreview
          }
          ... on Like {
            ...LikePreview
          }
          ... on Follow {
            ...FollowPreview
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${UserPreviewFragmentDoc}
${CommentPreviewFragmentDoc}
${FlagPreviewFragmentDoc}
${LikePreviewFragmentDoc}
${FollowPreviewFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return ApolloReactHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = ApolloReactCommon.QueryResult<UserQuery, UserQueryVariables>;
export const UserActivityDocument = gql`
    query userActivity($userId: String!) {
  user(userId: $userId) {
    lastActivity
    outbox {
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
      totalCount
      edges {
        context {
          ... on Community {
            id
            displayUsername
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUserActivityQuery__
 *
 * To run a query within a React component, call `useUserActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserActivityQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserActivityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserActivityQuery, UserActivityQueryVariables>) {
        return ApolloReactHooks.useQuery<UserActivityQuery, UserActivityQueryVariables>(UserActivityDocument, baseOptions);
      }
export function useUserActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserActivityQuery, UserActivityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserActivityQuery, UserActivityQueryVariables>(UserActivityDocument, baseOptions);
        }
export type UserActivityQueryHookResult = ReturnType<typeof useUserActivityQuery>;
export type UserActivityLazyQueryHookResult = ReturnType<typeof useUserActivityLazyQuery>;
export type UserActivityQueryResult = ApolloReactCommon.QueryResult<UserActivityQuery, UserActivityQueryVariables>;


export interface UserQueryOperation {
  operationName: 'user'
  result: UserQuery
  variables: UserQueryVariables
  type: 'query'
}
export const UserQueryName:UserQueryOperation['operationName'] = 'user'

export const UserQueryRefetch = (
  variables:UserQueryVariables, 
  context?:any
)=>({
  query:UserDocument,
  variables,
  context
})
      


export interface UserActivityQueryOperation {
  operationName: 'userActivity'
  result: UserActivityQuery
  variables: UserActivityQueryVariables
  type: 'query'
}
export const UserActivityQueryName:UserActivityQueryOperation['operationName'] = 'userActivity'

export const UserActivityQueryRefetch = (
  variables:UserActivityQueryVariables, 
  context?:any
)=>({
  query:UserActivityDocument,
  variables,
  context
})
      
