import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import { SearchPageHOC } from 'HOC/pages/search/Search';
import React, { FC } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { searchDisabled } from 'mn-constants';
import { NotFoundHOC } from 'HOC/pages/not-found/NotFound';

interface SearchPageRouter {}
const SearchPageRouter: FC<RouteComponentProps<SearchPageRouter>> = () => {
  return searchDisabled ? (
    <NotFoundHOC />
  ) : (
    <WithSidebarTemplate>
      <SearchPageHOC />
    </WithSidebarTemplate>
  );
};

export const SearchPageRoute: RouteProps = {
  exact: false,
  path: '/search',
  component: SearchPageRouter
};
