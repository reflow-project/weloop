import { usePage } from 'fe/lib/helpers/usePage';
import { Community } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
import * as GQL from './useCommunityFollowers.generated';

export const useCommunityFollowers = (communityId: Community['id']) => {
  const communityFolowersQ = GQL.useCommunityFollowersQuery({
    variables: { communityId, limit: DEFAULT_PAGE_SIZE }
  });

  const communityFollowersPage = usePage(
    communityFolowersQ.data?.community?.followers,
    ({ cursor, update }) => {
      return communityFolowersQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, communityId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.community?.followers &&
            prev.community?.followers
            ? {
                ...fetchMoreResult,
                community: {
                  ...fetchMoreResult.community,
                  followers: update({
                    prev: prev.community.followers,
                    fetched: fetchMoreResult.community.followers
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
      communityFollowersPage
    }),
    [communityFollowersPage]
  );
};
