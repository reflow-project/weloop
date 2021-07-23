import { Trans } from '@lingui/macro';
import * as React from 'react';
import { ReactElement } from 'react';
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
import { WrapperPanel } from 'ui/elements/Panel';
// import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
// import { SidePanel } from 'ui/modules/SidePanel';
import styled from 'ui/themes/styled';
import { HeaderWrapper } from '../thread';
import { Box } from 'rebass';

export interface Props {
  Resources: ReactElement[];
  HeroCollection: ReactElement;
  Followers: ReactElement[];
  ShareLink: null | ReactElement;
  UploadResourcePanel: null | ReactElement;
  shareLink(): unknown;
  upload(): unknown;
  tabPaths: {
    resources: string;
    followers: string;
  };
  loadMoreResources: FormikHook | null;
  loadMoreFollowers: FormikHook | null;
  isCommunityMember: boolean;
  communityId: string;
  communityName: string;
  communityIcon: string;
}

export const Collection: React.FC<Props> = ({
  HeroCollection,
  ShareLink,
  UploadResourcePanel,
  Followers,
  Resources,
  tabPaths,
  loadMoreResources,
  loadMoreFollowers,
  isCommunityMember,
  communityId,
  communityName,
  communityIcon,
  shareLink,
  upload
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            {/* <Header name={collectionName} /> */}
            {HeroCollection}
            <Menu tabPaths={tabPaths} />
            <Switch>
              <Route path={tabPaths.followers}>
                <>
                  <ObjectsList>{Followers}</ObjectsList>
                  {loadMoreFollowers && <LoadMore LoadMoreFormik={loadMoreFollowers} />}
                </>
              </Route>
              <Route exact path={tabPaths.resources}>
                <>
                  {isCommunityMember ? (
                    <WrapButton p={3}>
                      <Button mr={2} onClick={shareLink} variant="outline">
                        <Trans>Share link</Trans>
                      </Button>
                      <Button onClick={upload} variant="outline">
                        <Trans>Add new publication</Trans>
                      </Button>
                    </WrapButton>
                  ) : null}
                  {ShareLink}
                  {UploadResourcePanel}
                  <ObjectsList>
                    {Resources.map(Resource => (
                      <Box mx={3} my={2} mb={3} key={Resource.key || ''}>
                        {Resource}
                      </Box>
                    ))}
                  </ObjectsList>
                  {loadMoreResources && <LoadMore LoadMoreFormik={loadMoreResources} />}
                </>
              </Route>
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

const Menu: React.FC<{ tabPaths: Props['tabPaths'] }> = ({ tabPaths }) => (
  <MenuList p={3} pt={3}>
    {/* <NavLink exact to={`${basePath}`}>
      Recent activity
    </NavLink> */}
    <NavLink exact to={tabPaths.resources}>
      <Trans>Publications</Trans>
    </NavLink>
    <NavLink exact to={tabPaths.followers}>
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
