import { useMe } from 'fe/session/useMe';
import { useFormik } from 'formik';
import React, { FC, useMemo } from 'react';
import {
  EditProfile,
  Props as SettingsUIProps,
  Settings as SettingsPageUI
} from 'ui/pages/settings';
import { InstanceFlagsSection } from './flags/InstanceFlagsSection';
import { InstanceSettingsSection } from './instance/InstanceSettingsSection';
import { InstanceInvitesSection } from './invites/InstanceInvitesSection';
import { InstanceModerationLogSection } from './moderationLog/InstanceModerationLogSection';
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
  tab: SettingsPageTab;
  basePath: string;
}

const settingsPreferencesPageTitle = t`Settings - Preferences`;
const settingsInvitesPageTitle = t`Settings - Invites`;
const settingsInstancePageTitle = t`Settings - Instance`;
const settingsFlagsPageTitle = t`Settings - Flags`;
const settingsModerationLogsPageTitle = t`Settings - Moderation`;
const settingsGeneralPageTitle = t`Settings - General`;

export const SettingsPage: FC<SettingsPage> = ({ basePath, tab }) => {
  const settingsPageTitle =
    tab === SettingsPageTab.Preferences
      ? settingsPreferencesPageTitle
      : tab === SettingsPageTab.Invites
      ? settingsInvitesPageTitle
      : tab === SettingsPageTab.Instance
      ? settingsInstancePageTitle
      : tab === SettingsPageTab.Flags
      ? settingsFlagsPageTitle
      : tab === SettingsPageTab.ModerationLogs
      ? settingsModerationLogsPageTitle
      : tab === SettingsPageTab.General
      ? settingsGeneralPageTitle
      : settingsGeneralPageTitle; //never
  usePageTitle(settingsPageTitle);

  const { me, updateProfile } = useMe();
  const profile = me?.user;

  const initialValues = useMemo<EditProfile>(
    () => ({
      icon: profile?.icon?.url || undefined,
      image: profile?.image?.url || undefined,
      location: profile?.location || '',
      name: profile?.name || '',
      website: profile?.website || '',
      summary: profile?.summary || ''
    }),
    [profile]
  );

  const updateProfileFormik = useFormik<EditProfile>({
    initialValues,
    enableReinitialize: true,
    onSubmit: ({ icon, image, ...profile }) => updateProfile({ profile, icon, image })
  });
  const sectionPaths: SettingsUIProps['sectionPaths'] = useMemo(
    () => ({
      preferences: settingsLocation.getPath({ tab: 'preferences' }, undefined),
      instance: settingsLocation.getPath({ tab: undefined }, undefined),
      invites: settingsLocation.getPath({ tab: 'invites' }, undefined),
      flags: settingsLocation.getPath({ tab: 'flags' }, undefined),
      logs: settingsLocation.getPath({ tab: 'logs' }, undefined),
      general: settingsLocation.getPath({ tab: undefined }, undefined)
    }),
    []
  );
  const settingsPageProps = useMemo<SettingsUIProps | null>(() => {
    const props: SettingsUIProps = {
      sectionPaths,
      displayUsername: profile?.displayUsername || '',
      isAdmin: !!me?.isInstanceAdmin,
      formik: updateProfileFormik,
      Preferences: <PreferencesSettingsSection />,
      Instance: <InstanceSettingsSection />,
      Invites: <InstanceInvitesSection />,
      Flags: <InstanceFlagsSection />,
      ModerationLog: <InstanceModerationLogSection />
    };
    return props;
  }, [me, profile, sectionPaths, updateProfileFormik]);

  return settingsPageProps && <SettingsPageUI {...settingsPageProps} />;
};
