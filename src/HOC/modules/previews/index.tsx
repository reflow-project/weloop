import React, { FC } from 'react';
import {
  Activity,
  Collection,
  Comment,
  Community,
  Flag,
  Follow,
  Like,
  Resource,
  Thread,
  User
} from 'graphql/types.generated';
import { ActivityPreviewHOC } from './activity/ActivityPreview';
import { CollectionPreviewHOC } from './collection/CollectionPreview';
import { CommentPreviewHOC } from './comment/CommentPreview';
import { CommunityPreviewHOC } from './community/CommunityPreview';
import { ResourcePreviewHOC } from './resource/ResourcePreview';
import { ThreadPreviewHOC } from './thread/ThreadPreview';
import { UserPreviewHOC } from './user/UserPreview';
import Maybe from 'graphql/tsutils/Maybe';

export type Ctx = Pick<
  Activity | Collection | Comment | Community | Resource | Thread | User | Flag | Follow | Like,
  'id' | '__typename'
>;
interface PreviewIndex {
  ctx: Maybe<Ctx>;
}

export const PreviewIndex: FC<PreviewIndex> = ({ ctx }) => {
  if (!ctx) {
    return null;
  }
  switch (ctx.__typename) {
    case 'Activity':
      return <ActivityPreviewHOC activityId={ctx.id} />;
    case 'Collection':
      return <CollectionPreviewHOC collectionId={ctx.id} />;
    case 'Comment':
      return <CommentPreviewHOC commentId={ctx.id} mainComment={false} />;
    case 'Community':
      return <CommunityPreviewHOC communityId={ctx.id} />;
    case 'Resource':
      return <ResourcePreviewHOC resourceId={ctx.id} />;
    case 'Thread':
      return <ThreadPreviewHOC threadId={ctx.id} />;
    case 'User':
      return <UserPreviewHOC userId={ctx.id} />;
    default:
      return null;
  }
};
