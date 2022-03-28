import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../HOC/modules/previews/activity/ActivityPreview.generated';
import gql from 'graphql-tag';
import { ActivityPreviewFragmentDoc } from '../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type ActivityPreviewQueryVariables = {
  activityId: Types.Scalars['String']
};


export type ActivityPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { activity: Types.Maybe<(
    { __typename: 'Activity' }
    & Pick<Types.Activity, 'id'>
    & ActivityPreviewFragment
  )> }
);


export const ActivityPreviewDocument = gql`
    query activityPreview($activityId: String!) {
  activity(activityId: $activityId) {
    id
    ...ActivityPreview
  }
}
    ${ActivityPreviewFragmentDoc}`;

/**
 * __useActivityPreviewQuery__
 *
 * To run a query within a React component, call `useActivityPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityPreviewQuery({
 *   variables: {
 *      activityId: // value for 'activityId'
 *   },
 * });
 */
export function useActivityPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActivityPreviewQuery, ActivityPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<ActivityPreviewQuery, ActivityPreviewQueryVariables>(ActivityPreviewDocument, baseOptions);
      }
export function useActivityPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActivityPreviewQuery, ActivityPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActivityPreviewQuery, ActivityPreviewQueryVariables>(ActivityPreviewDocument, baseOptions);
        }
export type ActivityPreviewQueryHookResult = ReturnType<typeof useActivityPreviewQuery>;
export type ActivityPreviewLazyQueryHookResult = ReturnType<typeof useActivityPreviewLazyQuery>;
export type ActivityPreviewQueryResult = ApolloReactCommon.QueryResult<ActivityPreviewQuery, ActivityPreviewQueryVariables>;


export interface ActivityPreviewQueryOperation {
  operationName: 'activityPreview'
  result: ActivityPreviewQuery
  variables: ActivityPreviewQueryVariables
  type: 'query'
}
export const ActivityPreviewQueryName:ActivityPreviewQueryOperation['operationName'] = 'activityPreview'

export const ActivityPreviewQueryRefetch = (
  variables:ActivityPreviewQueryVariables, 
  context?:any
)=>({
  query:ActivityPreviewDocument,
  variables,
  context
})
      
