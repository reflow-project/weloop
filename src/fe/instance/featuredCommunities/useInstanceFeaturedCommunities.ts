import { useMemo } from 'react';
import { usePage } from 'fe/lib/helpers/usePage';
import { useInstanceFeaturedCommunitiesQuery } from './instanceFeaturedCommunities.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useInstanceFeaturedCommunities = () => {
  const featuredCommunitiesQ = useInstanceFeaturedCommunitiesQuery();
  const featuredCommunitiesPage = usePage(
    featuredCommunitiesQ.data?.instance?.featuredCommunities,
    ({ cursor, update }) => {
      return featuredCommunitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.instance?.featuredCommunities &&
            prev.instance?.featuredCommunities
            ? {
                ...fetchMoreResult,
                instance: {
                  ...fetchMoreResult.instance,
                  featuredCommunities: update({
                    prev: prev.instance.featuredCommunities,
                    fetched: fetchMoreResult.instance.featuredCommunities
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
      featuredCommunitiesPage
    };
  }, [featuredCommunitiesPage]);
};
