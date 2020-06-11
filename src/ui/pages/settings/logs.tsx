import React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';

export interface Props {}
const ModerationLog: React.FC<Props> = () => {
  return (
    <Box>
      <Text px={3} mt={2} variant="heading">
        <Trans>Moderation Log</Trans>
      </Text>

      <Text variant="suptitle" p={3}>
        <Trans>Logs will be available soon</Trans>
      </Text>
    </Box>
  );
};

export default ModerationLog;
