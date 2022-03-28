import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityThreads.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useCommunityThreads = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityThreadsQuery({
    variables: { communityId, limit: DEFAULT_PAGE_SIZE }
  });

  const threadsPage = usePage(
    communityQ.data?.community?.threads,
    ({ cursor, update }) => {
      return communityQ.fetchMore({
        variables: { ...cursor, communityId, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.community?.threads && prev.community?.threads
            ? {
                ...fetchMoreResult,
                community: {
                  ...fetchMoreResult.community,
                  threads: update({
                    prev: prev.community.threads,
                    fetched: fetchMoreResult.community.threads
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
      threadsPage
    }),
    [threadsPage]
  );
};
