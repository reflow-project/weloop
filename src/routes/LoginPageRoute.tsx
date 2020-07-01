import { LoginPageHOC } from 'HOC/pages/login/LoginPage';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { RedirectAuthenticatedToHome } from './wrappers/RedirectBySession';
import { locationHelper } from './lib/helper';

interface LoginPageRouter {}
const LoginPageRouter: FC<RouteComponentProps<LoginPageRouter>> = ({ match }) => {
  return (
    <RedirectAuthenticatedToHome>
      <GuestTemplate withoutHeader>
        <LoginPageHOC />
      </GuestTemplate>
    </RedirectAuthenticatedToHome>
  );
};

export const LoginPageRoute: RouteProps = {
  exact: true,
  path: '/login',
  component: LoginPageRouter
};

export const loginLocation = locationHelper<undefined, undefined>(LoginPageRoute);
