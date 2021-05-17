import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { FormikHook } from 'ui/@types/types';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import Input, { CustomAlert } from '../../elements/Input';
import { Actions, AlertWrapper, Container, CounterChars, Header } from 'ui/modules/Modal';
import {
  Hero,
  FlexBetweenContainer,
  CollectionContainerForm,
  HeroInfo,
  Description
} from '../CreateCollectionPanel/style';
import Select from 'ui/elements/Select';

export type CreateIntentFormValues = {
  name: string;
  note?: string;
  communityId: string;
  atLocation?: string;
  hasUnit: string;
  hasNumericalValue: number;
};

type UnitPage = {
  id: string;
  label: string;
  symbol: string;
};

type SpatialThings = {
  id: string;
  name: string;
  lat: number;
  long: number;
};

export type TCreateIntentPanel = {
  communities?: Array<SelectOption>;
  cancel: () => void;
  formik: FormikHook<CreateIntentFormValues>;
  unitPages?: UnitPage[];
  spatialThings?: SpatialThings[];
};

export type SelectOption = {
  label: string;
  id: string;
};

export const CreateIntentPanel: FC<TCreateIntentPanel> = ({
  formik,
  cancel,
  communities,
  unitPages,
  spatialThings
}) => {
  const [unitLst, setUnitLst] = React.useState<any>([]);

  React.useEffect(() => {
    if (unitPages?.length) {
      const unit = unitPages.map(el => ({
        id: el.id,
        label: `${el.label} / ${el.symbol}`
      }));

      setUnitLst(unit);
    }
  }, [unitPages]);

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
            <CollectionContainerForm>
              <FormGroup>
                <FormLabel>{i18nMark('Resource')}</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  disabled={formik.isSubmitting}
                  onChange={formik.handleChange}
                  hint={{ class: 'error', value: '' }}
                  placeholder={i18nMark('Name of your resource')}
                  value={formik.values.name}
                />
              </FormGroup>
              <CounterChars>{60 - formik.values.name.length}</CounterChars>
              {formik.errors.name && (
                <AlertWrapper>
                  <CustomAlert variant="negative">{formik.errors.name}</CustomAlert>
                </AlertWrapper>
              )}
            </CollectionContainerForm>
            <CollectionContainerForm>
              <FormLabel>{i18nMark('name')}</FormLabel>
              <Select
                onSelect={(name, option) => {
                  formik.setValues({ ...formik.values, [name]: option.id });
                }}
                value={{ id: formik.values.communityId, label: '' }}
                variant="primary"
                id="communityId"
                name="communityId"
                options={communities as any}
              />
              {formik.errors.communityId && (
                <AlertWrapper>
                  <CustomAlert variant="negative">{formik.errors.communityId}</CustomAlert>
                </AlertWrapper>
              )}
            </CollectionContainerForm>

            <FlexBetweenContainer>
              <FormGroup>
                <FormLabel>{i18nMark('unit')}</FormLabel>
                <Select
                  onSelect={(name, option) => {
                    formik.setValues({ ...formik.values, [name]: option.id });
                  }}
                  options={unitLst}
                  value={{ id: formik.values.hasUnit, label: '' }}
                  variant="primary"
                  id="hasUnit"
                  name="hasUnit"
                />
                {formik.errors.hasUnit && (
                  <AlertWrapper>
                    <CustomAlert variant="negative">{formik.errors.hasUnit}</CustomAlert>
                  </AlertWrapper>
                )}
              </FormGroup>
              <FormGroup>
                <FormLabel>{i18nMark('Numerical Value')}</FormLabel>
                <Input
                  type="number"
                  id="hasNumericalValue"
                  name="hasNumericalValue"
                  onChange={formik.handleChange}
                  hint={{ class: 'error', value: '' }}
                  placeholder={i18nMark('Numerical Value')}
                  value={formik.values.hasNumericalValue.toString()}
                />
                {formik.errors.hasNumericalValue && (
                  <AlertWrapper>
                    <CustomAlert variant="negative">{formik.errors.hasNumericalValue}</CustomAlert>
                  </AlertWrapper>
                )}
              </FormGroup>
            </FlexBetweenContainer>

            <CollectionContainerForm>
              <FormLabel>{i18nMark('location')}</FormLabel>
              <Select
                onSelect={(name, option) => {
                  formik.setValues({ ...formik.values, [name]: option.id });
                }}
                options={spatialThings?.map(el => ({ id: el.id, value: el.id, label: el.name }))}
                value={{ id: formik.values.atLocation || '', label: '' }}
                variant="primary"
                id="atLocation"
                name="atLocation"
              />
              {formik.errors.hasUnit && (
                <AlertWrapper>
                  <CustomAlert variant="negative">{formik.errors.atLocation}</CustomAlert>
                </AlertWrapper>
              )}
            </CollectionContainerForm>

            <Description mt={2}>
              <FormGroup>
                <FormLabel>{i18nMark('description')}</FormLabel>
                <Input
                  type="textarea"
                  id="note"
                  name="note"
                  onChange={formik.handleChange}
                  disabled={formik.isSubmitting}
                  hint={{ class: 'error', value: '' }}
                  placeholder={i18nMark('A description of your resource')}
                  value={formik.values.note}
                />
              </FormGroup>
              <CounterChars>
                {formik.values.note ? 500 - formik.values.note.length : 500}
              </CounterChars>
              {formik.errors.note && (
                <AlertWrapper>
                  <CustomAlert variant="negative">{formik.errors.note}</CustomAlert>
                </AlertWrapper>
              )}
            </Description>
          </HeroInfo>
        </Hero>
        <Actions mb={3}>
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
      <ToastContainer />
    </Container>
  );
};
