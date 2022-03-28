import * as Types from '../../../graphql/types.generated';

import { DiscoverPageFeaturedCommunityInfoFragment } from '../../pages/discover/DiscoverPage.generated';
import gql from 'graphql-tag';
import { DiscoverPageFeaturedCommunityInfoFragmentDoc } from '../../pages/discover/DiscoverPage.generated';


export type CommunityFeatureFragment = (
  { __typename: 'Feature' }
  & Pick<Types.Feature, 'id'>
  & { context: Types.Maybe<{ __typename: 'Category' } | { __typename: 'Collection' } | { __typename: 'Comment' } | (
    { __typename: 'Community' }
    & DiscoverPageFeaturedCommunityInfoFragment
  ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);

export const CommunityFeatureFragmentDoc = gql`
    fragment CommunityFeature on Feature {
  id
  context {
    ...DiscoverPageFeaturedCommunityInfo
  }
}
    ${DiscoverPageFeaturedCommunityInfoFragmentDoc}`;
