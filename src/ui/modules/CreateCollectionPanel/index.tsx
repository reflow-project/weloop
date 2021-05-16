import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { FormikHook } from 'ui/@types/types';
import * as React from 'react';
import Button from 'ui/elements/Button';
import { Box, Heading } from 'rebass/styled-components';
import DropzoneArea from 'ui/modules/DropzoneModal';
import Alert from 'ui/elements/Alert';
import { Actions, AlertWrapper, Container, CounterChars, Header } from 'ui/modules/Modal';
import { Hero, HeroInfo, Title, CollectionContainerForm, Description } from './style';

const tt = {
  placeholders: {
    name: i18nMark('Choose a name for the collection'),
    summary: i18nMark(
      'Please describe what the collection is for and what kind of resources it is likely to contain...'
    ),
    icon: i18nMark('Enter the URL of an image to represent the collection')
  }
};

export interface Props {
  cancel(): any;
  formik: FormikHook<BasicCreateCollectionFormValues>;
}

export interface BasicCreateCollectionFormValues {
  name: string;
  summary: string;
  icon: File | string | undefined;
}

export const CreateCollectionPanel: React.FC<Props> = ({ cancel, formik }) => {
  const onIconFileSelected = React.useCallback(
    (file: File) => formik.setValues({ ...formik.values, icon: file }),
    [formik]
  );
  const initialIconUrl = 'string' === typeof formik.values.icon ? formik.values.icon : '';

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Header>
          <Heading m={2}>
            <Trans>Create a new collection</Trans>
          </Heading>
        </Header>
        <Hero>
          <Box sx={{ width: '120px', height: '120px' }}>
            <DropzoneArea
              initialUrl={initialIconUrl}
              onFileSelect={onIconFileSelected}
              filePattern="image/*"
            />
          </Box>
          {/*<Background style={{ backgroundImage: `url("${c.icon}")` }} /> */}
          <HeroInfo>
            <Title fontWeight={'bold'}>
              <CollectionContainerForm>
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
              </CollectionContainerForm>
            </Title>

            <Description mt={2}>
              <CollectionContainerForm>
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
              </CollectionContainerForm>
            </Description>
          </HeroInfo>
        </Hero>

        <Actions>
          <Button
            variant="primary"
            isSubmitting={formik.isSubmitting}
            isDisabled={formik.isSubmitting}
            type="submit"
            style={{ marginLeft: '10px' }}
            // onClick={formik.submitForm}
          >
            <Trans>Save</Trans>
          </Button>
          <Button variant="outline" onClick={cancel}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </form>
    </Container>
  );
};

export default CreateCollectionPanel;
