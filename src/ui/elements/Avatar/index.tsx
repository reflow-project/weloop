import * as React from 'react';
import styled from 'ui/themes/styled';
import { Box } from 'rebass/styled-components';

const sizes = {
  default: '48px',
  s: '32px',
  m: '140px',
  l: '200px'
};

type Sizes = keyof typeof sizes;

const Wrapper = styled(Box)<{ bg?: string; size: Sizes }>`
  font-family: ${props => props.theme.fontFamily};
  border-radius: 4px;
  height: ${props => sizes[props.size]};
  min-width: ${props => sizes[props.size]};
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
  size?: Sizes;
}> = ({ size = 'default', src, initials, variant }) => (
  <Wrapper size={size} bg={src}>
    {initials && !src ? <span>{initials.substr(0, 2).toUpperCase()}</span> : null}
  </Wrapper>
);

export default Avatar;
