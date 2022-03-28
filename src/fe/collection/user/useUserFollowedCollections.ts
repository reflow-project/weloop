import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useUserFollowedCollections.generated';
import { usePage } from 'fe/lib/helpers/usePage';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedCollections = (userId: User['id']) => {
  const userQ = GQL.useUserFollowedCollectionsQuery({
    variables: { userId, limit: DEFAULT_PAGE_SIZE }
  });

  const followedCollectionsPage = usePage(
    userQ.data?.user?.collectionFollows,
    ({ cursor, update }) => {
      return userQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.user?.collectionFollows &&
            prev.user?.collectionFollows
            ? {
                ...fetchMoreResult,
                user: {
                  ...fetchMoreResult.user,
                  collectionFollows: update({
                    prev: prev.user.collectionFollows,
                    fetched: fetchMoreResult.user.collectionFollows
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
      followedCollectionsPage
    }),
    [followedCollectionsPage]
  );
};
