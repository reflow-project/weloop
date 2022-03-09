import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { EconomicResourceQueryRefetch } from '../../../HOC/pages/resource/EconomicResource.generated';
import { useCreateEconomicEventAndExistResourceMutation } from './useCreateResource.generated';

export interface CreateResource {
  id: string;
  eventNote: string;
  hasPointInTime: string;
  atLocation: string;
  name: string;
  note?: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number;
  image: string | File | undefined;
}

export const useCreateEventOnResource = () => {
  const [
    createResourceMut,
    createResourceMutStatus
  ] = useCreateEconomicEventAndExistResourceMutation();

  const create = useCallOrNotifyMustLogin(
    async ({
      id,
      action,
      provider,
      receiver,
      hasUnit,
      hasNumericalValue,
      eventNote,
      hasPointInTime
    }: CreateResource) => {
      if (createResourceMutStatus.loading) {
        return;
      }

      return createResourceMut({
        variables: {
          id,
          action,
          provider,
          receiver,
          hasUnit,
          hasNumericalValue,
          eventNote,
          hasPointInTime
        },
        refetchQueries: [EconomicResourceQueryRefetch({ id: id })]
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
