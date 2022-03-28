import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type EditCommunityQueryDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'name' | 'summary' | 'updatedAt'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export type EditCommunityDataQueryVariables = {
  communityId: Types.Scalars['String']
};


export type EditCommunityDataQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & EditCommunityQueryDataFragment
  )> }
);

export type EditCommunityMutationVariables = {
  community: Types.CommunityUpdateInput,
  communityId: Types.Scalars['String'],
  icon?: Types.Maybe<Types.UploadInput>
};


export type EditCommunityMutation = (
  { __typename: 'RootMutationType' }
  & { updateCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & EditCommunityQueryDataFragment
  )> }
);

export const EditCommunityQueryDataFragmentDoc = gql`
    fragment EditCommunityQueryData on Community {
  id
  name
  summary
  icon {
    id
    url
  }
  updatedAt
}
    `;
export const EditCommunityDataDocument = gql`
    query editCommunityData($communityId: String!) {
  community(communityId: $communityId) {
    ...EditCommunityQueryData
  }
}
    ${EditCommunityQueryDataFragmentDoc}`;

/**
 * __useEditCommunityDataQuery__
 *
 * To run a query within a React component, call `useEditCommunityDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditCommunityDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditCommunityDataQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *   },
 * });
 */
export function useEditCommunityDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditCommunityDataQuery, EditCommunityDataQueryVariables>) {
        return ApolloReactHooks.useQuery<EditCommunityDataQuery, EditCommunityDataQueryVariables>(EditCommunityDataDocument, baseOptions);
      }
export function useEditCommunityDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditCommunityDataQuery, EditCommunityDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditCommunityDataQuery, EditCommunityDataQueryVariables>(EditCommunityDataDocument, baseOptions);
        }
export type EditCommunityDataQueryHookResult = ReturnType<typeof useEditCommunityDataQuery>;
export type EditCommunityDataLazyQueryHookResult = ReturnType<typeof useEditCommunityDataLazyQuery>;
export type EditCommunityDataQueryResult = ApolloReactCommon.QueryResult<EditCommunityDataQuery, EditCommunityDataQueryVariables>;
export const EditCommunityDocument = gql`
    mutation editCommunity($community: CommunityUpdateInput!, $communityId: String!, $icon: UploadInput) {
  updateCommunity(community: $community, communityId: $communityId, icon: $icon) {
    ...EditCommunityQueryData
  }
}
    ${EditCommunityQueryDataFragmentDoc}`;
export type EditCommunityMutationFn = ApolloReactCommon.MutationFunction<EditCommunityMutation, EditCommunityMutationVariables>;

/**
 * __useEditCommunityMutation__
 *
 * To run a mutation, you first call `useEditCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommunityMutation, { data, loading, error }] = useEditCommunityMutation({
 *   variables: {
 *      community: // value for 'community'
 *      communityId: // value for 'communityId'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useEditCommunityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<EditCommunityMutation, EditCommunityMutationVariables>) {
        return ApolloReactHooks.useMutation<EditCommunityMutation, EditCommunityMutationVariables>(EditCommunityDocument, baseOptions);
      }
export type EditCommunityMutationHookResult = ReturnType<typeof useEditCommunityMutation>;
export type EditCommunityMutationResult = ApolloReactCommon.MutationResult<EditCommunityMutation>;
export type EditCommunityMutationOptions = ApolloReactCommon.BaseMutationOptions<EditCommunityMutation, EditCommunityMutationVariables>;


export interface EditCommunityDataQueryOperation {
  operationName: 'editCommunityData'
  result: EditCommunityDataQuery
  variables: EditCommunityDataQueryVariables
  type: 'query'
}
export const EditCommunityDataQueryName:EditCommunityDataQueryOperation['operationName'] = 'editCommunityData'

export const EditCommunityDataQueryRefetch = (
  variables:EditCommunityDataQueryVariables, 
  context?:any
)=>({
  query:EditCommunityDataDocument,
  variables,
  context
})
      


export interface EditCommunityMutationOperation {
  operationName: 'editCommunity'
  result: EditCommunityMutation
  variables: EditCommunityMutationVariables
  type: 'mutation'
}
export const EditCommunityMutationName:EditCommunityMutationOperation['operationName'] = 'editCommunity'

export const EditCommunityMutationRefetch = (
  variables:EditCommunityMutationVariables, 
  context?:any
)=>({
  query:EditCommunityDocument,
  variables,
  context
})
      
