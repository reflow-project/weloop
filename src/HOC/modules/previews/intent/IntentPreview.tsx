import { Intent } from 'graphql/types.generated';
import React, { FC } from 'react';
import { Intent as IntentPreviewUI, Props as IntentProps } from 'ui/modules/Previews/Intent';

export interface Props {
  intentId: Intent['id'];
  name: string;
  note: string;
  communityLink: string;
  communityName: string;
  onOpen: (id: string) => void;
}

export const IntentPreviewHOC: FC<Props> = ({
  intentId,
  name,
  note,
  communityLink,
  communityName,
  onOpen
}) => {
  const intentPreviewProps: IntentProps = {
    name,
    summary: note,
    link: intentId,
    like: null,
    hideActions: true,
    collectionLink: communityLink,
    collectionName: communityName,
    onOpen
  };

  return intentPreviewProps && <IntentPreviewUI {...intentPreviewProps} />;
};
