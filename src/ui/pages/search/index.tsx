import React, { SFC } from 'react';
import { Box } from 'rebass/styled-components';
import {
  HomeBox,
  MainContainer,
  Wrapper,
  WrapperCont
} from 'ui/elements/Layout';
import { WrapperPanel } from 'ui/elements/Panel';
import { ComponentBag } from 'ui/lib/componentBag';
import { Header } from 'ui/modules/Header';
import styled from 'ui/themes/styled';

export interface Props {
  previews: ComponentBag[];
}

export const Search: SFC<Props> = ({ previews }) => {
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
                    <Box m={2}>
                      <bag.Comp {...bag.props} key={bag.key} />
                    </Box>
                  ))}
                </Box>
              </Wrapper>
            </WrapperCont>
          </SearchWrapper>
        </HomeBox>
        <WrapperPanel />
      </MainContainer>
    </>
  );
};

const SearchWrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;
