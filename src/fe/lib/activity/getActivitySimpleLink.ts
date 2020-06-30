import { CollectionPreviewFragment } from 'HOC/modules/previews/collection/CollectionPreview.generated';
import { CommentPreviewFragment } from 'HOC/modules/previews/comment/CommentPreview.generated';
import { CommunityPreviewFragment } from 'HOC/modules/previews/community/CommunityPreview.generated';
import { ResourcePreviewFragment } from 'HOC/modules/previews/resource/ResourcePreview.generated';
import { UserPreviewFragment } from 'HOC/modules/previews/user/UserPreview.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { threadLocation } from 'routes/ThreadPageRoute';
import { userLocation } from 'routes/UserPageRoute';
import { collectionLocation } from 'routes/CollectionPageRoute';
import { communityLocation } from 'routes/CommunityPageRoute';

type LinkCtx =
  | Pick<UserPreviewFragment, '__typename' | 'userId'>
  | Pick<CommentPreviewFragment, '__typename' | 'thread'>
  | Pick<ResourcePreviewFragment, '__typename' | 'payload'>
  | Pick<CollectionPreviewFragment | CommunityPreviewFragment, '__typename' | 'id'>;

export const getActivitySimpleLink = (ctx: Maybe<LinkCtx>) => {
  if (!ctx) {
    return '';
  } else if (ctx.__typename === 'Comment') {
    return ctx.thread ? threadLocation.getPath({ threadId: ctx.thread.id }, undefined) : '';
  } else if (ctx.__typename === 'Resource') {
    return ctx.payload ? ctx.payload.url : '';
  } else if (ctx.__typename === 'User') {
    return userLocation.getPath({ userId: ctx.userId, tab: undefined }, undefined);
  } else if (ctx.__typename === 'Collection') {
    return collectionLocation.getPath({ collectionId: ctx.id, tab: undefined }, undefined);
  } else if (ctx.__typename === 'Community') {
    return communityLocation.getPath({ communityId: ctx.id, tab: undefined }, undefined);
  }
  return null;
};
