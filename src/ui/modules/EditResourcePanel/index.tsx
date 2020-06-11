import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { FormikHook } from 'ui/@types/types';
import * as React from 'react';
import { Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import Alert from 'ui/elements/Alert';
import {
  Actions,
  AlertWrapper,
  Container,
  ContainerForm,
  CounterChars,
  Header,
  Row
} from 'ui/modules/Modal';

export interface EditResourceFormValues {
  url: string;
  name: string;
  summary: string;
  image: string;
}

const tt = {
  placeholders: {
    url: i18nMark('The url of the resource'),
    name: i18nMark('Choose a name for the community'),
    summary: i18nMark('Please describe who might be interested in this resource...'),
    image: i18nMark('Enter the URL of an image to represent the resource')
  }
};

export interface Props {
  cancel(): any;
  formik: FormikHook<EditResourceFormValues>;
}

export const EditResourcePanel: React.FC<Props> = ({ cancel, formik }) => {
  return (
    <Container>
      <Header>
        <Heading m={2}>
          <Trans>Edit the resource details</Trans>
        </Heading>
      </Header>
      <Row>
        <label>Url</label>
        <ContainerForm>
          <Input
            placeholder={tt.placeholders.url}
            disabled={formik.isSubmitting}
            name="url"
            value={formik.values.url}
            onChange={formik.handleChange}
          />
          {formik.errors.url && (
            <AlertWrapper>
              <Alert variant="negative">{formik.errors.url}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Row>
        <label>Name</label>
        <ContainerForm>
          <Input
            placeholder={tt.placeholders.name}
            disabled={formik.isSubmitting}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <CounterChars>{60 - formik.values.name.length}</CounterChars>
          {formik.errors.name && (
            <AlertWrapper>
              <Alert variant="negative">{formik.errors.name}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Row big>
        <label>
          <Trans>Description</Trans>
        </label>
        <ContainerForm>
          <Textarea
            placeholder={tt.placeholders.summary}
            disabled={formik.isSubmitting}
            name="summary"
            value={formik.values.summary}
            onChange={formik.handleChange}
          />
          <CounterChars>{500 - formik.values.summary.length}</CounterChars>
          {formik.errors.summary && (
            <AlertWrapper>
              <Alert variant="negative">{formik.errors.summary}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Row>
        <label>
          <Trans>Image</Trans>
        </label>
        <ContainerForm>
          <Input
            placeholder={tt.placeholders.image}
            disabled={formik.isSubmitting}
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          {formik.errors.image && (
            <AlertWrapper>
              <Alert variant="negative">{formik.errors.image}</Alert>
            </AlertWrapper>
          )}
        </ContainerForm>
      </Row>
      <Actions>
        <Button
          variant="primary"
          isSubmitting={formik.isSubmitting}
          isDisabled={formik.isSubmitting}
          type="submit"
          style={{ marginLeft: '10px' }}
          onClick={formik.submitForm}
        >
          <Trans>Create</Trans>
        </Button>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

export default EditResourcePanel;
