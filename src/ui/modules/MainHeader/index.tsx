import React, { ComponentType } from 'react';
import styled from 'ui/themes/styled';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ChevronLeft, ChevronDown } from 'react-feather';
import { Flex, Text, Box } from 'rebass/styled-components';
// import {Input} from '@rebass/forms'
import Avatar from 'ui/elements/Avatar';
// import Avatar from 'ui/elements/Avatar';
import { DropdownSidebar } from './dropdown';
import media from 'styled-media-query';
import { ellipsis, darken } from 'polished';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/react';
// const MnetLogo = require('static/img/logo-icon.png');
import { prompt_signin, logo_small_url } from 'mn-constants';

export interface Props {
  user: null | {
    icon: string;
    name: string;
    link: string;
    isAdmin: boolean;
    logout(): unknown;
  };
  Search: JSX.Element;
  toggleSideBar(): unknown;
  CreateCommunityModal: ComponentType<{ done(): unknown }>;
}

export const MainHeader: React.FC<Props> = props => {
  const history = useHistory();
  const [isOpenDropdown, setOpenDropdown] = React.useState(false);
  const [isOpenCreateCommunity, setOpenCreateCommunity] = React.useState(false);
  const openMenu = React.useCallback(() => setOpenDropdown(true), []);
  const openCreateCommunity = React.useCallback(
    () => setOpenCreateCommunity(true),
    []
  );
  const closeCreateCommunity = React.useCallback(
    () => setOpenCreateCommunity(false),
    []
  );
  return (
    <HeaderWrapper>
      <Container>
        <Left>
          <Icon onClick={() => history.goBack()}>
            <ChevronLeft size="20" />
          </Icon>
          {/* <HamburgerIcon onClick={props.toggleSideBar}>
            <Menu size="20" />
          </HamburgerIcon> */}
          <HomeLink to={props.user ? '/' : '/discover'}>
            <Avatar size="s" src={logo_small_url} />
          </HomeLink>
          <Search>
            {/* <Input /> */}
            {props.Search}
          </Search>
        </Left>
        <Header alignItems={'center'}>
          {props.user ? (
            <NavItem
              sx={{ position: 'relative' }}
              alignItems="center"
              onClick={openMenu}
            >
              <Avatar
                size="s"
                initials={props.user.name.substring(0, 2)}
                src={props.user.icon}
                variant="avatar"
              />
              <HeaderName ml={2} variant="link">
                {props.user.name}
              </HeaderName>
              <Right ml={2}>
                <ChevronDown size="20" />
              </Right>
              {isOpenDropdown && (
                <DropdownSidebar
                  isAdmin={props.user.isAdmin}
                  createCommunity={openCreateCommunity}
                  logout={props.user.logout}
                  userLink={props.user.link}
                  setOpenDropdown={setOpenDropdown}
                />
              )}
            </NavItem>
          ) : (
            <Box>
              <Signin>
                <Link to="/">
                  <Text variant="link">
                    <Trans>{prompt_signin}</Trans>
                  </Text>
                </Link>
              </Signin>
            </Box>
          )}
        </Header>
        {isOpenCreateCommunity && (
          <props.CreateCommunityModal done={closeCreateCommunity} />
        )}
      </Container>
    </HeaderWrapper>
  );
};

const Container = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 200px;
`;
const Search = styled(Box)`
  input {
    width: 100%;
    font-size: 13px;
    border-radius: 4px;
    max-width: 500px;
    height: 32px;
    margin: 0;
    border: 0;
    background: ${props => props.theme.colors.app};
  }
`;

const Right = styled(Box)`
  color: ${props => props.theme.colors.medium};
`;

const HeaderName = styled(Text)`
  ${ellipsis('180px')};
  color: ${props => props.theme.colors.darker};
`;

const NavItem = styled(Flex)`
  border-radius: 0px;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 5px;
  float: right;
  &:hover {
    background: ${props => props.theme.colors.lighter};
  }
  ${media.lessThan('1280px')`
img {
    margin-right: 0;
}
`};
`;

const Header = styled(Box)`
  cursor: pointer;
  flex: 0 0 200px;
  order: 2;
  justify-content: flex-end;
  img {
    min-width: 36px;
    height: 36px;
    border-radius: 36px;
  }
`;
const Signin = styled(NavItem)`
  height: 30px;
  line-height: 30px;
  text-decoration: none;
  padding: 0 8px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lighter};
  border-radius: 4px;
  margin-top: 10px;
  &:hover {
    background: ${props => darken('0.1', props.theme.colors.primary)};
  }
  a {
    text-decoration: none;
    font-size: 13px;
  }
  div {
    text-decoration: none;
    color: ${props => props.theme.colors.lighter};
    font-size: 13px;
  }
`;
const Icon = styled(Box)`
  cursor: pointer;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 40px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  &:hover {
    background: ${props => props.theme.colors.lighter};
    svg {
      stroke: ${props => props.theme.colors.primary};
    }
  }
  svg {
    stroke: ${props => props.theme.colors.mediumdark};
    margin: 0 auto;
  }
`;

const Left = styled(Box)`
  display: grid;
  grid-template-columns: auto auto 1fr;
  column-gap: 8px;
`;

const HeaderWrapper = styled(Box)`
  border-bottom: ${props => props.theme.colors.border};
  height: 50px;
  background: ${props => props.theme.colors.appInverse};
`;

// const HamburgerIcon = styled(Icon)`
//   display: none;
//   min-width: 40px;
//   ${media.lessThan('medium')`
//       display: flex;
//   `};
// `;

const HomeLink = styled(Link)`
  margin-top: 9px;
  cursor: pointer;
`;
