import React, { FC, useMemo } from 'react';
import { UserPage, UserPageTab } from 'HOC/pages/user/UserPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';

interface UserPageRouter {
  userId: string;
  tab?: string;
}
const UserPageRouter: FC<RouteComponentProps<UserPageRouter>> = ({ match }) => {
  const userId = match.params.userId;
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'starred'
      ? UserPageTab.Starred
      : maybeTabStr === 'communities'
      ? UserPageTab.Communities
      : maybeTabStr === 'collections'
      ? UserPageTab.Collections
      : maybeTabStr === 'following'
      ? UserPageTab.Following
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
            basePath: `/user/${userId}`
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
  path: '/user/:userId/:tab?',
  component: UserPageRouter
};
