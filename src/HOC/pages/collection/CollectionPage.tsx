import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { useCollection } from 'fe/collection/useCollection';
import { useCollectionResources } from 'fe/resource/collection/useCollectionResources';
import { useCollectionFollowers } from 'fe/user/followers/collection/useCollectionFollowers';
import { Collection } from 'graphql/types.generated';
import { useNotifyMustLogin } from 'HOC/lib/notifyMustLogin';
import { AddResourceHOC } from 'HOC/modules/AddResource/addResourceHOC';
import { HeroCollectionHOC } from 'HOC/modules/HeroCollection/HeroCollection';
import { ResourcePreviewHOC } from 'HOC/modules/previews/resource/ResourcePreview';
import { UserPreviewHOC } from 'HOC/modules/previews/user/UserPreview';
import { ShareLinkHOC } from 'HOC/modules/ShareLink/shareLinkHOC';
import React, { FC, ReactElement, useCallback, useMemo, useState } from 'react';
import CollectionPageUI, { Props as CollectionPageProps } from 'ui/pages/collection';
import { collectionLocation } from 'routes/CollectionPageRoute';

export enum CollectionPageTab {
  // Activities,
  Publications,
  Followers
}
export interface CollectionPage {
  collectionId: Collection['id'];
  tab: CollectionPageTab;
  basePath: string;
}
const collectionPageFollowersTitle = t`Collection {name} - Followers`;
const collectionPagePublicationTitle = t`Collection {name} - Publications`;

type OpenPanel = 'share' | 'upload';

export const CollectionPage: FC<CollectionPage> = props => {
  const [openPanel, setOpenPanel] = useState<OpenPanel>();
  const closePanel = useCallback(() => setOpenPanel(undefined), []);
  const { collectionId, basePath, tab } = props;
  const { collection, isCommunityMember } = useCollection(props.collectionId);
  const collectionPageTitle =
    tab === CollectionPageTab.Followers
      ? collectionPageFollowersTitle
      : CollectionPageTab.Publications
      ? collectionPagePublicationTitle
      : collectionPagePublicationTitle; //never;

  usePageTitle(!!collection?.name && collectionPageTitle, collection);

  const { collectionFollowersPage } = useCollectionFollowers(props.collectionId);
  const [loadMoreFollowers] = collectionFollowersPage.formiks;

  const { resourcesPage } = useCollectionResources(props.collectionId);
  const [loadMoreResources] = resourcesPage.formiks;

  const notifyNotLogged = useNotifyMustLogin();

  const HeroCollection = <HeroCollectionHOC basePath={basePath} collectionId={collectionId} />;

  const Resources = resourcesPage.edges
    .map(resource => <ResourcePreviewHOC resourceId={resource.id} key={resource.id} />)
    .filter((_): _ is ReactElement => !!_);

  const Followers: CollectionPageProps['Followers'] = collectionFollowersPage.edges
    .map(
      follow =>
        follow.creator && (
          <UserPreviewHOC userId={follow.creator.userId} key={follow.creator.userId} />
        )
    )
    .filter((_): _ is ReactElement => !!_);

  const UploadResourcePanel =
    openPanel === 'upload' ? (
      <AddResourceHOC done={closePanel} collectionId={collectionId} />
    ) : null;

  const ShareLink =
    openPanel === 'share' ? <ShareLinkHOC collectionId={collectionId} done={closePanel} /> : null;

  const collectionPageProps = useMemo<CollectionPageProps | null>(() => {
    if (!collection) {
      return null;
    }
    const tabPaths: CollectionPageProps['tabPaths'] = {
      followers: collectionLocation.getPath({ collectionId, tab: 'followers' }, undefined),
      resources: collectionLocation.getPath({ collectionId, tab: undefined }, undefined)
    };
    const uiProps: CollectionPageProps = {
      ShareLink,
      HeroCollection,
      Resources,
      UploadResourcePanel,
      tabPaths,
      Followers,
      communityIcon: collection.community?.icon?.url || '',
      communityId: collection.community ? collection.community.id : '',
      communityName: collection.community ? collection.community.name : '',
      loadMoreFollowers,
      loadMoreResources,
      isCommunityMember,
      shareLink: () =>
        setOpenPanel(openPanel === 'share' || notifyNotLogged() ? undefined : 'share'),
      upload: () => setOpenPanel(openPanel === 'upload' || notifyNotLogged() ? undefined : 'upload')
    };
    return uiProps;
  }, [
    collection,
    collectionId,
    ShareLink,
    HeroCollection,
    Resources,
    UploadResourcePanel,
    Followers,
    loadMoreFollowers,
    loadMoreResources,
    isCommunityMember,
    openPanel,
    notifyNotLogged
  ]);
  return collectionPageProps && <CollectionPageUI {...collectionPageProps} />;
};
