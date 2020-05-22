import React, { useMemo, FC } from 'react';
import { Thread as ThreadPageUI, Props } from 'ui/pages/thread';
import { CommentPreviewHOC } from 'HOC/modules/previews/comment/CommentPreview';
import { useThreadPreview } from 'fe/thread/preview/useThreadPreview';
import { Thread } from 'graphql/types.generated';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import {
  ActivityPreview,
  Status as ActivityPreviewStatus,
  ActivityLoaded as ActivityPreviewProps
} from 'ui/modules/ActivityPreview';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { useThreadComments } from 'fe/comment/thread/useThreadComments';
import { PreviewIndex } from 'HOC/modules/previews';
import { useFormikPage } from 'fe/lib/helpers/usePage';
import { useFormik } from 'formik';
import { Box } from 'rebass';

export interface ThreadPage {
  threadId: Thread['id'];
}
export const ThreadPage: FC<ThreadPage> = ({ threadId }) => {
  const { commentPage } = useThreadComments(threadId);
  const [loadMoreComments] = useFormikPage(commentPage);
  const thread = useThreadPreview(threadId);

  const replyFormik = useFormik<{ replyMessage: string }>({
    initialValues: { replyMessage: '' },
    onSubmit: ({ replyMessage }) => thread.reply(replyMessage)
  });

  const uiProps = useMemo<null | Props>(() => {
    const { context, mainComment } = thread;
    if (!(mainComment && context)) {
      return null;
    }
    const actorContext = context.__typename === 'Flag' ? null : context;

    const {
      communityName,
      communityId,
      communityIcon
    } = getCommunityInfoStrings(actorContext);

    const activityProps: Pick<
      ActivityPreviewProps,
      'status' | 'communityLink' | 'communityName' | 'event'
    > = {
      communityLink: `/communities/${communityId}`,
      communityName,
      event: 'started a discussion',
      status: ActivityPreviewStatus.Loaded
    };

    const MainThread = (
      <ActivityPreview
        {...{
          ...activityProps,
          actor: mainComment.creator
            ? getActivityActor(mainComment.creator)
            : null,
          preview: (
            <CommentPreviewHOC commentId={mainComment.id} mainComment={true} />
          ),
          createdAt: mainComment.createdAt
        }}
      />
    );

    const Comments = (
      <>
        {commentPage.edges
          .filter(comment => comment.id !== thread.mainComment?.id)
          .map(comment => (
            <Box mb={1}>
              <ActivityPreview
                key={comment.id}
                {...{
                  ...activityProps,
                  event: 'replied',
                  actor: comment.creator
                    ? getActivityActor(comment.creator)
                    : { icon: '', link: '', name: '' },
                  preview: (
                    <CommentPreviewHOC
                      commentId={comment.id}
                      mainComment={false}
                      hideActions={true}
                    />
                  ),
                  createdAt: comment.createdAt
                }}
              />
            </Box>
          ))}
      </>
    );

    const Context = <PreviewIndex ctx={thread.context} />;
    const props: Props = {
      Comments,
      Context,
      MainThread,
      communityIcon,
      communityId,
      communityName,
      reply: thread.canReply
        ? {
            replyFormik
          }
        : null,
      isCommunityContext: thread.context?.__typename === 'Community',
      loadMoreComments
    };

    return props;
  }, [thread, commentPage, loadMoreComments]);
  return uiProps && <ThreadPageUI {...uiProps} />;
};
