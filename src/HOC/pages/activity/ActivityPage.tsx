import React, { FC } from 'react';
import { Activity, Props as ActivityProps } from '../../../ui/pages/activity';
import { useUserQuery } from './ActivityPage.generated';

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  image?: string;
}

export const ActivityPage: FC<ActivityProps> = ({ userId }) => {
  const { error, data }: any = useUserQuery({
    variables: { userId: '01F494QA0T31JTQGJ80QFHTFM0' }
  });

  console.log({ data });
  console.log('Error:', error);
  const props: ActivityProps = {
    userId
  };

  return <Activity {...props} />;
};
