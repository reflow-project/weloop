import { Trans } from '@lingui/macro';
import { ellipsis } from 'polished';
import * as React from 'react';
import { Link } from 'react-feather';
import { Route, Switch } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
// import { Header } from 'ui/modules/Header';
import { FormikHook } from 'ui/@types/types';
import {
  CollectionsWrapper,
  HomeBox,
  List,
  MainContainer,
  MenuList,
  MenuItem,
  ObjectsList,
  WrapperCont,
  ButtonIcon
} from 'ui/elements/Layout';
import { Nav, NavItem, Panel, PanelTitle, WrapperPanel } from 'ui/elements/Panel';
import { LoadMore } from 'ui/modules/Loadmore';
import styled from 'ui/themes/styled';
import { ReactElement } from 'react';

export interface Props {
  ActivityBoxes: ReactElement;
  LikesBoxes: ReactElement; // FIX ME remove ? after add LikesBoxes at HOC
  HeroUserBox: ReactElement;
  CommunityBoxes: ReactElement;
  CollectionsBoxes: ReactElement;
  UserBoxes: ReactElement;
  InventoryBoxes: ReactElement;
  basePath: string;
  totalCommunities: string;
  totalActivities: string;
  totalCollections: string;
  totalUsers: string;
  userLink: string;
  userName: string;
  loadMoreActivities: FormikHook | null;
  loadMoreLikes: FormikHook | null;
  loadMoreCommunities: FormikHook | null;
  loadMoreCollections: FormikHook | null;
  loadMoreFollowing: FormikHook | null;
}

const UsersIcon = require('react-feather/dist/icons/users').default;
const StartedIcon = require('react-feather/dist/icons/pie-chart').default;
const ActivityIcon = require('react-feather/dist/icons/activity').default;
const PackageIcon = require('react-feather/dist/icons/package').default;

export const User: React.FC<Props> = ({
  HeroUserBox,
  LikesBoxes,
  ActivityBoxes,
  CommunityBoxes,
  CollectionsBoxes,
  InventoryBoxes,
  basePath,
  totalCommunities,
  userLink,
  totalCollections,
  totalUsers,
  loadMoreActivities,
  loadMoreLikes,
  loadMoreCommunities,
  loadMoreCollections
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Box mb={2}>
            {/* <Header name={userName} /> */}
            {HeroUserBox}
            <Menu
              basePath={basePath}
              totalCommunities={totalCommunities}
              totalCollections={totalCollections}
              totalUsers={totalUsers}
            />
          </Box>
          <Switch>
            <Route path={`${basePath}/inventory`}>{InventoryBoxes}</Route>
            <Route exact path={`${basePath}/`}>
              <List>{ActivityBoxes}</List>
              {loadMoreActivities && <LoadMore LoadMoreFormik={loadMoreActivities} />}
            </Route>
            <Route exact path={`${basePath}/starred`}>
              <List>{LikesBoxes}</List>
              {loadMoreLikes && <LoadMore LoadMoreFormik={loadMoreLikes} />}
            </Route>
            <Route path={`${basePath}/communities`}>
              <ObjectsList>{CommunityBoxes}</ObjectsList>
              {loadMoreCommunities && <LoadMore LoadMoreFormik={loadMoreCommunities} />}
            </Route>
            <Route path={`${basePath}/collections`}>
              <ObjectsList>
                <CollectionsWrapper>{CollectionsBoxes}</CollectionsWrapper>
              </ObjectsList>
              {loadMoreCollections && <LoadMore LoadMoreFormik={loadMoreCollections} />}
            </Route>
            {/* <Route path={`${basePath}/following`}>
                {UserBoxes}
                {loadMoreFollowing ? (
                  <LoadMore LoadMoreFormik={loadMoreFollowing} />
                ) : null}{' '} */}
            {/* FIX ME after add LoadMoreFormik */}
            {/* </Route> */}
          </Switch>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        {userLink.length > 0 ? (
          <Panel>
            <PanelTitle fontWeight={'bold'}>Relevant links</PanelTitle>
            <Nav>
              <NavItem>
                <Flex>
                  <Link size={20} />{' '}
                  <a href={userLink} target="_blank" rel="noopener noreferrer">
                    <TextLink ml={2} flex={1}>
                      {userLink}
                    </TextLink>
                  </a>
                </Flex>
              </NavItem>
            </Nav>
          </Panel>
        ) : null}
      </WrapperPanel>
    </MainContainer>
  );
};

const Menu = ({
  basePath,
  totalCommunities
}: {
  basePath: string;
  totalCommunities: string;
  totalCollections: string;
  totalUsers: string;
}) => {
  return (
    <MenuList p={3} pt={3}>
      <MenuItem exact to={`${basePath}`}>
        <div className="text-holder">
          <Trans>Recent activity</Trans>
        </div>
        <ButtonIcon className="icon-holder">
          <ActivityIcon size="24" />
        </ButtonIcon>
      </MenuItem>
      <MenuItem exact to={`${basePath}/starred`}>
        <div className="text-holder">
          <Trans>Starred</Trans>
        </div>
        <ButtonIcon className="icon-holder">
          <StartedIcon size="24" />
        </ButtonIcon>
      </MenuItem>
      <MenuItem exact to={`${basePath}/communities`}>
        <div className="text-holder">
          <Trans>{totalCommunities} communities</Trans>
        </div>
        <ButtonIcon className="icon-holder">
          <UsersIcon size="24" />
        </ButtonIcon>
      </MenuItem>
      <MenuItem exact to={`${basePath}/inventory`}>
        <div className="text-holder">
          <Trans>Inventory</Trans>
        </div>
        <ButtonIcon className="icon-holder">
          <PackageIcon size="24" />
        </ButtonIcon>
      </MenuItem>
    </MenuList>
  );
};

const TextLink = styled(Text)`
  ${ellipsis('250px')};
  color: ${props => props.theme.colors.dark};
  &:hover {
    text-decoration: underline;
  }
`;
