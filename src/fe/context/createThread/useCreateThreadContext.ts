import { CommunityOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/community/useCommunityOutboxActivities.generated';
import { InstanceOutboxActivitiesQueryRefetch } from 'fe/activities/outbox/instance/useInstanceOutboxActivities.generated';
import { useCreateThreadMutation } from 'fe/mutation/createThread/useCreateThread.generated';
import { CommunityThreadsQueryRefetch } from 'fe/thread/community/useCommunityThreads.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Community } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';

export type ContextTypes = Community;
export type Context = Pick<ContextTypes, '__typename' | 'id'>;

export const useCreateThreadContext = (
  contextId: Maybe<Context['id']>,
  __typename: Maybe<Context['__typename']>
) => {
  const [createThreadMut, createThreadMutStatus] = useCreateThreadMutation();
  const mutating = createThreadMutStatus.loading;
  const createThread = useCallOrNotifyMustLogin(
    async (content: string) => {
      if (!contextId || mutating) {
        return;
      }
      return createThreadMut({
        variables: {
          contextId,
          comment: { content }
        },
        refetchQueries: [
          InstanceOutboxActivitiesQueryRefetch({ limit: DEFAULT_PAGE_SIZE }),
          ...(__typename === 'Community'
            ? [
                CommunityThreadsQueryRefetch({
                  communityId: contextId,
                  limit: DEFAULT_PAGE_SIZE
                }),
                CommunityOutboxActivitiesQueryRefetch({
                  communityId: contextId,
                  limit: DEFAULT_PAGE_SIZE
                })
              ]
            : [])
        ]
      }).then(res => res.data?.createThread?.thread?.id);
    },
    [contextId, __typename, mutating]
  );

  return useMemo(
    () => ({
      createThread
    }),
    [createThread]
  );
};
