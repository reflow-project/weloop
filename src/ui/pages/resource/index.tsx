import { Trans } from '@lingui/macro';
import { ApolloError } from 'apollo-client';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { Link } from 'react-router-dom';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import Button from 'ui/elements/Button';
import { PersonWrapper } from '../../modules/Resource/PrimaryAccountablePerson';
import styled from '../../themes/styled';
import { Map } from 'ui/elements/Map';
import media from 'styled-media-query';

const ArrowDownIcon = require('react-feather/dist/icons/chevron-down').default;
const ArrowUpIcon = require('react-feather/dist/icons/chevron-up').default;
const MapIcon = require('react-feather/dist/icons/map').default;
const BoxIcon = require('react-feather/dist/icons/box').default;
const PenIcon = require('react-feather/dist/icons/edit').default;
const EditIcon = require('react-feather/dist/icons/edit-3').default;
const UserIcon = require('react-feather/dist/icons/user').default;
const ClockIcon = require('react-feather/dist/icons/clock').default;
const RemoveIcon = require('react-feather/dist/icons/trash-2').default;
const EyeIcon = require('react-feather/dist/icons/eye').default;

const QRCode = require('qrcode.react');

export interface Props {
  openEditModal: () => void;
  openUpdateResourceModal: () => void;
  openDeleteResourceModal: () => void;
  resource?: EconomicResource | any;
  error?: ApolloError | undefined;
  loading: boolean;
}

export const ResourceItem: React.FC<Props> = ({
  resource,
  openEditModal,
  openUpdateResourceModal,
  openDeleteResourceModal
}) => {
  const URL = window.location.href;

  const [showList, setShowList] = React.useState({
    first: false,
    second: false
  });

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
                <EditIcon size="16" className="ml-2" /> <Trans>Edit</Trans>
              </Button>
              <Button ml={2} onClick={openDeleteResourceModal} variant="error">
                <RemoveIcon size="16" className="ml-2" /> <Trans>Delete</Trans>
              </Button>
            </ActionsWrapper>
            <InventoryWrapper>
              <LeftColWrapper>
                <ImageWrapper>
                  {resource?.image && <img src={resource.image} alt={resource.name} />}
                </ImageWrapper>
                <QRCodeWrapper>{resource?.id && <QRCode value={URL} />}</QRCodeWrapper>
              </LeftColWrapper>
              <InfoWrapper>
                <Box mb={2}>
                  <Title variant="heading">
                    {' '}
                    <Trans>{resource && resource.name}</Trans>
                  </Title>
                </Box>
                <Box>
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
                <Box>
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
                <Box>
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
                      {resource?.onhandQuantity
                        ? `${resource?.onhandQuantity?.hasNumericalValue} ${resource?.onhandQuantity?.hasUnit.label}`
                        : 'Not provided'}
                    </span>
                  </Text>
                </Box>
                <Box>
                  <Text variant="text">
                    <Icon>
                      <UserIcon size="16" />
                    </Icon>
                    <b>
                      <Trans>Owner:</Trans>
                    </b>{' '}
                    {resource?.primaryAccountable
                      ? resource?.primaryAccountable.name
                      : 'Not provided'}
                  </Text>
                </Box>
                <Box p={3}>
                  <Text variant="subhead">
                    <Icon>
                      <ClockIcon size="16" />
                    </Icon>
                    History:{' '}
                    {resource?.track.length > 0 || resource?.trace.length > 0
                      ? ''
                      : 'Not available'}
                  </Text>
                </Box>
                {resource?.track.map((track: any) => {
                  return (
                    <TrackWrapper key={track.id}>
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
                            <EyeIcon size="16" />
                          </Icon>
                          <b>
                            <Trans>Result: </Trans>
                          </b>{' '}
                          {track.toResourceInventoriedAs ? (
                            <Link
                              to={`/resource/${track.toResourceInventoriedAs.id}`}
                              key={track.toResourceInventoriedAs.id}
                            >
                              {track.toResourceInventoriedAs.name}
                            </Link>
                          ) : (
                            'Not available'
                          )}
                        </Text>
                      </Box>
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
                          <b>Quantity: </b>{' '}
                          {`${track.resourceQuantity?.hasNumericalValue} ${track.resourceQuantity?.hasUnit.label}`}
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
                          {track.provider ? (
                            <Link to={`/user/${track.provider.id}`} key={track.provider.id}>
                              {track.provider.name}
                            </Link>
                          ) : (
                            'Not available'
                          )}
                        </Text>
                      </Box>
                      <Box mr={1}>
                        <Text variant="text">
                          <Icon>
                            <UserIcon size="16" />
                          </Icon>
                          <b>
                            <Trans>Receiver:</Trans>
                          </b>{' '}
                          {track.receiver ? (
                            <Link to={`/user/${track.receiver.id}`} key={track.receiver.id}>
                              {track.receiver.name}
                            </Link>
                          ) : (
                            'Not available'
                          )}
                        </Text>
                      </Box>
                    </TrackWrapper>
                  );
                })}
                {resource?.trace.map((trace: any) => {
                  return (
                    <TrackWrapper key={trace.id}>
                      <Badge>
                        {trace.action ? (
                          <Trans>{trace.action.label}</Trans>
                        ) : (
                          <Trans>Not provided</Trans>
                        )}
                      </Badge>
                      <Box mr={1}>
                        <Text variant="text">
                          <Icon>
                            <EyeIcon size="16" />
                          </Icon>
                          <b>
                            <Trans>Source: </Trans>
                          </b>{' '}
                          {trace.resourceInventoriedAs ? (
                            <Link
                              to={`/resource/${trace.resourceInventoriedAs.id}`}
                              key={trace.resourceInventoriedAs.id}
                            >
                              {trace.resourceInventoriedAs.name}
                            </Link>
                          ) : (
                            'Not available'
                          )}
                        </Text>
                      </Box>
                      <Box mr={1}>
                        <Text variant="text">
                          <Icon>
                            <PenIcon size="16" />
                          </Icon>
                          <b>
                            <Trans>trace note: </Trans>
                          </b>{' '}
                          {trace.note ? trace.note : 'Not provided'}
                        </Text>
                      </Box>
                      <Box mr={1}>
                        <Text variant="text">
                          <Icon>
                            <BoxIcon size="16" />
                          </Icon>
                          <b>Quantity:</b>{' '}
                          {`${trace.resourceQuantity?.hasNumericalValue} ${trace.resourceQuantity?.hasUnit.label}`}
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
                          {trace.provider ? (
                            <Link to={`/user/${trace.provider.id}`} key={trace.provider.id}>
                              {trace.provider.name}
                            </Link>
                          ) : (
                            'Not available'
                          )}
                        </Text>
                      </Box>
                      <Box mr={1}>
                        <Text variant="text">
                          <Icon>
                            <UserIcon size="16" />
                          </Icon>
                          <b>
                            <Trans>Receiver:</Trans>
                          </b>{' '}
                          {trace.receiver ? (
                            <Link to={`/user/${trace.receiver.id}`} key={trace.receiver.id}>
                              {trace.receiver.name}
                            </Link>
                          ) : (
                            'Not available'
                          )}
                        </Text>
                      </Box>
                    </TrackWrapper>
                  );
                })}
                <Box p={3}>
                  <Text variant="subhead">
                    <Icon>
                      <MapIcon size="16" />
                    </Icon>
                    Location:
                  </Text>
                </Box>
                <Map
                  zoom={13}
                  markers={[
                    {
                      position: {
                        lat: resource?.currentLocation?.long || 41.404014,
                        lng: resource?.currentLocation?.lat || 2.12
                      }
                    }
                  ]}
                ></Map>
                <PersonWrapper>
                  <div className="d-flex">
                    <Text variant="heading">
                      <Trans>More info</Trans>
                    </Text>
                    <Button
                      mr={2}
                      onClick={() =>
                        setShowList({
                          ...showList,
                          first: !showList.first
                        })
                      }
                      variant="show-more"
                    >
                      {showList.first ? (
                        <>
                          <ArrowUpIcon size="16" />
                          <Trans>Hide data</Trans>
                        </>
                      ) : (
                        <>
                          <ArrowDownIcon size="16" />
                          <Trans>Show data</Trans>
                        </>
                      )}
                    </Button>
                  </div>

                  {showList.first ? (
                    <div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>contained In:</Trans>
                          </b>{' '}
                          {resource?.containedIn + ''}
                        </Text>
                      </div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>contains:</Trans>
                          </b>{' '}
                          {resource?.contains + ''}
                        </Text>
                      </div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>lot:</Trans>
                          </b>{' '}
                          {resource?.lot + ''}
                        </Text>
                      </div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>stage:</Trans>
                          </b>{' '}
                          {resource?.stage + ''}
                        </Text>
                      </div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>trace length:</Trans>
                          </b>{' '}
                          {resource?.trace.length}
                        </Text>
                      </div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>tracking Identifier:</Trans>
                          </b>{' '}
                          {resource?.trackingIdentifier + ''}
                        </Text>
                      </div>
                      <div className="intent">
                        <Text variant="text">
                          <b>
                            <Trans>unit Of Effort:</Trans>
                          </b>{' '}
                          {resource?.unitOfEffort + ''}
                        </Text>
                      </div>
                    </div>
                  ) : null}
                </PersonWrapper>
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
  height: auto;
  padding: 1em;
  margin-bottom: 10px;

  ${media.lessThan('medium')`
        display: block;
      `};
`;

export const LeftColWrapper = styled('div')`
  ${media.lessThan('medium')`
        display: flex;
        margin-bottom: 20px;
      `};
`;
export const TrackWrapper = styled('div')`
  padding: 10px 10px 10px 20px;
  border-bottom: 1px solid #ccc;
`;

export const ActionsWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0 0;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    margin-right: 0;
  }

  ${media.lessThan('medium')`
        padding: 10px 20px 0;
      `};
`;

export const InfoWrapper = styled('div')`
  flex-basis: calc(100% - 160px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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
export const QRCodeWrapper = styled(ImageWrapper)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan('medium')`
        margin-top: 0;
        margin-left: 20px;
      `};
`;

export const IconWrapper = styled(ImageWrapper)`
  flex-basis: 100px;
  width: 100px;
  height: 100px;

  img {
    height: 100px;
  }
`;
