import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box, Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { FormikHook } from 'ui/@types/types';
import { CustomSelect as Select } from 'ui/elements/CustomSelect';
import { useMe } from '../../../fe/session/useMe';
import * as Types from '../../../graphql/types.generated';
// import { EconomicResource } from '../../../HOC/pages/inventory/InventoryPage';
import { setSelectOption } from '../../elements/CustomSelect/select';
import styled from '../../themes/styled';
import DropzoneArea from '../DropzoneModal';
import { IntentActions } from '../EconomicEventManager';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import Input, { CustomAlert } from '../../elements/Input';
import { Actions, Container, CounterChars, Header } from 'ui/modules/Modal';
import { Hero, CollectionContainerForm, HeroInfo } from '../CreateCollectionPanel/style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export type CreateIntentFormValues = {
  name: string;
  note?: string;
  eventNote?: string;
  hasPointInTime: string;
  atLocation: IntentActions;
  action: IntentActions;
  provider: IntentActions;
  receiver: IntentActions;
  hasUnit: IntentActions;
  hasNumericalValue: number;
  image: string | File | undefined;
};

export type TCreateResourcePanel = {
  title: string;
  done: () => void;
  resource?: any;
  spatialThings?: Types.Maybe<
    Types.Maybe<
      { __typename: 'SpatialThing' } & Pick<Types.SpatialThing, 'name' | 'id' | 'lat' | 'long'>
    >[]
  > | null;
  formik: FormikHook<CreateIntentFormValues>;
  unitPages?: any;
  actionList?: any;
  providerList?: null | { id: string; name: string }[];
  receiverList?: null | { id: string; name: string }[];
  toggleCreateLocation: (isShow: boolean) => void;
  setAction?: (name: string) => void;
};

export type SelectOption = {
  label: string;
  id: string;
  displayUsername: string;
};

export const CreateResourcePanel: FC<TCreateResourcePanel> = ({
  title,
  formik,
  done,
  unitPages,
  actionList,
  spatialThings,
  providerList,
  receiverList,
  toggleCreateLocation,
  setAction = () => {}
}) => {
  const [providerArr, setProviderArr] = React.useState<any>([]);
  const [receiverArr, setReceiverArr] = React.useState<any>([]);
  const [unitLst, setUnitLst] = React.useState<any>([]);
  const [startDate, setStartDate] = React.useState<any>(new Date());
  const onIconFileSelected = React.useCallback(
    (file: File) => formik.setValues({ ...formik.values, image: file }),
    [formik]
  );
  const { me } = useMe();

  React.useEffect(() => {
    if (unitPages?.length) {
      const unit = unitPages.map((el: { id: string; label: string; symbol: string }) => ({
        id: el.id,
        label: `${el.label} / ${el.symbol}`
      }));

      setUnitLst(unit);
    }
  }, [unitPages]);
  /* eslint-disable */
  React.useEffect(() => {
    setProviderArr(
      setSelectOption(providerList, {
        variables: ['name', 'displayUsername'],
        template: 'name / displayUsername'
      })
    );
    setReceiverArr(
      setSelectOption(receiverList, {
        variables: ['name', 'displayUsername'],
        template: 'name / displayUsername'
      })
    );

    formik.setValues({
      ...formik.values,
      hasPointInTime: new Date().toISOString(),
      provider: {
        id: providerList?.find((el: any) => el.id === me?.user?.id)?.id || '',
        label: providerList?.find((el: any) => el.id === me?.user?.id)?.name || ''
      },
      receiver: {
        id: receiverList?.find((el: any) => el.id === me?.user?.id)?.id || '',
        label: receiverList?.find((el: any) => el.id === me?.user?.id)?.name || ''
      }
    });
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
            <Trans>{title}</Trans>
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
                  <Box>
                    <FormGroup>
                      <FormLabel>Event note</FormLabel>
                      <Input
                        id="eventNote"
                        type="textarea"
                        name="eventNote"
                        onChange={formik.handleChange}
                        placeholder={i18nMark('Event Note')}
                        value={formik.values.eventNote}
                      />
                    </FormGroup>
                    <CounterChars>
                      {formik.values.eventNote ? 500 - formik.values.eventNote.length : 500}
                    </CounterChars>
                    {formik.errors.eventNote && (
                      <CustomAlert variant="negative">{formik.errors.eventNote}</CustomAlert>
                    )}
                  </Box>
                </div>
              </div>
            </CollectionContainerForm>

            <CollectionContainerForm>
              <div className="d-flex">
                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>Provider</FormLabel>
                    <Select
                      onSelect={(name, option) => {
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      placeholder={i18nMark('Provider')}
                      options={providerArr}
                      variant="primary"
                      value={formik.values.provider}
                      id="provider"
                      name="provider"
                      components={{ DropdownIndicator: () => null }}
                      onInputChange={(name: string, value: string) => {
                        let newList = providerList?.filter(item =>
                          // @ts-ignore
                          item?.displayUsername?.toLowerCase().includes(value.toLowerCase())
                        );

                        setProviderArr(
                          setSelectOption(newList, {
                            variables: ['name', 'displayUsername'],
                            template: 'name / displayUsername'
                          })
                        );
                      }}
                      openMenuOnClick={false}
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
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      placeholder={i18nMark('Receiver')}
                      options={receiverArr}
                      variant="primary"
                      value={formik.values.receiver}
                      id="receiver"
                      name="receiver"
                      components={{ DropdownIndicator: () => null }}
                      onInputChange={(name: string, value: string) => {
                        let newList = receiverList?.filter(item =>
                          // @ts-ignore
                          item?.displayUsername?.toLowerCase().includes(value.toLowerCase())
                        );

                        setReceiverArr(
                          setSelectOption(newList, {
                            variables: ['name', 'displayUsername'],
                            template: 'name / displayUsername'
                          })
                        );
                      }}
                      openMenuOnClick={false}
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
                        placeholder={i18nMark('Select action')}
                        value={formik.values.action}
                        noChange={true}
                        onInputChange={() => {}}
                        openMenuOnClick={true}
                      />
                    </FormGroup>
                    {formik.errors.action && (
                      <CustomAlert variant="negative">
                        {formik.errors.action && 'Required'}
                      </CustomAlert>
                    )}
                  </Box>
                  <Box>
                    <FormLabel>Event date</FormLabel>
                    <div style={{ width: '100%', border: '1px solid #05244f', padding: '0 10px' }}>
                      <DatePicker
                        className="date-picker"
                        selected={startDate}
                        onChange={(date: any) => {
                          setStartDate(date);
                          formik.setValues({
                            ...formik.values,
                            // @ts-ignore
                            hasPointInTime: date.toISOString()
                          });
                        }}
                        dateFormat="dd/MM/yyyy"
                      />
                    </div>
                  </Box>
                </div>
                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>Location</FormLabel>
                    <Select
                      onSelect={(name, option) => {
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      options={spatialThings?.map((el: any) => ({
                        id: el.id,
                        value: el.id,
                        label: el.name
                      }))}
                      placeholder={i18nMark('CustomSelect location')}
                      value={formik.values.atLocation}
                      variant="primary"
                      id="atLocation"
                      name="atLocation"
                      noChange={true}
                      onInputChange={() => {}}
                      openMenuOnClick={true}
                    />
                    <LocationBlockStyle>
                      <FormLabel>
                        {i18nMark(
                          'If you did not find your locations in the list, you can create it'
                        )}
                      </FormLabel>
                      <Button variant="show-more" onClick={() => toggleCreateLocation(true)}>
                        <Trans>Create Location</Trans>
                      </Button>
                    </LocationBlockStyle>
                  </FormGroup>
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
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      options={unitLst}
                      variant="primary"
                      id="hasUnit"
                      name="hasUnit"
                      placeholder={i18nMark('Unit')}
                      value={formik.values.hasUnit}
                      noChange={true}
                      onInputChange={() => {}}
                      openMenuOnClick={true}
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
                <FormLabel>Resource note</FormLabel>
                <Input
                  id="note"
                  type="textarea"
                  name="note"
                  onChange={formik.handleChange}
                  placeholder={i18nMark('Resource note')}
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
          <Button variant="outline" onClick={done}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </form>
      <ToastContainer />
    </Container>
  );
};

const LocationBlockStyle = styled('div')`
  text-align: right;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  & > * {
    padding: 5px 0;
  }
`;
