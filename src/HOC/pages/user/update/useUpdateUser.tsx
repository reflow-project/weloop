import { useMemo } from 'react';
import { useUpdateUserMutation } from '../UserPage.generated';
import { useCallOrNotifyMustLogin } from '../../../lib/notifyMustLogin';
export interface TUpdateUser {
  name?: string;
  userName: string;
  summary: string;
  icon?: string | File | undefined;
  image?: string | File | undefined;
}
export const useUpdateUser = () => {
  const [updateUserQ, updateStatus] = useUpdateUserMutation();
  const update = useCallOrNotifyMustLogin(
    async ({ userName, summary }: TUpdateUser) => {
      if (updateStatus.loading) {
        return;
      }

      return updateUserQ({
        variables: {
          userName,
          summary
        },
        refetchQueries: []
      });
    },
    [updateStatus, updateUserQ]
  );
  return useMemo(() => {
    return {
      update,
      updateStatus
    };
  }, [update, updateStatus]);
};
