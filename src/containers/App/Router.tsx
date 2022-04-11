import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CreateNewUserRoute } from 'routes/CreateNewUserRoute';
import { ConfirmEmailRoute } from 'routes/ConfirmEmailPageRoute';
import { CreateNewPasswordPageRoute } from 'routes/CreateNewPasswordPageRoute';
import { DiscoverPageRoute } from 'routes/DiscoverPageRoute';
import { InventoryResourceItemRouter } from 'routes/InventoryResourceItemRouter';
import { HomePageRoute } from 'routes/HomePageRoute';
import { LoginPageRoute } from 'routes/LoginPageRoute';
import { MapsPageRoute } from 'routes/MapsPageRoute';
import { ResetPasswordPageRoute } from 'routes/ResetPasswordPageRoute';
import { SettingsPageRoute } from 'routes/SettingsPageRoute';
import { SignupPageRoute } from 'routes/SignupPageRoute';
import { UserPageRoute } from 'routes/UserPageRoute';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route {...UserPageRoute} />
      <Route {...SettingsPageRoute} />
      <Route {...CreateNewUserRoute} />
      <Route {...InventoryResourceItemRouter} />
      <Route {...DiscoverPageRoute} />
      <Route {...CreateNewPasswordPageRoute} />
      <Route {...ResetPasswordPageRoute} />
      <Route {...LoginPageRoute} />
      <Route {...SignupPageRoute} />
      <Route {...ConfirmEmailRoute} />
      <Route {...HomePageRoute} />
      <Route {...MapsPageRoute} />
      <Route component={NotFoundHOC} />
    </Switch>
  );
};
