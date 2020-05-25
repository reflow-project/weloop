import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type SearchHostIndexAndMyFollowsQueryVariables = {};


export type SearchHostIndexAndMyFollowsQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & SearchInstanceFragment
  )>, me: Types.Maybe<(
    { __typename: 'Me' }
    & SearchMeFragment
  )> }
);

export type SearchInstanceFragment = (
  { __typename: 'Instance' }
  & Pick<Types.Instance, 'hostname'>
);

export type SearchMeFragment = (
  { __typename: 'Me' }
  & { searchFollows: Array<(
    { __typename: 'SearchFollow' }
    & Pick<Types.SearchFollow, 'canonicalUrl' | 'collectionId' | 'communityId'>
  )> }
);

export type SearchFollowMutationVariables = {
  url: Types.Scalars['String']
};


export type SearchFollowMutation = (
  { __typename: 'RootMutationType' }
  & { createFollowByUrl: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
);

export type SearchUnfollowMutationVariables = {
  contextId: Types.Scalars['String']
};


export type SearchUnfollowMutation = (
  { __typename: 'RootMutationType' }
  & { delete: Types.Maybe<{ __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Feature' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Like' } | { __typename: 'Resource' } | { __typename: 'Thread' } | { __typename: 'User' }> }
);

export const SearchInstanceFragmentDoc = gql`
    fragment SearchInstance on Instance {
  hostname
}
    `;
export const SearchMeFragmentDoc = gql`
    fragment SearchMe on Me {
  searchFollows {
    canonicalUrl
    collectionId
    communityId
  }
}
    `;
export const SearchHostIndexAndMyFollowsDocument = gql`
    query SearchHostIndexAndMyFollows {
  instance {
    ...SearchInstance
  }
  me {
    ...SearchMe
  }
}
    ${SearchInstanceFragmentDoc}
${SearchMeFragmentDoc}`;

/**
 * __useSearchHostIndexAndMyFollowsQuery__
 *
 * To run a query within a React component, call `useSearchHostIndexAndMyFollowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchHostIndexAndMyFollowsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchHostIndexAndMyFollowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSearchHostIndexAndMyFollowsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchHostIndexAndMyFollowsQuery, SearchHostIndexAndMyFollowsQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchHostIndexAndMyFollowsQuery, SearchHostIndexAndMyFollowsQueryVariables>(SearchHostIndexAndMyFollowsDocument, baseOptions);
      }
export function useSearchHostIndexAndMyFollowsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchHostIndexAndMyFollowsQuery, SearchHostIndexAndMyFollowsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchHostIndexAndMyFollowsQuery, SearchHostIndexAndMyFollowsQueryVariables>(SearchHostIndexAndMyFollowsDocument, baseOptions);
        }
export type SearchHostIndexAndMyFollowsQueryHookResult = ReturnType<typeof useSearchHostIndexAndMyFollowsQuery>;
export type SearchHostIndexAndMyFollowsLazyQueryHookResult = ReturnType<typeof useSearchHostIndexAndMyFollowsLazyQuery>;
export type SearchHostIndexAndMyFollowsQueryResult = ApolloReactCommon.QueryResult<SearchHostIndexAndMyFollowsQuery, SearchHostIndexAndMyFollowsQueryVariables>;
export const SearchFollowDocument = gql`
    mutation searchFollow($url: String!) {
  createFollowByUrl(url: $url) {
    id
  }
}
    `;
export type SearchFollowMutationFn = ApolloReactCommon.MutationFunction<SearchFollowMutation, SearchFollowMutationVariables>;

/**
 * __useSearchFollowMutation__
 *
 * To run a mutation, you first call `useSearchFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchFollowMutation, { data, loading, error }] = useSearchFollowMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useSearchFollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SearchFollowMutation, SearchFollowMutationVariables>) {
        return ApolloReactHooks.useMutation<SearchFollowMutation, SearchFollowMutationVariables>(SearchFollowDocument, baseOptions);
      }
export type SearchFollowMutationHookResult = ReturnType<typeof useSearchFollowMutation>;
export type SearchFollowMutationResult = ApolloReactCommon.MutationResult<SearchFollowMutation>;
export type SearchFollowMutationOptions = ApolloReactCommon.BaseMutationOptions<SearchFollowMutation, SearchFollowMutationVariables>;
export const SearchUnfollowDocument = gql`
    mutation searchUnfollow($contextId: String!) {
  delete(contextId: $contextId) {
    __typename
  }
}
    `;
export type SearchUnfollowMutationFn = ApolloReactCommon.MutationFunction<SearchUnfollowMutation, SearchUnfollowMutationVariables>;

/**
 * __useSearchUnfollowMutation__
 *
 * To run a mutation, you first call `useSearchUnfollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSearchUnfollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [searchUnfollowMutation, { data, loading, error }] = useSearchUnfollowMutation({
 *   variables: {
 *      contextId: // value for 'contextId'
 *   },
 * });
 */
export function useSearchUnfollowMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SearchUnfollowMutation, SearchUnfollowMutationVariables>) {
        return ApolloReactHooks.useMutation<SearchUnfollowMutation, SearchUnfollowMutationVariables>(SearchUnfollowDocument, baseOptions);
      }
export type SearchUnfollowMutationHookResult = ReturnType<typeof useSearchUnfollowMutation>;
export type SearchUnfollowMutationResult = ApolloReactCommon.MutationResult<SearchUnfollowMutation>;
export type SearchUnfollowMutationOptions = ApolloReactCommon.BaseMutationOptions<SearchUnfollowMutation, SearchUnfollowMutationVariables>;


export interface SearchHostIndexAndMyFollowsQueryOperation {
  operationName: 'SearchHostIndexAndMyFollows'
  result: SearchHostIndexAndMyFollowsQuery
  variables: SearchHostIndexAndMyFollowsQueryVariables
  type: 'query'
}
export const SearchHostIndexAndMyFollowsQueryName:SearchHostIndexAndMyFollowsQueryOperation['operationName'] = 'SearchHostIndexAndMyFollows'

export const SearchHostIndexAndMyFollowsQueryRefetch = (
  variables:SearchHostIndexAndMyFollowsQueryVariables, 
  context?:any
)=>({
  query:SearchHostIndexAndMyFollowsDocument,
  variables,
  context
})
      


export interface SearchFollowMutationOperation {
  operationName: 'searchFollow'
  result: SearchFollowMutation
  variables: SearchFollowMutationVariables
  type: 'mutation'
}
export const SearchFollowMutationName:SearchFollowMutationOperation['operationName'] = 'searchFollow'

export const SearchFollowMutationRefetch = (
  variables:SearchFollowMutationVariables, 
  context?:any
)=>({
  query:SearchFollowDocument,
  variables,
  context
})
      


export interface SearchUnfollowMutationOperation {
  operationName: 'searchUnfollow'
  result: SearchUnfollowMutation
  variables: SearchUnfollowMutationVariables
  type: 'mutation'
}
export const SearchUnfollowMutationName:SearchUnfollowMutationOperation['operationName'] = 'searchUnfollow'

export const SearchUnfollowMutationRefetch = (
  variables:SearchUnfollowMutationVariables, 
  context?:any
)=>({
  query:SearchUnfollowDocument,
  variables,
  context
})
      
