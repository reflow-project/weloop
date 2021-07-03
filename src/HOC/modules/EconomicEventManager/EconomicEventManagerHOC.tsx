/* eslint react-hooks/exhaustive-deps: "off" */

import * as React from 'react';
import { FC } from 'react';
import { useCreateDefaultResource } from '../../../fe/resourceDefault/useCreateDefaultResource';
// import { useAgentsQuery } from '../../../fe/resourceDefault/useCreateResource.generated';
import { useActionsQuery } from '../IntentPanel/Actions.generated';
import { EconomicEventManagerProps } from '../../../ui/modules/EconomicEventManager';
import {
  useEconomicEventsFilteredQuery,
  useUnitsPagesQuery
  // useUsersQuery,
} from './EconomicEventManager.generated';

export const EconomicEventManagerHOC: FC = ({ children }) => {
  const [providerList, setProviderList] = React.useState<
    null | undefined | [] | { id: string; name: string }[]
  >([]);
  const [receiverList, setReceiverList] = React.useState<
    null | undefined | [] | { id: string; name: string }[]
  >([]);
  const [action, setAction] = React.useState('');

  const intentActionsQ = useActionsQuery();
  const { data } = useEconomicEventsFilteredQuery({
    variables: { action }
  });

  const { createDefaultResource, isAgent } = useCreateDefaultResource();

  React.useEffect(() => {
    if (isAgent) return;

    createDefaultResource &&
      createDefaultResource({
        name: 'My first inventory',
        note: 'Created automatically',
        action: 'transfer'
      });
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [isAgent]);

  React.useEffect(() => {
    // setFulUserList(users?.data?.users.edges || { id: '', name: '' })
    const providers = data?.economicEventsFiltered?.map(el => el.provider);
    const receivers = data?.economicEventsFiltered?.map(el => el.receiver);

    const uniqueProviders: { id: string; name: string }[] = [];
    providers?.length &&
      providers.forEach(el => {
        !uniqueProviders.some(arrItem => arrItem.id === el.id) && uniqueProviders.push(el);
      });
    const uniqueReceivers: { id: string; name: string }[] = [];
    receivers?.length &&
      receivers.forEach(el => {
        !uniqueReceivers.some(arrItem => arrItem.id === el.id) && uniqueReceivers.push(el);
      });

    setProviderList(uniqueProviders);
    setReceiverList(uniqueReceivers);
  }, [data]);

  const unitPagesQ = useUnitsPagesQuery();

  const intentActions = intentActionsQ.data?.actions;
  const unitPages = unitPagesQ.data?.unitsPages;
  const economicEventManager: EconomicEventManagerProps = {
    actionList: intentActions?.map((el: any) => {
      return !['transfer', 'consume', 'produce'].includes(el.id)
        ? { ...el, isDisabled: true }
        : { ...el, isDisabled: false };
    }),
    providerList: providerList,
    receiverList: receiverList,
    unitPages,
    setAction
  };

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...economicEventManager });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
};
