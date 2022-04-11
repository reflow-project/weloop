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
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';
import { useAnon } from '../../../fe/session/useAnon';

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
  const { update } = useUpdateUser();
  const { logout } = useAnon();
  const notifyNotLogged = useNotifyMustLogin();
  notifyNotLogged() && logout();

  let userData = useMemo(() => me?.users && me?.users[0], [me]);
  const initialValues = useMemo<TEditProfile>(
    () => ({
      icon: userData?.profile?.icon || '',
      image: userData?.profile?.image || '',
      displayName: userData?.profile?.name || '',
      name: userData?.character?.username || '',
      summary: userData?.profile?.summary || ''
    }),
    [userData]
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
      }).then(resp => {
        userData = resp?.data?.updateUser?.user;
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
      Preferences: <PreferencesSettingsSection />,
      userProfile: userData?.profile
    };
    return props;
  }, [updateProfileFormik, userData]);

  return (
    settingsPageProps && (
      <>
        <SettingsPageUI {...settingsPageProps} />
        <UpdatePasswordPanelHOK isOpen={isOpen} cancel={toggleUpdatePasswordModal} />
      </>
    )
  );
};
