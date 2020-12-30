import { getMaybeUploadInput, getUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, ResourceInput } from 'graphql/types.generated';
import { useMemo } from 'react';
import { CollectionResourcesQueryRefetch } from '../collection/useCollectionResources.generated';
import * as GQL from './useAddResource.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';

export interface AddResource {
  collectionId: Collection['id'];
  resource: ResourceInput;
  content: File | string;
  icon: Maybe<File | string>;
}
export const useAddResource = () => {
  const [createResource, createResourceStatus] = GQL.useAddResourceCreateResourceMutation();
  const create = useCallOrNotifyMustLogin(
    async ({ collectionId, content, icon, resource }: AddResource) => {
      if (createResourceStatus.loading) {
        return;
      }

      return createResource({
        variables: {
          contextId: collectionId,
          resource,
          content: getUploadInput(content),
          icon: getMaybeUploadInput(icon, null)
        },
        refetchQueries: [
          CollectionResourcesQueryRefetch({
            collectionId,
            limit: DEFAULT_PAGE_SIZE
          })
        ]
      });
    },
    [createResourceStatus, createResource]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
