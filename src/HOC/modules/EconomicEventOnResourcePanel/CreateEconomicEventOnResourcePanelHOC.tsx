import { useFormik } from 'formik';
import React, { FC, useState } from 'react';
import styled from 'ui/themes/styled';
import { Flex } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import { Slide, toast } from 'react-toastify';
import * as Yup from 'yup';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';
import { useCreateEventOnResource } from '../../../fe/resource/create/useCreateEventOnResource';
import {
  CreateEventOnResourcePanel,
  TCreateEventOnResourcePanel,
  CreateEventOnResourceFormValues
} from 'ui/modules/CreateEventOnResourcePanel';
import { EconomicResource } from '../../pages/inventory/InventoryPage';
import { EconomicEventManagerHOC } from '../EconomicEventManager/EconomicEventManagerHOC';
import { CreateLocationPanelHOC } from '../CreateLocationPanel/CreateLocationPanelHOK';
import { CreateResourcePanelHOC } from '../CreateResourcePanel/CreateResourcePanelHOC';

export interface BasicCreateEventFormValues {
  name: string;
  summary: string;
  image: File | string | undefined;
}

export const validationSchema: Yup.ObjectSchema<BasicCreateEventFormValues> = Yup.object<
  BasicCreateEventFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  image: Yup.mixed<string | File>().test(...TestUrlOrFile)
});

export interface Props {
  done: () => void;
  resource: EconomicResource | any;
}

export const CreateEconomicEventOnResourcePanelHOC: FC<Props> = ({ done, resource, ...props }) => {
  const { create } = useCreateEventOnResource();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, 'Too Long!')
      .required('Required'),
    note: Yup.string().max(500, 'Too Long!'),
    eventNote: Yup.string().max(500, 'Too Long!'),
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

  const formik = useFormik<any>({
    initialValues: React.useMemo(() => {
      let values = {
        name: '',
        note: '',
        image: '' || undefined,
        atLocation: {
          id: '',
          label: '',
          value: ''
        },
        action: {
          id: '',
          label: ''
        },
        provider: {
          id: '',
          label: ''
        },
        receiver: {
          id: '',
          label: ''
        },
        hasUnit: {
          id: '',
          label: ''
        },
        hasNumericalValue: 0,
        eventNote: '',
        hasPointInTime: ''
      };
      if (resource) {
        values = {
          name: resource.name || '',
          note: resource.note || '',
          hasPointInTime: resource?.hasPointInTime || '',
          //@ts-ignore
          image: resource.image || undefined,
          action: {
            id: '',
            label: ''
          },
          provider: {
            id: resource.track[0]?.provider?.id || '',
            label: resource.track[0]?.provider?.name || ''
          },
          receiver: {
            id: resource.track[0]?.receiver?.id || '',
            label: resource.track[0]?.receiver?.name || ''
          },
          hasUnit: {
            id: resource.onhandQuantity?.hasUnit.id || '',
            label: resource.onhandQuantity?.hasUnit.label || ''
          },
          hasNumericalValue: resource.onhandQuantity?.hasNumericalValue || 0,
          eventNote: resource.track[0]?.note || '',
          atLocation: resource.currentLocation
            ? {
                id: resource.currentLocation.id,
                value: resource.currentLocation.id,
                label: resource.currentLocation.name
              }
            : { id: '', label: '', value: '' }
        };
      }
      return values;
    }, [resource]),
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignupSchema,
    enableReinitialize: true,

    onSubmit: (values: CreateEventOnResourceFormValues) => {
      return create({
        id: resource.id,
        name: values.name,
        atLocation: values.atLocation.id,
        eventNote: values.eventNote || '',
        action: values.action.id,
        note: values.note,
        provider: values.provider.id,
        receiver: values.receiver.id,
        hasUnit: values.hasUnit.id,
        hasNumericalValue: values.hasNumericalValue,
        image: values.image,
        hasPointInTime: values.hasPointInTime
      })
        .then((response: any) => {
          if (!response.errors) {
            toast.success(`Event on resource ${resource.name} created`, {
              position: 'top-right',
              transition: Slide,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true
            });
            done();
          } else {
            console.log(response.errors[0].message);
          }
        })
        .catch((error: any) => console.log(error));
    }
  });

  const CreateEventOnResourcePanelProps: TCreateEventOnResourcePanel = {
    ...props,
    title: `Create a new event on resource ${resource.name}`,
    formik,
    done
  };

  const handlerCloseSecondTab = () => {
    toggleTab(0);
    done();
  };
  const [showCreateLocation, toggleShowCreateLocation] = useState(false);
  const CreateResourceModal = (
    <>
      {showCreateLocation ? (
        <CreateLocationPanelHOC done={toggleShowCreateLocation} />
      ) : (
        <CreateResourcePanelHOC
          done={handlerCloseSecondTab}
          toggleCreateLocation={toggleShowCreateLocation}
          resource={formik.values}
        />
      )}
    </>
  );

  const CreateEventOnExistResourceModal = (
    <CreateEventOnResourcePanel {...CreateEventOnResourcePanelProps} />
  );

  const [tab, toggleTab] = useState(0);
  const [switchOn, toggleSwitch] = useState(true);
  return (
    <EconomicEventManagerHOC>
      <TabController>
        <Switcher>
          <input
            type="checkbox"
            name="toggleSwitch"
            id="toggleSwitch"
            checked={switchOn}
            onChange={() => {
              toggleSwitch(!switchOn);
              toggleTab(tab === 0 ? 1 : 0);
            }}
          />
          <span className="slider round"></span>
          <Trans>
            {switchOn
              ? 'Create a new event on exist resource'
              : 'Create an event that results in a new resource'}
          </Trans>
        </Switcher>
      </TabController>
      {tab ? CreateResourceModal : CreateEventOnExistResourceModal}
    </EconomicEventManagerHOC>
  );
};

export const Switcher = styled('label')`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #666666;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: relative;
    cursor: pointer;
    width: 60px;
    height: 30px;
    margin-right: 16px;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 3px 22px -6px #c5bcbc;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    border-radius: 50%;
    content: '';
    height: 30px;
    width: 30px;
    left: 30px;
    bottom: 0;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #05244f;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(-30px);
  }
`;

export const TabController = styled(Flex)`
  width: 100%;
  justify-content: stretch;
  align-items: stretch;
  flex-grow: 1;
  flex-direction: row;
  border-bottom: 1px solid #05244f;
`;
