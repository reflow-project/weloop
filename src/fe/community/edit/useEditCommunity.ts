import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { Community, CommunityUpdateInput } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';
import {
  useEditCommunityDataQuery,
  useEditCommunityMutation
} from './useEditCommunity.generated';

export interface UpdateCommunity {
  community: CommunityUpdateInput;
  icon: Maybe<File | string>;
}
export const useEditCommunity = (communityId: Community['id']) => {
  const [editMut, editMutStatus] = useEditCommunityMutation();
  const communityEditQ = useEditCommunityDataQuery({
    variables: { communityId }
  });

  const edit = useCallOrNotifyMustLogin(
    async ({ community, icon }: UpdateCommunity) => {
      if (editMutStatus.loading) {
        return;
      }
      return editMut({
        variables: {
          communityId,
          icon: getMaybeUploadInput(
            icon,
            communityEditQ.data?.community?.icon?.url
          ),
          community: {
            name: community.name,
            summary: community.summary
          }
        }
      });
    },
    [communityId, editMutStatus, editMut, communityEditQ]
  );

  return useMemo(() => {
    const community = communityEditQ.data?.community;
    return {
      edit,
      community
    };
  }, [edit, communityEditQ]);
};
