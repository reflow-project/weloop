import { useEditCollection } from 'fe/collection/edit/useEditCollection';
import { useFormik } from 'formik';
import { Collection } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  EditCollectionFormValues,
  EditCollectionPanel
} from 'ui/modules/EditCollectionPanel';
import * as Yup from 'yup';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';

export const validationSchema: Yup.ObjectSchema<EditCollectionFormValues> = Yup.object<
  EditCollectionFormValues
>({
  name: Yup.string()
    .min(2)
    .max(60)
    .required(),
  summary: Yup.string().max(500),
  icon: Yup.mixed<File | string>().test(...TestUrlOrFile)
});

export interface Props {
  collectionId: Collection['id'];
  done(): any;
}
export const EditCollectionPanelHOC: FC<Props> = ({
  done,
  collectionId
}: Props) => {
  const { collection, edit } = useEditCollection(collectionId);
  const initialValues = useMemo<EditCollectionFormValues>(
    () => ({
      icon: collection?.icon?.url || '',
      name: collection?.name || '',
      summary: collection?.summary || ''
    }),
    [collection]
  );

  const formik = useFormik<EditCollectionFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      return edit({
        collection: {
          name: vals.name,
          summary: vals.summary || undefined
        },
        icon: vals.icon
      }).then(done);
    },
    validationSchema,
    initialValues
  });
  return <EditCollectionPanel cancel={done} formik={formik} />;
};
