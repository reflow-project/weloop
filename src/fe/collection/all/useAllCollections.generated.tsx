import * as Types from '../../../graphql/types.generated';

import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import gql from 'graphql-tag';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type AllCollectionsQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type AllCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { collections: (
    { __typename: 'CollectionsPage' }
    & Pick<Types.CollectionsPage, 'totalCount'>
    & { edges: Array<(
      { __typename: 'Collection' }
      & CollectionPreviewFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & FullPageInfoFragment
    ) }
  ) }
);


export const AllCollectionsDocument = gql`
    query allCollections($limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  collections(limit: $limit, before: $before, after: $after) @connection(key: "allCollections") {
    edges {
      ...CollectionPreview
    }
    totalCount
    pageInfo {
      ...FullPageInfo
    }
  }
}
    ${CollectionPreviewFragmentDoc}
${FullPageInfoFragmentDoc}`;

/**
 * __useAllCollectionsQuery__
 *
 * To run a query within a React component, call `useAllCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCollectionsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAllCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllCollectionsQuery, AllCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, baseOptions);
      }
export function useAllCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllCollectionsQuery, AllCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllCollectionsQuery, AllCollectionsQueryVariables>(AllCollectionsDocument, baseOptions);
        }
export type AllCollectionsQueryHookResult = ReturnType<typeof useAllCollectionsQuery>;
export type AllCollectionsLazyQueryHookResult = ReturnType<typeof useAllCollectionsLazyQuery>;
export type AllCollectionsQueryResult = ApolloReactCommon.QueryResult<AllCollectionsQuery, AllCollectionsQueryVariables>;


export interface AllCollectionsQueryOperation {
  operationName: 'allCollections'
  result: AllCollectionsQuery
  variables: AllCollectionsQueryVariables
  type: 'query'
}
export const AllCollectionsQueryName:AllCollectionsQueryOperation['operationName'] = 'allCollections'

export const AllCollectionsQueryRefetch = (
  variables:AllCollectionsQueryVariables, 
  context?:any
)=>({
  query:AllCollectionsDocument,
  variables,
  context
})
      
