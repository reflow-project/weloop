import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type MyInboxActivitiesQueryVariables = {
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type MyInboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { me: Types.Maybe<(
    { __typename: 'Me' }
    & { user: (
      { __typename: 'User' }
      & Pick<Types.User, 'id'>
      & { inbox: Types.Maybe<(
        { __typename: 'ActivitiesPage' }
        & Pick<Types.ActivitiesPage, 'totalCount'>
        & { pageInfo: (
          { __typename: 'PageInfo' }
          & FullPageInfoFragment
        ), edges: Array<(
          { __typename: 'Activity' }
          & MyInboxActivityFragment
        )> }
      )> }
    ) }
  )> }
);

export type MyInboxActivityFragment = (
  { __typename: 'Activity' }
  & ActivityPreviewFragment
);

export const MyInboxActivityFragmentDoc = gql`
    fragment MyInboxActivity on Activity {
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
export const MyInboxActivitiesDocument = gql`
    query myInboxActivities($after: [Cursor!], $before: [Cursor!], $limit: Int) {
  me @connection(key: "myInboxActivities") {
    user {
      id
      inbox(after: $after, before: $before, limit: $limit) {
        totalCount
        pageInfo {
          ...FullPageInfo
        }
        edges {
          ...MyInboxActivity
        }
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${MyInboxActivityFragmentDoc}`;

/**
 * __useMyInboxActivitiesQuery__
 *
 * To run a query within a React component, call `useMyInboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyInboxActivitiesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useMyInboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyInboxActivitiesQuery, MyInboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<MyInboxActivitiesQuery, MyInboxActivitiesQueryVariables>(MyInboxActivitiesDocument, baseOptions);
      }
export function useMyInboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyInboxActivitiesQuery, MyInboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyInboxActivitiesQuery, MyInboxActivitiesQueryVariables>(MyInboxActivitiesDocument, baseOptions);
        }
export type MyInboxActivitiesQueryHookResult = ReturnType<typeof useMyInboxActivitiesQuery>;
export type MyInboxActivitiesLazyQueryHookResult = ReturnType<typeof useMyInboxActivitiesLazyQuery>;
export type MyInboxActivitiesQueryResult = ApolloReactCommon.QueryResult<MyInboxActivitiesQuery, MyInboxActivitiesQueryVariables>;


export interface MyInboxActivitiesQueryOperation {
  operationName: 'myInboxActivities'
  result: MyInboxActivitiesQuery
  variables: MyInboxActivitiesQueryVariables
  type: 'query'
}
export const MyInboxActivitiesQueryName:MyInboxActivitiesQueryOperation['operationName'] = 'myInboxActivities'

export const MyInboxActivitiesQueryRefetch = (
  variables:MyInboxActivitiesQueryVariables, 
  context?:any
)=>({
  query:MyInboxActivitiesDocument,
  variables,
  context
})
      
