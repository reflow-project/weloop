import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type InstanceOutboxActivitiesQueryVariables = {
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  limit?: Types.Maybe<Types.Scalars['Int']>
};


export type InstanceOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { instance: Types.Maybe<(
    { __typename: 'Instance' }
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Activity' }
        & InstanceOutboxActivityFragment
      )> }
    )> }
  )> }
);

export type InstanceOutboxActivityFragment = (
  { __typename: 'Activity' }
  & ActivityPreviewFragment
);

export const InstanceOutboxActivityFragmentDoc = gql`
    fragment InstanceOutboxActivity on Activity {
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
export const InstanceOutboxActivitiesDocument = gql`
    query instanceOutboxActivities($after: [Cursor!], $before: [Cursor!], $limit: Int) {
  instance @connection(key: "instanceOutboxActivities") {
    outbox(after: $after, before: $before, limit: $limit) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...InstanceOutboxActivity
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${InstanceOutboxActivityFragmentDoc}`;

/**
 * __useInstanceOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useInstanceOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceOutboxActivitiesQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useInstanceOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>(InstanceOutboxActivitiesDocument, baseOptions);
      }
export function useInstanceOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>(InstanceOutboxActivitiesDocument, baseOptions);
        }
export type InstanceOutboxActivitiesQueryHookResult = ReturnType<typeof useInstanceOutboxActivitiesQuery>;
export type InstanceOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useInstanceOutboxActivitiesLazyQuery>;
export type InstanceOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<InstanceOutboxActivitiesQuery, InstanceOutboxActivitiesQueryVariables>;


export interface InstanceOutboxActivitiesQueryOperation {
  operationName: 'instanceOutboxActivities'
  result: InstanceOutboxActivitiesQuery
  variables: InstanceOutboxActivitiesQueryVariables
  type: 'query'
}
export const InstanceOutboxActivitiesQueryName:InstanceOutboxActivitiesQueryOperation['operationName'] = 'instanceOutboxActivities'

export const InstanceOutboxActivitiesQueryRefetch = (
  variables:InstanceOutboxActivitiesQueryVariables, 
  context?:any
)=>({
  query:InstanceOutboxActivitiesDocument,
  variables,
  context
})
      
