import { mnCtx } from 'fe/lib/graphql/ctx';
import { Hit, ResourceHit, CommunityHit, CollectionHit } from 'fe/search/Hits';
import {
  useSearchHostIndexAndMyFollowsQuery,
  useSearchFollowMutation,
  useSearchUnfollowMutation
} from 'fe/search/SearchData.generated';
import { useFormik } from 'formik';
import {
  collectionHit2gql,
  communityHit2gql,
  resourceHit2gql
} from 'HOC/lib/LMSMappings/hit2GQL';
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
import { ComponentBag } from 'ui/lib/componentBag';
import { Collection } from 'ui/modules/Previews/Collection';
import { Community } from 'ui/modules/Previews/Community';
import { Resource } from 'ui/modules/Previews/Resource';
import { Props, Search } from 'ui/pages/search';
import { useLMSGQL } from 'fe/lib/moodleLMS/useSendToMoodle';
import { useInstanceInfoQuery } from 'fe/instance/info/useInstanceInfo.generated';

const _SearchPageHOC: React.FC<{ hits: Hit[] }> = ({ hits }) => {
  const previews = React.useMemo(
    () =>
      hits
        .map(hit => {
          if (hit.index_type === 'Collection') {
            return ComponentBag(CollectionPreviewHit, { hit }, hit.objectID);
          } else if (hit.index_type === 'Resource') {
            return ComponentBag(ResourcePreviewHit, { hit }, hit.objectID);
          } else if (hit.index_type === 'Community') {
            return ComponentBag(CommunityPreviewHit, { hit }, hit.objectID);
          } else {
            console.warn(`Could not preview searchHit:`, hit);
            return null;
          }
        })
        .filter((_): _ is ComponentBag => !!_),
    [hits]
  );

  const props: Props = {
    previews,
    pagination: <Pagination showNext />,
    filter: <RefinementList attribute="index_type" />
  };

  return (
    <>
      <Configure hitsPerPage={8} />
      {/* <RefinementList attribute="index_type" /> */}
      <Search {...props} />
      {/* <Pagination showNext /> */}
    </>
  );
};

export const SearchPageHOC = connectInfiniteHits(_SearchPageHOC);

const CollectionPreviewHit: React.FC<{ hit: CollectionHit }> = ({ hit }) => {
  const isLocal = useIsLocal(hit);
  const previewFragment = collectionHit2gql(hit, isLocal);
  const toggleFollowFormik = useToggleFollowHitFormik(hit);
  const props =
    previewFragment &&
    collectionFragment2UIProps({
      collection: previewFragment,
      hideActions: false,
      toggleFollowFormik: toggleFollowFormik
    });
  !props && console.warn(`Could not preview searchHit:`, hit);
  // console.log(`Collection:`, props)
  return props && <Collection isSearch {...props} />;
};

const CommunityPreviewHit: React.FC<{ hit: CommunityHit }> = ({ hit }) => {
  const isLocal = useIsLocal(hit);
  const previewFragment = communityHit2gql(hit, isLocal);
  const toggleFollowFormik = useToggleFollowHitFormik(hit);
  const props =
    previewFragment &&
    communityFragment2UIProps({
      community: previewFragment,
      hideActions: false,
      toggleJoinFormik: toggleFollowFormik,
      isCreator: false //FIXME
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
const useToggleFollowHitFormik = (hit: Hit) => {
  const { data } = useSearchHostIndexAndMyFollowsQuery({
    context: mnCtx({ noShowError: true })
  });
  const [follow, followResult] = useSearchFollowMutation();
  const [unfollow, unfollowResult] = useSearchUnfollowMutation();
  const myFollow = React.useMemo(
    () =>
      (data?.me?.searchFollows || []).find(
        searchFollow => searchFollow.canonicalUrl === hit.canonicalUrl
      ),
    [data, hit]
  );

  const toggleFollowFormik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      if (!hit.canonicalUrl || followResult.loading || unfollowResult.loading) {
        return;
      }
      return myFollow
        ? unfollow({
            variables: {
              contextId: myFollow.canonicalUrl /*FIXME with myFollow.followId */
            }
          })
        : follow({ variables: { url: hit.canonicalUrl } });
    }
  });
  return toggleFollowFormik;
};
