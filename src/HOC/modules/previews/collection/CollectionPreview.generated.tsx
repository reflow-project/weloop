import * as Types from '../../../../graphql/types.generated';

import { CommunityInfoFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityInfoFragmentDoc } from '../community/CommunityPreview.generated';


export type CollectionPreviewFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'isLocal' | 'canonicalUrl' | 'name' | 'summary' | 'resourceCount' | 'displayUsername' | 'preferredUsername'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & CommunityInfoFragment
  )> }
);

export const CollectionPreviewFragmentDoc = gql`
    fragment CollectionPreview on Collection {
  id
  icon {
    id
    url
  }
  isLocal
  canonicalUrl
  name
  summary
  resourceCount
  displayUsername
  myFlag {
    id
  }
  myFollow {
    id
  }
  preferredUsername
  community {
    id
    ...CommunityInfo
  }
}
    ${CommunityInfoFragmentDoc}`;
