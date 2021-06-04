import React, { FC, useReducer } from 'react';
import { ResourceItem, Props as ResourceItemProps } from 'ui/pages/resource';
import Modal from '../../../ui/modules/Modal';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';
import { CreateEconomicEventOnResourcePanelHOC } from '../../modules/CreateEconomicEventOnResourcePanel/CreateEconomicEventOnResourcePanelHOC';
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

  const PerformEventModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      <CreateEconomicEventOnResourcePanelHOC done={toggleShowCreateResource} resource={resource} />
    </Modal>
  ) : null;

  const props: ResourceItemProps = {
    openEditModal: toggleShowCreateResource,
    resource,
    loading,
    error
  };

  return (
    <>
      {PerformEventModal}
      <ResourceItem {...props} />
    </>
  );
};
