import * as React from 'react';
import { FC } from 'react';
import EconomicEventManager, {
  EconomicEventManagerProps
} from '../../../ui/modules/EconomicEventManager';
import * as GQL from './EconomicEventManager.generated';

export const EconomicEventManagerHOC: FC = () => {
  const [action, setAction] = React.useState('');

  const intentActionsQ = GQL.useIntentActionsQuery();
  const { loading, error, data } = GQL.useFilteredEconomicEventsQuery({
    variables: { action }
  });
  const unitPagesQ = GQL.useUnitPagesQuery();

  const intentActions = intentActionsQ.data?.actions;
  const unitPages = unitPagesQ.data?.unitsPages;

  const economicEventManager: EconomicEventManagerProps = {
    actionList: intentActions,
    economicEvents: { loading, error, data: data?.economicEventsFiltered },
    unitPages,
    setAction
  };

  return <EconomicEventManager {...economicEventManager} />;
};
