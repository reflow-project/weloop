import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
import * as GQL from './useMyInboxActivities.generated';

export const useMyInboxActivities = () => {
  const activitiesQ = GQL.useMyInboxActivitiesQuery({
    variables: { limit: DEFAULT_PAGE_SIZE }
  });

  const activitiesPage = usePage(
    activitiesQ.data?.me?.user.inbox,
    ({ cursor, update }) => {
      return activitiesQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.me?.user.inbox && prev.me?.user.inbox
            ? {
                ...fetchMoreResult,
                me: {
                  ...fetchMoreResult.me,
                  user: {
                    ...fetchMoreResult.me.user,
                    inbox: update({
                      prev: prev.me.user.inbox,
                      fetched: fetchMoreResult.me.user.inbox
                    })
                  }
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
