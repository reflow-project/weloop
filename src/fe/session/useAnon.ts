import { DataProxy } from 'apollo-cache';
import { useMemo } from 'react';
import * as GQL from './anon.generated';
import { MeDocument, MeQuery, MeQueryRefetch } from './me.generated';
import { mnCtx } from 'fe/lib/graphql/ctx';
import { useHistory } from 'react-router';

const hostname = process.env.REACT_APP_FRONTEND_HOSTNAME;

export const useAnon = () => {
  const history = useHistory();
  const updateMe = (proxy: DataProxy, me: any) => {
    proxy.writeQuery<MeQuery>({
      query: MeDocument,
      data: {
        __typename: 'RootQueryType',
        me: me
          ? {
              __typename: 'Me' as 'Me',
              ...me,
              token: me.token,
              user: {
                __typename: 'User' as 'User',
                ...me.user
              }
            }
          : null
      }
    });
  };
  const url = process.env.REACT_APP_FRONTEND_HOSTNAME || '';
  const [loginMut, loginStatus] = GQL.useAnonLoginMutation();
  const [confirmEmailMut, confirmEmailStatus] = GQL.useConfirmEmailMutation();
  const [requestConfirmEmailMut, requestConfirmEmailStatus] = GQL.useRequestConfirmEmailMutation();
  const [resetPwd, resetPwdStatus] = GQL.useResetPwdMutation();
  const [changePwd, changePwdStatus] = GQL.useChangePasswordMutation();
  const [signUpMut, signUpStatus] = GQL.useAnonSignUpMutation();
  const [updateLostPassword, updateLostPasswordStatus] = GQL.useUpdateLostPasswordMutation();

  return useMemo(() => {
    const confirmEmail = (token: string) => {
      if (confirmEmailStatus.loading) {
        return;
      }
      if (confirmEmailStatus.called) {
        return;
      }

      return confirmEmailMut({
        variables: { token },
        update: (proxy, resp) => updateMe(proxy, resp.data)
      });
    };

    const signUp = (registration: { email: string; password: string }) => {
      if (signUpStatus.loading) {
        return;
      }

      return signUpMut({
        variables: {
          email: registration.email,
          password: registration.password,
          url: `${hostname}/confirm-email/:token`
        },
        update: (proxy, resp) => updateMe(proxy, resp.data)
      });
    };

    const logout = () => {
      localStorage.clear();
      history.push('/login');
    };

    const login = (email: string, password: string) => {
      if (loginStatus.loading) {
        return;
      }

      return loginMut({
        variables: { email, password },
        context: mnCtx({ ctx: 'Login' }),
        refetchQueries: [MeQueryRefetch({})],
        update: (proxy, resp) => {
          return updateMe(proxy, resp.data?.login);
        }
      });
    };

    const changePwdRequest = (
      oldPassword: string,
      password: string,
      passwordConfirmation: string
    ) => {
      if (changePwdStatus.loading) {
        return;
      }
      return changePwd({
        variables: { oldPassword, password, passwordConfirmation }
      });
    };

    const updatePassword = (token: string, password: string, passwordConfirmation: string) => {
      if (updateLostPasswordStatus.loading) {
        return;
      }
      return updateLostPassword({
        variables: { token, password, passwordConfirmation }
      });
    };

    const resetPwdRequest = (email: string) => {
      if (resetPwdStatus.loading) {
        return;
      }
      return resetPwd({
        variables: { email, url: `${url}/reset/:token` }
      });
    };

    return {
      login,
      loginStatus,
      logout,

      confirmEmail,
      confirmEmailStatus,

      requestConfirmEmailMut,
      requestConfirmEmailStatus,
      resetPwdRequest,
      resetPwdStatus,
      updatePassword,
      updateLostPasswordStatus,
      changePwdRequest,
      changePwdStatus,
      signUp,
      signUpStatus
    };
  }, [
    url,
    history,
    signUpStatus,
    signUpMut,
    confirmEmailMut,
    confirmEmailStatus,
    requestConfirmEmailMut,
    requestConfirmEmailStatus,
    updateLostPassword,
    updateLostPasswordStatus,
    resetPwd,
    resetPwdStatus,
    changePwd,
    changePwdStatus,
    loginMut,
    loginStatus
  ]);
};
