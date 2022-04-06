import { useMe } from 'fe/session/useMe';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContent, ToastOptions } from 'react-toastify';
import { Trans } from '@lingui/macro';
import { loginLocation } from 'routes/LoginPageRoute';

export interface Opts {
  content?: ToastContent | (() => ToastContent);
  opts?: ToastOptions;
}
const defaultOpts: Opts = {
  content: () => (
    <Trans>
      You need to <Link to={loginLocation.getPath(undefined, undefined)}>login</Link> for that
    </Trans>
  ),
  opts: { type: 'warning' }
};

export function useCallOrNotifyMustLogin<T, Args extends any[]>(
  _fn: (...args: Args) => Promise<T>,
  deps: any[],
  opts?: Opts
): (...args: Args) => Promise<T | null> {
  const fn = useCallback(_fn, deps);
  const notify = useNotifyMustLogin(opts);
  return useCallback<(...args: Args) => Promise<T | null>>(
    async (...args: Args) => {
      return notify() ? null : fn(...args);
    },
    [fn, notify]
  );
}

export const useNotifyMustLogin = (options?: Opts) => {
  const { me } = useMe();
  const loggedIn = !!me?.user?.id || localStorage.getItem('APOLLO#AUTH_TOKEN');

  return useCallback(() => {
    const { content, opts } = { ...defaultOpts, ...options };
    !loggedIn && toast(content, opts);
    return !loggedIn;
  }, [loggedIn, options]);
};
