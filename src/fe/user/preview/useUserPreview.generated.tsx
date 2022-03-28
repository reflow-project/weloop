import * as Types from '../../../graphql/types.generated';

import { UserPreviewFragment } from '../../../HOC/modules/previews/user/UserPreview.generated';
import gql from 'graphql-tag';
import { UserPreviewFragmentDoc } from '../../../HOC/modules/previews/user/UserPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type UserPreviewQueryVariables = {
  userId: Types.Scalars['String']
};


export type UserPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & UserPreviewFragment
  )> }
);


export const UserPreviewDocument = gql`
    query userPreview($userId: String!) {
  user(userId: $userId) {
    id
    ...UserPreview
  }
}
    ${UserPreviewFragmentDoc}`;

/**
 * __useUserPreviewQuery__
 *
 * To run a query within a React component, call `useUserPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPreviewQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserPreviewQuery, UserPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<UserPreviewQuery, UserPreviewQueryVariables>(UserPreviewDocument, baseOptions);
      }
export function useUserPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserPreviewQuery, UserPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserPreviewQuery, UserPreviewQueryVariables>(UserPreviewDocument, baseOptions);
        }
export type UserPreviewQueryHookResult = ReturnType<typeof useUserPreviewQuery>;
export type UserPreviewLazyQueryHookResult = ReturnType<typeof useUserPreviewLazyQuery>;
export type UserPreviewQueryResult = ApolloReactCommon.QueryResult<UserPreviewQuery, UserPreviewQueryVariables>;


export interface UserPreviewQueryOperation {
  operationName: 'userPreview'
  result: UserPreviewQuery
  variables: UserPreviewQueryVariables
  type: 'query'
}
export const UserPreviewQueryName:UserPreviewQueryOperation['operationName'] = 'userPreview'

export const UserPreviewQueryRefetch = (
  variables:UserPreviewQueryVariables, 
  context?:any
)=>({
  query:UserPreviewDocument,
  variables,
  context
})
      
