import * as React from 'react';
import { Box, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
import { Link } from 'react-router-dom';
import Button from 'ui/elements/Button';
import { Trans } from '@lingui/macro';
import LogoContainer from 'ui/elements/Logo';
import { Helmet } from 'react-helmet';

const LoginWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: 1fr;
  grid-template-areas: 'form' 'footer';
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  margin-top: 60px;
  padding: 16px;
  padding-bottom: 50px;
 
  }
`;

const FormWrapper = styled(Box)`
  margin-bottom: 100px;
  width: 432px;
`;

export interface Props {
  result:
    | null
    | {
        error: null;
        username: string;
      }
    | {
        error: string;
      };
}

export const ConfirmEmail: React.FC<Props> = ({ result }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoodleNet - Confirm Email</title>
      </Helmet>
      <Container>
        <LoginWrapper>
          <FormWrapper>
            <LogoContainer />
            <Wrapper>
              <Box>
                {!result ? (
                  <Text variant="text">Checking ...</Text>
                ) : result.error === null ? (
                  <>
                    <Text variant="text">Email confirmed</Text>
                    <Text variant="text" sx={{ fontWeight: 'bold', marginTop: '5px' }}>
                      Welcome {result.username}!
                    </Text>
                  </>
                ) : (
                  <Text variant="text">Error in email confirmation: {result.error}</Text>
                )}
              </Box>
              <Browse>
                <Link to={'/'}>
                  <Button mt={3} variant="primary">
                    <Trans>Sign in</Trans>
                  </Button>
                </Link>
              </Browse>
            </Wrapper>
          </FormWrapper>
        </LoginWrapper>
      </Container>
    </>
  );
};

export default ConfirmEmail;

const Browse = styled(Box)`
  text-align: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  height: inherit;
  padding: 30px 20px;
  text-align: center;
  height: fit-content;
`;
