import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import { useCreateIntentMutation } from './useCreateIntent.generated';

export interface CreateIntent {
  name: string;
  note: string;
  communityId: string;
}
export const useCreateIntent = () => {
  const [createMut, createMutStatus] = useCreateIntentMutation();

  const create = useCallOrNotifyMustLogin(
    async ({ name, note, communityId }: CreateIntent) => {
      if (createMutStatus.loading) {
        return;
      }

      return createMut({
        variables: {
          name: name,
          note: note,
          communityId: communityId
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
