import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoadMore } from 'ui/modules/Loadmore';
import { SidePanel } from 'ui/modules/SidePanel';
import { FormikHook } from 'ui/@types/types';
import {
  Wrapper,
  WrapperCont,
  List,
  // ObjectsList,
  MainContainer,
  HomeBox
  // MenuList
} from 'ui/elements/Layout';
import { Helmet } from 'react-helmet';
import styled from 'ui/themes/styled';
import { Box, Text } from 'rebass/styled-components';

export enum HomePageTab {
  Activities,
  MyCommunities,
  MyCollections
}

export interface Props {
  // tab: HomePageTab;
  // nextCommunitiesFormik?: FormikHook;
  // nextCollectionsFormik?: FormikHook;
  nextInboxFormik: FormikHook | null;
  // FollowedCommunitiesElements: JSX.Element;
  // FollowedCollectionsElements: JSX.Element;
  InboxElements: JSX.Element;
  basePath: string;
}

export const Home: React.FC<Props> = ({
  basePath,
  InboxElements,
  nextInboxFormik
}: // nextCommunitiesFormik,
// nextCollectionsFormik,
// FollowedCommunitiesElements,
// FollowedCollectionsElements
Props) => {
  return (
    <MainContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoodleNet - Home</title>
      </Helmet>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Title px={2} mt={2}>
              <Text variant="suptitle">
                <Trans>My timeline</Trans>
              </Text>
            </Title>
            {/* <Menu basePath={basePath} /> */}
            <Switch>
              {/* <Route path={`${basePath}/mycommunities`}>
                <ObjectsList>{FollowedCommunitiesElements}</ObjectsList>
                {nextCommunitiesFormik && (
                  <LoadMore LoadMoreFormik={nextCommunitiesFormik} />
                )}
              </Route>
              <Route path={`${basePath}/mycollections`}>
                <ObjectsList>{FollowedCollectionsElements}</ObjectsList>
                {nextCollectionsFormik && (
                  <LoadMore LoadMoreFormik={nextCollectionsFormik} />
                )}
              </Route> */}
              <Route path={`${basePath}`}>
                <List>{InboxElements}</List>
                {nextInboxFormik && <LoadMore LoadMoreFormik={nextInboxFormik} />}
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanel />
    </MainContainer>
  );
};

export default Home;

const Title = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  height: 40px;
  line-height: 40px;
  border-bottom: ${props => props.theme.colors.border};
`;

// const Menu = ({ basePath }: { basePath: string }) => {
//   return (
//     <MenuList>
//       <NavLink exact to={`${basePath}`}>
//         <Trans>My Timeline</Trans>
//       </NavLink>
//       <>
//         {/* <NavLink to={`${basePath}/mycommunities`}>
//           <Trans>Joined communities</Trans>
//         </NavLink>
//         <NavLink to={`${basePath}/mycollections`}>
//           <Trans>Followed collections</Trans>
//         </NavLink> */}
//       </>
//     </MenuList>
//   );
// };
