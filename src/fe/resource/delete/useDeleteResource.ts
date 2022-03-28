import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { EconomicResourceQueryRefetch } from '../../../HOC/pages/resource/EconomicResource.generated';
import { useDeleteEconomicResourceMutation } from './useDeleteResource.generated';

export interface DeleteResourceVarabls {
  id: string;
}

export const useDeleteResource = () => {
  const [deleteItem, deleteItemStatus] = useDeleteEconomicResourceMutation();

  const deleteResource = useCallOrNotifyMustLogin(
    async (id: string) => {
      if (deleteItemStatus.loading) {
        return;
      }

      return deleteItem({
        variables: {
          id
        },
        refetchQueries: [EconomicResourceQueryRefetch({ id: id })]
      });
    },
    [deleteItemStatus, deleteItem]
  );
  return useMemo(() => {
    return {
      deleteResource,
      deleteItemStatus
    };
  }, [deleteResource, deleteItemStatus]);
};
