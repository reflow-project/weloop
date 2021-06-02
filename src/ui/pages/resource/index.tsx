import { Trans } from '@lingui/macro';
import { ApolloError } from 'apollo-client';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import Button from '../../elements/Button';
import styled from '../../themes/styled';
const MapIcon = require('react-feather/dist/icons/map').default;
const BoxIcon = require('react-feather/dist/icons/box').default;
const PenIcon = require('react-feather/dist/icons/edit').default;
const UserIcon = require('react-feather/dist/icons/user').default;
export interface Props {
  resource?: EconomicResource;
  error?: ApolloError | undefined;
  loading: boolean;
}

export const ResourceItem: React.FC<Props> = ({ resource }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <InventoryWrapper key={resource?.id}>
              <ImageWrapper>
                {resource?.image && <img src={resource.image} alt={resource.name} />}
              </ImageWrapper>
              <InfoWrapper>
                <div>
                  <Box mr={1} mb={2}>
                    <Title variant="subhead">
                      {' '}
                      <Trans>{resource && resource.name}</Trans>
                    </Title>
                  </Box>
                  <Box mr={1}>
                    <Icon>
                      <PenIcon size="16" />
                    </Icon>
                    <Trans>Note:</Trans>{' '}
                    <Trans>{resource?.note ? resource.note : 'Not provided'}</Trans>
                  </Box>
                  <Box mr={1}>
                    <Text variant="text">
                      <Icon>
                        <MapIcon size="16" />
                      </Icon>
                      <b>
                        <Trans>Location:</Trans>
                      </b>{' '}
                      {resource?.currentLocation?.name
                        ? resource.currentLocation.name
                        : 'Not provided'}
                    </Text>
                  </Box>
                  <Box mr={1}>
                    <Text variant="text">
                      <Icon>
                        <BoxIcon size="16" />
                      </Icon>
                      <b>Quantity in stock:</b>{' '}
                      {`${resource?.onhandQuantity?.hasNumericalValue} ${resource?.onhandQuantity?.hasUnit.label}`}
                    </Text>
                  </Box>
                  {resource?.track?.map(track => {
                    return (
                      <TrackWrapper>
                        <Box mr={1}>
                          <Text variant="text">
                            <Icon>
                              <PenIcon size="16" />
                            </Icon>
                            <b>
                              <Trans>Track note: </Trans>
                            </b>{' '}
                            {track.note ? track.note : 'Not provided'}
                          </Text>
                        </Box>
                        <Box mr={1}>
                          <Text variant="text">
                            <Icon>
                              <BoxIcon size="16" />
                            </Icon>
                            <b>Quantity in stock:</b>{' '}
                            {`${track.resourceQuantity.hasNumericalValue} ${track.resourceQuantity.hasUnit.label}`}
                          </Text>
                        </Box>
                        <Box mr={1}>
                          <Text variant="text">
                            <Icon>
                              <UserIcon size="16" />
                            </Icon>
                            <b>
                              <Trans>Provider:</Trans>
                            </b>{' '}
                            {track.provider ? track.provider.name : 'Not provided'}
                          </Text>
                        </Box>
                        <Box mr={1}>
                          <Text variant="text">
                            <Icon>
                              <UserIcon size="16" />
                            </Icon>
                            <b>
                              <Trans>Receiver:</Trans>
                            </b>
                            {track.receiver ? track.receiver.name : 'Not provided'}
                          </Text>
                        </Box>
                      </TrackWrapper>
                    );
                  })}
                </div>
                <ActionsWrapper>
                  <Button mr={2} onClick={() => {}} variant="button">
                    <Trans>Perform event</Trans>
                  </Button>
                </ActionsWrapper>
              </InfoWrapper>
            </InventoryWrapper>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

export const Title = styled(Text)`
  color: ${props => props.theme.colors.dark};
  text-decoration: none !important;
`;

export const Icon = styled(Box)`
  width: 30px;
  display: inline-block;
  svg {
    stroke: ${props => props.theme.colors.mediumdark};
  }
`;

export const InventoryWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-grow: 0;
  background: #fff;
  height: auto
  padding: 1em;
  margin-bottom: 10px;
`;

export const TrackWrapper = styled('div')`
  padding 10px 10px 10px 20px;
  border-bottom: 1px solid #ccc
`;
export const ActionsWrapper = styled('div')`
  display: flex
  justify-content: flex-end;
  padding: 15px 0 0;
  
  button {
    margin-right: 0;
  }
  `;

export const InfoWrapper = styled('div')`
  flex-basis: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled('div')`
  flex-basis: 140px;
  width: 140px;
  height: 140px;
  border-radius: 4px;
  background-color: #f3f3f3;

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
  }
`;
