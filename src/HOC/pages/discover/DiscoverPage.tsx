import { FeaturedCollections } from 'HOC/modules/FeaturedCollections/featuredCollections';
import React, { FC, useMemo } from 'react';
import { Discover, Props } from 'ui/pages/discover';
import { useInstanceOutboxActivities } from 'fe/activities/outbox/instance/useInstanceOutboxActivities';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { FeaturedCommunities } from 'HOC/modules/FeaturedCommunities/featuredCommunities';
import { useAllCommunities } from 'fe/community/all/useAllCommunities';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { useAllCollections } from 'fe/collection/all/useAllCollections';
import { useFormikPage } from 'fe/lib/helpers/usePage';
import { Box } from 'rebass';

export enum DiscoverPageTabs {
  Activities,
  Communities,
  Collections
}

export interface DiscoverPage {
  tab: DiscoverPageTabs;
  basePath: string;
}
export const DiscoverPage: FC<DiscoverPage> = ({ basePath, tab }) => {
  const { activitiesPage } = useInstanceOutboxActivities();
  const [activitiesPageNext /* , activitiesPagePrevious */] = useFormikPage(
    activitiesPage
  );

  const { allCommunitiesPage } = useAllCommunities();
  const [
    allCommunitiesPageNext /* , allCommunitiesPagePrevious */
  ] = useFormikPage(allCommunitiesPage);

  const { allCollectionsPage } = useAllCollections();
  const [
    allCollectionsPageNext /* , allCollectionsPagePrevious */
  ] = useFormikPage(allCollectionsPage);

  const propsUI = useMemo<Props>(() => {
    const FeaturedCollectionsBox = <FeaturedCollections />;
    const FeaturedCommunitiesBox = <FeaturedCommunities />;
    const ActivitiesBox = (
      <>
        {activitiesPage.edges.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );

    const CollectionsBoxes = (
      <>
        {allCollectionsPage.edges.map(collection => (
          <Box m={2}>
            <CollectionPreviewHOC
              collectionId={collection.id}
              key={collection.id}
            />
          </Box>
        ))}
      </>
    );
    const CommunitiesBoxes = (
      <>
        {allCommunitiesPage.edges.map(community => (
          <Box m={2}>
            <CommunityPreviewHOC
              communityId={community.id}
              key={community.id}
            />
          </Box>
        ))}
      </>
    );
    const LoadMoreFormik =
      tab === DiscoverPageTabs.Activities
        ? activitiesPageNext
        : tab === DiscoverPageTabs.Collections
        ? allCollectionsPageNext
        : tab === DiscoverPageTabs.Communities
        ? allCommunitiesPageNext
        : null;

    const props: Props = {
      basePath,
      ActivitiesBox,
      FeaturedCollectionsBox,
      FeaturedCommunitiesBox,
      CollectionsBoxes,
      CommunitiesBoxes,
      LoadMoreFormik
    };

    return props;
  }, [activitiesPage, allCommunitiesPage, basePath, tab]);

  return <Discover {...propsUI} />;
};
