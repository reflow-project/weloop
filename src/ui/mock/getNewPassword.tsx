import {
  NewPasswordFormValues,
  Props as NewPasswordProps
} from 'ui/pages/createNewPassword';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetNewPasswordProps = (): NewPasswordProps => {
  const formik = useFormik<NewPasswordFormValues>({
    initialValues: {
      password: '',
      passwordConfirm: ''
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik };
};
