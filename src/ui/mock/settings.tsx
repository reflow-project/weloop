import React from 'react';
import { TEditProfile, Props as EditProfileProps } from 'ui/pages/settings';
import { useFormik } from 'formik';
import { action } from '@storybook/addon-actions';
import Preferences, { EditPreferences } from 'ui/pages/settings/preferences';

export const useGetEditProfileProps = (): EditProfileProps => {
  const formik = useFormik<TEditProfile>({
    initialValues: {
      image:
        'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      displayName: 'Madrid',
      icon: 'https://docs.moodle.org/dev/images_dev/2/2b/estrella.jpg',
      name: 'Estrella',
      summary:
        'Spanish educator teaching at a local ESO (secondary) school, and leading a busy life!'
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });
  const preferencesFormik = useFormik<EditPreferences>({
    initialValues: { moodleWebsite: '' },
    onSubmit: () => {}
  });
  return {
    toggleUpdatePasswordModal: () => {},
    formik,
    sectionPaths: {
      preferences: '/preferences',
      general: '/'
    },
    displayUsername: '@estrella@home.moodle.net',
    isAdmin: false,
    Preferences: (
      <Preferences
        formik={preferencesFormik}
        current={{ label: 'English', value: 'en_GB' }}
        locales={[
          { label: 'English', value: 'en_GB' },
          { label: 'Espanol', value: 'es_ES' }
        ]}
        setLocale={action('setLocale')}
      />
    )
    // FIXME mock with real components
    // Flags: <div>Flags section </div>,
    // Instance: <div>Instance section </div>,
    // Invites: <div>Invites section </div>,
    // ModerationLog: <div>ModerationLog section </div>
  };
};

export const useGetEditProfilePropsAdmin = (): EditProfileProps => {
  const formik = useFormik<TEditProfile>({
    initialValues: {
      image:
        'https://images.unsplash.com/photo-1526583547718-e88dc16de312?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
      displayName: 'Ammaaarah',
      icon: 'https://docs.moodle.org/dev/images_dev/4/4e/ammaarah.jpg',
      name: 'Ammaaarah',
      summary:
        'Programme Co-ordinator working at a South African university with a deep experience of Moodle and other open source software projects. '
    },
    onSubmit: () => {
      action('submit')();
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });
    }
  });

  const preferencesFormik = useFormik<EditPreferences>({
    initialValues: { moodleWebsite: '' },
    onSubmit: () => {}
  });

  return {
    formik,
    toggleUpdatePasswordModal: () => {},
    sectionPaths: {
      preferences: '/preferences',
      general: '/'
    },
    displayUsername: '@ammaarah@home.moodle.net',
    Preferences: (
      <Preferences
        formik={preferencesFormik}
        current={{ label: 'English', value: 'en_GB' }}
        locales={[
          { label: 'English', value: 'en_GB' },
          { label: 'Espanol', value: 'es_ES' }
        ]}
        setLocale={action('setLocale')}
      />
    ),
    isAdmin: true
  };
};
