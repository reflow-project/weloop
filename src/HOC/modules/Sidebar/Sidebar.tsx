import { useMyFollowedCommunities } from 'fe/community/myFollowed/myFollowedCommunities';
import React, { FC, useMemo, useContext } from 'react';
import {
  CommunityPreview,
  Props as PropsUI,
  Sidebar as SidebarUI,
  Status as StatusUI
} from 'ui/modules/Sidebar/index';
import { MyFollowedCommunityDataFragment } from 'fe/community/myFollowed/myFollowedCommunities.generated';
import { SideBarContext } from 'HOC/context/SideBar';

export interface SidebarHOC {}
export const SidebarHOC: FC<SidebarHOC> = () => {
  const { isOpen: isSidebarOpen } = useContext(SideBarContext);
  const { myCommunityFollowsPage } = useMyFollowedCommunities();
  const communities = useMemo(
    () =>
      myCommunityFollowsPage.edges
        .map(follow => follow.context)
        .filter(
          (context): context is MyFollowedCommunityDataFragment =>
            context.__typename === 'Community'
        )
        .map<CommunityPreview>(community => {
          return {
            icon: community.icon?.url || '',
            link: {
              url: `/communities/${community.id}`,
              external: !community.isLocal
            },
            name: community.name
          };
        }),
    [myCommunityFollowsPage]
  );

  const propsUI = useMemo<PropsUI>(() => {
    const props: PropsUI = {
      isSidebarOpen,
      status: StatusUI.Loaded,
      communities
    };
    return props;
  }, [communities, isSidebarOpen]);
  return <SidebarUI {...propsUI} />;
};
