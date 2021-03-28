import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import React, { FC } from 'react';
import { Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { FormikHook } from 'ui/@types/types';
import { Input, Textarea } from '@rebass/forms';
import { Actions, AlertWrapper, Container, CounterChars, Header } from 'ui/modules/Modal';
import {
  Hero,
  Title,
  CollectionContainerForm,
  HeroInfo,
  Description
} from '../CreateCollectionPanel';
import Alert from 'ui/elements/Alert';
import Select from 'react-select';

export type CreateIntentFormValues = {
  name: string;
  communityId: string;
  note: string;
};

export type TCreateIntentPanel = {
  communities: Array<SelectOption>;
  cancel(): unknown;
  formik: FormikHook<CreateIntentFormValues>;
};

export type SelectOption = {
  label: string;
  value: string;
};

export const CreateIntentPanel: FC<TCreateIntentPanel> = ({ formik, cancel, communities }) => {
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Header>
          <Heading m={2}>
            <Trans>Create an intent</Trans>
          </Heading>
        </Header>

        <Hero>
          <HeroInfo>
            <Title fontWeight={'bold'}>
              <CollectionContainerForm>
                <Input
                  placeholder={i18nMark('Name of your resource')}
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

            <Title>
              <CollectionContainerForm>
                <Select
                  name="communityId"
                  onChange={selectedCode => {
                    const selection = Array.isArray(selectedCode) ? selectedCode[0] : selectedCode;
                    if (!selection) {
                      return;
                    }
                    formik.setValues({ ...formik.values, communityId: selection.value });
                  }}
                  options={communities as any}
                />
              </CollectionContainerForm>
            </Title>

            <Description mt={2}>
              <CollectionContainerForm>
                <Textarea
                  placeholder={i18nMark('A description of your resource')}
                  disabled={formik.isSubmitting}
                  name="note"
                  value={formik.values.note}
                  onChange={formik.handleChange}
                />
                <CounterChars>{500 - formik.values.note.length}</CounterChars>
                {formik.errors.note && (
                  <AlertWrapper>
                    <Alert variant="negative">{formik.errors.note}</Alert>
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
