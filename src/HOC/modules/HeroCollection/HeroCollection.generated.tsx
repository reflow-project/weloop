import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type HeroCollectionDataFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name' | 'displayUsername' | 'summary' | 'followerCount'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id' | 'name'>
    & { icon: Types.Maybe<(
      { __typename: 'Content' }
      & Pick<Types.Content, 'id' | 'url'>
    )>, myFollow: Types.Maybe<(
      { __typename: 'Follow' }
      & Pick<Types.Follow, 'id'>
    )> }
  )>, followers: Types.Maybe<(
    { __typename: 'FollowsPage' }
    & Pick<Types.FollowsPage, 'totalCount'>
  )>, myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )>, creator: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  )> }
);

export type HeroCollectionMeDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  ) }
);

export const HeroCollectionDataFragmentDoc = gql`
    fragment HeroCollectionData on Collection {
  id
  name
  displayUsername
  summary
  icon {
    id
    url
  }
  community {
    id
    name
    icon {
      id
      url
    }
    myFollow {
      id
    }
  }
  followerCount
  followers {
    totalCount
  }
  myFollow {
    id
  }
  myFlag {
    id
  }
  creator {
    id
  }
}
    `;
export const HeroCollectionMeDataFragmentDoc = gql`
    fragment HeroCollectionMeData on Me {
  user {
    id
  }
}
    `;
