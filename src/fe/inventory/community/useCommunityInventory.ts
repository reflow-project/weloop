import { useMemo } from 'react';
import * as GQL from '../../../HOC/pages/inventory/InventoryPage.generated';
import { useMe } from '../../session/useMe';

export const useCommunityInventory = () => {
  const { me } = useMe();
  const currentUser = me?.user?.id;
  const { data } = GQL.useEconomicResourcesFilteredQuery({
    variables: { agent: [currentUser || ''] }
  });

  const communityInventory = data?.economicResourcesFiltered || [];

  return useMemo(
    () => ({
      communityInventory
    }),
    [communityInventory]
  );
};
