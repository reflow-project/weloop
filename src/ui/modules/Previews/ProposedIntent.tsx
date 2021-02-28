import { Trans } from '@lingui/macro';
import { typography } from 'mn-constants';
import * as React from 'react';
import { Star } from 'react-feather';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Avatar from 'ui/elements/Avatar';

import styled from 'ui/themes/styled';
import { Search } from './Collection';

export interface LikeActions {
  toggleLikeFormik: FormikHook<{}>;
  totalLikes: number;
  iLikeIt: boolean;
}

export interface IProposedIntent {
  icon: string;
  name: string;
  link: string;
  like: null | LikeActions;
  isFlagged: boolean;
  hideActions?: boolean;
  collectionLink: string;
  collectionName: string;
  isOpenDropdown: boolean;
  toggleDropdown(): unknown;
  toggleFlag: null | (() => unknown);
}

export const ProposedIntent: React.FC<IProposedIntent> = ({
  icon,
  name,
  link,
  collectionLink,
  collectionName,
  like,
  hideActions
}) => {
  return (
    <Bordered>
      <Search>
        <Trans>Resource</Trans>
      </Search>
      <Wrapper p={2}>
        {icon !== '' && <Avatar size="m" src={icon} />}
        <Infos flex={1} ml={3}>
          <TitleLink href={link}>
            <Title flex="1">{name}</Title>
          </TitleLink>
        </Infos>
      </Wrapper>
      <Meta>
        <Collection ml={2}>
          Added in <NavLink to={collectionLink}> +{collectionName}</NavLink>
        </Collection>
        {hideActions ? null : (
          <Actions>
            {like && (
              <ActionItem
                bordered
                liked={like.iLikeIt ? true : false}
                onClick={like.toggleLikeFormik.submitForm}
              >
                <ActionIcon>
                  <Star strokeWidth="1" size="18" />
                </ActionIcon>
                <ActionText variant={'text'} sx={{ textTransform: 'capitalize' }} ml={1}>
                  {like.totalLikes}
                </ActionText>
              </ActionItem>
            )}
          </Actions>
        )}
      </Meta>
    </Bordered>
  );
};

const Meta = styled(Flex)`
  align-items: center;
`;

const Collection = styled(Flex)`
  flex: 1;
  font-size: 13px;
  a {
    text-decoration: underline;
    font-weight: 600;
    color: ${props => props.theme.colors.dark};
  }
`;

const ActionText = styled(Text)`
  font-size: ${typography.size.s1};
  color: ${props => props.theme.colors.darker};
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

const Actions = styled(Flex)`
  justify-content: start;
  padding: 8px;
  padding-top: 0;
`;

const ActionItem = styled(Flex)<{ liked?: boolean; bordered?: boolean }>`
  align-items: center;
  color: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  div {
    color: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  }
  cursor: pointer;
  background: ${props => (props.liked ? props.theme.colors.primary : 'transparent')};
  border: 1px solid ${props => (props.bordered ? props.theme.colors.primary : 'transparent')};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: none;
    fill: ${props => (props.liked ? props.theme.colors.lightest : props.theme.colors.primary)};
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg {
      fill: ${props => (props.liked ? props.theme.colors.lightest : props.theme.colors.lightest)};
    }
    div {
      color: ${props => (props.liked ? props.theme.colors.lightest : props.theme.colors.lightest)};
    }
    color: ${props => (props.liked ? props.theme.colors.lightest : props.theme.colors.lightest)};
    background: ${props =>
      props.liked ? props.theme.colors.mediumdark : props.theme.colors.primary};
    border-color: ${props =>
      props.liked ? props.theme.colors.mediumdark : props.theme.colors.primary};
  }
`;

const Bordered = styled(Box)`
  border: ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.appInverse};
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px #0000001f;
`;

const TitleLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.darker};

  svg {
    margin: 0px;
    margin-right: 5px;
    display: inline-flex;
    position: relative;
    top: 2px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Wrapper = styled(Flex)`
  position: relative;
  text-decoration: none;
  background: ${props => props.theme.colors.appInverse};
  margin-top: 0;
  border-radius: 6px;
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
const Title = styled(Heading)`
  color: ${props => props.theme.colors.darker};
  font-size: 18px;
  text-decoration: none;
`;
