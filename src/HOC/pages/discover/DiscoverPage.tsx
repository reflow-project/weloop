import React, { FC, useMemo } from 'react';
import { Discover, Props } from 'ui/pages/discover';
import { Box } from 'rebass';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { discoverLocation } from 'routes/DiscoverPageRoute';

export enum DiscoverPageTabs {
  Activities,
  Communities,
  Collections
}

export interface DiscoverPage {
  tab: DiscoverPageTabs;
  basePath: string;
}

const discoverActivitiesPageTitle = t`Discover Activities`;

export const DiscoverPage: FC<DiscoverPage> = ({ basePath, tab }) => {
  const discovberPageTitle =
    tab === DiscoverPageTabs.Activities ? discoverActivitiesPageTitle : discoverActivitiesPageTitle; //never
  usePageTitle(discovberPageTitle);
  // const { activitiesPage } = useInstanceOutboxActivities();
  // const [activitiesPageNext /* , activitiesPagePrevious */] = activitiesPage.formiks;

  const propsUI = useMemo<Props>(() => {
    const FeaturedCollectionsBox = <div>FeaturedCollections</div>;
    const FeaturedCommunitiesBox = <div>FeaturedCommunities</div>;
    const ActivitiesBox = (
      <>
        {[].map((activity: any) => (
          <div>ActivityPreviewHOC, {activity}</div>
          // <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );

    const CollectionsBoxes = (
      <>
        {[].map((collection: any) => (
          <Box m={2} key={collection.id}>
            <div>CollectionPreviewHOC, {collection}</div>
            {/*<CollectionPreviewHOC collectionId={collection.id} />*/}
          </Box>
        ))}
      </>
    );
    const CommunitiesBoxes = (
      <>
        {[].map((community: any) => (
          <Box m={2} key={community.id}>
            <div>CommunityPreviewHOC, {community}</div>
            {/*<CommunityPreviewHOC communityId={community.id} />*/}
          </Box>
        ))}
      </>
    );
    const LoadMoreFormik =
      tab === DiscoverPageTabs.Activities
        ? () => {
            console.log(DiscoverPageTabs.Activities);
          }
        : null;

    const tabPaths: Props['tabPaths'] = {
      timeline: discoverLocation.getPath({ tab: undefined }, undefined)
    };

    const props: any = {
      tabPaths,
      ActivitiesBox,
      FeaturedCollectionsBox,
      FeaturedCommunitiesBox,
      CollectionsBoxes,
      CommunitiesBoxes,
      LoadMoreFormik
    };

    return props;
  }, [tab]);

  return <Discover {...propsUI} />;
};
