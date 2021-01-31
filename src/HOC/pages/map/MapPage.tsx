import React, { useEffect, useState } from 'react';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import Maps from 'ui/pages/maps';
import { useApolloClient } from 'react-apollo';
import {
  ProposalsFilteredQuery,
  ProposalsFilteredQueryVariables,
  proposedIntents
} from './MapPageQuery';
import { Maybe, Proposal, SpatialThing } from 'graphql/types.generated';
import { MarkerProps } from 'ui/elements/Map';

type ProposalWithGEO = Omit<Proposal, 'eligibleLocation'> & {
  eligibleLocation: SpatialThing;
};

const hasLatLong = (proposal: Maybe<Proposal>) => {
  if (!proposal) {
    return false;
  }
  const { eligibleLocation } = proposal;
  return (
    eligibleLocation && (eligibleLocation.geom || (eligibleLocation?.lat && eligibleLocation.long))
  );
};

const proposalsToMarkers = (proposals: Array<Maybe<Proposal>>) => {
  return proposals
    .filter(hasLatLong)
    .map(proposal => proposal as ProposalWithGEO)
    .map(proposal => {
      const { lat, long, geom } = proposal.eligibleLocation;
      const position =
        lat && long ? { lat, lng: long } : { lat: geom.coordinates[0], lng: geom.coordinates[1] };
      const marker: MarkerProps = {
        position: position,
        popup: proposal.name
      };
      return marker;
    });
};

type IMapPageHOC = {
  communityId: string;
};

export const MapPageHOC = ({ communityId }: IMapPageHOC) => {
  const client = useApolloClient();
  const [markers, setMarkers] = useState<Array<MarkerProps>>([]);

  useEffect(() => {
    const mapPoints = client.query<ProposalsFilteredQuery, ProposalsFilteredQueryVariables>({
      query: proposedIntents,
      variables: {
        communityId
      }
    });

    mapPoints.then(result => {
      if (result.data) {
        if (result.data.proposalsFiltered) {
          setMarkers(proposalsToMarkers(result.data.proposalsFiltered));
        }
      }
    });
  }, [communityId, client]);

  usePageTitle(t`Map`);

  return <Maps markers={markers} zoom={13} center={{ lat: 41.396, lng: 2.192 }} />;
};
