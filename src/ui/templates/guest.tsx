import React from 'react';
import { Box } from 'rebass/styled-components';
import styled from 'ui/themes/styled';
// import Footer from 'ui/modules/Footer';

export interface Props {
  HeaderBox?: JSX.Element;
}
export const Guest: React.FC<Props> = ({ children, HeaderBox }) => {
  return (
    <Page>
      {HeaderBox}
      <Wrapper>{children}</Wrapper>
      {/* <Footer /> */}
    </Page>
  );
};

const Page = styled(Box)`
  height: 100vh;
  grid-template-rows: 50px auto;
  row-gap: 8px;
  display: grid;
`;

const Wrapper = styled(Box)`
  max-width: 1096px;
  margin: 0 auto;
  height: calc(100vh - 66px);
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  column-gap: 8px;
`;
