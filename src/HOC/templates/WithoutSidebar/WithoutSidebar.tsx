import { useMe } from 'fe/session/useMe';
import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import React, { FC, useMemo } from 'react';
import { Props, WithoutSidebar } from 'ui/templates/withoutSidebar';
import { GuestTemplate } from '../Guest/Guest';
import { SidebarHOC } from 'HOC/modules/Sidebar/Sidebar';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({ children }) => {
  const { me, logout } = useMe();
  const withoutSidebarProps = useMemo<null | Props>(() => {
    const user = me?.user;
    if (!user) {
      return null;
    }
    const userImage = user.icon?.url || '';
    const userLink = `/user/${user.id}`;
    const props: Props = {
      SidebarBox: <SidebarHOC />,
      HeaderBox: <MainHeaderHOC />,
      SearchBox: <SearchBox />,
      userImage,
      userLink,
      signout: logout,
      username: user.displayUsername || '',
      name: user.preferredUsername || ''
    };
    return props;
  }, [logout, me]);

  return withoutSidebarProps ? (
    <WithoutSidebar {...withoutSidebarProps}>{children}</WithoutSidebar>
  ) : (
    <GuestTemplate>{children}</GuestTemplate>
  );
};
