import * as React from 'react';
import styled from 'ui/themes/styled';
import { Box } from 'rebass/styled-components';

const Wrapper = styled(Box)<{ bg?: string; size?: string }>`
  font-family: ${props => props.theme.fontFamily};
  border-radius: 4px;
  min-width: ${props =>
    props.size === 'm'
      ? '140px'
      : props.size === 'l'
      ? '200px'
      : props.size === 's'
      ? '32px'
      : '48px'};
  height: ${props =>
    props.size === 'm'
      ? '140px'
      : props.size === 'l'
      ? '200px'
      : props.size === 's'
      ? '32px'
      : '48px'};
  background-color: ${props => (props.bg ? 'transparent' : props.theme.colors.light)};
  background-image: url("${props => props.bg}");
  background-size: cover;
  background-position: center center;
  span {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    line-height: normal;
    font-weight: 700;
    ${props => props.theme.colors.mediumdark};
  }
`;
const Avatar: React.FC<{
  src?: string;
  initials?: string;
  variant?: string;
  size?: string;
}> = ({ size, src, initials, variant }) => (
  <Wrapper size={size} bg={src}>
    {initials && !src ? <span>{initials.substr(0, 2).toUpperCase()}</span> : null}
  </Wrapper>
);

export default Avatar;
