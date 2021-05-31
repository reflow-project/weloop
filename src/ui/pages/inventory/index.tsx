import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { EconomicResourcesFilteredQuery } from '../../../HOC/pages/inventory/InventoryPage.generated';
import { InventoryWrapper, InfoWrapper, ImageWrapper } from '../../../ui/pages/resource';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import { typography } from '../../../mn-constants';
import styled from '../../themes/styled';

export interface Props {
  inventory: EconomicResourcesFilteredQuery['economicResourcesFiltered'];
}

export const Inventory: React.FC<Props> = ({ inventory }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {(inventory as any).map(({ id, name, note, image }: EconomicResource) => (
              <WrapperLink to={`/inventory/${id}`}>
                <InventoryWrapper key={id}>
                  <ImageWrapper>{image && <img src={image} alt={name} />}</ImageWrapper>
                  <InfoWrapper>
                    <Title variant="subhead">{name}</Title>
                    <Box mr={1}>
                      <Text variant="text">{note}</Text>
                    </Box>
                  </InfoWrapper>
                </InventoryWrapper>
              </WrapperLink>
            ))}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

export default Inventory;

const WrapperLink = styled(NavLink)`
  text-decoration: none !important;
  * {
    text-decoration: none !important;
  }
`;

const Title = styled(Text)`
  font-size: ${typography.size.m1};
  color: ${props => props.theme.colors.dark};
  text-decoration: none !important;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline !important;
  }
`;
