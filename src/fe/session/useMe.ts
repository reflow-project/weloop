import { mnCtx } from 'fe/lib/graphql/ctx';
import { useMemo } from 'react';
import * as GQL from './me.generated';
import { useApolloClient } from 'react-apollo';

export const useMe = () => {
  const client = useApolloClient();
  const meQ = GQL.useMeQuery({ context: mnCtx({ noShowError: true }) });

  console.log(client.link);
  // const [logoutMut, logoutStatus] = GQL.useMeLogoutMutation();
  // const [updateProfileMutation, updateProfileMutationStatus] = GQL.useMeUpdateMyProfileMutation();

  // const logout = useCallback(async () => {
  //   if (logoutStatus.loading || !me?.user) {
  //     return;
  //   }
  //   return logoutMut({
  //     update: proxy => {
  //       proxy.writeQuery<GQL.MeQuery>({
  //         data: {
  //           __typename: 'RootQueryType',
  //           me: null
  //         },
  //         query: GQL.MeDocument
  //       });
  //     }
  //   }).finally(() => push('/login'));
  // }, [logoutStatus.loading, me, logoutMut, push]);

  // const updateProfile = useCallback(
  //   async ({ icon, image, profile }: UpdateProfile) => {
  //     if (updateProfileMutationStatus.loading || !me?.user) {
  //       return;
  //     }
  //     return updateProfileMutation({
  //       variables: {
  //         profile: withEncodedExtraInfo(profile, me.user),
  //         icon: getMaybeUploadInput(icon, me.user.icon?.url),
  //         image: getMaybeUploadInput(image, me.user.image?.url)
  //       },
  //       context: mnCtx({ ctx: 'Profile update' })
  //     });
  //   },
  //   [updateProfileMutation, me, updateProfileMutationStatus]
  // );
  return useMemo(() => {
    const me = meQ.data?.me;
    const loading = meQ.loading;
    return {
      me,
      // logout,
      loading
      // updateProfile
    };
  }, [meQ]);
};
