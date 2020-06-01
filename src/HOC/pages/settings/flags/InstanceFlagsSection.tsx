import { useAllFlags } from 'fe/flags/all/useAllFlags';
import { getActivityActor } from 'fe/lib/activity/getActivityActor';
import { FlagPreviewHOC } from 'HOC/modules/previews/flag/FlagPreview';
import React, { FC, useMemo } from 'react';
import { ActivityPreview, Status } from 'ui/modules/ActivityPreview';
import Flags, { Props } from 'ui/pages/settings/flags';
import { BottomBordered } from 'ui/elements/Layout';

export interface InstanceFlagsSection {}

export const InstanceFlagsSection: FC<InstanceFlagsSection> = () => {
  const { flagsPage } = useAllFlags();
  const [loadMoreFlags] = flagsPage.formiks;
  const FlagsBox = useMemo<Props['FlagsBox']>(() => {
    return (
      <>
        {flagsPage.edges.map(flag => {
          const context = <FlagPreviewHOC flagId={flag.id} />;
          const actor = flag.creator && getActivityActor(flag.creator);

          return (
            <BottomBordered>
              <ActivityPreview
                actor={actor}
                communityLink=""
                communityName=""
                createdAt={flag.createdAt}
                event="flagged"
                preview={context}
                status={Status.Loaded}
              />
            </BottomBordered>
          );
        })}
      </>
    );
  }, [flagsPage.edges]);
  const props = useMemo<Props>(() => {
    return {
      FlagsBox,
      loadMoreFlags
    };
  }, [FlagsBox, loadMoreFlags]);
  return <Flags {...props} />;
};
