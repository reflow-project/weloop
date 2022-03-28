import { usePage } from 'fe/lib/helpers/usePage';
import { useUserLikesQuery } from './useUserLikes.generated';
import { useMemo } from 'react';
import { User } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useUserLikes = (userId: User['id']) => {
  const userLikesQ = useUserLikesQuery({
    variables: { userId, limit: DEFAULT_PAGE_SIZE }
  });

  const likesPage = usePage(
    userLikesQ.data?.user?.likes,
    ({ cursor, update }) => {
      return userLikesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.likes && prev.user?.likes
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.user,
                  likes: update({
                    prev: prev.user.likes,
                    fetched: fetchMoreResult.user.likes
                  })
                }
              }
            : prev;
        }
      });
    }
  );
  return useMemo(() => {
    return {
      likesPage
    };
  }, [likesPage]);
};
