export interface Followers {
  totalCount: number;
}

export interface CommunityHit {
  canonicalUrl?: string;
  createdAt: Date;
  followers?: Followers;
  icon?: string;
  image?: string;
  index_instance: string;
  index_mothership_object_id: string;
  index_type: 'Community';
  name: string;
  objectID: string;
  preferredUsername: string;
  summary?: string;
}

export interface Followers2 {
  totalCount: number;
}

export interface CollectionHit {
  canonicalUrl?: string;
  community?: CommunityHit;
  createdAt: Date;
  followers?: Followers2;
  icon?: string;
  index_instance: string;
  index_mothership_object_id: string;
  index_type: 'Collection';
  name: string;
  objectID: string;
  preferredUsername: string;
  summary?: string;
}

export interface Likes {
  totalCount?: string;
}

export interface ResourceHit {
  canonicalUrl?: string;
  collection?: CollectionHit;
  createdAt: Date;
  icon?: string;
  index_instance: string;
  index_mothership_object_id: string;
  index_type: 'Resource';
  licence?: string;
  likes?: Likes;
  name: string;
  summary?: string;
  updatedAt: Date;
  url?: string;
  objectID: string;
  mediaType?: string;
}

export type Hit = ResourceHit | CommunityHit | CollectionHit;

/*
{
  "canonicalUrl": "https://team.moodle.net/pub/objects/e7a8770b-b6b2-40fb-a6ae-da9ed6a0203d",
  "collection": {
    "canonicalUrl": "https://team.moodle.net/pub/actors/Teacher_humour",
    "community": {
      "canonicalUrl": "https://team.moodle.net/pub/actors/K12_teachers",
      "createdAt": "2020-03-04T16:00:46.699946Z",
      "followers": {
        "totalCount": 1
      },
      "icon": "https://team.moodle.net/uploads/01E2K4E9HWJK4ZQ5M8J2D6PA1H/school.jpg",
      "image": null,
      "index_instance": "team.moodle.net",
      "index_mothership_object_id": "01E2K4EAKB8MANXBZA92Y96F6B",
      "index_type": "Community",
      "name": "K12 teachers",
      "objectID": "27C496DAEBF69EB7AA8479479454EB4A0E6F5172",
      "preferredUsername": "K12_teachers@team.moodle.net",
      "summary": "Just a general space to hang out and chat if you're a schoolteacher!"
    },
    "createdAt": "2020-03-04T16:02:57.003170Z",
    "followers": {
      "totalCount": 1
    },
    "icon": null,
    "index_instance": "team.moodle.net",
    "index_mothership_object_id": "01E2K4J9VBMTSXBB27V851X8WV",
    "index_type": "Collection",
    "name": "Teacher humour",
    "objectID": "914AC31027B6DD140D8DD20BE4C15061289D2126",
    "preferredUsername": "Teacher_humour@team.moodle.net",
    "summary": "Share memes and other funny things you come across! (keep it clean, people)"
  },
  "createdAt": "2020-03-04T16:03:46.652281Z",
  "icon": "https://s18670.pcdn.co/wp-content/uploads/laughing.jpg",
  "index_instance": "team.moodle.net",
  "index_mothership_object_id": "01E2K4KTAWH0S6Z1QMS9Y7QTJY",
  "index_type": "Resource",
  "licence": null,
  "likes": {
    "totalCount": null
  },
  "name": "30 Cheesy Teacher Jokes That Crack Us Up",
  "summary": "Need a good laugh? We've got you covered.",
  "updatedAt": "2020-03-04T16:03:46.652362Z",
  "url": "https://www.weareteachers.com/cheesy-teacher-jokes/",
  "objectID": "FEBA294330A4C2AD7EB82D4F0058B9C22160C523",
  "mediaType": ""
}
*/
