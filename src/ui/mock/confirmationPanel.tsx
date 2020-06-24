import { ConfirmationPanel } from 'ui/modules/ConfirmationPanel';
import { action } from '@storybook/addon-actions';

export const useGetConfirmationPanelProps = (): ConfirmationPanel => {
  return {
    confirm: action('confirm'),
    cancel: action('cancel'),
    title: 'Remove email from whitelist',
    description: `Are you sure you want to remove test@moodle.net from the whitelisted emails`,
    action: 'Delete',
    waiting: false
  };
};
