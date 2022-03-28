import * as Types from '../../../graphql/types.generated';

import { ResourcePreviewFragment } from '../previews/resource/ResourcePreview.generated';
import gql from 'graphql-tag';
import { ResourcePreviewFragmentDoc } from '../previews/resource/ResourcePreview.generated';


export type AddResourceCreateResourceMutationResultFragment = (
  { __typename: 'Resource' }
  & Pick<Types.Resource, 'id'>
  & ResourcePreviewFragment
);

export const AddResourceCreateResourceMutationResultFragmentDoc = gql`
    fragment AddResourceCreateResourceMutationResult on Resource {
  id
  ...ResourcePreview
}
    ${ResourcePreviewFragmentDoc}`;
