import { useMe } from 'fe/session/useMe';
import { SideBarContext } from 'HOC/context/SideBar';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
// import { CreateCommunityPanelHOC } from 'HOC/modules/CreateCommunityPanel/createCommunityPanelHOC';
import { SearchBox } from 'HOC/modules/SearchBox/SearchBox';
import React, { FC, useContext, useMemo, useReducer } from 'react';
import { MainHeader, Props as MainHeaderProps } from 'ui/modules/MainHeader';
import Modal from 'ui/modules/Modal';
import { CreateLocationPanelHOC } from '../CreateLocationPanel/CreateLocationPanelHOK';
import { CreateResourcePanelHOC } from '../CreateResourcePanel/CreateResourcePanelHOC';
import { CreateIntentPanelHOC } from '../CreateIntentPanel/createIntentPanelHOC';

export interface MainHeaderHOC {}
export const MainHeaderHOC: FC<MainHeaderHOC> = () => {
  const meQ = useMe();

  const user = meQ.me?.user;
  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateLocation, toggleShowCreateLocation] = React.useState(false);

  const [showCreateIntent, toggleShowCreateIntent] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const CreateIntentModal = showCreateIntent ? (
    <Modal closeModal={toggleShowCreateIntent}>
      <CreateIntentPanelHOC done={toggleShowCreateIntent} />
    </Modal>
  ) : null;

  const CreateResourceModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      {showCreateLocation ? (
        <CreateLocationPanelHOC done={toggleShowCreateLocation} />
      ) : (
        <CreateResourcePanelHOC
          done={toggleShowCreateResource}
          toggleCreateLocation={toggleShowCreateLocation}
        />
      )}
    </Modal>
  ) : null;

  const { toggleOpen: toggleSideBar } = useContext(SideBarContext);

  const [isOpenDropdown, toggleDropdown] = useReducer(is => !is, false);
  const headerProps = useMemo<MainHeaderProps>(() => {
    const props: MainHeaderProps = {
      Search: <SearchBox key="search" />,
      user: user
        ? {
            icon: `${process.env.REACT_APP_GRAPHQL_IMG_LINK}${user?.profile?.icon}`,
            name: `${user.character?.username}`,
            link: `/user/${user.id}`
          }
        : null,
      toggleSideBar,
      createIntent: toggleShowCreateIntent,
      createResource: toggleShowCreateResource,
      isOpenDropdown,
      toggleDropdown
    };
    return props;
  }, [user, toggleSideBar, isOpenDropdown]);
  return (
    <>
      {CreateIntentModal}
      {CreateResourceModal}
      <MainHeader {...headerProps} />
    </>
  );
};
