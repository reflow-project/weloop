import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { EconomicResource } from 'HOC/pages/resource/EconomicResource';
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
      <EconomicResource {...props} />
    </WithSidebarTemplate>
  );
};

export const InventoryResourceItemRouter: RouteProps = {
  exact: false,
  path: '/inventory/:resourceId',
  component: InventoryResourceItemRoute
};
