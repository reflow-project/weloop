import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import { Row } from 'ui/modules/Modal';
// import DropzoneArea from 'ui/modules/DropzoneModal';
import { FormikHook } from 'ui/@types/types';
import { LoadMore } from 'ui/modules/Loadmore';

export interface Props {
  FlagsBox: JSX.Element;
  loadMoreFlags: FormikHook | null;
}

const Flags: React.FC<Props> = ({ FlagsBox, loadMoreFlags }) => {
  return (
    <Box>
      <Text px={3} mt={2} variant="heading">
        <Trans>Flags</Trans>
      </Text>
      <Row>
        {FlagsBox ? (
          <Box mt={2} sx={{ width: '600px' }}>
            {FlagsBox}
            {loadMoreFlags ? <LoadMore LoadMoreFormik={loadMoreFlags} /> : null}{' '}
          </Box>
        ) : (
          <Text pt={3}>
            <Trans>No flags yet</Trans>
          </Text>
        )}
      </Row>
    </Box>
  );
};

export default Flags;
