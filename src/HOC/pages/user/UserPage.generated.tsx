import * as Types from '../../../graphql/types.generated';

import { HeroUserUserDataFragment } from '../../modules/HeroUser/HeroUser.generated';
import gql from 'graphql-tag';
import { HeroUserUserDataFragmentDoc } from '../../modules/HeroUser/HeroUser.generated';


export type UserPageActivitiesFragment = (
  { __typename: 'Activity' }
  & Pick<Types.Activity, 'id'>
);

export type UserPageUserDataFragment = (
  { __typename: 'User' }
  & Pick<Types.User, 'id' | 'website'>
  & { userId: Types.User['id'], userName: Types.User['name'] }
  & { collectionFollows: Types.Maybe<(
    { __typename: 'FollowsPage' }
    & Pick<Types.FollowsPage, 'totalCount'>
  )>, communityFollows: Types.Maybe<(
    { __typename: 'FollowsPage' }
    & Pick<Types.FollowsPage, 'totalCount'>
  )>, userFollows: Types.Maybe<(
    { __typename: 'FollowsPage' }
    & Pick<Types.FollowsPage, 'totalCount'>
  )>, outbox: Types.Maybe<(
    { __typename: 'ActivitiesPage' }
    & Pick<Types.ActivitiesPage, 'totalCount'>
  )> }
  & HeroUserUserDataFragment
);

export const UserPageActivitiesFragmentDoc = gql`
    fragment UserPageActivities on Activity {
  id
}
    `;
export const UserPageUserDataFragmentDoc = gql`
    fragment UserPageUserData on User {
  id
  userId: id
  collectionFollows {
    totalCount
  }
  communityFollows {
    totalCount
  }
  userFollows {
    totalCount
  }
  outbox {
    totalCount
  }
  website
  userName: name
  ...HeroUserUserData
}
    ${HeroUserUserDataFragmentDoc}`;
