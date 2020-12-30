import * as Types from '../../../graphql/types.generated';

import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type MyCollectionFollowsQueryVariables = {};


export type MyCollectionFollowsQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & MyCollectionFollowsDataFragment
  )> }
);

export type MyCollectionFollowsDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { collectionFollows: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & Pick<Types.FollowsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { context: { __typename: 'Category' } | (
          { __typename: 'Collection' }
          & MyFollowedCollectionDataFragment
        ) | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' } }
      )> }
    )> }
  ) }
);

export type MyFollowedCollectionDataFragment = (
  { __typename: 'Collection' }
  & CollectionPreviewFragment
);

export const MyFollowedCollectionDataFragmentDoc = gql`
    fragment MyFollowedCollectionData on Collection {
  ...CollectionPreview
}
    ${CollectionPreviewFragmentDoc}`;
export const MyCollectionFollowsDataFragmentDoc = gql`
    fragment MyCollectionFollowsData on Me {
  user {
    id
    collectionFollows {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        context {
          ... on Collection {
            ...MyFollowedCollectionData
          }
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${MyFollowedCollectionDataFragmentDoc}`;
export const MyCollectionFollowsDocument = gql`
    query myCollectionFollows {
  me @connection(key: "myCollectionFollows") {
    ...MyCollectionFollowsData
  }
}
    ${MyCollectionFollowsDataFragmentDoc}`;

/**
 * __useMyCollectionFollowsQuery__
 *
 * To run a query within a React component, call `useMyCollectionFollowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyCollectionFollowsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyCollectionFollowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyCollectionFollowsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyCollectionFollowsQuery, MyCollectionFollowsQueryVariables>) {
        return ApolloReactHooks.useQuery<MyCollectionFollowsQuery, MyCollectionFollowsQueryVariables>(MyCollectionFollowsDocument, baseOptions);
      }
export function useMyCollectionFollowsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyCollectionFollowsQuery, MyCollectionFollowsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyCollectionFollowsQuery, MyCollectionFollowsQueryVariables>(MyCollectionFollowsDocument, baseOptions);
        }
export type MyCollectionFollowsQueryHookResult = ReturnType<typeof useMyCollectionFollowsQuery>;
export type MyCollectionFollowsLazyQueryHookResult = ReturnType<typeof useMyCollectionFollowsLazyQuery>;
export type MyCollectionFollowsQueryResult = ApolloReactCommon.QueryResult<MyCollectionFollowsQuery, MyCollectionFollowsQueryVariables>;


export interface MyCollectionFollowsQueryOperation {
  operationName: 'myCollectionFollows'
  result: MyCollectionFollowsQuery
  variables: MyCollectionFollowsQueryVariables
  type: 'query'
}
export const MyCollectionFollowsQueryName:MyCollectionFollowsQueryOperation['operationName'] = 'myCollectionFollows'

export const MyCollectionFollowsQueryRefetch = (
  variables:MyCollectionFollowsQueryVariables, 
  context?:any
)=>({
  query:MyCollectionFollowsDocument,
  variables,
  context
})
      
