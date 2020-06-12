import { Trans } from '@lingui/macro';
import React, { SFC } from 'react';
import { Box } from 'rebass/styled-components';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import { Nav, Panel, PanelTitle, WrapperPanel } from 'ui/elements/Panel';
import { ComponentBag } from 'ui/lib/componentBag';
import { Header } from 'ui/modules/Header';
import styled from 'ui/themes/styled';

export interface Props {
  previews: ComponentBag[];
  pagination: ComponentBag;
  filter: ComponentBag;
}

export const Search: SFC<Props> = ({ previews, pagination, filter }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.1.1/themes/reset-min.css"
      />
      <MainContainer>
        <HomeBox>
          <SearchWrapper>
            <WrapperCont>
              <Wrapper>
                <Header name="Search results" />
                <Box>
                  {previews.map(bag => (
                    <Box m={2} key={bag.key}>
                      <bag.Comp {...bag.props} />
                    </Box>
                  ))}
                </Box>
              </Wrapper>
              <Box m={2}>
                <pagination.Comp {...pagination.props} />
              </Box>
            </WrapperCont>
          </SearchWrapper>
        </HomeBox>
        <WrapperPanel>
          <Panel>
            <PanelTitle fontSize={0} fontWeight={'bold'}>
              <Trans>Filters</Trans>
            </PanelTitle>
            <Nav>
              <NavWrapper>
                <filter.Comp {...filter.props} />
              </NavWrapper>
            </Nav>
          </Panel>
        </WrapperPanel>
      </MainContainer>
    </>
  );
};

const NavWrapper = styled(Box)`
  li {
    height: 40px;
    line-height: 40px;
    input {
      margin-right: 8px;
    }
  }
`;

const SearchWrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  width: 600px;
`;
