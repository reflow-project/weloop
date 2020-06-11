import {
  ResourceLMS,
  CollectionLMS,
  CommunityLMS,
  ResourceHitMin,
  CollectionHitMin,
  CommunityHitMin
} from './types';
import Maybe from 'graphql/tsutils/Maybe';

export const resourceHit2lms = (
  resource: Maybe<ResourceHitMin>
): ResourceLMS | null => {
  const collection = collectionHit2lms(resource?.collection);
  if (!(resource && collection)) {
    return null;
  }
  const {
    name,
    canonicalUrl,
    icon,
    licence,
    summary,
    url,
    mediaType
  } = resource;
  return {
    canonicalUrl: canonicalUrl || '',
    collection,
    icon: icon || '',
    name,
    summary: summary || '',
    url: url || '',
    licence: licence || '',
    mediaType: mediaType || ''
  };
};

export const collectionHit2lms = (
  collection: Maybe<CollectionHitMin>
): CollectionLMS | null => {
  const community = communityHit2lms(collection?.community);
  if (!(collection && community)) {
    return null;
  }
  const { preferredUsername, canonicalUrl, icon, summary, name } = collection;
  return {
    canonicalUrl: canonicalUrl || '',
    icon,
    name,
    preferredUsername,
    summary: summary || '',
    community
  };
};

export const communityHit2lms = (
  community: Maybe<CommunityHitMin>
): CommunityLMS | null => {
  if (!community) {
    return null;
  }
  const { name, preferredUsername, icon, summary, canonicalUrl } = community;
  return {
    canonicalUrl: canonicalUrl || '',
    icon: icon || '',
    name,
    preferredUsername,
    summary: summary || ''
  };
};
