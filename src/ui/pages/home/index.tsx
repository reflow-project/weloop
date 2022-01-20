import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Box, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import {
  HomeBox,
  // MenuList
  List,
  // ObjectsList,
  MainContainer,
  Wrapper,
  WrapperCont
} from 'ui/elements/Layout';
import { LoadMore } from 'ui/modules/Loadmore';
import styled from 'ui/themes/styled';
import { ReactElement } from 'react';

export interface Props {
  // nextCommunitiesFormik?: FormikHook;
  // nextCollectionsFormik?: FormikHook;
  nextInboxFormik: FormikHook | null;
  // FollowedCommunitiesElements: ReactElement;
  // FollowedCollectionsElements: ReactElement;
  InboxElements: ReactElement;
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
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Title px={2}>
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
