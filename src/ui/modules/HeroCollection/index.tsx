// import { ChevronLeft } from 'react-feather';
import { Trans } from '@lingui/macro';
import { clearFix, darken } from 'polished';
import React, { FC } from 'react';
import { Flag as FlagIcon, MoreVertical, Settings, Star } from 'react-feather';
// import {  NavLink } from 'react-router-dom';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
// import { useHistory } from 'react-router';
// import Avatar from 'ui/elements/Avatar';
import Button from 'ui/elements/Button';
import { MDComment } from 'ui/elements/Layout/comment';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import styled from 'ui/themes/styled';

export enum Status {
  Loading,
  Loaded
}

export interface CollectionLoading {
  status: Status.Loading;
}

export interface CollectionLoaded {
  status: Status.Loaded;
  isAdmin: boolean;
  // isFeatured?: boolean;
  basePath: string;
  icon: string;
  name: string;
  fullName: string;
  summary: string;
  canModify: boolean;
  communityId: string;
  communityName: string;
  communityIcon: string;
  toggleJoinFormik: FormikHook;
  isFlagged: boolean;
  followerCount: number; //FIX ME add followerCount
  // contributorCount?: number; //FIX ME add contributorCount
  following: boolean;

  showEdit(): any;
  EditModal: JSX.Element | null;

  showFlagModal(): any;
  FlagModal: JSX.Element | null;

  showAddToFeatured(): any;
  AddToFeaturedModal: JSX.Element | null;

  isOpenDropdown: boolean;
  toggleDropdown(): any;
}
export interface Props {
  collection: CollectionLoaded | CollectionLoading;
}

export const HeroCollection: FC<Props> = ({ collection: c }) => {
  return c.status === Status.Loading ? (
    <Text>Loading...</Text>
  ) : (
    <HeroCont>
      <Hero>
        {/* <Box sx={{ position: 'relative' }}> */}
        {/* <Background style={{ backgroundImage: `url("${c.icon}")` }} /> */}
        {/* <Right>
            <Link to={`/communities/${c.communityId}`}>
              <LinkImg>
                <Avatar size="s" src={c.communityIcon} />
              </LinkImg>
              {/* <CommTitle variant="link">{c.communityName}</CommTitle> */}
        {/* </Link> */}
        {/* </Right> */}
        {/* </Box> */}
        <HeroInfo>
          <Title fontWeight={'bold'}>{c.name}</Title>
          <Username mt={1} fontSize={2}>
            +{c.fullName}
          </Username>
          <Box mt={2}>
            <MDComment content={c.summary} />
          </Box>

          <Info mt={2}>
            {/* <CountWrapper>
              <CountTot to={`${c.basePath}/followers`}>
                <Text variant="suptitle">
                  <Total mr={2}>{c.followerCount}</Total>
                  <Trans>Followers</Trans>
                </Text>
              </CountTot>
            </CountWrapper> */}
            <ActionsHero mt={3} alignItems={'center'}>
              <Button
                variant={c.following ? 'danger' : 'primary'}
                disabled={c.toggleJoinFormik.isSubmitting}
                onClick={c.toggleJoinFormik.submitForm}
                isSubmitting={c.toggleJoinFormik.isSubmitting}
              >
                {c.following ? 'Unfollow' : 'Follow'}
              </Button>
              <More ml={2} onClick={c.toggleDropdown}>
                <MoreVertical size={20} />
                {c.isOpenDropdown && (
                  <RightDd>
                    <Dropdown orientation={'bottom'} cb={c.toggleDropdown}>
                      {c.canModify && (
                        <DropdownItem onClick={c.showEdit}>
                          <Settings size={20} color={'rgb(101, 119, 134)'} />
                          <Text sx={{ flex: 1 }} ml={2}>
                            <Trans>Edit the collection</Trans>
                          </Text>
                        </DropdownItem>
                      )}
                      <DropdownItem onClick={c.showFlagModal}>
                        <FlagIcon size={20} color={'rgb(101, 119, 134)'} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          {!c.isFlagged ? (
                            <Trans>Flag this collection</Trans>
                          ) : (
                            <Trans>Unflag this collection</Trans>
                          )}
                        </Text>
                      </DropdownItem>
                      {c.isAdmin ? (
                        <AdminDropdownItem onClick={c.showAddToFeatured}>
                          <Star size={20} color={'rgb(211, 103, 5)'} />
                          <Text sx={{ flex: 1 }} ml={2}>
                            {
                              /* c.isFeatured ? (
                          <Trans>Remove from featured list</Trans>
                        ) :  */ <Trans>
                                Add to featured list
                              </Trans>
                            }
                          </Text>
                        </AdminDropdownItem>
                      ) : null}
                    </Dropdown>
                  </RightDd>
                )}
              </More>
            </ActionsHero>
          </Info>
        </HeroInfo>
      </Hero>
      {c.EditModal}
      {c.AddToFeaturedModal}
      {c.FlagModal}
    </HeroCont>
  );
};

export default HeroCollection;

const RightDd = styled(Box)`
  .dropdown {
    right: 0;
    left: auto;
  }
`;

const Info = styled(Flex)`
  align-items: center;
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

const AdminDropdownItem = styled(DropdownItem)`
  border-top: 1px solid ${props => darken('0.1', props.theme.colors.light)};
`;

// const LinkImg = styled(Box)`
//   margin-right: 8px;
//   .--rtl & {
//     margin-right: 0px;
//     margin-left: 8px;
//   }
//   div {
//     border: 2px solid white;
//     min-width: 42px;
//     min-height: 42px;
//   }
// `;
// const Right = styled(Flex)`
//   align-items: center;
//   display: inline-block;
//   position: absolute;
//   left: 8px;
//   bottom: -18px
//   top: 106px;
//   a {
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//   }
// `;

const Title = styled(Text)`
  color: ${props => props.theme.colors.darker};
  font-size: 24px;
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  font-size: 14px;
  text-transform: lowercase;
`;

const ActionsHero = styled(Flex)``;

const HeroInfo = styled.div`
  flex: 1;
  position: relative;
  ${clearFix()};
  & h2 {
    margin: 0;
    line-height: 32px !important;
    font-size: 24px !important;
    color: ${props => props.theme.colors.mediumdark};
    ${media.lessThan('medium')`
      margin-top: 8px;
    `};
  }
  & p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    margin-top: 8px;
    color: ${props => props.theme.colors.mediumdark};
  }
  .--rtl & {
    margin-right: 16px;
    margin-left: 0px;
  }
`;
const HeroCont = styled(Box)`
  margin-bottom: 16px;
  border-radius: 6px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.appInverse};
`;

const Hero = styled(Flex)`
  width: 100%;
  position: relative;
  padding: 16px;
`;

// const Background = styled.div`
//   height: 120px;
//   width: 120px;
//   border-radius: 4px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-color: ${props => props.theme.colors.light};
//   position: relative;
//   margin: 0 auto;
// `;

// const CountWrapper = styled(Flex)`
//   margin-top: 10px;
//   flex: 1;
//   > div {
//     display: flex;
//   }
// `;

// const CountTot = styled(NavLink)`
//   margin-top: 0px;
//   cursor: pointer;
//   cursor: pointer;
//   margin-right: 20px;
//   text-decoration: none;
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

// const Total = styled(Text)`
//   display: inline-flex;
//   color: ${props => props.theme.colors.primary};
// `;
