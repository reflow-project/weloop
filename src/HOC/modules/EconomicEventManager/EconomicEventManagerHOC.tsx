import * as React from 'react';
import { FC } from 'react';
import { useActionsQuery } from '../IntentPanel/Actions.generated';

import EconomicEventManager, {
  EconomicEventManagerProps
} from '../../../ui/modules/EconomicEventManager';
import * as GQL from './EconomicEventManager.generated';
import { useUnitsPagesQuery } from './EconomicEventUnits.generated';

export const EconomicEventManagerHOC: FC = () => {
  const [action, setAction] = React.useState('');

  const intentActionsQ = useActionsQuery();
  const { loading, error, data } = GQL.useSpatialThingsPagesQuery({
    variables: { action }
  });

  const unitPagesQ = useUnitsPagesQuery();

  const intentActions = intentActionsQ.data?.actions;
  const unitPages = unitPagesQ.data?.unitsPages;

  const economicEventManager: EconomicEventManagerProps = {
    actionList: intentActions,
    economicEvents: { loading, error, data: data },
    unitPages,
    setAction
  };

  return <EconomicEventManager {...economicEventManager} />;
};
