import { action } from '@storybook/addon-actions';
import { useFormik } from 'formik';
import { Status } from 'ui/modules/ActivityPreview';
import { getActor } from './actor';
import { ReactElement } from 'react';

export const useGetActions = () => ({
  flag: action('flag item'),
  isDropdownOpen: false,
  toggleDropdown: action('toggleDropdown'),
  like: {
    totalLikes: 3,
    toggleLikeFormik: useFormik<{}>({
      initialValues: {},
      onSubmit: vals => {
        action('submitting...')();
        return new Promise(resolve =>
          setTimeout(() => {
            action('submitted...')();
            resolve();
          }, 2000)
        );
      }
    }),
    iLikeIt: true
  },
  reply: {
    replyFormik: useFormik<{ replyMessage: string }>({
      initialValues: { replyMessage: '' },
      onSubmit: vals => {
        action(`submitting: ${vals.replyMessage}`)();
        return new Promise(resolve =>
          setTimeout(() => {
            action(`submitted: ${vals.replyMessage}`)();
            resolve();
          }, 2000)
        );
      }
    })
  }
});

export function activityPreviewProps(event: string, preview: ReactElement): any {
  return {
    communityLink: 'communityLink',
    communityName: 'communityName',
    event: event,
    preview: preview,
    status: Status.Loaded,
    actor: getActor(),
    createdAt: '2018-11-11'
  };
}
