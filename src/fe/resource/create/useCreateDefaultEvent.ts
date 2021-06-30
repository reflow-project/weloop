import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { EconomicResourcesFilteredQueryRefetch } from '../../../HOC/pages/inventory/InventoryPage.generated';
import { useCreateDefaultEconomicEventMutation } from './useCreateResource.generated';

export interface CreateDefaultEvent {
  note: string;
  name: string;
  action: string;
}

export const useCreateDefaultEvent = (id: string[] | null | undefined) => {
  const [createResourceMut, createResourceMutStatus] = useCreateDefaultEconomicEventMutation();

  const create = useCallOrNotifyMustLogin(
    async ({ note, name, action }: CreateDefaultEvent) => {
      if (createResourceMutStatus.loading) {
        return;
      }

      return createResourceMut({
        variables: {
          note,
          name,
          action
        },
        refetchQueries: [EconomicResourcesFilteredQueryRefetch({ agent: id })]
      });
    },
    [createResourceMutStatus, createResourceMut]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
