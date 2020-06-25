import {
  CollectionGqlMin,
  CollectionLMS,
  CommunityGqlMin,
  CommunityLMS,
  ResourceGqlMin,
  ResourceLMS
} from './types';
import Maybe from 'graphql/tsutils/Maybe';

export const resourceGql2lms = (resource: Maybe<ResourceGqlMin>): ResourceLMS | null => {
  const collection = collection2lms(resource?.collection);
  if (!(resource && collection)) {
    return null;
  }
  const { name, canonicalUrl, icon, license, summary, content, payload } = resource;
  return {
    canonicalUrl: canonicalUrl || '',
    collection,
    icon: icon?.url || '',
    name,
    summary: summary || '',
    url: content?.url || payload?.url || '',
    licence: license || '',
    mediaType: content?.mediaType || ''
  };
};

export const collection2lms = (collection: Maybe<CollectionGqlMin>): CollectionLMS | null => {
  const community = community2lms(collection?.community);

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

export const community2lms = (community: Maybe<CommunityGqlMin>): CommunityLMS | null => {
  if (!community) {
    return null;
  }
  const { name, preferredUsername, icon, summary, canonicalUrl } = community;
  return {
    canonicalUrl: canonicalUrl || '',
    icon: icon?.url || '',
    name,
    preferredUsername,
    summary: summary || ''
  };
};
