import * as Types from '../../../../graphql/types.generated';

import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import { ResourcePreviewFragment } from '../resource/ResourcePreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityInfoFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityInfoFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { ResourcePreviewFragmentDoc } from '../resource/ResourcePreview.generated';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';





export type CommentPreviewFragment = (
  { __typename: 'Comment' }
  & Pick<Types.Comment, 'id' | 'likerCount'>
  & { inReplyTo: Types.Maybe<(
    { __typename: 'Comment' }
    & CommentPreviewBaseFragment
  )>, myLike: Types.Maybe<(
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, thread: Types.Maybe<(
    { __typename: 'Thread' }
    & Pick<Types.Thread, 'id'>
    & { comments: Types.Maybe<(
      { __typename: 'CommentsPage' }
      & { edges: Array<(
        { __typename: 'Comment' }
        & CommentPreviewBaseFragment
      )> }
    )>, context: Types.Maybe<{ __typename: 'Category' } | (
      { __typename: 'Collection' }
      & Pick<Types.Collection, 'id'>
      & { community: Types.Maybe<(
        { __typename: 'Community' }
        & Pick<Types.Community, 'id'>
        & CommunityInfoFragment
      )> }
    ) | { __typename: 'Comment' } | (
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & CommunityInfoFragment
    ) | (
      { __typename: 'Flag' }
      & Pick<Types.Flag, 'id'>
    ) | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
      { __typename: 'Resource' }
      & Pick<Types.Resource, 'id'>
      & { collection: Types.Maybe<(
        { __typename: 'Collection' }
        & Pick<Types.Collection, 'id'>
        & { community: Types.Maybe<(
          { __typename: 'Community' }
          & Pick<Types.Community, 'id'>
          & CommunityInfoFragment
        )> }
      )> }
    ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
  )> }
  & CommentPreviewBaseFragment
);

export type CommentPreviewBaseFragment = (
  { __typename: 'Comment' }
  & Pick<Types.Comment, 'id' | 'isLocal' | 'content' | 'canonicalUrl' | 'createdAt'>
  & { creator: Types.Maybe<(
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
  )> }
);

export type CommentPreviewThreadFragment = (
  { __typename: 'Thread' }
  & Pick<Types.Thread, 'id' | 'isLocal' | 'canonicalUrl'>
  & { context: Types.Maybe<{ __typename: 'Category' } | (
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | { __typename: 'Comment' } | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | (
    { __typename: 'Resource' }
    & ResourcePreviewFragment
  ) | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | { __typename: 'User' }> }
);

export const CommentPreviewBaseFragmentDoc = gql`
    fragment CommentPreviewBase on Comment {
  id
  isLocal
  content
  canonicalUrl
  createdAt
  creator {
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
}
    `;
export const CommentPreviewFragmentDoc = gql`
    fragment CommentPreview on Comment {
  ...CommentPreviewBase
  id
  inReplyTo {
    ...CommentPreviewBase
  }
  likerCount
  myLike {
    id
  }
  myFlag {
    id
  }
  thread {
    id
    comments(limit: 1) {
      edges {
        ...CommentPreviewBase
      }
    }
    context {
      ... on Flag {
        id
      }
      ... on Community {
        id
        ...CommunityInfo
      }
      ... on Collection {
        id
        community {
          id
          ...CommunityInfo
        }
      }
      ... on Resource {
        id
        collection {
          id
          community {
            id
            ...CommunityInfo
          }
        }
      }
    }
  }
}
    ${CommentPreviewBaseFragmentDoc}
${CommunityInfoFragmentDoc}`;
export const CommentPreviewThreadFragmentDoc = gql`
    fragment CommentPreviewThread on Thread {
  id
  isLocal
  canonicalUrl
  context {
    ... on Collection {
      ...CollectionPreview
    }
    ... on Resource {
      ...ResourcePreview
    }
    ... on Community {
      ...CommunityPreview
    }
  }
}
    ${CollectionPreviewFragmentDoc}
${ResourcePreviewFragmentDoc}
${CommunityPreviewFragmentDoc}`;
