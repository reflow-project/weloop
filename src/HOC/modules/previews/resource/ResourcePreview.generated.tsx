import * as Types from '../../../../graphql/types.generated';

import { CommunityInfoFragment } from '../community/CommunityPreview.generated';
import gql from 'graphql-tag';
import { CommunityInfoFragmentDoc } from '../community/CommunityPreview.generated';


export type ResourcePreviewFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'id' | 'name' | 'summary' | 'canonicalUrl' | 'license'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, payload: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'mediaType' | 'url'>
    & { mirror: Types.Maybe<(
      { __typename: 'ContentMirror' }
      & Pick<Types.ContentMirror, 'url'>
    )>, upload: Types.Maybe<(
      { __typename: 'ContentUpload' }
      & Pick<Types.ContentUpload, 'size'>
    )> }
  )>, myLike: Types.Maybe<(
    { __typename: 'Like' }
    & Pick<Types.Like, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, likers: Types.Maybe<(
    { __typename: 'LikesPage' }
    & Pick<Types.LikesPage, 'totalCount'>
  )>, collection: Types.Maybe<(
    { __typename: 'Collection' }
    & Pick<Types.Collection, 'id' | 'name' | 'preferredUsername' | 'canonicalUrl' | 'summary'>
    & { icon: Types.Maybe<(
      { __typename: 'Content' }
      & Pick<Types.Content, 'id' | 'url'>
    )>, community: Types.Maybe<(
      { __typename: 'Community' }
      & Pick<Types.Community, 'id'>
      & CommunityInfoFragment
    )> }
  )> }
);

export const ResourcePreviewFragmentDoc = gql`
    fragment ResourcePreview on Resource {
  id
  icon {
    id
    url
  }
  name
  summary
  canonicalUrl
  payload: content {
    id
    mediaType
    mirror {
      url
    }
    upload {
      size
    }
    url
  }
  myLike {
    id
  }
  myFlag {
    id
  }
  likers {
    totalCount
  }
  collection {
    id
    name
    preferredUsername
    canonicalUrl
    icon {
      id
      url
    }
    summary
    community {
      id
      ...CommunityInfo
    }
  }
  license
}
    ${CommunityInfoFragmentDoc}`;
