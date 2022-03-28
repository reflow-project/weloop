import * as Types from '../../../../graphql/types.generated';

import gql from 'graphql-tag';

export type UserPreviewFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'displayUsername' | 'summary' | 'canonicalUrl'>
  & { userId: Types.User['id'], userName: Types.User['name'] }
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, image: Types.Maybe<(
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

export const UserPreviewFragmentDoc = gql`
    fragment UserPreview on User {
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
  displayUsername
  summary
  canonicalUrl
  myFollow {
    id
  }
  myFlag {
    id
  }
}
    `;
