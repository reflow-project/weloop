import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { LocaleContext } from '../../../context/global/localizationCtx';
import { Input } from '@rebass/forms';
import { Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import styled from '../../../themes/styled';
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
    name: i18nMark('Website'),
    flag: i18nMark('Please write the Moodle LMS instance')
  }
};

export interface Props {
  cancel(): any;
  sendToMoodleFormik: FormikHook<BasicMoodleLMSConfigFormValues>;
}

export interface BasicMoodleLMSConfigFormValues {
  site: string;
}

export const MoodlePanel: React.FC<Props> = ({
  cancel,
  sendToMoodleFormik
}) => {
  const { i18n } = React.useContext(LocaleContext);

  return (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>Send to Moodle</Trans>
        </Heading>
      </Header>
      <Row big>
        <ContainerForm>
          <Input
            placeholder={i18n._(tt.placeholders.flag)}
            name="site"
            value={sendToMoodleFormik.values.site}
            onChange={sendToMoodleFormik.handleChange}
          />
          <CounterChars>
            {200 - sendToMoodleFormik.values.site.length}
          </CounterChars>
          {sendToMoodleFormik.errors.site && (
            <AlertWrapper>
              <Alert variant="negative">{sendToMoodleFormik.errors.site}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          variant="primary"
          isSubmitting={sendToMoodleFormik.isSubmitting}
          isDisabled={sendToMoodleFormik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={sendToMoodleFormik.submitForm}
        >
          <Trans>Send</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

export default MoodlePanel;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
