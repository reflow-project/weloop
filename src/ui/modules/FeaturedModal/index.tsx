import { Trans } from '@lingui/macro';
import * as React from 'react';
import { Heading, Text } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import styled from 'ui/themes/styled';
import { FormikHook } from 'ui/@types/types';
import { Actions, Container, ContainerForm, Header, Row } from 'ui/modules/Modal';

export interface Props {
  cancel(): any;
  isFeatured: boolean;
  itemType: string;
  itemName: string;
  formik: FormikHook;
}

export const FeaturedModal: React.FC<Props> = ({
  cancel,
  isFeatured,
  itemName,
  itemType,
  formik
}) => {
  // const { i18n } = React.useContext(LocaleContext);
  return !isFeatured ? (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>Add To Featured List</Trans>
        </Heading>
      </Header>
      <Row>
        <ContainerForm>
          <Text>
            Are you sure you want to add {itemName} {itemType} to the featured list of the Discover
            Page?
          </Text>
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          variant="primary"
          isSubmitting={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={formik.submitForm}
        >
          <Trans>Add</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  ) : (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>Remove from Featured List</Trans>
        </Heading>
      </Header>
      <Row>
        <ContainerForm>
          <Text>
            Are you sure you want to remove {itemName} {itemType} from the featured list of the
            Discover Page?
          </Text>
        </ContainerForm>
      </Row>
      <Actions>
        <SubmitButton
          variant="primary"
          isSubmitting={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          style={{ marginLeft: '10px' }}
          onClick={formik.submitForm}
        >
          <Trans>Remove</Trans>
        </SubmitButton>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

export default FeaturedModal;

const SubmitButton = styled(Button)`
  margin-left: 8px;
  .--rtl & {
    margin-right: 8px;
    margin-left: 0px;
  }
`;
