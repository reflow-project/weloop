import * as Types from '../../../../graphql/types.generated';

import { UserPreviewFragment } from '../../../../HOC/modules/previews/user/UserPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { UserPreviewFragmentDoc } from '../../../../HOC/modules/previews/user/UserPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type CollectionFollowersQueryVariables = {
  collectionId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type CollectionFollowersQuery = (
  { __typename: 'RootQueryType' }
  & { collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id'>
    & { followers: Types.Maybe<(
      { __typename: 'FollowsPage' }
      & Pick<Types.FollowsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Follow' }
        & Pick<Types.Follow, 'id'>
        & { creator: Types.Maybe<(
          { __typename: 'User' }
          & CollectionFollowerFragment
        )> }
      )> }
    )> }
  )> }
);

export type CollectionFollowerFragment = (
  { __typename: 'User' }
  & UserPreviewFragment
);

export const CollectionFollowerFragmentDoc = gql`
    fragment CollectionFollower on User {
  ...UserPreview
}
    ${UserPreviewFragmentDoc}`;
export const CollectionFollowersDocument = gql`
    query collectionFollowers($collectionId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  collection(collectionId: $collectionId) @connection(key: "collectionFollowers", filter: ["collectionId"]) {
    id
    followers(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        id
        creator {
          ...CollectionFollower
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CollectionFollowerFragmentDoc}`;

/**
 * __useCollectionFollowersQuery__
 *
 * To run a query within a React component, call `useCollectionFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionFollowersQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCollectionFollowersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectionFollowersQuery, CollectionFollowersQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectionFollowersQuery, CollectionFollowersQueryVariables>(CollectionFollowersDocument, baseOptions);
      }
export function useCollectionFollowersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectionFollowersQuery, CollectionFollowersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectionFollowersQuery, CollectionFollowersQueryVariables>(CollectionFollowersDocument, baseOptions);
        }
export type CollectionFollowersQueryHookResult = ReturnType<typeof useCollectionFollowersQuery>;
export type CollectionFollowersLazyQueryHookResult = ReturnType<typeof useCollectionFollowersLazyQuery>;
export type CollectionFollowersQueryResult = ApolloReactCommon.QueryResult<CollectionFollowersQuery, CollectionFollowersQueryVariables>;


export interface CollectionFollowersQueryOperation {
  operationName: 'collectionFollowers'
  result: CollectionFollowersQuery
  variables: CollectionFollowersQueryVariables
  type: 'query'
}
export const CollectionFollowersQueryName:CollectionFollowersQueryOperation['operationName'] = 'collectionFollowers'

export const CollectionFollowersQueryRefetch = (
  variables:CollectionFollowersQueryVariables, 
  context?:any
)=>({
  query:CollectionFollowersDocument,
  variables,
  context
})
      
