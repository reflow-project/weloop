import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityOutboxActivities';
import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { useCommunity } from 'fe/community/useCommunity';
import { useCommunityThreads } from 'fe/thread/community/useCommunityThreads';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunity } from 'HOC/modules/HeroCommunity/HeroCommunity';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { ThreadPreviewHOC } from 'HOC/modules/previews/thread/ThreadPreview';
import React, { FC, useMemo } from 'react';
import CommunityPageUI, { Props as CommunityProps } from 'ui/pages/community';
import { Box } from 'rebass/styled-components';
import { useHistory } from 'react-router-dom';
import { useCommunityFollowers } from 'fe/user/followers/community/useCommunityFollowers';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';

export enum CommunityPageTab {
  Activities,
  Collections,
  Discussions,
  Members
}
export interface CommunityPage {
  communityId: Community['id'];
  tab: CommunityPageTab;
  basePath: string;
}

const communityActivitiesPageTitle = t`Community {name} - Activities`;
const communityCollectionsPageTitle = t`Community {name} - Collections`;
const communityDiscussionsPageTitle = t`Community {name} - Discussions`;
const communityMembersPageTitle = t`Community {name} - Members`;

export const CommunityPage: FC<CommunityPage> = ({ communityId, basePath, tab }) => {
  const { community, createThread } = useCommunity(communityId);

  const communityPageTitle =
    tab === CommunityPageTab.Members
      ? communityMembersPageTitle
      : tab === CommunityPageTab.Activities
      ? communityActivitiesPageTitle
      : tab === CommunityPageTab.Discussions
      ? communityDiscussionsPageTitle
      : tab === CommunityPageTab.Collections
      ? communityCollectionsPageTitle
      : communityCollectionsPageTitle; //never
  usePageTitle(!!community?.name && communityPageTitle, community);

  const { communityFollowersPage } = useCommunityFollowers(communityId);
  const { threadsPage } = useCommunityThreads(communityId);
  const [loadMoreThreads] = threadsPage.formiks;
  const { collectionsPage } = useCommunityCollections(communityId);
  const [loadMoreCollections] = collectionsPage.formiks;
  const { activitiesPage } = useCommunityOutboxActivities(communityId);
  const [loadMoreActivities] = activitiesPage.formiks;

  const history = useHistory();
  const newThreadFormik = useFormik<{ text: string }>({
    initialValues: { text: '' },
    // validationSchema,
    onSubmit: ({ text }) =>
      createThread(text).then(newThreadId => {
        history.push(`/thread/${newThreadId}`);
      })
  });

  const communityPageProps = useMemo<CommunityProps | null>(() => {
    if (!community) {
      return null;
    }
    const ActivitiesBox = (
      <>
        {activitiesPage.edges.map(activity => (
          <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
        ))}
      </>
    );

    const CollectionsBox = (
      <>
        {collectionsPage.edges.map(collection => (
          <Box key={collection.id}>
            <CollectionPreviewHOC collectionId={collection.id} key={collection.id} />
          </Box>
        ))}
      </>
    );

    const ThreadsBox = (
      <>
        {threadsPage.edges.map(thread =>
          thread.comments?.edges[0] ? (
            <Box key={thread.id}>
              <ThreadPreviewHOC threadId={thread.id} />
            </Box>
          ) : (
            (console.warn(
              `Found a thread [id:${thread.id}] with an empty comments edges .. skipping`,
              thread
            ),
            null)
          )
        )}
      </>
    );

    const FollowersBoxes: CommunityProps['FollowersBoxes'] = (
      <>
        {communityFollowersPage.edges.map(
          follow =>
            follow.creator && <UserPreviewHOC key={follow.id} userId={follow.creator?.userId} />
        )}
      </>
    );
    const HeroCommunityBox = <HeroCommunity communityId={communityId} basePath={basePath} />;

    const CreateCollectionPanel: CommunityProps['CreateCollectionPanel'] = ({ done }) => (
      <CreateCollectionPanelHOC done={done} communityId={communityId} />
    );

    const myFollow = community.myFollow;

    const props: CommunityProps = {
      FollowersBoxes,
      communityName: community.name,
      CreateCollectionPanel,
      ActivitiesBox,
      CollectionsBox,
      HeroCommunityBox,
      ThreadsBox,
      basePath,
      isJoined: !!myFollow,
      newThreadFormik: myFollow ? newThreadFormik : null,
      loadMoreActivities,
      loadMoreCollections,
      loadMoreThreads
    };
    return props;
  }, [
    community,
    newThreadFormik,
    basePath,
    communityFollowersPage,
    activitiesPage.edges,
    collectionsPage.edges,
    communityId,
    loadMoreActivities,
    loadMoreCollections,
    loadMoreThreads,
    threadsPage.edges
  ]);

  return communityPageProps && <CommunityPageUI {...communityPageProps} />;
};
