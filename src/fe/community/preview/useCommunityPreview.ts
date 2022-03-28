import { Community } from 'graphql/types.generated';
import { useCommunityPreviewQuery } from './useCommunityPreview.generated';
import { useMemo } from 'react';
import { useFollowContext } from 'fe/context/follow/useFollowContext';
import { useMe } from 'fe/session/useMe';

export const useCommunityPreview = (communityId: Community['id']) => {
  const communityPreviewQ = useCommunityPreviewQuery({
    variables: { communityId }
  });
  const { me } = useMe();
  const community = communityPreviewQ.data?.community;
  const { toggleFollow } = useFollowContext(communityPreviewQ.data?.community);
  const isCreator =
    !!me && !!community?.creator && me.user.id === community.creator.id;

  return useMemo(() => {
    return {
      community: communityPreviewQ.data?.community,
      toggleJoin: toggleFollow,
      isCreator
    };
  }, [communityPreviewQ, toggleFollow, isCreator]);
};
