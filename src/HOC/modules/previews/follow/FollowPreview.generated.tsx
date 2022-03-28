import * as Types from '../../../../graphql/types.generated';

import { UserPreviewFragment } from '../user/UserPreview.generated';
import { CollectionPreviewFragment } from '../collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityPreviewFragmentDoc } from '../community/CommunityPreview.generated';
import { CollectionPreviewFragmentDoc } from '../collection/CollectionPreview.generated';
import { UserPreviewFragmentDoc } from '../user/UserPreview.generated';




export type FollowPreviewFragment = (
  { __typename: 'Follow' }
  & Pick<Types.Follow, 'id'>
  & { context: { __typename: 'Category' } | (
    { __typename: 'Collection' }
    & CollectionPreviewFragment
  ) | { __typename: 'Comment' } | (
    { __typename: 'Community' }
    & CommunityPreviewFragment
  ) | { __typename: 'Flag' } | { __typename: 'Follow' } | { __typename: 'Intent' } | { __typename: 'Like' } | { __typename: 'Organisation' } | { __typename: 'Resource' } | { __typename: 'SpatialThing' } | { __typename: 'Taggable' } | (
    { __typename: 'User' }
    & UserPreviewFragment
  ) }
);

export const FollowPreviewFragmentDoc = gql`
    fragment FollowPreview on Follow {
  id
  context {
    ... on Community {
      ...CommunityPreview
    }
    ... on Collection {
      ...CollectionPreview
    }
    ... on User {
      ...UserPreview
    }
  }
}
    ${CommunityPreviewFragmentDoc}
${CollectionPreviewFragmentDoc}
${UserPreviewFragmentDoc}`;
