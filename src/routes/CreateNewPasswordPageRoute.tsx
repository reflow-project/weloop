import { CreateNewPasswordPageHOC } from 'HOC/pages/createNewPassword/CreateNewPassword';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import React, { FC, useMemo } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { RedirectAuthenticatedToHome } from './wrappers/RedirectBySession';

interface CreateNewPasswordPageRouter {
  token: string;
}
const CreateNewPasswordPageRouter: FC<RouteComponentProps<CreateNewPasswordPageRouter>> = ({
  match: {
    params: { token }
  }
}) => {
  const props = useMemo<any>(() => {
    return {
      token
    };
  }, [token]);

  return (
    <RedirectAuthenticatedToHome>
      <GuestTemplate withoutHeader>
        <CreateNewPasswordPageHOC {...props} />
      </GuestTemplate>
    </RedirectAuthenticatedToHome>
  );
};

export const CreateNewPasswordPageRoute: RouteProps = {
  exact: true,
  path: '/reset/:token',
  component: CreateNewPasswordPageRouter
};
