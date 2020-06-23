import { Trans } from '@lingui/macro';
import * as React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import {
  HomeBox,
  // List,
  MainContainer,
  MenuList,
  ObjectsList,
  Wrapper,
  WrapperCont
} from 'ui/elements/Layout';
// import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import Modal from 'ui/modules/Modal';
// import { SidePanel } from 'ui/modules/SidePanel';
import styled from 'ui/themes/styled';
import { WrapperPanel } from 'ui/elements/Panel';
import { HeaderWrapper } from '../thread';
import { ReactElement } from 'react';

export interface Props {
  ActivitiesBox: ReactElement;
  ResourcesBox: ReactElement;
  HeroCollectionBox: ReactElement;
  FollowersBoxes: ReactElement;
  ShareLinkBox: React.ComponentType<{ done(): any }>;
  EditCollectionPanel: React.ComponentType<{ done(): any }>;
  UploadResourcePanel: React.ComponentType<{ done(): any }>;
  basePath: string;
  collectionName: string;
  loadMoreActivities: FormikHook | null;
  loadMoreResources: FormikHook | null;
  loadMoreFollowers: FormikHook | null;
  isCommunityMember: boolean;
  communityId: string;
  communityName: string;
  communityIcon: string;
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
  isCommunityMember,
  communityId,
  communityName,
  communityIcon
}) => {
  const [isOpenEditCollection, setOpenEditCollection] = React.useState(false);
  const [isShareLinkOpen, setOpenShareLink] = React.useState(false);
  const [isUploadOpen, setUploadOpen] = React.useState(false);
  return (
    <MainContainer>
      {isOpenEditCollection && (
        <Modal closeModal={() => setOpenShareLink(false)}>
          <EditCollectionPanel done={() => setOpenEditCollection(false)} />
        </Modal>
      )}
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {/* <Header name={collectionName} /> */}
            <Switch>
              <Route path={`${basePath}/followers`}>
                <>
                  {HeroCollectionBox}
                  <Menu basePath={basePath} />
                  <ObjectsList>{FollowersBoxes}</ObjectsList>
                  {loadMoreFollowers && <LoadMore LoadMoreFormik={loadMoreFollowers} />}
                </>
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
      <WrapperPanel>
        <TitleSection mb={2} variant="suptitle">
          <Trans>Community</Trans>
        </TitleSection>
        <HeaderWrapper id={communityId} name={communityName} icon={communityIcon} />
        {/* <SidePanel /> */}
      </WrapperPanel>
    </MainContainer>
  );
};
export default Collection;

const TitleSection = styled(Text)`
  text-transform: capitalize;
`;

// const White = styled(Box)`
//   background: ${props => props.theme.colors.appInverse};
// `;

// const FollowersMenu = ({ basePath }: { basePath: string }) => (
//   <MenuList m={2} p={2} pt={0}>
//     <NavLink exact to={`${basePath}`}>
//       Followers
//     </NavLink>
//   </MenuList>
// );

const Menu = ({ basePath }: { basePath: string }) => (
  <MenuList p={3} pt={3}>
    {/* <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink> */}
    <NavLink exact to={`${basePath}/`}>
      <Trans>Resources</Trans>
    </NavLink>
    <NavLink exact to={`${basePath}/followers`}>
      <Trans>Followers</Trans>
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
