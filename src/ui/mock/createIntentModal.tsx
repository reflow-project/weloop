import { CreateIntentFormValues, TCreateIntentPanel } from 'ui/modules/CreateIntentPanel';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';
export const useGetCreateIntentModalProps = (): TCreateIntentPanel => {
  const formik = useFormik<CreateIntentFormValues>({
    initialValues: {
      name: '',
      communityId: '',
      note: '',
      hasUnit: '',
      hasNumericalValue: 0
    },
    onSubmit: () => {
      action('submit')();
      return new Promise(resolve => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, cancel: action('cancel') };
};
