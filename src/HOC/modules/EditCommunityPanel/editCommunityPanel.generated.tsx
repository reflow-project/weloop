import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';

export type EditCommunityPanelDataFragment = (
  { __typename: 'Community' }
  & Pick<Types.Community, 'id' | 'name' | 'summary'>
  & { icon: Types.Maybe<(
    { __typename: 'Content' }
    & Pick<Types.Content, 'id' | 'url'>
  )> }
);

export const EditCommunityPanelDataFragmentDoc = gql`
    fragment EditCommunityPanelData on Community {
  id
  name
  summary
  icon {
    id
    url
  }
}
    `;
