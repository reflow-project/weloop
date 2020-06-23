import { useCollection } from 'fe/collection/useCollection';
import { useMe } from 'fe/session/useMe';
import { useFormik } from 'formik';
import { Collection } from 'graphql/types.generated';
import { EditCollectionPanelHOC } from 'HOC/modules/EditCollectionPanel/editCollectionPanelHOC';
import { FeatureModalHOC } from 'HOC/modules/FeatureModal/FeatureModal';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import React, { FC, useMemo, useReducer } from 'react';
import HeroCollectionUI, { Props, Status } from 'ui/modules/HeroCollection';
import Modal from 'ui/modules/Modal';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';

export interface HeroCollection {
  collectionId: Collection['id'];
  basePath: string;
}

export const HeroCollection: FC<HeroCollection> = ({ collectionId, basePath }) => {
  const { collection, canModify, toggleJoin } = useCollection(collectionId);
  const { isAdmin } = useMe();
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
    collection && isEditing ? (
      <Modal closeModal={toggleEditing}>
        <EditCollectionPanelHOC collectionId={collection.id} done={toggleEditing} />
      </Modal>
    ) : null;

  const [isFlagging, toggleFlagging] = useReducer(is => {
    return notifiedMustLogin() ? false : !is;
  }, false);
  const FlagModal =
    collection && isFlagging ? (
      <Modal closeModal={toggleFlagging}>
        <FlagModalHOC done={toggleFlagging} ctx={collection} />
      </Modal>
    ) : null;

  const [isAddingToFeatured, toggleAddToFeatured] = useReducer(is => {
    return !isAdmin || notifiedMustLogin() ? false : !is;
  }, false);
  const AddToFeaturedModal =
    collection && isAddingToFeatured ? (
      <Modal closeModal={toggleAddToFeatured}>
        <FeatureModalHOC done={toggleAddToFeatured} ctx={collection} featureId={null} />
      </Modal>
    ) : null;

  const heroProps = useMemo<Props>(() => {
    if (!collection) {
      return {
        collection: {
          status: Status.Loading
        }
      };
    }

    const props: Props = {
      collection: {
        isOpenDropdown,
        toggleDropdown,
        basePath,
        isAdmin,
        status: Status.Loaded,
        canModify,
        following: !!collection.myFollow,
        isFlagged: !!collection.myFlag,
        followerCount: collection.followerCount || 0,
        icon: collection.icon?.url || '',
        name: collection.name,
        fullName: collection.displayUsername,
        summary: collection.summary || '',
        communityName: collection.community?.name || '',
        communityId: collection.community?.id || '',
        communityIcon: collection.community?.icon?.url || '',
        toggleJoinFormik,

        edit: toggleEditing,

        addToFeatured: toggleAddToFeatured,

        flag: toggleFlagging
      }
    };
    return props;
  }, [collection, isOpenDropdown, basePath, isAdmin, canModify, toggleJoinFormik]);
  return (
    <>
      {EditModal}
      {AddToFeaturedModal}
      {FlagModal}
      <HeroCollectionUI {...heroProps} />
    </>
  );
};
