import { Trans } from '@lingui/macro';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { Plus } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { EconomicResourcesFilteredQuery } from '../../../HOC/pages/inventory/InventoryPage.generated';
import { InventoryWrapper, InfoWrapper, ImageWrapper } from '../../../ui/pages/resource';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import { typography } from '../../../mn-constants';
import styled from '../../themes/styled';
import { ButtonWrapper, CreateItemButton } from '../community';

export interface Props {
  done: () => void;
  inventory: EconomicResourcesFilteredQuery['economicResourcesFiltered'];
}

export const Inventory: React.FC<Props> = ({ inventory, done }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <ButtonWrapper>
            <CreateItemButton variant="primary" onClick={done}>
              <Plus size={16} color={'#fff'} />
              <Text variant="button">
                <Trans>Create a new resource</Trans>
              </Text>
            </CreateItemButton>
          </ButtonWrapper>
          <Wrapper>
            {(inventory as any).map(({ id, name, note, image }: EconomicResource) => (
              <WrapperLink to={`/inventory/${id}`} key={id}>
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
