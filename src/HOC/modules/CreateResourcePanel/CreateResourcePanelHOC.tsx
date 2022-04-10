import { useFormik } from 'formik';
import React, { FC } from 'react';
import { Slide, toast } from 'react-toastify';
import { BasicCreateCollectionFormValues } from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';
import { useCreateResource } from '../../../fe/resource/create/useCreateResource';

import {
  CreateResourcePanel,
  TCreateResourcePanel,
  CreateIntentFormValues
} from '../../../ui/modules/CreateResourcePanel';
import { useSpatialThingsPagesQuery } from '../EconomicEventManager/EconomicEventManager.generated';
import { EconomicEventManagerHOC } from '../EconomicEventManager/EconomicEventManagerHOC';
import { notify } from '../../../fe/lib/graphql/ctx';

export const validationSchema: Yup.ObjectSchema<BasicCreateCollectionFormValues> = Yup.object<
  BasicCreateCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.mixed<string | File>().test(...TestUrlOrFile)
});

export interface Props {
  done: () => void;
  toggleCreateLocation: (isShow: boolean) => void;
  resource?: any;
}

export const CreateResourcePanelHOC: FC<Props> = ({
  done,
  resource,
  toggleCreateLocation,
  ...props
}) => {
  const history = useHistory();
  const { create } = useCreateResource();
  const spatialThingsQ = useSpatialThingsPagesQuery();
  const spatialThings = spatialThingsQ.data?.spatialThingsPages;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, 'Too Long!')
      .required('Required'),
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

  const formik = useFormik<any>({
    initialValues: {
      name: resource?.name || '',
      note: resource?.note || '',
      eventNote: resource?.eventNote || '',
      hasPointInTime: resource?.hasPointInTime || '',
      image: resource?.image || '',
      atLocation: {
        id: resource?.currentLocation?.id || '',
        label: ''
      },
      action: {
        id: '',
        label: ''
      },
      provider: {
        id: '',
        label: '',
        note: ''
      },
      receiver: {
        id: '',
        label: '',
        note: ''
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
    validationSchema: SignupSchema,
    enableReinitialize: true,

    onSubmit: (values: CreateIntentFormValues) => {
      return create({
        name: values.name,
        action: values.action.id,
        note: values.note,
        eventNote: values.eventNote,
        hasPointInTime: values.hasPointInTime,
        atLocation: values.atLocation?.id || '',
        provider: values.provider.id,
        receiver: values.receiver.id,
        hasUnit: values.hasUnit.id,
        hasNumericalValue: values.hasNumericalValue,
        image: values.image
      })
        .then((response: any) => {
          if (!response.errors) {
            const newId = response?.data?.createEconomicEvent?.economicResource?.id;
            const redirect = `/resource/${newId} `;
            done();
            history.replace(redirect);

            toast.success('Resource was created', {
              position: 'top-right',
              transition: Slide,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true
            });
          }
        })
        .catch((error: { message: string }) => {
          notify(error.message, { type: 'error' });
        });
    }
  });

  const CreateResourcePanelProps: TCreateResourcePanel = React.useMemo(
    () => ({
      ...props,
      title: 'Create a new Resource',
      formik,
      spatialThings: spatialThings?.edges || null,
      toggleCreateLocation,
      done
    }),
    [formik, spatialThings, toggleCreateLocation, done, props]
  );

  return (
    <EconomicEventManagerHOC>
      <CreateResourcePanel {...CreateResourcePanelProps} />
    </EconomicEventManagerHOC>
  );
};
