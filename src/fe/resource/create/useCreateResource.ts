import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { useCreateEconomicEventAndNewResourceMutation } from './useCreateResource.generated';

export interface CreateResource {
  name: string;
  note?: string;
  eventNote?: string;
  hasPointInTime?: string;
  atLocation: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number;
  image: string | File | undefined;
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
      eventNote,
      hasPointInTime,
      action,
      atLocation,
      provider,
      receiver,
      hasUnit,
      hasNumericalValue,
      image
    }: CreateResource) => {
      if (createResourceMutStatus.loading) {
        return;
      }

      return createResourceMut({
        variables: {
          name,
          note,
          eventNote,
          hasPointInTime,
          atLocation,
          action,
          provider,
          receiver,
          hasUnit,
          hasNumericalValue,
          image
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
