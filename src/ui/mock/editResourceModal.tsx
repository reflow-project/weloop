import { EditResourceFormValues, Props as EditResourceProps } from 'ui/modules/EditResourcePanel';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';

export const useGetEditResourceModalProps = (): EditResourceProps => {
  const formik = useFormik<EditResourceFormValues>({
    initialValues: {
      image:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388528253l/79681.jpg',
      url: 'https://www.goodreads.com/book/show/79681.Teaching_as_a_Subversive_Activity',
      name: 'Teaching as a Subversive Activity',
      summary:
        'A no-holds-barred assault on outdated teaching methods - with dramatic & practical proposals on how education can be made relevant to todays world.'
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
