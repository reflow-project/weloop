import React from 'react';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import { FlagModal } from 'ui/modules/FlagModal';
import { Props, Status } from 'ui/modules/ActivityPreview';
import { getActor } from './actor';

export const useGetActions = () => ({
  FlagModal: () => {
    const flagFormik = useFormik<{ reason: string }>({
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
    const unflagFormik = useFormik({
      initialValues: {},
      onSubmit: () => {
        action('submit')();
        return new Promise((resolve, reject) => {
          setTimeout(resolve, 3000);
        });
      }
    });
    return (
      <FlagModal
        {...{
          cancel: action('cancel'),
          flagFormik,
          isFlagged: false,
          unflagFormik
        }}
      />
    );
  },
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

export function activityPreviewProps(event, preview): Props {
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
