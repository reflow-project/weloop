import { useCreateCollection } from 'fe/collection/create/useCreateCollection';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import {
  BasicCreateCollectionFormValues,
  CreateCollectionPanel
} from 'ui/modules/CreateCollectionPanel';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';

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
  communityId: string;
  done(): any;
}
export const CreateCollectionPanelHOC: FC<Props> = ({
  communityId,
  done
}: Props) => {
  const history = useHistory();
  const { create } = useCreateCollection(communityId);

  const formik = useFormik<BasicCreateCollectionFormValues>({
    initialValues: {
      name: '',
      summary: '',
      icon: ''
    },
    enableReinitialize: true,
    onSubmit: vals => {
      return create({
        collection: {
          preferredUsername: vals.name.split(' ').join('_'),
          name: vals.name,
          summary: vals.summary
        },
        icon: vals.icon
      })
        .then(
          res =>
            res?.data?.createCollection?.id &&
            history.push(`/collections/${res.data.createCollection.id}`)
        )
        .catch(err => console.log(err));
    },
    validationSchema
  });
  return <CreateCollectionPanel cancel={done} formik={formik} />;
};
