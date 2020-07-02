import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { GuestTemplate } from 'HOC/templates/Guest/Guest';
import { TermsAndConditionsPageHOC } from 'HOC/pages/termsAndConditions/TermsAndConditionsPage';

interface TermsAndConditionsPageRouter {}
const TermsAndConditionsPageRouter: FC<RouteComponentProps<TermsAndConditionsPageRouter>> = () => {
  return (
    <GuestTemplate withoutHeader>
      <TermsAndConditionsPageHOC />
    </GuestTemplate>
  );
};

export const TermsAndConditionsPageRoute: RouteProps = {
  exact: true,
  path: '/terms',
  component: TermsAndConditionsPageRouter
};
