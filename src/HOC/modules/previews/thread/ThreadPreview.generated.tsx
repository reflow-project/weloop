import * as Types from '../../../../graphql/types.generated';

import { FlagPreviewFragment } from '../flag/FlagPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { FlagPreviewFragmentDoc } from '../flag/FlagPreview.generated';
import { CommentPreviewFragmentDoc } from '../comment/CommentPreview.generated';

export type ThreadPreviewFragment = (
  { __typename: 'Thread' }
  & Pick<Types.Thread, 'id' | 'lastActivity' | 'createdAt'>
  & { context: Types.Maybe<{ __typename: 'Category' } | (
      { __typename: 'Collection' }
      & CollectionPreviewFragment
      ) | { __typename: 'Comment' } | (
      { __typename: 'Community' }
      & CommunityPreviewFragment
      ) | (
      { __typename: 'Flag' }
      & FlagPreviewFragment
      ) | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
      { __typename: 'Resource' }
      & ResourcePreviewFragment
      ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }>, comments: Types.Maybe<(
      { __typename: 'CommentsPage' }
      & Pick<Types.CommentsPage, 'totalCount'>
      & { edges: Array<(
          { __typename: 'Comment' }
          & CommentPreviewFragment
          )> }
      )> }
  );

export const ThreadPreviewFragmentDoc = gql`
    fragment ThreadPreview on Thread {
  id
  lastActivity
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
    ... on Flag {
      ...FlagPreview
    }
  }
  comments(limit: 1) {
    totalCount
    edges {
      ... on Comment {
        ...CommentPreview
      }
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${FlagPreviewFragmentDoc}
${CommentPreviewFragmentDoc}`;
