import Maybe from 'graphql/tsutils/Maybe';
import { ActivityPreviewFragment } from 'HOC/modules/previews/activity/ActivityPreview.generated';
import { ActorPreviewFragment } from 'fe/lib/activity/types';

export const getActivityMainContext = (
  context: Maybe<ActivityPreviewFragment['context']>
): Maybe<ActorPreviewFragment> => {
  if (
    !context ||
    context.__typename === 'Category' ||
    context.__typename === 'Intent' ||
    context.__typename === 'Organisation' ||
    context.__typename === 'SpatialThing' ||
    context.__typename === 'Taggable'
  ) {
    return null;
  }
  if (
    context.__typename === 'Flag' ||
    context.__typename === 'Follow' ||
    context.__typename === 'Like'
  ) {
    if (!context.context) {
      return null;
    }

    if (
      context.context.__typename === 'Flag' ||
      context.context.__typename === 'Comment' ||
      context.context.__typename === 'Follow' ||
      context.context.__typename === 'Like' ||
      context.context.__typename === 'Resource'
    ) {
      return null;
    }
    return getActivityMainContext(context.context);
  }
  // "Collection" | "Comment" | "Community" | "Resource" | "User"
  return context;
};
