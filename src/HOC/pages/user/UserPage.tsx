import { useUserOutboxActivities } from 'fe/activities/outbox/user/useUserOutboxActivities';
import { useUserFollowedCollections } from 'fe/collection/user/useUserFollowedCollections';
import { UserFollowedCollectionFragment } from 'fe/collection/user/useUserFollowedCollections.generated';
import { useUserFollowedCommunities } from 'fe/community/user/useUserFollowedCommunities';
import { UserFollowedCommunityFragment } from 'fe/community/user/useUserFollowedCommunities.generated';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { getEventStringByContext } from 'fe/lib/activity/getActivityEventString';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';
import { useUserLikes } from 'fe/likes/user/useUserLikes';
import { useUserFollowedUsers } from 'fe/user/followed/user/useUserFollowedUsers';
import { UserFollowedUserFragment } from 'fe/user/followed/user/useUserFollowedUsers.generated';
import { useUser } from 'fe/user/useUser';
import { ActivityVerb, User } from 'graphql/types.generated';
import { HeroUser } from 'HOC/modules/HeroUser/HeroUser';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { PreviewComponent } from 'HOC/modules/previews/activity/PreviewComponent';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { LikedCommentPreviewHOC } from 'HOC/modules/previews/commentLiked/CommentLikedPreview';
import { CommunityPreviewHOC } from 'HOC/modules/previews/community/CommunityPreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';
import React, { FC, useMemo } from 'react';
import { Box } from 'rebass';
import { ActivityPreview, Status, Props as ActivityPreviewProps } from 'ui/modules/ActivityPreview';
import { Props, User as UserPageUI } from 'ui/pages/user';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { InventoryPage } from '../inventory/InventoryPage';
export interface UserPage {
  userId: User['id'];
  tab: UserPageTab;
  basePath: string;
}
export enum UserPageTab {
  Starred,
  Communities,
  Collections,
  Following,
  Activities,
  Inventory
}

const userStarredPageTitle = t`User {name} - Starred`;
const userCommunitiesPageTitle = t`User {name} - Communities`;
const userCollectionsPageTitle = t`User {name} - Collections`;
const userFollowingPageTitle = t`User {name} - Following`;
const userActivitiesPageTitle = t`User {name} - Activities`;
const userInventoryPageTitle = t`User {name} - Inventory`;

export const UserPage: FC<UserPage> = ({ userId, basePath, tab }) => {
  const userInfo = useUser(userId);

  const userPageTitle =
    tab === UserPageTab.Starred
      ? userStarredPageTitle
      : tab === UserPageTab.Communities
      ? userCommunitiesPageTitle
      : tab === UserPageTab.Collections
      ? userCollectionsPageTitle
      : tab === UserPageTab.Following
      ? userFollowingPageTitle
      : tab === UserPageTab.Activities
      ? userActivitiesPageTitle
      : tab === UserPageTab.Inventory
      ? userInventoryPageTitle
      : userInventoryPageTitle; //never
  usePageTitle(!!userInfo?.user?.name && userPageTitle, userInfo.user);

  const { likesPage } = useUserLikes(userId);
  const [loadMoreLikes] = likesPage.formiks;

  const { activitiesPage } = useUserOutboxActivities(userId);
  const [loadMoreActivities] = activitiesPage.formiks;

  const { followedCollectionsPage } = useUserFollowedCollections(userId);
  const [loadMoreCollections] = followedCollectionsPage.formiks;

  const { followedCommunitiesPage } = useUserFollowedCommunities(userId);
  const [loadMoreCommunities] = followedCommunitiesPage.formiks;

  const { followedUsersPage } = useUserFollowedUsers(userId);
  const [loadMoreFollowing] = followedUsersPage.formiks;

  const userPageProps = useMemo<Props>(() => {
    const { totalActivities, totalCollections, totalCommunities, totalUsers } = userInfo;
    const LikesBoxes = (
      <>
        {likesPage.edges.map(like => {
          const likeContext =
            like.context.__typename !== 'Category' &&
            like.context.__typename !== 'Flag' &&
            like.context.__typename !== 'Follow' &&
            like.context.__typename !== 'Like' &&
            like.context.__typename !== 'SpatialThing' &&
            like.context.__typename !== 'Organisation' &&
            like.context.__typename !== 'Taggable' &&
            like.context.__typename !== 'Intent'
              ? like.context
              : null;
          const { communityLink, communityName } = getCommunityInfoStrings(likeContext);
          const actor = userInfo.user ? getActivityActor(userInfo.user) : null;
          const activityContext = like;
          const event = getEventStringByContext(activityContext, ActivityVerb.Created);
          const preview =
            like.context.__typename === 'Comment' ? (
              <LikedCommentPreviewHOC key={like.id} commentId={like.context.id} />
            ) : (
              <PreviewComponent context={activityContext} />
            );
          const activityProps: ActivityPreviewProps = {
            actor,
            communityLink,
            communityName,
            createdAt: like.createdAt,
            event,
            status: Status.Loaded,
            preview
          };
          // console.log(activityProps, likesPage);
          return <ActivityPreview {...activityProps} key={activityContext.id} />;
        })}
      </>
    );
    const ActivityBoxes = (
      <>
        {activitiesPage.edges.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );
    const CollectionsBoxes = (
      <>
        {followedCollectionsPage.edges
          .map(follow => follow.context)
          .filter(
            (context): context is UserFollowedCollectionFragment =>
              context.__typename === 'Collection'
          )
          .map(followedCollection => (
            <Box m={2} mb={0} key={followedCollection.id}>
              <CollectionPreviewHOC
                collectionId={followedCollection.id}
                key={followedCollection.id}
              />
            </Box>
          ))}
      </>
    );
    const CommunityBoxes = (
      <>
        {followedCommunitiesPage.edges
          .map(follow => follow.context)
          .filter(
            (context): context is UserFollowedCommunityFragment =>
              context.__typename === 'Community'
          )
          .map(followedCommunity => (
            <CommunityPreviewHOC communityId={followedCommunity.id} key={followedCommunity.id} />
          ))}
      </>
    );

    const InventoryBoxes = <InventoryPage />;

    const UserBoxes = (
      <>
        {followedUsersPage.edges
          .map(follow => follow.context)
          .filter((context): context is UserFollowedUserFragment => context.__typename === 'User')
          .map(followedUser => (
            <UserPreviewHOC userId={followedUser.userId} key={followedUser.userId} />
          ))}
      </>
    );

    const HeroUserBox = <HeroUser userId={userId} />;

    const props: Props = {
      basePath,
      ActivityBoxes,
      LikesBoxes,
      HeroUserBox,
      CollectionsBoxes,
      CommunityBoxes,
      InventoryBoxes,
      UserBoxes,
      userName: userInfo.user?.name || '',
      totalActivities: `${totalActivities || '0'}`,
      totalCollections: `${totalCollections || '0'}`,
      totalCommunities: `${totalCommunities || '0'}`,
      totalUsers: `${totalUsers || '0'}`,
      userLink: userInfo.user?.website || '',
      loadMoreActivities,
      loadMoreCollections,
      loadMoreCommunities,
      loadMoreFollowing,
      loadMoreLikes
    };
    return props;
  }, [
    userInfo,
    likesPage,
    activitiesPage.edges,
    followedCollectionsPage.edges,
    followedCommunitiesPage.edges,
    followedUsersPage.edges,
    userId,
    basePath,
    loadMoreActivities,
    loadMoreCollections,
    loadMoreCommunities,
    loadMoreFollowing,
    loadMoreLikes
  ]);
  return <UserPageUI {...userPageProps} />;
};
