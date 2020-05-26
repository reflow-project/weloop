import { useCommentPreview } from 'fe/comment/preview/useCommentPreview';
import { Comment } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  LikedComment as LikedCommentPreviewUI,
  CommentProps as LikedCommentProps
} from 'ui/modules/Previews/LikedComment';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import { useFormik } from 'formik';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';

export interface LikedCommentPreviewHOC {
  commentId: Comment['id'];
}

export const LikedCommentPreviewHOC: FC<LikedCommentPreviewHOC> = ({
  commentId
}) => {
  const { comment, toggleLike, reply } = useCommentPreview(commentId);
  const toggleLikeFormik = useFormik({
    initialValues: {},
    onSubmit: toggleLike
  });

  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => reply(replyMessage)
  });

  const likkedCommentPreviewProps = useMemo<LikedCommentProps | null>(() => {
    if (!comment) {
      return null;
    }
    const { communityLink, communityName } = getCommunityInfoStrings(comment);
    const props: LikedCommentProps = {
      url: comment.thread ? `/thread/${comment.thread.id}` : '',
      communityLink,
      communityName,
      actor: comment.creator
        ? getActivityActor(comment.creator)
        : { icon: '', link: '', name: '' },
      createdAt: comment.createdAt,
      content: comment.content,
      reply: {
        replyFormik
      },
      like: {
        iLikeIt: !!comment.myLike,
        totalLikes: comment.likerCount || 0,
        toggleLikeFormik
      },
      FlagModal: ({ done }) => <FlagModalHOC done={done} ctx={comment} />
    };
    return props;
  }, [comment, toggleLikeFormik]);

  return (
    likkedCommentPreviewProps && (
      <LikedCommentPreviewUI {...likkedCommentPreviewProps} />
    )
  );
};
