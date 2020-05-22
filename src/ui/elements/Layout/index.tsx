import styled from 'ui/themes/styled';
import { Box, Flex } from 'rebass/styled-components';
import media from 'styled-media-query';

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
  margin: 0px;
  min-height: 0px;
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
  ${media.lessThan('1005px')`
  max-width: 100%;
  `};
`;

export const WrapperCont = styled(Flex)`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  align-items: stretch;
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0px;
  min-height: 0px;
  // background: ${props => props.theme.colors.appInverse};
  min-width: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
`;

export const Wrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  flex: 1;
  & ul {
    display: block;

    & li {
      display: inline-block;

      & h5 {
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  & h4 {
    margin: 0;
    font-weight: 400 !important;
    font-size: 14px !important;
    color: #151b26;
    line-height: 40px;
  }
`;

export const MenuList = styled(Flex)`
  border-bottom: ${props => props.theme.colors.border};
  border-top: ${props => props.theme.colors.border};
  height: 60px;
  // margin-top: 16px;
  padding: 12px 8px;
  background: ${props => props.theme.colors.appInverse};
  a {
    font-weight: 600;
    text-decoration: none;
    margin-right: 8px;
    color: ${props => props.theme.colors.darker};
    letterspacing: 1px;
    font-size: 13px;
    padding: 0px 8px;
    line-height: 34px;
    white-space: nowrap;
    &.active {
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
