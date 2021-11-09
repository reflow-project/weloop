import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { useFormik } from 'formik';
import * as React from 'react';
import { ToastContainer, Slide, toast } from 'react-toastify';
import { Box } from 'rebass/styled-components';
import * as Yup from 'yup';
import { useCreateEvent } from '../../../fe/intent/createEvent/useCreateEvent';
import Button from '../../elements/Button';
import Input, { CustomAlert } from '../../elements/Input';
import { CustomSelect as Select } from 'ui/elements/CustomSelect';
import { setSelectOption } from '../../elements/CustomSelect/select';
import { CollectionContainerForm } from '../CreateCollectionPanel/style';
import { CreateIntentFormValues } from '../CreateResourcePanel';
import { CounterChars } from '../Modal';
import { FormLabel, FormGroup, FormStyled, ButtonWrap, Container } from './styles';

export type IntentActions = {
  id: string;
  label: string;
  note?: string;
  isDisabled?: boolean;
  displayUsername?: string;
};

export type EconomicEventVariables = {
  note: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number | string | undefined;
};

export type EconomicEventManagerProps = {
  actionList?: any;
  providerList: null | undefined | [] | { id: string; name: string }[];
  receiverList: null | undefined | [] | { id: string; name: string }[];
  unitPages?: {
    edges: any;
  };
  setAction?: (name: string) => void;
};

export const validationSchema = Yup.object().shape({
  note: Yup.string().max(500, 'Too Long!'),
  action: Yup.object().shape({
    id: Yup.string().required('Required')
  }),
  provider: Yup.object().shape({
    id: Yup.string().required('Required')
  }),
  receiver: Yup.object().shape({
    id: Yup.string().required('Required')
  }),
  hasUnit: Yup.object().shape({
    id: Yup.string().required('Required')
  }),
  hasNumericalValue: Yup.string()
    .required('Required')
    .notOneOf([0, '0', null, undefined], 'Not null')
});

export const EconomicEventManager: React.FC<any> = ({
  actionList,
  setAction,
  providerList,
  receiverList,
  unitPages
}) => {
  const [providerArr, setProviderArr] = React.useState<any>([]);
  const [receiverArr, setReceiverArr] = React.useState<any>([]);
  const [unitLst, setUnitLst] = React.useState<any>([]);

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

  const { create } = useCreateEvent();

  const formik = useFormik<any>({
    initialValues: {
      name: '',
      note: '',
      image: undefined,
      action: {
        id: '',
        label: ''
      },
      provider: {
        id: '',
        label: '',
        note: '',
        displayUsername: ''
      },
      receiver: {
        id: '',
        label: '',
        note: '',
        displayUsername: ''
      },
      hasUnit: {
        id: '',
        label: '',
        note: ''
      },
      hasNumericalValue: 0
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: (values: CreateIntentFormValues) => {
      return create({
        action: values.action.id,
        note: values.note,
        provider: values.provider.id,
        receiver: values.receiver.id,
        hasUnit: values.hasUnit.id,
        hasNumericalValue: values.hasNumericalValue
      })
        .then((response: any) => {
          if (!response.errors) {
            toast.success('Event was created', {
              position: 'top-right',
              transition: Slide,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true
            });
          }
        })
        .catch((error: any) => console.log(error));
    }
  });

  return (
    <Container>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Box>
          <FormGroup>
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
        {formik.values.action.id ? (
          <div>
            <CollectionContainerForm>
              <div className="d-flex">
                <div className="item_col-6">
                  <FormGroup>
                    <FormLabel>Receiver</FormLabel>
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
            <ButtonWrap>
              <Button variant="info" type="submit" className="event_btn">
                <Trans>Create Event</Trans>
              </Button>
            </ButtonWrap>
          </div>
        ) : null}
      </FormStyled>
      <ToastContainer />
    </Container>
  );
};

export default EconomicEventManager;
