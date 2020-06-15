import { mnCtx } from 'fe/lib/graphql/ctx';
import { Hit, ResourceHit, CommunityHit, CollectionHit } from 'fe/search/Hits';
import {
  useSearchHostIndexAndMyFollowsQuery,
  useSearchFollowMutation,
  useSearchUnfollowMutation
} from 'fe/search/SearchData.generated';
import { useFormik } from 'formik';
import { collectionHit2gql, communityHit2gql, resourceHit2gql } from 'HOC/lib/LMSMappings/hit2GQL';
import { collectionFragment2UIProps } from 'HOC/modules/previews/collection/CollectionPreview';
import { communityFragment2UIProps } from 'HOC/modules/previews/community/CommunityPreview';
import { resourceFragment2UIProps } from 'HOC/modules/previews/resource/ResourcePreview';
import * as React from 'react';
import {
  connectInfiniteHits,
  Pagination,
  Configure,
  RefinementList
} from 'react-instantsearch-dom';
import { Collection } from 'ui/modules/Previews/Collection';
import { Community } from 'ui/modules/Previews/Community';
import { Resource } from 'ui/modules/Previews/Resource';
import { Props, Search } from 'ui/pages/search';
import { useLMSGQL } from 'fe/lib/moodleLMS/useSendToMoodle';
import { useInstanceInfoQuery } from 'fe/instance/info/useInstanceInfo.generated';

const _SearchPageHOC: React.FC<{ hits: Hit[] }> = ({ hits }) => {
  // console.log(hits);
  const previews = React.useMemo(
    () =>
      hits
        .map(hit => {
          if (hit.index_type === 'Collection') {
            return <CollectionPreviewHit hit={hit} key={hit.objectID} />;
          } else if (hit.index_type === 'Resource') {
            return <ResourcePreviewHit hit={hit} key={hit.objectID} />;
          } else if (hit.index_type === 'Community') {
            return <CommunityPreviewHit hit={hit} key={hit.objectID} />;
          } else {
            console.warn(`Could not preview searchHit:`, hit);
            return null;
          }
        })
        .filter((_): _ is JSX.Element => !!_),
    [hits]
  );

  const props: Props = {
    previews,
    Pagination: <Pagination showNext />,
    Filter: <RefinementList attribute="index_type" />
  };

  return (
    <>
      <Configure hitsPerPage={8} />
      <Search {...props} />
    </>
  );
};

export const SearchPageHOC = connectInfiniteHits(_SearchPageHOC);

const CollectionPreviewHit: React.FC<{ hit: CollectionHit }> = ({ hit }) => {
  const isLocal = useIsLocal(hit);
  const previewFragment = collectionHit2gql(hit, isLocal);
  const { toggleFollowFormik } = useFollowHitHelper(hit);
  const props =
    previewFragment &&
    collectionFragment2UIProps({
      collection: previewFragment,
      hideActions: false,
      toggleFollowFormik
    });
  !props && console.warn(`Could not preview searchHit:`, hit);
  // console.log(`Collection:`, props)
  return props && <Collection isSearch {...props} />;
};

const CommunityPreviewHit: React.FC<{ hit: CommunityHit }> = ({ hit }) => {
  const isLocal = useIsLocal(hit);
  const previewFragment = communityHit2gql(hit, isLocal);
  const { toggleFollowFormik: toggleJoinFormik, hitSearchFollow } = useFollowHitHelper(hit);
  const props =
    previewFragment &&
    communityFragment2UIProps({
      community: previewFragment,
      hideActions: false,
      toggleJoinFormik,
      isCreator: !!hitSearchFollow?.isCreator
    });
  !props && console.warn(`Could not preview searchHit:`, hit);
  // console.log(`Community:`, props)
  return props && <Community isSearch {...props} />;
};

const ResourcePreviewHit: React.FC<{ hit: ResourceHit }> = ({ hit }) => {
  const isLocal = useIsLocal(hit);
  const { data } = useInstanceInfoQuery();
  const isFile = !!(data?.instance?.uploadResourceTypes || []).find(
    uploadResType =>
      uploadResType.toLowerCase() !== 'text/html' &&
      uploadResType.toLowerCase() === hit.mediaType?.toLowerCase()
  );
  // console.table({ name:hit.name, isLocal, isFile })
  // console.log(hit, data?.instance?.uploadResourceTypes)
  const previewFragment = resourceHit2gql({ resource: hit, isLocal, isFile });
  const { LMSPrefsPanel } = useLMSGQL(previewFragment);
  const props =
    previewFragment &&
    resourceFragment2UIProps({
      resource: previewFragment,
      FlagModal: null,
      MoodlePanel: LMSPrefsPanel,
      hideActions: false,
      like: null
    });
  !props && console.warn(`Could not preview searchHit:`, hit);
  // console.log(`Resource:`, props)
  return props && <Resource isSearch {...props} />;
};

const useIsLocal = (hit: Hit) => {
  const { data } = useSearchHostIndexAndMyFollowsQuery({
    context: mnCtx({ noShowError: true })
  });
  const localHostName = data?.instance?.hostname;
  const isLocal = hit.index_instance === localHostName;
  // console.log(`hit.index_instance:`, hit.index_instance)
  // console.log(`localHostName:`, localHostName)
  // console.log(`isLocal`,isLocal)
  // console.log(`---`)
  return isLocal;
};
const useFollowHitHelper = (hit: Hit) => {
  const { data } = useSearchHostIndexAndMyFollowsQuery({
    context: mnCtx({ noShowError: true })
  });
  const [follow, followResult] = useSearchFollowMutation();
  const [unfollow, unfollowResult] = useSearchUnfollowMutation();
  const hitSearchFollow = React.useMemo(
    () =>
      (data?.me?.searchFollows || []).find(
        searchFollow => searchFollow.canonicalUrl === hit.canonicalUrl
      ),
    [data, hit]
  );

  const canFollow = !hitSearchFollow?.followId;
  const canUnfollow =
    hitSearchFollow?.followId && !(hitSearchFollow.communityId && hitSearchFollow.isCreator);

  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      if (!hit.canonicalUrl || followResult.loading || unfollowResult.loading) {
        return;
      }
      if (hitSearchFollow && canUnfollow) {
        return unfollow({
          variables: {
            contextId: hitSearchFollow.followId
          }
        });
      } else if (canFollow) {
        return follow({ variables: { url: hit.canonicalUrl } });
      }
      return;
    }
  });
  return React.useMemo(
    () => ({
      toggleFollowFormik,
      hitSearchFollow
    }),
    [toggleFollowFormik, hitSearchFollow]
  );
};
