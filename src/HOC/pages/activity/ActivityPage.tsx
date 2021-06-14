import React, { FC } from 'react';
import { useMe } from '../../../fe/session/useMe';
import { Activity, Props as ActivityProps } from '../../../ui/pages/activity';
import { useUserQuery } from './ActivityPage.generated';

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  image?: string;
}

export const ActivityPage: FC<ActivityProps> = () => {
  const { me } = useMe();
  const currentUser = me?.user.id;

  const { error, data }: any = useUserQuery({
    variables: { userId: currentUser ? currentUser : '' }
  });

  console.log({ data });
  console.log('Error:', error);
  const props: ActivityProps = {
    userId: currentUser ? currentUser : ''
  };

  return <Activity {...props} />;
};
