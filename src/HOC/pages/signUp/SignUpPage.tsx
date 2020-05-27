import { useFormik } from 'formik';
import React, { FC, useMemo } from 'react';
import SignUpPage, { SignUpFormValues, Props } from 'ui/pages/signUp';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';

const initialValues: SignUpFormValues = {
  name: '',
  email: '',
  password: '',
  username: '',
  passwordConfirm: '',
  terms: false
};
export interface SignUpPageHOC {}

export const SignUpPageHOC: FC<SignUpPageHOC> = () => {
  const { signUp, signUpStatus, usernameAvailable } = useAnon();
  const validationSchema: Yup.ObjectSchema<SignUpFormValues> = Yup.object<
    SignUpFormValues
  >({
    username: Yup.string()
      .min(3)
      .max(16)
      .required()
      .test(
        'checkDuplUsername',
        'username already exists',
        username => username && usernameAvailable(username)
      ),
    email: Yup.string()
      .max(50)
      .required(),
    name: Yup.string()
      .max(50)
      .required(),
    password: Yup.string()
      .min(6)
      .max(50)
      .required(),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required(),
    terms: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions')
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
        name: regInput.name,
        password: regInput.password,
        preferredUsername: regInput.username,
        wantsEmailDigest: false,
        wantsNotifications: false
      })
  });

  const props = useMemo<Props>(
    () =>
      signUpStatus.called && signUpStatus.data?.createUser?.user.name
        ? {
            formik,
            registeredUsername: signUpStatus.data.createUser.user.name,
            registeredEmail: signUpStatus.data.createUser.email
          }
        : {
            formik
          },
    [signUpStatus, formik]
  );

  return <SignUpPage {...props} />;
};
