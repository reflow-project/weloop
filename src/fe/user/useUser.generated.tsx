import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UserDataQueryVariables = {
  username: Types.Scalars['String']
};


export type UserDataQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & HeroUserUserDataFragment
  )> }
);

export type UserDataBiIdQueryVariables = {
  id: Types.Scalars['ID']
};


export type UserDataBiIdQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & HeroUserUserDataFragment
  )> }
);

export type HeroUserUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id'>
  & { profile: Types.Maybe<(
    { __typename: 'Profile' }
    & Pick<Types.Profile, 'name' | 'summary' | 'image' | 'icon'>
  )>, character: Types.Maybe<(
    { __typename: 'Character' }
    & Pick<Types.Character, 'username'>
  )> }
);

export const HeroUserUserDataFragmentDoc = gql`
    fragment HeroUserUserData on User {
  id
  profile {
    name
    summary
    image
    icon
  }
  character {
    username
  }
}
    `;
export const UserDataDocument = gql`
    query userData($username: String!) {
  user(filter: {username: $username}) {
    ...HeroUserUserData
  }
}
    ${HeroUserUserDataFragmentDoc}`;

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
 *      username: // value for 'username'
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
export const UserDataBiIdDocument = gql`
    query userDataBiID($id: ID!) {
  user(filter: {id: $id}) {
    ...HeroUserUserData
  }
}
    ${HeroUserUserDataFragmentDoc}`;

/**
 * __useUserDataBiIdQuery__
 *
 * To run a query within a React component, call `useUserDataBiIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDataBiIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDataBiIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserDataBiIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserDataBiIdQuery, UserDataBiIdQueryVariables>) {
        return ApolloReactHooks.useQuery<UserDataBiIdQuery, UserDataBiIdQueryVariables>(UserDataBiIdDocument, baseOptions);
      }
export function useUserDataBiIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserDataBiIdQuery, UserDataBiIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserDataBiIdQuery, UserDataBiIdQueryVariables>(UserDataBiIdDocument, baseOptions);
        }
export type UserDataBiIdQueryHookResult = ReturnType<typeof useUserDataBiIdQuery>;
export type UserDataBiIdLazyQueryHookResult = ReturnType<typeof useUserDataBiIdLazyQuery>;
export type UserDataBiIdQueryResult = ApolloReactCommon.QueryResult<UserDataBiIdQuery, UserDataBiIdQueryVariables>;


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



export interface UserDataBiIdQueryOperation {
  operationName: 'userDataBiID'
  result: UserDataBiIdQuery
  variables: UserDataBiIdQueryVariables
  type: 'query'
}
export const UserDataBiIdQueryName:UserDataBiIdQueryOperation['operationName'] = 'userDataBiID'

export const UserDataBiIdQueryRefetch = (
  variables:UserDataBiIdQueryVariables,
  context?:any
)=>({
  query: UserDataBiIdDocument,
  variables,
  context
})

