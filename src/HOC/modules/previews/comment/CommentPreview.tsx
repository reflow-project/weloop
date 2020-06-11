import { useCommentPreview } from 'fe/comment/preview/useCommentPreview';
import { Comment } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Comment as CommentPreviewUI,
  CommentProps
} from 'ui/modules/Previews/Comment';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import { useFormik } from 'formik';
import { MainComment } from 'ui/modules/Previews/MainComment';

export interface CommentPreviewHOC {
  commentId: Comment['id'];
  mainComment: boolean;
  hideActions?: boolean;
}

export const CommentPreviewHOC: FC<CommentPreviewHOC> = ({
  commentId,
  mainComment,
  hideActions
}) => {
  const { comment, toggleLike, reply, canReply } = useCommentPreview(commentId);
  const toggleLikeFormik = useFormik({
    initialValues: {},
    onSubmit: toggleLike
  });

  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => reply(replyMessage)
  });

  const commentPreviewProps = useMemo<CommentProps | null>(() => {
    if (!comment) {
      return null;
    }
    const props: CommentProps = {
      url: comment.thread ? `/thread/${comment.thread.id}` : '',
      content: comment.content,
      reply: canReply
        ? {
            replyFormik
          }
        : null,
      like: {
        iLikeIt: !!comment.myLike,
        totalLikes: comment.likerCount || 0,
        toggleLikeFormik
      },
      isFlagged: !!comment.myFlag,
      FlagModal: ({ done }) => <FlagModalHOC done={done} ctx={comment} />,
      hideActions: hideActions
    };
    return props;
  }, [canReply, comment, hideActions, replyFormik, toggleLikeFormik]);

  return (
    commentPreviewProps &&
    (mainComment ? (
      <MainComment {...commentPreviewProps} />
    ) : (
      <CommentPreviewUI {...commentPreviewProps} />
    ))
  );
};
