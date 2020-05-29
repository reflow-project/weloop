import { useFlagPreview } from 'fe/flags/preview/useFlagPreview';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import { useFormik } from 'formik';
import { Flag } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import { ActivityPreview, Status } from 'ui/modules/ActivityPreview';
import { FlaggedItem, FlaggedProps } from 'ui/modules/Previews/FlaggedItem';
import { PreviewComponent } from '../activity/PreviewComponent';
import { CommentPreviewHOC } from '../comment/CommentPreview';

interface FlagPreviewHOC {
  flagId: Flag['id'];
}
export const FlagPreviewHOC: FC<FlagPreviewHOC> = ({ flagId }) => {
  const {
    deactivateFlaggedUser,
    deleteFlagContext,
    flag,
    ignoreFlag
  } = useFlagPreview(flagId);

  const FlaggedItemContextElement: FlaggedProps['FlaggedItemContextElement'] = useMemo(() => {
    if (!flag) {
      return <></>;
    } else if (flag.context.__typename === 'Comment') {
      const comment = flag.context;
      const { communityLink, communityName } = getCommunityInfoStrings(comment);
      const CommentPreview = (
        <CommentPreviewHOC
          commentId={comment.id}
          mainComment={false}
          hideActions={true}
        />
      );
      const actor = flag.creator && getActivityActor(flag.creator);
      return (
        <ActivityPreview
          actor={actor}
          commentActor={
            comment.creator ? getActivityActor(comment.creator) : undefined
          }
          createdAt={comment.createdAt}
          event={'commented'}
          communityLink={communityLink}
          communityName={communityName}
          status={Status.Loaded}
          threadUrl={comment.thread?.id}
          preview={CommentPreview}
        />
      );
    } else {
      return flag ? (
        <PreviewComponent context={flag.context} flagged={true} />
      ) : (
        <></>
      );
    }
  }, [flag]);

  const blockUserFormik: FlaggedProps['blockUserFormik'] = useFormik({
    initialValues: {},
    onSubmit: deactivateFlaggedUser
  });

  const deleteContentFormik: FlaggedProps['deleteContentFormik'] = useFormik({
    initialValues: {},
    onSubmit: deleteFlagContext
  });

  const ignoreFlagFormik: FlaggedProps['blockUserFormik'] = useFormik({
    initialValues: {},
    onSubmit: ignoreFlag
  });

  const props = useMemo<FlaggedProps | null>(() => {
    return flag
      ? {
          FlaggedItemContextElement,
          blockUserFormik,
          deleteContentFormik,
          ignoreFlagFormik,
          reason: flag.message,
          type: flag.context.__typename
        }
      : null;
  }, [
    FlaggedItemContextElement,
    blockUserFormik,
    deleteContentFormik,
    ignoreFlagFormik,
    flag
  ]);
  return props && <FlaggedItem {...props} />;
};
