import { generatePath, matchPath } from 'react-router';
import { RouteProps } from 'react-router-dom';
import { SimpleLink } from 'ui/helpers/SimpleLink';
interface MinimalActor {
  isLocal: boolean;
  canonicalUrl?: string;
}
type LocationParams = { [paramName: string]: string | number | boolean | undefined } | undefined;
type QueryParams = LocationParams;

interface LocationHelp<Params extends LocationParams, Query extends QueryParams, State = any> {
  getPath(params: Params, query: Query, pathIndex?: number): string;
  is(path: string): boolean;
  getSimpleLink(
    params: Params,
    query: Query,
    actor?: MinimalActor | null,
    pathIndex?: number
  ): SimpleLink;
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

  const is: ThisLocation['is'] = path => !!matchPath(path, routeProps);

  const getPath: ThisLocation['getPath'] = (params, query, index = 0) => {
    const usePath = routePaths[index];
    //@ts-ignore
    const searchParams = new URLSearchParams(query || {}).toString();
    const url = generatePath(usePath, params);
    return searchParams ? `${url}?${searchParams}` : url;
  };

  const getSimpleLink: ThisLocation['getSimpleLink'] = (params, query, actor = null, index = 0) => {
    const internal = actor ? actor.isLocal : true;
    const internalPath = getPath(params, query, index);
    const url = internal ? internalPath : actor?.canonicalUrl || '#?#';
    const simpleLink: SimpleLink = {
      external: !internal,
      url
    };
    return simpleLink;
  };

  return {
    is,
    getSimpleLink,
    getPath
  };
};

// interface LocationHelpHook<Params extends LocationParams, Query extends QueryParams, State = any> {
//   is(): boolean;
//   getSimpleLink(
//     params: Params,
//     query: Query,
//     actor?: MinimalActor | null,
//     pathIndex?: number
//   ): SimpleLink;
// }

// export const useLocationHelp = <
//   Params extends LocationParams,
//   Query extends QueryParams,
//   State = any
// >(
//   helper: LocationHelp<Params, Query, State>
// ): LocationHelpHook<Params, Query, State> => {
//   const history = useHistory();
//   type ThisLocationHook = LocationHelpHook<Params, Query, State>;

//   const is = useCallback(() => !!helper.is(history.location.pathname), [
//     helper,
//     history.location.pathname
//   ]);

//   const getSimpleLink: ThisLocationHook['getSimpleLink'] = useCallback(
//     (params, query, actor = null, index = 0) => {
//       const internal = actor ? actor.isLocal : true;
//       const internalPath = helper.getPath(params, query, index);
//       const url = internal ? internalPath : actor?.canonicalUrl || '#?#';
//       const simpleLink: SimpleLink = {
//         external: !internal,
//         url
//       };
//       return simpleLink;
//     },
//     [helper]
//   );

//   return useMemo(
//     () => ({
//       getSimpleLink,
//       is
//     }),
//     [getSimpleLink, is]
//   );
// };
