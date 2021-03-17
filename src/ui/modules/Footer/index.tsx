import { Trans } from '@lingui/macro';
import { clearFix } from 'polished';
import * as React from 'react';
import styled from '../../themes/styled';
import { Box } from 'rebass/styled-components';
import { APP_NAME, related_urls } from 'mn-constants'; // + instance_bg_img

const Footer = () => {
  return (
    <FooterWrapper mt={3}>
      <ul>
        <li>
          <a href={related_urls.project_homepage} target="blank">
            <Trans>About </Trans> {APP_NAME}
          </a>
        </li>
        <li>
          <a href={related_urls.code} target="blank">
            <Trans>Open Source Code</Trans>
          </a>
        </li>
        <li>
          <a href={related_urls.feedback} target="blank">
            <Trans>Feedback &amp; Suggestions</Trans>
          </a>
        </li>
        <li>
          <a href="/terms">
            <Trans>Code of Conduct &amp; Privacy Policy</Trans>
          </a>
        </li>
      </ul>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled(Box)`
  grid-area: footer;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 24px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  max-width: 1100px;
  & ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex: 1;
    ${clearFix()}
    & li {
      float: left;
      margin-right: 16px;
      & a {
        color: rgba(0, 0, 0, 0.45);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
