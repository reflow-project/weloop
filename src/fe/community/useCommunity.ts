import { useCreateThreadContext } from 'fe/context/createThread/useCreateThreadContext';
import { useFollowContext } from 'fe/context/follow/useFollowContext';
import { useMe } from 'fe/session/useMe';
import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useEditCommunity } from './edit/useEditCommunity';
import { useCommunityDataQuery } from './useCommunity.generated';

export const useCommunity = (communityId: Community['id']) => {
  const { me } = useMe();

  const communityQ = useCommunityDataQuery({ variables: { communityId } });
  const { createThread } = useCreateThreadContext(communityId, 'Community');
  const community = communityQ.data?.community;
  const { toggleFollow: toggleJoin } = useFollowContext(community);
  const { edit } = useEditCommunity(communityId);
  const isCreator =
    !!me && !!community?.creator && me.user.id === community.creator.id;
  const canModify = !!me?.isInstanceAdmin || isCreator;

  return useMemo(() => {
    return {
      community,
      createThread,
      toggleJoin,
      edit,
      canModify,
      isCreator
    };
  }, [community, toggleJoin, edit, canModify, createThread, isCreator]);
};
