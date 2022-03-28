import React, { FC, useMemo } from 'react';
import { UserPage, UserPageTab } from 'HOC/pages/user/UserPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { locationHelper } from './lib/helper';

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

  const props = useMemo<UserPage | null>(
    () =>
      tab === null
        ? null
        : {
            tab,
            userId,
            basePath: userLocation.getPath({ tab: undefined, userId }, undefined)
          },
    [tab, userId]
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
