// import { MapsPageHOC } from 'HOC/pages/login/MapsPage';
// import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { locationHelper } from './lib/helper';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';

interface MapsPageRouter {}
const MapsPageRouter: FC<RouteComponentProps<MapsPageRouter>> = ({ match }) => {
  const props = null; // TODO: implement Map HOC

  if (props === null) {
    return <NotFoundHOC />;
  }

  return (
    <WithSidebarTemplate>
      {/* {TODO: use HOC component} */}
      Map goes here
    </WithSidebarTemplate>
  );
};

export const MapsPageRoute: RouteProps = {
  exact: true,
  path: '/maps',
  component: MapsPageRouter
};

export const mapLocation = locationHelper<undefined, undefined>(MapsPageRoute);
