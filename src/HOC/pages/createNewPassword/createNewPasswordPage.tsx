import { useFormik } from 'formik';
import React, { FC } from 'react';
import CreateNewPassword, { NewPasswordFormValues } from 'ui/pages/createNewPassword';
import * as Yup from 'yup';

export const validationSchema: Yup.ObjectSchema<NewPasswordFormValues> = Yup.object<
  NewPasswordFormValues
>({
  password: Yup.string()
    .max(50)
    .required(),
  passwordConfirm: Yup.string()
    .max(50)
    .required()
});
export interface Props {}
export const CreateNewPasswordPageHOC: FC<Props> = () => {
  const formik = useFormik<NewPasswordFormValues>({
    initialValues: {
      password: '',
      passwordConfirm: ''
    },
    enableReinitialize: true,
    onSubmit: vals => {},
    validationSchema
  });
  return <CreateNewPassword formik={formik} />;
};
