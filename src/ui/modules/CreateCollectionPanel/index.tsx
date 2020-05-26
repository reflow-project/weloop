import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { Input, Textarea } from '@rebass/forms';
import { FormikHook } from 'ui/@types/types';
import * as React from 'react';
import Button from 'ui/elements/Button';
import { clearFix } from 'polished';
import media from 'styled-media-query';
import styled from 'ui/themes/styled';
import { Flex, Text, Box, Heading } from 'rebass/styled-components';
import DropzoneArea from 'ui/modules/DropzoneModal';
import Alert from 'ui/elements/Alert';
import {
  Actions,
  AlertWrapper,
  Container,
  ContainerForm,
  CounterChars,
  Header
} from 'ui/modules/Modal';

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
    (file: File) => formik.setFieldValue('icon', file, true),
    []
  );
  const initialIconUrl =
    'string' === typeof formik.values.icon ? formik.values.icon : '';

  return (
    <Container>
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
        {/* <Background style={{ backgroundImage: `url(${c.icon})` }} /> */}
        <HeroInfo>
          <Title fontSize={5} fontWeight={'bold'}>
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

          <Description fontSize={2} mt={2}>
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
          onClick={formik.submitForm}
        >
          <Trans>Save</Trans>
        </Button>
        <Button variant="outline" onClick={cancel}>
          <Trans>Cancel</Trans>
        </Button>
      </Actions>
    </Container>
  );
};

const CollectionContainerForm = styled(ContainerForm)`
  input {
    background: #fbfbfb;
    border: 0;
    font-weight: 700;
  }

  textarea {
    background: #fbfbfb;
    border-radius: 2px;
    border: 0;
    height: 120px;
    resize: none;
  }
`;

const Title = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
`;

const Description = styled(Text)`
  color: ${props => props.theme.colors.mediumdark};
`;

const HeroInfo = styled.div`
  flex: 1;
  margin-left: 16px;
  position: relative;
  ${clearFix()};
  & h2 {
    margin: 0;
    line-height: 32px !important;
    font-size: 24px !important;
    color: ${props => props.theme.colors.mediumdark};
    ${media.lessThan('medium')`
      margin-top: 8px;
    `};
  }
  & p {
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    margin-top: 8px;
    color: ${props => props.theme.colors.mediumdark};
  }
  .--rtl & {
    margin-right: 16px;
    margin-left: 0px;
  }
`;

const Hero = styled(Flex)`
  width: 100%;
  position: relative;
  padding: 16px;
  ${media.lessThan('medium')`
  text-align: center;
  display: block;
`};
`;

export default CreateCollectionPanel;
