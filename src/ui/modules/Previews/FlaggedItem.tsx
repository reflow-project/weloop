import { Trans } from '@lingui/macro';
import { typography } from 'mn-constants';
import { darken } from 'polished';
import React, { ReactElement } from 'react';
import { Flag, Slash, XCircle } from 'react-feather';
import { Box, Flex, Text } from 'rebass/styled-components';
import styled from 'ui/themes/styled';

export interface FlaggedProps {
  FlaggedItemContextElement: ReactElement;
  type: string;
  reason: string;
  blockUser(): unknown;
  ignoreFlag(): unknown;
  deleteContent(): unknown;
}

export const FlaggedItem: React.SFC<FlaggedProps> = ({
  FlaggedItemContextElement,
  type,
  reason,
  blockUser,
  ignoreFlag,
  deleteContent
}) => {
  return (
    <Wrapper>
      <Reason>{FlaggedItemContextElement}</Reason>
      <Text variant="text" pt={2}>
        {reason}
      </Text>
      <Actions>
        <Box>
          <Items>
            {type === 'User' ? (
              <ActionItem onClick={blockUser}>
                <ActionIcon>
                  <Slash strokeWidth="1" size="18" />
                </ActionIcon>
                <Text variant={'suptitle'} sx={{ textTransform: 'capitalize' }} ml={1}>
                  <Trans>Block</Trans>
                </Text>
              </ActionItem>
            ) : (
              <ActionItem onClick={deleteContent}>
                <ActionIcon>
                  <XCircle strokeWidth="1" size="18" />
                </ActionIcon>
                <Text variant={'suptitle'} sx={{ textTransform: 'capitalize' }} ml={1}>
                  <Trans>Delete</Trans>
                </Text>
              </ActionItem>
            )}
            <ActionItem ml={2} onClick={ignoreFlag}>
              <ActionIcon className="unflag">
                <Flag className="hover" strokeWidth="1" size="16" />
              </ActionIcon>
              <Text variant={'suptitle'} sx={{ textTransform: 'capitalize' }} ml={1}>
                <Trans>Ignore</Trans>
              </Text>
            </ActionItem>
          </Items>
        </Box>
      </Actions>
    </Wrapper>
  );
};

const Reason = styled(Box)`
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.appInverse};
  border-left: 3px solid ${props => props.theme.colors.light};
`;

const Items = styled(Flex)`
  flex: 1;
  justify-content: start;
`;

const Actions = styled(Box)`
  position: relative;
  z-index: 999999999999999999999999999999999999;
  margin-top: 16px;
`;

const ActionItem = styled(Flex)<{ liked?: boolean }>`
  align-items: center;
  color: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  div {
    color: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  }
  &:hover {
    background: ${props =>
      props.liked
        ? darken('0.1', props.theme.colors.secondary)
        : darken('0.05', props.theme.colors.mediumlight)};
  }
  cursor: pointer;
  background: ${props =>
    props.liked ? props.theme.colors.secondary : props.theme.colors.mediumlight};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: ${props => (props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark)};
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9;
  }
  &:hover {
    svg.hover {
      stroke: ${props => props.theme.colors.mediumdark};
      // fill: ${props => props.theme.colors.mediumdark};
    }
  }
`;

const ActionIcon = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 99999px;
  display: inline-flex;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-left: -8px;
  svg {
    margin: 0 auto;
  }
`;

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
`;

// const Bordered = styled(Box)`
//   border: ${props => props.theme.colors.border};
//   border-radius: 4px;
// `;
