import { Collection } from 'graphql/types.generated';
import React, { FC, useMemo } from 'react';
import {
  Collection as CollectionPreviewUI,
  Props as CollectionPreviewProps
} from 'ui/modules/Previews/Collection';
import { useCollectionPreview } from 'fe/collection/preview/useCollectionPreview';
import { useFormik } from 'formik';
import { CollectionPreviewFragment } from './CollectionPreview.generated';
import { FormikHook } from 'ui/@types/types';

export interface Props {
  collectionId: Collection['id'];
  flagged?: boolean;
}

export const CollectionPreviewHOC: FC<Props> = ({ collectionId, flagged }) => {
  const { collection, toggleFollow } = useCollectionPreview(collectionId);
  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: toggleFollow
  });

  const collectionPreviewProps = useMemo<CollectionPreviewProps | null>(() => {
    if (!collection) {
      return null;
    }

    const hideActions = flagged ? true : false;
    return collectionFragment2UIProps({
      collection,
      toggleFollowFormik,
      hideActions
    });
  }, [collection, toggleFollowFormik, flagged]);

  return collectionPreviewProps && <CollectionPreviewUI {...collectionPreviewProps} />;
};

export const collectionFragment2UIProps = (args: {
  collection: CollectionPreviewFragment;
  toggleFollowFormik: FormikHook;
  hideActions: boolean;
}) => {
  const { collection, hideActions, toggleFollowFormik } = args;
  const {
    id,
    icon,
    isLocal,
    canonicalUrl,
    name,
    summary,
    resourceCount,
    displayUsername,
    myFollow
  } = collection;

  const props: CollectionPreviewProps = {
    displayUsername,
    icon: icon?.url || '',
    isFollowing: !!myFollow,
    link: {
      url: isLocal ? `/collections/${id}` : canonicalUrl || '',
      external: !isLocal
    },
    name,
    summary: summary || '',
    totalResources: resourceCount || null,
    toggleFollowFormik,
    hideActions: hideActions
  };
  return props;
};
