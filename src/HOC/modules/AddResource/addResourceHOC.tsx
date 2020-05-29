import { useAddResource } from 'fe/resource/add/useAddResource';
import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import {
  ResourceFormValues,
  UploadResource
} from 'ui/modules/AddResource/UploadResource';
import * as Yup from 'yup';
import { accepted_license_types } from 'mn-constants';
import { ResourceInput } from 'graphql/types.generated';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';

export const validationSchema: Yup.ObjectSchema<ResourceFormValues> = Yup.object<
  ResourceFormValues
>({
  name: Yup.string()
    .max(90)
    .required('title is required'),
  summary: Yup.string().max(1000),
  icon: Yup.mixed<File | string>().test(...TestUrlOrFile),
  resource: Yup.mixed<File>().required(),
  license: Yup.string()
});

export const initialValues: ResourceFormValues = {
  name: '',
  summary: '',
  icon: '',
  license: accepted_license_types[1],
  resource: null
};

export interface AddResourceHOC {
  collectionId: string;
  done(): any;
}

export const AddResourceHOC: FC<AddResourceHOC> = ({
  done,
  collectionId
}: AddResourceHOC) => {
  const { create } = useAddResource();

  const formik = useFormik<ResourceFormValues>({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: vals => {
      const { resource: resourceFile, icon, name, license, summary } = vals;
      if (!resourceFile) {
        return;
      }

      const resource: ResourceInput = {
        name,
        summary,
        license
      };

      return create({
        collectionId,
        resource,
        content: resourceFile,
        icon
      }).then(done);
    }
  });
  const hideIconField =
    !formik.values.resource ||
    formik.values.resource.type.indexOf('image') !== -1;

  useEffect(() => {
    hideIconField && formik.setValues({ ...formik.values, icon: null });
  }, [hideIconField]);

  return (
    <UploadResource
      hideIconField={hideIconField}
      cancel={done}
      formik={formik}
      acceptedLicenses={accepted_license_types}
    />
  );
};
