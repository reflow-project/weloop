import { AllCollectionsPage } from 'HOC/pages/all-collections/AllCollection';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';

interface AllCollectionsPageRouter {}
const AllCollectionsPageRouter: FC<RouteComponentProps<
  AllCollectionsPageRouter
>> = () => {
  //const props: AllCollectionsPage = {};
  return (
    <WithSidebarTemplate>
      <AllCollectionsPage />
    </WithSidebarTemplate>
  );
};

export const AllCollectionsPageRoute: RouteProps = {
  exact: true,
  path: '/collections',
  component: AllCollectionsPageRouter
};
