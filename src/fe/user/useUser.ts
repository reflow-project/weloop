// import { User } from 'graphql/types.generated';
import * as GQL from './useUser.generated';
import { useMe } from 'fe/session/useMe';
// import { useFollowContext } from 'fe/context/follow/useFollowContext';

export const useUser = (userId: string) => {
  const userQ = GQL.useUserDataQuery({ variables: { username: 'pral2a' } });
  const { me } = useMe();

  const user = userQ.data?.user;
  const isMe = !!(me && user && me?.user?.id === user.id);
  // const { toggleFollow } = useFollowContext(user);

  // return useMemo(() => {
  // const user = userQ.data?.user;
  // const totalCollections = user?.collectionFollows?.totalCount;
  // const totalCommunities = user?.communityFollows?.totalCount;
  // const totalUsers = user?.userFollows?.totalCount;
  // const totalActivities = user?.outbox?.totalCount;
  // const isMe = !!(me && user && me.user.id === user.id);
  return {
    isMe,
    // isAdmin,
    user
    // toggleFollow,
    // totalCollections,
    // totalCommunities,
    // totalUsers,
    // totalActivities
  };
  // }, []);
};
