import { Flag } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import { AllFlagsQueryRefetch } from '../all/useAllFlags.generated';
import {
  useDeactivateFlaggedUserMutation,
  useDeleteFlagContextMutation,
  useDeleteFlagMutation,
  useFlagPreviewDataQuery
} from './useFlagPreview.generated';

export const useFlagPreview = (flagId: Flag['id']) => {
  const flagQ = useFlagPreviewDataQuery({ variables: { flagId } });
  const [deleteFlagContextMut, deleteFlagContextStatus] = useDeleteFlagContextMutation();
  const [deleteFlagMut, deleteFlagStatus] = useDeleteFlagMutation();
  const [
    deactivateFlaggedUserMut,
    deactivateFlaggedUserStatus
  ] = useDeactivateFlaggedUserMutation();

  const flag = flagQ.data?.flag;
  const deactivateFlaggedUser = useCallOrNotifyMustLogin(async () => {
    if (!flag || flag.context.__typename !== 'User' || deactivateFlaggedUserStatus.loading) {
      return;
    }

    return deactivateFlaggedUserMut({
      variables: { userId: flag.context.userId }
    });
  }, [flag]);

  const deleteFlagContext = useCallOrNotifyMustLogin(async () => {
    if (
      !flag ||
      flag.context.__typename === 'User' ||
      deleteFlagStatus.loading ||
      deleteFlagContextStatus.loading
    ) {
      return;
    }

    return Promise.all([
      deleteFlagMut({
        variables: { flagId: flag.id },
        refetchQueries: [AllFlagsQueryRefetch({})]
      }),
      deleteFlagContextMut({ variables: { contextId: flag.id } })
    ]);
  }, [flag]);

  const ignoreFlag = useCallOrNotifyMustLogin(async () => {
    if (!flag || deleteFlagStatus.loading) {
      return;
    }

    return deleteFlagMut({
      variables: { flagId: flag.id },
      refetchQueries: [AllFlagsQueryRefetch({})]
    });
  }, [flag]);

  return useMemo(() => {
    return {
      flag,
      deactivateFlaggedUser,
      deleteFlagContext,
      ignoreFlag,
      deleteFlagContextStatus,
      deactivateFlaggedUserStatus,
      ignoreFlagStatus: deleteFlagStatus
    };
  }, [
    flag,
    deactivateFlaggedUser,
    deleteFlagContext,
    ignoreFlag,
    deleteFlagContextStatus,
    deactivateFlaggedUserStatus,
    deleteFlagStatus
  ]);
};
