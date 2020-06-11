import React, { FC, useMemo } from 'react';
import { HomePageHOC, HomePageTab } from 'HOC/pages/home/HomeHoc';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { NotFound } from 'ui/pages/notFound';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';

interface HomePageRouter {
  tab?: string;
}
const HomePageRouter: FC<RouteComponentProps<HomePageRouter>> = ({ match }) => {
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'mycommunities'
      ? HomePageTab.MyCommunities
      : maybeTabStr === 'mycollections'
      ? HomePageTab.MyCollections
      : !maybeTabStr
      ? HomePageTab.Activities
      : null;

  const homeProps: HomePageHOC | null = useMemo(
    () =>
      tab === null
        ? null
        : {
            basePath: '',
            tab
          },
    [tab]
  );

  if (!homeProps) {
    return <NotFound />;
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
  path: '/:tab?',
  component: HomePageRouter
};
