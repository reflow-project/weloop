import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { PrimaryAccountable } from 'HOC/pages/inventory/InventoryPage';
import Avatar from '../../../elements/Avatar';
import Button from '../../../elements/Button';
import { Title } from '../../../pages/resource';
import styled from '../../../themes/styled';

export interface Props {
  data?: PrimaryAccountable;
}

const ArrowDownIcon = require('react-feather/dist/icons/chevron-down').default;
const ArrowUpIcon = require('react-feather/dist/icons/chevron-up').default;

const PrimaryAccountablePerson: React.FC<Props> = ({ data }) => {
  const [showList, setShowList] = React.useState(false);

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
      <Button mr={2} onClick={() => setShowList(!showList)} variant="show-more">
        {showList ? (
          <>
            <ArrowUpIcon size="16" />
            <Trans>Hide intents</Trans>
          </>
        ) : (
          <>
            <ArrowDownIcon size="16" />
            <Trans>Show intents</Trans>
          </>
        )}
      </Button>
      {showList ? (
        <div className={showList ? 'show' : 'hide'}>
          {data?.intents?.map(el => {
            return (
              <div key={el.id} className="intent  d-flex">
                <div>
                  <Box>
                    <Text variant="text">
                      <b>
                        <Trans>Name:</Trans>{' '}
                      </b>{' '}
                      <Trans>{el.name}</Trans>
                    </Text>
                  </Box>
                  <Box>
                    <Text variant="text">
                      <b>
                        <Trans>Note:</Trans>{' '}
                      </b>{' '}
                      <Trans>{el.note}</Trans>
                    </Text>
                  </Box>
                </div>
                <Avatar
                  size="default"
                  src={`${process.env.REACT_APP_UPLOADS}/${el?.image}` || 'some'}
                />
              </div>
            );
          })}
        </div>
      ) : null}
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
