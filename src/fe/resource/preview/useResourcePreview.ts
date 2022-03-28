import { Resource } from 'graphql/types.generated';
import { useResourcePreviewQuery } from './useResourcePreview.generated';
import { useMemo } from 'react';
import { useLikeContext } from 'fe/context/like/useLikeContext';

export const useResourcePreview = (resourceId: Resource['id']) => {
  const resourcePreviewQ = useResourcePreviewQuery({
    variables: { resourceId }
  });
  const { toggleLike } = useLikeContext(
    resourcePreviewQ.data?.resource?.id,
    resourcePreviewQ.data?.resource?.myLike,
    resourcePreviewQ.data?.resource?.likers?.totalCount,
    'Resource'
  );
  return useMemo(() => {
    return {
      resource: resourcePreviewQ.data?.resource,
      toggleLike
    };
  }, [resourcePreviewQ, toggleLike]);
};
