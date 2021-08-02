import Markdown from 'markdown-to-jsx';
import * as React from 'react';
import { Eye } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import media from 'styled-media-query';
import { Panel } from 'ui/elements/Panel';
import styled from '../../themes/styled';
import LogoContainer from 'ui/elements/Logo';

export interface Props {
  terms_users_data: string;
  terms_users_text_data: string;
  terms_privacy_enabled: boolean;
  privacy_url_text_data: string;
  terms_privacy_text_data: string;
  terms_cookies_data: string;
  terms_cookies_text_data: string;
  terms_indexing_data: string;
  terms_indexing_text_data: string;
}

const TermsAndConditionsPage: React.FC<Props> = ({
  terms_users_text_data,
  terms_cookies_text_data,
  terms_indexing_text_data,
  terms_users_data,
  terms_privacy_enabled,
  privacy_url_text_data,
  terms_privacy_text_data,
  terms_cookies_data,
  terms_indexing_data
}) => {
  return (
    <Container>
      <LoginWrapper>
        <LogoContainer />
        <Flex mt={2}>
          <Right>
            <Aware green mb={3} mt={3} p={3}>
              <Box mr={2}>
                <Eye size="20" color="white" />
              </Box>
              <Text variant="suptitle">
                {' '}
                Please read the following. By using this instance of WeLoop you are consenting to
                these agreements.
              </Text>
            </Aware>
            <Panel className="extra">
              <Box p={3}>
                <Markdown>{terms_users_data || terms_users_text_data}</Markdown>
              </Box>
              <Box p={3}>
                {terms_privacy_enabled ? (
                  <Markdown>{privacy_url_text_data || terms_privacy_text_data}</Markdown>
                ) : null}
              </Box>
              <Box p={3}>
                <Markdown>{terms_cookies_data || terms_cookies_text_data}</Markdown>
              </Box>
              <Box p={3}>
                <Markdown>{terms_indexing_data || terms_indexing_text_data}</Markdown>
              </Box>
            </Panel>
          </Right>
        </Flex>
      </LoginWrapper>
      {/* )} */}
    </Container>
  );
};
export default TermsAndConditionsPage;

const LoginWrapper = styled(Box)`
  ${media.lessThan('medium')`
    // display: grid;
    // grid-template-columns: 1fr;
    padding: 16px
  `};
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1020px;
`;

const Right = styled(Box)`
  .extra {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;

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
  background: ${props => (props.green ? '#546d4f' : props.theme.colors.primary)};
  border-radius: 4px;
  align-items: center;
  div {
    color: white;
  }
`;
