import React from 'react';
import styled from 'ui/themes/styled';
import { Box, Flex, Text } from 'rebass/styled-components';
import Avatar from 'ui/elements/Avatar';
// import { UserPlus } from 'react-feather';
import { FormikHook } from 'ui/@types/types';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export interface Props {
  image: string;
  name: string;
  username: string;
  bio: string;
  profileUrl: string;
  toggleFollowFormik: FormikHook;
  isFollowing: boolean;
  hideActions?: boolean;
}

export const User: React.FC<Props> = ({
  image,
  name,
  username,
  bio,
  profileUrl,
  toggleFollowFormik /* , isFollowing */,
  hideActions
}) => (
  <WrapperLink to={profileUrl}>
    <WrapperFlex p={3}>
      <Avatar variant="avatar" src={image} />
      <Wrapper ml={2}>
        <Names>
          <Title variant="subhead">{name}</Title>
          <Username ml={1}>{username}</Username>
        </Names>
        <Box mr={1}>
          <Text variant="text">{bio}</Text>
        </Box>
      </Wrapper>
      {/* {hideActions ? null : (
      <Icon>
        <UserPlus size={20} onClick={toggleFollowFormik.submitForm} />
      </Icon>
    )} */}
    </WrapperFlex>
  </WrapperLink>
);

const WrapperLink = styled(NavLink)`
  text-decoration: none !important;
  * {
    text-decoration: none !important;
  }
`;
const WrapperFlex = styled(Flex)`
  border: ${props => props.theme.colors.border};
  border-radius: 4px;
  &:hover {
    background: ${props => darken('0.05', props.theme.colors.mediumlight)};
  }
  * {
    text-decoration: none;
  }
`;

const Title = styled(Text)`
  color: ${props => props.theme.colors.dark};
  text-decoration: none !important;
`;

// const Icon = styled(Box)`
//   cursor: pointer;
//   height: 40px;
//   width: 40px;
//   border-radius: 40px;
//   display: flex;
//   align-items: center;
//   &:hover {
//     background: ${props => props.theme.colors.lighter};
//     svg {
//       stroke: ${props => props.theme.colors.primary};
//     }
//   }
//   svg {
//     stroke: ${props => props.theme.colors.medium};
//     margin: 0 auto;
//   }
// `;

const Wrapper = styled(Box)`
  flex: 1;
`;
const Username = styled(Text)`
  max-width: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.theme.colors.mediumdark};
  flex: 1;
`;

const Names = styled(Flex)`
  align-items: center;
`;
