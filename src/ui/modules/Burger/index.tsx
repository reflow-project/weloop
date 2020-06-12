import styled from 'ui/themes/styled';
import React from 'react';
import { Box } from 'rebass/styled-components';

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export const Menu = ({ open, side, setOpen }) => {
  return (
    <>
      {open && <Background onClick={() => setOpen(false)} />}
      <StyledMenu open={open}>
        <side.Comp {...side.props} />
      </StyledMenu>
    </>
  );
};

const Background = styled(Box)<{ open: boolean }>`
  z-index: 99998;
  background: rgba(0,0,0,.9);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: calc(100vh - 75px);
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  // transform: ${({ open }) => (open ? '' : 'translateX(-100%)')};
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
  height: calc(100vh - 75px);
  text-align: left;
  padding: 2rem;
  position: absolute;
  z-index: 999999999999;
  top: 0;
  left: 0;
  bottom: 0px;
  right: 16px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  overflow: scroll;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
