import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import React, { FC } from 'react';
import { Guest, Props } from 'ui/templates/guest';
import { ProvideSideBarContext } from 'HOC/context/SideBar';

export interface GuestTemplate {
  withoutHeader?: boolean;
}
export const GuestTemplate: FC<GuestTemplate> = ({ children, withoutHeader = false }) => {
  const HeaderBox = withoutHeader ? undefined : <MainHeaderHOC />;
  const props: Props = {
    HeaderBox
  };
  return (
    <ProvideSideBarContext>
      <Guest {...props}>{children}</Guest>
    </ProvideSideBarContext>
  );
};
