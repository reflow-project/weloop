import { Props } from 'ui/modules/ShareLink';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import { ShareResource } from 'ui/modules/ShareLink/fetched';

export const useGetShareLinkProps = (): Props => {
  return {
    FetchLinkFormik: useFormik<{ fetchUrl: string }>({
      initialValues: {
        fetchUrl: ''
      },
      onSubmit: vals => {
        action('submitting...')();
        return new Promise(resolve =>
          setTimeout(() => {
            action('submitted...')();
            // @ts-ignore
            resolve();
          }, 2000)
        );
      }
    }),
    isFetched: true,
    cancelFetched: action('submitting...'),
    formik: useFormik<ShareResource>({
      initialValues: {
        name: '',
        icon: '',
        summary: ''
      },
      onSubmit: vals => {
        action('submitting...')();
        return new Promise(resolve =>
          setTimeout(() => {
            action('submitted...')();
            // @ts-ignore
            resolve();
          }, 2000)
        );
      }
    })
  };
};
