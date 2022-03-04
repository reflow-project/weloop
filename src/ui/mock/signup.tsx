import { Props as SignUpProps, SignUpFormValues } from 'ui/pages/signUp';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetSignUpProps = (): SignUpProps => {
  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      email: 'mary@moodlers.org',
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
