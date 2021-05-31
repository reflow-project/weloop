import React, { FC } from 'react';
import { useMe } from '../../../fe/session/useMe';
import { Inventory } from '../../../ui/pages/inventory';
import { useEconomicResourcesFilteredQuery } from './InventoryPage.generated';

type InventoryPageProps = {
  userId: string;
  basePath: string;
};

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  image?: string;
  currentLocation?: {
    id: string;
    name: string;
    lat: string;
    long: string;
  };
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

export const InventoryPage: FC<InventoryPageProps> = ({ userId }) => {
  const { me } = useMe();
  const currentUser = me ? me.user.id : userId;
  const { data } = useEconomicResourcesFilteredQuery({
    variables: { agent: [currentUser] }
  });

  return <Inventory inventory={data?.economicResourcesFiltered || []} />;
};
