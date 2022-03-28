import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { InventoryPage } from 'HOC/pages/inventory/InventoryPage';

interface InventoryPageRouteProps {
  userId: string;
  basePath: string;
}

const InventoryPageRoute: FC<RouteComponentProps<InventoryPageRouteProps>> = () => {
  return (
    <WithSidebarTemplate>
      <InventoryPage />
    </WithSidebarTemplate>
  );
};

export const InventoryPageRouter: RouteProps = {
  exact: false,
  path: '/user/:userId/inventory/',
  component: InventoryPageRoute
};
