import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Heading, Text } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import { Actions, Container, ContainerForm, Header, Row } from 'ui/modules/Modal';

export interface Props {
  done(confirmed: boolean): unknown;
  modalTitle: string;
  modalDescription: string;
  modalAction: string;
  formik: FormikHook<any>;
}

export const ConfirmationModal: React.FC<Props> = ({
  done,
  modalTitle,
  modalDescription,
  modalAction,
  formik
}) => {
  // const { i18n } = React.useContext(LocaleContext);
  return (
    <Container>
      <Header>
        <Heading m={2}>{modalTitle}</Heading>
      </Header>
      <Row>
        <ContainerForm>
          <Text>{modalDescription}</Text>
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          variant="primary"
          isSubmitting={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={() => {
            formik.submitForm().then(() => done(true));
          }}
        >
          {modalAction}
        </SubmitButton>
        <Button variant="outline" onClick={() => done(false)}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

export default ConfirmationModal;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
