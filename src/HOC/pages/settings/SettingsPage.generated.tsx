import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type SettingsPageMeUserFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'name' | 'location' | 'summary' | 'displayUsername' | 'website' | 'extraInfo'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )>, image: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export const SettingsPageMeUserFragmentDoc = gql`
    fragment SettingsPageMeUser on User {
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
  location
  summary
  displayUsername
  website
  extraInfo
}
    `;
