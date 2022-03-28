import * as Types from '../../../graphql/types.generated';

import { CommentPreviewFragment } from '../../../HOC/modules/previews/comment/CommentPreview.generated';
import gql from 'graphql-tag';
import { CommentPreviewFragmentDoc } from '../../../HOC/modules/previews/comment/CommentPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CommentPreviewQueryVariables = {
  commentId: Types.Scalars['String']
};


export type CommentPreviewQuery = (
  { __typename: 'RootQueryType' }
  & { comment: Types.Maybe<(
    { __typename: 'Comment' }
    & Pick<Types.Comment, 'id'>
    & CommentPreviewFragment
  )> }
);


export const CommentPreviewDocument = gql`
    query commentPreview($commentId: String!) {
  comment(commentId: $commentId) {
    id
    ...CommentPreview
  }
}
    ${CommentPreviewFragmentDoc}`;

/**
 * __useCommentPreviewQuery__
 *
 * To run a query within a React component, call `useCommentPreviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentPreviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentPreviewQuery({
 *   variables: {
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useCommentPreviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommentPreviewQuery, CommentPreviewQueryVariables>) {
        return ApolloReactHooks.useQuery<CommentPreviewQuery, CommentPreviewQueryVariables>(CommentPreviewDocument, baseOptions);
      }
export function useCommentPreviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommentPreviewQuery, CommentPreviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommentPreviewQuery, CommentPreviewQueryVariables>(CommentPreviewDocument, baseOptions);
        }
export type CommentPreviewQueryHookResult = ReturnType<typeof useCommentPreviewQuery>;
export type CommentPreviewLazyQueryHookResult = ReturnType<typeof useCommentPreviewLazyQuery>;
export type CommentPreviewQueryResult = ApolloReactCommon.QueryResult<CommentPreviewQuery, CommentPreviewQueryVariables>;


export interface CommentPreviewQueryOperation {
  operationName: 'commentPreview'
  result: CommentPreviewQuery
  variables: CommentPreviewQueryVariables
  type: 'query'
}
export const CommentPreviewQueryName:CommentPreviewQueryOperation['operationName'] = 'commentPreview'

export const CommentPreviewQueryRefetch = (
  variables:CommentPreviewQueryVariables, 
  context?:any
)=>({
  query:CommentPreviewDocument,
  variables,
  context
})
      
