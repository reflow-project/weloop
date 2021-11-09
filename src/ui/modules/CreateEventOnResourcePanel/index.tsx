import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box, Heading, Text } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { FormikHook } from 'ui/@types/types';
import { CustomSelect as Select } from 'ui/elements/CustomSelect';
import { setSelectOption } from '../../elements/CustomSelect/select';
import { ImageWrapper, Title } from '../../pages/resource';
import { IntentActions } from '../EconomicEventManager';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import Input, { CustomAlert } from '../../elements/Input';
import { Actions, Container, CounterChars, Header } from 'ui/modules/Modal';
import { Hero, CollectionContainerForm, HeroInfo } from '../CreateCollectionPanel/style';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useMe } from '../../../fe/session/useMe';

export type CreateEventOnResourceFormValues = {
  name: string;
  note?: string;
  atLocation: { id: string; value: string; label: string };
  eventNote?: string;
  hasPointInTime: string;
  action: IntentActions;
  provider: IntentActions;
  receiver: IntentActions;
  hasUnit: IntentActions;
  hasNumericalValue: number;
  image: string | File | undefined | any;
};

export type TCreateEventOnResourcePanel = {
  title: string;
  done: any;
  formik: FormikHook<CreateEventOnResourceFormValues>;
  unitPages?: any;
  actionList?: any;
  providerList?: null | { id: string; name: string; displayUsername: string }[];
  receiverList?: null | { id: string; name: string; displayUsername: string }[];
  setAction?: (name: string) => void;
};

export type SelectOption = {
  label: string;
  id: string;
};

export const CreateEventOnResourcePanel: FC<TCreateEventOnResourcePanel> = ({
  title,
  formik,
  done,
  actionList,
  providerList,
  receiverList,
  setAction = () => {}
}) => {
  const [providerArr, setProviderArr] = React.useState<any>([]);
  const [receiverArr, setReceiverArr] = React.useState<any>([]);
  const [startDate, setStartDate] = React.useState<any>(new Date());
  const { me } = useMe();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providerList, receiverList]);

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
              <div className="d-flex d-flex-image">
                <Box sx={{ width: '140', height: '140' }} className="item_photo">
                  <ImageWrapper>
                    <img
                      src={
                        typeof formik.values.image !== 'object'
                          ? formik.values.image
                          : formik.values.image.path
                      }
                      alt="img"
                    />
                  </ImageWrapper>
                </Box>
                <div className="item_info">
                  <Box mr={1} mb={2}>
                    <Title variant="heading">
                      {' '}
                      <Trans>{formik.values.name}</Trans>
                    </Title>
                  </Box>
                  <Box mr={1} mb={2}>
                    <Text variant="text">
                      <b>
                        <Trans>Location:</Trans>{' '}
                      </b>{' '}
                      <Trans>{formik.values.atLocation?.label}</Trans>
                    </Text>
                  </Box>
                  <Box mr={1}>
                    <Text variant="text">
                      <b>
                        <Trans>Note:</Trans>{' '}
                      </b>{' '}
                      <Trans>{formik.values.note}</Trans>
                    </Text>
                  </Box>
                </div>
              </div>
            </CollectionContainerForm>
            <CollectionContainerForm>
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
                  />
                </FormGroup>
                {formik.errors.action && (
                  <CustomAlert variant="negative">{formik.errors.action && 'Required'}</CustomAlert>
                )}
              </Box>

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
                      onInputChange={(name: string, value: string) => {
                        let newList = providerList?.filter(item =>
                          item?.displayUsername?.toLowerCase().includes(value.toLowerCase())
                        );

                        setProviderArr(
                          setSelectOption(newList, {
                            variables: ['name', 'displayUsername'],
                            template: 'name / displayUsername'
                          })
                        );
                      }}
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
                      onInputChange={(name: string, value: string) => {
                        let newList = receiverList?.filter(item =>
                          item?.displayUsername?.toLowerCase().includes(value.toLowerCase())
                        );

                        setReceiverArr(
                          setSelectOption(newList, {
                            variables: ['name', 'displayUsername'],
                            template: 'name / displayUsername'
                          })
                        );
                      }}
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
                    <Input
                      type="text"
                      id="hasUnit"
                      name="hasUnit"
                      disabled={true}
                      onChange={formik.handleChange}
                      value={formik.values.hasUnit.label}
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
              <FormLabel>Event date</FormLabel>
              <div
                style={{
                  width: '100%',
                  border: '1px solid #05244f',
                  padding: '0 10px',
                  marginBottom: 10
                }}
              >
                <DatePicker
                  selected={startDate}
                  onChange={date => {
                    setStartDate(date);
                    // @ts-ignore
                    formik.setValues({ ...formik.values, hasPointInTime: date.toISOString() });
                  }}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            </CollectionContainerForm>
            <CollectionContainerForm>
              <FormGroup>
                <FormLabel>Event Note</FormLabel>
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
