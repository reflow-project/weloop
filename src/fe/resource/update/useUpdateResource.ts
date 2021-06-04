import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { EconomicResourceQueryRefetch } from '../../../HOC/pages/resource/EconomicResource.generated';
import { useUpdateEconomicResourceMutation } from './useUpdateResource.generated';
// import { updateResourceVariables } from './useUpdateResource.generated';

export interface UpdateResource {
  name: string;
  note?: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number;
  image: string | File | undefined;
}

export const useUpdateResource = () => {
  const [updateResourceMut, updateResourceMutStatus] = useUpdateEconomicResourceMutation();

  const update = useCallOrNotifyMustLogin(
    async ({ id, note, image }: any) => {
      if (updateResourceMutStatus.loading) {
        return;
      }

      return updateResourceMut({
        variables: {
          id,
          note,
          image
        },
        refetchQueries: [EconomicResourceQueryRefetch({ id: id })]
      });
    },
    [updateResourceMutStatus, updateResourceMut]
  );
  return useMemo(() => {
    return {
      update
    };
  }, [update]);
};
