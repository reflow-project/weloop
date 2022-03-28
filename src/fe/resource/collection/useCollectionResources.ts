import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCollectionResources.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useCollectionResources = (collectionId: Collection['id']) => {
  const collectionQ = GQL.useCollectionResourcesQuery({
    variables: { collectionId, limit: DEFAULT_PAGE_SIZE }
  });

  const resourcesPage = usePage(
    collectionQ.data?.collection?.resources,
    ({ cursor, update }) => {
      return collectionQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, collectionId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.collection?.resources &&
            prev.collection?.resources
            ? {
                ...fetchMoreResult,
                collection: {
                  ...fetchMoreResult.collection,
                  resources: update({
                    prev: prev.collection.resources,
                    fetched: fetchMoreResult.collection.resources
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
      resourcesPage
    }),
    [resourcesPage]
  );
};
