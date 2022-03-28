import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../modules/previews/activity/ActivityPreview.generated';
import { ResourcePreviewFragment } from '../../modules/previews/resource/ResourcePreview.generated';
import { HeroCollectionDataFragment } from '../../modules/HeroCollection/HeroCollection.generated';
import gql from 'graphql-tag';
import { HeroCollectionDataFragmentDoc } from '../../modules/HeroCollection/HeroCollection.generated';
import { ResourcePreviewFragmentDoc } from '../../modules/previews/resource/ResourcePreview.generated';
import { ActivityPreviewFragmentDoc } from '../../modules/previews/activity/ActivityPreview.generated';




export type CollectionPageDataFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'name'>
  & HeroCollectionDataFragment
);

export type CollectionPageResourceFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'id' | 'createdAt'>
  & ResourcePreviewFragment
);

export type CollectionPageActivityFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
  & ActivityPreviewFragment
);

export const CollectionPageDataFragmentDoc = gql`
    fragment CollectionPageData on Collection {
  name
  ...HeroCollectionData
}
    ${HeroCollectionDataFragmentDoc}`;
export const CollectionPageResourceFragmentDoc = gql`
    fragment CollectionPageResource on Resource {
  id
  createdAt
  ...ResourcePreview
}
    ${ResourcePreviewFragmentDoc}`;
export const CollectionPageActivityFragmentDoc = gql`
    fragment CollectionPageActivity on Activity {
  id
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
