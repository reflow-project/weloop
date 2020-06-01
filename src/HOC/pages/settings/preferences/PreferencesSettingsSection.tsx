import React, { FC } from 'react';
import Preferences, { EditPreferences } from 'ui/pages/settings/preferences';
import { useFormik } from 'formik';
import { useProfile } from 'fe/user/profile/useProfile';
import * as Yup from 'yup';
import { DOMAIN_REGEX } from 'mn-constants';

const validationSchema = Yup.object<EditPreferences>({
  moodleWebsite: Yup.string().matches(DOMAIN_REGEX)
});

export const PreferencesSettingsSection: FC = () => {
  const { profile, updateProfile } = useProfile();
  const formik = useFormik<EditPreferences>({
    enableReinitialize: true,
    initialValues: { moodleWebsite: profile?.extraInfo?.LMS?.site || '' },
    validationSchema,
    onSubmit: ({ moodleWebsite }) => {
      return updateProfile({
        profile: {
          extraInfo: {
            LMS: {
              site: moodleWebsite
            }
          }
        }
      });
    }
  });
  return <Preferences formik={formik} />;
};
