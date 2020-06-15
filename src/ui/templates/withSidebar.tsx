import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import media from 'styled-media-query';
import { User, Home } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Burger, Menu } from 'ui/modules/Burger';

export interface SidebarProps {
  SidebarBox: JSX.Element;
  HeaderBox: JSX.Element;
  SearchBox: JSX.Element;
}

export const WithSidebar: React.FC<SidebarProps> = ({
  SidebarBox,
  HeaderBox,
  SearchBox,
  children
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Page>
      <SearchBar>{SearchBox}</SearchBar>
      <Header>{HeaderBox}</Header>
      <Wrapper>
        <Panel className="panel_sidebar">
          <Sidebar>{SidebarBox}</Sidebar>
        </Panel>
        <Panel>
          <Content>{children}</Content>
        </Panel>
      </Wrapper>
      <Footer>
        <FootWrapper>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} Side={SidebarBox} />
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

const Panel = styled(Box)`
  display: grid;
  grid-template-rows: auto;
  height: calc(100vh - 58px);
  &.panel_sidebar {
    ${media.lessThan('medium')`
    display: none;
  `}
  }
  ${media.lessThan('medium')`
  height: calc(100vh - 75px);
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
  grid-template-columns: 240px 1fr;
  column-gap: 8px;
  height: calc(100vh - 66px);
  `}
  ${media.lessThan('medium')`
    height: calc(100vh - 150px);
    overflow: overlay;
    grid-template-rows: auto;
    grid-template-columns:1fr;
    column-gap: 0px;
    margin: 0;
  `}
  ${media.lessThan('small')`
    grid-template-rows: auto;
    grid-template-columns:1fr;
    column-gap: 0px;
    margin: 0;
  `}
`;

const Sidebar = styled(Box)`
  overflow: auto;
`;

const Content = styled(Box)`
  overflow: auto;
`;

const Header = styled(Box)`
  ${media.lessThan('medium')`
    display: none;
  `}
`;
