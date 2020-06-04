import { useFormik } from 'formik';
import { Props as ConfirmationModalProps } from 'ui/modules/ConfirmationModal';
import { action } from '@storybook/addon-actions';

export const useGetConfirmationModalProps = (): ConfirmationModalProps => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });

  return {
    done: action('cancel'),
    modalTitle: 'Remove email from whitelist',
    modalDescription: `Are you sure you want to remove test@moodle.net from the whitelisted emails`,
    modalAction: 'Delete',
    formik
  };
};
