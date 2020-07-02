import { useMe } from 'fe/session/useMe';
import { SideBarContext } from 'HOC/context/SideBar';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { CreateCommunityPanelHOC } from 'HOC/modules/CreateCommunityPanel/createCommunityPanelHOC';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import React, { FC, useContext, useMemo, useReducer } from 'react';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';
import Modal from 'ui/modules/Modal';

export interface MainHeaderHOC {}
export const MainHeaderHOC: FC<MainHeaderHOC> = () => {
  const meQ = useMe();
  const user = meQ.me?.user;
  const notifiedMustLogin = useNotifyMustLogin();

  const [showCreateCommunity, toggleShowCreateCommunity] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const CreateCommunityModal = showCreateCommunity ? (
    <Modal closeModal={toggleShowCreateCommunity}>
      <CreateCommunityPanelHOC done={toggleShowCreateCommunity} />
    </Modal>
  ) : null;

  const { toggleOpen: toggleSideBar } = useContext(SideBarContext);

  const [isOpenDropdown, toggleDropdown] = useReducer(is => !is, false);
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
      createCommunity: toggleShowCreateCommunity,
      isOpenDropdown,
      toggleDropdown
    };
    return props;
  }, [user, meQ.isAdmin, meQ.logout, toggleSideBar, isOpenDropdown]);
  return (
    <>
      {CreateCommunityModal}
      <MainHeader {...headerProps} />
    </>
  );
};
