import React, { FC, useMemo } from 'react';
import {
  AllCollections as AllCollectionsUI,
  Props as AllCollectionsUIProps
} from 'ui/pages/allCollections';
import { useAllCollections } from 'fe/collection/all/useAllCollections';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { useFormik } from 'formik';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';

const allCollectionsPageTitle = t`All Collections`;

export interface AllCollectionsPage {}
export const AllCollectionsPage: FC<AllCollectionsPage> = () => {
  usePageTitle(allCollectionsPageTitle);
  const { allCollectionsPage } = useAllCollections();
  const LoadMoreFormik = useFormik({
    initialValues: {},
    onSubmit: () => (allCollectionsPage.ready ? allCollectionsPage.next() : undefined)
  });
  const allCollectionsUIProps = useMemo<AllCollectionsUIProps>(() => {
    const CollectionsBoxes = (
      <>
        {allCollectionsPage.edges.map(collectionPreview => (
          <CollectionPreviewHOC collectionId={collectionPreview.id} />
        ))}
      </>
    );
    const props: AllCollectionsUIProps = {
      CollectionsBoxes,
      LoadMoreFormik
    };

    return props;
  }, [allCollectionsPage, LoadMoreFormik]);

  return <AllCollectionsUI {...allCollectionsUIProps} />;
};
