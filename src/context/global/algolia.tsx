import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import React from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { useHistory, useLocation } from 'react-router-dom';
import { LocationDescriptorObject } from 'history';
import { mothershipCreds } from '../../mn-constants';
const createURL = searchState => `?${qs.stringify(searchState)}`;

const searchStateToUrl = searchState => `/search/${createURL(searchState)}`;

const urlToSearchState = (search: string) => qs.parse(search.slice(1));
const DEBOUNCE_TIME = 500;
const searchClient =
  mothershipCreds && algoliasearch(mothershipCreds.appId, mothershipCreds.apiKey);

export const ProvideAlgoliaContext: React.FC = ({ children }) => {
  const { push } = useHistory();
  const location = useLocation();
  const backLoc = React.useRef<LocationDescriptorObject | undefined>();
  const searching = React.useRef(isSearchLocation(location.pathname));
  const [searchState, setSearchState] = React.useState(urlToSearchState(location.search));
  React.useEffect(() => {
    // console.log(
    //   '\nsearchState',
    //   searchState,
    //   '\nlocation:',
    //   location,
    //   '\nbackLoc:',
    //   backLoc.current,
    //   '\nisInSearch:',
    //   searching.current
    // );
    const setUrlTO = setTimeout(() => {
      if (searching.current && !isSearchLocation(location.pathname)) {
        backLoc.current = undefined;
        searching.current = false;
        setSearchState(EMPTY_QUERY);
      } else if (searchState.query) {
        backLoc.current =
          backLoc.current || (isSearchLocation(location.pathname) ? undefined : location);
        searching.current = true;
        push(searchStateToUrl(searchState));
      } else if (isSearchLocation(location.pathname)) {
        if (backLoc.current) {
          push(backLoc.current);
        } else {
          push('/');
        }
        backLoc.current = undefined;
      }
    }, DEBOUNCE_TIME);
    return () => {
      clearTimeout(setUrlTO);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchState, location.pathname, location.hash, location.search, push]);
  const handleSetSearchState = React.useCallback(
    newSearchState => {
      // console.table({ newSearchState, searchState });
      // eslint-disable-next-line eqeqeq
      if ('query' in newSearchState && newSearchState.query != searchState.query) {
        setSearchState(newSearchState);
      }
    },
    [searchState]
  );
  return searchClient && mothershipCreds ? (
    <InstantSearch
      searchState={searchState}
      onSearchStateChange={handleSetSearchState}
      searchClient={searchClient}
      refresh={true}
      indexName={mothershipCreds.indexName || ''}
      createURL={createURL}
    >
      {children}
    </InstantSearch>
  ) : (
    <>{children}</>
  );
};
const isSearchLocation = (locationPathname: string) => locationPathname === '/search/';
const EMPTY_QUERY = { query: '' };
