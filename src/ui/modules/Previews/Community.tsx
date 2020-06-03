import { Trans } from '@lingui/macro';
import React from 'react';
import { Box, Flex, Text, Heading } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Avatar from 'ui/elements/Avatar';
import styled from 'ui/themes/styled';
import { SimpleLink } from 'ui/helpers/SimpleLink';
import { Users, Folder } from 'react-feather';
import Button from 'ui/elements/Button';
import { darken } from 'polished';
import { Search } from './Collection';

export interface Props {
  name: string;
  icon: string;
  summary: string;
  followersCount: number;
  collectionsCount: number;
  threadsCount: number;
  toggleJoinFormik: FormikHook<{}>;
  joined: boolean;
  link: {
    url: string;
    external: boolean;
  };
  displayUsername: string;
  hideActions: boolean;
  isCreator: boolean;
  isSearch?: boolean;
  // followers: string[]
}

export const Community: React.FC<Props> = ({
  name,
  icon,
  summary,
  isCreator,
  followersCount,
  joined,
  toggleJoinFormik,
  collectionsCount,
  link,
  displayUsername,
  hideActions,
  isSearch
  // followers
}) => (
  <Bordered>
    {isSearch && (
      <Search>
        <Trans>Community</Trans>
      </Search>
    )}
    <Wrapper p={2}>
      <WrapperLink link={link}>
        <WrapperImage>
          <Avatar size="l" src={icon} />
        </WrapperImage>
        <Box p={2}>
          <Flex>
            <Box flex={1}>
              <Title variant="heading" fontSize={3}>
                {name.length > 60
                  ? name.replace(/^(.{56}[^\s]*).*/, '$1...')
                  : name}
              </Title>
              <Username>{displayUsername}</Username>
            </Box>
          </Flex>

          {summary ? (
            <Summary variant="text" mt={2}>
              {summary.length > 90
                ? summary.replace(/^([\s\S]{86}[^\s]*)[\s\S]*/, '$1...')
                : summary}
            </Summary>
          ) : null}

          {/* <Users>
            {followers.map((u, i) => (<Avatar key={i} src={u}/>))}
          </Users> */}
        </Box>
        <Meta px={2}>
          <MetaWrapper mt={2} alignItems="center">
            <Users size={18} />
            <Text ml={2} variant="suptitle">
              {followersCount || 0} <Trans>Users</Trans>
            </Text>
          </MetaWrapper>

          <MetaWrapper mt={2} alignSelf="center" alignItems="center">
            <Folder size={18} />
            <Text ml={2} variant="suptitle">
              {collectionsCount || 0} <Trans>Collections</Trans>
            </Text>
          </MetaWrapper>
          {hideActions ? null : (
            <Actions my={3}>
              <Button
                variant="outline"
                isDisabled={isCreator ? true : false}
                isSubmitting={toggleJoinFormik.isSubmitting}
                onClick={e => {
                  e.preventDefault();
                  toggleJoinFormik.submitForm();
                }}
              >
                <Text variant={'suptitle'}>
                  {joined ? <Trans>Leave</Trans> : <Trans>Join</Trans>}
                </Text>
              </Button>
            </Actions>
          )}
        </Meta>
      </WrapperLink>
    </Wrapper>
  </Bordered>
);

// const Users = styled(Box)``
const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
`;

const Actions = styled(Box)`
  button {
    width: 100%;
  }
`;

const MetaWrapper = styled(Flex)`
  svg  {
    margin: 0;
  }
`;

const WrapperLink = styled(SimpleLink)`
  text-decoration: none;
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  flex: 1;
`;

const Meta = styled(Box)`
  color: ${props => props.theme.colors.mediumdark};
  // justify-content: space-evenly;
`;

const Bordered = styled(Box)`
  border: ${props => props.theme.colors.border};
  border-radius: 4px;
`;

const Wrapper = styled(Box)`
  position: relative;
  max-height: 560px;
  overflow: hidden;
  z-index: 9;
  // padding-bottom: 0;
  cursor: pointer;
  background: ${props => props.theme.colors.appInverse};
  &:hover {
    background: ${props => darken('0.05', props.theme.colors.appInverse)};
  }
    
    text-decoration: none;
  }
  &&& a {
    color: inherit;
    text-decoration: none;
    &&&:hover {
      text-decoration: none;
    }
  }
`;

const WrapperImage = styled.div`
  position: relative;
  div {
    width: 100%;
    heigth: 150px;
    background-repeat: no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:hover {
    & span {
      display: block;
    }
  }
`;

// const TitleLink = styled(SimpleLink)`
//   text-decoration: none;
//   color: ${props => props.theme.colors.mediumdark};
//   &:hover {
//     text-decoration: underline;
//   }
// `;

const Title = styled(Heading)`
  color: ${props => props.theme.colors.darker};
  font-size: 20px;
  text-decoration: none;
  word-break: break-all;
`;
