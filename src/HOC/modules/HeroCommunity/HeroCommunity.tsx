import { useCommunity } from 'fe/community/useCommunity';
import { useMe } from 'fe/session/useMe';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import React, { FC, useMemo, useReducer } from 'react';
import HeroCommunityUI, { Props as HeroProps, Status } from 'ui/modules/HeroCommunity';
import { EditCommunityPanelHOC } from 'HOC/modules/EditCommunityPanel/editCommunityPanelHOC';
import { FeatureModalHOC } from 'HOC/modules/FeatureModal/FeatureModal';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import Modal from 'ui/modules/Modal';

export interface HeroCommunity {
  communityId: Community['id'];
  basePath: string;
}

export const HeroCommunity: FC<HeroCommunity> = ({ communityId, basePath }) => {
  const { isAdmin } = useMe();
  const { toggleJoin, community, canModify, isCreator } = useCommunity(communityId);

  const toggleJoinFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: toggleJoin
  });

  const notifiedMustLogin = useNotifyMustLogin();
  const [isOpenDropdown, toggleDropdown] = React.useReducer(is => !is, false);

  const [isEditing, toggleEditing] = useReducer(is => {
    return !canModify || notifiedMustLogin() ? false : !is;
  }, false);
  const EditModal =
    community && isEditing ? (
      <Modal closeModal={toggleEditing}>
        <EditCommunityPanelHOC communityId={community.id} done={toggleEditing} />
      </Modal>
    ) : null;

  const [isFlagging, toggleFlagging] = useReducer(is => {
    return notifiedMustLogin() ? false : !is;
  }, false);
  const FlagModal =
    community && isFlagging ? (
      <Modal closeModal={toggleFlagging}>
        <FlagModalHOC done={toggleFlagging} ctx={community} />
      </Modal>
    ) : null;

  const [isAddingToFeatured, toggleAddToFeatured] = useReducer(is => {
    return !isAdmin || notifiedMustLogin() ? false : !is;
  }, false);
  const AddToFeaturedModal =
    community && isAddingToFeatured ? (
      <Modal closeModal={toggleAddToFeatured}>
        <FeatureModalHOC done={toggleAddToFeatured} ctx={community} featureId={null} />
      </Modal>
    ) : null;

  const heroProps = useMemo<HeroProps>(() => {
    if (!community) {
      const props: HeroProps = {
        community: {
          status: Status.Loading
        }
      };
      return props;
    }

    const props: HeroProps = {
      community: {
        basePath,
        status: Status.Loaded,
        canModify,
        isAdmin,
        isCreator,
        following: !!community.myFollow,
        isFlagged: !!community.myFlag,
        icon: community.icon?.url || '',
        name: community.name,
        fullName: community.displayUsername,
        totalMembers: community.followerCount || 0,
        summary: community.summary || '',
        toggleJoinFormik,
        addToFeatured: toggleAddToFeatured,
        edit: toggleEditing,
        flag: toggleFlagging,
        isOpenDropdown,
        toggleDropdown
      }
    };
    return props;
  }, [community, basePath, canModify, isAdmin, isCreator, toggleJoinFormik, isOpenDropdown]);

  return (
    <>
      {EditModal}
      {FlagModal}
      {AddToFeaturedModal}
      <HeroCommunityUI {...heroProps} />
    </>
  );
};
