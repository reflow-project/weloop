import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type HeroCommunityDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'displayUsername' | 'name' | 'summary' | 'followerCount'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
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

export type HeroCommunityMeDataFragment = (
  { __typename: 'Me' }
  & { user: (
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
  ) }
);

export const HeroCommunityDataFragmentDoc = gql`
    fragment HeroCommunityData on Community {
  id
  displayUsername
  name
  summary
  icon {
    id
    url
  }
  followerCount
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
export const HeroCommunityMeDataFragmentDoc = gql`
    fragment HeroCommunityMeData on Me {
  user {
    id
  }
}
    `;
