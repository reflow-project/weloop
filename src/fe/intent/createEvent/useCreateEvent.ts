import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import * as GQL from './useCreateEvent.generated';

export const useCreateEvent = () => {
  const [createMut, createMutStatus] = GQL.useCreateEconomicEventMutation();

  const create = useCallOrNotifyMustLogin(
    async ({
      note,
      action,
      provider,
      receiver,
      hasUnit,
      hasNumericalValue
    }: GQL.CreateEconomicEventMutationVariables) => {
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
    []
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
