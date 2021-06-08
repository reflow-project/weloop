import React, { FC } from 'react';
import styled from 'ui/themes/styled';
import Loader from '../Loader';
import { darken, lighten, transitions } from 'polished';
import { Button } from 'rebass/styled-components';
import { ButtonProps } from 'rebass';

const WrapperButton = styled(Button)<{
  variant: string;
  isIcon: boolean;
  disabled: boolean;
}>`
  ${transitions('background, 0.2s')};
  width: ${props => (props.isIcon === true ? '40px' : 'auto')};
  border-radius: ${props => (props.isIcon === true ? '100%' : '4px')};
  padding: ${props => (props.isIcon === true ? '0px' : 'auto')};
  opacity: ${props => (props.disabled === true ? '0.7' : '1')};
  cursor: ${props => (props.disabled === true ? 'default' : 'pointer')};
  &.show-more {
    padding: 3px 8px;
    background: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    svg {
      stroke: ${props => props.theme.colors.primary};
      margin-right: 10px;
    }
  }
  &:hover && not:['disabled'] {
    background: ${props => {
      switch (props.variant) {
        case 'primary': {
          return darken('0.1', props.theme.colors.primary);
        }
        case 'danger': {
          return darken('0.1', props.theme.colors.primary);
        }
        default: {
          lighten('0.3', props.theme.colors.primary);
        }
      }
    }}
`;

export interface Props extends ButtonProps {
  isSubmitting?: boolean;
  variant: string;
  isDisabled?: boolean;
  isIcon?: boolean;
  className?: string;
}

const MNButton: FC<Props> = props => (
  //@ts-ignore
  <WrapperButton
    {...props}
    className={props.variant === 'show-more' ? 'show-more' : ''}
    isSubmitting={props.isSubmitting}
    disabled={props.isDisabled}
    isIcon={props.isIcon}
    variant={props.variant}
  >
    {props.isSubmitting ? <Loader variant={props.variant} /> : props.children}
  </WrapperButton>
);

export default MNButton;
