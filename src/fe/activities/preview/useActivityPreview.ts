import { Activity } from 'graphql/types.generated';
import { useActivityPreviewQuery } from './useActivityPreview.generated';
import { useMemo } from 'react';
import { getActivityMainContext } from 'fe/lib/activity/getActivityMainContext';
import { getEventString } from 'fe/lib/activity/getActivityEventString';
import { getActivitySimpleLink } from 'fe/lib/activity/getActivitySimpleLink';
import { getCommunityInfoStrings } from 'fe/lib/activity/getContextCommunityInfo';

export const useActivityPreview = (activityId: Activity['id']) => {
  const activityPreviewQ = useActivityPreviewQuery({
    variables: { activityId }
  });
  const activity = activityPreviewQ.data?.activity;
  const mainContext = getActivityMainContext(activity?.context);
  const eventString = getEventString(activity) || '';
  const link = getActivitySimpleLink(mainContext);
  const communityInfoStrings = getCommunityInfoStrings(mainContext);

  return useMemo(() => {
    return {
      activity,
      mainContext,
      eventString,
      link,
      communityInfoStrings
    };
  }, [activity, mainContext, eventString, link, communityInfoStrings]);
};
