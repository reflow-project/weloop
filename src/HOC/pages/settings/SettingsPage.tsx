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

export enum SettingsPageTab {
  General,
  Preferences,
  Invites,
  Instance,
  Flags,
  ModerationLogs
}
export interface SettingsPage {
  tab: SettingsPageTab;
  basePath: string;
}

export const SettingsPage: FC<SettingsPage> = ({ basePath }) => {
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
    onSubmit: ({ icon, image, ...profile }) =>
      updateProfile({ profile, icon, image })
  });

  const settingsPageProps = useMemo<SettingsUIProps | null>(() => {
    const props: SettingsUIProps = {
      basePath,
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
  }, [basePath, me, profile, updateProfileFormik]);

  return settingsPageProps && <SettingsPageUI {...settingsPageProps} />;
};
