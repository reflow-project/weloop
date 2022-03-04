// import { CommunityPage, CommunityPageTab } from 'HOC/pages/community/CommunityPage';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { locationHelper } from './lib/helper';

interface CommunityPageRouter {
  communityId: string;
  tab?: string;
}
const CommunityPageRouter: FC<RouteComponentProps<CommunityPageRouter>> = ({ match }) => {
  // const communityId = match.params.communityId;
  // const maybeTabStr = match.params.tab;

  // const tab =
  //   maybeTabStr === 'timeline'
  //     ? CommunityPageTab.Activities
  //     : // : maybeTabStr === 'inventory'
  //     // ? CommunityPageTab.Inventory
  //     maybeTabStr === 'members'
  //     ? CommunityPageTab.Members
  //     : maybeTabStr === 'discussions'
  //     ? CommunityPageTab.Discussions
  //     : !maybeTabStr
  //     ? // ? CommunityPageTab.Collections
  //       // maybeTabStr
  //       CommunityPageTab.Intents
  //     : null;

  // const props = useMemo<CommunityPage | null>(() => {
  //   return tab === null
  //     ? null
  //     : {
  //         communityId,
  //         tab,
  //         basePath: `/communities/${communityId}`
  //       };
  // }, [tab, communityId]);
  //
  // if (props === null) {
  //   return <NotFoundHOC />;
  // }

  return (
    <WithSidebarTemplate>
      <>CommunityPage</>
      {/*<CommunityPage {...props} />*/}
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
