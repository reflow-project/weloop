import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type DiscoverPageFeaturedCommunityInfoFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'name'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export type DiscoverPageFeaturedCollectionInfoFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export const DiscoverPageFeaturedCommunityInfoFragmentDoc = gql`
    fragment DiscoverPageFeaturedCommunityInfo on Community {
  id
  icon {
    id
    url
  }
  name
}
    `;
export const DiscoverPageFeaturedCollectionInfoFragmentDoc = gql`
    fragment DiscoverPageFeaturedCollectionInfo on Collection {
  id
  icon {
    id
    url
  }
  name
}
    `;
