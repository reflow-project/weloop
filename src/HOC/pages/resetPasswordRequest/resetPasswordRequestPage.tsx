import { useFormik } from 'formik';
import React, { FC } from 'react';
import ResetPasswordRequestPage, { ResetPasswordFormValues } from 'ui/pages/resetPassword';
import * as Yup from 'yup';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';

export const validationSchema: Yup.ObjectSchema<ResetPasswordFormValues> = Yup.object<
  ResetPasswordFormValues
>({
  email: Yup.string()
    .max(50)
    .required()
});
const initialValues: ResetPasswordFormValues = {
  email: ''
};
export interface Props {}

const resetPasswordPageTitle = t`Reset Password`;

export const ResetPasswordPageHOC: FC<Props> = () => {
  usePageTitle(resetPasswordPageTitle);
  // const { resetPwdReq } = useAnon();
  const formik = useFormik<ResetPasswordFormValues>({
    onSubmit: ({ email }) => console.log(email),
    initialValues,
    validationSchema
  });
  return (
    <ResetPasswordRequestPage
      formik={formik}
      isSubmitted={formik.submitCount > 0 ? true : false} // https://github.com/jaredpalmer/formik/issues/213#issuecomment-619593592 // Double-Check if correct
    />
  );
};
