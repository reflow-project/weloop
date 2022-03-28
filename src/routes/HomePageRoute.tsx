import React, { FC, useMemo } from 'react';
import { HomePageHOC } from 'HOC/pages/home/HomeHoc';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';
import { locationHelper } from './lib/helper';

interface HomePageRouter {
  tab?: string;
}
const HomePageRouter: FC<RouteComponentProps<HomePageRouter>> = ({ match }) => {
  const homeProps: HomePageHOC | null = useMemo(
    () => ({
      basePath: ''
    }),
    []
  );

  if (!homeProps) {
    return <NotFoundHOC />;
  }
  return (
    <RedirectAnonymousToLogin>
      <WithSidebarTemplate>
        <HomePageHOC {...homeProps} />
      </WithSidebarTemplate>
    </RedirectAnonymousToLogin>
  );
};

export const HomePageRoute: RouteProps = {
  exact: true,
  path: '/',
  component: HomePageRouter
};

export const homeLocation = locationHelper<undefined, undefined>(HomePageRoute);
