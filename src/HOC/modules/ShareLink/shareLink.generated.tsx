import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type ShareLinkWebMetaFragment = (
  { __typename: 'WebMetadata' }
  & Pick<Types.WebMetadata, 'image' | 'summary' | 'title' | 'url'>
);

export const ShareLinkWebMetaFragmentDoc = gql`
    fragment ShareLinkWebMeta on WebMetadata {
  image
  summary
  title
  url
}
    `;
