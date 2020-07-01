import * as Types from '../../../graphql/types.generated';

import { CollectionFeatureFragment } from '../../../HOC/modules/FeaturedCollections/featuredCollection.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CollectionFeatureFragmentDoc } from '../../../HOC/modules/FeaturedCollections/featuredCollection.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type InstanceFeaturedCollectionsQueryVariables = {};


export type InstanceFeaturedCollectionsQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & { featuredCollections: Types.Maybe<(
      { __typename: 'FeaturesPage' }
      & Pick<Types.FeaturesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Feature' }
        & CollectionFeatureFragment
      )> }
    )> }
  )> }
);


export const InstanceFeaturedCollectionsDocument = gql`
    query instanceFeaturedCollections {
  instance {
    featuredCollections @connection(key: "instanceFeaturedCollections") {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CollectionFeature
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CollectionFeatureFragmentDoc}`;

/**
 * __useInstanceFeaturedCollectionsQuery__
 *
 * To run a query within a React component, call `useInstanceFeaturedCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceFeaturedCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceFeaturedCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useInstanceFeaturedCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>(InstanceFeaturedCollectionsDocument, baseOptions);
      }
export function useInstanceFeaturedCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>(InstanceFeaturedCollectionsDocument, baseOptions);
        }
export type InstanceFeaturedCollectionsQueryHookResult = ReturnType<typeof useInstanceFeaturedCollectionsQuery>;
export type InstanceFeaturedCollectionsLazyQueryHookResult = ReturnType<typeof useInstanceFeaturedCollectionsLazyQuery>;
export type InstanceFeaturedCollectionsQueryResult = ApolloReactCommon.QueryResult<InstanceFeaturedCollectionsQuery, InstanceFeaturedCollectionsQueryVariables>;


export interface InstanceFeaturedCollectionsQueryOperation {
  operationName: 'instanceFeaturedCollections'
  result: InstanceFeaturedCollectionsQuery
  variables: InstanceFeaturedCollectionsQueryVariables
  type: 'query'
}
export const InstanceFeaturedCollectionsQueryName:InstanceFeaturedCollectionsQueryOperation['operationName'] = 'instanceFeaturedCollections'

export const InstanceFeaturedCollectionsQueryRefetch = (
  variables:InstanceFeaturedCollectionsQueryVariables, 
  context?:any
)=>({
  query:InstanceFeaturedCollectionsDocument,
  variables,
  context
})
      
