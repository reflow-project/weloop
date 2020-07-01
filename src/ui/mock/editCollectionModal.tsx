import {
  EditCollectionFormValues,
  Props as EditCollectionPanelProps
} from 'ui/modules/EditCollectionPanel';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetEditCollectionModalProps = (): EditCollectionPanelProps => {
  const formik = useFormik<EditCollectionFormValues>({
    initialValues: {
      icon: 'https://images.unsplash.com/photo-1468487422149-5edc5034604f',
      name: 'Great education-related books',
      summary: 'Here are some fantastic books all educators should read.'
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
