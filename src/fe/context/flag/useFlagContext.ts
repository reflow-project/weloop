import { AllFlagsQueryRefetch } from 'fe/flags/all/useAllFlags.generated';
import { isOptimisticId, OPTIMISTIC_ID_STRING } from 'fe/lib/helpers/mutations';
import * as GQL from 'fe/mutation/flag/useMutateFlag.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { Collection, Comment, Community, Resource, User, Flag } from 'graphql/types.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { useMemo } from 'react';

type Context = Collection | Comment | Community | User | Resource;

export type FollowContext = Pick<Context, 'id' | '__typename'> & {
  myFlag: Maybe<Pick<Flag, 'id'>>;
};

export type UseFollowContext = Maybe<FollowContext>;

export const useFlagContext = (ctx: Maybe<UseFollowContext>) => {
  const [flagMut, flagMutStatus] = GQL.useFlagMutation();
  const [unflagMut, unflagMutStatus] = GQL.useUnflagMutation();
  const mutating = flagMutStatus.loading || unflagMutStatus.loading;
  const flag = useCallOrNotifyMustLogin(
    async (message: string) => {
      if (!ctx || ctx.myFlag || mutating) {
        return;
      }
      return flagMut({
        variables: {
          contextId: ctx.id,
          message
        },
        optimisticResponse: optimisticFlag(ctx.__typename, ctx.id),
        refetchQueries: [AllFlagsQueryRefetch({})]
      });
    },
    [ctx, mutating]
  );

  const unflag = useCallOrNotifyMustLogin(async () => {
    if (!ctx || !ctx.myFlag || mutating) {
      return;
    }
    return isOptimisticId(ctx.myFlag.id)
      ? undefined
      : unflagMut({
          variables: {
            contextId: ctx.myFlag.id
          },
          optimisticResponse: optimisticUnflag(ctx.__typename, ctx.id)
        });
  }, [ctx, mutating]);

  return useMemo(
    () => ({
      flag,
      unflag
    }),
    [flag, unflag]
  );
};

const optimisticFlag = (__typename: any, id: string): GQL.FlagMutation => ({
  __typename: 'RootMutationType',
  createFlag: {
    __typename: 'Flag',
    context: {
      __typename,
      id,
      myFlag: { __typename: 'Flag', id: OPTIMISTIC_ID_STRING }
    }
  }
});
const optimisticUnflag = (__typename: any, id: string): GQL.UnflagMutation => ({
  __typename: 'RootMutationType',
  delete: {
    __typename: 'Flag',
    context: {
      __typename,
      id,
      myFlag: null
    }
  }
});
