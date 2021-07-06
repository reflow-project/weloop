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
import { ThreadPreviewHOC } from 'HOC/modules/previews/thread/ThreadPreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';
import React, { FC, ReactElement, useMemo, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Box } from 'rebass/styled-components';
import Modal from 'ui/modules/Modal';
import CommunityPageUI, { Props as CommunityProps } from 'ui/pages/community';
import { communityLocation } from 'routes/CommunityPageRoute';
import { useCommunityIntents } from 'fe/intent/community/useCommunityIntents';
import { IntentPreviewHOC } from 'HOC/modules/previews/intent/IntentPreview';
import { IntentPanelHOC } from 'HOC/modules/IntentPanel/IntentPanelHOC';
// import { useCommunityInventory } from 'fe/inventory/community/useCommunityInventory';

export enum CommunityPageTab {
  Activities,
  Intents,
  // Inventory,
  // Collections,
  Discussions,
  Members
}

export interface CommunityPage {
  communityId: Community['id'];
  tab: CommunityPageTab;
  basePath: string;
}

const communityIntentsPageTitle = t`Community {name} - Intents`;
const communityActivitiesPageTitle = t`Community {name} - Activities`;
// const communityCollectionsPageTitle = t`Community {name} - Collections`;
const communityDiscussionsPageTitle = t`Community {name} - Discussions`;
const communityMembersPageTitle = t`Community {name} - Members`;
// const communityInventoryPageTitle = t`Community {name} - Inventory`;

export const CommunityPage: FC<CommunityPage> = ({ communityId, basePath, tab }) => {
  const { community, createThread } = useCommunity(communityId);
  const [openIntent, setOpenIntent] = useState<string | null>(null);

  const communityPageTitle =
    tab === CommunityPageTab.Members
      ? communityMembersPageTitle
      : tab === CommunityPageTab.Activities
      ? communityActivitiesPageTitle
      : tab === CommunityPageTab.Discussions
      ? communityDiscussionsPageTitle
      : // : tab === CommunityPageTab.Inventory
      // ? communityInventoryPageTitle
      tab === CommunityPageTab.Intents
      ? communityIntentsPageTitle
      : communityIntentsPageTitle; //never
  usePageTitle(!!community?.name && communityPageTitle, community);
  const { communityFollowersPage } = useCommunityFollowers(communityId);
  const { threadsPage } = useCommunityThreads(communityId);
  const [loadMoreThreads] = threadsPage.formiks;
  const { collectionsPage } = useCommunityCollections(communityId);
  const [loadMoreCollections] = collectionsPage.formiks;
  const { activitiesPage } = useCommunityOutboxActivities(communityId);
  const [loadMoreActivities] = activitiesPage.formiks;
  const { communityIntents } = useCommunityIntents(communityId);
  // const { communityInventory } = useCommunityInventory();

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
  //
  // const Collections = collectionsPage.edges.map(collection => (
  //   <Box key={collection.id}>
  //     <CollectionPreviewHOC collectionId={collection.id} key={collection.id} />
  //   </Box>
  // ));

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

  const Members = communityFollowersPage.edges
    .map(
      follow => follow.creator && <UserPreviewHOC key={follow.id} userId={follow.creator?.userId} />
    )
    .filter((_): _ is ReactElement => !!_);

  const HeroCommunityBox = <HeroCommunity communityId={communityId} basePath={basePath} />;

  const Intents = communityIntents
    .map(
      (intent, i) =>
        intent && (
          <IntentPreviewHOC
            key={i}
            name={intent?.name ?? ''}
            intentId={intent.id}
            note={intent?.note ?? ''}
            communityName={community?.name ?? ''}
            communityLink={`/communities/${communityId}`}
            onOpen={setOpenIntent}
          />
        )
    )
    .filter((_): _ is ReactElement => !!_);

  // const Inventory = communityInventory
  //   .map(
  //     (resource, i) =>
  //       resource && (
  //         <IntentPreviewHOC
  //           key={i}
  //           name={resource?.name ?? ''}
  //           intentId={resource.id}
  //           note={resource?.note ?? ''}
  //           communityName={community?.name ?? ''}
  //           communityLink={`/inventory/${resource.id}`}
  //           onOpen={() => history.push(`/inventory/${resource.id}`)}
  //         />
  //       )
  //   )
  //   .filter((_): _ is ReactElement => !!_);

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

  const OpenIntentModal = openIntent ? (
    <Modal
      closeModal={() => {
        setOpenIntent(null);
      }}
    >
      <IntentPanelHOC communityName={community?.name ?? ''} intentId={openIntent} />
    </Modal>
  ) : null;

  // TODO: add CreateIntentModal here

  const communityPageProps = useMemo<CommunityProps | null>(() => {
    if (!community) {
      return null;
    }

    const tabPaths: CommunityProps['tabPaths'] = {
      // collections: communityLocation.getPath({ communityId, tab: undefined }, undefined),
      discussions: communityLocation.getPath({ communityId, tab: 'discussions' }, undefined),
      members: communityLocation.getPath({ communityId, tab: 'members' }, undefined),
      timeline: communityLocation.getPath({ communityId, tab: 'timeline' }, undefined),
      // inventory: communityLocation.getPath({ communityId, tab: 'inventory' }, undefined),
      intents: communityLocation.getPath({ communityId, tab: undefined }, undefined)
    };
    const props: CommunityProps = {
      Members,
      Intents,
      // Inventory,
      Activities,
      // Collections,
      HeroCommunity: HeroCommunityBox,
      Threads,
      tabPaths,
      isJoined,
      communityId,
      newThreadFormik: isJoined ? newThreadFormik : null,
      loadMoreActivities,
      loadMoreCollections,
      loadMoreThreads,
      createCollection: toggleShowCreateCollectionModal
    };

    return props;
  }, [
    community,
    communityId,
    Members,
    Intents,
    // Inventory,
    Activities,
    // Collections,
    HeroCommunityBox,
    Threads,
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
        {OpenIntentModal}
        <CommunityPageUI {...communityPageProps} />
      </>
    )
  );
};
