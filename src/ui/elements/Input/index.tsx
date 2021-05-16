import React, { FC } from 'react';
import styled from 'ui/themes/styled';
import Alert from 'ui/elements/Alert';

export interface Props {
  id: string | undefined;
  name: string;
  type?: string;
  onChange: any;
  placeholder?: string;
  label?: string;
  value?: string;
  disabled?: boolean;
  hint?: {
    class: 'error' | 'success' | 'disabled';
    value: string;
  };
}

const CustomInput: FC<Props> = ({
  id,
  name,
  type = 'text',
  onChange,
  placeholder = '',
  label,
  value = '',
  hint = { class: 'error', value: '' },
  disabled = false
}) => (
  <FieldWrapper disabled={disabled}>
    <label htmlFor={id}>{label}</label>
    {type !== 'textarea' && (
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    )}
    {type === 'textarea' && (
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    )}
    <span className={`hint ${hint.class}`}>{hint.value}</span>
  </FieldWrapper>
);

export default CustomInput;

const FieldWrapper = styled('div')<any>`
  textarea,
  input {
    opacity: ${props => (props.disabled === true ? '0.7' : '1')};
    cursor: ${props => (props.disabled === true ? 'default' : 'text')};
    border: 1px solid #05244f;
    border-radius: 4px;
    height: 40px;
    display: block;
    width: 100%;
    padding 0 10px;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  textarea {
    padding: 10px;
    height: 120px;
  }
`;

export const CustomAlert = styled(Alert)`
  background-color: transparent !important;
  color: #ff5a5f !important;
  text-align: right !important;
  line-height: 1 !important;
`;
