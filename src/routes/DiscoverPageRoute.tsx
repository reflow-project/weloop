import { DiscoverPage, DiscoverPageTabs } from 'HOC/pages/discover/DiscoverPage';
import React, { FC, useMemo } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { locationHelper } from './lib/helper';

interface DiscoverPageRouter {
  tab?: string;
}
const DiscoverPageRouter: FC<RouteComponentProps<DiscoverPageRouter>> = ({ match }) => {
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'collections'
      ? DiscoverPageTabs.Collections
      : maybeTabStr === 'communities'
      ? DiscoverPageTabs.Communities
      : !maybeTabStr
      ? DiscoverPageTabs.Activities
      : null;
  const props = useMemo<DiscoverPage | null>(() => {
    return tab === null
      ? null
      : {
          basePath: '/discover',
          tab
        };
  }, [tab]);
  if (!props) {
    return <NotFoundHOC />;
  }

  return (
    <WithSidebarTemplate>
      <DiscoverPage {...props} />
    </WithSidebarTemplate>
  );
};

export const DiscoverPageRoute: RouteProps = {
  exact: true,
  path: '/discover/:tab(collections|communities)?',
  component: DiscoverPageRouter
};

type Tab = undefined | 'collections' | 'communities';
type Params = {
  tab: Tab;
};

export const discoverLocation = locationHelper<Params, undefined>(DiscoverPageRoute);
