import React from 'react';
import styled from 'ui/themes/styled';
import { XCircle, Slash, Flag } from 'react-feather';

import { Box, Text, Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import Modal from 'ui/modules/Modal';
import { FormikHook } from 'ui/@types/types';
import ConfirmationModal from '../ConfirmationModal';
import { LocaleContext } from 'context/global/localizationCtx';
import { darken } from 'polished';
import { typography } from 'mn-constants';

export interface FlaggedProps {
  FlaggedItemContextElement: JSX.Element;
  blockUserFormik: FormikHook;
  deleteContentFormik: FormikHook;
  ignoreFlagFormik: FormikHook;
  type: string;
  reason: string;
}

export const FlaggedItem: React.SFC<FlaggedProps> = ({
  FlaggedItemContextElement,
  blockUserFormik,
  deleteContentFormik,
  ignoreFlagFormik,
  type,
  reason
}) => {
  const [isOpenDelete, setOpenDelete] = React.useState(false);
  const [isOpenBlock, setOpenBlock] = React.useState(false);
  const [isOpenIgnore, setOpenIgnore] = React.useState(false);
  const { i18n } = React.useContext(LocaleContext);

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
              <ActionItem onClick={() => setOpenBlock(true)}>
                <ActionIcon>
                  <Slash strokeWidth="1" size="18" />
                </ActionIcon>
                <Text
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  <Trans>Block</Trans>
                </Text>
              </ActionItem>
            ) : (
              <ActionItem onClick={() => setOpenDelete(true)}>
                <ActionIcon>
                  <XCircle strokeWidth="1" size="18" />
                </ActionIcon>
                <Text
                  variant={'suptitle'}
                  sx={{ textTransform: 'capitalize' }}
                  ml={1}
                >
                  <Trans>Delete</Trans>
                </Text>
              </ActionItem>
            )}
            <ActionItem ml={2} onClick={() => setOpenIgnore(true)}>
              <ActionIcon className="unflag">
                <Flag className="hover" strokeWidth="1" size="16" />
              </ActionIcon>
              <Text
                variant={'suptitle'}
                sx={{ textTransform: 'capitalize' }}
                ml={1}
              >
                <Trans>Ignore</Trans>
              </Text>
            </ActionItem>
          </Items>
          {isOpenDelete && (
            <Modal closeModal={() => setOpenDelete(false)}>
              <ConfirmationModal
                done={() => setOpenDelete(false)}
                formik={deleteContentFormik}
                modalAction={i18n._(`Delete flagged content`)}
                modalDescription={i18n._(
                  `Are you sure you want to permanently delete this ${type} content?`
                )}
                modalTitle={i18n._(`Delete`)}
              />
            </Modal>
          )}
          {isOpenBlock && (
            <Modal closeModal={() => setOpenBlock(false)}>
              <ConfirmationModal
                done={() => setOpenBlock(false)}
                formik={blockUserFormik}
                modalAction={i18n._(`Delete user`)}
                modalDescription={i18n._(
                  `Are you sure you want to permanently delete this user?`
                )}
                modalTitle={i18n._(`Delete`)}
              />
            </Modal>
          )}
          {isOpenIgnore && (
            <Modal closeModal={() => setOpenIgnore(false)}>
              <ConfirmationModal
                done={() => setOpenIgnore(false)}
                formik={ignoreFlagFormik}
                modalAction={i18n._(`Ignore flag`)}
                modalDescription={i18n._(
                  `Are you sure you want to ignore and delete this flag?`
                )}
                modalTitle={i18n._(`Ignore`)}
              />
            </Modal>
          )}
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
  color: ${props =>
    props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  div {
    color: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
  }
  &:hover {
    background: ${props =>
      props.liked
        ? darken('0.1', props.theme.colors.secondary)
        : darken('0.05', props.theme.colors.mediumlight)};
  }
  cursor: pointer;
  background: ${props =>
    props.liked
      ? props.theme.colors.secondary
      : props.theme.colors.mediumlight};
  border-radius: 4px;
  padding: 0 8px;
  margin-right: 8px;
  text-align: center;
  font-size: ${typography.size.s1};
  svg {
    stroke: ${props =>
      props.liked ? props.theme.colors.lighter : props.theme.colors.mediumdark};
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
