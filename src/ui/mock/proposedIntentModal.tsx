import { IProposedIntentPanel } from 'ui/modules/ProposedIntentPanel';
import { getActor } from './actor';
import { ProposedIntentPreviewProps } from './previews';

export const useGetProposedIntentModalProps = (): IProposedIntentPanel => {
  return {
    ...ProposedIntentPreviewProps(),
    actor: getActor(),
    createdAt: '2018-11-11',
    tags: ['red', 'cottonfabrics', 'recycled'],
    resourceQuantity: 9,
    history: [
      { action: 'Produced', date: '2020-12-12' },
      { action: 'Transformed', date: '2021-01-12' },
      { action: 'Transformed', date: '2021-01-22' },
      { action: 'Stored', date: '2021-01-22' }
    ]
  };
};
