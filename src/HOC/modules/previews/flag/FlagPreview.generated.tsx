import * as Types from '../../../../graphql/types.generated';

import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { UserPreviewFragment } from '../user/UserPreview.generated';
import gql from 'graphql-tag';
import { UserPreviewFragmentDoc } from '../user/UserPreview.generated';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { CommentPreviewFragmentDoc } from '../comment/CommentPreview.generated';






export type FlagPreviewFragment = (
  { __typename: 'Flag' }
  & Pick<Types.Flag, 'id' | 'message' | 'isResolved' | 'createdAt'>
  & { creator: Types.Maybe<(
    { __typename: 'User' }
    & UserPreviewFragment
  )>, context: { __typename: 'Category' } | (
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Comment' }
    & CommentPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
    { __typename: 'User' }
    & UserPreviewFragment
  ) }
);

export const FlagPreviewFragmentDoc = gql`
    fragment FlagPreview on Flag {
  id
  message
  isResolved
  creator {
    ...UserPreview
  }
  createdAt
  context {
    ... on Community {
      ...CommunityPreview
    }
    ... on Collection {
      ...CollectionPreview
    }
    ... on Resource {
      ...ResourcePreview
    }
    ... on User {
      ...UserPreview
    }
    ... on Comment {
      ...CommentPreview
    }
  }
}
    ${UserPreviewFragmentDoc}
${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${CommentPreviewFragmentDoc}`;
