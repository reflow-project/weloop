import styled from 'ui/themes/styled';
import React, { FC, ReactElement, useState } from 'react';
import media from 'styled-media-query';
import { Box, Flex } from 'rebass/styled-components';
import { Settings, LogOut, PlusSquare } from 'react-feather';
import Avatar from 'ui/elements/Avatar';
import { NavLink } from 'react-router-dom';
// import { CreateMenuHOK } from '../../../HOC/modules/CreateMenuHOK/CreateMenuHOK';

export const Burger: FC<{ open: boolean; setOpen: (_: boolean) => unknown }> = ({
  open,
  setOpen
}) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
export interface MenuProps {
  open: boolean;
  Side: ReactElement;
  setOpen(_: boolean): any;
  userImage: string;
  name: string;
  username: string;
  signOut(): any;
}
export const Menu: FC<MenuProps> = ({
  open,
  Side,
  setOpen,
  userImage,
  name,
  username,
  signOut
}) => {
  const [isCreateOpen, toggleCreate] = useState(false);

  return (
    <div>
      {open && <Background onClick={() => setOpen(false)} />}
      <StyledMenu open={open}>
        <Profile>
          <User>
            <Avatar size="s" src={userImage} />
            <Title>{name}</Title>
            <Username>{username}</Username>
            <RightMenuWrapper>
              {/*<CreateMenuHOK open={isCreateOpen} openHandler={toggleCreate} />*/}
              <Span to={'/settings'}>
                <Settings size="24" strokeWidth={1} color={'#333'} />
              </Span>
              <CreateMenuSpan role="button" onClick={() => toggleCreate(!isCreateOpen)}>
                <PlusSquare size={16} color={'#333'} />
                <span>Create</span>
              </CreateMenuSpan>
            </RightMenuWrapper>
          </User>
          {/* <Button variant="primary">Create a new community</Button> */}
        </Profile>

        <Communities>{Side}</Communities>

        <Bottom>
          <List>
            <Item onClick={signOut}>
              <LogOut size={18} />
              <Box ml={2}>Sign out</Box>
            </Item>
          </List>
        </Bottom>
      </StyledMenu>
    </div>
  );
};

const Bottom = styled(Box)``;

const Profile = styled(Box)`
  padding: 16px;
  border-bottom: ${props => props.theme.colors.border};
`;
const User = styled(Box)`
  position: relative;
  > div:first-of-type {
    width: 60px;
    height: 60px;
    border-radius: 60px;
  }
`;

const RightMenuWrapper = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  line-height: initial;
  ${media.lessThan('small')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
  `}
`;
const CreateMenuSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #333;

  svg {
    margin-right: 10px;
  }
`;

const Span = styled(NavLink)`
  display: inline-block;
  margin-right: 12px;
`;

const Title = styled(Box)`
  line-height: initial;
  margin-top: 8px;
  font-weight: 700;
  color: ${props => props.theme.colors.dark};
`;
const Username = styled(Box)`
  line-height: initial;
  margin-top: 8px;
  font-weight: 500;
  color: ${props => props.theme.colors.mediumdark};
`;
const Communities = styled(Box)`
  overflow: scroll;
  padding: 16px;
`;

const List = styled.div<{ lined?: boolean }>`
  border-top: 1px solid ${props => props.theme.colors.medium};
`;
const Item = styled(Flex)`
  line-height: 60px;
  height: 60px;
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  width: 100px;
  svg {
    stroke: ${props => props.theme.colors.dark};
  }
  div {
    font-weight: 600;
    color: ${props => props.theme.colors.dark};
  }
  & span {
    display: inline-block;
    margin-right: 8px;
  }
  & a {
    color: inherit !important;
    text-decoration: none;
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Background = styled(Box)<{ open: boolean }>`
  z-index: 4000;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: calc(100vh - 65px);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
`;

export const StyledBurger = styled.button<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  line-height: 75px;
  margin: 0 auto;
  margin-top: 26px;
  &:focus {
    outline: none;
  }

  div {
    width: 18px;
    height: 2px;
    background: ${({ theme, open }) => (open ? theme.colors.primary : theme.colors.darker)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const StyledMenu = styled.nav<{ open: boolean }>`
  background: ${({ theme }) => theme.colors.appInverse};
  height: calc(100vh - 65px);
  min-width: 230px;
  text-align: left;
  position: fixed;
  z-index: 4020;
  top: 0;
  left: 0;
  right: 80px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  overflow: hidden;
  display: grid;
  grid-template-rows: 160px 1fr 60px;
  ${media.lessThan('small')`
    width: 100%;
    right: 0;
  `}
`;
