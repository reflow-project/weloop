import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCommunities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCommunities = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCommunitiesQuery({
    variables: { userId, limit: DEFAULT_PAGE_SIZE }
  });

  const followedCommunitiesPage = usePage(
    userQ.data?.user?.communityFollows,
    ({ cursor, update }) => {
      return userQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.communityFollows && prev.user?.communityFollows
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.user,
                  communityFollows: update({
                    prev: prev.user.communityFollows,
                    fetched: fetchMoreResult.user.communityFollows
                  })
                }
              }
            : prev;
        }
      });
    }
  );

  return useMemo(
    () => ({
      followedCommunitiesPage
    }),
    [followedCommunitiesPage]
  );
};
