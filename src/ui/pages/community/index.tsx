import { Trans } from '@lingui/macro';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import * as React from 'react';
import { ReactElement } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
// import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
// import Button from 'ui/elements/Button';
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
import SocialText from 'ui/modules/SocialText';
import styled from 'ui/themes/styled';

export interface Props {
  isJoined: boolean;
  Activities: ReactElement[];
  Members: ReactElement[];
  Intents: ReactElement[];
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
  };
}

export const Community: React.FC<Props> = ({
  Activities,
  HeroCommunity,
  // Collections,
  Members,
  Intents,
  tabPaths,
  newThreadFormik,
  // isJoined,
  Threads,
  loadMoreActivities,
  // loadMoreCollections,
  loadMoreThreads
  // createCollection
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {/* <Header name={communityName} /> */}
            {HeroCommunity}
            <Menu tabPaths={tabPaths} />
            <Switch>
              <Route exact path={tabPaths.intents}>
                <ObjectsList>{Intents}</ObjectsList>
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
//
// const CreateCollectionButton = styled(Button)`
//   padding: 0;
//   text-transform: capitalize;
//   height: 34px;
//   line-height: 34px;
//   padding: 0 16px;
//   &:hover {
//     background: ${props => props.theme.colors.primary};
//     color: ${props => props.theme.colors.appInverse};
//   }
// `;
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
  align-items: center;}
  </>
);

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
