import React, { FC } from 'react';
import { Inventory, Props as InventoryProps } from '../../../ui/pages/inventory';
import * as GQL from './InventoryPage.generated';

type InventoryPageProps = {
  userId: string;
  basePath: string;
};

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  image?: string;
}

export const InventoryPage: FC<InventoryPageProps> = ({ userId }) => {
  const { data, loading, error } = GQL.useInventoryListQuery({
    variables: { agent: userId }
  });

  const inventory: EconomicResource[] | [] = data?.economicResourcesFiltered || [];

  const props: InventoryProps = {
    userId,
    inventory,
    loading,
    error
  };

  return (
    <>
      <Inventory {...props} />
    </>
  );
};
