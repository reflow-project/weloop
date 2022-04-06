import { useMe } from 'fe/session/useMe';
import { useFormik } from 'formik';
import React, { FC, useMemo, useState } from 'react';
import {
  TEditProfile,
  Props as SettingsUIProps,
  Settings as SettingsPageUI
} from 'ui/pages/settings';
import { PreferencesSettingsSection } from './preferences/PreferencesSettingsSection';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { settingsLocation } from 'routes/SettingsPageRoute';
import { UpdatePasswordPanelHOK } from '../../modules/UpdatePasswordPanel/UpdatePasswordPanelHOK';
import { useUpdateUser } from '../user/update/useUpdateUser';

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
  const { update } = useUpdateUser();
  const initialValues = useMemo<TEditProfile>(
    () => ({
      icon: '',
      image: '',
      displayName: profile?.profile?.name || '',
      name: profile?.character?.username || '',
      summary: profile?.profile?.summary || ''
    }),
    [profile]
  );

  const updateProfileFormik = useFormik<TEditProfile>({
    initialValues,
    enableReinitialize: true,
    onSubmit: ({ displayName, summary, icon, image, name }) =>
      update({
        userName: displayName,
        summary,
        icon,
        image,
        name
      })
  });

  const [isOpen, steIsOpen] = useState(false);
  const toggleUpdatePasswordModal = () => steIsOpen(prev => !prev);

  const settingsPageProps = useMemo<SettingsUIProps | null>(() => {
    const props: SettingsUIProps = {
      toggleUpdatePasswordModal,
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

  return (
    settingsPageProps && (
      <>
        <SettingsPageUI {...settingsPageProps} />
        <UpdatePasswordPanelHOK isOpen={isOpen} cancel={toggleUpdatePasswordModal} />
      </>
    )
  );
};
