import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { Textarea } from '@rebass/forms';
import { Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import styled from 'ui/themes/styled';
import Alert from '../../elements/Alert';
import { FormikHook } from 'ui/@types/types';
import {
  Actions,
  AlertWrapper,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from 'ui/modules/Modal';

// const TextWrapper = styled(Flex)`
//   padding: 16px;
//   align-items: center;
// `;

const tt = {
  placeholders: {
    flag: i18nMark('Please describe the reason for flagging the item')
  }
};

export interface Props {
  cancel(): any;
  isFlagged: boolean;
  flagFormik: FormikHook<BasicCreateFlagFormValues>;
  unflagFormik: FormikHook;
}

export interface BasicCreateFlagFormValues {
  reason: string;
}

export const FlagModal: React.FC<Props> = ({ cancel, flagFormik, isFlagged, unflagFormik }) => {
  const { i18n } = React.useContext(LocaleContext);

  return !isFlagged ? (
    <Container>
      <Header>
        <Heading>
          <Trans>Report as inappropriate</Trans>
        </Heading>
      </Header>
      <Row big>
        <ContainerForm>
          <Textarea
            placeholder={i18n._(tt.placeholders.flag)}
            name="reason"
            value={flagFormik.values.reason}
            onChange={flagFormik.handleChange}
          />
          <CounterChars>{200 - flagFormik.values.reason.length}</CounterChars>
          {flagFormik.errors.reason && (
            <AlertWrapper>
              <Alert variant="negative">{flagFormik.errors.reason}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          variant="primary"
          isSubmitting={flagFormik.isSubmitting}
          isDisabled={flagFormik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={flagFormik.submitForm}
        >
          <Trans>Send</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  ) : (
    <Container>
      <Header>
        <Heading>
          <Trans>Unflag</Trans>
        </Heading>
      </Header>
      <Row>
        <ContainerForm>
          <Trans>Are you sure you want to unflag this item?</Trans>
        </ContainerForm>
      </Row>
      <Actions>
        <Button
          variant="primary"
          isSubmitting={unflagFormik.isSubmitting}
          isDisabled={unflagFormik.isSubmitting}
          onClick={unflagFormik.submitForm}
          style={{ marginLeft: '10px' }}
        >
          <Trans>Unflag</Trans>
        </Button>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

export default FlagModal;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
