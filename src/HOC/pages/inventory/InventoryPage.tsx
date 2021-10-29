import React, { FC, useReducer } from 'react';
import Modal from '../../../ui/modules/Modal';
import { Inventory } from '../../../ui/pages/inventory';
import { useMe } from 'fe/session/useMe';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';
import { CreateLocationPanelHOC } from '../../modules/CreateLocationPanel/CreateLocationPanelHOK';
import { CreateResourcePanelHOC } from '../../modules/CreateResourcePanel/CreateResourcePanelHOC';
import { useEconomicResourcesFilteredQuery } from './InventoryPage.generated';

export interface PrimaryAccountable {
  id: string;
  name: string;
  image: string;
  relationshipsAsObject?: any;
  intents: {
    id: string;
    name: string;
    note?: string;
    image?: string | null;
  }[];
  onhandQuantity?: {
    hasNumericalValue: string;
    hasUnit?: {
      label: string;
      symbol: string;
    };
  };
  accountingQuantity?: {
    hasNumericalValue: number;
    hasUnit?: {
      label: string;
      symbol: string;
    };
  };
}

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  eventNote?: string;
  image?: string;
  primaryAccountable: PrimaryAccountable;
  currentLocation?: {
    id: string;
    name: string;
    lat: string;
    long: string;
  };
  unitOfEffort: any;
  containedIn: any;
  contains: any;
  lot: any;
  stage: any;
  trace: any[];
  trackingIdentifier?: string | null;
  onhandQuantity?: {
    id: string;
    hasNumericalValue: number;
    hasUnit: {
      id: string;
      label: string;
    };
  };
  track: {
    id: string;
    note: string;
    resourceQuantity: {
      hasNumericalValue: number;
      hasUnit: {
        id: string;
        label: string;
      };
    };
    action?: {
      id: string;
      label: string;
    };
    provider: {
      id: string;
      name: string;
    };
    receiver: {
      id: string;
      name: string;
    };
  }[];
}

export const InventoryPage: FC = () => {
  const { me } = useMe();
  const currentUser = me?.user?.id;
  const [showCreateLocation, toggleShowCreateLocation] = React.useState(false);

  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => !notifiedMustLogin() && !is,
    false
  );

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

  const { data } = useEconomicResourcesFilteredQuery({
    variables: { agent: currentUser ? [currentUser] : [] }
  });

  return (
    <>
      {CreateResourceModal}
      <Inventory
        inventory={data?.economicResourcesFiltered || []}
        done={toggleShowCreateResource}
      />
    </>
  );
};
