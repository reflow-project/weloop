import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityOutboxActivities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useCommunityOutboxActivities = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityOutboxActivitiesQuery({
    variables: { communityId, limit: DEFAULT_PAGE_SIZE }
  });

  const activitiesPage = usePage(
    communityQ.data?.community?.outbox,
    ({ cursor, update }) => {
      return communityQ.fetchMore({
        variables: { ...cursor, communityId, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.community?.outbox && prev.community?.outbox
            ? {
                ...fetchMoreResult,
                community: {
                  ...fetchMoreResult.community,
                  outbox: update({
                    prev: prev.community.outbox,
                    fetched: fetchMoreResult.community.outbox
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
      activitiesPage
    }),
    [activitiesPage]
  );
};
