import * as React from 'react';
import { FC } from 'react';
import { Taggable } from 'graphql/types.generated';
import { Actor } from 'ui/modules/ActivityPreview/types';
import ProposedIntentPanel, { IProposedIntentPanel } from 'ui/modules/ProposedIntentPanel';
import * as GQL from './IntentPanel.generated';

export type Props = {
  intentId: string;
  communityName: string;
};

export const IntentPanelHOC: FC<Props> = ({ intentId, communityName }) => {
  const intentPanelQ = GQL.useIntentItemQuery({
    variables: { intentId }
  });
  const intentPanelData = intentPanelQ.data?.intent;

  if (!intentPanelData) {
    return null;
  }

  const { provider } = intentPanelData;

  const actor: Actor = {
    icon: (provider && 'image' in provider && provider.image) || '',
    name: provider?.name ?? '',
    link: provider?.id ?? ''
  };

  const tags = (intentPanelData?.tags ?? []) as Array<Taggable>;
  const resourceQuantity = (intentPanelData.resourceQuantity?.hasNumericalValue ?? 0) as number;
  const history =
    intentPanelData.resourceInventoriedAs?.trace?.map(item => {
      return {
        action: item.action.label,
        date: item.hasPointInTime ?? null
      };
    }) ?? [];

  const intentPanelProps: IProposedIntentPanel = {
    actor: actor,
    collectionName: communityName,
    link: intentId,
    createdAt: intentPanelData?.hasPointInTime ?? null,
    name: intentPanelData?.name ?? '',
    tags: tags.map(tag => tag.name ?? ''),
    icon: intentPanelData?.image,
    resourceQuantity,
    history,
    like: null,
    isFlagged: false,
    isOpenDropdown: false,
    toggleDropdown: () => {},
    toggleFlag: null,
    collectionLink: communityName
  };

  return <ProposedIntentPanel {...intentPanelProps} />;
};
