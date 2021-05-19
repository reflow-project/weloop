import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { InventoryPage } from 'HOC/pages/inventory/InventoryPage';

interface InventoryPageRouteProps {
  userId: string;
  basePath: string;
}

const InventoryPageRoute: FC<RouteComponentProps<InventoryPageRouteProps>> = ({ match }) => {
  const userId = match.params.userId;

  const props = {
    userId: userId,
    basePath: `/inventory/user/${userId}`
  };

  return (
    <WithSidebarTemplate>
      <InventoryPage {...props} />
    </WithSidebarTemplate>
  );
};

export const InventoryPageRouter: RouteProps = {
  exact: false,
  path: '/inventory/user/:userId',
  component: InventoryPageRoute
};
