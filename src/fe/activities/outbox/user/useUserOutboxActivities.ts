import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserOutboxActivities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useUserOutboxActivities = (userId: User['id']) => {
  const activitiesQ = GQL.useUserOutboxActivitiesQuery({
    variables: { userId, limit: DEFAULT_PAGE_SIZE }
  });

  const activitiesPage = usePage(
    activitiesQ.data?.user?.outbox,
    ({ cursor, update }) => {
      return activitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.outbox && prev.user?.outbox
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.user,
                  outbox: update({
                    prev: prev.user.outbox,
                    fetched: fetchMoreResult.user.outbox
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
