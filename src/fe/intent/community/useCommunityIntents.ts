import { Community } from 'graphql/types.generated';
import { useMemo } from 'react';
import * as GQL from './useCommunityIntents.generated';

export const useCommunityIntents = (communityId: Community['id']) => {
  const communityIntentdQ = GQL.useCommunityIntentsQuery({
    variables: { communityId }
  });

  const communityIntents = communityIntentdQ.data?.intentsFiltered ?? [];

  return useMemo(
    () => ({
      communityIntents
    }),
    [communityIntents]
  );
};
