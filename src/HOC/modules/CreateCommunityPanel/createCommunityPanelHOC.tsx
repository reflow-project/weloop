import { useCreateCommunity } from 'fe/community/create/useCreateCommunity';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import {
  CreateCommunityFormValues,
  CreateCommunityPanel
} from 'ui/modules/CreateCommunityPanel';
import * as Yup from 'yup';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';

export const validationSchema: Yup.ObjectSchema<CreateCommunityFormValues> = Yup.object<
  CreateCommunityFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.mixed<File | string>().test(...TestUrlOrFile)
});
export interface Props {
  done(): any;
}
export const CreateCommunityPanelHOC: FC<Props> = ({ done }: Props) => {
  const history = useHistory();
  const { create } = useCreateCommunity();
  const formik = useFormik<CreateCommunityFormValues>({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      name: '',
      summary: '',
      icon: ''
    },
    onSubmit: vals => {
      return create({
        community: {
          preferredUsername: vals.name.split(' ').join('_'),
          name: vals.name,
          summary: vals.summary
        },
        icon: vals.icon
      }).then(res => {
        done();
        res?.data?.createCommunity?.id &&
          history.push(`/communities/${res.data.createCommunity.id}`);
      });
    }
  });
  return <CreateCommunityPanel cancel={done} formik={formik} />;
};
