import { Trans } from '@lingui/macro';
import React, { SFC, ReactElement } from 'react';
import { Box } from 'rebass/styled-components';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';
import { Nav, Panel, PanelTitle, WrapperPanel } from 'ui/elements/Panel';
import { Header } from 'ui/modules/Header';
import styled from 'ui/themes/styled';

export interface Props {
  previews: ReactElement[];
  Pagination: ReactElement;
  Filter: ReactElement;
}

export const Search: SFC<Props> = ({ previews, Pagination, Filter }) => {
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
                  {previews.map(El => (
                    <Box m={2} key={El.key}>
                      {El}
                    </Box>
                  ))}
                </Box>
              </Wrapper>
              <Box m={2}>{Pagination}</Box>
            </WrapperCont>
          </SearchWrapper>
        </HomeBox>
        <WrapperPanel>
          <Panel>
            <PanelTitle fontWeight={'bold'}>
              <Trans>Filters</Trans>
            </PanelTitle>
            <Nav>
              <NavWrapper>{Filter}</NavWrapper>
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
  max-width: 600px;
`;
