import { useMe } from 'fe/session/useMe';
import { useFormik } from 'formik';
import React, { FC, useMemo } from 'react';
import {
  EditProfile,
  Props as SettingsUIProps,
  Settings as SettingsPageUI
} from 'ui/pages/settings';
import { PreferencesSettingsSection } from './preferences/PreferencesSettingsSection';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { settingsLocation } from 'routes/SettingsPageRoute';

export enum SettingsPageTab {
  Preferences,
  Invites,
  Instance,
  Flags,
  ModerationLogs,
  General
}
export interface SettingsPage {
  tab?: SettingsPageTab;
  basePath?: string;
}

const settingsPreferencesPageTitle = t`Settings - Preferences`;
const settingsGeneralPageTitle = t`Settings - General`;

export const SettingsPage: FC<SettingsPage> = ({ basePath, tab }) => {
  const settingsPageTitle =
    tab === SettingsPageTab.Preferences ? settingsPreferencesPageTitle : settingsGeneralPageTitle;
  usePageTitle(settingsPageTitle);

  const { me } = useMe();
  const profile = me?.user;
  console.log({ profile });
  const initialValues = useMemo<EditProfile>(
    () => ({
      icon: '',
      image: '',
      location: '',
      name: '',
      website: '',
      summary: ''
    }),
    []
  );

  const updateProfileFormik = useFormik<EditProfile>({
    initialValues,
    enableReinitialize: true,
    onSubmit: ({ icon, image, ...profile }) => console.log({ icon, image, profile })
  });

  const settingsPageProps = useMemo<SettingsUIProps | null>(() => {
    const props: SettingsUIProps = {
      sectionPaths: {
        preferences: settingsLocation.getPath({ tab: 'preferences' }, undefined),
        general: settingsLocation.getPath({ tab: undefined }, undefined)
      },
      displayUsername: '',
      isAdmin: false,
      formik: updateProfileFormik,
      Preferences: <PreferencesSettingsSection />
    };
    return props;
  }, [updateProfileFormik]);

  return settingsPageProps && <SettingsPageUI {...settingsPageProps} />;
};
