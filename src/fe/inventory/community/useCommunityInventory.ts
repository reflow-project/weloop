import { useMemo } from 'react';
import * as GQL from '../../../HOC/pages/inventory/InventoryPage.generated';

export const useCommunityInventory = (userId: string) => {
  const { data } = GQL.useEconomicResourcesFilteredQuery({
    variables: { agent: [userId] }
  });

  const communityInventory = data?.economicResourcesFiltered || [];

  return useMemo(
    () => ({
      communityInventory
    }),
    [communityInventory]
  );
};
