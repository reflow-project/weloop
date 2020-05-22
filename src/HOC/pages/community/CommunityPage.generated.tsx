import * as Types from '../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../modules/previews/activity/ActivityPreview.generated';
import { ThreadPreviewFragment } from '../../modules/previews/thread/ThreadPreview.generated';
import { HeroCommunityDataFragment } from '../../modules/HeroCommunity/HeroCommunity.generated';
import gql from 'graphql-tag';
import { HeroCommunityDataFragmentDoc } from '../../modules/HeroCommunity/HeroCommunity.generated';
import { ThreadPreviewFragmentDoc } from '../../modules/previews/thread/ThreadPreview.generated';
import { ActivityPreviewFragmentDoc } from '../../modules/previews/activity/ActivityPreview.generated';
import { CollectionPreviewFragmentDoc, CollectionPreviewFragment } from 'HOC/modules/previews/collection/CollectionPreview.generated';




export type CommunityPageDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id'>
  & { myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )> }
  & HeroCommunityDataFragment
);

export type CommunityPageThreadFragment = (
  { __typename: 'Thread' }
  & Pick<Types.Thread, 'id'>
  & ThreadPreviewFragment
);

export type CommunityPageCollectionBaseFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id'>
  & CollectionPreviewFragment
);

export type CommunityPageActivityBaseFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
  & ActivityPreviewFragment
);

export const CommunityPageDataFragmentDoc = gql`
    fragment CommunityPageData on Community {
  id
  myFollow {
    id
  }
  ...HeroCommunityData
}
    ${HeroCommunityDataFragmentDoc}`;
export const CommunityPageThreadFragmentDoc = gql`
    fragment CommunityPageThread on Thread {
  id
  ...ThreadPreview
}
    ${ThreadPreviewFragmentDoc}`;
export const CommunityPageCollectionBaseFragmentDoc = gql`
    fragment CommunityPageCollectionBase on Collection {
  id
  ...CollectionPreview
}
    ${CollectionPreviewFragmentDoc}`;
export const CommunityPageActivityBaseFragmentDoc = gql`
    fragment CommunityPageActivityBase on Activity {
  id
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
