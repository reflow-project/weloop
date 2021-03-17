import { Trans } from '@lingui/macro';
import { LocaleContext } from 'context/global/localizationCtx';
import { logo_small_url, my_timeline } from 'mn-constants';
import { ellipsis } from 'polished';
import * as React from 'react';
import { Globe } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
// import Dropdown from "./dropdown";
import Avatar from 'ui/elements/Avatar';
// import Loader from "../../components/elements/Loader/Loader";
import styled from '../../themes/styled';
import { LoadMore } from '../Loadmore';

export enum Status {
  Loading,
  Loaded
}

const SidebarComponent = styled(Flex)`
  width: 240px;
  // ${media.lessThan('medium')`
  //   width: 50px;
  // `}
`;

const InternalWrapper = styled(Box)<{ isOpen: boolean }>`
  transition: 'all 250ms ease';
  flex: 1;
`;

const SidebarFixed = styled(Box)`
  justify-content: space-between;
  height: 100%;
  display: flex;
  ${media.lessThan('1280px')`
width: auto;
`} ${media.lessThan('860px')`
    position: relative;
width: 100%
`};
`;

const SidebarOverflow = styled(Box)`
  overflow-y: auto;
  flex: 1;
`;

// const Header = styled(Box)`
//   cursor: pointer;
//   img {
//     min-width: 36px;
//     height: 36px;
//     border-radius: 36px;
//   }
//   input {
//     margin: 0 8px !important;
//     border-radius: 100px;/1
//     border-width: 1px;
//     ${media.lessThan('1280px')`
// display: none;
//     `};
//   }
// `;
const Nav = styled(Box)`
  a {
    text-decoration: none;
  }
`;

const CommunityLink = styled(NavLink)`
  margin-bottom: 0px;
  img {
    width: 36px;
    height: 36px;
  }
  &.active {
    > div {
      background: ${props => props.theme.colors.primary};
    }
    div {
      color: ${props => props.theme.colors.appInverse} !important;
    }
    position: relative;
  }
`;

const SidebarLink = styled(NavLink)`
  position: relative;
  color: inherit;
  img {
    width: 36px;
    height: 36px;
  }
  &.active {
    div {
      color: ${props => props.theme.colors.primary};
      position: relative;
    }
  }
  div {
    color: ${props => (props.isActive ? props.theme.colors.primary : props.theme.colors.darker)};
  }
`;

const NavItem = styled(Flex)`
  border-radius: 4px;
  padding: 0px 4px;
  &:hover {
    background: ${props => props.theme.colors.medium};
  }
  ${media.lessThan('1280px')`
img {
    margin-right: 0;
}
`};
`;

const ItemTitle = styled(Text)`
  height: 50px;
  line-height: 50px;
  font-weight: 600;
  color: ${props => props.theme.colors.darker};
  a:focus,
  a:active {
    color: inherit;
  }
  ${ellipsis('220px')};
`;

// const Right = styled(Box)`
// color: ${props => props.theme.colors.medium};
// //${media.lessThan('1280px')`
// //display: none;
// //`};
// `;

const ItemTitleDir = styled(ItemTitle)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;

// const HeaderName = styled(Text)`
//   flex: 1;
//   ${ellipsis('180px')};
// `;

export interface CommunityPreview {
  link: string;
  name: string;
  icon: string;
}

interface SidebarLoaded {
  status: Status.Loaded;
  discoverPath: string;
  homePath: string;
  isSidebarOpen: boolean;
  communities: CommunityPreview[];
  LoadMoreFormik: FormikHook | null;
}

export interface SidebarLoading {
  status: Status.Loading;
  isSidebarOpen: boolean;
}

export type Props = SidebarLoaded | SidebarLoading;

export const Sidebar: React.FC<Props> = props => {
  const { i18n } = React.useContext(LocaleContext);

  //  console.log('isSidebarOpen ' + props.isSidebarOpen );
  return (
    <>
      {props.isSidebarOpen ? (
        <SidebarComponent className="sidebar">
          <InternalWrapper>
            <SidebarFixed>
              {props.status === Status.Loading ? (
                <Text>Loading</Text>
              ) : (
                <SidebarOverflow>
                  <>
                    <Nav>
                      <SidebarLink exact to={props.discoverPath}>
                        <NavItem alignItems={'center'}>
                          <Box height="50px">
                            <Globe size={36} strokeWidth="1" />
                          </Box>
                          <ItemTitleDir variant="link">
                            <Trans>Discover</Trans>
                          </ItemTitleDir>
                        </NavItem>
                      </SidebarLink>
                      <SidebarLink exact to={props.homePath}>
                        <NavItem alignItems={'center'}>
                          <Avatar size="s" src={logo_small_url} />
                          <ItemTitleDir variant="link">{i18n._(my_timeline)}</ItemTitleDir>
                        </NavItem>
                      </SidebarLink>
                    </Nav>
                    <Nav>
                      {props.communities.map((community: CommunityPreview, i) => (
                        <CommunityLink exact key={community.link} to={community.link}>
                          <NavItem alignItems={'center'} mb={2}>
                            <Avatar
                              size="s"
                              initials={community.name.substr(0, 2)}
                              src={community.icon}
                            />
                            <ItemTitleDir variant="link">{community.name}</ItemTitleDir>
                          </NavItem>
                        </CommunityLink>
                      ))}
                      {props.LoadMoreFormik && <LoadMore LoadMoreFormik={props.LoadMoreFormik} />}
                    </Nav>
                  </>
                </SidebarOverflow>
              )}
            </SidebarFixed>
          </InternalWrapper>
        </SidebarComponent>
      ) : null}
    </>
  );
};

export default Sidebar;
