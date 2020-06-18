import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import media from 'styled-media-query';
import { Burger, Menu } from 'ui/modules/Burger';
import { NavLink } from 'react-router-dom';
import { Home, User } from 'react-feather';

export interface Props {
  HeaderBox: JSX.Element;
}
export const WithoutSidebar: React.FC<Props> = ({ children, HeaderBox }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Page>
      <SearchBar></SearchBar>
      <Header>{HeaderBox}</Header>
      <Wrapper>
        <CenteredWrapper>{children}</CenteredWrapper>
      </Wrapper>
      <Footer>
        <FootWrapper>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} Side={<></>} />
        </FootWrapper>
        <FootWrapper>
          <NavLink to="/">
            <Home size="18" />
          </NavLink>
        </FootWrapper>
        <FootWrapper>
          <User size="18" />
        </FootWrapper>
      </Footer>
    </Page>
  );
};

const Header = styled(Box)`
  ${media.lessThan('medium')`
    display: none;
  `}
`;

const SearchBar = styled(Box)`
height: 75px;
line-height: 75px;
text-align: center;
background: ${props => props.theme.colors.appInverse}
border-bottom: ${props => props.theme.colors.border};
input {
  width: 100%;
  font-size: 13px;
  border-radius: 4px;
  max-width: 500px;
  height: 40px;
  margin: 0;
  border: 0;
  background: ${props => props.theme.colors.app};
}
.ais-SearchBox {
  border: 0;
  height: auto;
  margin: 0;
  width: auto;
  margin: 0 32px;
}
${media.greaterThan('medium')`
    display: none;
  `}
`;

const FootWrapper = styled(Box)`
  height: 75px;
  line-height: 75px;
  text-align: center;
`;

const Footer = styled(Box)`
  background: ${props => props.theme.colors.appInverse}
  display: grid;
  border-top: ${props => props.theme.colors.border};
  grid-template-columns: 1fr 1fr 1fr;
  ${media.greaterThan('medium')`
    display: none;
  `}

`;

const Page = styled(Box)`
  height: 100vh;
  display: grid;
  ${media.greaterThan('large')`
    grid-template-rows: 50px auto;
    row-gap: 8px;
  `}
  ${media.lessThan('medium')`
    grid-template-rows: 75px 1fr 75px;
  `}
`;

const Wrapper = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  display: grid;
  
  ${media.greaterThan('medium')`
  grid-template-rows: auto;
  grid-template-columns:  1fr;
  height: calc(100vh - 66px);
  `}
  ${media.lessThan('medium')`
  height: calc(100vh - 150px);
  overflow: overlay;
  grid-template-rows: auto;
  grid-template-columns:1fr;
  column-gap: 0px;
  margin: 0;
  margin: 0 8px;
  `}
  ${media.lessThan('small')`
    grid-template-rows: auto;
    grid-template-columns:1fr;
    column-gap: 0px;
    margin: 0;
    margin: 0 8px;
  `}
`;

const CenteredWrapper = styled(Box)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-top: 16px;
`;
