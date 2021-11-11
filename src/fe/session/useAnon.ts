import { DataProxy } from 'apollo-cache';
import Maybe from 'graphql/tsutils/Maybe';
import { RegistrationInput } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useApolloClient } from 'react-apollo';
import * as GQL from './anon.generated';
import { MeDocument, MeQuery, UseMeDataFragment } from './me.generated';
import { mnCtx } from 'fe/lib/graphql/ctx';

export const useAnon = () => {
  const client = useApolloClient();
  const [loginMut, loginStatus] = GQL.useAnonLoginMutation();
  const [resetPwdMut, resetPwdStatus] = GQL.useAnonResetPasswordMutation();
  const [confirmEmailMut, confirmEmailStatus] = GQL.useAnonConfirmEmailMutation();
  const [signUpMut, signUpStatus] = GQL.useAnonSignUpMutation();
  //  const [usernameAvailableQ, usernameAvailableStatus] = GQL.useAnonUsernameAvailableLazyQuery();
  const [resetPwdReqMut, resetPwdReqStatus] = GQL.useAnonResetPasswordRequestMutation();
  return useMemo(() => {
    const resetPwd = ({ password, token }: { token: string; password: string }) => {
      if (resetPwdStatus.loading) {
        return;
      }
      return resetPwdMut({
        variables: { password, token },
        update: (proxy, resp) => updateMe(proxy, resp.data?.resetPassword?.me)
      });
    };

    const confirmEmail = (token: string) => {
      if (confirmEmailStatus.loading) {
        return;
      }
      return confirmEmailMut({
        variables: { token },
        update: (proxy, resp) => updateMe(proxy, resp.data?.confirmEmail?.me)
      });
    };

    const signUp = (registration: RegistrationInput) => {
      if (signUpStatus.loading) {
        return;
      }
      return signUpMut({
        variables: { registration },
        update: (proxy, resp) => updateMe(proxy, resp.data?.createUser)
      });
    };

    const resetPwdReq = (email: string) => {
      if (resetPwdReqStatus.loading) {
        return;
      }
      return resetPwdReqMut({
        variables: { email }
      });
    };

    const login = (email: string, password: string) => {
      if (loginStatus.loading) {
        return;
      }
      return loginMut({
        variables: { email, password },
        context: mnCtx({ ctx: 'Login' }),
        update: (proxy, resp) => updateMe(proxy, resp.data?.createSession?.me)
      });
    };
    const usernameAvailable = (username: string) => {
      return client
        .query<GQL.AnonUsernameAvailableQuery, GQL.AnonUsernameAvailableQueryVariables>({
          query: GQL.AnonUsernameAvailableDocument,
          variables: { username }
        })
        .then(_ => _.data.usernameAvailable);
    };

    return {
      login,
      loginStatus,

      resetPwdReq,
      resetPwdReqStatus,

      confirmEmail,
      confirmEmailStatus,

      signUp,
      signUpStatus,

      resetPwd,
      resetPwdStatus,

      usernameAvailable
    };
  }, [
    signUpStatus,
    signUpMut,
    confirmEmailMut,
    confirmEmailStatus,
    loginMut,
    loginStatus,
    resetPwdMut,
    resetPwdStatus,
    resetPwdReqMut,
    resetPwdReqStatus,
    client
  ]);
};

const updateMe = (proxy: DataProxy, me: Maybe<UseMeDataFragment>) => {
  proxy.writeQuery<MeQuery>({
    query: MeDocument,
    data: {
      __typename: 'RootQueryType',
      me: me
        ? {
            // @ts-ignore
            __typename: 'Me' as 'Me',
            ...me,
            user: {
              // @ts-ignore
              __typename: 'User' as 'User',
              ...me.user
            }
          }
        : null
    }
  });
};
