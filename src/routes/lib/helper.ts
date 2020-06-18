import { matchPath, generatePath } from 'react-router';
import { RouteProps } from 'react-router-dom';

// type LocationParams = { [paramName: string]: string | undefined } | undefined;
type LocationParams = { [paramName: string]: string | number | boolean | undefined } | undefined;

interface Location<Params extends LocationParams, Query extends LocationParams> {
  getUrl(params: Params, query: Query, pathIndex?: number): string;
  is(path: string): boolean;
}

export const locationHelp = <Params extends LocationParams, Query extends LocationParams>(
  routeProps: RouteProps
): Location<Params, Query> => {
  type ThisLocation = Location<Params, Query>;
  const routePaths =
    'string' === typeof routeProps.path
      ? [routeProps.path]
      : !routeProps.path?.length
      ? []
      : routeProps.path;
  const is: ThisLocation['is'] = path => !!matchPath(path, routeProps);
  const getUrl: ThisLocation['getUrl'] = (params, query, index = 0) => {
    const usePath = routePaths[index];
    //@ts-ignore
    const searchParams = new URLSearchParams(query || {}).toString();
    const url = generatePath(usePath, params);
    return `${url}?${searchParams}`;
  };
  return {
    is,
    getUrl
  };
};
