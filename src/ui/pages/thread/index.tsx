import * as React from 'react';
import { Flex, Box, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { Link } from 'react-router-dom';
import Avatar from 'ui/elements/Avatar';
import { WrapperPanel } from 'ui/elements/Panel';
import { LoadMore } from 'ui/modules/Loadmore';
import { FormikHook } from 'ui/@types/types';

import { Wrapper, WrapperCont, ObjectsList, MainContainer, HomeBox } from 'ui/elements/Layout';
import SocialText from 'ui/modules/SocialText';
import { i18nMark } from '@lingui/react';
import { Trans } from '@lingui/react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { ReactElement } from 'react';

const tt = {
  placeholders: {
    name: i18nMark('Post a reply')
  }
};

export interface ReplyActions {
  replyFormik: FormikHook<{ replyMessage: string }>;
}
export interface Props {
  MainThread: ReactElement;
  Comments: ReactElement;
  Context: ReactElement;
  communityId: string;
  communityName: string;
  communityIcon: string;
  isCommunityContext: boolean;
  reply: ReplyActions | null;
  loadMoreComments: FormikHook | null;
}

export const Thread: React.FC<Props> = ({
  MainThread,
  Comments,
  communityId,
  communityName,
  communityIcon,
  Context,
  isCommunityContext,
  loadMoreComments,
  reply
}) => {
  const { i18n } = React.useContext(LocaleContext);
  return (
    <MainContainer>
      <HomeBox mb={3}>
        <WrapperCont>
          <Wrapper>
            <Box mb={2}>
              {!isCommunityContext && <Box p={2}>{Context}</Box>}
              <MainThreadContainer>{MainThread}</MainThreadContainer>
            </Box>
            <ObjectsList className="replies">{Comments}</ObjectsList>
            {loadMoreComments && <LoadMore LoadMoreFormik={loadMoreComments} />}
            {reply && (
              <SocialWrapper my={3}>
                <SocialText
                  placeholder={i18n._(tt.placeholders.name)}
                  defaultValue={''}
                  submit={msg => {
                    reply.replyFormik.setValues({ replyMessage: msg });
                    reply.replyFormik.submitForm();
                  }}
                />
              </SocialWrapper>
            )}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel>
        <TitleSection mb={2} variant="suptitle">
          <Trans>Community</Trans>
        </TitleSection>
        <HeaderWrapper id={communityId} name={communityName} icon={communityIcon} />
      </WrapperPanel>
    </MainContainer>
  );
};

export const HeaderWrapper: React.FC<{ id: string; name: string; icon: string }> = ({
  id,
  name,
  icon
}) => {
  return (
    <>
      <Header>
        <Right>
          <Link to={`/communities/${id}`}>
            <LinkImg>
              <Avatar size="s" src={icon} />
            </LinkImg>
            <Text variant="suptitle">{name}</Text>
          </Link>
        </Right>
      </Header>
    </>
  );
};

const TitleSection = styled(Text)`
  text-transform: capitalize;
`;

const SocialWrapper = styled(Box)`
  // background: ${props => props.theme.colors.appInverse};
`;

const MainThreadContainer = styled(Box)`
  //  border-bottom: ${props => props.theme.colors.border};
`;

const LinkImg = styled(Box)`
  margin-right: 8px;
  .--rtl & {
    margin-right: 0px;
    margin-left: 8px;
  }
`;
const Right = styled(Flex)`
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
`;

const Header = styled(Flex)`
  border-bottom: ${props => props.theme.colors.border};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: pointer;
  background: ${props => props.theme.colors.appInverse};
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  a {
    display: flex;
    flex: 1;
    text-decoration: none;
  }
`;
