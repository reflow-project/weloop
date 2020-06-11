import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
// import { WrapperPanel } from 'ui/elements/Panel';
import LogoContainer from 'ui/elements/Logo';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  margin: 0 auto;
  width: 432px;
  margin-top: 60px;
  padding: 16px;
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

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoodleNet - Not found</title>
      </Helmet>
      <Container>
        <Box sx={{ textAlign: 'center' }}>
          <LogoContainer />
          <Heading>
            <span aria-label="icon" role="img">
              🤔
            </span>
            <Trans>Page not found</Trans>
          </Heading>
        </Box>
      </Container>
    </>
  );
};
