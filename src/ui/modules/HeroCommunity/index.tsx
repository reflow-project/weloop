import { Trans } from '@lingui/macro';
// import { NavLink } from 'react-router-dom';
// import { MDComment } from 'ui/elements/Layout/comment';
import Markdown from 'markdown-to-jsx';
import { darken } from 'polished';
import React, { FC } from 'react';
import { Flag, MoreVertical, Settings, Star } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import styled from 'ui/themes/styled';

export enum Status {
  Loading,
  Loaded
}

export interface CommunityLoaded {
  status: Status.Loaded;
  isAdmin: boolean;
  isCreator: boolean;
  basePath: string;
  icon: string;
  name: string;
  summary: string;
  fullName: string;
  totalMembers: number;
  following: boolean;
  isFlagged: boolean;
  canModify: boolean;
  toggleJoinFormik: FormikHook;

  edit(): any;

  flag(): any;

  addToFeatured(): any;

  isOpenDropdown: boolean;
  toggleDropdown(): any;
}

export interface CommunityLoading {
  status: Status.Loading;
}

export interface Props {
  community: CommunityLoaded | CommunityLoading;
}

export const HeroCommunity: FC<Props> = ({ community: c }) => {
  return c.status === Status.Loading ? (
    <Text>Loading...</Text>
  ) : (
    <>
      <Hero p={1}>
        <Background
          id="header"
          style={{
            backgroundImage: `url("${c.icon}")`
          }}
        />
        <HeroInfo>
          <Title variant="heading" mt={0}>
            {c.name}
          </Title>
          <Username>@{c.fullName}</Username>
          {c.summary && (
            <Box mt={2}>
              <Markdown>{c.summary}</Markdown>
              {/* <MDComment content={c.summary} /> */}
            </Box>
          )}
          <Info mt={3}>
            <Actions>
              <Button
                mr={2}
                variant={c.following ? 'danger' : 'primary'}
                isSubmitting={c.toggleJoinFormik.isSubmitting}
                isDisabled={c.toggleJoinFormik.isSubmitting || c.isCreator}
                onClick={c.toggleJoinFormik.submitForm}
              >
                {c.following ? <Trans>Leave</Trans> : <Trans>Join</Trans>}
              </Button>
              <More onClick={c.toggleDropdown}>
                <MoreVertical size={20} />
                {c.isOpenDropdown && (
                  <RightDd>
                    <Dropdown orientation={'bottom'} close={c.toggleDropdown}>
                      {c.canModify && (
                        <DropdownItem onClick={c.edit}>
                          <Settings size={20} color={'rgb(101, 119, 134)'} />
                          <Text sx={{ flex: 1 }} ml={2}>
                            <Trans>Edit the community</Trans>
                          </Text>
                        </DropdownItem>
                      )}
                      <DropdownItem onClick={c.flag}>
                        <Flag size={20} color={'rgb(101, 119, 134)'} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          {!c.isFlagged ? (
                            <Trans>Flag this community</Trans>
                          ) : (
                            <Trans>Unflag this community</Trans>
                          )}
                        </Text>
                      </DropdownItem>
                      {c.isAdmin ? (
                        <AdminDropdownItem onClick={c.addToFeatured}>
                          <Star size={20} color={'rgb(211, 103, 5)'} />
                          <Text sx={{ flex: 1 }} ml={2}>
                            <Trans>Add to featured list</Trans>
                          </Text>
                        </AdminDropdownItem>
                      ) : null}
                    </Dropdown>
                  </RightDd>
                )}
              </More>
            </Actions>
          </Info>
        </HeroInfo>
      </Hero>
    </>
  );
};

// const InfoCommunity = styled(Flex)`
//   align-items: center;
// `;

const RightDd = styled(Box)`
  .dropdown {
    right: 0;
    left: auto;

    ${media.lessThan('medium')`
      right: initial;
      left: 10px;
  `}
  }
`;

// const Badge = styled(Box)`
//   border: 1px solid ${props => props.theme.colors.secondary};
//   padding: 4px;
//   border-radius: 4px;
//   color:  ${props => props.theme.colors.secondary};
//   font-size: ${typography.size.s1}
// `

const AdminDropdownItem = styled(DropdownItem)`
    border-top: 1px solid ${props => darken('0.1', props.theme.colors.light)};
    // svg {
    //   stroke: ${props => darken('0.1', props.theme.colors.primary)};
    // }
    `;

const More = styled(Box)`
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  border: ${props => props.theme.colors.border};
  border-radius: 4px;
  svg {
    margin: 0 auto;
    stroke: ${props => props.theme.colors.mediumdark};
  }
`;

const Info = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
// const Total = styled(Text)`
//   color: ${props => props.theme.colors.primary};
// `;

const Title = styled(Text)`
  color: ${props => props.theme.colors.darker};
  ${media.lessThan('medium')`
`};
`;

const Actions = styled(Flex)`
  align-items: center;
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  text-transform: lowercase;
`;

// const MembersTot = styled(NavLink)`
//   margin-top: 0px;
//   cursor: pointer;
//   cursor: pointer;
//   text-decoration: none;
//   * {
//     text-decoration: none;
//   }
//   flex: 1;
//   > div {
//     display: flex;
//   }
//   ${clearFix()} & span {
//     margin-right: 4px;
//     float: left;
//     height: 32px;
//     line-height: 32px;
//     & svg {
//       vertical-align: middle;
//     }
//     .--rtl & {
//       float: right;
//       margin-right: 0px;
//       margin-left: 8px;
//     }
//   }
// `;

const Hero = styled(Box)`
  width: 100%;
  position: relative;
  background: ${props => props.theme.colors.appInverse};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Background = styled.div`
  margin-top: 24px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.medium};
  position: relative;
  margin: 0 auto;
  border-radius: 4px;
  background-position: center center;
//   ${media.lessThan('medium')`
//     display: none;
// `};
`;

const HeroInfo = styled.div`
  padding: 16px;
  ${media.lessThan('medium')`
   padding: 8px;
`} & button {
    span {
      vertical-align: sub;
      display: inline-block;
      height: 30px;
      margin-right: 4px;
    }
  }
`;

export default HeroCommunity;
