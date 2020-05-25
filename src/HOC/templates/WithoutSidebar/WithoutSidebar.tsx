import { useMe } from 'fe/session/useMe';
import { MainHeaderHOC } from 'HOC/modules/Header/Header';
import React, { FC, useMemo } from 'react';
import { Props, WithoutSidebar } from 'ui/templates/withoutSidebar';
import { GuestTemplate } from '../Guest/Guest';
import { ComponentBag } from 'ui/lib/componentBag';

export interface WithoutSidebarTemplate {}
export const WithoutSidebarTemplate: FC<WithoutSidebarTemplate> = ({
  children
}) => {
  const meQ = useMe();
  const withoutSidebarProps = useMemo<null | Props>(() => {
    const user = meQ.me?.user;
    if (!user) {
      return null;
    }
    const props: Props = {
      HeaderBox: ComponentBag(MainHeaderHOC, {})
    };
    return props;
  }, [meQ]);

  return withoutSidebarProps ? (
    <WithoutSidebar {...withoutSidebarProps}>{children}</WithoutSidebar>
  ) : (
    <GuestTemplate>{children}</GuestTemplate>
  );
};
