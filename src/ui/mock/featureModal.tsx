import { Props as FeaturedModalProps } from 'ui/modules/FeaturedModal';
import { action } from '@storybook/addon-actions';
import { useToggleFormik } from './formik';

export const useGetFeaturedModalProps = (): FeaturedModalProps => {
  const formik = useToggleFormik();
  return {
    formik,
    isFeatured: false,
    itemName: 'Spaced repetition',
    itemType: 'community',
    cancel: action('cancel')
  };
};
