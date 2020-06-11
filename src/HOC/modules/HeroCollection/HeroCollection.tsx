import { useCollection } from 'fe/collection/useCollection';
import { useMe } from 'fe/session/useMe';
import { useFormik } from 'formik';
import { Collection } from 'graphql/types.generated';
import { EditCollectionPanelHOC } from 'HOC/modules/EditCollectionPanel/editCollectionPanelHOC';
import { FlagModalHOC } from 'HOC/modules/FlagModal/flagModalHOC';
import React, { FC, useMemo } from 'react';
import HeroCollectionUI, { Props, Status } from 'ui/modules/HeroCollection';
import { FeatureModalHOC } from 'HOC/modules/FeatureModal/FeatureModal';

export interface HeroCollection {
  collectionId: Collection['id'];
  basePath: string;
}

export const HeroCollection: FC<HeroCollection> = ({
  collectionId,
  basePath
}) => {
  const { collection, canModify, toggleJoin } = useCollection(collectionId);
  const { isAdmin } = useMe();
  const toggleJoinFormik = useFormik<{}>({
    initialValues: {},
    onSubmit: toggleJoin
  });
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
        EditCollectionPanel: ({ done }) => (
          <EditCollectionPanelHOC done={done} collectionId={collection.id} />
        ),
        FlagModal: ({ done }) => <FlagModalHOC done={done} ctx={collection} />,
        FeaturedModal: ({ done }: { done(): unknown }) => (
          <FeatureModalHOC done={done} ctx={collection} featureId={null} />
        )
      }
    };
    return props;
  }, [collection, basePath, isAdmin, canModify, toggleJoinFormik]);
  return <HeroCollectionUI {...heroProps} />;
};
