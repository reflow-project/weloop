import { BasicCreateFlagFormValues, Props as FlagModalProps } from 'ui/modules/FlagModal';
import { useToggleFormik } from './formik';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';

export const useGetFlagModalProps = (): FlagModalProps => {
  const flagFormik = useFormik<BasicCreateFlagFormValues>({
    initialValues: {
      reason: ''
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const unflagFormik = useToggleFormik();
  return {
    flagFormik,
    unflagFormik,
    isFlagged: false,
    cancel: action('cancel')
  };
};
