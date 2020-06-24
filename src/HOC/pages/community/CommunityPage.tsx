import { t } from '@lingui/macro';
import { i18n } from 'context/global/localizationCtx';
import { usePageTitle } from 'context/global/pageCtx';
import { useCommunityOutboxActivities } from 'fe/activities/outbox/community/useCommunityOutboxActivities';
import { useCommunityCollections } from 'fe/collection/community/useCommunityCollections';
import { useCommunity } from 'fe/community/useCommunity';
import { useCommunityThreads } from 'fe/thread/community/useCommunityThreads';
import { useCommunityFollowers } from 'fe/user/followers/community/useCommunityFollowers';
import { useFormik } from 'formik';
import { Community } from 'graphql/types.generated';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { CreateCollectionPanelHOC } from 'HOC/modules/CreateCollectionPanel/createCollectionPanelHOC';
import { HeroCommunity } from 'HOC/modules/HeroCommunity/HeroCommunity';
import { ActivityPreviewHOC } from 'HOC/modules/previews/activity/ActivityPreview';
import { CollectionPreviewHOC } from 'HOC/modules/previews/collection/CollectionPreview';
import { ThreadPreviewHOC } from 'HOC/modules/previews/thread/ThreadPreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';
import React, { FC, ReactElement, useMemo, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box } from 'rebass/styled-components';
import Modal from 'ui/modules/Modal';
import CommunityPageUI, { Props as CommunityProps } from 'ui/pages/community';

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

  const isJoined = !!community?.myFollow;
  const notifiedMustJoin = (msg: string) => {
    if (!isJoined) {
      toast(msg, { type: 'warning' });
      return true;
    }
    return false;
  };

  const history = useHistory();
  const newThreadFormik = useFormik<{ text: string }>({
    initialValues: { text: '' },
    // validationSchema,
    onSubmit: ({ text }) =>
      notifiedMustJoin(i18n._(`You should join this community to create a new trhead`))
        ? undefined
        : createThread(text).then(newThreadId => {
            history.push(`/thread/${newThreadId}`);
          })
  });

  const Activities = activitiesPage.edges.map(activity => (
    <ActivityPreviewHOC activityId={activity.id} key={activity.id} />
  ));

  const Collections = collectionsPage.edges.map(collection => (
    <Box key={collection.id}>
      <CollectionPreviewHOC collectionId={collection.id} key={collection.id} />
    </Box>
  ));

  const Threads = threadsPage.edges
    .map(thread =>
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
    )
    .filter((_): _ is ReactElement => !!_);

  const Followers = communityFollowersPage.edges
    .map(
      follow => follow.creator && <UserPreviewHOC key={follow.id} userId={follow.creator?.userId} />
    )
    .filter((_): _ is ReactElement => !!_);

  const HeroCommunityBox = <HeroCommunity communityId={communityId} basePath={basePath} />;

  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateCollectionModal, toggleShowCreateCollectionModal] = useReducer(
    is =>
      !notifiedMustJoin(i18n._(`You should join this community to create new collections`)) &&
      !notifiedMustLogin() &&
      !is,
    false
  );

  const CreateCollectionModal = showCreateCollectionModal ? (
    <Modal closeModal={toggleShowCreateCollectionModal}>
      <CreateCollectionPanelHOC done={toggleShowCreateCollectionModal} communityId={communityId} />
    </Modal>
  ) : null;

  const communityPageProps = useMemo<CommunityProps | null>(() => {
    if (!community) {
      return null;
    }

    const props: CommunityProps = {
      Followers,
      Activities,
      Collections,
      HeroCommunity: HeroCommunityBox,
      Threads,
      basePath,
      isJoined,
      newThreadFormik: isJoined ? newThreadFormik : null,
      loadMoreActivities,
      loadMoreCollections,
      loadMoreThreads,
      createCollection: toggleShowCreateCollectionModal
    };
    return props;
  }, [
    community,
    Followers,
    Activities,
    Collections,
    HeroCommunityBox,
    Threads,
    basePath,
    isJoined,
    newThreadFormik,
    loadMoreActivities,
    loadMoreCollections,
    loadMoreThreads
  ]);

  return (
    communityPageProps && (
      <>
        {CreateCollectionModal}
        <CommunityPageUI {...communityPageProps} />
      </>
    )
  );
};
