import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import { useCreateOfferMutation } from './useCreateIntent.generated';

export interface CreateOffer {
  name: string;
  note?: string;
  communityId: string;
  atLocation?: string;
  hasUnit: string;
  hasNumericalValue: number;
}

export const useCreateIntent = () => {
  const [createOfferMut, createOfferMutStatus] = useCreateOfferMutation();

  const create = useCallOrNotifyMustLogin(
    async ({ name, note, communityId, atLocation, hasNumericalValue, hasUnit }: CreateOffer) => {
      if (createOfferMutStatus.loading) {
        return;
      }

      return createOfferMut({
        variables: {
          name,
          note,
          communityId,
          action: 'produced',
          hasUnit,
          hasNumericalValue
        }
      });
    },
    [createOfferMutStatus, createOfferMut]
  );

  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
