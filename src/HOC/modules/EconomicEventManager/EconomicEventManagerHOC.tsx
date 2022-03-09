/* eslint react-hooks/exhaustive-deps: "off" */

import * as React from 'react';
import { FC } from 'react';
import { useAgentsQuery } from '../../../fe/resourceDefault/useCreateResource.generated';
import { useActionsQuery } from '../IntentPanel/Actions.generated';
import { EconomicEventManagerProps } from '../../../ui/modules/EconomicEventManager';
import { useUnitsPagesQuery } from './EconomicEventManager.generated';

export const EconomicEventManagerHOC: FC = ({ children }) => {
  const intentActionsQ = useActionsQuery();
  const { data } = useAgentsQuery();
  const unitPagesQ = useUnitsPagesQuery();

  const intentActions = intentActionsQ.data?.actions;
  const unitPages = unitPagesQ.data?.unitsPages;
  const economicEventManager: EconomicEventManagerProps = React.useMemo(
    () => ({
      actionList: intentActions?.map((el: any) => {
        return !['transfer', 'consume', 'produce'].includes(el.id)
          ? { ...el, isDisabled: true }
          : { ...el, isDisabled: false };
      }),
      providerList: data?.agents,
      receiverList: data?.agents,
      unitPages,
      setAction: () => {}
    }),
    [data, intentActions, unitPages]
  );

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...economicEventManager });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
};
