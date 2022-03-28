import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
import { useAllCommunitiesQuery } from './useAllCommunities.generated';

export const useAllCommunities = () => {
  const allCommunitiesQ = useAllCommunitiesQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });
  const allCommunitiesPage = usePage(
    allCommunitiesQ.data?.communities,
    ({ cursor, update }) => {
      return allCommunitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.communities && prev.communities
            ? {
                ...fetchMoreResult,
                communities: update({
                  prev: prev.communities,
                  fetched: fetchMoreResult.communities
                })
              }
            : prev;
        }
      });
    }
  );
  return useMemo(() => {
    return {
      allCommunitiesPage
    };
  }, [allCommunitiesPage]);
};
