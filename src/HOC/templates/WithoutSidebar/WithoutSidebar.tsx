import { useMe } from 'fe/session/useMe';
import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import React, { FC, useMemo } from 'react';
import { Props, WithoutSidebar } from 'ui/templates/withoutSidebar';
import { GuestTemplate } from '../Guest/Guest';
import { SidebarHOC } from 'HOC/modules/Sidebar/Sidebar';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import { useAnon } from '../../../fe/session/useAnon';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({ children }) => {
  const { me } = useMe();
  const { logout } = useAnon();
  const withoutSidebarProps = useMemo<null | Props>(() => {
    const user = me?.user;
    if (!user) {
      return null;
    }

    const props: any = {
      SidebarBox: <SidebarHOC />,
      HeaderBox: <MainHeaderHOC />,
      SearchBox: <SearchBox />,
      signOut: logout
    };
    return props;
  }, [me, logout]);

  return withoutSidebarProps ? (
    <WithoutSidebar {...withoutSidebarProps}>{children}</WithoutSidebar>
  ) : (
    <GuestTemplate>{children}</GuestTemplate>
  );
};
