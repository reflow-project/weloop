import React from 'react';
import styled from 'ui/themes/styled';
import { Box, Text, Flex } from 'rebass/styled-components';
import { DateTime } from 'luxon';
import { Trans } from '@lingui/react';
import { NavLink } from 'react-router-dom';
import { MessageSquare, Star } from 'react-feather';

export interface CommentProps {
  content: string;
  // title: string;
  lastActivity: string;
  totalReplies: string;
  totalLikes: string;
  members: string[];
  link: string;
}

export const Thread: React.SFC<CommentProps> = ({
  content,
  // title,
  lastActivity,
  totalReplies,
  totalLikes,
  members,
  link
}) => {
  return (
    <Wrapper p={3}>
      {/* <Text variant="heading" sx={{ fontSize: '16px' }}>
        {title || 'no title'}
      </Text> */}
      <NavLink to={link}>
        <Summary variant="text">{content}</Summary>
        <Flex mt={2} alignItems="center">
          <Flex flex={1}>
            <Date>
              <Trans>Last activity</Trans>{' '}
              {DateTime.fromSQL(lastActivity).toRelative()}
            </Date>
            <Meta>
              <Flex alignItems="center">
                <Icon mr={1}>
                  <MessageSquare size={16} />
                </Icon>{' '}
                {totalReplies || 0}
              </Flex>
              <Flex ml={3} alignItems="center">
                <Icon mr={1}>
                  <Star size={16} />
                </Icon>
                {totalLikes || 0}
              </Flex>
            </Meta>
          </Flex>
          <Flex>
            {members.map((m, i) => (
              <Member ml={1} src={m} />
            ))}
          </Flex>
        </Flex>
      </NavLink>
    </Wrapper>
  );
};

const Icon = styled(Box)`
  svg {
    vertical-align: middle;
  }
`;

const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
`;

const Member = styled(Box)<{ src: string }>`
  max-width: 28px !important;
  max-height: 28px !important;
  border-radius: 28px !important;
  background: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: cover;
  width: 28px;
  height: 28px;
  background-size: cover;
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  font-size: 13px;
`;

const Date = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  font-size: 13px;
  flex: 1;
`;

const Wrapper = styled(Box)`
  border-bottom: ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.appInverse};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.lighter};
  }
  a {
    text-decoration: none;
    * {
      text-decoration: none;
    }
  }
`;
