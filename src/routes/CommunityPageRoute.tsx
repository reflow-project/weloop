import React, { FC, useMemo } from 'react';
import { CommunityPageTab, CommunityPage } from 'HOC/pages/community/CommunityPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { locationHelper } from './lib/helper';

interface CommunityPageRouter {
  communityId: string;
  tab?: string;
}
const CommunityPageRouter: FC<RouteComponentProps<CommunityPageRouter>> = ({ match }) => {
  const communityId = match.params.communityId;
  const maybeTabStr = match.params.tab;

  const tab =
    maybeTabStr === 'timeline'
      ? CommunityPageTab.Activities
      : maybeTabStr === 'members'
      ? CommunityPageTab.Members
      : maybeTabStr === 'discussions'
      ? CommunityPageTab.Discussions
      : !maybeTabStr
      ? // ? CommunityPageTab.Collections
        // maybeTabStr
        CommunityPageTab.Intents
      : null;

  const props = useMemo<CommunityPage | null>(() => {
    return tab === null
      ? null
      : {
          communityId,
          tab,
          basePath: `/communities/${communityId}`
        };
  }, [tab, communityId]);

  if (props === null) {
    return <NotFoundHOC />;
  }

  return (
    <WithSidebarTemplate>
      <CommunityPage {...props} />
    </WithSidebarTemplate>
  );
};

export const CommunityPageRoute: RouteProps = {
  exact: true,
  path: '/communities/:communityId/:tab(timeline|members|discussions|intents)?',
  component: CommunityPageRouter
};

type Tab = undefined | 'timeline' | 'members' | 'discussions' | 'intents';
export type CommunityPageRouterParams = {
  communityId: string;
  tab: Tab;
};

export const communityLocation = locationHelper<CommunityPageRouterParams, undefined>(
  CommunityPageRoute
);
