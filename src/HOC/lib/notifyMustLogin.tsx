import React, { useCallback, useMemo } from 'react';
import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { useMe } from 'fe/session/useMe';
import { Link } from 'react-router-dom';

export interface Opts {
  content?: ToastContent | (() => ToastContent);
  opts?: ToastOptions;
}
const defaultOpts: Opts = {
  content: () => (
    <span>
      You need to <Link to="/login">login</Link> for that
    </span>
  ),
  opts: { type: 'warning' }
};
export function useCallOrNotifyMustLogin<T, Args extends any[]>(
  _fn: (...args: Args) => Promise<T>,
  deps: any[],
  opts?: Opts
): (...args: Args) => Promise<T | null> {
  const { me } = useMe();
  const loggedIn = !!me?.user?.id;
  const fn = useCallback(_fn, deps);
  const _opts = useMemo(() => ({ ...defaultOpts, ...opts }), [opts]);

  return useCallback<(...args: Args) => Promise<T | null>>(
    async (...args: Args) => {
      return loggedIn ? fn(...args) : (toast(_opts.content, _opts.opts), null);
    },
    [loggedIn, _opts, fn]
  );
}
