import React, { createContext, FC, useContext, useMemo, useCallback } from 'react';
import { Action, ActionHelper } from './Action';
export type Dispatch<P = any> = (_: Action<P>) => void;

export interface DispatcherCtx<> {
  dispatch: Dispatch;
}
export type Middleware = (
  action: Action<any>,
  dispatch: Dispatch
) => Action<any> | undefined | null | void;
export interface ProvideMiddleware {
  mw: Middleware;
}

export const DispatcherCtx = createContext<DispatcherCtx>({
  dispatch: (/* action */) => {} //console.log('Root noop dispatcher', action),
});

export const useDispatcher = () => useContext(DispatcherCtx);

export const ProvideMiddleware: FC<ProvideMiddleware> = ({ mw, children }) => {
  const parentDispatcher = useDispatcher();
  const providerDispatch = useMemo<DispatcherCtx>(() => {
    return {
      dispatch: action => {
        const prosecution = mw(action, parentDispatcher.dispatch);
        prosecution && parentDispatcher.dispatch(prosecution);
      }
    };
  }, [mw, parentDispatcher]);
  return <DispatcherCtx.Provider value={providerDispatch}>{children}</DispatcherCtx.Provider>;
};

export function useActionCustDispatch<P>(actionCtx: ActionHelper<P>, dispatch: Dispatch<P>) {
  return useCallback(
    (payload: P) => {
      const action = actionCtx.create(payload);
      dispatch(action);
    },
    [dispatch, actionCtx]
  );
}
export function useActionDispatch<P>(actionCtx: ActionHelper<P>) {
  const { dispatch } = useDispatcher();
  return useActionCustDispatch(actionCtx, dispatch);
}
