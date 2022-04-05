import { useFormik } from 'formik';
import React, { useCallback, useMemo } from 'react';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';
import { FormikHook } from 'ui/@types/types';
import { UpdatePasswordPanelUI } from 'ui/modules/UpdatePasswordPanel/UpdatePasswordPanelUI';
import { notify } from '../../../fe/lib/graphql/ctx';

export type TUpdatePasswordPanelHOK = {
  isOpen: boolean;
  cancel: () => void;
};
export type TInitialValues = { oldPassword: string; password: string; passwordConfirm: string };
export type TUpdatePasswordPanel = {
  formik: FormikHook<TInitialValues>;
  isOpen: boolean;
  cancel: () => void;
};

const initialValues = { oldPassword: '', password: '', passwordConfirm: '' };
export const UpdatePasswordPanelHOK: React.FC<TUpdatePasswordPanelHOK> = ({ isOpen, cancel }) => {
  const { changePwdRequest } = useAnon();
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Required'),
    password: Yup.string()
      .min(10)
      .max(50)
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirm is required')
  });

  const formik = useFormik<TInitialValues>({
    onSubmit: async ({ oldPassword, password, passwordConfirm }) => {
      const response = await changePwdRequest(oldPassword, password, passwordConfirm);
      const errorMsg = response?.errors?.map(_ => _.message).join('\n');
      errorMsg
        ? notify(errorMsg, { type: 'error' })
        : notify('Password was changed successful!', { type: 'success' }) && onCancel();
    },
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema
  });

  const onCancel = useCallback(() => {
    cancel();
    formik.setValues({ ...initialValues });
  }, [cancel, formik]);

  const updatePasswordPaneProps = useMemo<TUpdatePasswordPanel>(() => {
    return {
      formik,
      isOpen,
      cancel: onCancel
    };
  }, [formik, isOpen, onCancel]);

  return <UpdatePasswordPanelUI {...updatePasswordPaneProps} />;
};
