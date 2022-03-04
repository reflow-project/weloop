// import { usePage } from 'fe/lib/helpers/usePage';
// import { Collection } from 'graphql/types.generated';
// import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
// import * as GQL from './useCollectionFollowers.generated';

export const useCollectionFollowers = (collectionId: any) => {
  // const collectionFollowersQ = GQL.useCollectionFollowersQuery({
  //     variables: { collectionId, limit: DEFAULT_PAGE_SIZE }
  // });

  // const collectionFollowersPage = usePage(
  //     collectionFollowersQ.data?.collection?.followers,
  //     ({ cursor, update }) => {
  //         return collectionFollowersQ.fetchMore({
  //             variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, collectionId },
  //             updateQuery: (prev, { fetchMoreResult }) => {
  //                 return fetchMoreResult?.collection?.followers &&
  //                 prev.collection?.followers
  //                     ? {
  //                         ...fetchMoreResult,
  //                         collection: {
  //                             ...fetchMoreResult.collection,
  //                             followers: update({
  //                                 prev: prev.collection.followers,
  //                                 fetched: fetchMoreResult.collection.followers
  //                             })
  //                         }
  //                     }
  //                     : prev;
  //             }
  //         });
  //     }
  // );

  return useMemo(
    () => ({
      collectionFollowersPage: {}
    }),
    []
  );
};
