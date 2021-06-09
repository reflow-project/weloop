import { Trans } from '@lingui/macro';
import * as React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {
  Wrapper,
  WrapperCont,
  List,
  MainContainer,
  HomeBox,
  ObjectsList,
  CollectionsWrapper,
  MenuList
} from 'ui/elements/Layout';
import { Flex, Box, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';

import { LoadMore } from 'ui/modules/Loadmore';
import { ReactElement } from 'react';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';

export interface Props {
  tabPaths: {
    timeline: string;
    communities: string;
    collections: string;
  };
  FeaturedCommunitiesBox: ReactElement;
  FeaturedCollectionsBox: ReactElement;
  ActivitiesBox: ReactElement;
  CommunitiesBoxes: ReactElement;
  CollectionsBoxes: ReactElement;
  LoadMoreFormik: FormikHook | null;
}
export const Discover: React.FC<Props> = ({
  ActivitiesBox,
  FeaturedCommunitiesBox,
  FeaturedCollectionsBox,
  CollectionsBoxes,
  CommunitiesBoxes,
  LoadMoreFormik,
  tabPaths
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <WrapperFeatured>{FeaturedCommunitiesBox}</WrapperFeatured>
          <Wrapper>
            <Menu tabPaths={tabPaths} />
            <Switch>
              <Route exact path={tabPaths.communities}>
                <ObjectsList>{CommunitiesBoxes}</ObjectsList>
                {LoadMoreFormik && <LoadMore LoadMoreFormik={LoadMoreFormik} />}
              </Route>
              <Route exact path={tabPaths.collections}>
                <ObjectsList>
                  <CollectionsWrapper>{CollectionsBoxes}</CollectionsWrapper>
                </ObjectsList>
                {LoadMoreFormik && <LoadMore LoadMoreFormik={LoadMoreFormik} />}
              </Route>
              <Route exact path={tabPaths.timeline}>
                <List>{ActivitiesBox}</List>
                {LoadMoreFormik && <LoadMore LoadMoreFormik={LoadMoreFormik} />}
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};

const Menu: React.FC<{ tabPaths: Props['tabPaths'] }> = ({ tabPaths }) => (
  <>
    <Title px={2} mt={2}>
      <Text variant="suptitle">Browse Home instance</Text>
    </Title>
    <MenuList>
      <NavLink exact to={tabPaths.timeline}>
        <Trans>Timeline</Trans>
      </NavLink>
      <NavLink exact to={tabPaths.communities}>
        <Trans>All communities</Trans>
      </NavLink>
    </MenuList>
  </>
);
const Title = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  height: 40px;
  line-height: 40px;
`;

const WrapperFeatured = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: ${props => props.theme.colors.appInverse};
  border-radius: 8px;
  max-height: 270px;
`;

export default Discover;
