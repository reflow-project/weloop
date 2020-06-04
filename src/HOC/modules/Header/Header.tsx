import { useMe } from 'fe/session/useMe';
import { SideBarContext } from 'HOC/context/SideBar';
import { CreateCommunityPanelHOC } from 'HOC/modules/CreateCommunityPanel/createCommunityPanelHOC';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import React, { FC, useContext, useMemo, useRef } from 'react';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';
import Modal from 'ui/modules/Modal';

export interface MainHeaderHOC {}
export const MainHeaderHOC: FC<MainHeaderHOC> = () => {
  const meQ = useMe();
  const user = meQ.me?.user;
  const { current: CreateCommunityModal } = useRef<
    MainHeaderProps['CreateCommunityModal']
  >(({ done }) => (
    <Modal closeModal={done}>
      <CreateCommunityPanelHOC done={done} />
    </Modal>
  ));
  const { toggleOpen: toggleSideBar } = useContext(SideBarContext);

  const headerProps = useMemo<MainHeaderProps>(() => {
    const props: MainHeaderProps = {
      Search: <SearchBox key="search" />,
      user: user
        ? {
            isAdmin: meQ.isAdmin,
            logout: meQ.logout,
            icon: user.icon?.url || '',
            link: `/user/${user.id}`,
            name: user.name || ''
          }
        : null,
      toggleSideBar,
      CreateCommunityModal
    };
    return props;
  }, [user, meQ.isAdmin, meQ.logout, toggleSideBar, CreateCommunityModal]);
  return <MainHeader {...headerProps} />;
};
