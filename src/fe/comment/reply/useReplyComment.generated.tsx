import * as Types from '../../../graphql/types.generated';

import { CommentPreviewFragment } from '../../../HOC/modules/previews/comment/CommentPreview.generated';
import gql from 'graphql-tag';
import { CommentPreviewFragmentDoc } from '../../../HOC/modules/previews/comment/CommentPreview.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type ReplyMutationVariables = {
  comment: Types.CommentInput,
  inReplyToCommentId: Types.Scalars['String'],
  threadId: Types.Scalars['String']
};


export type ReplyMutation = (
  { __typename: 'RootMutationType' }
  & { createReply: Types.Maybe<(
    { __typename: 'Comment' }
    & CommentPreviewFragment
  )> }
);


export const ReplyDocument = gql`
    mutation reply($comment: CommentInput!, $inReplyToCommentId: String!, $threadId: String!) {
  createReply(comment: $comment, inReplyToId: $inReplyToCommentId, threadId: $threadId) {
    ...CommentPreview
  }
}
    ${CommentPreviewFragmentDoc}`;
export type ReplyMutationFn = ApolloReactCommon.MutationFunction<ReplyMutation, ReplyMutationVariables>;

/**
 * __useReplyMutation__
 *
 * To run a mutation, you first call `useReplyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReplyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [replyMutation, { data, loading, error }] = useReplyMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      inReplyToCommentId: // value for 'inReplyToCommentId'
 *      threadId: // value for 'threadId'
 *   },
 * });
 */
export function useReplyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ReplyMutation, ReplyMutationVariables>) {
        return ApolloReactHooks.useMutation<ReplyMutation, ReplyMutationVariables>(ReplyDocument, baseOptions);
      }
export type ReplyMutationHookResult = ReturnType<typeof useReplyMutation>;
export type ReplyMutationResult = ApolloReactCommon.MutationResult<ReplyMutation>;
export type ReplyMutationOptions = ApolloReactCommon.BaseMutationOptions<ReplyMutation, ReplyMutationVariables>;


export interface ReplyMutationOperation {
  operationName: 'reply'
  result: ReplyMutation
  variables: ReplyMutationVariables
  type: 'mutation'
}
export const ReplyMutationName:ReplyMutationOperation['operationName'] = 'reply'

export const ReplyMutationRefetch = (
  variables:ReplyMutationVariables, 
  context?:any
)=>({
  query:ReplyDocument,
  variables,
  context
})
      
