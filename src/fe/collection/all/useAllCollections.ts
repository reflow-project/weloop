import { useAllCollectionsQuery } from './useAllCollections.generated';
import { useMemo } from 'react';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useAllCollections = () => {
  const allCollectionsQ = useAllCollectionsQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const allCollectionsPage = usePage(
    allCollectionsQ.data?.collections,
    ({ cursor, update }) => {
      return allCollectionsQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.collections && prev.collections
            ? {
                ...fetchMoreResult,
                collections: update({
                  prev: prev.collections,
                  fetched: fetchMoreResult.collections
                })
              }
            : prev;
        }
      });
    }
  );
  return useMemo(() => {
    return {
      allCollectionsPage
    };
  }, [allCollectionsPage]);
};
