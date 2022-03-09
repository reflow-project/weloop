import { LocaleContext } from 'context/global/localizationCtx';
import { logo_small_url, prompt_signin } from 'mn-constants';
import { darken, ellipsis } from 'polished';
import React, { ReactElement, useState } from 'react';
import { ChevronDown, ChevronLeft } from 'react-feather';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { Input } from '@rebass/forms';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import { DropdownSidebar, CreateDropdown } from './dropdown';

export interface Props {
  user: {
    icon: string;
    name: string;
    link: string;
  } | null;
  Search: ReactElement;
  toggleSideBar(): unknown;
  createIntent(): unknown;
  createResource: any;
  isOpenDropdown: boolean;
  toggleDropdown(): unknown;
}

export const MainHeader: React.FC<Props> = props => {
  const history = useHistory();
  const { i18n } = React.useContext(LocaleContext);
  const [isCreateOpen, toggleCreate] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Left>
          <Icon onClick={() => history.goBack()}>
            <ChevronLeft size="20" />
          </Icon>
          <HomeLink to={props.user ? '/' : '/discover'}>
            <Avatar size="s" src={logo_small_url} />
          </HomeLink>
          <Search>
            <Input />
            {props.Search}
          </Search>
        </Left>
        <CreateNav>
          {props.user && (
            <NavItem sx={{ position: 'relative' }} alignItems="center" onClick={toggleCreate}>
              <HeaderName ml={2} variant="link">
                Create
              </HeaderName>
              <Right>
                <ChevronDown size="20" />
              </Right>
              {isCreateOpen && (
                <CreateDropdown
                  createResource={props.createResource}
                  createIntent={props.createIntent}
                  toggleDropdown={() => {
                    toggleCreate(!isCreateOpen);
                  }}
                />
              )}
            </NavItem>
          )}
        </CreateNav>
        <Header alignItems={'center'}>
          {props.user ? (
            <NavItem
              sx={{ position: 'relative' }}
              alignItems="center"
              onClick={props.toggleDropdown}
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
              {props.isOpenDropdown && (
                <DropdownSidebar userLink={props.user.link} toggleDropdown={props.toggleDropdown} />
              )}
            </NavItem>
          ) : (
            <Box>
              <Signin>
                <Link to="/">
                  <Text variant="link">{i18n._(prompt_signin)}</Text>
                </Link>
              </Signin>
            </Box>
          )}
        </Header>
      </Container>
    </HeaderWrapper>
  );
};

const Container = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 120px 200px;
`;

const Search = styled(Box)`
  display: flex;
  margin-top: 7px;
  input {
    width: 100%;
    border-radius: 4px;
    max-width: 500px;
    height: 36px;
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
  display: flex;
  flex: 0 0 200px;
  order: 2;
  justify-content: flex-end;
  align-items: center;
  img {
    min-width: 36px;
    height: 36px;
    border-radius: 36px;
  }
`;

const CreateNav = styled(Box)`
  cursor: pointer;
  display: flex;
  flex: 0 0 120px;
  order: 2;
  justify-content: center;
  align-items: center;
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
  }
  div {
    text-decoration: none;
    color: ${props => props.theme.colors.lighter};
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
  grid-template-columns: auto auto 1fr auto;
  column-gap: 8px;
`;

const HeaderWrapper = styled(Box)`
  border-bottom: ${props => props.theme.colors.border};
  height: 50px;
  background: ${props => props.theme.colors.appInverse};
`;

const HomeLink = styled(Link)`
  margin-top: 9px;
  cursor: pointer;
`;
