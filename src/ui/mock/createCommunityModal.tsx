import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import {
  CreateCommunityFormValues,
  Props as CreateCommunityProps
} from 'ui/modules/CreateCommunityPanel';

export const useGetCreateCommunityModalProps = (): CreateCommunityProps => {
  const formik = useFormik<CreateCommunityFormValues>({
    initialValues: {
      icon: '',
      name: '',
      summary: ''
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, cancel: action('cancel') };
};
