import { Community } from 'graphql/types.generated';
import React, { useState } from 'react';
import { useApolloClient } from 'react-apollo';
import { SidePanel } from 'ui/modules/SidePanel';
import { popularCommunites, PopularCommunitesQuery } from './PopularCommunitesQuery';

export const SidePanelHOC = () => {
  const client = useApolloClient();
  const [communities, setCommunities] = useState<Array<Community>>([]);
  const communitiesRes = client.query<PopularCommunitesQuery>({
    query: popularCommunites
  });

  communitiesRes.then(result => {
    if (result.data && result.data.communities) {
      setCommunities(result.data.communities.edges ?? []);
    }
  });

  return <SidePanel communities={communities} />;
};
