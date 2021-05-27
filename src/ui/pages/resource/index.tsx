import { ApolloError } from 'apollo-client';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import styled from '../../themes/styled';
const MapIcon = require('react-feather/dist/icons/map').default;
const BoxIcon = require('react-feather/dist/icons/box').default;
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
            <InventoryWrapper key={resource && resource.id}>
              <ImageWrapper>
                {resource && resource.image && (
                  <img src={resource && resource.image} alt={resource && resource.name} />
                )}
              </ImageWrapper>
              <InfoWrapper>
                <Box mr={1} mb={2}>
                  <Title variant="subhead">{resource && resource.name}</Title>
                </Box>
                <Box mr={1}>
                  <Text variant="text">{resource && resource.note}</Text>
                </Box>
                <Box mr={1}>
                  <Text variant="text">
                    <Icon>
                      <MapIcon size="16" />
                    </Icon>
                    <b>Location:</b>
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
                    <b>Quantity in stock:</b>
                    {`${resource?.onhandQuantity?.hasNumericalValue} ${resource?.onhandQuantity?.hasUnit.label}`}
                  </Text>
                </Box>
              </InfoWrapper>
            </InventoryWrapper>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

export default ResourceItem;

const Title = styled(Text)`
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

export const InfoWrapper = styled('div')`
  flex-basis: calc(100% - 160px);
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
