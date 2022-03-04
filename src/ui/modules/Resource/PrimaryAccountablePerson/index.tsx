import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
// import { PrimaryAccountable } from 'HOC/pages/inventory/InventoryPage';
import Avatar from '../../../elements/Avatar';
import { Title } from '../../../pages/resource';
import styled from '../../../themes/styled';

// export interface Props {
//   data?: PrimaryAccountable;
// }

const PrimaryAccountablePerson: React.FC<any> = ({ data }) => {
  return (
    <PersonWrapper>
      <Box mb={2} style={{ display: 'flex' }}>
        <Avatar size="default" src={`${process.env.REACT_APP_UPLOADS}/${data?.image}`} />
        <div className="wrapper_info">
          <b>
            <Trans>Primary Accountable: </Trans>
          </b>
          <Title variant="heading">
            <Trans>{data?.name}</Trans>
          </Title>
          <Trans>
            <Text variant="text">
              <b>Relationships As Object: </b>
              {data?.relationshipsAsObject + ''}
            </Text>
          </Trans>
        </div>
      </Box>
    </PersonWrapper>
  );
};

export default PrimaryAccountablePerson;

export const PersonWrapper = styled('div')`
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 10px;
  width: 100%;

  .d-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .wrapper_info {
    margin-left: 20px;
  }

  .intent {
    padding: 10px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  }
`;
