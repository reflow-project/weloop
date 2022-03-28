import * as Types from '../../../graphql/types.generated';

import { DiscoverPageFeaturedCollectionInfoFragment } from '../../pages/discover/DiscoverPage.generated';
import gql from 'graphql-tag';
import { DiscoverPageFeaturedCollectionInfoFragmentDoc } from '../../pages/discover/DiscoverPage.generated';


export type CollectionFeatureFragment = (
  { __typename: 'Feature' }
  & Pick<Types.Feature, 'id'>
  & { context: Types.Maybe<{ __typename: 'Category' } | (
    { __typename: 'Collection' }
    & DiscoverPageFeaturedCollectionInfoFragment
  ) | { __typename: 'Comment' } | { __typename: 'Community' } | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);

export const CollectionFeatureFragmentDoc = gql`
    fragment CollectionFeature on Feature {
  id
  context {
    ...DiscoverPageFeaturedCollectionInfo
  }
}
    ${DiscoverPageFeaturedCollectionInfoFragmentDoc}`;
