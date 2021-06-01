import { useFormik } from 'formik';
import React, { FC } from 'react';
import { Slide, toast } from 'react-toastify';
import { BasicCreateCollectionFormValues } from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';
import { useCreateResource } from '../../../fe/resource/create/useCreateResource';
import { useMe } from '../../../fe/session/useMe';
import { CreateResourcePanel, TCreateResourcePanel } from '../../../ui/modules/CreateResourcePanel';
import { EconomicEventManagerHOC } from '../EconomicEventManager/EconomicEventManagerHOC';

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

export const CreateResourcePanelHOC: FC<any> = ({ done, ...props }) => {
  const { me } = useMe();
  const history = useHistory();
  const { create } = useCreateResource();

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

    onSubmit: (values: any) => {
      //TODO: do validation and return proper data
      return create({
        name: values.name,
        action: values.action.id,
        note: values.note,
        provider: values.provider.id,
        receiver: values.receiver.id,
        hasUnit: values.hasUnit.id,
        hasNumericalValue: values.hasNumericalValue,
        image: values.image
      })
        .then((response: any) => {
          const redirect = `/inventory/user/${me?.user.id} `;
          !response.errors && history.replace(redirect);

          !response.errors &&
            toast.success('Resource was created', {
              position: 'top-right',
              transition: Slide,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true
            });
        })
        .catch((error: any) => console.log(error));
    }
  });
  React.useEffect(() => {
    console.log(formik.values.image);
  }, [formik]);
  const CreateResourcePanelProps: TCreateResourcePanel = {
    ...props,
    formik,
    done
  };

  return (
    <EconomicEventManagerHOC>
      <CreateResourcePanel {...CreateResourcePanelProps} />
    </EconomicEventManagerHOC>
  );
};
