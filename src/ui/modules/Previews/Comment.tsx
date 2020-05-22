import React from 'react';
import styled from 'ui/themes/styled';
import { Box, Text, Flex } from 'rebass/styled-components';
// import SocialText from 'ui/modules/SocialText';
import { Trans } from '@lingui/react';
// import { LocaleContext } from '../../../context/global/localizationCtx';
import { FormikHook } from 'ui/@types/types';
import { Star, MoreHorizontal, Flag, CornerDownLeft } from 'react-feather';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
// import DOMPurify from 'dompurify';

import Modal from 'ui/modules/Modal';
import { NavLink } from 'react-router-dom';
import { typography } from 'mn-constants';
import { darken } from 'polished';
import { MD_Comment } from 'ui/elements/Layout/comment';

export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}
export interface ReplyActions {
  replyFormik: FormikHook<{ replyMessage: string }>;
}
export interface CommentProps {
  FlagModal: null | React.ComponentType<{ done(): unknown }>;
  like: LikeActions;
  reply: ReplyActions | null;
  content: string;
  url: string;
  isFlagged: boolean;
  hideActions?: boolean;
}

// const tt = {
//   placeholders: {
//     name: i18nMark('Post a reply'),
//     summary: i18nMark(
//       'Please describe what the collection is for and what kind of resources it is likely to contain...'
//     ),
//     image: i18nMark('Enter the URL of an image to represent the collection')
//   }
// };

export const Comment: React.SFC<CommentProps> = ({
  content,
  reply,
  like,
  url,
  FlagModal,
  isFlagged,
  hideActions
}) => {
  // const [talkModalVisible, showTalkModal] = React.useState(false);
  // const { i18n } = React.useContext(LocaleContext);
  const [isOpenFlagModal, setOpenFlagModal] = React.useState(false);
  const [isOpen, onOpen] = React.useState(false);
  return (
    <Wrapper>
      {/* <Link to={url}> */}
      <MD_Comment content={content} />
      {/* <Summary
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        sx={{ textDecoration: 'none' }}
        variant="text"
        mb={2}
      /> */}
      {/* </Link> */}
      <Actions mt={2}>
        {/* {talkModalVisible && (
            <Box mb={2}>
            <SocialText
            placeholder={i18n._(tt.placeholders.name)}
            defaultValue={''}
            submit={msg => {
              showTalkModal(false);
              reply.replyFormik.setValues({ replyMessage: msg });
              reply.replyFormik.submitForm();
            }}
            />
            </Box>
          )} */}

        <Box>
          <Items>
            {hideActions ? null : (
              <ActionItem>
                <NavLink to={url}>
                  <ActionIcon>
                    <CornerDownLeft
                      className="hover"
                      strokeWidth="1"
                      color="rgba(0,0,0,.4)"
                      size="18"
                    />
                  </ActionIcon>
                  <ActionText
                    ml={1}
                    variant={'text'}
                    sx={{ textTransform: 'capitalize' }}
                  >
                    <Trans>Reply</Trans>
                  </ActionText>
                </NavLink>
              </ActionItem>
            )}
            <ActionItem
              liked={like.iLikeIt ? true : false}
              onClick={like.toggleLikeFormik.submitForm}
            >
              <ActionIcon>
                <Star strokeWidth="1" size="18" />
              </ActionIcon>
              <ActionText
                variant={'text'}
                sx={{ textTransform: 'capitalize' }}
                ml={1}
              >
                {like.totalLikes + ' '} <Trans>Star</Trans>
              </ActionText>
            </ActionItem>
            <ActionItem
              onClick={() => onOpen(true)}
              sx={{ position: 'relative' }}
            >
              <ActionIcon>
                <MoreHorizontal className="hover" size={18} />
              </ActionIcon>
              <ActionText
                variant={'text'}
                sx={{ textTransform: 'capitalize' }}
                ml={1}
              >
                <Trans>More</Trans>
              </ActionText>
              {isOpen && (
                <Dropdown orientation="bottom" cb={onOpen}>
                  {FlagModal && (
                    <DropdownItem onClick={() => setOpenFlagModal(true)}>
                      <Flag size={20} color={'rgb(101, 119, 134)'} />
                      <Text sx={{ flex: 1 }} ml={2}>
                        {!isFlagged ? (
                          <Trans>Flag this comment</Trans>
                        ) : (
                          <Trans>Unflag this comment</Trans>
                        )}
                      </Text>
                    </DropdownItem>
                  )}
                </Dropdown>
              )}
            </ActionItem>
          </Items>
          {FlagModal && isOpenFlagModal && (
            <Modal closeModal={() => setOpenFlagModal(false)}>
              <FlagModal done={() => setOpenFlagModal(false)} />
            </Modal>
          )}
        </Box>
      </Actions>
      {/* <Forked>
        <b>SoapDog</b> forked this discussion: Yeah, they've wrote a lot of
        stuff... (3)
      </Forked> */}
    </Wrapper>
  );
};

// const Forked = styled(Box)`
//   padding: 8px;
//   border-top: ${props => props.theme.colors.border};
//   border-bottom: ${props => props.theme.colors.border};
//   margin-top: 16px;
//   font-size: ${typography.size.s1};
//   margin-left: -16px;
//   margin-right: -16px;
//   margin-bottom: -16px;
//   color: ${props => props.theme.colors.mediumdark};
// `;

// const Summary = styled(Text)`
//   color: ${props => props.theme.colors.dark};
//   img {
//     width: 100%;
//   }
// `;

const Items = styled(Flex)`
  flex: 1;
  justify-content: start;
`;

const Actions = styled(Box)`
  // border-top: ${props => props.theme.colors.border};
  margin-top: 16px;
  position: relative;
  z-index: 999999999999999999999999999999999999;
  margin-top: 16px;
`;

const ActionItem = styled(Flex)<{ liked?: boolean }>`
  align-items: center;
  color: ${props =>
    props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  div {
    color: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  }
  &:hover {
    background: ${props =>
      props.liked
        ? darken('0.1', props.theme.colors.secondary)
        : darken('0.05', props.theme.colors.mediumlight)};
  }
  cursor: pointer;
  background: ${props =>
    props.liked
      ? props.theme.colors.secondary
      : props.theme.colors.mediumlight};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.mediumdark};
      // fill: ${props => props.theme.colors.mediumdark};
    }
  }
`;

const ActionIcon = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: -8px;
  svg {
    margin: 0 auto;
  }
`;

const ActionText = styled(Text)`
  font-size: ${typography.size.s1};
`;

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  a {
    text-decoration: none
    &:hover {
      text-decoration: none;
    }
  }
`;
