import React, { useReducer } from 'react';
import { CreateDropdown } from './CreateDropdown';
import Modal from '../../../ui/modules/Modal';
import { CreateCommunityPanelHOC } from '../CreateCommunityPanel/createCommunityPanelHOC';
import { CreateIntentPanelHOC } from '../CreateIntentPanel/createIntentPanelHOC';
import { CreateLocationPanelHOC } from '../CreateLocationPanel/CreateLocationPanelHOK';
import { CreateResourcePanelHOC } from '../CreateResourcePanel/CreateResourcePanelHOC';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';

export type Props = {
  open: boolean;
  openHandler: (open: boolean) => void;
};

export const CreateMenuHOK: React.FC<Props> = ({ open, openHandler }: Props) => {
  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateLocation, toggleShowCreateLocation] = React.useState(false);
  const [showCreateCommunity, toggleShowCreateCommunity] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const [showCreateIntent, toggleShowCreateIntent] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const CreateCommunityModal = showCreateCommunity ? (
    <Modal closeModal={toggleShowCreateCommunity}>
      <CreateCommunityPanelHOC done={toggleShowCreateCommunity} />
    </Modal>
  ) : null;

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

  return (
    <>
      {CreateCommunityModal}
      {CreateIntentModal}
      {CreateResourceModal}
      {open && (
        <CreateDropdown
          createCommunity={toggleShowCreateCommunity}
          createResource={toggleShowCreateIntent}
          createIntent={toggleShowCreateResource}
          toggleDropdown={() => {
            openHandler(!open);
          }}
        />
      )}
    </>
  );
};
