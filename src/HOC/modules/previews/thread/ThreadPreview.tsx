import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  CommentProps as ThreadPreviewUIProps,
  Thread as ThreadPreviewUI
} from 'ui/modules/Previews/Thread';

export interface Props {
  threadId: Thread['id'];
}

export const ThreadPreviewHOC: FC<Props> = ({ threadId }) => {
  const { mainComment, totalReplies } = useThreadPreview(threadId);

  const threadPreviewProps = useMemo<ThreadPreviewUIProps | null>(() => {
    if (!mainComment) {
      return null;
    }

    const props: ThreadPreviewUIProps = {
      content: mainComment.content,
      // lastActivity: lastActivity ? `${lastActivity}` : '',
      lastActivity: mainComment.createdAt,
      members: [],
      totalLikes: `${mainComment.likerCount || 0}`,
      totalReplies: totalReplies ? `${totalReplies}` : '',
      link: `/thread/${threadId}`
    };

    return props;
  }, [mainComment, totalReplies]);

  return threadPreviewProps && <ThreadPreviewUI {...threadPreviewProps} />;
};
