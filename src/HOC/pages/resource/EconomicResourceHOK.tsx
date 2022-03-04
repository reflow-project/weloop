import React, { FC, useReducer } from 'react';
import { ResourceItem } from 'ui/pages/resource';
import Modal from '../../../ui/modules/Modal';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';
// import { CreateEconomicEventOnResourcePanelHOC } from '../../modules/EconomicEventOnResourcePanel/CreateEconomicEventOnResourcePanelHOC';
// import { UpdateEconomicResourceHOC } from '../../modules/EconomicEventOnResourcePanel/UpdateEconomicResourceHOC';
// import { DeleteEconomicResourceHOC } from '../../modules/EconomicEventOnResourcePanel/DeleteEconomicResourceHOC';
import * as GQL from './EconomicResource.generated';

type ResourcePageProps = {
  resourceId: string;
};

export const EconomicResourceHOK: FC<ResourcePageProps> = ({ resourceId }) => {
  const { data, loading, error } = GQL.useEconomicResourceQuery({
    variables: { id: resourceId.trim() }
  });

  const resource = data?.economicResource;

  console.log({ data, loading, resource });
  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const [showUpdateResource, toggleShowUpdateResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const [showDeleteResource, toggleShowDeleteResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const PerformEventModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      <div>CreateEconomicEventOnResourcePanelHOC</div>
      {/*<CreateEconomicEventOnResourcePanelHOC done={toggleShowCreateResource} resource={resource} />*/}
    </Modal>
  ) : null;

  const EditResourceModal = showUpdateResource ? (
    <Modal closeModal={toggleShowUpdateResource}>
      <div>UpdateEconomicResourceHOC</div>
      {/*<UpdateEconomicResourceHOC done={toggleShowUpdateResource} resource={resource} />*/}
    </Modal>
  ) : null;

  const DeleteResourceModal = showDeleteResource ? (
    <Modal closeModal={toggleShowDeleteResource}>
      <div>DeleteEconomicResourceHOC</div>
      {/*<DeleteEconomicResourceHOC done={toggleShowDeleteResource} resource={resource} />*/}
    </Modal>
  ) : null;

  const props: any = {
    openEditModal: toggleShowCreateResource,
    openUpdateResourceModal: toggleShowUpdateResource,
    openDeleteResourceModal: toggleShowDeleteResource,
    resource,
    loading,
    error
  };

  return (
    <>
      {DeleteResourceModal}
      {EditResourceModal}
      {PerformEventModal}
      <ResourceItem {...props} />
    </>
  );
};
