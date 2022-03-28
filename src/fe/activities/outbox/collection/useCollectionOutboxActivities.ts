import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionOutboxActivities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useCollectionOutboxActivities = (
  collectionId: Collection['id']
) => {
  const collectionQ = GQL.useCollectionOutboxActivitiesQuery({
    variables: { collectionId, limit: DEFAULT_PAGE_SIZE }
  });

  const activitiesPage = usePage(
    collectionQ.data?.collection?.outbox,
    ({ cursor, update }) => {
      return collectionQ.fetchMore({
        variables: { ...cursor, collectionId, limit: DEFAULT_PAGE_SIZE },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.collection?.outbox && prev.collection?.outbox
            ? {
                ...fetchMoreResult,
                collection: {
                  ...fetchMoreResult.collection,
                  outbox: update({
                    prev: prev.collection.outbox,
                    fetched: fetchMoreResult.collection.outbox
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
