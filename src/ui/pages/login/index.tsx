import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import * as React from 'react';
import media from 'styled-media-query';
import { FormikHook } from 'ui/@types/types';
import { Link } from 'react-router-dom';
import styled from 'ui/themes/styled';
import { Box, Text } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { Input } from '@rebass/forms';
import { Panel, WrapperPanel } from 'ui/elements/Panel';
import LogoContainer from 'ui/elements/Logo';
import { Helmet } from 'react-helmet';
// import {Form} from 'formik'
// const MnetLogin = require('static/img/login.jpg');
import { INSTANCE_DESCRIPTION, INSTANCE_PROMPT, instance_bg_img } from 'mn-constants'; // + instance_bg_img
import { LocaleContext } from 'context/global/localizationCtx';

let tt = {
  login: i18nMark('Sign in'),
  placeholders: {
    email: i18nMark('Enter your email'),
    password: i18nMark('Enter your password')
  }
};

export interface Props {
  formik: FormikHook<LoginFormValues>;
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export const Login: React.FC<Props> = ({ formik }) => {
  const { i18n } = React.useContext(LocaleContext);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoodleNet - Log in</title>
      </Helmet>
      <Container>
        <LoginWrapper>
          <LogoContainer isHome={true} />
          <FormWrapper>
            <FormLogin>
              <LoginForm>
                <Box p={3}>
                  <form onSubmit={formik.handleSubmit}>
                    <Input
                      placeholder={tt.placeholders.email}
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <Spacer />
                    <Input
                      type="password"
                      placeholder={tt.placeholders.password}
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    <Button
                      mt={3}
                      variant="primary"
                      isSubmitting={formik.isSubmitting}
                      isDisabled={formik.isSubmitting}
                      type="submit"
                      style={{ width: '100%' }}
                      // onClick={formik.submitForm}
                    >
                      <Trans>Sign in</Trans>
                    </Button>
                  </form>
                </Box>
              </LoginForm>
              <ResetPass variant="text" my={3} mt={2}>
                <Link to="/reset">
                  <Trans>Trouble logging in?</Trans>
                </Link>
              </ResetPass>
            </FormLogin>
            <Or>
              <Trans>Or</Trans>
            </Or>
            <Browse mt={3} p={3}>
              <Text variant="heading" fontSize={3}>
                <Trans>Browse this instance</Trans>
              </Text>
              <Text variant="text" mt={2}>
                {i18n._(INSTANCE_PROMPT)}
              </Text>
              <Link to={'/discover'}>
                <Button mt={3} variant="outline">
                  <Trans>Browse</Trans>
                </Button>
              </Link>
            </Browse>
          </FormWrapper>
          <Right>
            <Link to="signup">
              <Button
                mb={2}
                style={{ width: '100%', height: '50px' }}
                variant="outline"
                // onClick={this.props.handleSignup}
              >
                <Trans>Sign up</Trans>
              </Button>
            </Link>
            <WrapperPanel className="extra">
              <Panel>
                <Background />
                <Infos p={3}>
                  <Info>
                    <Text variant="suptitle">
                      <Trans>Instance description</Trans>
                    </Text>
                    <Text mt={2} variant="text">
                      {INSTANCE_DESCRIPTION}
                    </Text>
                  </Info>
                </Infos>
              </Panel>
            </WrapperPanel>
          </Right>
        </LoginWrapper>
      </Container>
    </>
  );
};

export default Login;

const Background = styled(Box)`
  background: url("${instance_bg_img}");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 50%;
  width: 400px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Infos = styled(Box)``;

const Info = styled(Box)``;

const LoginWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'header header' 'form image' 'footer footer';
  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    grid-template-areas: 'header' 'image' 'form' 'footer';
    padding: 16px
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;
  margin-top: 60px;
  padding-bottom: 50px;
`;

const FormWrapper = styled.div`
  grid-area: form;
`;

const FormLogin = styled.div`
  background: ${props => props.theme.colors.appInverse};
  border-radius: 4px;
  height: inherit;
  border: 1px solid #dddfe2;
  text-align: left;
  height: fit-content;
`;

const Right = styled(Box)`
  .extra {
    width: 100%;
    margin-left: 0px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Browse = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.mediumdark};
    button {
      color: ${props => props.theme.colors.mediumdark} !important;
    }
  }
`;

const Or = styled.div`
  position: relative;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-top: 24px;
  &:before {
    position: absolute;
    content: '';
    width: calc(50% - 24px);
    left: 0;
    top: 8px;
    height: 1px;
    display: block;
    background: rgba(0, 0, 0, 0.45);
  }
  &:after {
    position: absolute;
    content: '';
    width: calc(50% - 24px);
    right: 0;
    top: 8px;
    height: 1px;
    display: block;
    background: rgba(0, 0, 0, 0.45);
  }
`;

const ResetPass = styled(Text)`
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  a {
    font-size: 14px;
    color: inherit;
  }
`;

const LoginForm = styled.div`
  margin: 0;
  margin-bottom: 16px;
  input {
    height: 50px;
    color: inherit;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #dadada;
  }
`;

const Spacer = styled.div`
  width: 10px;
  height: 10px;
`;
