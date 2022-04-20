import { Trans } from '@lingui/macro';
import DOMPurify from 'dompurify';
import { typography } from 'mn-constants';
import React from 'react';
import { CornerDownLeft, Star } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import styled from 'ui/themes/styled';
import { Actor } from '../ActivityPreview/types';

export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}
export interface ReplyActions {
  replyFormik: FormikHook<{ replyMessage: string }>;
}
export interface CommentProps {
  like: LikeActions;
  content: string;
  actor: Actor;
  createdAt: string;
  communityName: string;
  communityLink: string;
  hideActions?: boolean;
  url: string;
}

export const LikedComment: React.SFC<CommentProps> = ({
  content,
  like,
  actor,
  createdAt,
  communityName,
  communityLink,
  hideActions,
  url
}) => {
  return (
    <Wrapper pl={2}>
      {/*<ActorComp*/}
      {/*  actor={actor}*/}
      {/*  createdAt={createdAt}*/}
      {/*  event={''}*/}
      {/*  communityName={communityName}*/}
      {/*  communityLink={communityLink}*/}
      {/*/>*/}
      <Summary
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        sx={{ textDecoration: 'none' }}
        variant="text"
        mb={2}
      />
      <Actions mt={2}>
        {hideActions ? null : (
          <Box>
            <Items>
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
                    sx={{ textTransform: 'capitalize', textDecoration: 'none' }}
                  >
                    <Trans>Reply</Trans>
                  </ActionText>
                </NavLink>
              </ActionItem>
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
            </Items>
          </Box>
        )}
      </Actions>
    </Wrapper>
  );
};

const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
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

const ActionText = styled(Text)`
  font-size: ${typography.size.s1};
`;

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  border-left: 3px solid ${props => props.theme.colors.light};
`;
