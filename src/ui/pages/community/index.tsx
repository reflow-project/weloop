import { Trans } from '@lingui/macro';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { ReactElement, useReducer } from 'react';
import { Plus } from 'react-feather';
import { NavLink, Route, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import { Button } from 'rebass/styled-components';
import {
  HomeBox,
  List,
  MainContainer,
  MenuList,
  ObjectsList,
  Wrapper,
  WrapperCont
} from 'ui/elements/Layout';
import { LoadMore } from 'ui/modules/Loadmore';
import SocialText from 'ui/modules/SocialText';
import styled from 'ui/themes/styled';
import { i18n } from '../../../context/global/localizationCtx';
import { useNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { CreateLocationPanelHOC } from '../../../HOC/modules/CreateLocationPanel/CreateLocationPanelHOK';
import { CreateResourcePanelHOC } from '../../../HOC/modules/CreateResourcePanel/CreateResourcePanelHOC';
import { CreateIntentPanelHOC } from 'HOC/modules/CreateIntentPanel/createIntentPanelHOC';
import Modal from '../../modules/Modal';

export interface Props {
  isJoined: boolean;
  communityId: string;
  Activities: ReactElement[];
  Members: ReactElement[];
  Intents: ReactElement[];
  Inventory: ReactElement[];
  // Collections: ReactElement[];
  HeroCommunity: ReactElement;
  Threads: ReactElement[];
  newThreadFormik: null | FormikHook<{ text: string }>;
  createCollection: () => unknown;
  loadMoreActivities: FormikHook | null;
  loadMoreCollections: FormikHook | null;
  loadMoreThreads: FormikHook | null;
  tabPaths: {
    timeline: string;
    members: string;
    discussions: string;
    // collections: string;
    intents: string;
    inventory: string;
  };
}

export const Community: React.FC<Props> = ({
  Activities,
  HeroCommunity,
  // Collections,
  Members,
  Intents,
  Inventory,
  tabPaths,
  newThreadFormik,
  isJoined,
  Threads,
  loadMoreActivities,
  communityId,
  // loadMoreCollections,
  loadMoreThreads
  // createCollection
}) => {
  const notifiedMustJoin = (msg: string) => {
    if (!isJoined) {
      toast(msg, { type: 'warning' });
      return true;
    }
    return false;
  };
  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is =>
      !notifiedMustJoin(i18n._(`You should join this community to create new resource`)) &&
      !notifiedMustLogin() &&
      !is,
    false
  );
  const [showCreateLocation, toggleShowCreateLocation] = React.useState(false);
  const [openIntent, setOpenIntent] = useReducer(
    is =>
      !notifiedMustJoin(i18n._(`You should join this community to create new intent`)) &&
      !notifiedMustLogin() &&
      !is,
    false
  );

  const CreateResourceModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      {showCreateLocation ? (
        <CreateLocationPanelHOC done={toggleShowCreateLocation} />
      ) : (
        <CreateResourcePanelHOC
          done={toggleShowCreateResource}
          toggleCreateLocation={toggleShowCreateLocation}
        />
      )}
    </Modal>
  ) : null;

  const OpenIntentModal = openIntent ? (
    <Modal
      closeModal={() => {
        setOpenIntent();
      }}
    >
      <CreateIntentPanelHOC done={setOpenIntent} communityId={communityId} />
    </Modal>
  ) : null;

  return (
    <MainContainer>
      {CreateResourceModal}
      {OpenIntentModal}
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {HeroCommunity}
            <Menu tabPaths={tabPaths} />
            <Switch>
              <Route exact path={tabPaths.intents}>
                <ButtonWrapper>
                  <CreateItemButton variant="primary" onClick={setOpenIntent}>
                    <Plus size={16} color={'#fff'} />
                    <Text variant="button">
                      <Trans>Create a new intent</Trans>
                    </Text>
                  </CreateItemButton>
                </ButtonWrapper>
                <ObjectsList>{Intents}</ObjectsList>
              </Route>
              <Route exact path={tabPaths.inventory}>
                <ButtonWrapper>
                  <CreateItemButton variant="primary" onClick={() => toggleShowCreateResource()}>
                    <Plus size={16} color={'#fff'} />
                    <Text variant="button">
                      <Trans>Create a new resource</Trans>
                    </Text>
                  </CreateItemButton>
                </ButtonWrapper>
                <ObjectsList>{Inventory}</ObjectsList>
              </Route>
              <Route exact path={tabPaths.timeline}>
                <>
                  <List mt={2}>{Activities}</List>
                  {loadMoreActivities && <LoadMore LoadMoreFormik={loadMoreActivities} />}
                </>
              </Route>
              {/*<Route exact path={tabPaths.collections}>*/}
              {/*  <>*/}
              {/*    <Title px={3} mt={2}>*/}
              {/*      <Text sx={{ flex: 1 }} variant="suptitle">*/}
              {/*        <Trans>All collections</Trans>*/}
              {/*      </Text>*/}
              {/*      <CreateCollectionButton variant="outline" onClick={createCollection}>*/}
              {/*        <Trans>Create a new collection</Trans>*/}
              {/*      </CreateCollectionButton>*/}
              {/*    </Title>*/}
              {/*    <ObjectsList>*/}
              {/*      <CollectionsBoxes>{Collections}</CollectionsBoxes>*/}
              {/*    </ObjectsList>*/}
              {/*    {loadMoreCollections && <LoadMore LoadMoreFormik={loadMoreCollections} />}*/}
              {/*  </>*/}
              {/*</Route>*/}
              <Route exact path={tabPaths.discussions}>
                <>
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
                  <ObjectsList>{Threads}</ObjectsList>
                  {loadMoreThreads && <LoadMore LoadMoreFormik={loadMoreThreads} />}
                </>
              </Route>
              <Route path={tabPaths.members}>
                <>
                  <ObjectsList>{Members}</ObjectsList>
                </>
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;
export const CreateItemButton = styled(Button)`
  padding: 0;
  height: 34px;
  text-transform: capitalize;
  line-height: 34px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-right: 20px;
  }

  & > svg {
    display: inline-block;
    margin-right: 8px;
  }
  & > div {
    color: #fff;
    display: inline-block;
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.appInverse};
  }
`;
//
// const CollectionsBoxes = styled(Box)`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   column-gap: 16px;
//   row-gap: 16px;
//   margin: 16px;
//   margin-bottom: 24px !important;
//   ${media.lessThan('medium')`
//   grid-template-columns: 1fr;
//   > div {
//     margin: 0 auto;
//     width: 300px;
//   }
//   `}
// `;

// const FollowersMenu = ({ basePath }: { basePath: string }) => (
//   <MenuList m={2}>
//     <NavLink exact to={`${basePath}`}>
//       Members
//     </NavLink>
//   </MenuList>
// );

const Menu: React.FC<{ tabPaths: Props['tabPaths'] }> = ({ tabPaths }) => (
  <MenuList p={3} pt={0}>
    <NavLink exact to={tabPaths.intents}>
      <Trans>Intents</Trans>
    </NavLink>
    <NavLink exact to={tabPaths.inventory}>
      <Trans>Recent Inventory</Trans>
    </NavLink>
    <NavLink to={tabPaths.timeline}>
      <Trans>Recent activity</Trans>
    </NavLink>
    {/*<NavLink exact to={tabPaths.collections}>*/}
    {/*  <Trans>Collections</Trans>*/}
    {/*</NavLink>*/}
    <NavLink to={tabPaths.discussions}>
      <Trans>Discussions</Trans>
    </NavLink>
    <NavLink to={tabPaths.members}>
      <Trans>Members</Trans>
    </NavLink>
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
