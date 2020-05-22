import * as React from 'react';
import { Trans } from '@lingui/macro';
import styled from 'ui/themes/styled';
import Button from 'ui/elements/Button';
import { Text, Box } from 'rebass/styled-components';
import { Input } from '@rebass/forms';
import { FormikHook } from 'ui/@types/types';
import Alert from 'ui/elements/Alert';
import { AlertWrapper } from 'ui/modules/Modal';
import { i18nMark } from '@lingui/react';
import LogoContainer from 'ui/elements/Logo';
import { Link } from 'react-router-dom';

export interface ResetPasswordFormValues {
  email: string;
}

export interface Props {
  formik: FormikHook<ResetPasswordFormValues>;
  isSubmitted: boolean;
}

let tt = {
  placeholders: {
    email: i18nMark('Enter your email')
  }
};

export const ResetPassword: React.FC<Props> = ({ formik, isSubmitted }) => {
  return (
    <>
      <Container>
        <LoginWrapper>
          <LogoContainer />
          {isSubmitted ? (
            <Wrapper>
              <VerifiedBox variant="text">
                <Trans>
                  Se la tua mail è presente nel nostro database, riceverai in
                  pochi minuti un link per recuperare la tua password al tuo
                  indirizzo mail.
                </Trans>
              </VerifiedBox>
              <ButtonLink to="/login">
                <Trans>Login</Trans>
              </ButtonLink>
            </Wrapper>
          ) : (
            <FormWrapper>
              <Input
                placeholder={tt.placeholders.email}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <AlertWrapper>
                  <Alert variant="bad">{formik.errors.email}</Alert>
                </AlertWrapper>
              )}
              <Button
                variant="primary"
                isSubmitting={formik.isSubmitting}
                isDisabled={formik.isSubmitting}
                type="submit"
                onClick={formik.submitForm}
              >
                <Trans>Reset the password</Trans>
              </Button>
            </FormWrapper>
          )}
        </LoginWrapper>
      </Container>
    </>
  );
};

export default ResetPassword;

const ButtonLink = styled(Link)`
  background: ${props => props.theme.colors.primary};
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  color: ${props => props.theme.colors.lighter};
  margin-top: 16px;
  margin: 0 auto;
  display: block;
  text-align: center;
  margin-top: 16px;
`;

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  border-radius: 4px;
  padding: 16px;
  max-width: 400px;
`;

const VerifiedBox = styled(Text)``;

const LoginWrapper = styled.div`
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
  max-width: 900px;
  margin-top: 60px;
  padding: 16px;
  padding-bottom: 50px;
  & button {
    margin-top: 16px;
    width: 100%;
    color: #fff !important;
    text-transform: uppercase
      &:hover {
      background: #d67218 !important;
    }
  }
`;

const FormWrapper = styled.form`
  width: 432px;
`;
