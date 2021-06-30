import { Trans } from '@lingui/macro';
import React, { FC } from 'react';
import { Flag, MapPin, MoreVertical } from 'react-feather';
import { useHistory } from 'react-router';
import { Slide, toast } from 'react-toastify';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import { CreateDefaultEvent } from '../../../fe/resource/create/useCreateDefaultEvent';
// import { NavLink } from 'react-router-dom';
import { MDComment } from 'ui/elements/Layout/comment';
import { Dropdown, DropdownItem } from 'ui/modules/Dropdown';
import styled from 'ui/themes/styled';

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
  isProvider?: boolean;
  userId?: string;
}

export interface LoadedMe extends Loaded {
  me: true;
  isAdmin: boolean;
  createDefaultEvent?: (__0: CreateDefaultEvent) => Promise<any | null | undefined>;
}

export interface LoadedOther extends Loaded {
  me: false;
  following: boolean;
  toggleFollowFormik: FormikHook<{}>;
  isOpenDropdown: boolean;
  toggleDropdown(): unknown;
  flag(): any;
}

export type Props = LoadedMe | LoadedOther | Loading;

export const HeroUser: FC<Props> = props => {
  const history = useHistory();
  const [isButtonShow, setIsButtonShow] = React.useState(true);
  if (props.status === Status.Loading) {
    return null;
  }

  const handleCreateDefaultEvent = () => {
    if (props.me && props.createDefaultEvent) {
      props
        .createDefaultEvent({
          name: 'My first inventory',
          note: 'Created automatically',
          action: 'transfer'
        })
        .then(() => {
          const redirect = `/inventory/user/${props.userId}`;
          history.replace(redirect);

          setIsButtonShow(false);
          toast.success(`You name added in providers list`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
        })
        .catch(error => {
          toast.error(`Login Error: ${error}`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
        });
    }
  };

  return (
    <ProfileBox p={1}>
      <Hero>
        <HeroBg src={props.image} />
        <FlexProfile>
          <WrapperHero>
            <Img
              style={{
                backgroundImage: `url("${props.icon}")`
              }}
            />
          </WrapperHero>
          <HeroAction mr={2}>
            {props.me ? (
              <></>
            ) : (
              <>
                <Button
                  mr={2}
                  variant={props.following ? 'danger' : 'primary'}
                  isSubmitting={props.toggleFollowFormik.isSubmitting}
                  isDisabled={props.toggleFollowFormik.isSubmitting}
                  onClick={props.toggleFollowFormik.submitForm}
                >
                  {props.following ? <Trans>Unfollow</Trans> : <Trans>Follow</Trans>}
                </Button>
                <More>
                  <MoreVertical size={20} onClick={props.toggleDropdown} />
                  {props.isOpenDropdown && (
                    <RightDd>
                      <Dropdown orientation={'bottom'} close={props.toggleDropdown}>
                        <DropdownItem onClick={props.flag}>
                          <Flag size={20} color={'rgb(101, 119, 134)'} />
                          <Text sx={{ flex: 1 }} ml={2}>
                            {!props.isFlagged ? (
                              <Trans>Flag this user</Trans>
                            ) : (
                              <Trans>Unflag this user</Trans>
                            )}{' '}
                          </Text>
                        </DropdownItem>
                      </Dropdown>
                    </RightDd>
                  )}
                </More>
              </>
            )}
          </HeroAction>
        </FlexProfile>
        <HeroInfo ml={3}>
          <HeroTitle sx={{ fontSize: '18px' }} mt={2} variant="heading" fontWeight={'bold'}>
            {props.name}
          </HeroTitle>
          <Username mt={1}>
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
      {!props.isProvider && isButtonShow && (
        <AlignCenter>
          <Button variant="warning" onClick={handleCreateDefaultEvent}>
            <Trans>Create default Economic Event to become a provider</Trans>
          </Button>
        </AlignCenter>
      )}
    </ProfileBox>
  );
};

const RightDd = styled(Box)`
  .dropdown {
    right: 0;
    left: auto;
  }
`;

const AlignCenter = styled(Box)`
  display: flex;
  justify-content: center;
`;

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
`;

const Location = styled(Flex)`
  color: ${props => props.theme.colors.mediumdark};
  font-weight: 500;
  line-height: 26px;
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
  background-image: url("${props => (props.src ? props.src : props.theme.colors.light)}");
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
