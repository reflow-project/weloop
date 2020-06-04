import React, { ComponentType, FC } from 'react';
import { Box, Text, Flex } from 'rebass/styled-components';
import { MapPin, MoreVertical, Flag } from 'react-feather';
import styled from 'ui/themes/styled';
import media from 'styled-media-query';
import Button from 'ui/elements/Button';
import { Trans } from '@lingui/macro';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import { FormikHook } from 'ui/@types/types';
import Modal from 'ui/modules/Modal';
import { NavLink } from 'react-router-dom';
import { MDComment } from 'ui/elements/Layout/comment';

export enum Status {
  Loading,
  Loaded
}

export interface Loading {
  status: Status.Loading;
}
export interface Loaded {
  status: Status.Loaded;
  me: boolean;
  image: string;
  icon: string;
  name: string;
  isFlagged: boolean;
  displayUsername: string;
  location: string;
  summary: string;
  FlagModal: ComponentType<{ done(): any }>;
}
export interface LoadedMe extends Loaded {
  me: true;
  isAdmin: boolean;
}
export interface LoadedOther extends Loaded {
  me: false;
  following: boolean;
  toggleFollowFormik: FormikHook<{}>;
  isOpenDropdown: boolean;
  setOpenDropdown(open: boolean): unknown;
}
export type Props = LoadedMe | LoadedOther | Loading;

export const HeroUser: FC<Props> = props => {
  const [isOpenFlag, setOpenFlag] = React.useState(false);
  if (props.status === Status.Loading) {
    return null;
  }

  return (
    <ProfileBox p={1}>
      <Hero>
        <HeroBg src={props.image} />
        <FlexProfile>
          <WrapperHero>
            <Img
              style={{
                backgroundImage: `url(${props.icon})`
              }}
            />
          </WrapperHero>
          <HeroAction mr={2}>
            {props.me ? (
              <NavLink exact to={'/settings/'}>
                <Button mr={2} variant={'outline'}>
                  <Trans>Edit Profile</Trans>
                </Button>
              </NavLink>
            ) : (
              <>
                <Button
                  mr={2}
                  variant={props.following ? 'danger' : 'primary'}
                  isSubmitting={props.toggleFollowFormik.isSubmitting}
                  isDisabled={props.toggleFollowFormik.isSubmitting}
                  onClick={props.toggleFollowFormik.submitForm}
                >
                  {props.following ? (
                    <Trans>Unfollow</Trans>
                  ) : (
                    <Trans>Follow</Trans>
                  )}
                </Button>
                <More>
                  <MoreVertical
                    size={20}
                    onClick={() => props.setOpenDropdown(true)}
                  />
                  {props.isOpenDropdown && (
                    <Dropdown orientation={'bottom'} cb={props.setOpenDropdown}>
                      <DropdownItem onClick={() => setOpenFlag(true)}>
                        <Flag size={20} color={'rgb(101, 119, 134)'} />
                        <Text sx={{ flex: 1 }} ml={2}>
                          {!props.isFlagged ? (
                            <Trans>Flag</Trans>
                          ) : (
                            <Trans>Unflag</Trans>
                          )}{' '}
                          {props.displayUsername}
                        </Text>
                      </DropdownItem>
                    </Dropdown>
                  )}
                </More>
              </>
            )}
          </HeroAction>
        </FlexProfile>
        <HeroInfo ml={3}>
          <HeroTitle
            sx={{ fontSize: '18px' }}
            mt={2}
            variant="heading"
            fontWeight={'bold'}
          >
            {props.name}
          </HeroTitle>
          <Username mt={1} fontSize={2}>
            @{props.displayUsername}
            {props.me && props.isAdmin && <AdminBadge ml={2}>Admin</AdminBadge>}
          </Username>

          <Box mt={2}>
            <MDComment content={props.summary} />
          </Box>
          {props.location ? (
            <Location mt={2}>
              <span>
                <MapPin strokeWidth={1} size={20} />
              </span>
              {props.location}
            </Location>
          ) : null}
        </HeroInfo>
      </Hero>
      {isOpenFlag && (
        <Modal closeModal={() => setOpenFlag(false)}>
          <props.FlagModal done={() => setOpenFlag(false)} />
        </Modal>
      )}
    </ProfileBox>
  );
};

const AdminBadge = styled(Box)`
  padding: 1px 8px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 2px;
  color: ${props => props.theme.colors.primary};
  display: inline-block;
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

const HeroAction = styled(Flex)`
  align-items: center;
`;

const HeroTitle = styled(Text)`
  color: ${props => props.theme.colors.darker};
`;

const FlexProfile = styled(Flex)`
  justify-content: space-between;
  ${media.lessThan('860px')`
  flex-direction: column;
  align-items: center;
  text-align: center;
`};
`;

const ProfileBox = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  padding-bottom: 16px;
`;

const Username = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  font-size: 14px;
`;

const Location = styled(Flex)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  line-height: 26px;
  font-size: 14px;
  border-radius: 100px;
  align-items: center;
  span {
    margin-right: 8px;
    & svg {
      stroke: ${props => props.theme.colors.mediumdark};
      vertical-align: text-bottom;
    }
    .--rtl & {
      margin-left: 8px;
      margin-right: 0px;
    }
  }
`;

const HeroBg = styled.div<{ src: string }>`
  height: 250px;
  margin: -4px;
  background: ${props => props.theme.colors.light};
  background-image: url(${props =>
    props.src ? props.src : props.theme.colors.light});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const WrapperHero = styled.div`
  padding: 24px;
  padding-top: 0;
  z-index: 9999;
  position: relative;
  margin-top: -60px;
  padding-bottom: 0;
`;

const Img = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 6px;
  background: ${props => props.theme.colors.light};
  border: 3px solid ${props => props.theme.colors.appInverse};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: middle;
  margin-right: 16px;
`;

const Hero = styled.div`
  width: 100%;
  position: relative;
  border-radius: 6px;
`;

const HeroInfo = styled(Box)`
  & button {
    span {
      vertical-align: sub;
      display: inline-block;
      height: 30px;
      margin-right: 4px;
    }
  }
`;
