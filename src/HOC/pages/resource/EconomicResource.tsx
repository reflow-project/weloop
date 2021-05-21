import React, { FC } from 'react';
import ResourceItem, { Props as ResourceItemProps } from 'ui/pages/resource';
import * as GQL from './EconomicResource.generated';

type ResourcePageProps = {
  resourceId: string;
};

export const EconomicResource: FC<ResourcePageProps> = ({ resourceId }) => {
  const { data, loading, error } = GQL.useEconomicResourceQuery({
    variables: { id: resourceId }
  });

  const resource: any = data?.economicResource;
  console.log(resource);
  const props: ResourceItemProps = {
    resource,
    loading,
    error
  };

  return <ResourceItem {...props} />;
};
