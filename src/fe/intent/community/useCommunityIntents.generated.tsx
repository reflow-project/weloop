import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type IntentPreviewFragment = (
  { __typename: 'Intent' }
  & Pick<Types.Intent, 'id' | 'name' | 'note'>
  & { tags: Types.Maybe<Array<Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }>>> }
);

export type CommunityIntentsQueryVariables = {
  communityId?: Types.Maybe<Types.Scalars['ID']>
};


export type CommunityIntentsQuery = (
  { __typename: 'RootQueryType' }
  & { intentsFiltered: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Intent' }
    & IntentPreviewFragment
  )>>> }
);

export const IntentPreviewFragmentDoc = gql`
    fragment IntentPreview on Intent {
  id
  name
  note
  tags {
    __typename
  }
}
    `;
export const CommunityIntentsDocument = gql`
    query communityIntents($communityId: ID) {
  intentsFiltered(inScopeOf: [$communityId]) {
    ...IntentPreview
  }
}
    ${IntentPreviewFragmentDoc}`;

/**
 * __useCommunityIntentsQuery__
 *
 * To run a query within a React component, call `useCommunityIntentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityIntentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityIntentsQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useCommunityIntentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityIntentsQuery, CommunityIntentsQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityIntentsQuery, CommunityIntentsQueryVariables>(CommunityIntentsDocument, baseOptions);
      }
export function useCommunityIntentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityIntentsQuery, CommunityIntentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityIntentsQuery, CommunityIntentsQueryVariables>(CommunityIntentsDocument, baseOptions);
        }
export type CommunityIntentsQueryHookResult = ReturnType<typeof useCommunityIntentsQuery>;
export type CommunityIntentsLazyQueryHookResult = ReturnType<typeof useCommunityIntentsLazyQuery>;
export type CommunityIntentsQueryResult = ApolloReactCommon.QueryResult<CommunityIntentsQuery, CommunityIntentsQueryVariables>;


export interface CommunityIntentsQueryOperation {
  operationName: 'communityIntents'
  result: CommunityIntentsQuery
  variables: CommunityIntentsQueryVariables
  type: 'query'
}
export const CommunityIntentsQueryName:CommunityIntentsQueryOperation['operationName'] = 'communityIntents'

export const CommunityIntentsQueryRefetch = (
  variables:CommunityIntentsQueryVariables, 
  context?:any
)=>({
  query:CommunityIntentsDocument,
  variables,
  context
})
      
