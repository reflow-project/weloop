import { useAddResource } from 'fe/resource/add/useAddResource';
import { useShareLinkFetchWebMetaMutation } from 'fe/resource/shareLink/useShareLink.generated';
import { useFormik } from 'formik';
import { TestUrlOrFile } from 'HOC/lib/formik-validations';
import React, { FC, useRef } from 'react';
import { ShareLink } from 'ui/modules/ShareLink';
import { ShareResource } from 'ui/modules/ShareLink/fetched';
import * as Yup from 'yup';
import { i18n } from 'context/global/localizationCtx';
import { DOMAIN_REGEX } from 'mn-constants';

export const validationSchema = Yup.object<ShareResource>({
  name: Yup.string()
    .max(90)
    .required(),
  summary: Yup.string().max(1000),
  icon: Yup.mixed<File | string>().test(...TestUrlOrFile)
});

export const shareResourceInitialValues: ShareResource = {
  name: '',
  summary: '',
  icon: ''
};
export const fetchLinkInitialValues = {
  fetchUrl: ''
};

export interface ShareLinkHOC {
  collectionId: string;
  done(): any;
}

export const ShareLinkHOC: FC<ShareLinkHOC> = ({
  done,
  collectionId
}: ShareLinkHOC) => {
  const { create: createResource } = useAddResource();
  const [fetchWebMeta, webMetaDataResult] = useShareLinkFetchWebMetaMutation();

  const { current: urlValidationSchema } = useRef(
    Yup.object<{ fetchUrl: string }>({
      fetchUrl: Yup.string()
        .matches(DOMAIN_REGEX)
        .required(i18n._('url is required'))
    })
  );

  const FetchLinkFormik = useFormik<{ fetchUrl: string }>({
    initialValues: fetchLinkInitialValues,
    enableReinitialize: true,
    validationSchema: urlValidationSchema,
    onSubmit: ({ fetchUrl }) => fetchWebMeta({ variables: { url: fetchUrl } })
  });

  const webMetaData = webMetaDataResult.data?.fetchWebMetadata;
  const ShareLinkFormik = useFormik<ShareResource>({
    initialValues: webMetaData
      ? {
          icon: webMetaData.image || '',
          name: webMetaData.title || '',
          summary: webMetaData.summary || ''
        }
      : shareResourceInitialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: ({ icon, name, summary }) => {
      const url = webMetaData?.url || FetchLinkFormik.values.fetchUrl;
      if (!url) {
        return;
      }
      return createResource({
        collectionId: collectionId,
        content: url,
        icon,
        resource: {
          name: name,
          summary: summary
        }
      });
    }
  });

  return (
    <ShareLink
      FetchLinkFormik={FetchLinkFormik}
      cancelFetched={done}
      formik={ShareLinkFormik}
      isFetched={!!webMetaData}
    />
  );
};
