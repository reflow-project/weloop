import gql from 'graphql-tag';
import { RootQueryType } from 'graphql/types.generated';

export const proposedIntents = gql`
  query communityMapPoints($communityId: [ID]!) {
    proposalsFiltered(inScopeOf: $communityId) {
      __typename
      id
      name
      note
      eligibleLocation {
        lat
        long
        geom
      }
    }
  }
`;

export type ProposalsFilteredQuery = { __typename: 'RootQueryType' } & Pick<
  RootQueryType,
  'proposalsFiltered'
>;

export type ProposalsFilteredQueryVariables = {
  communityId: string;
};
