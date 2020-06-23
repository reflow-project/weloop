import * as Types from '../../../graphql/types.generated';

import { DiscoverPageFeaturedCommunityInfoFragment } from '../../pages/discover/DiscoverPage.generated';
import gql from 'graphql-tag';
import { DiscoverPageFeaturedCommunityInfoFragmentDoc } from '../../pages/discover/DiscoverPage.generated';


export type CommunityFeatureFragment = (
  { __typename: 'Feature' }
  & Pick<Types.Feature, 'id'>
  & { context: Types.Maybe<{ __typename: 'Collection' } | (
    { __typename: 'Community' }
    & DiscoverPageFeaturedCommunityInfoFragment
  )> }
);

export const CommunityFeatureFragmentDoc = gql`
    fragment CommunityFeature on Feature {
  id
  context {
    ...DiscoverPageFeaturedCommunityInfo
  }
}
    ${DiscoverPageFeaturedCommunityInfoFragmentDoc}`;
