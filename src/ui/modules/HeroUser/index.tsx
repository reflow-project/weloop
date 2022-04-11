import { Trans } from '@lingui/macro';
import React, { FC } from 'react';
import { MapPin } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import { MDComment } from 'ui/elements/Layout/comment';
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
  toggleDropdown(): unknown;
  flag(): any;
}

export type Props = LoadedMe | LoadedOther | Loading | any;

export const HeroUser: FC<Props> = props => {
  if (props.status === Status.Loading) {
    return null;
  }
  const baseUrl = process.env.REACT_APP_GRAPHQL_IMG_LINK;
  return (
    <ProfileBox p={1}>
      <Hero>
        <HeroBg src={`${baseUrl}${props.user.profile.image}`} />
        <FlexProfile>
          <WrapperHero>
            <Img
              style={{
                backgroundImage: `url("${baseUrl}${props.user.profile.icon}")`
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
              </>
            )}
          </HeroAction>
        </FlexProfile>
        <HeroInfo ml={3}>
          <HeroTitle sx={{ fontSize: '18px' }} mt={2} variant="heading" fontWeight={'bold'}>
            {props.user?.profile?.name}
          </HeroTitle>
          <Username mt={1}>
            @{props.user?.character?.username}
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
