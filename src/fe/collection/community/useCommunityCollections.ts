import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  communityId: Community['id'];
}

export const useCommunityCollections = (communityId: Community['id']) => {
  const communityQ = GQL.useCommunityCollectionsQuery({
    variables: { communityId, limit: DEFAULT_PAGE_SIZE }
  });

  const collectionsPage = usePage(
    communityQ.data?.community?.collections,
    ({ cursor, update }) => {
      return communityQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, communityId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.community?.collections &&
            prev.community?.collections
            ? {
                ...fetchMoreResult,
                community: {
                  ...fetchMoreResult.community,
                  collections: update({
                    prev: prev.community.collections,
                    fetched: fetchMoreResult.community.collections
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
      collectionsPage
    }),
    [collectionsPage]
  );
};
