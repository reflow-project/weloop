import { Trans } from '@lingui/macro';
import * as React from 'react';
import { ToastContainer, Slide, toast } from 'react-toastify';
import { useCreateEvent } from '../../../fe/intent/createEvent/useCreateEvent';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import Select from 'ui/elements/Select';
import { FormLabel, FormGroup, FormStyled, ButtonWrap } from './styles';

export type IntentActions = {
  id: string;
  label: string;
  note?: string;
};

export type EconomicEventVariables = {
  note: string;
  action: string;
  provider: string;
  receiver: string;
  hasUnit: string;
  hasNumericalValue: number | string | undefined;
};

type Person = {
  id: string;
  name: string;
  __typename: string;
};

type UnitPage = {
  id: string;
  label: string;
  symbol: string;
};

type EconomicEvent = {
  id: string;
  provider: Person;
  receiver: Person;
  __typename: string;
};

export type EconomicEventManagerProps = {
  actionList?: any;
  economicEvents?: any;
  unitPages?: {
    edges: any;
  };
  setAction: any;
};

export const EconomicEventManager: React.FC<EconomicEventManagerProps> = ({
  actionList,
  setAction,
  economicEvents,
  unitPages
}) => {
  const [eventVariables, setEventVariables] = React.useState({
    note: '',
    action: { id: '', label: '', note: '' },
    provider: { id: '', label: '' },
    receiver: { id: '', label: '' },
    hasUnit: { id: '', label: '' },
    hasNumericalValue: ''
  });

  const [providerLst, setProviderLst] = React.useState<any>([]);
  const [receiverLst, setReceiverLst] = React.useState<any>([]);
  const [unitLst, setUnitLst] = React.useState<any>([]);
  // const [searchValue, setSearchValue] = React.useState<any>({
  //   action: '',
  //   provider: '',
  //   receiver: '',
  //   hasUnit: '',
  // })

  React.useEffect(() => {
    if (economicEvents.data?.length) {
      const providers = economicEvents.data.map((el: any) => ({
        id: el.provider.id,
        label: el.provider.name
      }));
      const receivers = economicEvents.data.map((el: any) => ({
        id: el.receiver.id,
        label: el.receiver.name
      }));

      setProviderLst(providers);
      setReceiverLst(receivers);
    }
  }, [economicEvents]);

  React.useEffect(() => {
    if (unitPages?.edges.length) {
      const unit = unitPages.edges.map((el: any) => ({
        id: el.id,
        label: `${el.label} / ${el.symbol}`
      }));

      setUnitLst(unit);
    }
  }, [unitPages]);

  React.useEffect(() => {
    return handlerClearState();
  }, []);

  const handlerClearState = () =>
    setEventVariables({
      note: '',
      action: { id: '', label: '', note: '' },
      provider: { id: '', label: '' },
      receiver: { id: '', label: '' },
      hasUnit: { id: '', label: '' },
      hasNumericalValue: ''
    });

  const actionHandler = (name: string, option: IntentActions) => {
    eventVariablesHandler({ target: { name, value: option } });
    setAction(option.id);
  };

  const eventVariablesHandler = (event: any) => {
    const { name, value } = event.target;
    setEventVariables({
      ...eventVariables,
      [name]: value
    });
  };
  //
  // const selectSearchHandler = (name: string, value: string) => {
  //   if (value.length > 3) {
  //     console.log(value)
  //
  //   }
  // }

  const { create } = useCreateEvent();

  const formSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const result = await create({
      note: eventVariables.note,
      action: eventVariables.action.id,
      provider: eventVariables.provider.id,
      receiver: eventVariables.receiver.id,
      hasUnit: eventVariables.hasUnit.id,
      hasNumericalValue: +eventVariables.hasNumericalValue
    });

    !result?.errors &&
      toast.success('Event was created', {
        position: 'top-right',
        transition: Slide,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      }) &&
      handlerClearState();
  };

  return (
    <div style={{ margin: '0 10px 12px 0' }}>
      <FormStyled onSubmit={formSubmit}>
        <FormGroup>
          <Select
            options={actionList}
            variant="primary"
            value={eventVariables.action}
            id="action"
            name="action"
            onSelect={actionHandler}
            // onInputChange={selectSearchHandler}
          />
        </FormGroup>
        {providerLst.length ? (
          <div>
            <div className="d-flex">
              <FormGroup>
                <FormLabel>Provider</FormLabel>
                <Select
                  options={providerLst}
                  variant="primary"
                  value={eventVariables.provider}
                  id="provider"
                  name="provider"
                  onSelect={actionHandler}
                  // onInputChange={selectSearchHandler}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Receiver</FormLabel>
                <Select
                  options={receiverLst}
                  variant="primary"
                  value={eventVariables.receiver}
                  id="receiver"
                  name="receiver"
                  onSelect={actionHandler}
                  // onInputChange={selectSearchHandler}
                />
              </FormGroup>
            </div>
            <FormGroup>
              <FormLabel>note</FormLabel>
              <Input
                id="note"
                type="textarea"
                name="note"
                hint={{ class: 'error', value: '' }}
                onChange={eventVariablesHandler}
                placeholder="note"
                value={eventVariables.note}
              />
            </FormGroup>

            <div className="d-flex">
              <FormGroup>
                <FormLabel>unit</FormLabel>
                <Select
                  options={unitLst}
                  value={eventVariables.hasUnit}
                  variant="primary"
                  id="hasUnit"
                  name="hasUnit"
                  onSelect={actionHandler}
                  // onInputChange={selectSearchHandler}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>numerical value</FormLabel>
                <Input
                  type="number"
                  id="hasNumericalValue"
                  name="hasNumericalValue"
                  onChange={eventVariablesHandler}
                  hint={{ class: 'error', value: '' }}
                  placeholder="Numerical Value"
                  value={eventVariables.hasNumericalValue}
                />
              </FormGroup>
            </div>
            <ButtonWrap>
              <Button variant="info" type="submit" onClick={formSubmit} className="event_btn">
                <Trans>Create Event</Trans>
              </Button>
            </ButtonWrap>
          </div>
        ) : null}
      </FormStyled>
      <ToastContainer />
    </div>
  );
};

export default EconomicEventManager;
