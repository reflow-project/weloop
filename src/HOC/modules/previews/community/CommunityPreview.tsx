import { useCommunityPreview } from 'fe/community/preview/useCommunityPreview';
import { Community } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Community as CommunityPreviewUI,
  Props as CommunityPreviewProps
} from 'ui/modules/Previews/Community';
import { useFormik } from 'formik';
import { CommunityPreviewFragment } from './CommunityPreview.generated';
import { FormikHook } from 'ui/@types/types';

export interface Props {
  communityId: Community['id'];
  flagged?: boolean;
}

export const CommunityPreviewHOC: FC<Props> = ({ communityId, flagged }) => {
  const { community, toggleJoin, isCreator } = useCommunityPreview(communityId);

  const toggleJoinFormik = useFormik({
    initialValues: {},
    onSubmit: toggleJoin
  });
  const communityPreviewProps = useMemo<CommunityPreviewProps | null>(() => {
    if (!community) {
      return null;
    }
    const hideActions = flagged ? true : false;
    return communityFragment2UIProps({
      community,
      hideActions,
      isCreator,
      toggleJoinFormik
    });
  }, [community, flagged, isCreator, toggleJoinFormik]);

  return communityPreviewProps && <CommunityPreviewUI {...communityPreviewProps} />;
};

export const communityFragment2UIProps = (args: {
  community: CommunityPreviewFragment;
  toggleJoinFormik: FormikHook;
  hideActions: boolean;
  isCreator: boolean;
}) => {
  const { community, hideActions, toggleJoinFormik, isCreator } = args;
  const {
    id,
    canonicalUrl,
    icon,
    name,
    summary,
    myFollow,
    collectionCount,
    followerCount,
    threads,
    displayUsername,
    isLocal
  } = community;

  const props: CommunityPreviewProps = {
    icon: icon?.url || '',
    name,
    isCreator,
    summary: summary || '',
    collectionsCount: collectionCount || 0,
    joined: !!myFollow,
    followersCount: followerCount || 0,
    threadsCount: threads?.totalCount || 0,
    toggleJoinFormik,
    link: {
      url: isLocal ? `/communities/${id}` : canonicalUrl || '',
      external: !isLocal
    },
    displayUsername,
    hideActions: hideActions
  };
  return props;
};
