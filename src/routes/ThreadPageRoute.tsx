import React, { FC } from 'react';
// import { ThreadPage } from 'HOC/pages/thread/ThreadPage';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { locationHelper } from './lib/helper';

interface ThreadPageRouter {
  threadId: string;
}
const ThreadPageRouter: FC<RouteComponentProps<ThreadPageRouter>> = ({ match }) => {
  // const threadId = match.params.threadId;
  //
  // const props = useMemo<ThreadPage>(
  //   () => ({
  //     threadId
  //   }),
  //   [threadId]
  // );

  return <WithSidebarTemplate>{/*<ThreadPage {...props} />*/}</WithSidebarTemplate>;
};

export const ThreadPageRoute: RouteProps = {
  exact: true,
  path: '/thread/:threadId',
  component: ThreadPageRouter
};

type Params = {
  threadId: string;
};

export const threadLocation = locationHelper<Params, undefined>(ThreadPageRoute);
