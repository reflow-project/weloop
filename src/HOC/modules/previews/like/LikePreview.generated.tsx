import * as Types from '../../../../graphql/types.generated';

import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import { UserPreviewFragment } from '../user/UserPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { UserPreviewFragmentDoc } from '../user/UserPreview.generated';
import { CommentPreviewFragmentDoc } from '../comment/CommentPreview.generated';






export type LikePreviewFragment = (
  { __typename: 'Like' }
  & Pick<Types.Like, 'id' | 'createdAt'>
  & { context: { __typename: 'Category' } | (
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

export const LikePreviewFragmentDoc = gql`
    fragment LikePreview on Like {
  id
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
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${UserPreviewFragmentDoc}
${CommentPreviewFragmentDoc}`;
