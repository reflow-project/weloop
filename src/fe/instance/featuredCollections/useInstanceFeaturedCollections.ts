import { useMemo } from 'react';
import { usePage } from 'fe/lib/helpers/usePage';
import { useInstanceFeaturedCollectionsQuery } from './instanceFeaturedCollections.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useInstanceFeaturedCollections = () => {
  const featuredCollectionsQ = useInstanceFeaturedCollectionsQuery();
  const featuredCollectionsPage = usePage(
    featuredCollectionsQ.data?.instance?.featuredCollections,
    ({ cursor, update }) => {
      return featuredCollectionsQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.instance?.featuredCollections &&
            prev.instance?.featuredCollections
            ? {
                ...fetchMoreResult,
                instance: {
                  ...fetchMoreResult.instance,
                  feturedCollections: update({
                    prev: prev.instance.featuredCollections,
                    fetched: fetchMoreResult.instance.featuredCollections
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
      featuredCollectionsPage
    };
  }, [featuredCollectionsPage]);
};
