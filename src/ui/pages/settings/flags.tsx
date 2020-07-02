import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import { Row } from 'ui/modules/Modal';
// import DropzoneArea from 'ui/modules/DropzoneModal';
import { FormikHook } from 'ui/@types/types';
import { LoadMore } from 'ui/modules/Loadmore';
import { ReactElement } from 'react';
import { BottomBordered } from 'ui/elements/Layout';

export interface Props {
  FlagPreviews: ReactElement[];
  loadMoreFlags: FormikHook | null;
}

const Flags: React.FC<Props> = ({ FlagPreviews, loadMoreFlags }) => {
  return (
    <Box>
      <Text px={3} mt={2} variant="heading">
        <Trans>Flags</Trans>
      </Text>
      <Row>
        {FlagPreviews ? (
          <Box mt={2} sx={{ width: '600px' }}>
            {FlagPreviews.map(FlagPreview => (
              <BottomBordered key={FlagPreview.key || ''}>{FlagPreview}</BottomBordered>
            ))}
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
