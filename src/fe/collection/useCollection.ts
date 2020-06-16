import { useFollowContext } from 'fe/context/follow/useFollowContext';
import { useMe } from 'fe/session/useMe';
import { Collection } from 'graphql/types.generated';
import { useMemo } from 'react';
import { useEditCollection } from '../collection/edit/useEditCollection';
import { useCollectionDataQuery } from '../collection/useCollection.generated';

export const useCollection = (collectionId: Collection['id']) => {
  const { me } = useMe();

  const collectionQ = useCollectionDataQuery({ variables: { collectionId } });
  const collection = collectionQ.data?.collection;
  const { toggleFollow: toggleJoin } = useFollowContext(collection);
  const { edit } = useEditCollection(collectionId);
  const isCommunityMember = !!collection?.community?.myFollow;
  const isCreator = !!me && !!collection?.creator && me.user.id === collection.creator.id;
  const canModify = !!me?.isInstanceAdmin || isCreator;

  return useMemo(() => {
    return {
      isCommunityMember,
      isCreator,
      collection,
      toggleJoin,
      edit,
      canModify
    };
  }, [collection, isCreator, toggleJoin, edit, canModify, isCommunityMember]);
};
