import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUser.generated';
import { useMe } from 'fe/session/useMe';
import { useFollowContext } from 'fe/context/follow/useFollowContext';

export const useUser = (userId: User['id']) => {
  const userQ = GQL.useUserDataQuery({ variables: { userId } });
  const { me, isAdmin } = useMe();
  const user = userQ.data?.user;
  const { toggleFollow } = useFollowContext(user);

  return useMemo(() => {
    const user = userQ.data?.user;
    const totalCollections = user?.collectionFollows?.totalCount;
    const totalCommunities = user?.communityFollows?.totalCount;
    const totalUsers = user?.userFollows?.totalCount;
    const totalActivities = user?.outbox?.totalCount;
    const isMe = !!(me && user && me.user.id === user.id);

    return {
      isMe,
      isAdmin,
      user,
      toggleFollow,
      totalCollections,
      totalCommunities,
      totalUsers,
      totalActivities
    };
  }, [me, userQ, toggleFollow, isAdmin]);
};
