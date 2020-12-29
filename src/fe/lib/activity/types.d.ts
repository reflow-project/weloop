import { CollectionPreviewFragment } from 'HOC/modules/previews/collection/CollectionPreview.generated';
import { CommentPreviewFragment } from 'HOC/modules/previews/comment/CommentPreview.generated';
import { CommunityPreviewFragment } from 'HOC/modules/previews/community/CommunityPreview.generated';
import { FlagPreviewFragment } from 'HOC/modules/previews/flag/FlagPreview.generated';
import { FollowPreviewFragment } from 'HOC/modules/previews/follow/FollowPreview.generated';
import { LikePreviewFragment } from 'HOC/modules/previews/like/LikePreview.generated';
import { ResourcePreviewFragment } from 'HOC/modules/previews/resource/ResourcePreview.generated';
import { UserPreviewFragment } from 'HOC/modules/previews/user/UserPreview.generated';

export type ActorPreviewFragment =
  | CommentPreviewFragment
  | ResourcePreviewFragment
  | CollectionPreviewFragment
  | CommunityPreviewFragment
  | UserPreviewFragment
  | FlagPreviewFragment
  | FollowPreviewFragment
  | LikePreviewFragment;

export type ActivityContextPreviewFragment =
  | ActorPreviewFragment
  | FlagPreviewFragment
  | LikePreviewFragment
  | FollowPreviewFragment;
