import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';
import { getMaybeUploadInput } from 'fe/mutation/upload/getUploadInput';
import Maybe from 'graphql/tsutils/Maybe';
import { CommunityInput } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
import { AllCommunitiesQueryRefetch } from '../all/useAllCommunities.generated';
import { MyCommunityFollowsQueryRefetch } from '../myFollowed/myFollowedCommunities.generated';
import { useCreateCommunityMutation } from './useCreateCommunity.generated';

export interface CreateCommunity {
  community: CommunityInput;
  icon: Maybe<File | string>;
}
export const useCreateCommunity = () => {
  const [createMut, createMutStatus] = useCreateCommunityMutation();

  const create = useCallOrNotifyMustLogin(
    async ({ community, icon }: CreateCommunity) => {
      if (createMutStatus.loading) {
        return;
      }

      return createMut({
        variables: {
          icon: getMaybeUploadInput(icon, null),
          community: {
            name: community.name,
            summary: community.summary,
            preferredUsername: community.preferredUsername
          }
        },
        refetchQueries: [
          MyCommunityFollowsQueryRefetch({}),
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          AllCommunitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE })
        ]
      });
    },
    [createMutStatus, createMut]
  );
  return useMemo(() => {
    return {
      create
    };
  }, [create]);
};
