import { Trans } from '@lingui/macro';
import { ApolloError } from 'apollo-client';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import Button from 'ui/elements/Button';
import styled from '../../themes/styled';
const MapIcon = require('react-feather/dist/icons/map').default;
const BoxIcon = require('react-feather/dist/icons/box').default;
const PenIcon = require('react-feather/dist/icons/edit').default;
const EditIcon = require('react-feather/dist/icons/edit-3').default;
const UserIcon = require('react-feather/dist/icons/user').default;
export interface Props {
  openEditModal: () => void;
  openUpdateResourceModal: () => void;
  resource?: EconomicResource;
  error?: ApolloError | undefined;
  loading: boolean;
}

export const ResourceItem: React.FC<Props> = ({
  resource,
  openEditModal,
  openUpdateResourceModal
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <ActionsWrapper>
              <Button mr={2} onClick={openEditModal} variant="button">
                <Trans>Perform event</Trans>
              </Button>

              <Button ml={2} onClick={openUpdateResourceModal} variant="error">
                <EditIcon size="20" /> <Trans>Edit</Trans>
              </Button>
            </ActionsWrapper>
            <InventoryWrapper>
              <ImageWrapper>
                {resource?.image && <img src={resource.image} alt={resource.name} />}
              </ImageWrapper>
              <InfoWrapper>
                <Box mr={1} mb={2}>
                  <Title variant="heading">
                    {' '}
                    <Trans>{resource && resource.name}</Trans>
                  </Title>
                </Box>
                <Box mr={1}>
                  <Text variant="text">
                    <Icon>
                      <PenIcon size="16" />
                    </Icon>
                    <b>
                      <Trans>Note:</Trans>{' '}
                    </b>{' '}
                    <Trans>{resource?.note ? resource.note : 'Not provided'}</Trans>
                  </Text>
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
                    <span
                      style={{
                        color:
                          resource?.onhandQuantity && resource.onhandQuantity.hasNumericalValue < 0
                            ? 'red'
                            : 'inherit'
                      }}
                    >
                      {`${resource?.onhandQuantity?.hasNumericalValue} ${resource?.onhandQuantity?.hasUnit.label}`}
                    </span>
                  </Text>
                </Box>
                {resource?.track?.map(track => {
                  return (
                    <TrackWrapper>
                      <Badge>
                        {track.action ? (
                          <Trans>{track.action.label}</Trans>
                        ) : (
                          <Trans>Not provided</Trans>
                        )}
                      </Badge>
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
              </InfoWrapper>
            </InventoryWrapper>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

export const Badge = styled(Text)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 10px;
  border-radius: 4px;
  padding: 3px 5px;
  width: auto;
  display: inline-block;
  margin-bottom: 10px;
`;
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
  flex-basis: calc(100% - 100px);
  padding 10px 10px 10px 20px;
  border-bottom: 1px solid #ccc
`;

export const ActionsWrapper = styled('div')`
  display: flex
  justify-content: flex-end;
  padding: 15px 0 0;
  
  &:not(:last-child) {
    margin-bottom: 10px;
    }
  
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
    border-radius: 4px;
  }
`;

export const IconWrapper = styled(ImageWrapper)`
  flex-basis: 100px;
  width: 100px;
  height: 100px;

  img {
    height: 100px;
  }
`;
