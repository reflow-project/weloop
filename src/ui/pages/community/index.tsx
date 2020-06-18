import { Trans } from '@lingui/macro';
import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import media from 'styled-media-query';

import {
  HomeBox,
  List,
  MainContainer,
  MenuList,
  ObjectsList,
  Wrapper,
  WrapperCont
} from 'ui/elements/Layout';
// import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import Modal from 'ui/modules/Modal';
import { SidePanel } from 'ui/modules/SidePanel';
import SocialText from 'ui/modules/SocialText';
import styled from 'ui/themes/styled';

export interface Props {
  isJoined: boolean;
  ActivitiesBox: JSX.Element;
  FollowersBoxes: JSX.Element;
  CollectionsBox: JSX.Element;
  HeroCommunityBox: JSX.Element;
  ThreadsBox: JSX.Element;
  communityName: string;
  basePath: string;
  newThreadFormik: null | FormikHook<{ text: string }>;
  CreateCollectionPanel: React.ComponentType<{ done(): any }>;
  loadMoreActivities: FormikHook | null;
  loadMoreCollections: FormikHook | null;
  loadMoreThreads: FormikHook | null;
}

export const Community: React.FC<Props> = ({
  ActivitiesBox,
  HeroCommunityBox,
  CollectionsBox,
  FollowersBoxes,
  basePath,
  newThreadFormik,
  isJoined,
  communityName,
  ThreadsBox,
  CreateCollectionPanel,
  loadMoreActivities,
  loadMoreCollections,
  loadMoreThreads
}) => {
  const [isOpenCreateCollection, setOpenCreateCollection] = React.useState(false);

  return (
    <MainContainer>
      {isOpenCreateCollection && (
        <Modal closeModal={() => setOpenCreateCollection(false)}>
          <CreateCollectionPanel done={() => setOpenCreateCollection(false)} />
        </Modal>
      )}
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {/* <Header name={communityName} /> */}
            <Switch>
              <Route exact path={`${basePath}/timeline`}>
                <>
                  {HeroCommunityBox}
                  <Menu basePath={basePath} />
                  <List mt={2}>{ActivitiesBox}</List>
                  {loadMoreActivities && <LoadMore LoadMoreFormik={loadMoreActivities} />}
                </>
              </Route>
              <Route exact path={`${basePath}`}>
                <>
                  {HeroCommunityBox}
                  <Menu basePath={basePath} />
                  <Title px={3} mt={2}>
                    <Text sx={{ flex: 1 }} variant="suptitle">
                      <Trans>All collections</Trans>
                    </Text>
                    {isJoined && (
                      <Button variant="outline" onClick={() => setOpenCreateCollection(true)}>
                        <Trans>Create a new collection</Trans>
                      </Button>
                    )}
                  </Title>
                  <ObjectsList>
                    <CollectionsBoxes>{CollectionsBox}</CollectionsBoxes>
                  </ObjectsList>
                  {loadMoreCollections && <LoadMore LoadMoreFormik={loadMoreCollections} />}
                </>
              </Route>
              <Route exact path={`${basePath}/discussions`}>
                <>
                  {HeroCommunityBox}
                  <Menu basePath={basePath} />
                  <WrapSocialText p={3} mb={2}>
                    {newThreadFormik && (
                      <SocialText
                        placeholder="Start a new thread..."
                        submit={text => {
                          newThreadFormik.setValues({ text });
                          newThreadFormik.submitForm();
                        }}
                      />
                    )}
                  </WrapSocialText>
                  <Title px={3} mt={2}>
                    <Text variant="suptitle">All discussions</Text>
                  </Title>
                  <ObjectsList>{ThreadsBox}</ObjectsList>
                  {loadMoreThreads && <LoadMore LoadMoreFormik={loadMoreThreads} />}
                </>
              </Route>
              <Route path={`${basePath}/members`}>
                <>
                  {HeroCommunityBox}
                  <Menu basePath={basePath} />
                  <ObjectsList>{FollowersBoxes}</ObjectsList>
                </>
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanel />
    </MainContainer>
  );
};

const CollectionsBoxes = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin: 16px;
  margin-bottom: 24px !important;
  ${media.lessThan('medium')`
  grid-template-columns: 1fr;
  > div {
    margin: 0 auto;
    width: 300px;
  }
  `}
`;

// const FollowersMenu = ({ basePath }: { basePath: string }) => (
//   <MenuList m={2}>
//     <NavLink exact to={`${basePath}`}>
//       Members
//     </NavLink>
//   </MenuList>
// );

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuList p={3} pt={0}>
    <NavLink to={`${basePath}/timeline`}>Recent activity</NavLink>
    <NavLink exact to={`${basePath}`}>
      Collections
    </NavLink>
    <NavLink to={`${basePath}/discussions`}>Discussions</NavLink>
    <NavLink to={`${basePath}/members`}>Members</NavLink>
  </MenuList>
);

const Title = styled(Flex)`
  background: ${props => props.theme.colors.appInverse};
  height: 50px;
  line-height: 50px;
  align-items: center;
  border-bottom: ${props => props.theme.colors.border};
  button {
    width: 190px;
    font-size: 14px;
    text-transform: inherit;
    letter-spacing: 0;
    padding: 0;
    height: 32px;
    line-height: 32px;
    background: #ffe5cd;
    color: #ca6a11;
    border: none;
  }
`;

// const Container = styled(Box)`
//   background: ${props => props.theme.colors.appInverse};
// `;

const WrapSocialText = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;

export default Community;
