import { useFormik } from 'formik';
import React, { Dispatch, FC } from 'react';
import { Slide, toast } from 'react-toastify';
import { BasicCreateCollectionFormValues } from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';
import { useAddLocation } from '../../../fe/location/add/useAddLocation';

import { LocationPanel, LocationPanelProps } from '../../../ui/elements/LocationPanel';

type CreateLocationValues = {
  name: string;
  lat: number;
  long: number;
  note: string;
};

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
  done: Dispatch<boolean>;
}

export const CreateLocationPanelHOC: FC<Props> = ({ done }) => {
  const { createLocation } = useAddLocation();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(60, 'Too Long!')
      .required('Required'),
    note: Yup.string().max(500, 'Too Long!')
  });

  const formik = useFormik<any>({
    initialValues: {
      name: '',
      lat: '',
      long: '',
      note: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignupSchema,
    enableReinitialize: true,

    onSubmit: (values: CreateLocationValues) => {
      return createLocation({
        name: values.name,
        lat: values.lat,
        long: values.long,
        note: values.note
      })
        .then((response: any) => {
          if (!response.errors) {
            done(false);
            toast.success('Location was created', {
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

  const CreateResourcePanelProps: LocationPanelProps = {
    formik
  };

  return <LocationPanel {...CreateResourcePanelProps} />;
};
