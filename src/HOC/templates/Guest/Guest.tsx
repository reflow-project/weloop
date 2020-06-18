import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import React, { FC } from 'react';
import { Guest, Props } from 'ui/templates/guest';
import { ProvideSideBarContext } from 'HOC/context/SideBar';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';

export interface GuestTemplate {
  withoutHeader?: boolean;
}
export const GuestTemplate: FC<GuestTemplate> = ({ children, withoutHeader = false }) => {
  const HeaderBox = withoutHeader ? undefined : <MainHeaderHOC />;
  const props: Props = {
    HeaderBox,
    SearchBox: <SearchBox />
  };
  return (
    <ProvideSideBarContext>
      <Guest {...props}>{children}</Guest>
    </ProvideSideBarContext>
  );
};
