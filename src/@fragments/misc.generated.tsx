import * as Types from '../graphql/types.generated';

import gql from 'graphql-tag';

export type FullPageInfoFragment = (
  { __typename: 'PageInfo' }
  & Pick<Types.PageInfo, 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor'>
);

export const FullPageInfoFragmentDoc = gql`
    fragment FullPageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
