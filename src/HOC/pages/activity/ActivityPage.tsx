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

export const ActivityPage: FC<ActivityProps> = ({ userId }) => {
  const { me } = useMe();
  const currentUser = me ? me.user.id : userId;

  const { error, data }: any = useUserQuery({
    variables: { userId: currentUser }
  });

  console.log({ data });
  console.log('Error:', error);
  const props: ActivityProps = {
    userId
  };

  return <Activity {...props} />;
};
