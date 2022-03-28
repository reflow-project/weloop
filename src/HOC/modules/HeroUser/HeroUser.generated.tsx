import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type HeroUserUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'displayUsername' | 'location' | 'summary' | 'name' | 'followerCount'>
  & { image: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, myFollow: Types.Maybe<(
    { __typename: 'Follow' }
    & Pick<Types.Follow, 'id'>
  )>, myFlag: Types.Maybe<(
    { __typename: 'Flag' }
    & Pick<Types.Flag, 'id'>
  )> }
);

export const HeroUserUserDataFragmentDoc = gql`
    fragment HeroUserUserData on User {
  id
  image {
    id
    url
  }
  icon {
    id
    url
  }
  displayUsername
  location
  summary
  name
  myFollow {
    id
  }
  myFlag {
    id
  }
  followerCount
}
    `;
