import Select from 'react-select';
import React, { FC } from 'react';
import styled from 'ui/themes/styled';
import { darken, lighten, transitions } from 'polished';
import { ButtonProps } from 'rebass';
import { IntentActions } from '../../modules/ProposedIntentPanel';

const WrapperSelect = styled(Select)`
  small {
    display: block;
    padding-top: 6px;
    font-size: 10px;
    color: #aaa;
  }
  b,
  .select__value-container,
  .select__single-value {
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .select__control--menu-is-open,
  .select__control--is-focused {
    border-color: #05244f !important;
    box-shadow: none;

    small {
      display: none;
    }
  }
  .select__control {
    border: 1px solid #05244f;
    border-radius: 4px;
    height: 40px;
  }
  ${transitions('background, 0.2s')};
  margin: '0 10px 0 0 ';
  opacity: ${props => (props.disabled === true ? '0.7' : '1')};
  cursor: 'pointer';
  &:hover && not:['disabled'] {
    background: ${props =>
      props.variant === 'primary' || props.variant === 'danger'
        ? darken('0.1', props.theme.colors.primary)
        : lighten('0.3', props.theme.colors.primary)};
  }
`;

export interface Props extends ButtonProps {
  options?: IntentActions[];
  variant: string;
}

const MNSelect: FC<Props> = props => {
  const optionsList = props.options
    ? props.options.map(el => ({
        value: el.label,
        label: (
          <span>
            <b>{el.label}l</b>
            <small>{el.note}</small>
          </span>
        )
      }))
    : [];

  return (
    <WrapperSelect
      variant={props.variant}
      className="basic-single"
      classNamePrefix="select"
      defaultValue={'All'}
      isDisabled={false}
      isLoading={false}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      name="actions"
      options={optionsList}
    />
  );
};

export default MNSelect;
