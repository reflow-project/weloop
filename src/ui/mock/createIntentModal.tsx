import {
  CreateIntentFormValues,
  TCreateIntentPanel,
  SelectOption
} from 'ui/modules/CreateIntentPanel';
import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';

const communities: Array<SelectOption> = [{ label: 'Community name', value: 'community id' }];

export const useGetCreateIntentModalProps = (): TCreateIntentPanel => {
  const formik = useFormik<CreateIntentFormValues>({
    initialValues: {
      name: '',
      communityId: '',
      note: ''
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  return { formik, cancel: action('cancel'), communities };
};
