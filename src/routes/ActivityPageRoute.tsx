import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { ActivityPage } from 'HOC/pages/activity/ActivityPage';

const ActivityPageRoute: FC<RouteComponentProps<any>> = ({ match }) => {
  const userId = match.params.userId;

  const props = {
    userId: userId,
    basePath: `/activity/user/${userId}`
  };

  return (
    <WithSidebarTemplate>
      <ActivityPage {...props} />
    </WithSidebarTemplate>
  );
};

export const ActivityPageRouter: RouteProps = {
  exact: false,
  path: '/activity/user/:userId',
  component: ActivityPageRoute
};
