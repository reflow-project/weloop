import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Archive } from 'react-feather';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
// import Avatar from 'ui/elements/Avatar';
import { SimpleLink } from 'ui/helpers/SimpleLink';
import styled from 'ui/themes/styled';
import { typography } from 'mn-constants';
import { darken, ellipsis } from 'polished';

export interface Props {
  link: SimpleLink;
  icon: string;
  name: string;
  summary: string;
  displayUsername: string;
  totalResources: number | null;
  isFollowing: boolean;
  toggleFollowFormik: FormikHook;
  hideActions?: boolean;
  isSearch?: boolean;
}

export const Collection: React.FC<Props> = ({
  link,
  icon,
  name,
  summary,
  displayUsername,
  totalResources,
  isFollowing,
  toggleFollowFormik,
  hideActions,
  isSearch
}) => {
  return (
    <CollectionWrapper>
      {isSearch && (
        <Search variant="text">
          <Trans>Collection</Trans>
        </Search>
      )}
      <WrapperLink link={link}>
        <Previews>
          <Big src={icon} />
          {/* <Smalls>
        <Small>a</Small>
        <Small>b</Small>
        <Small>c</Small>
      </Smalls> */}
        </Previews>
        <Info>
          <Title>{name}</Title>
          <Meta>
            <TotResources variant="text">
              {totalResources || 0} <Trans>Resources</Trans>
            </TotResources>
            <Action>
              {hideActions ? null : (
                <ActionItem
                  bordered
                  isFollowing={isFollowing ? true : false}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault();
                    toggleFollowFormik.submitForm();
                  }}
                >
                  <ActionText ml={1} variant={'suptitle'} sx={{ textTransform: 'capitalize' }}>
                    {isFollowing ? <Trans>Following </Trans> : <Trans>follow</Trans>}
                  </ActionText>
                </ActionItem>
              )}
            </Action>
          </Meta>
        </Info>
      </WrapperLink>
    </CollectionWrapper>
  );
};

export const Search = styled(Text)`
  padding: 8px;
  background-color: ${props => props.theme.colors.appInverse};
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.colors.dark};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Meta = styled(Flex)`
  color: ${props => props.theme.colors.mediumdark};
  align-items: center;
  position: relative;
  z-index: 99999999;
`;

const Title = styled(Heading)`
  color: ${props => props.theme.colors.darker};
  text-decoration: none;
  word-break: break-all;
  margin-top: 4px;
  font-size: ${typography.size.m1};
  ${ellipsis('250px')};
`;

const CollectionWrapper = styled(Box)`
  max-width: 300px;
  position: relative;
  box-shadow: 0px 2px 4px 0px #0000001f;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ececec;
`;
const Previews = styled(Box)`
  display: grid;
  // grid-template-rows: 150px 90px;
  grid-template-rows: 150px;
  grid-template-areas: 'big big big';
  // grid-template-areas: "big big big"
  //                       "small small small ";
  column-gap: 4px;
  row-gap: 4px;
`;
const Big = styled(Box)<{ src?: string }>`
  height: 150px;
  background: ${props => props.theme.colors.medium};
  border-radius: 4px;
  grid-area: big;

  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center center;
`;
// const Smalls = styled(Box)`
// grid-area: small;
// display: grid;
// grid-template-columns: 1fr 1fr 1fr;
// column-gap: 4px;
// `
// const Small = styled(Box)`
//   background: ${props => props.theme.colors.medium};
//   border-radius: 4px;
//   `
const Info = styled(Box)`
  margin: 8px;
`;
const TotResources = styled(Text)`
  flex: 1;
`;
const Action = styled(Box)``;

const ActionText = styled(Text)`
  color: ${props => props.theme.colors.darker};
  font-weight: 600;
`;

export const tempCollection: React.FC<Props> = ({
  link,
  icon,
  name,
  summary,
  displayUsername,
  totalResources,
  isFollowing,
  toggleFollowFormik,
  hideActions
}) => {
  return (
    <Bordered mb={1}>
      <WrapperLink link={link}>
        <AvatarCollection src={icon} />
        <Infos ml={3}>
          <Flex>
            <Box flex={1}>
              <Title>{name}</Title>
              {/* <C>+{displayUsername}</Username> */}
            </Box>
          </Flex>
          <Summary variant="text" mt={1} mb={2}>
            {summary && summary.length > 140
              ? summary.replace(/^([\s\S]{140}[^\s]*)[\s\S]*/, '$1...')
              : summary}
          </Summary>
          <MetaWrapper mt={2} alignItems="center">
            <Archive size={18} />
            <Text ml={2} variant="suptitle">
              {totalResources || 0} <Trans>Resources</Trans>
            </Text>
          </MetaWrapper>

          <Meta mt={2}>
            {hideActions ? null : (
              <ActionItem
                bordered
                isFollowing={isFollowing ? true : false}
                onClick={toggleFollowFormik.submitForm}
              >
                <Text variant={'suptitle'} sx={{ textTransform: 'capitalize' }}>
                  {isFollowing ? <Trans>Unfollow </Trans> : <Trans>follow</Trans>}
                </Text>
              </ActionItem>
            )}
          </Meta>
        </Infos>
      </WrapperLink>
    </Bordered>
  );
};

const WrapperLink = styled(SimpleLink)`
  // color: red;
  // a {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   z-index: 1;
  // }
`;

const MetaWrapper = styled(Flex)`
  color: ${props => props.theme.colors.dark};
  svg {
    margin: 0;
  }
`;

const Summary = styled(Text)`
  color: ${props => props.theme.colors.dark};
`;
const AvatarCollection = styled(Box)<{ src?: string }>`
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  min-width: 48px;
  height: 48px;
  padding: 15%;
  background-color: transparent;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center center;
`;

const ActionItem = styled(Flex)<{ isFollowing?: boolean; bordered?: boolean }>`
  align-items: center;

  color: ${props =>
    props.isFollowing ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  div {
    color: ${props => (props.isFollowing ? props.theme.colors.lighter : props.theme.colors.darker)};
  }
  cursor: pointer;
  background: ${props => (props.isFollowing ? props.theme.colors.primary : 'transparent')};
  border: 1px solid ${props => (props.isFollowing ? props.theme.colors.primary : 'transparent')};
  border: 1px solid ${props => (props.bordered ? props.theme.colors.primary : 'transparent')};
  border-radius: 4px;
  padding: 2px 8px;
  text-align: center;
  font-size: ${typography.size.s1};

  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    background: ${props =>
      props.isFollowing ? props.theme.colors.mediumdark : props.theme.colors.primary};
    border-color: ${props =>
      props.isFollowing ? props.theme.colors.mediumdark : props.theme.colors.primary};
    div {
      color: ${props => props.theme.colors.lightest};
    }
  }
`;

// const ActionIcon = styled(Box)`
//   width: 30px;
//   height: 30px;
//   border-radius: 99999px;
//   display: inline-flex;
//   align-items: center;
//   align-content: center;
//   text-align: center;
//   margin-left: -8px;
//   svg {
//     margin: 0 auto;
//   }
// `;

// const TitleLink = styled(SimpleLink)`
//   text-decoration: none;
//   color: ${props => props.theme.colors.darker};
//   background: red;
//   > a {
//     text-decoration: none;
//   }
// `;

// const Meta = styled(Flex)`
//   color: ${props => props.theme.colors.medium};
//   position: absolute;
//   z-index: 2;
//   bottom: 0;
//   left: 0;
// `;

// const Username = styled(Text)`
//   color: ${props => props.theme.colors.mediumdark};
//   flex: 1;
//   text-transform: lowercase;
// `;

const Bordered = styled(Flex)`
  border-radius: 4px;
  border: ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.appInverse};
  text-decoration: none;
  position: relative;
  &:hover {
    background: ${props => darken('0.05', props.theme.colors.appInverse)};
  }
  * {
    text-decoration: none !important;
    &:hover {
      text-decoration: none !important;
    }
  }
`;

const Infos = styled(Box)`
  flex: 1;
  position: relative;
  div {
    text-decoration: none;
  }
`;
// const Title = styled(Heading)`
//   color: ${props => props.theme.colors.darker};
//   text-decoration: none;
//   word-break: break-all;
//   margin-top: 8px;
//   ${ellipsis('380px')};
// `;
