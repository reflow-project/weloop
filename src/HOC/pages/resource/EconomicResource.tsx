import React, { FC } from 'react';
import ResourceItem, { Props as ResourceItemProps } from 'ui/pages/resource';
import * as GQL from './EconomicResource.generated';

type ResourcePageProps = {
  resourceId: string;
};

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  image?: string;
}

export const EconomicResource: FC<ResourcePageProps> = ({ resourceId }) => {
  const { data, loading, error } = GQL.useInventoryItemQuery({
    variables: { id: resourceId }
  });

  const resource: EconomicResource = data?.economicResource || null;

  const props: ResourceItemProps = {
    resource,
    loading,
    error
  };

  return <ResourceItem {...props} />;
};
