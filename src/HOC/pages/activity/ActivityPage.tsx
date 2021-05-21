import React, { FC } from 'react';
import { Activity, Props as ActivityProps } from '../../../ui/pages/activity';

type InventoryPageProps = {
  userId: string;
  basePath: string;
};

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  image?: string;
}

export const ActivityPage: FC<ActivityProps> = ({ userId }) => {
  //const inventory: Activit[] | [] = data?.economicResourcesFiltered || [];

  const props: ActivityProps = {
    userId
  };

  return (
    <>
      <Activity {...props} />
    </>
  );
};
