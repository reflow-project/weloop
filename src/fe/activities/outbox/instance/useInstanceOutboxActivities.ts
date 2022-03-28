import { usePage } from 'fe/lib/helpers/usePage';
import { useMemo } from 'react';
import * as GQL from './useInstanceOutboxActivities.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useInstanceOutboxActivities = () => {
  const activitiesQ = GQL.useInstanceOutboxActivitiesQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const activitiesPage = usePage(
    activitiesQ.data?.instance?.outbox,
    ({ cursor, update }) => {
      return activitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.instance?.outbox && prev.instance?.outbox
            ? {
                ...fetchMoreResult,
                instance: {
                  ...fetchMoreResult.instance,
                  outbox: update({
                    prev: prev.instance.outbox,
                    fetched: fetchMoreResult.instance.outbox
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
      activitiesPage
    };
  }, [activitiesPage]);
};
