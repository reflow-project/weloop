import { useFormik } from 'formik';
import React, { FC, useEffect, useMemo } from 'react';
import SignUpPage, { SignUpFormValues, Props } from 'ui/pages/signUp';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { toast } from 'react-toastify';

const initialValues: SignUpFormValues = {
  email: '',
  password: '',
  passwordConfirm: ''
};
export interface SignUpPageHOC {}
const signUpPageTitle = t`Sign Up`;

export const SignUpPageHOC: FC<SignUpPageHOC> = () => {
  usePageTitle(signUpPageTitle);
  const { signUp, signUpStatus } = useAnon();
  const validationSchema: Yup.ObjectSchema<SignUpFormValues> = Yup.object<SignUpFormValues>({
    email: Yup.string()
      .max(50)
      .required(),
    password: Yup.string()
      .min(10)
      .max(50)
      .required(),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required()
  });

  const formik = useFormik<SignUpFormValues>({
    initialValues,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: regInput =>
      signUp({
        email: regInput.email,
        password: regInput.password
      })
  });

  useEffect(() => {
    if (signUpStatus.error?.graphQLErrors.length) {
      toast.error(signUpStatus.error?.graphQLErrors[0].message);
    }
  }, [signUpStatus.error]);

  const props = useMemo<Props>(
    () =>
      signUpStatus.called && signUpStatus.data?.signup
        ? {
            formik,
            registeredUserID: signUpStatus.data?.signup,
            registeredEmail: formik.values.email
          }
        : {
            formik
          },
    [formik, signUpStatus.called, signUpStatus.data]
  );

  return <SignUpPage {...props} />;
};
