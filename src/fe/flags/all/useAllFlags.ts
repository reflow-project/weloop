import { usePage } from 'fe/lib/helpers/usePage';
import { useAllFlagsQuery } from './useAllFlags.generated';
import { useMemo } from 'react';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useAllFlags = () => {
  const allFlagsQ = useAllFlagsQuery();
  const flagsPage = usePage(allFlagsQ.data?.flags, ({ cursor, update }) => {
    return allFlagsQ.fetchMore({
      variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
      updateQuery: (prev, { fetchMoreResult }) => {
        return fetchMoreResult?.flags && prev.flags
          ? {
              ...fetchMoreResult,
              flags: update({
                prev: prev.flags,
                fetched: fetchMoreResult.flags
              })
            }
          : prev;
      }
    });
  });
  return useMemo(() => {
    return {
      flagsPage
    };
  }, [flagsPage]);
};
