import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { EconomicResourceHOK } from 'HOC/pages/resource/EconomicResourceHOK';
import { WithSidebarTemplate } from '../HOC/templates/WithSidebar/WithSidebar';

interface InventoryResourceItemRouteProps {
  resourceId: string;
}

const InventoryResourceItemRoute: FC<RouteComponentProps<InventoryResourceItemRouteProps>> = ({
  match
}) => {
  const resourceId = match.params.resourceId;

  const props = {
    resourceId: resourceId
  };

  return (
    <WithSidebarTemplate>
      <EconomicResourceHOK {...props} />
    </WithSidebarTemplate>
  );
};

export const InventoryResourceItemRouter: RouteProps = {
  exact: false,
  path: '/resource/:resourceId',
  component: InventoryResourceItemRoute
};
