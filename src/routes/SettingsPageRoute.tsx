import { SettingsPage, SettingsPageTab } from 'HOC/pages/settings/SettingsPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';
import React, { FC, useMemo } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithoutSidebarTemplate } from 'HOC/templates/WithoutSidebar/WithoutSidebar';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';
import { locationHelper } from './lib/helper';

interface SettingsPageRouter {
  tab?: string;
}

const SettingsPageRouter: FC<RouteComponentProps<SettingsPageRouter>> = ({ match }) => {
  const maybeTabStr = match.params.tab;
  const tab =
    maybeTabStr === 'preferences'
      ? SettingsPageTab.Preferences
      : maybeTabStr === 'logs'
      ? SettingsPageTab.ModerationLogs
      : maybeTabStr === 'invites'
      ? SettingsPageTab.Invites
      : maybeTabStr === 'instance'
      ? SettingsPageTab.Instance
      : maybeTabStr === 'flags'
      ? SettingsPageTab.Flags
      : !maybeTabStr
      ? SettingsPageTab.General
      : null;

  const props = useMemo<SettingsPage | null>(
    () =>
      tab === null
        ? null
        : {
            tab,
            basePath: `/settings`
          },
    [tab]
  );

  if (!props) {
    return <NotFoundHOC />;
  }

  return (
    <RedirectAnonymousToLogin>
      <WithoutSidebarTemplate>
        <SettingsPage {...props} />
      </WithoutSidebarTemplate>
    </RedirectAnonymousToLogin>
  );
};

export const SettingsPageRoute: RouteProps = {
  exact: true,
  path: '/settings/:tab(preferences|logs|invites|instance|flags)?',
  component: SettingsPageRouter
};

type Tab = undefined | 'preferences' | 'logs' | 'invites' | 'instance' | 'flags';
type Params = {
  tab: Tab;
};
// @ts-ignore
export const settingsLocation = locationHelper<Params, undefined>(SettingsPageRoute);
