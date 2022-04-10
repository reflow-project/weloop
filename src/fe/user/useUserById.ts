import * as GQL from './useUser.generated';
import { useMe } from 'fe/session/useMe';
import { useMemo } from 'react';

export const useUserById = (userId: string) => {
  const userQ = GQL.useUserDataBiIdQuery({ variables: { id: userId } });
  const { me } = useMe();

  const user = userQ.data?.user;
  const isMe = useMemo(() => !!(me?.users && me?.users[0] && me?.users[0].id === user?.id), [
    me,
    user
  ]);

  return {
    isMe,
    user
  };
};
