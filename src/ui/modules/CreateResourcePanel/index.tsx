import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box, Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { FormikHook } from 'ui/@types/types';
import { CustomSelect as Select } from 'ui/elements/CustomSelect';
import { setSelectOption } from '../../elements/CustomSelect/select';
import DropzoneArea from '../DropzoneModal';
import { IntentActions } from '../EconomicEventManager';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import Input, { CustomAlert } from '../../elements/Input';
import { Actions, Container, CounterChars, Header } from 'ui/modules/Modal';

import { Hero, CollectionContainerForm, HeroInfo } from '../CreateCollectionPanel/style';

export type CreateIntentFormValues = {
  name: string;
  note?: string;
  action: IntentActions;
  provider: IntentActions;
  receiver: IntentActions;
  hasUnit: IntentActions;
  hasNumericalValue: number;
  image: string | File | undefined;
};

export type TCreateResourcePanel = {
  done: any;
  formik: FormikHook<CreateIntentFormValues>;
  unitPages?: any;
  actionList?: any;
  providerList?: null | { id: string; name: string }[];
  receiverList?: null | { id: string; name: string }[];
  setAction: (name: string) => void;
};

export type SelectOption = {
  label: string;
  id: string;
};

export const CreateResourcePanel: FC<TCreateResourcePanel> = ({
  formik,
  done,
  unitPages,
  actionList,
  providerList,
  receiverList,
  setAction,
  ...props
}) => {
  const [providerArr, setProviderArr] = React.useState<any>([]);
  const [receiverArr, setReceiverArr] = React.useState<any>([]);
  const [unitLst, setUnitLst] = React.useState<any>([]);
  const onIconFileSelected = React.useCallback(
    (file: File) => formik.setValues({ ...formik.values, image: file }),
    [formik]
  );
  React.useEffect(() => {
    if (unitPages?.length) {
      const unit = unitPages.map((el: { id: string; label: string; symbol: string }) => ({
        id: el.id,
        label: `${el.label} / ${el.symbol}`
      }));

      setUnitLst(unit);
    }
  }, [unitPages]);

  React.useEffect(() => {
    setProviderArr(setSelectOption(providerList, 'name'));
    setReceiverArr(setSelectOption(receiverList, 'name'));
  }, [providerList, receiverList]);

  React.useEffect(() => {
    setUnitLst(
      setSelectOption(unitPages?.edges, {
        variables: ['label', 'symbol'],
        template: 'label / symbol'
      })
    );
  }, [unitPages]);
  const initialIconUrl = 'string' === typeof formik.values.image ? formik.values.image : '';
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Header>
          <Heading m={2}>
            <Trans>Create a new Resource</Trans>
          </Heading>
        </Header>

        <Hero>
          <HeroInfo>
            <CollectionContainerForm>
              <div className="d-flex">
                <Box sx={{ width: '140', height: '140' }} className="item_photo">
                  <DropzoneArea
                    initialUrl={initialIconUrl}
                    onFileSelect={onIconFileSelected}
                    filePattern="image/*"
                  />
                </Box>
                <div className="item_info">
                  <Box>
                    <FormGroup>
                      <FormLabel>{i18nMark('Resource')}</FormLabel>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        disabled={formik.isSubmitting}
                        onChange={formik.handleChange}
                        placeholder={i18nMark('Name of your resource')}
                        value={formik.values.name}
                      />
                      <CounterChars>{60 - formik.values.name.length}</CounterChars>
                    </FormGroup>
                    {formik.errors.name && (
                      <CustomAlert variant="negative">{formik.errors.name}</CustomAlert>
                    )}
                  </Box>
                  <br />
                  <Box>
                    <FormGroup>
                      <FormLabel>Actions</FormLabel>
                      <Select
                        onSelect={(name, option) => {
                          setAction(option.id);
                          formik.setValues({ ...formik.values, action: option });
                        }}
                        options={actionList}
                        variant="primary"
                        id="actions"
                        name="actions"
                        placeholder={i18nMark('CustomSelect action')}
                        value={formik.values.action}
                      />
                    </FormGroup>
                    {formik.errors.action && (
                      <CustomAlert variant="negative">
                        {formik.errors.action && 'Required'}
                      </CustomAlert>
                    )}
                  </Box>
                </div>
              </div>
            </CollectionContainerForm>
            <CollectionContainerForm>
              <div className="d-flex">
                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>Receiver</FormLabel>
                    <Select
                      onSelect={(name, option) => {
                        setAction(option.id);
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      placeholder={i18nMark('Provider')}
                      options={providerArr}
                      variant="primary"
                      value={formik.values.provider}
                      id="provider"
                      name="provider"
                    />
                  </FormGroup>
                  {formik.errors.provider && (
                    <CustomAlert variant="negative">
                      {formik.errors.provider && 'Required'}
                    </CustomAlert>
                  )}
                </div>

                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>Receiver</FormLabel>
                    <Select
                      onSelect={(name, option) => {
                        setAction(option.id);
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      placeholder={i18nMark('Receiver')}
                      options={receiverArr}
                      variant="primary"
                      value={formik.values.receiver}
                      id="receiver"
                      name="receiver"
                    />
                  </FormGroup>
                  {formik.errors.receiver && (
                    <CustomAlert variant="negative">
                      {formik.errors.receiver && 'Required'}
                    </CustomAlert>
                  )}
                </div>
              </div>
            </CollectionContainerForm>
            <CollectionContainerForm>
              <div className="d-flex">
                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>unit</FormLabel>
                    <Select
                      onSelect={(name, option) => {
                        setAction(option.id);
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      options={unitLst}
                      variant="primary"
                      id="hasUnit"
                      name="hasUnit"
                      placeholder={i18nMark('Unit')}
                      value={formik.values.hasUnit}
                    />
                  </FormGroup>
                  {formik.errors.hasUnit && (
                    <CustomAlert variant="negative">
                      {formik.errors.hasUnit && 'Required'}
                    </CustomAlert>
                  )}
                </div>
                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>numerical value</FormLabel>
                    <Input
                      type="number"
                      id="hasNumericalValue"
                      name="hasNumericalValue"
                      onChange={formik.handleChange}
                      placeholder={i18nMark('Numerical Value')}
                      value={formik.values.hasNumericalValue}
                    />
                  </FormGroup>
                  {formik.errors.hasNumericalValue && (
                    <CustomAlert variant="negative">{formik.errors.hasNumericalValue}</CustomAlert>
                  )}
                </div>
              </div>
            </CollectionContainerForm>
            <CollectionContainerForm>
              <FormGroup>
                <FormLabel>note</FormLabel>
                <Input
                  id="note"
                  type="textarea"
                  name="note"
                  onChange={formik.handleChange}
                  placeholder={i18nMark('Note')}
                  value={formik.values.note}
                />
              </FormGroup>
              <CounterChars>
                {formik.values.note ? 500 - formik.values.note.length : 500}
              </CounterChars>
              {formik.errors.note && (
                <CustomAlert variant="negative">{formik.errors.note}</CustomAlert>
              )}
            </CollectionContainerForm>
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
          <Button variant="outline" onClick={done}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </form>
      <ToastContainer />
    </Container>
  );
};
