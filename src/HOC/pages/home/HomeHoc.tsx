import { useMyInboxActivities } from 'fe/activities/inbox/my/useMyInboxActivities';
// import { useMyFollowedCollections } from 'fe/collection/myFollowed/myFollowedCollections';
// import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
// import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
// import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
// import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import React, { FC, useMemo } from 'react';
import { Home, Props } from 'ui/pages/home';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';

export interface HomePageHOC {
  basePath: string;
}

const homeMyTimelinePageTitle = t`My Activities`;

export const HomePageHOC: FC<HomePageHOC> = ({ basePath }) => {
  // const { myCommunityFollowsPage } = useMyFollowedCommunities();
  // const [nextCommunitiesFormik] = useFormikPage(myCommunityFollowsPage);
  // const FollowedCommunitiesElements = useMemo<
  //   Props['FollowedCommunitiesElements']
  // >(() => {
  //   return (
  //     <>
  //       {myCommunityFollowsPage
  //         .edges!.map(follow => follow.context)
  //         .filter(
  //           (context): context is MyFollowedCommunityDataFragment =>
  //             context.__typename === 'Community'
  //         )
  //         .map(community => (
  //           <CommunityPreviewHOC
  //             communityId={community.id}
  //             key={community.id}
  //           />
  //         ))}
  //     </>
  //   );
  // }, [myCommunityFollowsPage]);

  // const {
  //   myCollectionFollowsPage: myFollowedCollectionsPage
  // } = useMyFollowedCollections();
  // const [nextCollectionsFormik] = useFormikPage(myFollowedCollectionsPage);
  // const FollowedCollectionsElements = useMemo<
  //   Props['FollowedCollectionsElements']
  // >(() => {
  //   return (
  //     <>
  //       {myFollowedCollectionsPage
  //         .edges!.map(follow => follow.context)
  //         .filter(
  //           (context): context is MyFollowedCollectionDataFragment =>
  //             context.__typename === 'Collection'
  //         )
  //         .map(collection => (
  //           <CollectionPreviewHOC
  //             collectionId={collection.id}
  //             key={collection.id}
  //           />
  //         ))}
  //     </>
  //   );
  // }, [myFollowedCollectionsPage]);
  usePageTitle(homeMyTimelinePageTitle);

  const { activitiesPage } = useMyInboxActivities();
  const InboxElements = useMemo<Props['InboxElements']>(() => {
    return (
      <>
        {activitiesPage.edges!.map(
          userActivityEdge =>
            userActivityEdge && (
              <div>ActivityPreviewHOC</div>
              // <ActivityPreviewHOC activityId={userActivityEdge?.id} key={userActivityEdge?.id} />
            )
        )}
      </>
    );
  }, [activitiesPage]);

  const homeProps = useMemo<Props>(() => {
    const props: Props = {
      InboxElements,
      // FollowedCollectionsElements,
      // FollowedCommunitiesElements,
      // nextCollectionsFormik,
      // nextCommunitiesFormik,
      // nextInboxFormik,
      basePath
    };
    return props;
  }, [
    InboxElements,
    // FollowedCollectionsElements,
    // FollowedCommunitiesElements,
    // nextCollectionsFormik,
    // nextCommunitiesFormik,
    basePath
  ]);
  return <Home {...homeProps} />;
};
