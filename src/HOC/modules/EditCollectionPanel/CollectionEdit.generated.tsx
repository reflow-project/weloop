import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type EditCollectionPanelDataFragment = (
  { __typename: 'Collection' }
  & Pick<Types.Collection, 'id' | 'name' | 'summary'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export const EditCollectionPanelDataFragmentDoc = gql`
    fragment EditCollectionPanelData on Collection {
  id
  name
  summary
  icon {
    id
    url
  }
}
    `;
