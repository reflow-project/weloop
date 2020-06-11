import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Box } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';
import Button from 'ui/elements/Button';
import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import {
  Wrapper,
  WrapperCont,
  // List,
  MainContainer,
  HomeBox,
  MenuList,
  ObjectsList
} from 'ui/elements/Layout';
import { SidePanel } from 'ui/modules/SidePanel';
import { Helmet } from 'react-helmet';

export interface Props {
  ActivitiesBox: JSX.Element;
  ResourcesBox: JSX.Element;
  HeroCollectionBox: JSX.Element;
  FollowersBoxes: JSX.Element;
  ShareLinkBox: React.ComponentType<{ done(): any }>;
  EditCollectionPanel: React.ComponentType<{ done(): any }>;
  UploadResourcePanel: React.ComponentType<{ done(): any }>;
  basePath: string;
  collectionName: string;
  loadMoreActivities: FormikHook | null;
  loadMoreResources: FormikHook | null;
  loadMoreFollowers: FormikHook | null;
  isCommunityMember: boolean;
}

export const Collection: React.FC<Props> = ({
  HeroCollectionBox,
  ShareLinkBox,
  EditCollectionPanel,
  UploadResourcePanel,
  ActivitiesBox,
  FollowersBoxes,
  ResourcesBox,
  basePath,
  collectionName,
  loadMoreActivities,
  loadMoreResources,
  loadMoreFollowers,
  isCommunityMember
}) => {
  const [isOpenEditCollection, setOpenEditCollection] = React.useState(false);
  const [isShareLinkOpen, setOpenShareLink] = React.useState(false);
  const [isUploadOpen, setUploadOpen] = React.useState(false);
  return (
    <MainContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoodleNet - Collection</title>
      </Helmet>
      {isOpenEditCollection && (
        <Modal closeModal={() => setOpenShareLink(false)}>
          <EditCollectionPanel done={() => setOpenEditCollection(false)} />
        </Modal>
      )}
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Header name={collectionName} />
            <Switch>
              <Route path={`${basePath}/followers`}>
                <White>
                  <FollowersMenu basePath={`${basePath}/followers`} />
                  <ObjectsList>{FollowersBoxes}</ObjectsList>
                  {loadMoreFollowers && <LoadMore LoadMoreFormik={loadMoreFollowers} />}
                </White>
              </Route>
              <Route exact path={`${basePath}/`}>
                <>
                  {HeroCollectionBox}
                  <Menu basePath={basePath} />
                  {isCommunityMember ? (
                    <WrapButton p={3}>
                      <Button
                        mr={2}
                        onClick={() => {
                          setOpenShareLink(true);
                          setUploadOpen(false);
                        }}
                        variant="outline"
                      >
                        <Trans>Share link</Trans>
                      </Button>
                      <Button
                        onClick={() => {
                          setUploadOpen(true);
                          setOpenShareLink(false);
                        }}
                        variant="outline"
                      >
                        <Trans>Add new resource</Trans>
                      </Button>
                    </WrapButton>
                  ) : null}
                  {isShareLinkOpen && (
                    // <h1>jhhhh</h1>
                    <ShareLinkBox done={() => setOpenShareLink(false)} />
                  )}
                  {isUploadOpen && <UploadResourcePanel done={() => setUploadOpen(false)} />}
                  <ObjectsList>{ResourcesBox}</ObjectsList>
                  {loadMoreResources && <LoadMore LoadMoreFormik={loadMoreResources} />}
                </>
              </Route>
              {/* <Route exact path={`${basePath}/`}>
                <>
                  {HeroCollectionBox}
                  <Menu basePath={basePath} />
                  <List>{ActivitiesBox}</List>
                  {loadMoreActivities && (
                    <LoadMore LoadMoreFormik={loadMoreActivities} />
                  )}
                </>
              </Route> */}
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanel />
    </MainContainer>
  );
};
export default Collection;

const White = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;

const FollowersMenu = ({ basePath }: { basePath: string }) => (
  <MenuList m={2} p={2} pt={0}>
    <NavLink exact to={`${basePath}`}>
      Followers
    </NavLink>
  </MenuList>
);

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuList p={3} pt={3}>
    {/* <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink> */}
    <NavLink exact to={`${basePath}/`}>
      <Trans>Resources</Trans>
    </NavLink>
  </MenuList>
);

const WrapButton = styled(Flex)`
  background: ${props => props.theme.colors.appInverse};
  button {
    width: 100%;
    height: 50px;
  }
`;
