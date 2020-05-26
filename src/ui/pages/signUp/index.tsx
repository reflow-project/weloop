import * as React from 'react';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { FormikHook } from 'ui/@types/types';
import Alert from '../../elements/Alert';
import { Input, Label, Checkbox } from '@rebass/forms';
import Button from 'ui/elements/Button';
import { Box, Text, Flex } from 'rebass/styled-components';
import styled from '../../themes/styled';
import { AlertCircle } from 'react-feather';
import { AlertWrapper } from 'ui/modules/Modal';
import { INVITE_ONLY_TEXT } from 'mn-constants';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';
import LogoContainer from 'ui/elements/Logo';

let tt = {
  login: i18nMark('Sign in'),
  placeholders: {
    email: i18nMark('eg. mary@moodlers.org'),
    preferredUsername: i18nMark('eg. moodlerMary'),
    name: i18nMark('eg. Moodler Mary'),
    password: i18nMark('Choose your password'),
    passwordConfirm: i18nMark('Confirm your password')
  }
};

export interface Props {
  formik: FormikHook<SignUpFormValues>;
  registeredUsername?: string;
  registeredEmail?: string;
}

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  username: string;
  passwordConfirm: string;
  terms: boolean;
}

export const SignUpPage: React.FC<Props> = ({
  formik,
  registeredUsername,
  registeredEmail
}) => {
  return (
    <Container>
      {!formik.isSubmitting &&
      formik.submitCount &&
      registeredUsername &&
      registeredEmail ? (
        <Box mt={3}>
          <LogoContainer />
          <Text variant="suptitle">
            <Trans>Welcome</Trans> <b>{registeredUsername}</b>
          </Text>
          <Text mt={2} variant="text">
            <Trans>Please confirm your email address</Trans>
            <b>{registeredEmail}</b>
            <Trans>
              by clicking on the link we emailed you (check your spam folder if
              necessary).
            </Trans>
          </Text>

          <Alert variant="negative">{formik.errors.email}</Alert>
        </Box>
      ) : (
        <LoginWrapper>
          <LogoContainer />
          <Header>
            <Aware p={3}>
              <Box mr={2}>
                <AlertCircle size="20" color="white" />
              </Box>
              <Text variant="suptitle">{INVITE_ONLY_TEXT}</Text>
            </Aware>
          </Header>
          <Flex mt={2}>
            <FormWrapper>
              <Box>
                <label>
                  <Trans>Email</Trans>
                </label>
                <Input
                  placeholder={tt.placeholders.email}
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && (
                  <AlertWrapper>
                    <Alert variant="negative">{formik.errors.email}</Alert>
                  </AlertWrapper>
                )}
              </Box>
              <Box mt={3}>
                <label>
                  <Trans>Full name</Trans>
                </label>
                <Input
                  placeholder={tt.placeholders.name}
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && (
                  <AlertWrapper>
                    <Alert variant="negative">{formik.errors.name}</Alert>
                  </AlertWrapper>
                )}
              </Box>
              <Box mt={3}>
                <label>
                  <Trans>Preferred username</Trans>
                </label>
                <Input
                  placeholder={tt.placeholders.preferredUsername}
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
                {formik.errors.username && (
                  <AlertWrapper>
                    <Alert variant="negative">{formik.errors.username}</Alert>
                  </AlertWrapper>
                )}
              </Box>
              <Box mt={3}>
                <label>
                  <Trans>Password</Trans>
                </label>
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
              </Box>
              <Box mt={3}>
                <label>
                  <Trans>Confirm password</Trans>
                </label>
                <Input
                  placeholder={tt.placeholders.passwordConfirm}
                  name="passwordConfirm"
                  type="password"
                  value={formik.values.passwordConfirm}
                  onChange={formik.handleChange}
                />
                {formik.errors.passwordConfirm && (
                  <AlertWrapper>
                    <Alert variant="negative">
                      {formik.errors.passwordConfirm}
                    </Alert>
                  </AlertWrapper>
                )}
              </Box>
              <Box mt={3} mb={3}>
                <Label alignItems="center">
                  <Checkbox
                    name="terms"
                    id="remember"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                  />
                  <Text mr={1}>I have read and agreed the</Text>
                  <NavLink to="/terms" target="_blank">
                    Terms and Conditions
                  </NavLink>
                </Label>
              </Box>
              <Box mt={3}>
                <Button
                  variant="primary"
                  isSubmitting={formik.isSubmitting}
                  isDisabled={formik.isSubmitting}
                  type="submit"
                  onClick={formik.submitForm}
                >
                  <Trans>Signup</Trans>
                </Button>
              </Box>
            </FormWrapper>
          </Flex>
        </LoginWrapper>
      )}
    </Container>
  );
};
export default SignUpPage;

const LoginWrapper = styled(Box)`
  ${media.lessThan('medium')`
    // display: grid;
    // grid-template-columns: 1fr;
    padding: 16px
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding-bottom: 50px;
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;
`;

const FormWrapper = styled(Box)`
  margin: 0;
  flex: 1;
  input {
    height: 50px;
    color: inherit;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #dadada;
  }
  background: ${props => props.theme.colors.appInverse};
  border-radius: 4px;
  height: inherit;
  border: 1px solid #dddfe2;
  text-align: left;
  height: fit-content;
  padding: 16px;
`;

// const Right = styled(Box)`
//   .extra {
//     width: 100%;
//     margin-right: 0;
//   }
// `;

// const Footer = styled(Box)`
//   border-top: ${props => props.theme.colors.border};
//   padding-top: 24px;
//   & ul {
//     list-style-type: none;
//     margin: 0;
//     padding: 0;
//     text-align: center;
//     margin: 0 auto;
//     justify-content: center;
//     align-items: center;
//     display: flex;
//     flex: 1;
//     ${clearFix()}
//     & li {
//       float: left;
//       margin-right: 16px;
//       font-size: 13px;
//       & a {
//         color: rgba(0, 0, 0, 0.45);
//         text-decoration: none;
//         &:hover {
//           text-decoration: underline;
//         }
//       }
//     }
//   }
// `;

const Aware = styled(Flex)<{ green: boolean }>`
  background: ${props =>
    props.green ? '#546d4f' : props.theme.colors.secondary};
  border-radius: 4px;
  align-items: center;
  div {
    color: white;
  }
`;
