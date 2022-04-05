import * as React from 'react';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { FormikHook } from 'ui/@types/types';
import Alert from '../../elements/Alert';
import { Input } from '@rebass/forms';
import Button from 'ui/elements/Button';
import { Box, Text, Flex } from 'rebass/styled-components';
import styled from '../../themes/styled';
import { AlertCircle } from 'react-feather';
import { AlertWrapper } from 'ui/modules/Modal';
import { INVITE_ONLY_TEXT } from 'mn-constants';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';
import LogoContainer from 'ui/elements/Logo';

let tt = {
  login: i18nMark('Sign in'),
  placeholders: {
    email: i18nMark('eg. mary@moodlers.org'),
    password: i18nMark('Choose your password'),
    passwordConfirm: i18nMark('Confirm your password')
  }
};

export interface Props {
  formik: FormikHook<SignUpFormValues>;
  registeredUserID?: string;
  registeredEmail?: string;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export const SignUpPage: React.FC<Props> = ({ formik, registeredUserID, registeredEmail }) => {
  return (
    <Container>
      {!formik.isSubmitting && formik.submitCount && registeredUserID ? (
        <Box mt={3}>
          <LogoContainer />
          <Wrapper>
            <Box>
              <Text variant="suptitle">
                <Trans>Welcome</Trans> <b>{registeredUserID}</b>
              </Text>
              <Text mt={2} variant="text">
                <Trans>Please confirm your email address</Trans>
                <b>{' ' + registeredEmail + ' '}</b>
                <Trans>
                  by clicking on the link we emailed you (check your spam folder if necessary).
                </Trans>
              </Text>
            </Box>
            <Browse>
              <Link to={'/login'}>
                <Button mt={3} variant="primary">
                  <Trans>Sign in</Trans>
                </Button>
              </Link>
            </Browse>
          </Wrapper>
          {/* <Alert variant="negative">{formik.errors.email}</Alert> */}
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
            <FormWrapper onSubmit={formik.handleSubmit}>
              <Box>
                <LabelStyled>
                  <Trans>Email</Trans>
                </LabelStyled>
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
                <LabelStyled>
                  <Trans>Password</Trans>
                </LabelStyled>
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
                <LabelStyled>
                  <Trans>Confirm password</Trans>
                </LabelStyled>
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
              </Box>
              <Box
                mt={3}
                css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <Button
                  variant="primary"
                  isSubmitting={formik.isSubmitting}
                  isDisabled={formik.isSubmitting}
                  type="submit"
                >
                  <Trans>Sign up</Trans>
                </Button>
                <LinkWrapper>
                  <Trans>You have account </Trans>
                  <Link to={'/login'} className={'ml-3'}>
                    <Trans>Sign in</Trans>
                  </Link>
                </LinkWrapper>
              </Box>
            </FormWrapper>
          </Flex>
        </LoginWrapper>
      )}
    </Container>
  );
};
export default SignUpPage;

const Browse = styled(Box)`
  text-align: center;
  margin-top: 10px;
`;
const LinkWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 180px;
`;
const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 30px 20px;
  text-align: center;
  height: fit-content;
`;

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

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 6px;
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;
`;

const FormWrapper = styled.form`
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
  background: ${props => (props.green ? '#546d4f' : props.theme.colors.secondary)};
  border-radius: 4px;
  align-items: center;
  div {
    color: white;
  }
`;
