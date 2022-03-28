import * as Types from '../../graphql/types.generated';

import { UserPageUserDataFragment } from '../../HOC/pages/user/UserPage.generated';
import gql from 'graphql-tag';
import { UserPageUserDataFragmentDoc } from '../../HOC/pages/user/UserPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type UserDataQueryVariables = {
  userId: Types.Scalars['String']
};


export type UserDataQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & UserPageUserDataFragment
  )> }
);


export const UserDataDocument = gql`
    query userData($userId: String!) {
  user(userId: $userId) {
    ...UserPageUserData
  }
}
    ${UserPageUserDataFragmentDoc}`;

/**
 * __useUserDataQuery__
 *
 * To run a query within a React component, call `useUserDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
        return ApolloReactHooks.useQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
      }
export function useUserDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserDataQuery, UserDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserDataQuery, UserDataQueryVariables>(UserDataDocument, baseOptions);
        }
export type UserDataQueryHookResult = ReturnType<typeof useUserDataQuery>;
export type UserDataLazyQueryHookResult = ReturnType<typeof useUserDataLazyQuery>;
export type UserDataQueryResult = ApolloReactCommon.QueryResult<UserDataQuery, UserDataQueryVariables>;


export interface UserDataQueryOperation {
  operationName: 'userData'
  result: UserDataQuery
  variables: UserDataQueryVariables
  type: 'query'
}
export const UserDataQueryName:UserDataQueryOperation['operationName'] = 'userData'

export const UserDataQueryRefetch = (
  variables:UserDataQueryVariables, 
  context?:any
)=>({
  query:UserDataDocument,
  variables,
  context
})
      
