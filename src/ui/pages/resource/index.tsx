import { ApolloError } from 'apollo-client';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import styled from '../../themes/styled';

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
            <WrapperLink to={`/resource/${resource && resource.id}`}>
              <InventoryWrapper key={resource && resource.id}>
                <ImageWrapper>
                  {resource && resource.image && (
                    <img src={resource && resource.image} alt={resource && resource.name} />
                  )}
                </ImageWrapper>
                <InfoWrapper>
                  <Title variant="subhead">{resource && resource.name}</Title>
                  <Box mr={1}>
                    <Text variant="text">{resource && resource.note}</Text>
                  </Box>
                </InfoWrapper>
              </InventoryWrapper>
            </WrapperLink>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

export default ResourceItem;

const WrapperLink = styled(NavLink)`
  text-decoration: none !important;
  * {
    text-decoration: none !important;
  }
`;

const Title = styled(Text)`
  color: ${props => props.theme.colors.dark};
  text-decoration: none !important;
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
