import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type SidebarFollowedCommunityFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'isLocal' | 'canonicalUrl' | 'name'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, image: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export type SidebarMeUserFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'name' | 'preferredUsername' | 'displayUsername'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, image: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export const SidebarFollowedCommunityFragmentDoc = gql`
    fragment SidebarFollowedCommunity on Community {
  id
  isLocal
  canonicalUrl
  icon {
    id
    url
  }
  image {
    id
    url
  }
  name
}
    `;
export const SidebarMeUserFragmentDoc = gql`
    fragment SidebarMeUser on User {
  id
  name
  icon {
    id
    url
  }
  image {
    id
    url
  }
  preferredUsername
  displayUsername
}
    `;
