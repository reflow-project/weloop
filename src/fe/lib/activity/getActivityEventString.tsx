import { ActivityPreviewFragment } from 'HOC/modules/previews/activity/ActivityPreview.generated';
import { ActivityVerb } from 'graphql/types.generated';
import { getActivityMainContext } from './getActivityMainContext';
import Maybe from 'graphql/tsutils/Maybe';

export const getEventString = (activity: Maybe<ActivityPreviewFragment>) => {
  return activity
    ? getEventStringByContext(activity.context, activity.verb)
    : '';
};
export const getEventStringByContext = (
  context: ActivityPreviewFragment['context'],
  verb: ActivityVerb
) => {
  if (!context) {
    return '';
  }
  const mainContext = getActivityMainContext(context);
  if (!mainContext) {
    return '';
  }
  const { __typename } = mainContext;
  const event =
    context.__typename === 'Flag'
      ? `Flagged a ${__typename}`
      : context.__typename === 'Like'
      ? `Starred a ${__typename}`
      : context.__typename === 'Follow'
      ? `Followed a ${__typename}`
      : context.__typename === 'Resource'
      ? `Added a ${__typename}`
      : context.__typename === 'Comment'
      ? context.inReplyTo
        ? `Replied to a discussion`
        : `Started a discussion`
      : verb === ActivityVerb.Created
      ? `Created a ${__typename}`
      : verb === ActivityVerb.Updated
      ? `Updated a ${__typename}`
      : `Acted on a ${__typename}`;

  return event;
};
