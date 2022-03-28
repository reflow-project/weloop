import { ActorPreviewFragment } from 'fe/lib/activity/types';
import Maybe from 'graphql/tsutils/Maybe';
import { CommunityInfoFragment } from 'HOC/modules/previews/community/CommunityPreview.generated';
import { UserPreviewFragment } from 'HOC/modules/previews/user/UserPreview.generated';
import { communityLocation } from 'routes/CommunityPageRoute';

export const getContextCommunityInfo = (
  context: Maybe<Exclude<ActorPreviewFragment, UserPreviewFragment>>
): Maybe<CommunityInfoFragment> => {
  if (!context) {
    return null;
  } else if (context.__typename === 'Community') {
    return context;
  } else if (context.__typename === 'Collection') {
    return context.community;
  } else if (context.__typename === 'Resource') {
    return context.collection?.community;
  } else if (context.__typename === 'Comment') {
    return (
      context.thread &&
      context.thread.context &&
      (context.thread.context.__typename === 'Flag'
        ? null
        : context.thread.context.__typename === 'Resource'
        ? context.thread.context.collection?.community
        : context.thread.context.__typename === 'Collection'
        ? context.thread.context.community
        : context.thread.context.__typename === 'Community'
        ? context.thread.context
        : null) // context.thread.context:never
    );
  }
  return null;
};
export const getCommunityInfoStrings = (context: Maybe<ActorPreviewFragment>) => {
  let communityLink = '';
  let communityName = '';
  let communityId = '';
  let communityIcon = '';
  if (context && context.__typename !== 'User') {
    const communityInfo = getContextCommunityInfo(context);
    if (communityInfo) {
      communityLink = communityLocation.getPath(
        { communityId: communityInfo.id, tab: undefined },
        undefined
      );
      communityName = communityInfo.name;
      communityId = communityInfo.id;
      communityIcon = communityInfo.icon?.url || '';
    }
  }
  return {
    communityLink,
    communityName,
    communityId,
    communityIcon
  };
};
