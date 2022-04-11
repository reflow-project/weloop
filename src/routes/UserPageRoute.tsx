import React, { FC, useMemo } from 'react';
import { UserPage, UserPageTab } from 'HOC/pages/user/UserPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { locationHelper } from './lib/helper';
import { useMe } from '../fe/session/useMe';

interface UserPageRouter {
  userId: string;
  tab?: string;
}

const UserPageRouter: FC<RouteComponentProps<UserPageRouter>> = ({ match }) => {
  const userId = match.params.userId;
  const maybeTabStr = match.params.tab as Tab;
  const tab =
    maybeTabStr === 'starred'
      ? UserPageTab.Starred
      : maybeTabStr === 'communities'
      ? UserPageTab.Communities
      : maybeTabStr === 'collections'
      ? UserPageTab.Collections
      : maybeTabStr === 'following'
      ? UserPageTab.Following
      : maybeTabStr === 'inventory'
      ? UserPageTab.Inventory
      : !maybeTabStr
      ? UserPageTab.Activities
      : null;

  const { me } = useMe();
  const userIdentificatior = useMemo(
    () => (userId ? userId : me?.users && me?.users[0] && me?.users[0]?.character?.username),
    [me, userId]
  );

  const props = useMemo<any | null>(
    () =>
      tab === null
        ? null
        : {
            tab,
            userId: userIdentificatior,
            basePath: userLocation.getPath({ tab: undefined, userId }, undefined)
          },
    [tab, userId, userIdentificatior]
  );
  if (!props) {
    return <NotFoundHOC />;
  }
  return (
    <WithSidebarTemplate>
      <UserPage {...props} />
    </WithSidebarTemplate>
  );
};

export const UserPageRoute: RouteProps = {
  exact: true,
  path: '/user/:userId/:tab(starred|communities|collections|inventory|following)?',
  component: UserPageRouter
};

type Tab = undefined | 'starred' | 'communities' | 'collections' | 'inventory' | 'following';
type Params = {
  userId: string;
  tab: Tab;
};

export const userLocation = locationHelper<Params, undefined>(UserPageRoute);
