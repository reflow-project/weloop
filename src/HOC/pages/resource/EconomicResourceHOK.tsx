import React, { FC, useReducer } from 'react';
import { ResourceItem, Props as ResourceItemProps } from 'ui/pages/resource';
import Modal from '../../../ui/modules/Modal';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';
import { CreateEconomicEventOnResourcePanelHOC } from '../../modules/CreateEconomicEventOnResourcePanel/CreateEconomicEventOnResourcePanelHOC';
import { UpdateEconomicResourceHOC } from '../../modules/CreateEconomicEventOnResourcePanel/UpdateEconomicResourceHOC';
import * as GQL from './EconomicResource.generated';

type ResourcePageProps = {
  resourceId: string;
};

export const EconomicResourceHOK: FC<ResourcePageProps> = ({ resourceId }) => {
  const { data, loading, error } = GQL.useEconomicResourceQuery({
    variables: { id: resourceId }
  });

  const resource: any = data?.economicResource;

  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const [showUpdateResource, toggleShowUpdateResource] = useReducer(
    is => (notifiedMustLogin() ? false : !is),
    false
  );

  const PerformEventModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      <CreateEconomicEventOnResourcePanelHOC done={toggleShowCreateResource} resource={resource} />
    </Modal>
  ) : null;

  const EditResourceModal = showUpdateResource ? (
    <Modal closeModal={toggleShowUpdateResource}>
      <UpdateEconomicResourceHOC done={toggleShowUpdateResource} resource={resource} />
    </Modal>
  ) : null;

  const props: ResourceItemProps = {
    openEditModal: toggleShowCreateResource,
    openUpdateResourceModal: toggleShowUpdateResource,
    resource,
    loading,
    error
  };

  return (
    <>
      {EditResourceModal}
      {PerformEventModal}
      <ResourceItem {...props} />
    </>
  );
};
