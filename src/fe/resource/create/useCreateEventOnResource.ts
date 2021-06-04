import { useMemo } from 'react';
import { useCallOrNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { EconomicResourceQueryRefetch } from '../../../HOC/pages/resource/EconomicResource.generated';
import { useCreateEconomicEventAndExistResourceMutation } from './useCreateResource.generated';

export interface CreateResource {
  id: string;
  eventNote: string;
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
      eventNote,
      atLocation,
      name,
      note,
      action,
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
          id,
          eventNote,
          atLocation,
          name,
          note,
          action,
          provider,
          receiver,
          hasUnit,
          hasNumericalValue,
          image
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
