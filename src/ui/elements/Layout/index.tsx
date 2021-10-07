import styled from 'ui/themes/styled';
import { Box, Flex } from 'rebass/styled-components';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';

export const List = styled(Box)`
  > div:last-of-type {
    border-bottom: none;
  }
`;

export const MainContainer = styled(Flex)`
  align-items: stretch;
  flex-grow: 1;
  flex-direction: row;
  width: 100%;
`;

export const HomeBox = styled(Flex)`
  width: 600px;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  flex-direction: column;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
  z-index: 0;
`;

export const WrapperCont = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  min-height: 0;
  min-width: 0;
  padding: 0;
  position: relative;
  z-index: 0;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  ${media.lessThan('medium')`
       padding-bottom: 75px;
  `};

  & ul {
    display: block;

    & li {
      display: inline-block;

      & h5 {
        font-weight: 500;
      }
    }
  }

  & h4 {
    margin: 0;
    font-weight: 400 !important;
    color: #151b26;
    line-height: 40px;
  }
`;

export const MenuItem = styled(NavLink)`
  width: auto;
  overflow: hidden;
  text-align: center;

  ${media.lessThan('medium')`
      flex-basis: 44px;
      overflow: hidden;
      transition: flex-basis 0.3s ease;
  `};

  &.active {
    ${media.lessThan('medium')`
      flex-basis: 36%;
      overflow: hidden;
      transition: flex-basis 0.3s ease;
  `};

  }

  .text-holder {
    display: block;
    ${media.lessThan('medium')`
      display: none
  `};
  }

  .icon-holder {
    display: none;

    ${media.lessThan('medium')`
      display: flex;
  `}
  }

  &.active .icon-holder {
    ${media.lessThan('medium')`
      display: none;
  `};
  }

  &.active .text-holder {
    ${media.lessThan('medium')`
      display: block;
  `};
`;

export const MenuList = styled(Flex)`
  border-bottom: ${props => props.theme.colors.border};
  border-top: ${props => props.theme.colors.border};
  height: 60px;
  padding: 12px 8px;
  background: ${props => props.theme.colors.appInverse};

  ${media.lessThan('medium')`
      justify-content: space-between;
      align-item: center;
      flex-wrap: nowrap;
  `};
}

a {
  font-weight: 600;
  text-decoration: none;
  margin-right: 8px;
  color: ${props => props.theme.colors.darker};
  letterspacing: 1px;
  padding: 0 8px;
  line-height: 34px;
  white-space: nowrap;

  ${media.lessThan('medium')`
       padding: 0;
  `};

  &.active,
  &:hover {
    color: ${props => props.theme.colors.lighter};
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
  }
}
`;

export const ObjectsList = styled(Box)`
  background: ${props => props.theme.colors.appInverse};

  &.replies > div {
    margin-bottom: 0;
    border-bottom: ${props => props.theme.colors.border};
  }

  > div {
    &:last-of-type {
      margin-bottom: 4px;
      border-bottom: 0;
    }
  }
`;

export const BottomBordered = styled(Box)`
  border-bottom: ${props => props.theme.colors.border};
`;

export const CollectionsWrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin: 16px;
  margin-bottom: 24px !important;
`;

export const ButtonIcon = styled(Box)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lighter};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: ${props => props.theme.colors.primary};
  }

  &:focus {
    background: ${props => props.theme.colors.primary};

    svg {
      stroke: ${props => props.theme.colors.lighter};
    }
  }
`;
