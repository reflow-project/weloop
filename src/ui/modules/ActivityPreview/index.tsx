import { Trans } from '@lingui/macro';
import { DateTime } from 'luxon';
import { clearFix } from 'polished';
import React, { FC, useMemo } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import { Actor } from './types';
import { typography } from 'mn-constants';
import { useUserById } from '../../../fe/user/useUserById';

export enum Status {
  Loading,
  Loaded
}

export interface ActivityLoaded {
  status: Status.Loaded; // FIX ME after fix flags story in settings page
  userActivity: Array<Activity>;
}

export interface ActivityLoading {
  status: Status.Loading; // FIX ME after fix flags story in settings page
}

export interface Activity {
  id: string;
  objectId: string;
  object: {
    __typename: string;
  };
  subjectId: string;
  verb: {
    verbDisplay: string;
    verb: string;
  };
}

export type Props = ActivityLoaded | ActivityLoading;

export const ActivityPreview: FC<any> = ({ userActivity }) =>
  !(userActivity?.status === Status.Loading) ? (
    <>
      {userActivity?.map((item: Activity) => (
        <FeedItem mb={2} key={item.id}>
          <SmallActorComp activityItem={item} />
          {/*<Contents mt={2}>*/}
          {/*    Activity ID: <Title>{item && item.id}</Title>*/}
          {/*</Contents>*/}

          {/*<Link to={item.subjectId}>*/}
          {/*    <Contents mt={2}>*/}
          {/*        Activity SubjectId: <Title>{item && item.subjectId}</Title>*/}
          {/*    </Contents>*/}
          {/*</Link>*/}

          <Contents mt={2}>
            Activity Object: <Title>{item && item.object.__typename}</Title>
          </Contents>

          <Contents mt={2}>
            Activity Verb: <Title>{item && item.verb.verbDisplay}</Title>
          </Contents>
        </FeedItem>
      ))}
    </>
  ) : (
    <Trans>loading...</Trans>
  );

export interface ActorPropsType {
  activityItem: Activity;
  actor?: Actor;
  createdAt: string;
  event: string;
  threadUrl?: string;
  communityName: string;
  communityLink: string;
}

export interface ActorProps {
  actor?: Actor;
  createdAt: string;
  event: string;
  threadUrl?: string;
  communityName: string;
  communityLink: string;
}

export const ActorComp: FC<ActorPropsType> = ({
  actor,
  createdAt,
  event,
  threadUrl,
  communityName,
  communityLink
}) => {
  return (
    <Member>
      {actor && (
        <>
          <Avatar initials={actor.name} src={actor.icon} variant="avatar" />
          <MemberInfo ml={2}>
            <Flex mt={1} alignItems="center">
              <Flex flex={1}>
                <Name>
                  <Link to={actor.link}>{actor.name}</Link>
                </Name>
                <TextEvent sx={{ textTransform: 'lowercase' }} variant="text" ml={1}>
                  {threadUrl ? <Link to={threadUrl}>{event}</Link> : event}
                </TextEvent>
              </Flex>
            </Flex>
            <Flex sx={{ marginTop: '2px' }} alignItems="center">
              <Date>{DateTime.fromSQL(createdAt).toRelative()}</Date>
              <Spacer mx={1}>·</Spacer>
              <CommunityName to={communityLink}>{communityName}</CommunityName>
            </Flex>
          </MemberInfo>
        </>
      )}
    </Member>
  );
};

export interface SmallActorProps {
  activityItem: Activity;
}

export const SmallActorComp: FC<SmallActorProps> = ({ activityItem }) => {
  const { user } = useUserById(activityItem.subjectId);
  const initials = useMemo(() => user?.profile?.name || '', [user]);
  const icon = useMemo(() => user?.profile?.icon || '', [user]);

  return (
    <BrowserRouter>
      <Member sx={{ alignItems: 'center !important' }}>
        <Avatar
          size="s"
          initials={initials}
          src={`${process.env.REACT_APP_GRAPHQL_IMG_LINK}${icon}`}
          variant="avatar"
        />
        <MemberInfo sx={{ marginTop: 0 }} ml={2}>
          <Flex alignItems="center">
            <Flex flex={1}>
              <Name>
                <Link to={`${user?.id}`}>{user?.profile?.name || ''}</Link>
              </Name>
              <TextEvent sx={{ textTransform: 'lowercase' }} variant="text" ml={1}>
                <Title variant="subhead">{activityItem?.verb.verbDisplay.toUpperCase()}</Title>
              </TextEvent>
            </Flex>
          </Flex>
        </MemberInfo>
      </Member>
    </BrowserRouter>
  );
};

const CommunityName = styled(Link)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  font-size: ${typography.size.s1};
`;

const TextEvent = styled(Text)`
  color: ${props => props.theme.colors.dark};

  a {
    font-weight: 600;
    color: ${props => props.theme.colors.darker};
  }
`;

const Contents = styled(Box)``;

const Spacer = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
`;

const Date = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  font-size: ${typography.size.s1};
`;

const Name = styled(Text)`
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;

  a {
    font-weight: 800;
    display: flex;
    text-decoration: none;
    align-items: center;
    position: relative;
    z-index: 9;
    color: ${props => props.theme.colors.primary} !important;
  }
`;

const Member = styled(Flex)`
  align-items: stretch;
`;
export const Title = styled(Text)`
  display: inline-block;
  font-size: ${typography.size.m1};
  color: ${props => props.theme.colors.dark};
  text-decoration: none !important;
  margin-left: 10px;
  margin-right: 10px;
`;
const MemberInfo = styled(Box)`
  width: 100%;
  margin-top: -4px;
`;

const FeedItem = styled(Box)`
  position: relative;
  padding: 16px;
  word-wrap: break-word;
  ${clearFix()};
  transition: background 0.5s ease;
  margin-top: 0;
  z-index: 10;
  position: relative;
  border-radius: 4px;
  background: ${props => props.theme.colors.appInverse};
  margin-bottom: 8px;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
