import { LoginFormValues, Props as LoginProps } from 'ui/pages/login';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetLoginProps = (): LoginProps => {
  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: ''
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
