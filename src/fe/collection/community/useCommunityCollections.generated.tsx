import * as Types from '../../../graphql/types.generated';

import { CommunityPageCollectionBaseFragment } from '../../../HOC/pages/community/CommunityPage.generated';
import { CollectionPreviewFragment } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionPreviewFragmentDoc } from '../../../HOC/modules/previews/collection/CollectionPreview.generated';
import { CommunityPageCollectionBaseFragmentDoc } from '../../../HOC/pages/community/CommunityPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';




export type CommunityCollectionsQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type CommunityCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { collections: Types.Maybe<(
      { __typename: 'CollectionsPage' }
      & Pick<Types.CollectionsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Collection' }
        & CommunityCollectionFragment
      )> }
    )> }
  )> }
);

export type CommunityCollectionFragment = (
  { __typename: 'Collection' }
  & CollectionPreviewFragment
  & CommunityPageCollectionBaseFragment
);

export const CommunityCollectionFragmentDoc = gql`
    fragment CommunityCollection on Collection {
  ...CollectionPreview
  ...CommunityPageCollectionBase
}
    ${CollectionPreviewFragmentDoc}
${CommunityPageCollectionBaseFragmentDoc}`;
export const CommunityCollectionsDocument = gql`
    query communityCollections($communityId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  community(communityId: $communityId) @connection(key: "communityCollections", filter: ["communityId"]) {
    id
    collections(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CommunityCollection
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CommunityCollectionFragmentDoc}`;

/**
 * __useCommunityCollectionsQuery__
 *
 * To run a query within a React component, call `useCommunityCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityCollectionsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>(CommunityCollectionsDocument, baseOptions);
      }
export function useCommunityCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>(CommunityCollectionsDocument, baseOptions);
        }
export type CommunityCollectionsQueryHookResult = ReturnType<typeof useCommunityCollectionsQuery>;
export type CommunityCollectionsLazyQueryHookResult = ReturnType<typeof useCommunityCollectionsLazyQuery>;
export type CommunityCollectionsQueryResult = ApolloReactCommon.QueryResult<CommunityCollectionsQuery, CommunityCollectionsQueryVariables>;


export interface CommunityCollectionsQueryOperation {
  operationName: 'communityCollections'
  result: CommunityCollectionsQuery
  variables: CommunityCollectionsQueryVariables
  type: 'query'
}
export const CommunityCollectionsQueryName:CommunityCollectionsQueryOperation['operationName'] = 'communityCollections'

export const CommunityCollectionsQueryRefetch = (
  variables:CommunityCollectionsQueryVariables, 
  context?:any
)=>({
  query:CommunityCollectionsDocument,
  variables,
  context
})
      
