import { useMe } from 'fe/session/useMe';
import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import { SidebarHOC } from 'HOC/modules/Sidebar/Sidebar';
import React, { FC, useMemo } from 'react';
import { SidebarProps, WithSidebar } from 'ui/templates/withSidebar';
import { GuestTemplate } from '../Guest/Guest';
import { ProvideSideBarContext } from 'HOC/context/SideBar';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';

export interface WithSidebarTemplate {}
export const WithSidebarTemplate: FC<WithSidebarTemplate> = ({ children }) => {
  const { loading, me } = useMe();

  const withSidebarProps = useMemo<null | SidebarProps>(() => {
    const user = me?.user;
    if (!user || loading) {
      return null;
    }
    const props: SidebarProps = {
      SidebarBox: <SidebarHOC />,
      HeaderBox: <MainHeaderHOC />,
      SearchBox: <SearchBox />
    };
    return props;
  }, [loading, me]);
  // console.log('withSidebarProps', withSidebarProps);
  return withSidebarProps ? (
    <ProvideSideBarContext>
      <WithSidebar {...withSidebarProps}>{children}</WithSidebar>
    </ProvideSideBarContext>
  ) : (
    <GuestTemplate>{children}</GuestTemplate>
  );
};
