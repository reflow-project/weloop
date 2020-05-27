import {
  withEncodedExtraInfo,
  WithExtraInfo
} from 'fe/lib/extraInfo/extraInfo';
import { mnCtx } from 'fe/lib/graphql/ctx';
import { LMSPrefs } from 'fe/lib/moodleLMS/LMSintegration';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { UpdateProfileInput } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import {
  useMyProfileQuery,
  useUpdateMyProfileMutation
} from './useProfile.generated';

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
export const useProfile = () => {
  const profileQ = useMyProfileQuery({ context: mnCtx({ noShowError: true }) });
  const [updateProfileMutation] = useUpdateMyProfileMutation();

  const updateProfile = useCallOrNotifyMustLogin(
    ({ icon, image, profile }: UpdateProfile) =>
      updateProfileMutation({
        variables: {
          profile: withEncodedExtraInfo(profile, profileQ.data?.me?.user),
          icon: getMaybeUploadInput(icon, profileQ.data?.me?.user.icon?.url),
          image: getMaybeUploadInput(image, profileQ.data?.me?.user.image?.url)
        },
        context: mnCtx({ ctx: 'Profile update' })
      }),
    [updateProfileMutation, profileQ]
  );

  return useMemo(() => {
    const user = profileQ.data?.me?.user;
    const profile = user as Maybe<
      WithExtraInfo<typeof user, UserProfileExtraInfo>
    >;
    const loading = profileQ.loading;

    return {
      loading,
      profile,
      updateProfile
    };
  }, [updateProfile, profileQ]);
};
