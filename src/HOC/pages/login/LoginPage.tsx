import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import Login, { LoginFormValues } from 'ui/pages/login';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export const validationSchema: Yup.ObjectSchema<LoginFormValues> = Yup.object<LoginFormValues>({
  email: Yup.string()
    .max(50)
    .required(),
  password: Yup.string()
    .max(50)
    .required()
});
export interface Props {}

const loginPageTitle = t`Login`;

export const LoginPageHOC: FC<Props> = () => {
  usePageTitle(loginPageTitle);
  const history = useHistory();
  const { login, loginStatus } = useAnon();
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    enableReinitialize: true,
    onSubmit: ({ email, password }) =>
      login(email, password)?.then(
        resp =>
          resp.data?.login?.currentUser?.id &&
          history.push(`/user/${resp.data?.login?.currentUser?.id}`)
      ),
    validationSchema
  });

  useEffect(() => {
    if (loginStatus.error?.message) {
      toast.error(loginStatus.error.graphQLErrors[0].message);
    }
  }, [loginStatus.error]);
  return <Login formik={formik} />;
};
