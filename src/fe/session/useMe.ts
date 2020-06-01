import { mnCtx } from 'fe/lib/graphql/ctx';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import * as GQL from './me.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { UpdateProfileInput } from 'graphql/types.generated';
import { LMSPrefs } from 'fe/lib/moodleLMS/LMSintegration';
import {
  withEncodedExtraInfo,
  WithExtraInfo
} from 'fe/lib/extraInfo/extraInfo';

type UserProfileExtraInfo = {
  LMS?: LMSPrefs;
};

export type UpdateProfileInputWithEI = WithExtraInfo<
  UpdateProfileInput,
  UserProfileExtraInfo
>;

export interface UpdateProfile {
  profile: UpdateProfileInputWithEI;
  icon?: Maybe<File | string>;
  image?: Maybe<File | string>;
}
export const useMe = () => {
  const meQ = GQL.useMeQuery({ context: mnCtx({ noShowError: true }) });
  const [logoutMut, logoutStatus] = GQL.useMeLogoutMutation();
  const [
    updateProfileMutation,
    updateProfileMutationStatus
  ] = GQL.useMeLogoutMutation();

  const { push } = useHistory();
  const me = meQ.data?.me;
  const loading = meQ.loading;
  const isAdmin = !!me?.isInstanceAdmin;
  const logout = useCallback(async () => {
    if (logoutStatus.loading || !me?.user) {
      return;
    }
    return logoutMut({
      update: proxy => {
        proxy.writeQuery<GQL.MeQuery>({
          data: {
            __typename: 'RootQueryType',
            me: null
          },
          query: GQL.MeDocument
        });
      }
    }).finally(() => push('/login'));
  }, [me, logoutStatus.loading]);

  const updateProfile = useCallOrNotifyMustLogin(
    async ({ icon, image, profile }: UpdateProfile) => {
      if (updateProfileMutationStatus.loading || !me?.user) {
        return;
      }
      return updateProfileMutation({
        variables: {
          profile: withEncodedExtraInfo(profile, me.user),
          icon: getMaybeUploadInput(icon, me.user.icon?.url),
          image: getMaybeUploadInput(image, me.user.image?.url)
        },
        context: mnCtx({ ctx: 'Profile update' })
      });
    },
    [updateProfileMutation, me, updateProfileMutationStatus]
  );

  return useMemo(() => {
    return {
      me,
      isAdmin,
      logout,
      loading,
      updateProfile
    };
  }, [me, loading, isAdmin, logout, updateProfile]);
};
