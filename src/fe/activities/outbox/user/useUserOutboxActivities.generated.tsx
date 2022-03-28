import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { UserPageActivitiesFragment } from '../../../../HOC/pages/user/UserPage.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { UserPageActivitiesFragmentDoc } from '../../../../HOC/pages/user/UserPage.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';




export type UserOutboxActivitiesQueryVariables = {
  userId: Types.Scalars['String'],
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type UserOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Activity' }
        & UserOutboxActivityFragment
      )> }
    )> }
  )> }
);

export type UserOutboxActivityFragment = (
  { __typename: 'Activity' }
  & UserPageActivitiesFragment
  & ActivityPreviewFragment
);

export const UserOutboxActivityFragmentDoc = gql`
    fragment UserOutboxActivity on Activity {
  ...UserPageActivities
  ...ActivityPreview
}
    ${UserPageActivitiesFragmentDoc}
${ActivityPreviewFragmentDoc}`;
export const UserOutboxActivitiesDocument = gql`
    query userOutboxActivities($userId: String!, $after: [Cursor!], $before: [Cursor!], $limit: Int) {
  user(userId: $userId) @connection(key: "userOutboxActivities", filter: ["userId"]) {
    id
    outbox(after: $after, before: $before, limit: $limit) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...UserOutboxActivity
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${UserOutboxActivityFragmentDoc}`;

/**
 * __useUserOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useUserOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserOutboxActivitiesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useUserOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>(UserOutboxActivitiesDocument, baseOptions);
      }
export function useUserOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>(UserOutboxActivitiesDocument, baseOptions);
        }
export type UserOutboxActivitiesQueryHookResult = ReturnType<typeof useUserOutboxActivitiesQuery>;
export type UserOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useUserOutboxActivitiesLazyQuery>;
export type UserOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<UserOutboxActivitiesQuery, UserOutboxActivitiesQueryVariables>;


export interface UserOutboxActivitiesQueryOperation {
  operationName: 'userOutboxActivities'
  result: UserOutboxActivitiesQuery
  variables: UserOutboxActivitiesQueryVariables
  type: 'query'
}
export const UserOutboxActivitiesQueryName:UserOutboxActivitiesQueryOperation['operationName'] = 'userOutboxActivities'

export const UserOutboxActivitiesQueryRefetch = (
  variables:UserOutboxActivitiesQueryVariables, 
  context?:any
)=>({
  query:UserOutboxActivitiesDocument,
  variables,
  context
})
      
