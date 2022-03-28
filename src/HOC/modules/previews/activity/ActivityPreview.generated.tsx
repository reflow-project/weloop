import * as Types from '../../../../graphql/types.generated';

import { FollowPreviewFragment } from '../follow/FollowPreview.generated';
import { LikePreviewFragment } from '../like/LikePreview.generated';
import { FlagPreviewFragment } from '../flag/FlagPreview.generated';
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
import { FlagPreviewFragmentDoc } from '../flag/FlagPreview.generated';
import { LikePreviewFragmentDoc } from '../like/LikePreview.generated';
import { FollowPreviewFragmentDoc } from '../follow/FollowPreview.generated';









export type ActivityPreviewFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id' | 'verb' | 'createdAt'>
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'canonicalUrl'>
    & { userId: Types.User['id'], userName: Types.User['name'] }
    & { icon: Types.Maybe<(
      { __typename: 'Content' }
      & Pick<Types.Content, 'id' | 'url'>
    )>, image: Types.Maybe<(
      { __typename: 'Content' }
      & Pick<Types.Content, 'id' | 'url'>
    )> }
  )>, context: Types.Maybe<{ __typename: 'Category' } | (
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | (
    { __typename: 'Comment' }
    & CommentPreviewFragment
  ) | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | (
    { __typename: 'Flag' }
    & FlagPreviewFragment
  ) | (
    { __typename: 'Follow' }
    & FollowPreviewFragment
  ) | { __typename: 'Intent' } | (
    { __typename: 'Like' }
    & LikePreviewFragment
  ) | { __typename: 'Organisation' } | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
    { __typename: 'User' }
    & UserPreviewFragment
  )> }
);

export const ActivityPreviewFragmentDoc = gql`
    fragment ActivityPreview on Activity {
  id
  verb
  createdAt
  user {
    icon {
      id
      url
    }
    image {
      id
      url
    }
    userId: id
    userName: name
    canonicalUrl
  }
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
    ... on Flag {
      ...FlagPreview
    }
    ... on Like {
      ...LikePreview
    }
    ... on Follow {
      ...FollowPreview
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${UserPreviewFragmentDoc}
${CommentPreviewFragmentDoc}
${FlagPreviewFragmentDoc}
${LikePreviewFragmentDoc}
${FollowPreviewFragmentDoc}`;
