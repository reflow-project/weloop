import { User } from 'graphql/types.generated';
import { useUserPreviewQuery } from './useUserPreview.generated';
import { useMemo } from 'react';
import { useFollowContext } from 'fe/context/follow/useFollowContext';

export const useUserPreview = (userId: User['id']) => {
  const userPreviewQ = useUserPreviewQuery({ variables: { userId } });
  const { toggleFollow } = useFollowContext(userPreviewQ.data?.user);

  return useMemo(() => {
    return {
      user: userPreviewQ.data?.user,
      toggleFollow
    };
  }, [userPreviewQ, toggleFollow]);
};
