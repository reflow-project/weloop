import React from 'react';
import { Flex } from 'rebass/styled-components';
import { ComponentBag } from 'ui/lib/componentBag';
import styled from 'ui/themes/styled';

export interface Props {
  HeaderBox: ComponentBag;
}
export const WithoutSidebar: React.FC<Props> = ({ children, HeaderBox }) => {
  return (
    <Wrapper>
      <HeaderBox.Comp {...HeaderBox.props} />
      <CenteredWrapper>
        <Flex ml={2}>{children}</Flex>
      </CenteredWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
`;

const CenteredWrapper = styled(Flex)`
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-top: 66px;
`;
