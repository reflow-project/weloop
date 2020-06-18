import React, { ComponentType, useCallback } from 'react';
import { matchPath, generatePath, useHistory } from 'react-router';
import {
  RouteProps,
  Link as RRLink,
  NavLink as RRNavLink,
  LinkProps,
  NavLinkProps
} from 'react-router-dom';

type LocationParams = { [paramName: string]: string | number | boolean | undefined } | undefined;
type QueryParams = LocationParams;

interface LocationHelp<Params extends LocationParams, Query extends QueryParams, State = any> {
  getPath(params: Params, query: Query, pathIndex?: number): string;
  getSimpleLinkInfo(
    params: Params,
    query: Query,
    pathIndex?: number
  ): {
    external: boolean;
    url: string;
  };
  is(path: string): boolean;
  Link: ComponentType<{
    params: Params;
    query: Query;
    index?: number;
    props?: Partial<LinkProps<State>>;
  }>;
  NavLink: ComponentType<{
    params: Params;
    query: Query;
    index?: number;
    props?: Partial<NavLinkProps<State>>;
  }>;
}

export const locationHelper = <
  Params extends LocationParams,
  Query extends QueryParams,
  State = any
>(
  routeProps: RouteProps
): LocationHelp<Params, Query, State> => {
  type ThisLocation = LocationHelp<Params, Query, State>;
  const routePaths =
    'string' === typeof routeProps.path
      ? [routeProps.path]
      : !routeProps.path?.length
      ? []
      : routeProps.path;
  const Link: ThisLocation['Link'] = ({ params, query, index = 0, props, children }) => (
    <RRLink {...{ to: getPath(params, query, index), ...props }}>{children}</RRLink>
  );
  const NavLink: ThisLocation['NavLink'] = ({ params, query, index = 0, props, children }) => (
    <RRNavLink {...{ to: getPath(params, query, index), ...props }}>{children}</RRNavLink>
  );
  const is: ThisLocation['is'] = path => !!matchPath(path, routeProps);
  const getPath: ThisLocation['getPath'] = (params, query, index = 0) => {
    const usePath = routePaths[index];
    //@ts-ignore
    const searchParams = new URLSearchParams(query || {}).toString();
    const url = generatePath(usePath, params);
    return searchParams ? `${url}?${searchParams}` : url;
  };
  const getSimpleLinkInfo: ThisLocation['getSimpleLinkInfo'] = (params, query, index = 0) => ({
    external: false,
    url: getPath(params, query, index)
  });
  return {
    is,
    getPath,
    Link,
    NavLink,
    getSimpleLinkInfo
  };
};

export const useLocationHelp = <
  Params extends LocationParams,
  Query extends QueryParams,
  State = any
>(
  helper: LocationHelp<Params, Query, State>
): LocationHelp<Params, Query, State> & { is(): boolean } => {
  const history = useHistory();
  const is = useCallback(() => !!helper.is(history.location.pathname), [
    helper,
    history.location.pathname
  ]);
  return {
    ...helper,
    is
  };
};
