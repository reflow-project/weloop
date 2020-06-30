import { Trans } from '@lingui/macro';
import * as React from 'react';
import { ReactElement } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
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
import { SidePanel } from 'ui/modules/SidePanel';
import SocialText from 'ui/modules/SocialText';
import styled from 'ui/themes/styled';

export interface Props {
  isJoined: boolean;
  Activities: ReactElement[];
  Followers: ReactElement[];
  Collections: ReactElement[];
  HeroCommunity: ReactElement;
  Threads: ReactElement[];
  basePath: string;
  newThreadFormik: null | FormikHook<{ text: string }>;
  createCollection: () => unknown;
  loadMoreActivities: FormikHook | null;
  loadMoreCollections: FormikHook | null;
  loadMoreThreads: FormikHook | null;
}

export const Community: React.FC<Props> = ({
  Activities,
  HeroCommunity,
  Collections,
  Followers,
  basePath,
  newThreadFormik,
  // isJoined,
  Threads,
  loadMoreActivities,
  loadMoreCollections,
  loadMoreThreads,
  createCollection
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {/* <Header name={communityName} /> */}
            <Switch>
              <Route exact path={`${basePath}/timeline`}>
                <>
                  {HeroCommunity}
                  <Menu basePath={basePath} />
                  <List mt={2}>{Activities}</List>
                  {loadMoreActivities && <LoadMore LoadMoreFormik={loadMoreActivities} />}
                </>
              </Route>
              <Route exact path={`${basePath}`}>
                <>
                  {HeroCommunity}
                  <Menu basePath={basePath} />
                  <Title px={3} mt={2}>
                    <Text sx={{ flex: 1 }} variant="suptitle">
                      <Trans>All collections</Trans>
                    </Text>
                    <CreateCollectionButton variant="outline" onClick={createCollection}>
                      <Trans>Create a new collection</Trans>
                    </CreateCollectionButton>
                  </Title>
                  <ObjectsList>
                    <CollectionsBoxes>{Collections}</CollectionsBoxes>
                  </ObjectsList>
                  {loadMoreCollections && <LoadMore LoadMoreFormik={loadMoreCollections} />}
                </>
              </Route>
              <Route exact path={`${basePath}/discussions`}>
                <>
                  {HeroCommunity}
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
                  <ObjectsList>{Threads}</ObjectsList>
                  {loadMoreThreads && <LoadMore LoadMoreFormik={loadMoreThreads} />}
                </>
              </Route>
              <Route path={`${basePath}/members`}>
                <>
                  {HeroCommunity}
                  <Menu basePath={basePath} />
                  <ObjectsList>{Followers}</ObjectsList>
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

const CreateCollectionButton = styled(Button)`
  padding: 0;
  text-transform: capitalize;
  height: 34px;
  line-height: 34px;
  padding: 0 16px;
`;

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
  align-items: center;}
  </>
);

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
