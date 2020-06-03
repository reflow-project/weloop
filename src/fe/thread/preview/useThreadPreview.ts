import { Thread } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useThreadPreviewQuery } from './useThreadPreview.generated';
import { useReplyComment } from 'fe/comment/reply/useReplyComment';

export const useThreadPreview = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadPreviewQuery({ variables: { threadId } });
  const thread = threadPreviewQ.data?.thread;

  const community =
    thread?.context?.__typename === 'Resource'
      ? thread?.context.collection?.community
      : thread?.context?.__typename === 'Collection'
      ? thread?.context.community
      : thread?.context?.__typename === 'Community'
      ? thread?.context
      : undefined;
  const canReply = !!community?.myFollow;
  const { reply } = useReplyComment(
    thread?.comments?.edges[0],
    community?.id,
    thread?.comments?.edges[0]?.creator?.userName
  );

  return useMemo(() => {
    const mainComment = thread?.comments?.edges[0];
    const commentCount = thread?.comments?.totalCount;
    const context = thread?.context;
    const lastActivity = thread?.lastActivity;
    return {
      mainComment,
      context,
      reply,
      canReply,
      lastActivity,
      totalReplies: commentCount && commentCount - 1,
      totalComments: thread?.comments ? thread.comments.totalCount - 1 : 0
    };
  }, [thread]);
};
