import React, { FC } from 'react';
import { Slide, toast } from 'react-toastify';
import { useDeleteResource } from '../../../fe/resource/delete/useDeleteResource';
import { ConfirmationPanel, ConfirmationPanelProps } from 'ui/modules/ConfirmationPanel';
import { EconomicResource } from '../../pages/inventory/InventoryPage';

export interface Props {
  done: () => void;
  resource: EconomicResource | any;
}

export const DeleteEconomicResourceHOC: FC<Props> = ({ done, resource }) => {
  const { deleteResource, deleteItemStatus } = useDeleteResource();

  const remove = async () =>
    deleteResource(resource.id)
      .then((response: any) => {
        if (!response.errors && response.deleteEconomicResource) {
          toast.success(`Resource was deleted`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
          done();
        } else {
          toast.error(`Resource not deleted! ${response.errors}`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
          done();
        }
      })
      .catch((error: any) => console.log(error));

  const DeleteResourcePanelProps: ConfirmationPanelProps = {
    title: `Do you want to remove economic resource: ${resource.name} `,
    confirm: remove,
    cancel: done,
    action: 'Confirm deleted',
    waiting: deleteItemStatus.loading
  };

  return <ConfirmationPanel {...DeleteResourcePanelProps} />;
};
