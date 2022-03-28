// import { MapsPageHOC } from 'HOC/pages/login/MapsPage';
// import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { locationHelper } from './lib/helper';
// import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { MapPageHOC } from 'HOC/pages/map/MapPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';

interface MapsPageRouter {
  communityId: string;
}
const MapsPageRouter: FC<RouteComponentProps<MapsPageRouter>> = ({ match }) => {
  if (match === null) {
    return <NotFoundHOC />;
  }

  return (
    <WithSidebarTemplate>
      <MapPageHOC communityId={match.params.communityId} />
    </WithSidebarTemplate>
  );
};

export const MapsPageRoute: RouteProps = {
  exact: true,
  path: '/communities/:communityId/map/',
  component: MapsPageRouter
};

export const mapLocation = locationHelper<undefined, undefined>(MapsPageRoute);
