import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import { CreateNewUserHOC } from 'HOC/pages/createNewUser/CreateNewUserHOC';

interface SignupPageRouter {}
const CreateNewUserRouter: FC<RouteComponentProps<SignupPageRouter>> = () => {
  return (
    <GuestTemplate withoutHeader>
      <CreateNewUserHOC />
    </GuestTemplate>
  );
};

export const CreateNewUserRoute: RouteProps = {
  exact: true,
  path: '/create-user/:token',
  component: CreateNewUserRouter
};
