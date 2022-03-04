import { User } from 'graphql/types.generated';
import { useMemo } from 'react';
// import * as GQL from './useUserFollowedUsers.generated';
// import { usePage } from 'fe/lib/helpers/usePage';
// import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export interface Props {
  userId: User['id'];
}

export const useUserFollowedUsers = (userId: User['id']) => {
  // const userQ = GQL.useUserFollowedUsersQuery({
  //   variables: { userId, limit: DEFAULT_PAGE_SIZE }
  // });

  // const followedUsersPage = usePage(
  //   userQ.data?.user?.userFollows,
  //   ({ cursor, update }) => {
  //     return userQ.fetchMore({
  //       variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, userId },
  //       updateQuery: (prev, { fetchMoreResult }) => {
  //         return fetchMoreResult?.user?.userFollows && prev.user?.userFollows
  //           ? {
  //               ...fetchMoreResult,
  //               user: {
  //                 ...fetchMoreResult.user,
  //                 userFollows: update({
  //                   prev: prev.user.userFollows,
  //                   fetched: fetchMoreResult.user.userFollows
  //                 })
  //               }
  //             }
  //           : prev;
  //       }
  //     });
  //   }
  // );

  return useMemo(
    () => ({
      followedUsersPage: null
    }),
    []
  );
};
