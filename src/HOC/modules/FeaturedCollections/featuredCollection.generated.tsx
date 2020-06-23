import * as Types from '../../../graphql/types.generated';

import { DiscoverPageFeaturedCollectionInfoFragment } from '../../pages/discover/DiscoverPage.generated';
import gql from 'graphql-tag';
import { DiscoverPageFeaturedCollectionInfoFragmentDoc } from '../../pages/discover/DiscoverPage.generated';


export type CollectionFeatureFragment = (
  { __typename: 'Feature' }
  & Pick<Types.Feature, 'id'>
  & { context: Types.Maybe<(
    { __typename: 'Collection' }
    & DiscoverPageFeaturedCollectionInfoFragment
  ) | { __typename: 'Community' }> }
);

export const CollectionFeatureFragmentDoc = gql`
    fragment CollectionFeature on Feature {
  id
  context {
    ...DiscoverPageFeaturedCollectionInfo
  }
}
    ${DiscoverPageFeaturedCollectionInfoFragmentDoc}`;
