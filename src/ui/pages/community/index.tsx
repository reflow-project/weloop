import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Box, Text } from 'rebass/styled-components';
import SocialText from 'ui/modules/SocialText';
import { Trans } from '@lingui/react';
import Button from 'ui/elements/Button';

import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';
// import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import {
  Wrapper,
  WrapperCont,
  List,
  MainContainer,
  HomeBox,
  MenuList,
  ObjectsList
} from 'ui/elements/Layout';
import { SidePanel } from 'ui/modules/SidePanel';

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
  const [isOpenCreateCollection, setOpenCreateCollection] = React.useState(
    false
  );

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
              <Route exact path={`${basePath}`}>
                <>
                  {HeroCommunityBox}
                  <Menu basePath={basePath} />
                  <List mt={2}>{ActivitiesBox}</List>
                  {loadMoreActivities && (
                    <LoadMore LoadMoreFormik={loadMoreActivities} />
                  )}
                </>
              </Route>
              <Route path={`${basePath}/collections`}>
                <>
                  {HeroCommunityBox}
                  <Menu basePath={basePath} />
                  <Title px={3} mt={2}>
                    <Text sx={{ flex: 1 }} variant="suptitle">
                      <Trans>All collections</Trans>
                    </Text>
                    {isJoined && (
                      <Button
                        variant="outline"
                        onClick={() => setOpenCreateCollection(true)}
                      >
                        <Trans>Create a new collection</Trans>
                      </Button>
                    )}
                  </Title>
                  <ObjectsList>
                    <CollectionsBoxes>{CollectionsBox}</CollectionsBoxes>
                  </ObjectsList>
                  {loadMoreCollections && (
                    <LoadMore LoadMoreFormik={loadMoreCollections} />
                  )}
                </>
              </Route>
              <Route path={`${basePath}/discussions`}>
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
                  {loadMoreThreads && (
                    <LoadMore LoadMoreFormik={loadMoreThreads} />
                  )}
                </>
              </Route>
              <Route path={`${basePath}/members`}>
                <Container>
                  <FollowersMenu basePath={`${basePath}/members`} />
                  <ObjectsList>{FollowersBoxes}</ObjectsList>
                </Container>
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
  column-gap: 8px;
  row-gap: 8px;
  margin: 8px;
  margin-bottom: 24px !important;
`;

const FollowersMenu = ({ basePath }: { basePath: string }) => (
  <MenuList m={2}>
    <NavLink exact to={`${basePath}`}>
      Members
    </NavLink>
  </MenuList>
);

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuList p={3} pt={0}>
    <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink>
    <NavLink to={`${basePath}/collections`}>Collections</NavLink>
    <NavLink to={`${basePath}/discussions`}>Discussions</NavLink>
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

const Container = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;

const WrapSocialText = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;

export default Community;
