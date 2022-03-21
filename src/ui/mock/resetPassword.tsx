import { ResetPasswordFormValues, Props as NewPasswordProps } from 'ui/pages/resetPassword';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetResetPasswordProps = (): NewPasswordProps => {
  const formik = useFormik<ResetPasswordFormValues>({
    initialValues: {
      email: ''
    },
    onSubmit: () => {
      action('submit')();
      return new Promise(resolve => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, isSubmitted: true };
};
