import { useInstanceFeaturedCommunities } from 'fe/instance/featuredCommunities/useInstanceFeaturedCommunities';
import { useMe } from 'fe/session/useMe';
import React, { FC, useMemo, useReducer, useState, ReactElement } from 'react';
import {
  FeaturedCommunities as FeaturedCommunitiesUI,
  FeaturedCommunitiesData
} from 'ui/modules/FeaturedCommunities';
import CommunitySmall, { CommunityProps } from 'ui/modules/FeaturedCommunities/preview';
import Modal from 'ui/modules/Modal';
import { FeatureModalHOC } from '../FeatureModal/FeatureModal';
import { CommunityFeatureFragment } from './featuredCommunity.generated';

export interface FeaturedCommunities {}
export const FeaturedCommunities: FC<FeaturedCommunities> = () => {
  const { isAdmin } = useMe();
  const { featuredCommunitiesPage } = useInstanceFeaturedCommunities();

  const [isEditing, toggleEdit] = useReducer(prev => !prev, false);
  const [
    selectedFeatureToRemove,
    setSelectedFeatureToRemove
  ] = useState<CommunityFeatureFragment | null>(null);

  const featuredCommunities = useMemo<ReactElement[]>(
    () =>
      featuredCommunitiesPage.edges
        .map(feature => {
          const communityFragment = feature.context;
          if (!communityFragment || communityFragment.__typename !== 'Community') {
            return null;
          }
          const community = {
            ...communityFragment,
            icon: communityFragment.icon?.url || ''
          };
          const props: CommunityProps = {
            community,
            canEdit: isAdmin,
            isEditing,
            remove: () => setSelectedFeatureToRemove(feature)
          };
          return <CommunitySmall key={communityFragment.id} {...props} />;
        })
        .filter((_): _ is ReactElement => !!_),
    [featuredCommunitiesPage.edges, isAdmin, isEditing]
  );

  const RemoveFeaturedModal = useMemo(
    () =>
      selectedFeatureToRemove &&
      selectedFeatureToRemove.context?.__typename === 'Community' && (
        <Modal closeModal={() => setSelectedFeatureToRemove(null)}>
          <FeatureModalHOC
            ctx={selectedFeatureToRemove.context}
            done={() => setSelectedFeatureToRemove(null)}
            featureId={selectedFeatureToRemove.id}
          />
        </Modal>
      ),
    [selectedFeatureToRemove]
  );

  const propsUI = useMemo<FeaturedCommunitiesData>(() => {
    const props: FeaturedCommunitiesData = {
      isEditing,
      toggleEdit,
      featuredCommunities,
      canEdit: isAdmin
    };
    return props;
  }, [isEditing, featuredCommunities, isAdmin]);
  return (
    <>
      {RemoveFeaturedModal}
      <FeaturedCommunitiesUI {...propsUI} />
    </>
  );
};
