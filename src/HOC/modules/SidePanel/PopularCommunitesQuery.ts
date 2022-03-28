import gql from 'graphql-tag';
import { RootQueryType } from 'graphql/types.generated';

export const popularCommunites = gql`
  query popularCommunites {
    communities(limit: 5) {
      totalCount
      edges {
        id
        name
        isLocal
        canonicalUrl
      }
    }
  }
`;

export type PopularCommunitesQuery = Pick<RootQueryType, 'communities'>;
