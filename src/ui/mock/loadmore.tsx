import { Props as LoadMoreProps } from 'ui/modules/Loadmore';
import { useToggleFormik } from './formik';

export const useGetLoadMoreProps = (): LoadMoreProps => {
  return {
    LoadMoreFormik: useToggleFormik()
  };
};
