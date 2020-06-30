import { useFlagPreview } from 'fe/flags/preview/useFlagPreview';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import { Flag } from 'graphql/types.generated';
import React, { FC, useMemo, useState, useCallback } from 'react';
import { ActivityPreview, Status } from 'ui/modules/ActivityPreview';
import { FlaggedItem, FlaggedProps } from 'ui/modules/Previews/FlaggedItem';
import { PreviewComponent } from '../activity/PreviewComponent';
import { CommentPreviewHOC } from '../comment/CommentPreview';
import Modal from 'ui/modules/Modal';
import { ConfirmationPanel } from 'ui/modules/ConfirmationPanel';
import { i18n } from 'context/global/localizationCtx';
import { threadLocation } from 'routes/ThreadPageRoute';

interface FlagPreviewHOC {
  flagId: Flag['id'];
}

type ConfirmType = 'delete' | 'block' | 'ignore';

export const FlagPreviewHOC: FC<FlagPreviewHOC> = ({ flagId }) => {
  const {
    deactivateFlaggedUser,
    deleteFlagContext,
    flag,
    ignoreFlag,
    deleteFlagContextStatus,
    deactivateFlaggedUserStatus,
    ignoreFlagStatus
  } = useFlagPreview(flagId);

  const [confirmType, setConfirmType] = useState<ConfirmType>();
  const closeConfirm = useCallback(() => setConfirmType(undefined), []);
  const ConfirmActionModal = !(flag && confirmType) ? null : (
    <Modal closeModal={closeConfirm}>
      {confirmType === 'delete' ? (
        <ConfirmationPanel
          cancel={closeConfirm}
          confirm={() => deleteFlagContext().then(closeConfirm)}
          waiting={deleteFlagContextStatus.loading || ignoreFlagStatus.loading}
          action={i18n._(`Delete flagged content`)}
          description={i18n._(
            `Are you sure you want to permanently delete this ${flag.context.__typename} content?`
          )}
          title={i18n._(`Delete`)}
        />
      ) : confirmType === 'block' ? (
        <ConfirmationPanel
          cancel={closeConfirm}
          confirm={() => deactivateFlaggedUser().then(closeConfirm)}
          waiting={deactivateFlaggedUserStatus.loading}
          action={i18n._(`Delete user`)}
          description={i18n._(`Are you sure you want to permanently delete this user?`)}
          title={i18n._(`Delete`)}
        />
      ) : confirmType === 'ignore' ? (
        <ConfirmationPanel
          cancel={closeConfirm}
          confirm={() => ignoreFlag().then(closeConfirm)}
          waiting={deleteFlagContextStatus.loading}
          action={i18n._(`Ignore flag`)}
          description={i18n._(`Are you sure you want to ignore and delete this flag?`)}
          title={i18n._(`Ignore`)}
        />
      ) : null // never
      }
    </Modal>
  );

  const FlaggedItemContextElement: FlaggedProps['FlaggedItemContextElement'] = useMemo(() => {
    if (!flag) {
      return <></>;
    } else if (flag.context.__typename === 'Comment') {
      const comment = flag.context;
      const { communityLink, communityName } = getCommunityInfoStrings(comment);
      const CommentPreview = (
        <CommentPreviewHOC commentId={comment.id} mainComment={false} hideActions={true} />
      );
      const actor = flag.creator && getActivityActor(flag.creator);
      return (
        <ActivityPreview
          actor={actor}
          commentActor={comment.creator ? getActivityActor(comment.creator) : undefined}
          createdAt={comment.createdAt}
          event={'commented'}
          communityLink={communityLink}
          communityName={communityName}
          status={Status.Loaded}
          threadUrl={
            comment.thread?.id && threadLocation.getPath({ threadId: comment.thread.id }, undefined)
          }
          preview={CommentPreview}
        />
      );
    } else {
      return flag ? <PreviewComponent context={flag.context} flagged={true} /> : <></>;
    }
  }, [flag]);

  const props = useMemo<FlaggedProps | null>(() => {
    return flag
      ? {
          FlaggedItemContextElement,
          reason: flag.message,
          type: flag.context.__typename,
          blockUser: () => setConfirmType('block'),
          deleteContent: () => setConfirmType('delete'),
          ignoreFlag: () => setConfirmType('ignore')
        }
      : null;
  }, [FlaggedItemContextElement, flag]);
  return (
    props && (
      <>
        {ConfirmActionModal}
        <FlaggedItem {...props} />
      </>
    )
  );
};
