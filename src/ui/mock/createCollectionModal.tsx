import {
  BasicCreateCollectionFormValues,
  Props as CreateCollectionProps
} from 'ui/modules/CreateCollectionPanel';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';

export const useGetCreateCollectionModalProps = (): CreateCollectionProps => {
  const formik = useFormik<BasicCreateCollectionFormValues>({
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
