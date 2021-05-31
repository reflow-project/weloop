import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { useCreateEconomicEventAndNewResourceMutation } from './useCreateReesource.generated';

export interface CreateResource {
  name: string;
  note?: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number;
}

export const useCreateResource = () => {
  const [
    createResourceMut,
    createResourceMutStatus
  ] = useCreateEconomicEventAndNewResourceMutation();

  const create = useCallOrNotifyMustLogin(
    async ({
      name,
      note,
      action,
      provider,
      receiver,
      hasUnit,
      hasNumericalValue
    }: CreateResource) => {
      if (createResourceMutStatus.loading) {
        return;
      }

      return createResourceMut({
        variables: {
          name,
          note,
          action,
          provider,
          receiver,
          hasUnit,
          hasNumericalValue
        }
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
