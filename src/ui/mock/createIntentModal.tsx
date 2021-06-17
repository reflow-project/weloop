import {
  CreateIntentFormValues,
  TCreateIntentPanel,
  SelectOption
} from 'ui/modules/CreateIntentPanel';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';

const communities: Array<SelectOption> = [{ label: 'Community name', id: 'community id' }];

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
  return { formik, cancel: action('cancel'), communities };
};
