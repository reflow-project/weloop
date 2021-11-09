import Select from 'react-select';
import React, { FC } from 'react';
import styled from 'ui/themes/styled';
import { darken, lighten, transitions } from 'polished';
import { Props } from './select';

const WrapperSelect = styled(Select)`
  margin-bottom: 10px;
  small {
    display: block;
    padding-top: 6px;
    font-size: 10px;
    color: #aaa;
  }
  b,
  .select__value-container,
  .select__single-value {
    display: block;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
  }
  .select__control > div {
    height: 36px;
  }
  .select__value-container > div:not(.select__single-value) {
    height: 36px;
    padding: 0;
    margin: 0;
    line-height: 36px;
  }
  .select__value-container {
    height: 36px;
    padding: 0 10px;
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

  cursor: 'pointer';
  .select__option--is-disabled {
    opacity: 0.5;
  }
  &:hover && not:['disabled'] {
    background: ${props =>
      props.variant === 'primary' || props.variant === 'danger'
        ? darken('0.1', props.theme.colors.primary)
        : lighten('0.3', props.theme.colors.primary)};
  }
`;

export const CustomSelect: FC<Props> = ({
  onInputChange,
  onSelect,
  disabled = false,
  variant,
  placeholder = '',
  name,
  options,
  id,
  value
}) => {
  const optionsList = options
    ? options.map(el => {
        return el.isDisabled
          ? {
              id: el.id,
              value: el.label,
              isDisabled: el.isDisabled,
              label: (
                <span>
                  <b>{el.label}</b>
                  {el.note && <small>{el.note}</small>}
                </span>
              )
            }
          : {
              id: el.id,
              value: el.label,
              label: (
                <span>
                  <b>{el.label}</b>
                  {el.note && <small>{el.note}</small>}
                  {el.displayUsername && el.id === value.id && <small>{el.displayUsername}</small>}
                </span>
              )
            };
      })
    : [];

  return (
    <WrapperSelect
      onChange={(option: any) =>
        onSelect(name, {
          id: option?.id,
          label: option?.value,
          displayUsername: option?.displayUsername
        })
      }
      variant={variant}
      placeholder={placeholder}
      disabled={disabled}
      isOptionDisabled={(option: any) => option.isDisabled}
      onInputChange={(value: string) => onInputChange(name, value)}
      className="basic-single"
      classNamePrefix="select"
      value={optionsList.find(el => el.id === value?.id) || null}
      isDisabled={false}
      isLoading={false}
      isClearable={true}
      isRtl={false}
      isSearchable={true}
      name={name}
      id={id}
      options={optionsList}
    />
  );
};
