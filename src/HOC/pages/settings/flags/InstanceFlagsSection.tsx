import { useAllFlags } from 'fe/flags/all/useAllFlags';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { FlagPreviewHOC } from 'HOC/modules/previews/flag/FlagPreview';
import React, { FC, useMemo } from 'react';
import { ActivityPreview, Status } from 'ui/modules/ActivityPreview';
import Flags, { Props } from 'ui/pages/settings/flags';

export interface InstanceFlagsSection {}

export const InstanceFlagsSection: FC<InstanceFlagsSection> = () => {
  const { flagsPage } = useAllFlags();
  const [loadMoreFlags] = flagsPage.formiks;
  const FlagPreviews = useMemo<Props['FlagPreviews']>(
    () =>
      flagsPage.edges.map(flag => {
        const actor = flag.creator && getActivityActor(flag.creator);

        return (
          <ActivityPreview
            key={flag.id}
            actor={actor}
            communityLink=""
            communityName=""
            createdAt={flag.createdAt}
            event="flagged"
            preview={<FlagPreviewHOC flagId={flag.id} />}
            status={Status.Loaded}
          />
        );
      }),

    [flagsPage.edges]
  );
  const props = useMemo<Props>(() => {
    return {
      FlagPreviews,
      loadMoreFlags
    };
  }, [FlagPreviews, loadMoreFlags]);
  return <Flags {...props} />;
};
