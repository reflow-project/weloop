import { mnCtx } from 'fe/lib/graphql/ctx';
import { useMemo } from 'react';
import * as GQL from './me.generated';

export const useMe = () => {
  const meQ = GQL.useMeQuery({ context: mnCtx({ noShowError: true }) });

  return useMemo(() => {
    const me = meQ.data?.me;
    const loading = meQ.loading;
    return {
      me,
      loading
    };
  }, [meQ]);
};
