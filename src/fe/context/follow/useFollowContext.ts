import { MyCollectionFollowsQueryRefetch } from 'fe/collection/myFollowed/myFollowedCollections.generated';
import { MyCommunityFollowsQueryRefetch } from 'fe/community/myFollowed/myFollowedCommunities.generated';
import { mnCtx } from 'fe/lib/graphql/ctx';
import { isOptimisticId, OPTIMISTIC_ID_STRING } from 'fe/lib/helpers/mutations';
import * as GQL from 'fe/mutation/follow/useMutateFollow.generated';
import { CollectionFollowersQueryRefetch } from 'fe/user/followers/collection/useCollectionFollowers.generated';
import { CommunityFollowersQueryRefetch } from 'fe/user/followers/community/useCommunityFollowers.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, Community, User } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import { SIDEBAR_MY_JOINED_LIST_LIMIT } from 'fe/community/myFollowed/myFollowedCommunities';

type Context = Collection | Community | User; //| Thread;

export type UseFollowContext = Maybe<
  Pick<Context, 'id' | 'myFollow' | 'followerCount' | '__typename' | 'name'>
>;

export const useFollowContext = (ctx: UseFollowContext) => {
  const [followMut, followMutStatus] = GQL.useFollowMutation();
  const [unfollowMut, unfollowMutStatus] = GQL.useUnfollowMutation();
  const mutating = followMutStatus.loading || unfollowMutStatus.loading;
  const toggleFollow = useCallOrNotifyMustLogin(async () => {
    const { id, followerCount, myFollow, __typename, name } = ctx || {};
    if (!id || mutating) {
      return;
    }
    if (!myFollow) {
      const context = mnCtx({
        ctx:
          __typename === 'Collection'
            ? `Following Collection ${name}`
            : __typename === 'User'
            ? `Following User ${name}`
            : __typename === 'Community'
            ? `Joined Community ${name}`
            : void 0
      });
      return followMut({
        variables: {
          contextId: id
        },
        context,
        optimisticResponse: optimisticFollow(
          __typename,
          id,
          followerCount || 0
        ),
        refetchQueries:
          __typename === 'Community'
            ? [
                MyCommunityFollowsQueryRefetch({
                  limit: SIDEBAR_MY_JOINED_LIST_LIMIT
                }),
                CommunityFollowersQueryRefetch({ communityId: id })
              ]
            : __typename === 'Collection'
            ? [
                MyCollectionFollowsQueryRefetch({
                  limit: SIDEBAR_MY_JOINED_LIST_LIMIT
                }),
                CollectionFollowersQueryRefetch({ collectionId: id })
              ]
            : []
      });
    } else {
      const context = mnCtx({
        ctx:
          __typename === 'Collection'
            ? `Unfollowing Collection ${name}`
            : __typename === 'User'
            ? `Unfollowing User ${name}`
            : __typename === 'Community'
            ? `Leaving Community ${name}`
            : void 0
      });

      return isOptimisticId(myFollow.id)
        ? undefined
        : unfollowMut({
            variables: {
              contextId: myFollow.id
            },
            context,
            optimisticResponse: optimisticUnfollow(
              __typename,
              id,
              followerCount || 1
            ),
            refetchQueries:
              __typename === 'Community'
                ? [
                    MyCommunityFollowsQueryRefetch({}),
                    CommunityFollowersQueryRefetch({ communityId: id })
                  ]
                : __typename === 'Collection'
                ? [
                    MyCollectionFollowsQueryRefetch({}),
                    CollectionFollowersQueryRefetch({ collectionId: id })
                  ]
                : []
          });
    }
  }, [ctx, mutating]);

  return useMemo(
    () => ({
      toggleFollow
    }),
    [toggleFollow]
  );
};

const optimisticFollow = (
  __typename: any,
  id: string,
  followerCount: number
): GQL.FollowMutation => ({
  __typename: 'RootMutationType',
  createFollow: {
    __typename: 'Follow',
    context: {
      __typename,
      id,
      myFollow: { __typename: 'Follow', id: OPTIMISTIC_ID_STRING },
      followerCount: followerCount + 1
    }
  }
});
const optimisticUnfollow = (
  __typename: any,
  id: string,
  followerCount: number
): GQL.UnfollowMutation => ({
  __typename: 'RootMutationType',
  delete: {
    __typename: 'Follow',
    context: {
      __typename,
      id,
      myFollow: null,
      followerCount: followerCount - 1
    }
  }
});
