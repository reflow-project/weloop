import * as Types from '../../../graphql/types.generated';

import { ThreadPreviewFragment } from '../../../HOC/modules/previews/thread/ThreadPreview.generated';
import gql from 'graphql-tag';
import { ThreadPreviewFragmentDoc } from '../../../HOC/modules/previews/thread/ThreadPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type ThreadPreviewQueryVariables = {
  threadId: Types.Scalars['String']
};


export type ThreadPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { thread: Types.Maybe<(
    { __typename: 'Thread' }
    & Pick<Types.Thread, 'id'>
    & ThreadPreviewFragment
  )> }
);


export const ThreadPreviewDocument = gql`
    query threadPreview($threadId: String!) {
  thread(threadId: $threadId) {
    id
    ...ThreadPreview
  }
}
    ${ThreadPreviewFragmentDoc}`;

/**
 * __useThreadPreviewQuery__
 *
 * To run a query within a React component, call `useThreadPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadPreviewQuery({
 *   variables: {
 *      threadId: // value for 'threadId'
 *   },
 * });
 */
export function useThreadPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ThreadPreviewQuery, ThreadPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<ThreadPreviewQuery, ThreadPreviewQueryVariables>(ThreadPreviewDocument, baseOptions);
      }
export function useThreadPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ThreadPreviewQuery, ThreadPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ThreadPreviewQuery, ThreadPreviewQueryVariables>(ThreadPreviewDocument, baseOptions);
        }
export type ThreadPreviewQueryHookResult = ReturnType<typeof useThreadPreviewQuery>;
export type ThreadPreviewLazyQueryHookResult = ReturnType<typeof useThreadPreviewLazyQuery>;
export type ThreadPreviewQueryResult = ApolloReactCommon.QueryResult<ThreadPreviewQuery, ThreadPreviewQueryVariables>;


export interface ThreadPreviewQueryOperation {
  operationName: 'threadPreview'
  result: ThreadPreviewQuery
  variables: ThreadPreviewQueryVariables
  type: 'query'
}
export const ThreadPreviewQueryName:ThreadPreviewQueryOperation['operationName'] = 'threadPreview'

export const ThreadPreviewQueryRefetch = (
  variables:ThreadPreviewQueryVariables, 
  context?:any
)=>({
  query:ThreadPreviewDocument,
  variables,
  context
})
      
