import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type FeaturedCommunityDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'name'>
);

export type FeaturedCollectionFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name'>
);

export const FeaturedCommunityDataFragmentDoc = gql`
    fragment FeaturedCommunityData on Community {
  id
  name
}
    `;
export const FeaturedCollectionFragmentDoc = gql`
    fragment FeaturedCollection on Collection {
  id
  name
}
    `;
