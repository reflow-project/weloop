import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import { useCreateEconomicEvent } from './useCreateEvent.generated';

export interface CreateEvent {
  note: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number;
}
export const useCreateEvent = () => {
  const [createMut, createMutStatus] = useCreateEconomicEvent();

  const create = useCallOrNotifyMustLogin(
    async ({ note, action, provider, receiver, hasUnit, hasNumericalValue }: CreateEvent) => {
      if (createMutStatus.loading) {
        return;
      }

      return createMut({
        variables: {
          note,
          action,
          provider,
          receiver,
          hasUnit,
          hasNumericalValue
        }
      });
    },
    [createMutStatus, createMut]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
