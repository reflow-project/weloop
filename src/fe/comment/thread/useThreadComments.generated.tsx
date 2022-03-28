import * as Types from '../../../graphql/types.generated';

import { CommentPreviewFragment } from '../../../HOC/modules/previews/comment/CommentPreview.generated';
import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import { CommentPreviewFragmentDoc } from '../../../HOC/modules/previews/comment/CommentPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type ThreadCommentsQueryVariables = {
  threadId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type ThreadCommentsQuery = (
  { __typename: 'RootQueryType' }
  & { thread: Types.Maybe<(
    { __typename: 'Thread' }
    & { comments: Types.Maybe<(
      { __typename: 'CommentsPage' }
      & Pick<Types.CommentsPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Comment' }
        & CommentPreviewFragment
      )> }
    )> }
  )> }
);


export const ThreadCommentsDocument = gql`
    query threadComments($threadId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  thread(threadId: $threadId) @connection(key: "threadComments", filter: ["threadId"]) {
    comments(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CommentPreview
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CommentPreviewFragmentDoc}`;

/**
 * __useThreadCommentsQuery__
 *
 * To run a query within a React component, call `useThreadCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThreadCommentsQuery({
 *   variables: {
 *      threadId: // value for 'threadId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useThreadCommentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ThreadCommentsQuery, ThreadCommentsQueryVariables>) {
        return ApolloReactHooks.useQuery<ThreadCommentsQuery, ThreadCommentsQueryVariables>(ThreadCommentsDocument, baseOptions);
      }
export function useThreadCommentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ThreadCommentsQuery, ThreadCommentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ThreadCommentsQuery, ThreadCommentsQueryVariables>(ThreadCommentsDocument, baseOptions);
        }
export type ThreadCommentsQueryHookResult = ReturnType<typeof useThreadCommentsQuery>;
export type ThreadCommentsLazyQueryHookResult = ReturnType<typeof useThreadCommentsLazyQuery>;
export type ThreadCommentsQueryResult = ApolloReactCommon.QueryResult<ThreadCommentsQuery, ThreadCommentsQueryVariables>;


export interface ThreadCommentsQueryOperation {
  operationName: 'threadComments'
  result: ThreadCommentsQuery
  variables: ThreadCommentsQueryVariables
  type: 'query'
}
export const ThreadCommentsQueryName:ThreadCommentsQueryOperation['operationName'] = 'threadComments'

export const ThreadCommentsQueryRefetch = (
  variables:ThreadCommentsQueryVariables, 
  context?:any
)=>({
  query:ThreadCommentsDocument,
  variables,
  context
})
      
