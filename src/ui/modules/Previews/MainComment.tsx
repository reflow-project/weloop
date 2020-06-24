import { Trans } from '@lingui/macro';
import DOMPurify from 'dompurify';
import { typography } from 'mn-constants';
import { darken } from 'polished';
import React from 'react';
import { Flag, MoreHorizontal, Star } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import styled from 'ui/themes/styled';

export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}

export interface CommentProps {
  flag(): unknown;
  like: LikeActions;
  content: string;
  isFlagged?: boolean;
  hideActions?: boolean;
  isDropdownOpen: boolean;
  toggleDropdown(): unknown;
}

export const MainComment: React.SFC<CommentProps> = ({
  isDropdownOpen,
  toggleDropdown,
  flag,
  content,
  like,
  isFlagged,
  hideActions
}) => {
  return (
    <Box>
      <Wrapper>
        <Summary
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          sx={{ fontSize: '24px' }}
          variant="text"
          mb={2}
        />
        <Actions mt={2}>
          {hideActions ? null : (
            <Box>
              <Items>
                <ActionItem
                  liked={like.iLikeIt ? true : false}
                  onClick={like.toggleLikeFormik.submitForm}
                >
                  <ActionIcon>
                    <Star strokeWidth="1" size="18" />
                  </ActionIcon>
                  <ActionText variant={'text'} sx={{ textTransform: 'capitalize' }} ml={1}>
                    {like.totalLikes + ' '} <Trans>Star</Trans>
                  </ActionText>
                </ActionItem>
                <ActionItem onClick={toggleDropdown} sx={{ position: 'relative' }}>
                  <ActionIcon>
                    <MoreHorizontal className="hover" size={18} />
                  </ActionIcon>
                  <ActionText variant={'text'} sx={{ textTransform: 'capitalize' }} ml={1}>
                    <Trans>More</Trans>
                  </ActionText>
                  {isDropdownOpen && (
                    <Dropdown orientation="bottom" cb={toggleDropdown}>
                      <DropdownItem onClick={flag}>
                        <Flag size={20} color={'rgb(101, 119, 134)'} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          {!isFlagged ? (
                            <Trans>Flag this comment</Trans>
                          ) : (
                            <Trans>Unflag this comment</Trans>
                          )}
                        </Text>
                      </DropdownItem>
                    </Dropdown>
                  )}
                </ActionItem>
              </Items>
            </Box>
          )}
        </Actions>
      </Wrapper>
      {/* {reply && (
        <SocialWrapper my={2}>
          <SocialText
            placeholder={i18n._(tt.placeholders.name)}
            defaultValue={''}
            submit={msg => {
              reply.replyFormik.setValues({ replyMessage: msg });
              reply.replyFormik.submitForm();
            }}
          />
        </SocialWrapper>
      )} */}
    </Box>
  );
};

// const SocialWrapper = styled(Box)`
//   background: ${props => props.theme.colors.appInverse};
// `;

const ActionText = styled(Text)`
  font-size: ${typography.size.s1};
`;

const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
  img {
    width: 100%;
  }
`;

const Items = styled(Flex)`
  flex: 1;
  justify-content: start;
`;

const Actions = styled(Box)`
  position: relative;
  z-index: 999999999999999999999999999999999999;
`;

const ActionItem = styled(Flex)<{ liked?: boolean }>`
  align-items: center;
  color: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  div {
    color: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  }
  &:hover {
    background: ${props =>
      props.liked
        ? darken('0.1', props.theme.colors.secondary)
        : darken('0.05', props.theme.colors.mediumlight)};
  }
  cursor: pointer;
  background: ${props =>
    props.liked ? props.theme.colors.secondary : props.theme.colors.mediumlight};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
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

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;
