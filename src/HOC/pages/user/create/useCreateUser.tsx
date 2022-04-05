import { useMemo } from 'react';
import { useCreateUserMutation } from '../UserPage.generated';
import { useCallOrNotifyMustLogin } from '../../../lib/notifyMustLogin';
export interface AddUser {
  profileName: string;
  userName?: string;
  summary?: string;
}
export const useCreateUser = () => {
  const [createUserQ, createStatus] = useCreateUserMutation();
  const create = useCallOrNotifyMustLogin(
    async ({ profileName, userName, summary }: AddUser) => {
      if (createStatus.loading) {
        return;
      }

      return createUserQ({
        variables: {
          profileName,
          userName,
          summary
        },
        refetchQueries: []
      });
    },
    [createUserQ, createStatus]
  );
  return useMemo(() => {
    return {
      create,
      createStatus
    };
  }, [create, createStatus]);
};
