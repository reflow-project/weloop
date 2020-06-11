import { useFormik } from 'formik';
import React, { FC } from 'react';
import ResetPasswordRequestPage, {
  ResetPasswordFormValues
} from 'ui/pages/resetPassword';
import * as Yup from 'yup';
import { useAnon } from 'fe/session/useAnon';

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
export const ResetPasswordPageHOC: FC<Props> = () => {
  const { resetPwdReq } = useAnon();
  const formik = useFormik<ResetPasswordFormValues>({
    onSubmit: ({ email }) => resetPwdReq(email),
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
