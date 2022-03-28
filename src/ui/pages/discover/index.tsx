import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Wrapper,
  WrapperCont,
  List,
  MainContainer,
  HomeBox,
  MenuList,
  ButtonIcon,
  MenuItem
} from 'ui/elements/Layout';
import { Flex, Box, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';

import { LoadMore } from 'ui/modules/Loadmore';
import { ReactElement } from 'react';

export interface Props {
  tabPaths: {
    timeline: string;
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
              <Route exact path={tabPaths.timeline}>
                <List>{ActivitiesBox}</List>
                {LoadMoreFormik && <LoadMore LoadMoreFormik={LoadMoreFormik} />}
              </Route>
            </Switch>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};
const UsersIcon = require('react-feather/dist/icons/users').default;

const Menu: React.FC<{ tabPaths: Props['tabPaths'] }> = ({ tabPaths }) => (
  <>
    <Title px={2} mt={2}>
      <Text variant="suptitle">Browse Home instance</Text>
    </Title>
    <MenuList>
      <MenuItem exact to={tabPaths.timeline}>
        <div className="text-holder">
          <Trans>
            <Trans>Timeline</Trans>
          </Trans>
        </div>
        <ButtonIcon className="icon-holder">
          <UsersIcon size="24" />
        </ButtonIcon>
      </MenuItem>
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
