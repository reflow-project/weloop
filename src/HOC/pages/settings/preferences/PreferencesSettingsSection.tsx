import React, { FC, useCallback, useMemo } from 'react';
import Preferences, { EditPreferences } from 'ui/pages/settings/preferences';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DOMAIN_REGEX } from 'mn-constants';
import { useMe } from 'fe/session/useMe';
import { LocaleContext } from 'context/global/localizationCtx';

const validationSchema = Yup.object<EditPreferences>({
  moodleWebsite: Yup.string().matches(DOMAIN_REGEX)
});

export const PreferencesSettingsSection: FC = () => {
  const { available, current, set } = React.useContext(LocaleContext);

  const { me, updateProfile } = useMe();
  const profile = me?.user;
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

  const localesOptions = useMemo(
    () =>
      available.map(locale => ({
        value: locale.code,
        label: locale.desc
      })),
    [available]
  );

  const currentOption = useMemo(
    () => localesOptions.find(option => option.value === current.code) || localesOptions[0],
    [current.code, localesOptions]
  );

  const setLocale = useCallback(
    (code: string) => {
      const locale = available.find(locale => locale.code === code);
      locale && set(locale);
    },
    [available, set]
  );
  return (
    <Preferences
      formik={formik}
      current={currentOption}
      locales={localesOptions}
      setLocale={setLocale}
    />
  );
};
