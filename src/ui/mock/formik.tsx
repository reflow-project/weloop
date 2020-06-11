import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export function useToggleFormik() {
  return useFormik<{}>({
    initialValues: {},
    onSubmit: vals => {
      action('submitting...')();
      return new Promise(resolve =>
        setTimeout(() => {
          action('submitted...')();
          resolve();
        }, 2000)
      );
    }
  });
}
