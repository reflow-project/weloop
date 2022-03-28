import { CommentPreviewFragment } from '../comment/CommentPreview.generated';
import gql from 'graphql-tag';
import { CommentPreviewFragmentDoc } from '../comment/CommentPreview.generated';

export type CommentLikedPreviewFragment = (
  { __typename: 'Comment' }
  & CommentPreviewFragment
);

export const CommentLikedPreviewFragmentDoc = gql`
    fragment CommentLikedPreview on Comment {
  ...CommentPreview
}
    ${CommentPreviewFragmentDoc}`;
