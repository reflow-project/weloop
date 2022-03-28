import { Comment } from 'graphql/types.generated';
import { useCommentPreviewQuery } from './useCommentPreview.generated';
import { useMemo } from 'react';
import { useLikeContext } from 'fe/context/like/useLikeContext';
import { useReplyComment } from '../reply/useReplyComment';

export const useCommentPreview = (commentId: Comment['id']) => {
  const commentPreviewQ = useCommentPreviewQuery({ variables: { commentId } });
  const { toggleLike } = useLikeContext(
    commentPreviewQ.data?.comment?.id,
    commentPreviewQ.data?.comment?.myLike,
    commentPreviewQ.data?.comment?.likerCount,
    'Comment'
  );
  const threadContext = commentPreviewQ.data?.comment?.thread?.context;
  const community =
    threadContext?.__typename === 'Resource'
      ? threadContext.collection?.community
      : threadContext?.__typename === 'Collection'
      ? threadContext.community
      : threadContext?.__typename === 'Community'
      ? threadContext
      : undefined;
  const canReply = !!community?.myFollow;
  const { reply } = useReplyComment(
    commentPreviewQ.data?.comment,
    community?.id,
    commentPreviewQ.data?.comment?.creator?.userName
  );
  return useMemo(() => {
    return {
      comment: commentPreviewQ.data?.comment,
      community,
      toggleLike,
      reply,
      canReply
    };
  }, [commentPreviewQ, community, toggleLike, reply, canReply]);
};
