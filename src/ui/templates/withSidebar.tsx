import React from 'react';
import { Box } from 'rebass/styled-components';
import { ComponentBag } from 'ui/lib/componentBag';
import styled from 'ui/themes/styled';
export interface SidebarProps {
  // SidebarBox: JSX.Element;
  SidebarBox: ComponentBag;
  HeaderBox: ComponentBag;
}

export const WithSidebar: React.FC<SidebarProps> = ({
  SidebarBox,
  HeaderBox,
  children
}) => {
  return (
    <Page>
      <HeaderBox.Comp {...HeaderBox.props} />
      <Wrapper>
        <Panel>
          <Sidebar>
            <SidebarBox.Comp {...SidebarBox.props} />
          </Sidebar>
        </Panel>
        <Panel>
          <Content>{children}</Content>
        </Panel>
      </Wrapper>
    </Page>
  );
};

const Panel = styled(Box)`
  display: grid;
  grid-template-rows: auto;
  height: calc(100vh - 58px);
`;

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
  grid-template-columns: 240px 1fr;
  column-gap: 8px;
`;

const Sidebar = styled(Box)`
  overflow: auto;
`;

const Content = styled(Box)`
  overflow: auto;
`;
