import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * An opaque position marker for pagination. Paginated queries return
   * a PageInfo struct with start and end cursors (which are actually
   * lists of Cursor for ...reasons...). You can then issue queries
   * requesting results `before` the `start` or `after` the `end`
   * cursors to request the previous or next page respectively.
   * 
   * Is actually a string or integer. May be extended in future.
 **/
  Cursor: any,
  /** Arbitrary json stored as a string */
  Json: any,
  /** Represents an uploaded file. */
  Upload: any,
};

export type ActivitiesPage = {
   __typename?: 'ActivitiesPage',
  edges: Array<Activity>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** An event that appears in a feed */
export type Activity = {
   __typename?: 'Activity',
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The object of the user's verbing */
  context?: Maybe<ActivityContext>,
  /** When the activity was created */
  createdAt: Scalars['String'],
  /** An instance-local UUID identifying the activity */
  id: Scalars['String'],
  /** Whether the activity is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the activity is public */
  isPublic: Scalars['Boolean'],
  /** The user who performed the activity */
  user?: Maybe<User>,
  /** The verb describing the activity */
  verb: ActivityVerb,
};

/** Activity object */
export type ActivityContext = Collection | Comment | Community | Flag | Follow | Like | Resource | User;

/** Something a user does, in past tense */
export enum ActivityVerb {
  Created = 'CREATED',
  Updated = 'UPDATED'
}

export type AuthPayload = {
   __typename?: 'AuthPayload',
  me: Me,
  token: Scalars['String'],
};

/** A collection is the home of resources and discussion threads within a community */
export type Collection = {
   __typename?: 'Collection',
  /** A url for the collection, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The community the collection belongs to */
  community?: Maybe<Community>,
  /** When the collection was created */
  createdAt: Scalars['String'],
  /** The user who created the collection */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** The total number of times this collection has been featured */
  featureCount?: Maybe<Scalars['Int']>,
  /** Flags users have made about the collection, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Subscriptions users have to the collection */
  followers?: Maybe<FollowsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether an instance admin has hidden the collection */
  isDisabled: Scalars['Boolean'],
  /** Whether the collection is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the collection is public */
  isPublic: Scalars['Boolean'],
  /** 
 * When the collection or a resource in it was last updated or a
   * thread or a comment was created or updated
 **/
  lastActivity: Scalars['String'],
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Likes users have made of the collection */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the collection, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of this collection, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this collection, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities on the collection, most recent first */
  outbox?: Maybe<ActivitiesPage>,
  /** An instance-unique identifier shared with users and communities */
  preferredUsername: Scalars['String'],
  /** The total number of resources in the collection, including private ones */
  resourceCount?: Maybe<Scalars['Int']>,
  /** The resources in the collection, most recently created last */
  resources?: Maybe<ResourcesPage>,
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * The threads created on the collection, most recently created
   * first. Does not include threads created on resources.
 **/
  threads?: Maybe<ThreadsPage>,
  /** When the collection was last updated */
  updatedAt: Scalars['String'],
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionResourcesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is the home of resources and discussion threads within a community */
export type CollectionThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CollectionInput = {
  extraInfo?: Maybe<Scalars['Json']>,
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type CollectionsPage = {
   __typename?: 'CollectionsPage',
  edges: Array<Collection>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CollectionUpdateInput = {
  extraInfo?: Maybe<Scalars['Json']>,
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type Comment = {
   __typename?: 'Comment',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The comment text */
  content: Scalars['String'],
  /** When the comment was created */
  createdAt: Scalars['String'],
  /** The user who created this comment */
  creator?: Maybe<User>,
  /** Flags users have made about the comment, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** An instance-local UUID identifying the thread */
  id: Scalars['String'],
  /** The id of the comment this one was a reply to */
  inReplyTo?: Maybe<Comment>,
  /** Whether an comment admin has hidden the thread */
  isHidden: Scalars['Boolean'],
  /** Whether the comment is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the comment is publically visible */
  isPublic: Scalars['Boolean'],
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Users who like the comment, most recently liked first */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of this comment, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's like of this comment, if any */
  myLike?: Maybe<Like>,
  /** The thread this comment is part of */
  thread?: Maybe<Thread>,
  /** When the comment was last updated */
  updatedAt: Scalars['String'],
};


export type CommentFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommentLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CommentInput = {
  content: Scalars['String'],
};

export type CommentsPage = {
   __typename?: 'CommentsPage',
  edges: Array<Comment>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CommunitiesPage = {
   __typename?: 'CommunitiesPage',
  edges: Array<Community>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type Community = {
   __typename?: 'Community',
  /** A url for the community, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The total number of collections in the community, including private ones */
  collectionCount?: Maybe<Scalars['Int']>,
  /** The communities a user has joined, most recently joined first */
  collections?: Maybe<CollectionsPage>,
  /** When the community was created */
  createdAt: Scalars['String'],
  /** The user who created the community */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** The total number of times this community has been featured */
  featureCount?: Maybe<Scalars['Int']>,
  /** Flags users have made about the community, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Users following the community, most recently followed first */
  followers?: Maybe<FollowsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** A header background image url */
  image?: Maybe<Content>,
  /** Whether an instance admin has disabled the community */
  isDisabled: Scalars['Boolean'],
  /** Whether the community is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the community has a public profile */
  isPublic: Scalars['Boolean'],
  /** 
 * When the community or a resource or collection in it was last
   * updated or a thread or a comment was created or updated
 **/
  lastActivity: Scalars['String'],
  /** Total number of likes, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Likes users have given the community */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the community, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this community, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities in the community, most recently created first */
  outbox?: Maybe<ActivitiesPage>,
  /** An instance-unique identifier shared with users and collections */
  preferredUsername: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * Threads started on the community, in most recently updated
   * order. Does not include threads started on collections or
   * resources
 **/
  threads?: Maybe<ThreadsPage>,
  /** When the community was last updated */
  updatedAt: Scalars['String'],
};


export type CommunityCollectionsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type CommunityThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CommunityInput = {
  extraInfo?: Maybe<Scalars['Json']>,
  name: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type CommunityUpdateInput = {
  extraInfo?: Maybe<Scalars['Json']>,
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

/** An uploaded file, may contain metadata. */
export type Content = {
   __typename?: 'Content',
  id: Scalars['ID'],
  isPublic: Scalars['Boolean'],
  mediaType: Scalars['String'],
  metadata?: Maybe<FileMetadata>,
  mirror?: Maybe<ContentMirror>,
  upload?: Maybe<ContentUpload>,
  uploader?: Maybe<User>,
  url: Scalars['String'],
};

export type ContentMirror = {
   __typename?: 'ContentMirror',
  url?: Maybe<Scalars['String']>,
};

export type ContentUpload = {
   __typename?: 'ContentUpload',
  path?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
};


/** A thing that can be deleted */
export type DeleteContext = Collection | Comment | Community | Feature | Flag | Follow | Like | Resource | Thread | User;

/** A featured piece of content */
export type Feature = {
   __typename?: 'Feature',
  /** A url for the feature, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being featured */
  context?: Maybe<FeatureContext>,
  /** When the feature was created */
  createdAt: Scalars['String'],
  /** The user who featured */
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the feature */
  id: Scalars['String'],
  /** Whether the feature is local to the instance */
  isLocal: Scalars['Boolean'],
};

/** A thing that can be featured */
export type FeatureContext = Collection | Community;

export type FeaturesPage = {
   __typename?: 'FeaturesPage',
  edges: Array<Feature>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** More detailed metadata parsed from a file. */
export type FileIntrinsics = {
   __typename?: 'FileIntrinsics',
  bitsPerPixel?: Maybe<Scalars['Int']>,
  bitsPerSample?: Maybe<Scalars['Int']>,
  blockAlign?: Maybe<Scalars['Int']>,
  byteRate?: Maybe<Scalars['Int']>,
  colorPlanes?: Maybe<Scalars['Int']>,
  numColorPalette?: Maybe<Scalars['Int']>,
  numFrames?: Maybe<Scalars['Int']>,
  pageCount?: Maybe<Scalars['Int']>,
};

/** 
 * Metadata associated with a file.
 * 
 * None of the parameters are required and are filled depending on the
 * file type.
 **/
export type FileMetadata = {
   __typename?: 'FileMetadata',
  heightPx?: Maybe<Scalars['Int']>,
  intrinsics?: Maybe<FileIntrinsics>,
  numAudioChannels?: Maybe<Scalars['Int']>,
  sampleRateHz?: Maybe<Scalars['Int']>,
  widthPx?: Maybe<Scalars['Int']>,
};

/** A report about objectionable content */
export type Flag = {
   __typename?: 'Flag',
  /** A url for the flag, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being flagged */
  context: FlagContext,
  /** When the flag was created */
  createdAt: Scalars['String'],
  /** The user who flagged */
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the flag */
  id: Scalars['String'],
  /** Whether the flag is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Is the flag considered dealt with by the instance moderator? */
  isResolved: Scalars['Boolean'],
  /** The reason for flagging */
  message: Scalars['String'],
  /** When the flag was updated */
  updatedAt: Scalars['String'],
};

/** A thing that can be flagged */
export type FlagContext = Collection | Comment | Community | Resource | User;

export type FlagsPage = {
   __typename?: 'FlagsPage',
  edges: Array<Flag>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A record that a user follows something */
export type Follow = {
   __typename?: 'Follow',
  /** A url for the flag, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being followed */
  context: FollowContext,
  /** When the follow was created */
  createdAt: Scalars['String'],
  /** The user who followed */
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether the follow is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the follow is public */
  isPublic: Scalars['Boolean'],
  /** When the follow was last updated */
  updatedAt: Scalars['String'],
};

/** A thing that can be followed */
export type FollowContext = Collection | Community | Thread | User;

export type FollowsPage = {
   __typename?: 'FollowsPage',
  edges: Array<Follow>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type Instance = {
   __typename?: 'Instance',
  description?: Maybe<Scalars['String']>,
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  featuredCollections?: Maybe<FeaturesPage>,
  featuredCommunities?: Maybe<FeaturesPage>,
  hostname: Scalars['String'],
  /** A list of public activity on the local instance, most recent first */
  outbox?: Maybe<ActivitiesPage>,
  uploadIconTypes: Array<Scalars['String']>,
  uploadImageTypes: Array<Scalars['String']>,
  uploadMaxBytes: Scalars['Int'],
  uploadResourceTypes: Array<Scalars['String']>,
};


export type InstanceOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A record that a user likes a thing */
export type Like = {
   __typename?: 'Like',
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is liked */
  context: LikeContext,
  /** When the like was created */
  createdAt: Scalars['String'],
  /** The user who liked */
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the like */
  id: Scalars['String'],
  /** Whether the like is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the like is public */
  isPublic: Scalars['Boolean'],
  /** When the like was last updated */
  updatedAt: Scalars['String'],
};

/** A thing which can be liked */
export type LikeContext = Collection | Comment | Community | Resource | User;

export type LikesPage = {
   __typename?: 'LikesPage',
  edges: Array<Like>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** The current user. Contains more information than just the `user` type */
export type Me = {
   __typename?: 'Me',
  /** The user's email */
  email: Scalars['String'],
  /** Has the user confirmed their account? */
  isConfirmed: Scalars['Boolean'],
  /** Is the user a witch or wizard? */
  isInstanceAdmin: Scalars['Boolean'],
  /** 
 * I hope to go away soon, but in the interim I return just enough
   * information about the collections and communities a user follows
   * to match them up to the search results in the frontend
 **/
  searchFollows: Array<SearchFollow>,
  /** The public info */
  user: User,
  /** Would the user like to receive digest emails of updates? */
  wantsEmailDigest: Scalars['Boolean'],
  /** Does the user want notifications? Which don't work yet. */
  wantsNotifications: Scalars['Boolean'],
};

/** Cursors for pagination */
export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Array<Scalars['Cursor']>>,
  hasNextPage?: Maybe<Scalars['Boolean']>,
  hasPreviousPage?: Maybe<Scalars['Boolean']>,
  startCursor?: Maybe<Array<Scalars['Cursor']>>,
};

export type RegisterEmailAccess = {
   __typename?: 'RegisterEmailAccess',
  createdAt: Scalars['String'],
  email: Scalars['String'],
  id: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type RegisterEmailAccessesPage = {
   __typename?: 'RegisterEmailAccessesPage',
  edges: Array<RegisterEmailAccess>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type RegisterEmailDomainAccess = {
   __typename?: 'RegisterEmailDomainAccess',
  createdAt: Scalars['String'],
  domain: Scalars['String'],
  id: Scalars['String'],
  updatedAt: Scalars['String'],
};

export type RegisterEmailDomainAccessesPage = {
   __typename?: 'RegisterEmailDomainAccessesPage',
  edges: Array<RegisterEmailDomainAccess>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type RegistrationInput = {
  email: Scalars['String'],
  extraInfo?: Maybe<Scalars['Json']>,
  location?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  password: Scalars['String'],
  preferredUsername: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
  wantsEmailDigest: Scalars['Boolean'],
  wantsNotifications: Scalars['Boolean'],
  website?: Maybe<Scalars['String']>,
};

export type Resource = {
   __typename?: 'Resource',
  /** The original author */
  author?: Maybe<Scalars['String']>,
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The collection this resource is a part of */
  collection?: Maybe<Collection>,
  /** A link to an external resource */
  content?: Maybe<Content>,
  /** When the resource was created */
  createdAt: Scalars['String'],
  /** The user who created the resource */
  creator?: Maybe<User>,
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** Flags users have made about the resource, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Whether an instance admin has hidden the resource */
  isDisabled: Scalars['Boolean'],
  /** Whether the resource is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the resource is public */
  isPublic: Scalars['Boolean'],
  /** What license is it available under? */
  license?: Maybe<Scalars['String']>,
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Users who like the resource, most recently liked first */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the resource, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's like of the resource, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** When the resource was last updated */
  updatedAt: Scalars['String'],
};


export type ResourceFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type ResourceLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type ResourceInput = {
  author?: Maybe<Scalars['String']>,
  extraInfo?: Maybe<Scalars['Json']>,
  license?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type ResourcesPage = {
   __typename?: 'ResourcesPage',
  edges: Array<Resource>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type RootMutationType = {
   __typename?: 'RootMutationType',
  /** Modify a comment */
  updateComment?: Maybe<Comment>,
  /** Create a collection */
  createCollection?: Maybe<Collection>,
  createRegisterEmailAccess: RegisterEmailAccess,
  /** Close a flag */
  resolveFlag?: Maybe<Flag>,
  /** Update a community */
  updateCommunity?: Maybe<Community>,
  /** Reply to an existing comment in a thread */
  createReply?: Maybe<Comment>,
  /** Update a profile */
  updateProfile?: Maybe<Me>,
  /** Log out */
  deleteSession?: Maybe<Scalars['Boolean']>,
  /** Fetch metadata from webpage */
  fetchWebMetadata?: Maybe<WebMetadata>,
  /** Create a new thread */
  createThread?: Maybe<Comment>,
  deleteRegisterEmailDomainAccess?: Maybe<RegisterEmailDomainAccess>,
  /** Follow a community, collection or thread returning the follow */
  createFollow?: Maybe<Follow>,
  /** Update a collection */
  updateCollection?: Maybe<Collection>,
  /** Log in */
  createSession?: Maybe<AuthPayload>,
  /** Create a resource */
  createResource?: Maybe<Resource>,
  /** Update a resource */
  updateResource?: Maybe<Resource>,
  /** Deletes my account! */
  deleteSelf?: Maybe<Scalars['Boolean']>,
  createRegisterEmailDomainAccess: RegisterEmailDomainAccess,
  /** Follow a community, collection or a user by their canonical url returning the follow */
  createFollowByUrl?: Maybe<Follow>,
  /** Reset password */
  resetPassword?: Maybe<AuthPayload>,
  /** Deactivate a remote user, blocking further activities from it */
  deactivateUser?: Maybe<User>,
  /** Create a user */
  createUser?: Maybe<Me>,
  /** Like a comment, collection, or resource returning the like */
  createLike?: Maybe<Like>,
  /** Flag a user, community, collection, resource or comment, returning the flag */
  createFlag?: Maybe<Flag>,
  deleteRegisterEmailAccess?: Maybe<RegisterEmailAccess>,
  /** Sends an email invite */
  sendInvite?: Maybe<Scalars['Boolean']>,
  /** Reset password request */
  resetPasswordRequest?: Maybe<Scalars['Boolean']>,
  /** Create a community */
  createCommunity?: Maybe<Community>,
  /** Delete more or less anything */
  delete?: Maybe<DeleteContext>,
  /** Feature a community, or collection, returning the feature */
  createFeature?: Maybe<Feature>,
  /** Confirm email. Returns a login token. */
  confirmEmail?: Maybe<AuthPayload>,
  /** Copy a resource */
  copyResource?: Maybe<Resource>,
};


export type RootMutationTypeUpdateCommentArgs = {
  comment: CommentInput,
  commentId: Scalars['String']
};


export type RootMutationTypeCreateCollectionArgs = {
  collection: CollectionInput,
  communityId: Scalars['String'],
  icon?: Maybe<UploadInput>
};


export type RootMutationTypeCreateRegisterEmailAccessArgs = {
  email: Scalars['String']
};


export type RootMutationTypeResolveFlagArgs = {
  flagId: Scalars['String']
};


export type RootMutationTypeUpdateCommunityArgs = {
  community: CommunityUpdateInput,
  communityId: Scalars['String'],
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>
};


export type RootMutationTypeCreateReplyArgs = {
  comment: CommentInput,
  inReplyToId: Scalars['String'],
  threadId: Scalars['String']
};


export type RootMutationTypeUpdateProfileArgs = {
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>,
  profile: UpdateProfileInput
};


export type RootMutationTypeFetchWebMetadataArgs = {
  url: Scalars['String']
};


export type RootMutationTypeCreateThreadArgs = {
  comment: CommentInput,
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteRegisterEmailDomainAccessArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateFollowArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeUpdateCollectionArgs = {
  collection: CollectionUpdateInput,
  collectionId: Scalars['String'],
  icon?: Maybe<UploadInput>
};


export type RootMutationTypeCreateSessionArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type RootMutationTypeCreateResourceArgs = {
  collectionId: Scalars['String'],
  content: UploadInput,
  icon?: Maybe<UploadInput>,
  resource: ResourceInput
};


export type RootMutationTypeUpdateResourceArgs = {
  content?: Maybe<UploadInput>,
  icon?: Maybe<UploadInput>,
  resource: ResourceInput,
  resourceId: Scalars['String']
};


export type RootMutationTypeDeleteSelfArgs = {
  iAmSure: Scalars['Boolean']
};


export type RootMutationTypeCreateRegisterEmailDomainAccessArgs = {
  domain: Scalars['String']
};


export type RootMutationTypeCreateFollowByUrlArgs = {
  url: Scalars['String']
};


export type RootMutationTypeResetPasswordArgs = {
  password: Scalars['String'],
  token: Scalars['String']
};


export type RootMutationTypeDeactivateUserArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateUserArgs = {
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>,
  user: RegistrationInput
};


export type RootMutationTypeCreateLikeArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateFlagArgs = {
  contextId: Scalars['String'],
  message: Scalars['String']
};


export type RootMutationTypeDeleteRegisterEmailAccessArgs = {
  id: Scalars['String']
};


export type RootMutationTypeSendInviteArgs = {
  email: Scalars['String']
};


export type RootMutationTypeResetPasswordRequestArgs = {
  email: Scalars['String']
};


export type RootMutationTypeCreateCommunityArgs = {
  community: CommunityInput,
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>
};


export type RootMutationTypeDeleteArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateFeatureArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String']
};


export type RootMutationTypeCopyResourceArgs = {
  collectionId: Scalars['String'],
  resourceId: Scalars['String']
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  activity?: Maybe<Activity>,
  /** Get a collection by id */
  collection?: Maybe<Collection>,
  /** Get list of collections, most recent activity first */
  collections: CollectionsPage,
  /** Get a comment by its id */
  comment?: Maybe<Comment>,
  /** Get list of communities, most followed first */
  communities: CommunitiesPage,
  /** Get a community */
  community?: Maybe<Community>,
  feature?: Maybe<Feature>,
  features?: Maybe<FeaturesPage>,
  flag?: Maybe<Flag>,
  flags?: Maybe<FlagsPage>,
  /** Retrieves a follow by id */
  follow?: Maybe<Follow>,
  /** A logical object for the local instance */
  instance?: Maybe<Instance>,
  /** Fetch a like by ID */
  like?: Maybe<Like>,
  /** Get my user */
  me?: Maybe<Me>,
  registerEmailAccesses: RegisterEmailAccessesPage,
  registerEmailDomainAccesses: RegisterEmailDomainAccessesPage,
  /** Get a resource */
  resource?: Maybe<Resource>,
  /** Get a thread */
  thread?: Maybe<Thread>,
  /** Get a user */
  user?: Maybe<User>,
  /** Check if a user exists with a username */
  usernameAvailable: Scalars['Boolean'],
};


export type RootQueryTypeActivityArgs = {
  activityId: Scalars['String']
};


export type RootQueryTypeCollectionArgs = {
  collectionId: Scalars['String']
};


export type RootQueryTypeCollectionsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCommentArgs = {
  commentId: Scalars['String']
};


export type RootQueryTypeCommunitiesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCommunityArgs = {
  communityId: Scalars['String']
};


export type RootQueryTypeFeatureArgs = {
  featureId: Scalars['String']
};


export type RootQueryTypeFeaturesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeFlagArgs = {
  flagId: Scalars['String']
};


export type RootQueryTypeFlagsArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeFollowArgs = {
  followId: Scalars['String']
};


export type RootQueryTypeLikeArgs = {
  likeId: Scalars['String']
};


export type RootQueryTypeRegisterEmailAccessesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeRegisterEmailDomainAccessesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeResourceArgs = {
  resourceId: Scalars['String']
};


export type RootQueryTypeThreadArgs = {
  threadId: Scalars['String']
};


export type RootQueryTypeUserArgs = {
  userId: Scalars['String']
};


export type RootQueryTypeUsernameAvailableArgs = {
  username: Scalars['String']
};

/** 
 * I hope to go away soon, but in the interim I am a subset of a
 * collection or community the user follows.
 **/
export type SearchFollow = {
   __typename?: 'SearchFollow',
  canonicalUrl: Scalars['String'],
  collectionId?: Maybe<Scalars['String']>,
  communityId?: Maybe<Scalars['String']>,
  followId: Scalars['String'],
  isCreator: Scalars['Boolean'],
};

/** A thread is essentially a list of comments */
export type Thread = {
   __typename?: 'Thread',
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Comments in the thread, most recently created first */
  comments?: Maybe<CommentsPage>,
  /** The object the thread is attached to */
  context?: Maybe<ThreadContext>,
  /** When the thread was created */
  createdAt: Scalars['String'],
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Users following the collection, most recently followed first */
  followers?: Maybe<FollowsPage>,
  /** An instance-local UUID identifying the thread */
  id: Scalars['String'],
  /** Whether an instance admin has hidden the thread */
  isHidden: Scalars['Boolean'],
  /** Whether the thread is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the thread is publically visible */
  isPublic: Scalars['Boolean'],
  /** The last time the thread or a comment on it was created or updated */
  lastActivity: Scalars['String'],
  /** The current user's follow of the community, if any */
  myFollow?: Maybe<Follow>,
  /** When the thread was last updated */
  updatedAt: Scalars['String'],
};


/** A thread is essentially a list of comments */
export type ThreadCommentsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A thread is essentially a list of comments */
export type ThreadFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

/** The thing the comment is about */
export type ThreadContext = Collection | Community | Flag | Resource;

export type ThreadsPage = {
   __typename?: 'ThreadsPage',
  edges: Array<Thread>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type UpdateProfileInput = {
  extraInfo?: Maybe<Scalars['Json']>,
  location?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  wantsEmailDigest?: Maybe<Scalars['Boolean']>,
  wantsNotifications?: Maybe<Scalars['Boolean']>,
  website?: Maybe<Scalars['String']>,
};


export type UploadInput = {
  upload?: Maybe<Scalars['Upload']>,
  url?: Maybe<Scalars['String']>,
};

/** User profile information */
export type User = {
   __typename?: 'User',
  /** The likes a user has from other people */
  likers?: Maybe<LikesPage>,
  /** Whether an instance admin has disabled the user's account */
  isDisabled: Scalars['Boolean'],
  /** The last time the user did anything */
  lastActivity?: Maybe<Scalars['String']>,
  /** A header background image url */
  image?: Maybe<Content>,
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** A valid URL */
  website?: Maybe<Scalars['String']>,
  /** The users a user is following, most recently followed first */
  userFollows?: Maybe<FollowsPage>,
  /** Total number of likes, including those we can't see */
  likeCount?: Maybe<Scalars['Int']>,
  /** The likes a user has created */
  likes?: Maybe<LikesPage>,
  /** Subscriptions users have to the collection */
  follows?: Maybe<FollowsPage>,
  /** The communities a user is following, most recently followed first */
  communityFollows?: Maybe<FollowsPage>,
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Total number of followers, including private follows */
  followerCount?: Maybe<Scalars['Int']>,
  /** When the user signed up */
  createdAt: Scalars['String'],
  /** The current user's follow of this user, if any */
  myFollow?: Maybe<Follow>,
  /** When the user last updated their profile */
  updatedAt: Scalars['String'],
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** An instance-unique identifier shared with communities and collections */
  preferredUsername: Scalars['String'],
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** Total number of things the user follows, including privately */
  followCount?: Maybe<Scalars['Int']>,
  /** An instance-local ULID identifying the user */
  id: Scalars['ID'],
  /** 
 * Activities of others the user is following, most recently created
   * first. Only available to the current user under `me`
 **/
  inbox?: Maybe<ActivitiesPage>,
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** The current user's flag of this user, if any */
  myFlag?: Maybe<Flag>,
  /** A name field */
  name?: Maybe<Scalars['String']>,
  /** Comments the user has made, most recently created first */
  comments?: Maybe<CommentsPage>,
  /** Activities of the user, most recently created first */
  outbox?: Maybe<ActivitiesPage>,
  /** The collections a user is following, most recently followed first */
  collectionFollows?: Maybe<FollowsPage>,
  /** Subscriptions users have to the collection */
  followers?: Maybe<FollowsPage>,
  /** Whether the user is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Free text */
  location?: Maybe<Scalars['String']>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** Whether the user has a public profile */
  isPublic: Scalars['Boolean'],
  /** The current user's like of this user, if any */
  myLike?: Maybe<Like>,
};


/** User profile information */
export type UserLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserUserFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserLikesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserCommunityFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserInboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserCommentsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserCollectionFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type WebMetadata = {
   __typename?: 'WebMetadata',
  author?: Maybe<Scalars['String']>,
  embedCode?: Maybe<Scalars['String']>,
  embedType?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  language?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};


      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }

      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "ActivityContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Like"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "LikeContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FlagContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Resource"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ThreadContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Resource"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FollowContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "FeatureContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "DeleteContext",
        "possibleTypes": [
          {
            "name": "Collection"
          },
          {
            "name": "Comment"
          },
          {
            "name": "Community"
          },
          {
            "name": "Feature"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Like"
          },
          {
            "name": "Resource"
          },
          {
            "name": "Thread"
          },
          {
            "name": "User"
          }
        ]
      }
    ]
  }
};

      export default result;
    


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  RootQueryType: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Activity: ResolverTypeWrapper<Omit<Activity, 'context'> & { context?: Maybe<ResolversTypes['ActivityContext']> }>,
  ActivityContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Flag'] | ResolversTypes['Follow'] | ResolversTypes['Like'] | ResolversTypes['Resource'] | ResolversTypes['User'],
  Collection: ResolverTypeWrapper<Collection>,
  Community: ResolverTypeWrapper<Community>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  CollectionsPage: ResolverTypeWrapper<CollectionsPage>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  User: ResolverTypeWrapper<User>,
  LikesPage: ResolverTypeWrapper<LikesPage>,
  Like: ResolverTypeWrapper<Omit<Like, 'context'> & { context: ResolversTypes['LikeContext'] }>,
  LikeContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Resource'] | ResolversTypes['User'],
  Comment: ResolverTypeWrapper<Comment>,
  FlagsPage: ResolverTypeWrapper<FlagsPage>,
  Flag: ResolverTypeWrapper<Omit<Flag, 'context'> & { context: ResolversTypes['FlagContext'] }>,
  FlagContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Resource'] | ResolversTypes['User'],
  Resource: ResolverTypeWrapper<Resource>,
  Content: ResolverTypeWrapper<Content>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  FileMetadata: ResolverTypeWrapper<FileMetadata>,
  FileIntrinsics: ResolverTypeWrapper<FileIntrinsics>,
  ContentMirror: ResolverTypeWrapper<ContentMirror>,
  ContentUpload: ResolverTypeWrapper<ContentUpload>,
  Json: ResolverTypeWrapper<Scalars['Json']>,
  Thread: ResolverTypeWrapper<Omit<Thread, 'context'> & { context?: Maybe<ResolversTypes['ThreadContext']> }>,
  CommentsPage: ResolverTypeWrapper<CommentsPage>,
  ThreadContext: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Flag'] | ResolversTypes['Resource'],
  FollowsPage: ResolverTypeWrapper<FollowsPage>,
  Follow: ResolverTypeWrapper<Omit<Follow, 'context'> & { context: ResolversTypes['FollowContext'] }>,
  FollowContext: ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Thread'] | ResolversTypes['User'],
  ActivitiesPage: ResolverTypeWrapper<ActivitiesPage>,
  ThreadsPage: ResolverTypeWrapper<ThreadsPage>,
  ResourcesPage: ResolverTypeWrapper<ResourcesPage>,
  ActivityVerb: ActivityVerb,
  CommunitiesPage: ResolverTypeWrapper<CommunitiesPage>,
  Feature: ResolverTypeWrapper<Omit<Feature, 'context'> & { context?: Maybe<ResolversTypes['FeatureContext']> }>,
  FeatureContext: ResolversTypes['Collection'] | ResolversTypes['Community'],
  FeaturesPage: ResolverTypeWrapper<FeaturesPage>,
  Instance: ResolverTypeWrapper<Instance>,
  Me: ResolverTypeWrapper<Me>,
  SearchFollow: ResolverTypeWrapper<SearchFollow>,
  RegisterEmailAccessesPage: ResolverTypeWrapper<RegisterEmailAccessesPage>,
  RegisterEmailAccess: ResolverTypeWrapper<RegisterEmailAccess>,
  RegisterEmailDomainAccessesPage: ResolverTypeWrapper<RegisterEmailDomainAccessesPage>,
  RegisterEmailDomainAccess: ResolverTypeWrapper<RegisterEmailDomainAccess>,
  RootMutationType: ResolverTypeWrapper<{}>,
  CommentInput: CommentInput,
  CollectionInput: CollectionInput,
  UploadInput: UploadInput,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  CommunityUpdateInput: CommunityUpdateInput,
  UpdateProfileInput: UpdateProfileInput,
  WebMetadata: ResolverTypeWrapper<WebMetadata>,
  CollectionUpdateInput: CollectionUpdateInput,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  ResourceInput: ResourceInput,
  RegistrationInput: RegistrationInput,
  CommunityInput: CommunityInput,
  DeleteContext: ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Feature'] | ResolversTypes['Flag'] | ResolversTypes['Follow'] | ResolversTypes['Like'] | ResolversTypes['Resource'] | ResolversTypes['Thread'] | ResolversTypes['User'],
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  String: Scalars['String'],
  Activity: Omit<Activity, 'context'> & { context?: Maybe<ResolversParentTypes['ActivityContext']> },
  ActivityContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Follow'] | ResolversParentTypes['Like'] | ResolversParentTypes['Resource'] | ResolversParentTypes['User'],
  Collection: Collection,
  Community: Community,
  Int: Scalars['Int'],
  Cursor: Scalars['Cursor'],
  CollectionsPage: CollectionsPage,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  User: User,
  LikesPage: LikesPage,
  Like: Omit<Like, 'context'> & { context: ResolversParentTypes['LikeContext'] },
  LikeContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Resource'] | ResolversParentTypes['User'],
  Comment: Comment,
  FlagsPage: FlagsPage,
  Flag: Omit<Flag, 'context'> & { context: ResolversParentTypes['FlagContext'] },
  FlagContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Resource'] | ResolversParentTypes['User'],
  Resource: Resource,
  Content: Content,
  ID: Scalars['ID'],
  FileMetadata: FileMetadata,
  FileIntrinsics: FileIntrinsics,
  ContentMirror: ContentMirror,
  ContentUpload: ContentUpload,
  Json: Scalars['Json'],
  Thread: Omit<Thread, 'context'> & { context?: Maybe<ResolversParentTypes['ThreadContext']> },
  CommentsPage: CommentsPage,
  ThreadContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Resource'],
  FollowsPage: FollowsPage,
  Follow: Omit<Follow, 'context'> & { context: ResolversParentTypes['FollowContext'] },
  FollowContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Thread'] | ResolversParentTypes['User'],
  ActivitiesPage: ActivitiesPage,
  ThreadsPage: ThreadsPage,
  ResourcesPage: ResourcesPage,
  ActivityVerb: ActivityVerb,
  CommunitiesPage: CommunitiesPage,
  Feature: Omit<Feature, 'context'> & { context?: Maybe<ResolversParentTypes['FeatureContext']> },
  FeatureContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Community'],
  FeaturesPage: FeaturesPage,
  Instance: Instance,
  Me: Me,
  SearchFollow: SearchFollow,
  RegisterEmailAccessesPage: RegisterEmailAccessesPage,
  RegisterEmailAccess: RegisterEmailAccess,
  RegisterEmailDomainAccessesPage: RegisterEmailDomainAccessesPage,
  RegisterEmailDomainAccess: RegisterEmailDomainAccess,
  RootMutationType: {},
  CommentInput: CommentInput,
  CollectionInput: CollectionInput,
  UploadInput: UploadInput,
  Upload: Scalars['Upload'],
  CommunityUpdateInput: CommunityUpdateInput,
  UpdateProfileInput: UpdateProfileInput,
  WebMetadata: WebMetadata,
  CollectionUpdateInput: CollectionUpdateInput,
  AuthPayload: AuthPayload,
  ResourceInput: ResourceInput,
  RegistrationInput: RegistrationInput,
  CommunityInput: CommunityInput,
  DeleteContext: ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Feature'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Follow'] | ResolversParentTypes['Like'] | ResolversParentTypes['Resource'] | ResolversParentTypes['Thread'] | ResolversParentTypes['User'],
};

export type ActivitiesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivitiesPage'] = ResolversParentTypes['ActivitiesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['ActivityContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  verb?: Resolver<ResolversTypes['ActivityVerb'], ParentType, ContextType>,
};

export type ActivityContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivityContext'] = ResolversParentTypes['ActivityContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Flag' | 'Follow' | 'Like' | 'Resource' | 'User', ParentType, ContextType>
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>,
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  featureCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, CollectionFlagsArgs>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, CollectionFollowersArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, CollectionLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, CollectionOutboxArgs>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  resourceCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  resources?: Resolver<Maybe<ResolversTypes['ResourcesPage']>, ParentType, ContextType, CollectionResourcesArgs>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  threads?: Resolver<Maybe<ResolversTypes['ThreadsPage']>, ParentType, ContextType, CollectionThreadsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CollectionsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionsPage'] = ResolversParentTypes['CollectionsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Collection']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, CommentFlagsArgs>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  inReplyTo?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType>,
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, CommentLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CommentsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentsPage'] = ResolversParentTypes['CommentsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommunitiesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommunitiesPage'] = ResolversParentTypes['CommunitiesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Community']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Community'] = ResolversParentTypes['Community']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  collectionCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  collections?: Resolver<Maybe<ResolversTypes['CollectionsPage']>, ParentType, ContextType, CommunityCollectionsArgs>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  featureCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, CommunityFlagsArgs>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, CommunityFollowersArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, CommunityLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, CommunityOutboxArgs>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  threads?: Resolver<Maybe<ResolversTypes['ThreadsPage']>, ParentType, ContextType, CommunityThreadsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  mediaType?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  metadata?: Resolver<Maybe<ResolversTypes['FileMetadata']>, ParentType, ContextType>,
  mirror?: Resolver<Maybe<ResolversTypes['ContentMirror']>, ParentType, ContextType>,
  upload?: Resolver<Maybe<ResolversTypes['ContentUpload']>, ParentType, ContextType>,
  uploader?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ContentMirrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentMirror'] = ResolversParentTypes['ContentMirror']> = {
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ContentUploadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContentUpload'] = ResolversParentTypes['ContentUpload']> = {
  path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor'
}

export type DeleteContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteContext'] = ResolversParentTypes['DeleteContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Feature' | 'Flag' | 'Follow' | 'Like' | 'Resource' | 'Thread' | 'User', ParentType, ContextType>
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['FeatureContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type FeatureContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeatureContext'] = ResolversParentTypes['FeatureContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community', ParentType, ContextType>
};

export type FeaturesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FeaturesPage'] = ResolversParentTypes['FeaturesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Feature']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FileIntrinsicsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileIntrinsics'] = ResolversParentTypes['FileIntrinsics']> = {
  bitsPerPixel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  bitsPerSample?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  blockAlign?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  byteRate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  colorPlanes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  numColorPalette?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  numFrames?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  pageCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type FileMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileMetadata'] = ResolversParentTypes['FileMetadata']> = {
  heightPx?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  intrinsics?: Resolver<Maybe<ResolversTypes['FileIntrinsics']>, ParentType, ContextType>,
  numAudioChannels?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  sampleRateHz?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  widthPx?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type FlagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flag'] = ResolversParentTypes['Flag']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['FlagContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isResolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type FlagContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlagContext'] = ResolversParentTypes['FlagContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Resource' | 'User', ParentType, ContextType>
};

export type FlagsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlagsPage'] = ResolversParentTypes['FlagsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Flag']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['FollowContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type FollowContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowContext'] = ResolversParentTypes['FollowContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Thread' | 'User', ParentType, ContextType>
};

export type FollowsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowsPage'] = ResolversParentTypes['FollowsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Follow']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type InstanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Instance'] = ResolversParentTypes['Instance']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  featuredCollections?: Resolver<Maybe<ResolversTypes['FeaturesPage']>, ParentType, ContextType>,
  featuredCommunities?: Resolver<Maybe<ResolversTypes['FeaturesPage']>, ParentType, ContextType>,
  hostname?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, InstanceOutboxArgs>,
  uploadIconTypes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  uploadImageTypes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  uploadMaxBytes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  uploadResourceTypes?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json'
}

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['LikeContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LikeContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikeContext'] = ResolversParentTypes['LikeContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Comment' | 'Community' | 'Resource' | 'User', ParentType, ContextType>
};

export type LikesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LikesPage'] = ResolversParentTypes['LikesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Like']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isConfirmed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isInstanceAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  searchFollows?: Resolver<Array<ResolversTypes['SearchFollow']>, ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  wantsEmailDigest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  wantsNotifications?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<Array<ResolversTypes['Cursor']>>, ParentType, ContextType>,
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  startCursor?: Resolver<Maybe<Array<ResolversTypes['Cursor']>>, ParentType, ContextType>,
};

export type RegisterEmailAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterEmailAccess'] = ResolversParentTypes['RegisterEmailAccess']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RegisterEmailAccessesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterEmailAccessesPage'] = ResolversParentTypes['RegisterEmailAccessesPage']> = {
  edges?: Resolver<Array<ResolversTypes['RegisterEmailAccess']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type RegisterEmailDomainAccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterEmailDomainAccess'] = ResolversParentTypes['RegisterEmailDomainAccess']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  domain?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RegisterEmailDomainAccessesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterEmailDomainAccessesPage'] = ResolversParentTypes['RegisterEmailDomainAccessesPage']> = {
  edges?: Resolver<Array<ResolversTypes['RegisterEmailDomainAccess']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Resource'] = ResolversParentTypes['Resource']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, ResourceFlagsArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, ResourceLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ResourcesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourcesPage'] = ResolversParentTypes['ResourcesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Resource']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type RootMutationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootMutationType'] = ResolversParentTypes['RootMutationType']> = {
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCommentArgs, 'comment' | 'commentId'>>,
  createCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateCollectionArgs, 'collection' | 'communityId'>>,
  createRegisterEmailAccess?: Resolver<ResolversTypes['RegisterEmailAccess'], ParentType, ContextType, RequireFields<RootMutationTypeCreateRegisterEmailAccessArgs, 'email'>>,
  resolveFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootMutationTypeResolveFlagArgs, 'flagId'>>,
  updateCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCommunityArgs, 'community' | 'communityId'>>,
  createReply?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateReplyArgs, 'comment' | 'inReplyToId' | 'threadId'>>,
  updateProfile?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProfileArgs, 'profile'>>,
  deleteSession?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  fetchWebMetadata?: Resolver<Maybe<ResolversTypes['WebMetadata']>, ParentType, ContextType, RequireFields<RootMutationTypeFetchWebMetadataArgs, 'url'>>,
  createThread?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateThreadArgs, 'comment' | 'contextId'>>,
  deleteRegisterEmailDomainAccess?: Resolver<Maybe<ResolversTypes['RegisterEmailDomainAccess']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRegisterEmailDomainAccessArgs, 'id'>>,
  createFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFollowArgs, 'contextId'>>,
  updateCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCollectionArgs, 'collection' | 'collectionId'>>,
  createSession?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSessionArgs, 'email' | 'password'>>,
  createResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateResourceArgs, 'collectionId' | 'content' | 'resource'>>,
  updateResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateResourceArgs, 'resource' | 'resourceId'>>,
  deleteSelf?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSelfArgs, 'iAmSure'>>,
  createRegisterEmailDomainAccess?: Resolver<ResolversTypes['RegisterEmailDomainAccess'], ParentType, ContextType, RequireFields<RootMutationTypeCreateRegisterEmailDomainAccessArgs, 'domain'>>,
  createFollowByUrl?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFollowByUrlArgs, 'url'>>,
  resetPassword?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeResetPasswordArgs, 'password' | 'token'>>,
  deactivateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootMutationTypeDeactivateUserArgs, 'id'>>,
  createUser?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateUserArgs, 'user'>>,
  createLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateLikeArgs, 'contextId'>>,
  createFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFlagArgs, 'contextId' | 'message'>>,
  deleteRegisterEmailAccess?: Resolver<Maybe<ResolversTypes['RegisterEmailAccess']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRegisterEmailAccessArgs, 'id'>>,
  sendInvite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeSendInviteArgs, 'email'>>,
  resetPasswordRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeResetPasswordRequestArgs, 'email'>>,
  createCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateCommunityArgs, 'community'>>,
  delete?: Resolver<Maybe<ResolversTypes['DeleteContext']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteArgs, 'contextId'>>,
  createFeature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFeatureArgs, 'contextId'>>,
  confirmEmail?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeConfirmEmailArgs, 'token'>>,
  copyResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeCopyResourceArgs, 'collectionId' | 'resourceId'>>,
};

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = {
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootQueryTypeActivityArgs, 'activityId'>>,
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootQueryTypeCollectionArgs, 'collectionId'>>,
  collections?: Resolver<ResolversTypes['CollectionsPage'], ParentType, ContextType, RootQueryTypeCollectionsArgs>,
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootQueryTypeCommentArgs, 'commentId'>>,
  communities?: Resolver<ResolversTypes['CommunitiesPage'], ParentType, ContextType, RootQueryTypeCommunitiesArgs>,
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootQueryTypeCommunityArgs, 'communityId'>>,
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<RootQueryTypeFeatureArgs, 'featureId'>>,
  features?: Resolver<Maybe<ResolversTypes['FeaturesPage']>, ParentType, ContextType, RootQueryTypeFeaturesArgs>,
  flag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootQueryTypeFlagArgs, 'flagId'>>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, RootQueryTypeFlagsArgs>,
  follow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootQueryTypeFollowArgs, 'followId'>>,
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>,
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<RootQueryTypeLikeArgs, 'likeId'>>,
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>,
  registerEmailAccesses?: Resolver<ResolversTypes['RegisterEmailAccessesPage'], ParentType, ContextType, RootQueryTypeRegisterEmailAccessesArgs>,
  registerEmailDomainAccesses?: Resolver<ResolversTypes['RegisterEmailDomainAccessesPage'], ParentType, ContextType, RootQueryTypeRegisterEmailDomainAccessesArgs>,
  resource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootQueryTypeResourceArgs, 'resourceId'>>,
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<RootQueryTypeThreadArgs, 'threadId'>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootQueryTypeUserArgs, 'userId'>>,
  usernameAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<RootQueryTypeUsernameAvailableArgs, 'username'>>,
};

export type SearchFollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchFollow'] = ResolversParentTypes['SearchFollow']> = {
  canonicalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  collectionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  communityId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  followId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isCreator?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type ThreadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, ThreadCommentsArgs>,
  context?: Resolver<Maybe<ResolversTypes['ThreadContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, ThreadFollowersArgs>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ThreadContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadContext'] = ResolversParentTypes['ThreadContext']> = {
  __resolveType: TypeResolveFn<'Collection' | 'Community' | 'Flag' | 'Resource', ParentType, ContextType>
};

export type ThreadsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadsPage'] = ResolversParentTypes['ThreadsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Thread']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, UserLikersArgs>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserUserFollowsArgs>,
  likeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likes?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, UserLikesArgs>,
  follows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserFollowsArgs>,
  communityFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserCommunityFollowsArgs>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  followCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, UserInboxArgs>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, UserCommentsArgs>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, UserOutboxArgs>,
  collectionFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserCollectionFollowsArgs>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserFollowersArgs>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
};

export type WebMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebMetadata'] = ResolversParentTypes['WebMetadata']> = {
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  embedCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  embedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  ActivitiesPage?: ActivitiesPageResolvers<ContextType>,
  Activity?: ActivityResolvers<ContextType>,
  ActivityContext?: ActivityContextResolvers,
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  Collection?: CollectionResolvers<ContextType>,
  CollectionsPage?: CollectionsPageResolvers<ContextType>,
  Comment?: CommentResolvers<ContextType>,
  CommentsPage?: CommentsPageResolvers<ContextType>,
  CommunitiesPage?: CommunitiesPageResolvers<ContextType>,
  Community?: CommunityResolvers<ContextType>,
  Content?: ContentResolvers<ContextType>,
  ContentMirror?: ContentMirrorResolvers<ContextType>,
  ContentUpload?: ContentUploadResolvers<ContextType>,
  Cursor?: GraphQLScalarType,
  DeleteContext?: DeleteContextResolvers,
  Feature?: FeatureResolvers<ContextType>,
  FeatureContext?: FeatureContextResolvers,
  FeaturesPage?: FeaturesPageResolvers<ContextType>,
  FileIntrinsics?: FileIntrinsicsResolvers<ContextType>,
  FileMetadata?: FileMetadataResolvers<ContextType>,
  Flag?: FlagResolvers<ContextType>,
  FlagContext?: FlagContextResolvers,
  FlagsPage?: FlagsPageResolvers<ContextType>,
  Follow?: FollowResolvers<ContextType>,
  FollowContext?: FollowContextResolvers,
  FollowsPage?: FollowsPageResolvers<ContextType>,
  Instance?: InstanceResolvers<ContextType>,
  Json?: GraphQLScalarType,
  Like?: LikeResolvers<ContextType>,
  LikeContext?: LikeContextResolvers,
  LikesPage?: LikesPageResolvers<ContextType>,
  Me?: MeResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  RegisterEmailAccess?: RegisterEmailAccessResolvers<ContextType>,
  RegisterEmailAccessesPage?: RegisterEmailAccessesPageResolvers<ContextType>,
  RegisterEmailDomainAccess?: RegisterEmailDomainAccessResolvers<ContextType>,
  RegisterEmailDomainAccessesPage?: RegisterEmailDomainAccessesPageResolvers<ContextType>,
  Resource?: ResourceResolvers<ContextType>,
  ResourcesPage?: ResourcesPageResolvers<ContextType>,
  RootMutationType?: RootMutationTypeResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  SearchFollow?: SearchFollowResolvers<ContextType>,
  Thread?: ThreadResolvers<ContextType>,
  ThreadContext?: ThreadContextResolvers,
  ThreadsPage?: ThreadsPageResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  WebMetadata?: WebMetadataResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
