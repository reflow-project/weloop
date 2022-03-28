import { ConfirmEmailPage } from 'HOC/pages/confirmEmail/ConfirmEmailPage';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { RedirectAuthenticated } from './wrappers/RedirectBySession';

interface ConfirmEmailRouter {
  token: string;
}
const ConfirmEmailRouter: FC<RouteComponentProps<ConfirmEmailRouter>> = ({ match }) => {
  return (
    <RedirectAuthenticated to="/#welcome">
      <GuestTemplate>
        <ConfirmEmailPage token={match.params.token} />
      </GuestTemplate>
    </RedirectAuthenticated>
  );
};

export const ConfirmEmailRoute: RouteProps = {
  exact: true,
  path: '/confirm-email/:token',
  component: ConfirmEmailRouter
};
