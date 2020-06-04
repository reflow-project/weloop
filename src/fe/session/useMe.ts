import {
  withEncodedExtraInfo,
  WithExtraInfo
} from 'fe/lib/extraInfo/extraInfo';
import { mnCtx } from 'fe/lib/graphql/ctx';
import { LMSPrefs } from 'fe/lib/moodleLMS/LMSintegration';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { UpdateProfileInput } from 'graphql/types.generated';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import * as GQL from './me.generated';

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
  ] = GQL.useMeUpdateMyProfileMutation();

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
  }, [logoutStatus.loading, me, logoutMut, push]);

  const updateProfile = useCallback(
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
  }, [me, isAdmin, logout, loading, updateProfile]);
};
