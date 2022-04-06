import * as React from 'react';
import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { FormikHook } from 'ui/@types/types';
import Alert from '../../elements/Alert';
import { Input, Textarea } from '@rebass/forms';
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
    name: i18nMark('Full name'),
    userName: i18nMark('Display User name'),
    summary: i18nMark('Summary')
  }
};

export interface Props {
  formik: FormikHook<CreateUserFormValues>;
}

export interface CreateUserFormValues {
  profileName: string;
  userName?: string;
  summary?: string;
}

export const CreateNewUserPage: React.FC<Props> = ({ formik }) => {
  return (
    <Container>
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
                <Trans>Full Name</Trans>
              </LabelStyled>
              <Input
                placeholder={tt.placeholders.name}
                name="profileName"
                value={formik.values.profileName}
                onChange={formik.handleChange}
              />
              {formik.errors.profileName && (
                <AlertWrapper>
                  <Alert variant="negative">{formik.errors.profileName}</Alert>
                </AlertWrapper>
              )}
            </Box>
            <Box mt={3}>
              <LabelStyled>
                <Trans>Display user Name</Trans>
              </LabelStyled>
              <Input
                placeholder={tt.placeholders.userName}
                name="userName"
                type="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
              />
              {formik.errors.userName && (
                <AlertWrapper>
                  <Alert variant="negative">{formik.errors.userName}</Alert>
                </AlertWrapper>
              )}
            </Box>
            <Box mt={3}>
              <LabelStyled>
                <Trans>Summary</Trans>
              </LabelStyled>
              <TextareaStyled
                className="summary-textarea"
                placeholder={tt.placeholders.summary}
                disabled={formik.isSubmitting}
                name="summary"
                value={formik.values.summary}
                onChange={formik.handleChange}
              />
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
                <Trans>Create User</Trans>
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
    </Container>
  );
};
export default CreateNewUserPage;

const LinkWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 180px;
`;

const LabelStyled = styled.label`
  display: block;
  margin-bottom: 6px;
`;

const TextareaStyled = styled(Textarea)`
  min-height: 90px;
  border-radius: 4px;
  border: 1px solid #dadada !important;
`;

const LoginWrapper = styled(Box)`
  ${media.lessThan('medium')`
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

const Aware = styled(Flex)<{ green: boolean }>`
  background: ${props => (props.green ? '#546d4f' : props.theme.colors.secondary)};
  border-radius: 4px;
  align-items: center;
  div {
    color: white;
  }
`;
