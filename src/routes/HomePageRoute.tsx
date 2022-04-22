import React, { FC, useMemo } from 'react';
import { HomePageHOC } from 'HOC/pages/home/HomeHoc';
import { Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';
import { locationHelper } from './lib/helper';
import { useMe } from '../fe/session/useMe';

interface HomePageRouter {
  tab?: string;
}
const HomePageRouter: FC<RouteComponentProps<HomePageRouter>> = ({ match }) => {
  const homeProps: any | null = useMemo(
    () => ({
      basePath: ''
    }),
    []
  );
  const { me } = useMe();
  const loggedIn = !!me?.user?.id || localStorage.getItem('APOLLO#AUTH_TOKEN');

  if (!homeProps) {
    return <NotFoundHOC />;
  }

  if (!homeProps) {
    return <NotFoundHOC />;
  }

  return loggedIn ? (
    <RedirectAnonymousToLogin>
      <WithSidebarTemplate>
        <HomePageHOC {...homeProps} />
      </WithSidebarTemplate>
    </RedirectAnonymousToLogin>
  ) : (
    <Redirect to={'/login'} />
  );
};

export const HomePageRoute: RouteProps = {
  exact: true,
  path: '/',
  component: HomePageRouter
};

export const homeLocation = locationHelper<undefined, undefined>(HomePageRoute);
