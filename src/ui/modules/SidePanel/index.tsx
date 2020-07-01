import * as React from 'react';
import { Nav, NavItem, Panel, PanelTitle, WrapperPanel } from 'ui/elements/Panel';
import { Trans } from '@lingui/macro';
import { Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';

export type Props = {};

export const SidePanel: React.FC<Props> = props => {
  return (
    <>
      <WrapperPanel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Popular hashtags
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={0}>
              #pedagogy
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              #transition
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              #english
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              #template
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              #assessment
            </NavItem>
            <NavItem fontSize={0}>
              <ComingSoon variant="text">
                <span aria-label="icon" role="img">
                  ✨
                </span>
                <Trans>This feature is coming soon!</Trans>
                <span aria-label="icon" role="img">
                  ✨
                </span>
              </ComingSoon>
            </NavItem>
          </Nav>
        </Panel>
        <Panel>
          <PanelTitle fontSize={0} fontWeight={'bold'}>
            Popular categories
          </PanelTitle>
          <Nav>
            <NavItem mb={3} fontSize={0}>
              Humanities
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              Behavioural science
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              English
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              Romana
            </NavItem>
            <NavItem mb={3} fontSize={0}>
              Postgraduate
            </NavItem>
            <ComingSoon variant="text">
              <span aria-label="icon" role="img">
                ✨
              </span>
              <Trans>This feature is coming soon!</Trans>{' '}
              <span aria-label="icon" role="img">
                ✨
              </span>
            </ComingSoon>
          </Nav>
        </Panel>
      </WrapperPanel>
    </>
  );
};

const ComingSoon = styled(Text)`
  background: aliceblue;
  text-align: center;
  padding: 4px;
  border-radius: 4px;
`;
