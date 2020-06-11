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
import {
  ActivityPreview,
  Status,
  Props as ActivityPreviewProps
} from 'ui/modules/ActivityPreview';
import { Props, User as UserPageUI } from 'ui/pages/user';
export interface UserPage {
  userId: User['id'];
  tab: UserPageTab;
  basePath: string;
}
export enum UserPageTab {
  Activities,
  Starred,
  Communities,
  Collections,
  Following
}
export const UserPage: FC<UserPage> = ({ userId, basePath }) => {
  const user = useUser(userId);

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
    const {
      totalActivities,
      totalCollections,
      totalCommunities,
      totalUsers
    } = user;
    const LikesBoxes = (
      <>
        {likesPage.edges.map(like => {
          const { communityLink, communityName } = getCommunityInfoStrings(
            like.context
          );
          const actor = user.user ? getActivityActor(user.user) : null;
          const activityContext = like;
          const event = getEventStringByContext(
            activityContext,
            ActivityVerb.Created
          );
          const preview =
            like.context.__typename === 'Comment' ? (
              <LikedCommentPreviewHOC
                key={like.id}
                commentId={like.context.id}
              />
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
          console.log(activityProps, likesPage);
          return <ActivityPreview {...activityProps} />;
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
            <CommunityPreviewHOC
              communityId={followedCommunity.id}
              key={followedCommunity.id}
            />
          ))}
      </>
    );

    const UserBoxes = (
      <>
        {followedUsersPage.edges
          .map(follow => follow.context)
          .filter(
            (context): context is UserFollowedUserFragment =>
              context.__typename === 'User'
          )
          .map(followedUser => (
            <UserPreviewHOC
              userId={followedUser.userId}
              key={followedUser.userId}
            />
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
      UserBoxes,
      userName: user.user?.name || '',
      totalActivities: `${totalActivities || '0'}`,
      totalCollections: `${totalCollections || '0'}`,
      totalCommunities: `${totalCommunities || '0'}`,
      totalUsers: `${totalUsers || '0'}`,
      userLink: user.user?.website || '',
      loadMoreActivities,
      loadMoreCollections,
      loadMoreCommunities,
      loadMoreFollowing,
      loadMoreLikes
    };
    return props;
  }, [
    user,
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
