import { useMemo } from 'react';
import * as GQL from './myFollowedCommunities.generated';
import { usePage } from 'fe/lib/helpers/usePage';
// import { DEFAULT_PAGE_SIZE } from 'mn-constants';

export const useMyFollowedCommunities = () => {
  const myFlwCommunitiesQ = GQL.useMyCommunityFollowsQuery({
    variables: { limit: 10 } // FIXME
  });

  const myCommunityFollowsPage = usePage(
    myFlwCommunitiesQ.data?.me?.user.communityFollows,
    ({ cursor, update }) => {
      return myFlwCommunitiesQ.fetchMore({
        variables: { ...cursor, limit: 10 }, // FIXME CONFIGURE
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.me?.user?.communityFollows &&
            prev.me?.user?.communityFollows
            ? {
                ...fetchMoreResult,
                me: {
                  ...fetchMoreResult.me,
                  user: {
                    ...fetchMoreResult.me.user,
                    communityFollows: update({
                      prev: prev.me?.user.communityFollows,
                      fetched: fetchMoreResult.me?.user.communityFollows
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
      myCommunityFollowsPage
    };
  }, [myCommunityFollowsPage]);
};
