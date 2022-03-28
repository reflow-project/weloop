// import { AllCommunitiesPage } from 'HOC/pages/all-communities/AllCommunities';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';

interface AllCommunitiesPageRouter {}
const AllCommunitiesPageRouter: FC<RouteComponentProps<AllCommunitiesPageRouter>> = () => {
  //const props: AllCommunitiesPage = {};
  return <WithSidebarTemplate>{/*<AllCommunitiesPage />*/}</WithSidebarTemplate>;
};

export const AllCommunitiesPageRoute: RouteProps = {
  exact: true,
  path: '/communities',
  component: AllCommunitiesPageRouter
};
