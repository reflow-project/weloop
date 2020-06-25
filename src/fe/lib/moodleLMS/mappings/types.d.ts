import { CollectionHit, CommunityHit, ResourceHit } from 'fe/search/Hits';
import Maybe from 'graphql/tsutils/Maybe';
import { Resource } from 'graphql/types.generated';
import { CollectionPreviewFragment } from 'HOC/modules/previews/collection/CollectionPreview.generated';
import { CommunityPreviewFragment } from 'HOC/modules/previews/community/CommunityPreview.generated';
import { ResourcePreviewFragment } from 'HOC/modules/previews/resource/ResourcePreview.generated';

export interface CommunityLMS {
  canonicalUrl: string;
  icon: string;
  name: string;
  preferredUsername: string;
  summary: string;
}

export interface CollectionLMS {
  community: CommunityLMS;
  canonicalUrl: string;
  icon?: any;
  name: string;
  preferredUsername: string;
  summary: string;
}

export interface ResourceLMS {
  collection: CollectionLMS;
  canonicalUrl: string;
  icon: string;
  licence: string;
  name: string;
  summary: string;
  url: string;
  mediaType: string;
}

export type ResourceGqlMin = Pick<
  ResourcePreviewFragment,
  'name' | 'canonicalUrl' | 'icon' | 'license' | 'summary'
> & {
  content?: Maybe<Pick<Exclude<Resource['content'], null | undefined>, 'url' | 'mediaType'>>;
  payload?: Maybe<Pick<Exclude<Resource['content'], null | undefined>, 'url' | 'mediaType'>>;
  collection?: Maybe<CollectionGqlMin>;
};

export type CollectionGqlMin = Pick<
  CollectionPreviewFragment,
  'preferredUsername' | 'canonicalUrl' | 'icon' | 'summary' | 'name'
> & {
  community?: Maybe<CommunityGqlMin>;
};

export type CommunityGqlMin = Pick<
  CommunityPreviewFragment,
  'name' | 'preferredUsername' | 'icon' | 'summary' | 'canonicalUrl'
>;

export type CommunityHitMin = Pick<
  CommunityHit,
  'name' | 'preferredUsername' | 'icon' | 'summary' | 'canonicalUrl'
>;

export type CollectionHitMin = Pick<
  CollectionHit,
  'preferredUsername' | 'canonicalUrl' | 'icon' | 'summary' | 'name'
> & { community?: CommunityHitMin };

export type ResourceHitMin = Pick<
  ResourceHit,
  'name' | 'canonicalUrl' | 'icon' | 'licence' | 'summary' | 'url' | 'mediaType'
> & { collection?: CollectionHitMin };

/*
  {
  "collection": {
    "community": {
      "canonicalUrl": "https://team.moodle.net/pub/actors/K12_teachers",
      "icon": "https://team.moodle.net/uploads/01E2K4E9HWJK4ZQ5M8J2D6PA1H/school.jpg",
      "name": "K12 teachers",
      "preferredUsername": "K12_teachers@team.moodle.net",
      "summary": "Just a general space to hang out and chat if you're a schoolteacher!"
    },
    "canonicalUrl": "https://team.moodle.net/pub/actors/Teacher_humour",
    "icon": null,
    "name": "Teacher humour",
    "preferredUsername": "Teacher_humour@team.moodle.net",
    "summary": "Share memes and other funny things you come across! (keep it clean, people)"
  },
  "canonicalUrl": "https://team.moodle.net/pub/objects/e7a8770b-b6b2-40fb-a6ae-da9ed6a0203d",
  "icon": "https://s18670.pcdn.co/wp-content/uploads/laughing.jpg",
  "licence": "CC-BY-SA",
  "name": "30 Cheesy Teacher Jokes That Crack Us Up",
  "summary": "Need a good laugh? We've got you covered.",
  "url": "https://www.weareteachers.com/cheesy-teacher-jokes/"
}
   */
