import {
  EditCommunityFormValues,
  Props as EditCommunityProps
} from 'ui/modules/EditCommunityPanel';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetEditCommunityModalProps = (): EditCommunityProps => {
  const formik = useFormik<EditCommunityFormValues>({
    initialValues: {
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/6/63/Open_Badges_-_Logo.png',
      name: 'Badge basics',
      summary: 'What are Open Badges and how can they be used?'
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
