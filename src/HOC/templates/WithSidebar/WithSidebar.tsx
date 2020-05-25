import { useMe } from 'fe/session/useMe';
import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import { SidebarHOC } from 'HOC/modules/Sidebar/Sidebar';
import React, { FC, useMemo } from 'react';
import { SidebarProps, WithSidebar } from 'ui/templates/withSidebar';
import { GuestTemplate } from '../Guest/Guest';
import { ComponentBag } from 'ui/lib/componentBag';
import { ProvideSideBarContext } from 'HOC/context/SideBar';

export interface WithSidebarTemplate {}
export const WithSidebarTemplate: FC<WithSidebarTemplate> = ({ children }) => {
  const meQ = useMe();
  const withSidebarProps = useMemo<null | SidebarProps>(() => {
    const user = meQ.me?.user;
    if (!user) {
      return null;
    }
    const props: SidebarProps = {
      SidebarBox: ComponentBag(SidebarHOC, {}),
      HeaderBox: ComponentBag(MainHeaderHOC, {})
    };
    return props;
  }, [meQ]);
  console.log('withSidebarProps', withSidebarProps);
  return withSidebarProps ? (
    <ProvideSideBarContext>
      <WithSidebar {...withSidebarProps}>{children}</WithSidebar>
    </ProvideSideBarContext>
  ) : (
    <GuestTemplate>{children}</GuestTemplate>
  );
};
