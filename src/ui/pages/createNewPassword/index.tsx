import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input } from '@rebass/forms';
import * as React from 'react';
import { FormikHook } from 'ui/@types/types';
import Alert from 'ui/elements/Alert';
import Button from 'ui/elements/Button';
import LogoContainer from 'ui/elements/Logo';
import { AlertWrapper } from 'ui/modules/Modal';
import styled from 'ui/themes/styled';

export interface NewPasswordFormValues {
  password: string;
  passwordConfirm: string;
}

export interface Props {
  formik: FormikHook<NewPasswordFormValues>;
}

let tt = {
  placeholders: {
    password: i18nMark('Enter your new password'),
    passwordConfirm: i18nMark('Confirm your new password')
  }
};

export const CreateNewPassword: React.FC<Props> = ({ formik }) => {
  return (
    <>
      <Container>
        <LoginWrapper>
          <FormWrapper>
            <LogoContainer />
            <Input
              placeholder={tt.placeholders.password}
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && (
              <AlertWrapper>
                <Alert variant="negative">{formik.errors.password}</Alert>
              </AlertWrapper>
            )}
            <Spacer />
            <Input
              placeholder={tt.placeholders.passwordConfirm}
              name="passwordConfirm"
              type="password"
              value={formik.values.passwordConfirm}
              onChange={formik.handleChange}
            />
            {formik.errors.passwordConfirm && (
              <AlertWrapper>
                <Alert variant="negative">{formik.errors.passwordConfirm}</Alert>
              </AlertWrapper>
            )}
            <Button
              variant="primary"
              isSubmitting={formik.isSubmitting}
              isDisabled={formik.isSubmitting}
              type="submit"
              onClick={formik.submitForm}
            >
              <Trans>Save the new password</Trans>
            </Button>
          </FormWrapper>
        </LoginWrapper>
      </Container>
    </>
  );
};

export default CreateNewPassword;

const LoginWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr;
  grid-template-areas: 'form';
  input {
    height: 50px;
    color: inherit;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #dadada;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 432px;
  margin-top: 60px;
  padding: 16px;
  & button {
    margin-top: 16px;
    width: 100%;
    &:hover {
      background: #d67218 !important;
    }
  }
`;

const FormWrapper = styled.div`
  grid-area: form;
`;

const Spacer = styled.div`
  width: 10px;
  height: 10px;
`;
