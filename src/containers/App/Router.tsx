import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { AllCollectionsPageRoute } from 'routes/AllCollectionsPageRoute';
// import { AllCommunitiesPageRoute } from 'routes/AllCommunitiesPageRoute';
// import { CollectionPageRoute } from 'routes/CollectionPageRoute';
// import { CommunityPageRoute } from 'routes/CommunityPageRoute';
import { CreateNewUserRoute } from 'routes/CreateNewUserRoute';
import { ConfirmEmailRoute } from 'routes/ConfirmEmailPageRoute';
import { CreateNewPasswordPageRoute } from 'routes/CreateNewPasswordPageRoute';
import { DiscoverPageRoute } from 'routes/DiscoverPageRoute';
import { InventoryResourceItemRouter } from 'routes/InventoryResourceItemRouter';
// import { ActivityPageRouter } from 'routes/ActivityPageRoute';
import { HomePageRoute } from 'routes/HomePageRoute';
import { LoginPageRoute } from 'routes/LoginPageRoute';
import { MapsPageRoute } from 'routes/MapsPageRoute';
import { ResetPasswordPageRoute } from 'routes/ResetPasswordPageRoute';
// import { SearchPageRoute } from 'routes/SearchPageRoute';
import { SettingsPageRoute } from 'routes/SettingsPageRoute';
import { SignupPageRoute } from 'routes/SignupPageRoute';
// import { ThreadPageRoute } from 'routes/ThreadPageRoute';
import { UserPageRoute } from 'routes/UserPageRoute';
// import { LMSMoodleSearchRoute } from 'routes/LMSMoodleSearchRoute';
// import { TermsAndConditionsPageRoute } from 'routes/TermsAndConditionsPage';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';

export const Router: React.FC = () => {
  return (
    <Switch>
      <Route {...UserPageRoute} />
      {/*<Route {...CommunityPageRoute} />*/}
      {/*<Route {...CollectionPageRoute} />*/}
      <Route {...SettingsPageRoute} />
      <Route {...CreateNewUserRoute} />
      {/*<Route {...AllCollectionsPageRoute} />*/}
      {/*<Route {...AllCommunitiesPageRoute} />*/}
      {/*<Route {...ThreadPageRoute} />*/}
      <Route {...InventoryResourceItemRouter} />
      {/*<Route {...ActivityPageRouter} />*/}
      <Route {...DiscoverPageRoute} />
      {/*<Route {...SearchPageRoute} />*/}
      <Route {...CreateNewPasswordPageRoute} />
      <Route {...ResetPasswordPageRoute} />
      <Route {...LoginPageRoute} />
      <Route {...SignupPageRoute} />
      <Route {...ConfirmEmailRoute} />
      {/*<Route {...TermsAndConditionsPageRoute} />*/}
      {/*<Route {...LMSMoodleSearchRoute} />*/}
      <Route {...HomePageRoute} />
      <Route {...MapsPageRoute} />
      <Route component={NotFoundHOC} />
    </Switch>
  );
};
