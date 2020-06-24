import { useLMSGQL } from 'fe/lib/moodleLMS/useSendToMoodle';
import { useResourcePreview } from 'fe/resource/preview/useResourcePreview';
import { useFormik } from 'formik';
import { Resource } from 'graphql/types.generated';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
// import { accepted_license_types } from 'mn-constants';
import React, { FC, useMemo, useReducer } from 'react';
import {
  Props as ResourcePreviewProps,
  Resource as ResourcePreviewUI
} from 'ui/modules/Previews/Resource';
import { ResourcePreviewFragment } from './ResourcePreview.generated';
import { collectionLocation } from 'routes/CollectionPageRoute';
import Modal from 'ui/modules/Modal';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';

export interface Props {
  resourceId: Resource['id'];
  flagged?: boolean;
}

export const ResourcePreviewHOC: FC<Props> = ({ resourceId, flagged }) => {
  const { resource, toggleLike } = useResourcePreview(resourceId);

  const toggleLikeFormik = useFormik({
    initialValues: {},
    onSubmit: toggleLike
  });
  const { LMSPrefsPanel } = useLMSGQL(resource);
  const notifyMustLogin = useNotifyMustLogin();
  const [isOpenDropdown, toggleDropdown] = useReducer(is => !is, false);
  const [isOpenSendToMoodle, toggleSendToMoodleModal] = useReducer(is => !is, false);
  const [isOpenFlag, toggleFlagModal] = useReducer(is => (notifyMustLogin() ? false : !is), false);
  const resourcePreviewProps = useMemo<ResourcePreviewProps | null>(() => {
    if (!resource) {
      return null;
    }
    const hideActions = flagged ? true : false;
    return {
      ...resourceFragment2UIProps({
        resource,
        like: {
          iLikeIt: !!resource.myLike,
          toggleLikeFormik,
          totalLikes: resource.likers?.totalCount || 0
        },
        hideActions
      }),
      isOpenDropdown,
      toggleDropdown,
      sendToMoodle: toggleSendToMoodleModal,
      toggleFlag: toggleFlagModal
    };
  }, [resource, flagged, toggleLikeFormik, isOpenDropdown]);

  const FlagModal =
    isOpenFlag && resource ? (
      <Modal closeModal={toggleFlagModal}>
        <FlagModalHOC done={toggleFlagModal} ctx={resource} />
      </Modal>
    ) : null;
  const MoodleModal = isOpenSendToMoodle ? (
    <Modal closeModal={toggleSendToMoodleModal}>
      <LMSPrefsPanel done={toggleSendToMoodleModal} />
    </Modal>
  ) : null;
  return (
    resourcePreviewProps && (
      <>
        {FlagModal}
        {MoodleModal}
        <ResourcePreviewUI {...resourcePreviewProps} />
      </>
    )
  );
};

export const resourceFragment2UIProps = (args: {
  resource: ResourcePreviewFragment;
  like: ResourcePreviewProps['like'];
  // FlagModal: ResourcePreviewProps['FlagModal'];
  // MoodlePanel: ResourcePreviewProps['MoodlePanel'];
  hideActions: boolean;
}) => {
  const { /* FlagModal, MoodlePanel, */ hideActions, like, resource } = args;
  const props: Omit<
    ResourcePreviewProps,
    'isOpenDropdown' | 'toggleDropdown' | 'sendToMoodle' | 'toggleFlag'
  > = {
    icon: resource.icon?.url || '',
    link: resource.payload?.url || '',
    name: resource.name || '',
    summary: resource.summary || '',
    like,
    isFile: !!resource.payload?.upload,
    //acceptedLicenses: accepted_license_types,
    license: resource.license || null,
    isFlagged: !!resource.myFlag,
    //FlagModal,
    // sendToMoodle,
    // MoodlePanel,
    // type: resource.payload?.mediaType,
    hideActions: hideActions,
    collectionName: resource.collection?.name || '',
    collectionLink: collectionLocation.getPath(
      { collectionId: resource.collection?.id || '', tab: undefined },
      undefined
    )
  };
  return props;
};
