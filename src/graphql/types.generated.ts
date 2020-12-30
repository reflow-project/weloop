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
  /** The `URI` type simply declares a reference to an external web URL, Holochain entry or other resource. */
  URI: any,
  /** 
 * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
 **/
  DateTime: any,
  /** Arbitrary json stored as a string */
  Json: any,
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
  /** Represents an uploaded file. */
  Upload: any,
};

/** A boundary or context grouped around some other record- used for documenting, accounting, planning. */
export type AccountingScope = Category | Collection | Community | Organisation | Organization | Person | Taggable | User;

/** 
 * An action verb defining the kind of event, commitment, or intent.
 * It is recommended that the lowercase action verb should be used as the record ID
 * in order that references to `Action`s elsewhere in the system are easily readable.
 **/
export type Action = {
   __typename?: 'Action',
  id: Scalars['ID'],
  /** Denotes if a process input or output, or not related to a process. */
  inputOutput?: Maybe<Scalars['String']>,
  /** A unique verb which defines the action. */
  label: Scalars['String'],
  note?: Maybe<Scalars['String']>,
  /** 
 * The onhand effect of an economic event on a resource, increment, decrement, no
   * effect, or decrement resource and increment 'to' resource.
 **/
  onhandEffect?: Maybe<Scalars['String']>,
  /** The action that should be included on the other direction of the process, for example accept with modify. */
  pairsWith?: Maybe<Scalars['String']>,
  /** 
 * The accounting effect of an economic event on a resource, increment,
   * decrement, no effect, or decrement resource and increment 'to' resource.
 **/
  resourceEffect: Scalars['String'],
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
  context?: Maybe<AnyContext>,
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

/** Something a user does, in past tense */
export enum ActivityVerb {
  Created = 'CREATED',
  Updated = 'UPDATED'
}

/** A person or group or organization with economic agency. */
export type Agent = {
  agentType?: Maybe<AgentType>,
  canonicalUrl?: Maybe<Scalars['String']>,
  commitments?: Maybe<Array<Commitment>>,
  displayUsername?: Maybe<Scalars['String']>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  intents?: Maybe<Array<Intent>>,
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  plans?: Maybe<Array<Plan>>,
  /** 
 * The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
 **/
  primaryLocation?: Maybe<SpatialThing>,
  processes?: Maybe<Array<Process>>,
  proposals?: Maybe<Array<Proposal>>,
  relationships?: Maybe<Array<AgentRelationship>>,
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>,
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>,
  roles?: Maybe<Array<AgentRelationshipRole>>,
};


/** A person or group or organization with economic agency. */
export type AgentCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>
};


/** A person or group or organization with economic agency. */
export type AgentRelationshipsArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A person or group or organization with economic agency. */
export type AgentRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};

/** Query parameters for reading `Commitment`s related to an `Agent` */
export type AgentCommitmentSearchParams = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
};

export type AgentCreateParams = {
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`SpatialThing`) The main place an agent is located, often an address where
   * activities occur and mail can be sent. This is usually a mappable geographic
   * location.  It also could be a website address, as in the case of agents who
   * have no physical location.
 **/
  primaryLocation?: Maybe<Scalars['ID']>,
};

/** Query parameters for reading `EconomicEvent`s related to an `Agent` */
export type AgentEventSearchParams = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['DateTime']>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
};

/** Query parameters for reading `Intent`s related to an `Agent` */
export type AgentIntentSearchParams = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
};

/** Query parameters for reading `Plan`s related to an `Agent` */
export type AgentPlanSearchParams = {
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
};

/** Query parameters for reading `Process`es related to an `Agent` */
export type AgentProcessSearchParams = {
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
};

/** The role of an economic relationship that exists between 2 agents, such as member, trading partner. */
export type AgentRelationship = {
   __typename?: 'AgentRelationship',
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The object of a relationship between 2 agents.  For example, if Mary is a member of a group, then the group is the object. */
  object: Agent,
  /** A kind of relationship that exists between 2 agents. */
  relationship: AgentRelationshipRole,
  /** The subject of a relationship between 2 agents.  For example, if Mary is a member of a group, then Mary is the subject. */
  subject: Agent,
};

export type AgentRelationshipCreateParams = {
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`Agent`) The object of a relationship between 2 agents.  For example, if Mary
   * is a member of a group, then the group is the object.
 **/
  object: Scalars['ID'],
  /** 
 * (`AgentRelationshipRole`) The role of an economic relationship that exists
   * between 2 agents, such as member, trading partner.
 **/
  relationship: Scalars['ID'],
  /** 
 * (`Agent`) The subject of a relationship between 2 agents.  For example, if
   * Mary is a member of a group, then Mary is the subject.
 **/
  subject: Scalars['ID'],
};

export type AgentRelationshipResponse = {
   __typename?: 'AgentRelationshipResponse',
  agentRelationship: AgentRelationship,
};

/** A relationship role defining the kind of association one agent can have with another. */
export type AgentRelationshipRole = {
   __typename?: 'AgentRelationshipRole',
  id: Scalars['ID'],
  /** The human readable name of the role, from the object to the subject. */
  inverseRoleLabel?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The human readable name of the role, from the subject to the object. */
  roleLabel: Scalars['String'],
};

export type AgentRelationshipRoleCreateParams = {
  /** The human readable name of the role, inverse from the object to the subject. For example, 'has member'. */
  inverseRoleLabel?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The human readable name of the role, inverse from the object to the subject. For example, 'is member of'. */
  roleLabel: Scalars['String'],
};

export type AgentRelationshipRoleResponse = {
   __typename?: 'AgentRelationshipRoleResponse',
  agentRelationshipRole?: Maybe<AgentRelationshipRole>,
};

export type AgentRelationshipRoleUpdateParams = {
  id: Scalars['ID'],
  /** The human readable name of the role, inverse from the object to the subject. For example, 'has member'. */
  inverseRoleLabel?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The human readable name of the role, inverse from the object to the subject. For example, 'is member of'. */
  roleLabel?: Maybe<Scalars['String']>,
};

export type AgentRelationshipUpdateParams = {
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`Agent`) The object of a relationship between 2 agents.  For example, if Mary
   * is a member of a group, then the group is the object.
 **/
  object?: Maybe<Scalars['ID']>,
  /** 
 * (`AgentRelationshipRole`) The role of an economic relationship that exists
   * between 2 agents, such as member, trading partner.
 **/
  relationship?: Maybe<Scalars['ID']>,
  /** 
 * (`Agent`) The subject of a relationship between 2 agents.  For example, if
   * Mary is a member of a group, then Mary is the subject.
 **/
  subject?: Maybe<Scalars['ID']>,
};

/** Query parameters for reading `EconomicResource`s related to an `Agent` */
export type AgentResourceSearchParams = {
  page?: Maybe<Scalars['Int']>,
  resourceClassification?: Maybe<Scalars['URI']>,
  searchString?: Maybe<Scalars['String']>,
};

/** A page of agents */
export type AgentsPage = {
   __typename?: 'AgentsPage',
  edges: Array<Agent>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export enum AgentType {
  Organization = 'Organization',
  Person = 'Person'
}

export type AgentUpdateParams = {
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for an agent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * (`SpatialThing`) The main place an agent is located, often an address where
   * activities occur and mail can be sent. This is usually a mappable geographic
   * location.  It also could be a website address, as in the case of agents who
   * have no physical location.
 **/
  primaryLocation?: Maybe<Scalars['ID']>,
};

/** Any type of agreement among economic agents. */
export type Agreement = {
   __typename?: 'Agreement',
  commitments?: Maybe<Array<Commitment>>,
  /** The date and time the agreement was created. */
  created?: Maybe<Scalars['DateTime']>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  involvedAgents?: Maybe<Array<Agent>>,
  /** An informal or formal textual identifier for an agreement. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AgreementCreateParams = {
  /** The date and time the agreement was created. */
  created: Scalars['DateTime'],
  /** An informal or formal textual identifier for an agreement. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AgreementResponse = {
   __typename?: 'AgreementResponse',
  agreement?: Maybe<Agreement>,
};

export type AgreementUpdateParams = {
  /** The date and time the agreement was created. */
  created?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for an agreement. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

/** Any type of known object */
export type AnyContext = Category | Collection | Comment | Community | Flag | Follow | Intent | Like | Organisation | Resource | SpatialThing | Taggable | User;

/** 
 * A way to tie an economic event that is given in loose fulfilment for another
 * economic event, without commitments or expectations. 
 * Supports the gift economy.
 **/
export type Appreciation = {
   __typename?: 'Appreciation',
  /** The economic event this appreciation has been given in acknowledgement of. */
  appreciationOf: EconomicEvent,
  /** The economic event provided as a gift in this appreciation. */
  appreciationWith: EconomicEvent,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AppreciationCreateParams = {
  /** (`EconomicEvent`) The economic event this appreciation has been given in acknowledgement of. */
  appreciationOf: Scalars['ID'],
  /** (`EconomicEvent`) The economic event provided as a gift in this appreciation. */
  appreciationWith: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AppreciationResponse = {
   __typename?: 'AppreciationResponse',
  appreciation?: Maybe<Appreciation>,
};

export type AppreciationUpdateParams = {
  /** (`EconomicEvent`) The economic event this appreciation has been given in acknowledgement of. */
  appreciationOf?: Maybe<Scalars['ID']>,
  /** (`EconomicEvent`) The economic event provided as a gift in this appreciation. */
  appreciationWith?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type AuthPayload = {
   __typename?: 'AuthPayload',
  me: Me,
  token: Scalars['String'],
};

export type CategoriesPage = {
   __typename?: 'CategoriesPage',
  edges: Array<Category>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A category (eg. tag in a taxonomy) */
export type Category = {
   __typename?: 'Category',
  /** The caretaker of this category, if any */
  caretaker?: Maybe<AnyContext>,
  /** The character that represents this category in feeds and federation */
  character?: Maybe<Character>,
  /** The user who created the character */
  creator?: Maybe<User>,
  facet?: Maybe<Scalars['String']>,
  /** The numeric primary key of the category */
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  /** The parent category (in a tree-based taxonomy) */
  parentCategory?: Maybe<Category>,
  parentCategoryId?: Maybe<Scalars['String']>,
  prefix?: Maybe<Scalars['String']>,
  /** The profile that represents this category */
  profile?: Maybe<Profile>,
  /** List of child categories (in a tree-based taxonomy) */
  subCategories?: Maybe<Array<Maybe<CategoriesPage>>>,
  summary?: Maybe<Scalars['String']>,
};

export type CategoryInput = {
  facet?: Maybe<Scalars['String']>,
  parentCategory?: Maybe<Scalars['ID']>,
  prefix?: Maybe<Scalars['String']>,
  sameAsCategory?: Maybe<Scalars['ID']>,
};

/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type Character = {
   __typename?: 'Character',
  /** A url for the character, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Any collections created under this character */
  collections?: Maybe<CollectionsPage>,
  /** Any communities linked under this character */
  communities?: Maybe<CommunitiesPage>,
  /** The parent of the character */
  context?: Maybe<AnyContext>,
  /** When the character was created */
  createdAt: Scalars['String'],
  /** The user who created the character */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** A friendly name for the type of thing this character represents, eg. Organisation, Location, Tag... */
  facet: Scalars['String'],
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Subscriptions users have to the character */
  followers?: Maybe<FollowsPage>,
  /** 
 * An instance-local UUID identifying the character. Not to be confused with the
   * associated thing's ID (available under characteristic.id)
 **/
  id: Scalars['String'],
  /** Whether an instance admin has hidden the character */
  isDisabled: Scalars['Boolean'],
  /** Whether the character is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the character is public */
  isPublic: Scalars['Boolean'],
  /** 
 * When the character or a resource in it was last updated or a
   * thread or a comment was created or updated
 **/
  lastActivity: Scalars['String'],
  /** The current user's flag of the character, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of this character, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this character, if any */
  myLike?: Maybe<Like>,
  /** Any organisations created under this character */
  organisations?: Maybe<OrganisationsPage>,
  /** Activities on the character, most recent first */
  outbox?: Maybe<ActivitiesPage>,
  /** An instance-unique identifier shared with users and communities */
  preferredUsername: Scalars['String'],
  /** Any resources posted under this character, most recent last */
  resources?: Maybe<ResourcesPage>,
  /** 
 * The threads created on the character, most recently created
   * first. Does not include threads created on resources.
 **/
  threads?: Maybe<ThreadsPage>,
  /** When the character was last updated */
  updatedAt: Scalars['String'],
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterCollectionsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterCommunitiesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterOrganisationsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterResourcesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A character is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type CharacterThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CharacterInput = {
  preferredUsername?: Maybe<Scalars['String']>,
};

export type CharactersPage = {
   __typename?: 'CharactersPage',
  edges: Array<Character>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** 
 * A claim for a future economic event(s) in reciprocity for an economic event that
 * already occurred. For example, a claim for payment for goods received.
 **/
export type Claim = {
   __typename?: 'Claim',
  /** Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The data on which the claim was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the claim is expected to be settled. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** 
 * The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The economic agent from whom the claim is initiated. */
  provider: Agent,
  /** The economic agent whom the claim is for. */
  receiver: Agent,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** The economic event which already occurred which this claim has been made against. */
  triggeredBy: EconomicEvent,
};

export type ClaimCreateParams = {
  /** (`Action`) Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The data on which the claim was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the claim is expected to be settled. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Agent`) The economic agent from whom the claim is initiated. */
  provider: Scalars['ID'],
  /** (`Agent`) The economic agent whom the claim is for. */
  receiver: Scalars['ID'],
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which already occurred which this claim has been made against. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

export type ClaimResponse = {
   __typename?: 'ClaimResponse',
  claim?: Maybe<Claim>,
};

export type ClaimUpdateParams = {
  /** (`Action`) Relates a claim to a verb, such as consume, produce, work, improve, etc. */
  action?: Maybe<Scalars['ID']>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this claim. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The data on which the claim was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the claim is expected to be settled. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The claim is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Agent`) The economic agent from whom the claim is initiated. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the claim is for. */
  receiver?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which already occurred which this claim has been made against. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

/** A collection is typically the home of resources and discussion threads within a community */
export type Collection = {
   __typename?: 'Collection',
  /** A url for the collection, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The community the collection belongs to, if any */
  community?: Maybe<Community>,
  /** The community or other context the collection belongs to */
  context?: Maybe<AnyContext>,
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


/** A collection is typically the home of resources and discussion threads within a community */
export type CollectionFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is typically the home of resources and discussion threads within a community */
export type CollectionFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is typically the home of resources and discussion threads within a community */
export type CollectionLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is typically the home of resources and discussion threads within a community */
export type CollectionOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is typically the home of resources and discussion threads within a community */
export type CollectionResourcesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** A collection is typically the home of resources and discussion threads within a community */
export type CollectionThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type CollectionInput = {
  extraInfo?: Maybe<Scalars['Json']>,
  name: Scalars['String'],
  preferredUsername?: Maybe<Scalars['String']>,
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
  /** The comment name/title or content warning */
  name?: Maybe<Scalars['String']>,
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

/** A planned economic flow that has been promised by an agent to another agent. */
export type Commitment = {
   __typename?: 'Commitment',
  /** Relates a commitment to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** The place where a commitment occurs. Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** This commitment is part of the exchange agreement. */
  clauseOf?: Maybe<Agreement>,
  /** The creation time of the commitment. */
  created?: Maybe<Scalars['DateTime']>,
  /** The commitment can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** 
 * The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: Maybe<Array<Fulfillment>>,
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Plan>,
  /** Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Process>,
  involvedAgents?: Maybe<Array<Agent>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Process>,
  /** The economic agent from whom the commitment is initiated. */
  provider: Agent,
  /** The economic agent whom the commitment is for. */
  receiver: Agent,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** Exact economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<EconomicResource>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>,
};

export type CommitmentCreateParams = {
  /** (`Action`) Relates a commitment to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an commitment occurs.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** (`Agreement`) This commitment is part of the agreement. */
  clauseOf?: Maybe<Scalars['ID']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** (`Plan`) Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Scalars['ID']>,
  /** (`Process`) Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the commitment is initiated. */
  provider: Scalars['ID'],
  /** (`Agent`) The economic agent whom the commitment is for. */
  receiver: Scalars['ID'],
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Exact economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

export type CommitmentResponse = {
   __typename?: 'CommitmentResponse',
  commitment?: Maybe<Commitment>,
};

export type CommitmentUpdateParams = {
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this commitment.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an commitment occurs.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** (`Agreement`) This commitment is part of the agreement. */
  clauseOf?: Maybe<Scalars['ID']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The commitment is complete or not.  This is irrespective of if the original
   * goal has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the commitment. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the commitment. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the commitment. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** (`Plan`) Represents a desired deliverable expected from this plan. */
  independentDemandOf?: Maybe<Scalars['ID']>,
  /** (`Process`) Defines the process to which this commitment is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process for which this commitment is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the commitment is initiated. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the commitment is for. */
  receiver?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Exact economic resource involved in the commitment. */
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
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
  /** The collections in this community */
  collections?: Maybe<CollectionsPage>,
  /** The parentccommunity or other context the community belongs to */
  context?: Maybe<AnyContext>,
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
  preferredUsername?: Maybe<Scalars['String']>,
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

export type CountriesPages = {
   __typename?: 'CountriesPages',
  edges: Array<Country>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type Country = {
   __typename?: 'Country',
  capital?: Maybe<Scalars['String']>,
  continentId?: Maybe<Scalars['String']>,
  currencyId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  id3letter?: Maybe<Scalars['String']>,
  idIso?: Maybe<Scalars['String']>,
  languageMain?: Maybe<Scalars['String']>,
  mainTz?: Maybe<Scalars['String']>,
  nameEng?: Maybe<Scalars['String']>,
  nameEngFormal?: Maybe<Scalars['String']>,
  nameLocal?: Maybe<Scalars['String']>,
  population?: Maybe<Scalars['Int']>,
  telPrefix?: Maybe<Scalars['String']>,
  tld?: Maybe<Scalars['String']>,
};



/** A `Duration` represents an interval between two `DateTime` values. */
export type Duration = {
   __typename?: 'Duration',
  /** A number representing the duration, will be paired with a unit. */
  numericDuration: Scalars['Float'],
  /** A unit of measure. */
  unitType: TimeUnit,
};

/** 
 * An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 **/
export type EconomicEvent = {
   __typename?: 'EconomicEvent',
  /** Relates an economic event to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  appreciatedBy?: Maybe<Array<Appreciation>>,
  appreciationOf?: Maybe<Array<Appreciation>>,
  /** The place where an economic event occurs.  Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** The economic event can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: Maybe<Array<Fulfillment>>,
  /** The beginning of the economic event. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end of the economic event. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The date/time at which the economic event occurred. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** Defines the process to which this event is an input. */
  inputOf?: Maybe<Process>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Defines the process for which this event is an output. */
  outputOf?: Maybe<Process>,
  /** The economic agent from whom the actual economic event is initiated. */
  provider: Agent,
  /** This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Agreement>,
  /** The economic agent whom the actual economic event is for. */
  receiver: Agent,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** Economic resource involved in the economic event. */
  resourceInventoriedAs?: Maybe<EconomicResource>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<Measure>,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Array<Satisfaction>>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Maybe<AnyContext>>>,
  /** 
 * Additional economic resource on the economic event when needed by the
   * receiver. Used when a transfer or move, or sometimes other actions, requires
   * explicitly identifying an economic resource on the receiving side.
 **/
  toResourceInventoriedAs?: Maybe<EconomicResource>,
  trace?: Maybe<Array<ProductionFlowItem>>,
  track?: Maybe<Array<ProductionFlowItem>>,
  /** References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<EconomicEvent>,
};

export type EconomicEventCreateParams = {
  /** (`Action`) Relates an economic event to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['ID'],
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an economic event occurs.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** The beginning of the economic event. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end of the economic event. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The date/time at which the economic event occurred. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** (`Process`) Defines the process to which this event is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process for which this event is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the actual economic event is initiated. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agreement`) This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the actual economic event is for. */
  receiver?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Economic resource involved in the economic event. */
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
  /** 
 * (`EconomicResource`) Additional economic resource on the economic event when
   * needed by the receiver. Used when a transfer or move, or sometimes other
   * actions, requires explicitly identifying an economic resource on the receiving side.
 **/
  toResourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** (`EconomicEvent`) References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

/** A page of Economic Events */
export type EconomicEventPage = {
   __typename?: 'EconomicEventPage',
  edges: Array<EconomicEvent>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type EconomicEventResponse = {
   __typename?: 'EconomicEventResponse',
  /** Details of the newly created event. */
  economicEvent: EconomicEvent,
  /** Details of any newly created `EconomicResource`, for events that create new resources. */
  economicResource?: Maybe<EconomicResource>,
};

export type EconomicEventUpdateParams = {
  /** 
 * Reference to an agreement between agents which specifies the rules or policies
   * or calculations which govern this economic event.
 **/
  agreedIn?: Maybe<Scalars['URI']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Agreement`) This economic event occurs as part of this agreement. */
  realizationOf?: Maybe<Scalars['ID']>,
  /** (`EconomicEvent`) References another economic event that implied this economic event, often based on a prior agreement. */
  triggeredBy?: Maybe<Scalars['ID']>,
};

/** A resource which is useful to people or the ecosystem. */
export type EconomicResource = {
   __typename?: 'EconomicResource',
  /** 
 * The current amount and unit of the economic resource for which the agent has
   * primary rights and responsibilities, sometimes thought of as ownership. This
   * can be either stored or derived from economic events affecting the resource.
 **/
  accountingQuantity?: Maybe<Measure>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  conformsTo: ResourceSpecification,
  /** Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<EconomicResource>,
  /** Used when a stock economic resource contains units also defined as economic resources. */
  contains?: Maybe<Array<EconomicResource>>,
  /** 
 * The current place an economic resource is located. Could be at any level of
   * granularity, from a town to an address to a warehouse location. Usually mappable.
 **/
  currentLocation?: Maybe<SpatialThing>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** 
 * Lot or batch of an economic resource, used to track forward or backwards to
   * all occurrences of resources of that lot. Note more than one resource can be
   * of the same lot.
 **/
  lot?: Maybe<ProductBatch>,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * The current amount and unit of the economic resource which is under direct
   * control of the agent.  It may be more or less than the accounting quantity.
   * This can be either stored or derived from economic events affecting the resource.
 **/
  onhandQuantity?: Maybe<Measure>,
  /** 
 * The agent currently with primary rights and responsibilites for the economic
   * resource. It is the agent that is associated with the accountingQuantity of
   * the economic resource.
 **/
  primaryAccountable?: Maybe<Agent>,
  /** 
 * References the ProcessSpecification of the last process the desired economic
   * resource went through. Stage is used when the last process is important for
   * finding proper resources, such as where the publishing process wants only
   * documents that have gone through the editing process.
 **/
  stage?: Maybe<ProcessSpecification>,
  /** 
 * The state of the desired economic resource (pass or fail), after coming out of
   * a test or review process. Can be derived from the last event if a pass or fail event.
 **/
  state?: Maybe<Action>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
  trace?: Maybe<Array<EconomicEvent>>,
  track?: Maybe<Array<EconomicEvent>>,
  /** 
 * Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
 **/
  trackingIdentifier?: Maybe<Scalars['String']>,
  /** The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: Maybe<Unit>,
};

/** Input `EconomicResource` type used when sending events to setup initial resource recordings */
export type EconomicResourceCreateParams = {
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  conformsTo?: Maybe<Scalars['ID']>,
  /** (`EconomicResource`) Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<Scalars['ID']>,
  /** 
 * (`SpatialThing`) The current place an economic resource is located.  Could be
   * at any level of granularity, from a town to an address to a warehouse
   * location.  Usually mappable.
 **/
  currentLocation?: Maybe<Scalars['ID']>,
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** 
 * (`ProductBatch`) Lot or batch of an economic resource, used to track forward
   * or backwards to all occurrences of resources of that lot. Note more than one
   * resource can be of the same lot.
 **/
  lot?: Maybe<Scalars['ID']>,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
  /** 
 * Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
 **/
  trackingIdentifier?: Maybe<Scalars['String']>,
};

/** A page of Economic Resources */
export type EconomicResourcePage = {
   __typename?: 'EconomicResourcePage',
  edges: Array<EconomicResource>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type EconomicResourceResponse = {
   __typename?: 'EconomicResourceResponse',
  economicResource: EconomicResource,
};

export type EconomicResourceUpdateParams = {
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** (`EconomicResource`) Used when a stock economic resource contains items also defined as economic resources. */
  containedIn?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the resource, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Unit`) The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: Maybe<Scalars['ID']>,
};

export type EventOrCommitment = Commitment | EconomicEvent;

/** A featured piece of content */
export type Feature = {
   __typename?: 'Feature',
  /** A url for the feature, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being featured */
  context?: Maybe<AnyContext>,
  /** When the feature was created */
  createdAt: Scalars['String'],
  /** The user who featured */
  creator?: Maybe<User>,
  /** An instance-local UUID identifying the feature */
  id: Scalars['String'],
  /** Whether the feature is local to the instance */
  isLocal: Scalars['Boolean'],
};

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
  context: AnyContext,
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

export type FlagsPage = {
   __typename?: 'FlagsPage',
  edges: Array<Flag>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A record that a user follows something */
export type Follow = {
   __typename?: 'Follow',
  /** A url for the follow, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is being followed */
  context: AnyContext,
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

export type FollowsPage = {
   __typename?: 'FollowsPage',
  edges: Array<Follow>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** 
 * Represents many-to-many relationships between commitments and economic events
 * that fully or partially satisfy one or more commitments.
 **/
export type Fulfillment = {
   __typename?: 'Fulfillment',
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: EconomicEvent,
  /** The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Commitment,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
};

export type FulfillmentCreateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which completely or partially fulfills a commitment. */
  fulfilledBy: Scalars['ID'],
  /** (`Commitment`) The commitment which is completely or partially fulfilled by an economic event. */
  fulfills: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

export type FulfillmentResponse = {
   __typename?: 'FulfillmentResponse',
  fulfillment?: Maybe<Fulfillment>,
};

export type FulfillmentUpdateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event which completely or partially fulfills a commitment. */
  fulfilledBy?: Maybe<Scalars['ID']>,
  /** (`Commitment`) The commitment which is completely or partially fulfilled by an economic event. */
  fulfills?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
};

export type GeolocationDistance = {
  meters?: Maybe<Scalars['Int']>,
};

export type GeolocationFilters = {
  distance?: Maybe<GeolocationDistance>,
  nearAddress?: Maybe<Scalars['String']>,
  nearPoint?: Maybe<GeolocationPoint>,
};

export type GeolocationPoint = {
  lat?: Maybe<Scalars['Float']>,
  long?: Maybe<Scalars['Float']>,
};

/** Mutation input structure for defining time durations. */
export type IDuration = {
  /** A number representing the duration, will be paired with a unit. */
  numericDuration: Scalars['Float'],
  /** A unit of measure. */
  unitType: TimeUnit,
};

/** Mutation input structure for defining measurements. Should be nulled if not present, rather than empty. */
export type IMeasure = {
  /** A number representing the quantity, will be paired with a unit. */
  hasNumericalValue: Scalars['Float'],
  /** (`Unit`) A unit of measure. */
  hasUnit: Scalars['ID'],
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

/** A planned economic flow which has not been committed to, which can lead to economic events (sometimes through commitments). */
export type Intent = {
   __typename?: 'Intent',
  /** Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** The place where an intent would occur. Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<Measure>,
  canonicalUrl?: Maybe<Scalars['URI']>,
  /** The intent can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  /** 
 * The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the intent, such as a photo.  */
  image?: Maybe<Scalars['URI']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** Defines the process to which this intent is an input. */
  inputOf?: Maybe<Process>,
  /** An informal or formal textual identifier for an intent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Defines the process to which this intent is an output. */
  outputOf?: Maybe<Process>,
  /** The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Agent>,
  publishedIn?: Maybe<Array<ProposedIntent>>,
  /** The economic agent whom the intent is for.  This implies that the intent is a request. */
  receiver?: Maybe<Agent>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** When a specific `EconomicResource` is known which can service the `Intent`, this defines that resource. */
  resourceInventoriedAs?: Maybe<EconomicResource>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<Measure>,
  satisfiedBy?: Maybe<Array<Satisfaction>>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Maybe<AnyContext>>>,
};

export type IntentCreateParams = {
  /** (`Action`) Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action: Scalars['String'],
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an intent occurs. Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<IMeasure>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  /** The uri to an image relevant to the intent, such as a photo. */
  image?: Maybe<Scalars['URI']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** (`Process`) Defines the process to which this intent is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** An informal or formal textual identifier for an intent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process to which this intent is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the intent is for.  This implies that the intent is a request. */
  receiver?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * (`EconomicResource`) When a specific `EconomicResource` is known which can
   * service the `Intent`, this defines that resource.
 **/
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
};

export type IntentResponse = {
   __typename?: 'IntentResponse',
  intent: Intent,
};

/** A page of intents */
export type IntentsPage = {
   __typename?: 'IntentsPage',
  edges: Array<Intent>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type IntentUpdateParams = {
  /** (`Action`) Relates an intent to a verb, such as consume, produce, work, improve, etc. */
  action?: Maybe<Scalars['String']>,
  /** Reference to an agreement between agents which specifies the rules or policies or calculations which govern this intent. */
  agreedIn?: Maybe<Scalars['URI']>,
  /** (`SpatialThing`) The place where an intent occurs. Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** The total quantity of the offered resource available. */
  availableQuantity?: Maybe<IMeasure>,
  /** The time something is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** 
 * The intent is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the intent. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the intent. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** The planned date/time for the intent. Can be used instead of beginning and end. */
  hasPointInTime?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the intent, such as a photo. */
  image?: Maybe<Scalars['URI']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** (`Process`) Defines the process to which this intent is an input. */
  inputOf?: Maybe<Scalars['ID']>,
  /** An informal or formal textual identifier for an intent. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Defines the process to which this intent is an output. */
  outputOf?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent from whom the intent is initiated. This implies that the intent is an offer. */
  provider?: Maybe<Scalars['ID']>,
  /** (`Agent`) The economic agent whom the intent is for.  This implies that the intent is a request. */
  receiver?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * (`EconomicResource`) When a specific `EconomicResource` is known which can
   * service the `Intent`, this defines that resource.
 **/
  resourceInventoriedAs?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the economic resource counted or inventoried. This is
   * the quantity that could be used to increment or decrement a resource,
   * depending on the type of resource and resource effect of action.
 **/
  resourceQuantity?: Maybe<IMeasure>,
};


export type Language = {
   __typename?: 'Language',
  id?: Maybe<Scalars['String']>,
  languageType?: Maybe<Scalars['String']>,
  mainCountryId?: Maybe<Scalars['String']>,
  mainName?: Maybe<Scalars['String']>,
  nativeName?: Maybe<Scalars['String']>,
  parentLanguageId?: Maybe<Scalars['String']>,
  rtl?: Maybe<Scalars['Boolean']>,
  speakersMil?: Maybe<Scalars['Float']>,
  speakersNative?: Maybe<Scalars['Int']>,
  speakersNativeTotal?: Maybe<Scalars['Int']>,
  subName?: Maybe<Scalars['String']>,
};

export type LanguagesPage = {
   __typename?: 'LanguagesPage',
  edges: Array<Language>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A record that a user likes a thing */
export type Like = {
   __typename?: 'Like',
  /** A url for the like, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The thing that is liked */
  context: AnyContext,
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
  /** The public info */
  user: User,
  /** Would the user like to receive digest emails of updates? */
  wantsEmailDigest: Scalars['Boolean'],
  /** Does the user want notifications? Which don't work yet. */
  wantsNotifications: Scalars['Boolean'],
};

/** 
 * Semantic meaning for measurements: binds a quantity to its measurement unit.
 * See http://www.qudt.org/pages/QUDToverviewPage.html
 **/
export type Measure = {
   __typename?: 'Measure',
  /** Added for CommonsPub */
  canonicalUrl?: Maybe<Scalars['URI']>,
  /** A number representing the quantity, will be paired with a unit. */
  hasNumericalValue: Scalars['Float'],
  /** A unit of measure. */
  hasUnit: Unit,
  id: Scalars['ID'],
};

export type MeasuresPage = {
   __typename?: 'MeasuresPage',
  edges?: Maybe<Array<Measure>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount?: Maybe<Scalars['Int']>,
};

/** An organisation is an agent/actor that fronts several people/users */
export type Organisation = {
   __typename?: 'Organisation',
  /** A url for the organisation, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The character associated with this organisation */
  character?: Maybe<Character>,
  /** The community the organisation belongs to */
  context?: Maybe<Community>,
  /** The user who created the organisation */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername?: Maybe<Scalars['String']>,
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** Flags users have made about the organisation, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** Total number of followers, including those we can't see */
  followerCount?: Maybe<Scalars['Int']>,
  /** Subscriptions users have to the organisation */
  followers?: Maybe<FollowsPage>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** An instance-local UUID identifying the user */
  id: Scalars['String'],
  /** Another image url */
  image?: Maybe<Content>,
  /** Whether an instance admin has hidden the organisation */
  isDisabled: Scalars['Boolean'],
  /** Whether the organisation is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the organisation is public */
  isPublic: Scalars['Boolean'],
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Likes users have made of the organisation */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the organisation, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's follow of this organisation, if any */
  myFollow?: Maybe<Follow>,
  /** The current user's like of this organisation, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** Activities on the organisation, most recent first */
  outbox?: Maybe<ActivitiesPage>,
  /** An instance-unique identifier shared with users and communities */
  preferredUsername?: Maybe<Scalars['String']>,
  /** The profile associated with this organisation */
  profile?: Maybe<Profile>,
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** 
 * The threads created on the organisation, most recently created
   * first. Does not include threads created on resources.
 **/
  threads?: Maybe<ThreadsPage>,
  /** When the organisation was last updated */
  updatedAt: Scalars['String'],
};


/** An organisation is an agent/actor that fronts several people/users */
export type OrganisationFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** An organisation is an agent/actor that fronts several people/users */
export type OrganisationFollowersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** An organisation is an agent/actor that fronts several people/users */
export type OrganisationLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** An organisation is an agent/actor that fronts several people/users */
export type OrganisationOutboxArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** An organisation is an agent/actor that fronts several people/users */
export type OrganisationThreadsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type OrganisationInput = {
  name: Scalars['String'],
  preferredUsername?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
};

export type OrganisationsPage = {
   __typename?: 'OrganisationsPage',
  edges: Array<Organisation>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type OrganisationUpdateInput = {
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

/** A formal or informal group, or legal organization. */
export type Organization = Agent & {
   __typename?: 'Organization',
  agentType?: Maybe<AgentType>,
  canonicalUrl?: Maybe<Scalars['String']>,
  commitments?: Maybe<Array<Commitment>>,
  displayUsername?: Maybe<Scalars['String']>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  inScopeOf?: Maybe<Array<AccountingScope>>,
  intents?: Maybe<Array<Intent>>,
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>,
  /** The name that this agent will be referred to by. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  plans?: Maybe<Array<Plan>>,
  /** 
 * The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
 **/
  primaryLocation?: Maybe<SpatialThing>,
  processes?: Maybe<Array<Process>>,
  proposals?: Maybe<Array<Proposal>>,
  relationships?: Maybe<Array<AgentRelationship>>,
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>,
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>,
  roles?: Maybe<Array<AgentRelationshipRole>>,
};


/** A formal or informal group, or legal organization. */
export type OrganizationCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>
};


/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A formal or informal group, or legal organization. */
export type OrganizationRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};

export type OrganizationResponse = {
   __typename?: 'OrganizationResponse',
  agent: Organization,
};

/** Cursors for pagination */
export type PageInfo = {
   __typename?: 'PageInfo',
  endCursor?: Maybe<Array<Scalars['Cursor']>>,
  hasNextPage?: Maybe<Scalars['Boolean']>,
  hasPreviousPage?: Maybe<Scalars['Boolean']>,
  startCursor?: Maybe<Array<Scalars['Cursor']>>,
};

/** A natural person. */
export type Person = Agent & {
   __typename?: 'Person',
  agentType?: Maybe<AgentType>,
  canonicalUrl?: Maybe<Scalars['String']>,
  commitments?: Maybe<Array<Commitment>>,
  displayUsername?: Maybe<Scalars['String']>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the agent, such as a logo, avatar, photo, etc. */
  image?: Maybe<Scalars['URI']>,
  intents?: Maybe<Array<Intent>>,
  inventoriedEconomicResources?: Maybe<Array<EconomicResource>>,
  /** The name that this agent will be referred to by. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  plans?: Maybe<Array<Plan>>,
  /** 
 * The main place an agent is located, often an address where activities occur
   * and mail can be sent. This is usually a mappable geographic location.  It also
   * could be a website address, as in the case of agents who have no physical location.
 **/
  primaryLocation?: Maybe<SpatialThing>,
  processes?: Maybe<Array<Process>>,
  proposals?: Maybe<Array<Proposal>>,
  relationships?: Maybe<Array<AgentRelationship>>,
  relationshipsAsObject?: Maybe<Array<AgentRelationship>>,
  relationshipsAsSubject?: Maybe<Array<AgentRelationship>>,
  roles?: Maybe<Array<AgentRelationshipRole>>,
};


/** A natural person. */
export type PersonCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>
};


/** A natural person. */
export type PersonEconomicEventsArgs = {
  filter?: Maybe<AgentEventSearchParams>
};


/** A natural person. */
export type PersonIntentsArgs = {
  filter?: Maybe<AgentIntentSearchParams>
};


/** A natural person. */
export type PersonInventoriedEconomicResourcesArgs = {
  filter?: Maybe<AgentResourceSearchParams>
};


/** A natural person. */
export type PersonPlansArgs = {
  filter?: Maybe<AgentPlanSearchParams>
};


/** A natural person. */
export type PersonProcessesArgs = {
  filter?: Maybe<AgentProcessSearchParams>
};


/** A natural person. */
export type PersonRelationshipsArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A natural person. */
export type PersonRelationshipsAsObjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};


/** A natural person. */
export type PersonRelationshipsAsSubjectArgs = {
  roleId?: Maybe<Scalars['ID']>
};

export type PersonResponse = {
   __typename?: 'PersonResponse',
  agent: Person,
};

/** A logical collection of processes that constitute a body of planned work with defined deliverable(s). */
export type Plan = {
   __typename?: 'Plan',
  /** The time the plan was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The plan is able to be deleted or not. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** The time the plan is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  independentDemands?: Maybe<Array<Commitment>>,
  /** An informal or formal textual identifier for a plan. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  processes?: Maybe<Array<Process>>,
  /** This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scenario>,
};


/** A logical collection of processes that constitute a body of planned work with defined deliverable(s). */
export type PlanProcessesArgs = {
  filter?: Maybe<PlanProcessSearchParams>
};

export type PlanCreateParams = {
  /** The time the plan was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the plan is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  /** An informal or formal textual identifier for a plan. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** Query parameters for reading `Process`es related to a `Plan` */
export type PlanProcessSearchParams = {
  after?: Maybe<Scalars['DateTime']>,
  before?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  searchString?: Maybe<Scalars['String']>,
};

export type PlanResponse = {
   __typename?: 'PlanResponse',
  plan?: Maybe<Plan>,
};

export type PlanUpdateParams = {
  /** The time the plan was made. */
  created?: Maybe<Scalars['DateTime']>,
  /** The time the plan is expected to be complete. */
  due?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a plan. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This plan refines a scenario, making it operational. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type Process = {
   __typename?: 'Process',
  /** The definition or specification for a process. */
  basedOn?: Maybe<ProcessSpecification>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  committedInputs?: Maybe<Array<Commitment>>,
  committedOutputs?: Maybe<Array<Commitment>>,
  /** The process can be safely deleted, has no dependent information. */
  deletable?: Maybe<Scalars['Boolean']>,
  /** 
 * The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  inputs?: Maybe<Array<EconomicEvent>>,
  intendedInputs?: Maybe<Array<Intent>>,
  intendedOutputs?: Maybe<Array<Intent>>,
  /** An informal or formal textual identifier for a process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** The process with its inputs and outputs is part of the scenario. */
  nestedIn?: Maybe<Scenario>,
  nextProcesses?: Maybe<Array<Process>>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  outputs?: Maybe<Array<EconomicEvent>>,
  /** The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Plan>,
  previousProcesses?: Maybe<Array<Process>>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<AnyContext>>,
  trace?: Maybe<Array<EconomicEvent>>,
  track?: Maybe<Array<EconomicEvent>>,
  unplannedEconomicEvents?: Maybe<Array<EconomicEvent>>,
  workingAgents?: Maybe<Array<Agent>>,
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedInputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessCommittedOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessInputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedInputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessUnplannedEconomicEventsArgs = {
  action?: Maybe<Scalars['ID']>
};

export type ProcessCreateParams = {
  /** (`ProcessSpecification`) The definition or specification for a process. */
  basedOn?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** An informal or formal textual identifier for a process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Plan`) The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Scalars['ID']>,
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
};

/** A page of Processes */
export type ProcessPage = {
   __typename?: 'ProcessPage',
  edges: Array<Process>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type ProcessResponse = {
   __typename?: 'ProcessResponse',
  process?: Maybe<Process>,
};

/** Specifies the kind of process. */
export type ProcessSpecification = {
   __typename?: 'ProcessSpecification',
  id: Scalars['ID'],
  /** An informal or formal textual identifier for the process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ProcessSpecificationCreateParams = {
  /** An informal or formal textual identifier for the process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ProcessSpecificationResponse = {
   __typename?: 'ProcessSpecificationResponse',
  processSpecification?: Maybe<ProcessSpecification>,
};

export type ProcessSpecificationUpdateParams = {
  id: Scalars['ID'],
  /** An informal or formal textual identifier for the process. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ProcessUpdateParams = {
  /** (`ProcessSpecification`) The definition or specification for a process. */
  basedOn?: Maybe<Scalars['ID']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  classifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The process is complete or not.  This is irrespective of if the original goal
   * has been met, and indicates that no more will be done.
 **/
  finished?: Maybe<Scalars['Boolean']>,
  /** The planned beginning of the process. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The planned end of the process. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** An informal or formal textual identifier for a process. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Plan`) The process with its inputs and outputs is part of the plan. */
  plannedWithin?: Maybe<Scalars['ID']>,
};

/** 
 * A lot or batch, defining a resource produced at the same time in the same way.
 * From DataFoodConsortium vocabulary https://datafoodconsortium.gitbook.io/dfc-standard-documentation/.
 **/
export type ProductBatch = {
   __typename?: 'ProductBatch',
  /** The standard unique identifier of the batch. */
  batchNumber: Scalars['String'],
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars['DateTime']>,
};

export type ProductBatchCreateParams = {
  /** The standard unique identifier of the batch. */
  batchNumber: Scalars['String'],
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars['DateTime']>,
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars['DateTime']>,
};

export type ProductBatchResponse = {
   __typename?: 'ProductBatchResponse',
  productBatch: ProductBatch,
};

export type ProductBatchUpdateParams = {
  /** The standard unique identifier of the batch. */
  batchNumber?: Maybe<Scalars['String']>,
  /** Expiration date of the batch, commonly used for food. */
  expiryDate?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Date the batch was produced.  Can be derived from the economic event of production. */
  productionDate?: Maybe<Scalars['DateTime']>,
};

export type ProductionFlowItem = EconomicResource | Process;

/** 
 * A profile is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type Profile = {
   __typename?: 'Profile',
  /** A url for the profile, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** When the profile was created */
  createdAt: Scalars['String'],
  /** The user who created the profile */
  creator?: Maybe<User>,
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** Flags users have made about the profile, most recently created first */
  flags?: Maybe<FlagsPage>,
  /** An avatar or icon url */
  icon?: Maybe<Content>,
  /** 
 * An instance-local UUID identifying the profile. Not to be confused with the
   * associated thing's ID (available under profileistic.id)
 **/
  id: Scalars['String'],
  /** A background image url */
  image?: Maybe<Content>,
  /** Whether an instance admin has hidden the profile */
  isDisabled: Scalars['Boolean'],
  /** Whether the profile is local to the instance */
  isLocal: Scalars['Boolean'],
  /** Whether the profile is public */
  isPublic: Scalars['Boolean'],
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Likes users have made of the profile */
  likers?: Maybe<LikesPage>,
  /** The current user's flag of the profile, if any */
  myFlag?: Maybe<Flag>,
  /** The current user's like of this profile, if any */
  myLike?: Maybe<Like>,
  /** A name field */
  name: Scalars['String'],
  /** An instance-unique identifier shared with users and communities */
  preferredUsername: Scalars['String'],
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** When the profile was last updated */
  updatedAt: Scalars['String'],
};


/** 
 * A profile is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type ProfileFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** 
 * A profile is anything (Person, Group, Organisation, Taxonomy Tag, Location,
 * Thread, what-have-you...) which has a feed which can be followed, and can be
 * tagged in other activities
 **/
export type ProfileLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type ProfileInput = {
  name: Scalars['String'],
  summary?: Maybe<Scalars['String']>,
};

export type ProfilesPage = {
   __typename?: 'ProfilesPage',
  edges: Array<Profile>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** Published requests or offers, sometimes with what is expected in return. */
export type Proposal = {
   __typename?: 'Proposal',
  canonicalUrl?: Maybe<Scalars['URI']>,
  /** The date and time the proposal was created. */
  created?: Maybe<Scalars['DateTime']>,
  creator?: Maybe<Agent>,
  /** Location or area where the proposal is valid. */
  eligibleLocation?: Maybe<SpatialThing>,
  /** The beginning time of proposal publication. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end time of proposal publication. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** An informal or formal textual identifier for a proposal. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Which Agent(s) (if any were specified) was this proposed to? */
  publishedTo?: Maybe<Array<ProposedTo>>,
  /** Intent(s) published as part of to this proposal */
  publishes?: Maybe<Array<ProposedIntent>>,
  /** 
 * This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
 **/
  unitBased?: Maybe<Scalars['Boolean']>,
};

export type ProposalCreateParams = {
  /** The date and time the proposal was created. */
  created?: Maybe<Scalars['DateTime']>,
  /** (`SpatialThing`) The location at which this proposal is eligible. */
  eligibleLocation?: Maybe<Scalars['ID']>,
  /** The beginning time of proposal publication. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end time of proposal publication. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** An informal or formal textual identifier for a proposal. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
 **/
  unitBased?: Maybe<Scalars['Boolean']>,
};

export type ProposalResponse = {
   __typename?: 'ProposalResponse',
  proposal?: Maybe<Proposal>,
};

/** A page of proposals */
export type ProposalsPage = {
   __typename?: 'ProposalsPage',
  edges: Array<Proposal>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type ProposalUpdateParams = {
  /** (`SpatialThing`) The location at which this proposal is eligible. */
  eligibleLocation?: Maybe<Scalars['ID']>,
  /** The beginning date/time of proposal publication. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The end time of proposal publication. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** An informal or formal textual identifier for a proposal. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * This proposal contains unit based quantities, which can be multipied to create
   * commitments; commonly seen in a price list or e-commerce.
 **/
  unitBased?: Maybe<Scalars['Boolean']>,
};

/** 
 * Represents many-to-many relationships between Proposals and Intents, supporting
 * including intents in multiple proposals, as well as a proposal including
 * multiple intents.
 **/
export type ProposedIntent = {
   __typename?: 'ProposedIntent',
  id: Scalars['ID'],
  /** The published proposal which this intent is part of. */
  publishedIn: Proposal,
  /** The intent which is part of this published proposal. */
  publishes: Intent,
  /** This is a reciprocal intent of this proposal, not primary. Not meant to be used for intent matching. */
  reciprocal?: Maybe<Scalars['Boolean']>,
};

export type ProposedIntentResponse = {
   __typename?: 'ProposedIntentResponse',
  proposedIntent?: Maybe<ProposedIntent>,
};

/** An agent to which the proposal is to be published.  A proposal can be published to many agents. */
export type ProposedTo = {
   __typename?: 'ProposedTo',
  id: Scalars['ID'],
  /** The proposal that is published to a specific agent. */
  proposed: Proposal,
  /** The agent to which the proposal is published. */
  proposedTo: Agent,
};

export type ProposedToResponse = {
   __typename?: 'ProposedToResponse',
  proposedTo?: Maybe<ProposedTo>,
};

/** Specifies an exchange agreement as part of a recipe. */
export type RecipeExchange = {
   __typename?: 'RecipeExchange',
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a recipe exchange. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type RecipeExchangeCreateParams = {
  /** An informal or formal textual identifier for a recipe exchange. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type RecipeExchangeResponse = {
   __typename?: 'RecipeExchangeResponse',
  recipeExchange?: Maybe<RecipeExchange>,
};

export type RecipeExchangeUpdateParams = {
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a recipe exchange. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

/** The specification of a resource inflow to, or outflow from, a recipe process. */
export type RecipeFlow = {
   __typename?: 'RecipeFlow',
  /** Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action: Action,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The resource definition referenced by this flow in the recipe. */
  recipeFlowResource?: Maybe<RecipeResource>,
  /** Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<RecipeProcess>,
  /** Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<RecipeProcess>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
};

export type RecipeFlowCreateParams = {
  /** (`Action`) Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action: Scalars['ID'],
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`RecipeExchange`) Relates a flow to its exchange agreement in a recipe. */
  recipeClauseOf?: Maybe<Scalars['ID']>,
  /** (`RecipeResource`) The resource definition referenced by this flow in the recipe. */
  recipeFlowResource: Scalars['ID'],
  /** (`RecipeProcess`) Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<Scalars['ID']>,
  /** (`RecipeProcess`) Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * (`ProcessSpecification`) References the ProcessSpecification of the last
   * process the economic resource went through. Stage is used when the last
   * process is important for finding proper resources, such as where the
   * publishing process wants only documents that have gone through the editing process.
 **/
  stage?: Maybe<Scalars['ID']>,
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: Maybe<Scalars['String']>,
};

export type RecipeFlowResponse = {
   __typename?: 'RecipeFlowResponse',
  recipeFlow?: Maybe<RecipeFlow>,
};

export type RecipeFlowUpdateParams = {
  /** (`Action`) Relates a process input or output to a verb, such as consume, produce, work, modify, etc. */
  action?: Maybe<Scalars['ID']>,
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`RecipeResource`) The resource definition referenced by this flow in the recipe. */
  recipeFlowResource?: Maybe<Scalars['ID']>,
  /** (`RecipeProcess`) Relates an input flow to its process in a recipe. */
  recipeInputOf?: Maybe<Scalars['ID']>,
  /** (`RecipeProcess`) Relates an output flow to its process in a recipe. */
  recipeOutputOf?: Maybe<Scalars['ID']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** 
 * (`ProcessSpecification`) References the ProcessSpecification of the last
   * process the economic resource went through. Stage is used when the last
   * process is important for finding proper resources, such as where the
   * publishing process wants only documents that have gone through the editing process.
 **/
  stage?: Maybe<Scalars['ID']>,
  /** The state of the desired economic resource (pass or fail), after coming out of a test or review process. */
  state?: Maybe<Scalars['String']>,
};

/** Specifies a process in a recipe for use in planning from recipe. */
export type RecipeProcess = {
   __typename?: 'RecipeProcess',
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<Duration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a recipe process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** The standard specification or definition of a process. */
  processConformsTo: ProcessSpecification,
};

export type RecipeProcessCreateParams = {
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<IDuration>,
  /** An informal or formal textual identifier for a recipe process. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** (`ProcessSpecification`) The standard specification or definition of a process. */
  processConformsTo: Scalars['ID'],
};

export type RecipeProcessResponse = {
   __typename?: 'RecipeProcessResponse',
  recipeProcess?: Maybe<RecipeProcess>,
};

export type RecipeProcessUpdateParams = {
  /** The planned calendar duration of the process as defined for the recipe batch. */
  hasDuration?: Maybe<IDuration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a recipe process. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization. */
  processClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** (`ProcessSpecification`) The standard specification or definition of a process. */
  processConformsTo: Scalars['ID'],
};

/** Specifies the resource as part of a recipe, for use in planning from recipe. */
export type RecipeResource = {
   __typename?: 'RecipeResource',
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a recipe resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * The primary resource specification or definition of an existing or potential
   * economic resource. A resource will have only one, as this specifies exactly
   * what the resource is.
 **/
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** 
 * Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
 **/
  substitutable?: Maybe<Scalars['Boolean']>,
  /** The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Unit>,
  /** The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Unit>,
};

export type RecipeResourceCreateParams = {
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a recipe resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
 **/
  substitutable?: Maybe<Scalars['Boolean']>,
  /** (`Unit`) The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Scalars['ID']>,
  /** (`Unit`) The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Scalars['ID']>,
};

export type RecipeResourceResponse = {
   __typename?: 'RecipeResourceResponse',
  recipeResource?: Maybe<RecipeResource>,
};

export type RecipeResourceUpdateParams = {
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a recipe resource. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** 
 * (`ResourceSpecification`) The primary resource specification or definition of
   * an existing or potential economic resource. A resource will have only one, as
   * this specifies exactly what the resource is.
 **/
  resourceConformsTo?: Maybe<Scalars['ID']>,
  /** 
 * Defines if any resource of that type can be freely substituted for any other
   * resource of that type when used, consumed, traded, etc.
 **/
  substitutable?: Maybe<Scalars['Boolean']>,
  /** (`Unit`) The unit used for use action on this resource or work action in the recipe. */
  unitOfEffort?: Maybe<Scalars['ID']>,
  /** (`Unit`) The unit of inventory used for this resource in the recipe. */
  unitOfResource?: Maybe<Scalars['ID']>,
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
  /** A url for the resource, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The current user's flag of the resource, if any */
  myFlag?: Maybe<Flag>,
  /** Can you use this without needing an account somewhere? */
  publicAccess?: Maybe<Scalars['Boolean']>,
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** The user who created the resource */
  creator?: Maybe<User>,
  /** The file type */
  mimeType?: Maybe<Scalars['String']>,
  /** The collection this resource is a part of, if any */
  collection?: Maybe<Collection>,
  /** An instance-local UUID identifying the resource */
  id: Scalars['String'],
  /** A link to an external resource */
  content?: Maybe<Content>,
  /** Resource's level */
  level?: Maybe<Scalars['String']>,
  /** Whether the resource is public */
  isPublic: Scalars['Boolean'],
  /** The type of content that may be embeded */
  embedType?: Maybe<Scalars['String']>,
  /** Whether an instance admin has hidden the resource */
  isDisabled: Scalars['Boolean'],
  /** Whether the resource is local to the instance */
  isLocal: Scalars['Boolean'],
  /** The HTML code of content that may be embeded */
  embedCode?: Maybe<Scalars['String']>,
  /** The original resource author */
  author?: Maybe<Scalars['String']>,
  /** When the resource was last updated */
  updatedAt: Scalars['String'],
  /** Resource's subject */
  subject?: Maybe<Scalars['String']>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Description */
  summary?: Maybe<Scalars['String']>,
  /** How can you access it? see https://www.w3.org/wiki/WebSchemas/Accessibility */
  accessibilityFeature?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** The collection or other context this resource is in */
  context?: Maybe<AnyContext>,
  /** Can you use it without paying? */
  freeAccess?: Maybe<Scalars['Boolean']>,
  /** Resource's language */
  language?: Maybe<Scalars['String']>,
  /** The current user's like of the resource, if any */
  myLike?: Maybe<Like>,
  /** Users who like the resource, most recently liked first */
  likers?: Maybe<LikesPage>,
  /** When the resource was created */
  createdAt: Scalars['String'],
  /** Resource's type */
  type?: Maybe<Scalars['String']>,
  /** A name field */
  name: Scalars['String'],
  /** What license is it available under? */
  license?: Maybe<Scalars['String']>,
  /** Flags users have made about the resource, most recently created first */
  flags?: Maybe<FlagsPage>,
};


export type ResourceLikersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type ResourceFlagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type ResourceInput = {
  /** How can you access it? see https://www.w3.org/wiki/WebSchemas/Accessibility */
  accessibilityFeature?: Maybe<Array<Maybe<Scalars['String']>>>,
  author?: Maybe<Scalars['String']>,
  /** The HTML code of content that may be embeded */
  embedCode?: Maybe<Scalars['String']>,
  /** The type of content that may be embeded */
  embedType?: Maybe<Scalars['String']>,
  extraInfo?: Maybe<Scalars['Json']>,
  /** Can you use it without paying? */
  freeAccess?: Maybe<Scalars['Boolean']>,
  language?: Maybe<Scalars['String']>,
  level?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  /** The file type */
  mimeType?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  /** Can you use this without needing an account somewhere? */
  publicAccess?: Maybe<Scalars['Boolean']>,
  subject?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type ResourcesPage = {
   __typename?: 'ResourcesPage',
  edges: Array<Resource>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** 
 * Specification of a kind of resource. Could define a material item, service, digital item, currency account, etc.
 * Used instead of a classification when more information is needed, particularly for recipes.
 **/
export type ResourceSpecification = {
   __typename?: 'ResourceSpecification',
  conformingResources?: Maybe<Array<EconomicResource>>,
  /** The default unit used for use or work. */
  defaultUnitOfEffort?: Maybe<Unit>,
  /** The default unit used for the resource itself. */
  defaultUnitOfResource?: Maybe<Unit>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a type of resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
};

export type ResourceSpecificationCreateParams = {
  /** (`Unit`) The default unit used for use or work. */
  defaultUnitOfEffort?: Maybe<Scalars['ID']>,
  /** (`Unit`) The default unit used for the resource itself. */
  defaultUnitOfResource?: Maybe<Scalars['ID']>,
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a type of resource. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
};

export type ResourceSpecificationResponse = {
   __typename?: 'ResourceSpecificationResponse',
  resourceSpecification?: Maybe<ResourceSpecification>,
};

export type ResourceSpecificationUpdateParams = {
  /** (`Unit`) The default unit used for use or work. */
  defaultUnitOfEffort?: Maybe<Scalars['ID']>,
  /** (`Unit`) The default unit used for the resource itself. */
  defaultUnitOfResource?: Maybe<Scalars['ID']>,
  id: Scalars['ID'],
  /** The uri to an image relevant to the entity, such as a photo, diagram, etc. */
  image?: Maybe<Scalars['URI']>,
  /** An informal or formal textual identifier for a type of resource. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** 
 * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
};

export type RootMutationType = {
   __typename?: 'RootMutationType',
  updateProductBatch?: Maybe<ProductBatchResponse>,
  /** Reset password request */
  resetPasswordRequest?: Maybe<Scalars['Boolean']>,
  updateRecipeExchange?: Maybe<RecipeExchangeResponse>,
  /** Create a resource */
  createResource?: Maybe<Resource>,
  /** Update a organisation */
  updateOrganisation?: Maybe<Organisation>,
  createRegisterEmailDomainAccess: RegisterEmailDomainAccess,
  /** Update a profile */
  updateProfile?: Maybe<Me>,
  deleteCommitment?: Maybe<Scalars['Boolean']>,
  createSpatialThing?: Maybe<SpatialThingResponse>,
  createScenarioDefinition?: Maybe<ScenarioDefinitionResponse>,
  deleteAgentRelationship?: Maybe<Scalars['Boolean']>,
  /** Update profile details */
  updatePerson?: Maybe<PersonResponse>,
  /** Update a community */
  updateCommunity?: Maybe<Community>,
  deletePlan?: Maybe<Scalars['Boolean']>,
  /** 
 * Send a proposal to another agent.
   * @param proposed the (`Proposal`) to send to an involved agent
   * @param proposedTo the (`Agent`) to include in the proposal
 **/
  proposeTo?: Maybe<ProposedToResponse>,
  createCommitment?: Maybe<CommitmentResponse>,
  /** Create a Taggable out of something else. You can also directly use the tag() mutation with a pointer ID instead. */
  makeTaggable?: Maybe<Taggable>,
  deleteRecipeFlow?: Maybe<Scalars['Boolean']>,
  deleteProposal?: Maybe<Scalars['Boolean']>,
  createSettlement?: Maybe<SettlementResponse>,
  /** Follow a community, collection or thread returning the follow */
  createFollow?: Maybe<Follow>,
  /** Create a profile to represent something (which already exists, pass the ID passed as context) in feeds and federation */
  addProfileTo?: Maybe<Profile>,
  /** 
 * Tag a thing (using a Pointer) with one or more Taggables (or Categories, or
   * even Pointers to anything that can become taggable)
 **/
  tag?: Maybe<Scalars['Boolean']>,
  createResourceSpecification?: Maybe<ResourceSpecificationResponse>,
  updateRecipeResource?: Maybe<RecipeResourceResponse>,
  createScenario?: Maybe<ScenarioResponse>,
  createRecipeExchange?: Maybe<RecipeExchangeResponse>,
  createRecipeResource?: Maybe<RecipeResourceResponse>,
  deleteProductBatch?: Maybe<Scalars['Boolean']>,
  createProcessSpecification?: Maybe<ProcessSpecificationResponse>,
  createEconomicEvent?: Maybe<EconomicEventResponse>,
  /** Close a flag */
  resolveFlag?: Maybe<Flag>,
  deleteAppreciation?: Maybe<Scalars['Boolean']>,
  /** Update organization profile details */
  updateOrganization?: Maybe<OrganizationResponse>,
  updateSpatialThing?: Maybe<SpatialThingResponse>,
  createAppreciation?: Maybe<AppreciationResponse>,
  /** Erase record of a person and thus remove them from the collaboration space */
  deletePerson?: Maybe<Scalars['Boolean']>,
  createRegisterEmailAccess: RegisterEmailAccess,
  /** Follow a community, collection or a user by their canonical url returning the follow */
  createFollowByUrl?: Maybe<Follow>,
  updateProcessSpecification?: Maybe<ProcessSpecificationResponse>,
  deleteProcessSpecification?: Maybe<Scalars['Boolean']>,
  /** Confirm email. Returns a login token. */
  confirmEmail?: Maybe<AuthPayload>,
  updateProposal?: Maybe<ProposalResponse>,
  /** Copy a resource */
  copyResource?: Maybe<Resource>,
  deleteScenario?: Maybe<Scalars['Boolean']>,
  createAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>,
  /** Sends an email invite, and adds the email to invite list for private instances */
  sendInvite?: Maybe<Scalars['Boolean']>,
  updateResourceSpecification?: Maybe<ResourceSpecificationResponse>,
  /** Create a character to represent something (which already exists, pass the ID passed as context) in feeds and federation */
  characterise?: Maybe<Character>,
  createClaim?: Maybe<ClaimResponse>,
  createProductBatch?: Maybe<ProductBatchResponse>,
  /** Registers a new organization (group agent) with the collaboration space */
  createOrganization?: Maybe<OrganizationResponse>,
  updateAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>,
  createFulfillment?: Maybe<FulfillmentResponse>,
  createProcess?: Maybe<ProcessResponse>,
  deleteEconomicEvent?: Maybe<Scalars['Boolean']>,
  deleteEconomicResource?: Maybe<Scalars['Boolean']>,
  /** Delete more or less anything */
  delete?: Maybe<AnyContext>,
  /** Modify a comment */
  updateComment?: Maybe<Comment>,
  /** Log out */
  deleteSession?: Maybe<Scalars['Boolean']>,
  /** Reply to an existing comment in a thread */
  createReply?: Maybe<Comment>,
  updateEconomicResource?: Maybe<EconomicResourceResponse>,
  /** Like a comment, collection, or resource returning the like */
  createLike?: Maybe<Like>,
  updateScenario?: Maybe<ScenarioResponse>,
  deleteScenarioDefinition?: Maybe<Scalars['Boolean']>,
  /** Creates a new offer for the logged in user, will ignore any provider specified. */
  createOffer?: Maybe<IntentResponse>,
  deleteIntent?: Maybe<Scalars['Boolean']>,
  updateAgentRelationship?: Maybe<AgentRelationshipResponse>,
  deleteFulfillment?: Maybe<Scalars['Boolean']>,
  /** Create a organisation */
  createOrganisation?: Maybe<Organisation>,
  updateEconomicEvent?: Maybe<EconomicEventResponse>,
  /** Creates a new need for the logged in user, will ignore any receiver specified. */
  createNeed?: Maybe<IntentResponse>,
  deleteResourceSpecification?: Maybe<Scalars['Boolean']>,
  createRecipeFlow?: Maybe<RecipeFlowResponse>,
  deleteSatisfaction?: Maybe<Scalars['Boolean']>,
  updateSettlement?: Maybe<SettlementResponse>,
  updateClaim?: Maybe<ClaimResponse>,
  updateCommitment?: Maybe<CommitmentResponse>,
  updateUnit?: Maybe<UnitResponse>,
  /** Deactivate a remote user, blocking further activities from it */
  deactivateUser?: Maybe<User>,
  createProposal?: Maybe<ProposalResponse>,
  /** Create a new Category */
  createCategory?: Maybe<Category>,
  deleteRecipeProcess?: Maybe<Scalars['Boolean']>,
  /** Fetch metadata from webpage */
  fetchWebMetadata?: Maybe<WebMetadata>,
  /** Reset password */
  resetPassword?: Maybe<AuthPayload>,
  deleteRegisterEmailDomainAccess?: Maybe<RegisterEmailDomainAccess>,
  updateProcess?: Maybe<ProcessResponse>,
  deleteRegisterEmailAccess?: Maybe<RegisterEmailAccess>,
  deleteProposedIntent?: Maybe<Scalars['Boolean']>,
  /** Log in, works with both username and email */
  createSession?: Maybe<AuthPayload>,
  deleteSettlement?: Maybe<Scalars['Boolean']>,
  updateAgreement?: Maybe<AgreementResponse>,
  createUnit?: Maybe<UnitResponse>,
  /** Erase record of an organization and thus remove it from the collaboration space */
  deleteOrganization?: Maybe<Scalars['Boolean']>,
  deleteClaim?: Maybe<Scalars['Boolean']>,
  createRecipeProcess?: Maybe<RecipeProcessResponse>,
  createIntent?: Maybe<IntentResponse>,
  updateFulfillment?: Maybe<FulfillmentResponse>,
  createPlan?: Maybe<PlanResponse>,
  createAgreement?: Maybe<AgreementResponse>,
  /** Update a collection */
  updateCollection?: Maybe<Collection>,
  updateScenarioDefinition?: Maybe<ScenarioDefinitionResponse>,
  createSatisfaction?: Maybe<SatisfactionResponse>,
  updateAppreciation?: Maybe<AppreciationResponse>,
  createAgentRelationship?: Maybe<AgentRelationshipResponse>,
  updateIntent?: Maybe<IntentResponse>,
  deleteRecipeResource?: Maybe<Scalars['Boolean']>,
  /** Create a new thread, within an optional context */
  createThread?: Maybe<Comment>,
  /** Create a user */
  createUser?: Maybe<Me>,
  deleteUnit?: Maybe<Scalars['Boolean']>,
  updateSatisfaction?: Maybe<SatisfactionResponse>,
  updatePlan?: Maybe<PlanResponse>,
  /** Create a collection */
  createCollection?: Maybe<Collection>,
  /** Deletes my account! */
  deleteSelf?: Maybe<Scalars['Boolean']>,
  deleteAgentRelationshipRole?: Maybe<Scalars['Boolean']>,
  /** Registers a new (human) person with the collaboration space */
  createPerson?: Maybe<PersonResponse>,
  /** 
 * Include an existing intent as part of a proposal.
   * @param publishedIn the (`Proposal`) to include the intent in
   * @param publishes the (`Intent`) to include as part of the proposal
 **/
  proposeIntent?: Maybe<ProposedIntentResponse>,
  /** Create a community */
  createCommunity?: Maybe<Community>,
  /** Feature a community, or collection, returning the feature */
  createFeature?: Maybe<Feature>,
  deleteSpatialThing?: Maybe<Scalars['Boolean']>,
  deleteRecipeExchange?: Maybe<Scalars['Boolean']>,
  /** Flag a user, community, collection, resource or comment, returning the flag */
  createFlag?: Maybe<Flag>,
  updateRecipeProcess?: Maybe<RecipeProcessResponse>,
  /** Update a resource */
  updateResource?: Maybe<Resource>,
  deleteProposedTo?: Maybe<Scalars['Boolean']>,
  updateRecipeFlow?: Maybe<RecipeFlowResponse>,
  deleteProcess?: Maybe<Scalars['Boolean']>,
  /** Create a Category to represents this taxonomy_tag in feeds and federation */
  ingestTaxonomyTag?: Maybe<Taggable>,
  /** Update a category */
  updateCategory?: Maybe<Category>,
  deleteAgreement?: Maybe<Scalars['Boolean']>,
};


export type RootMutationTypeUpdateProductBatchArgs = {
  productBatch: ProductBatchUpdateParams
};


export type RootMutationTypeResetPasswordRequestArgs = {
  email: Scalars['String']
};


export type RootMutationTypeUpdateRecipeExchangeArgs = {
  recipeExchange?: Maybe<RecipeExchangeUpdateParams>
};


export type RootMutationTypeCreateResourceArgs = {
  content: UploadInput,
  contextId?: Maybe<Scalars['String']>,
  icon?: Maybe<UploadInput>,
  resource: ResourceInput
};


export type RootMutationTypeUpdateOrganisationArgs = {
  organisation: OrganisationUpdateInput,
  organisationId: Scalars['String']
};


export type RootMutationTypeCreateRegisterEmailDomainAccessArgs = {
  domain: Scalars['String']
};


export type RootMutationTypeUpdateProfileArgs = {
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>,
  profile: UpdateProfileInput
};


export type RootMutationTypeDeleteCommitmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateSpatialThingArgs = {
  inScopeOf?: Maybe<Scalars['ID']>,
  spatialThing: SpatialThingCreateParams
};


export type RootMutationTypeCreateScenarioDefinitionArgs = {
  plan: ScenarioDefinitionCreateParams
};


export type RootMutationTypeDeleteAgentRelationshipArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdatePersonArgs = {
  person: AgentUpdateParams
};


export type RootMutationTypeUpdateCommunityArgs = {
  community: CommunityUpdateInput,
  communityId: Scalars['String'],
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>
};


export type RootMutationTypeDeletePlanArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeProposeToArgs = {
  proposed: Scalars['ID'],
  proposedTo: Scalars['ID']
};


export type RootMutationTypeCreateCommitmentArgs = {
  commitment?: Maybe<CommitmentCreateParams>
};


export type RootMutationTypeMakeTaggableArgs = {
  contextId?: Maybe<Scalars['String']>
};


export type RootMutationTypeDeleteRecipeFlowArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProposalArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateSettlementArgs = {
  settlement: SettlementCreateParams
};


export type RootMutationTypeCreateFollowArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeAddProfileToArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeTagArgs = {
  taggables: Array<Maybe<Scalars['String']>>,
  thing: Scalars['String']
};


export type RootMutationTypeCreateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationCreateParams>
};


export type RootMutationTypeUpdateRecipeResourceArgs = {
  recipeResource?: Maybe<RecipeResourceUpdateParams>
};


export type RootMutationTypeCreateScenarioArgs = {
  plan: ScenarioCreateParams
};


export type RootMutationTypeCreateRecipeExchangeArgs = {
  recipeExchange?: Maybe<RecipeExchangeCreateParams>
};


export type RootMutationTypeCreateRecipeResourceArgs = {
  recipeResource?: Maybe<RecipeResourceCreateParams>
};


export type RootMutationTypeDeleteProductBatchArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateProcessSpecificationArgs = {
  processSpecification?: Maybe<ProcessSpecificationCreateParams>
};


export type RootMutationTypeCreateEconomicEventArgs = {
  event: EconomicEventCreateParams,
  newInventoriedResource?: Maybe<EconomicResourceCreateParams>
};


export type RootMutationTypeResolveFlagArgs = {
  flagId: Scalars['String']
};


export type RootMutationTypeDeleteAppreciationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdateOrganizationArgs = {
  organization: AgentUpdateParams
};


export type RootMutationTypeUpdateSpatialThingArgs = {
  spatialThing: SpatialThingUpdateParams
};


export type RootMutationTypeCreateAppreciationArgs = {
  appreciation: AppreciationCreateParams
};


export type RootMutationTypeDeletePersonArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateRegisterEmailAccessArgs = {
  email: Scalars['String']
};


export type RootMutationTypeCreateFollowByUrlArgs = {
  url: Scalars['String']
};


export type RootMutationTypeUpdateProcessSpecificationArgs = {
  processSpecification?: Maybe<ProcessSpecificationUpdateParams>
};


export type RootMutationTypeDeleteProcessSpecificationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String']
};


export type RootMutationTypeUpdateProposalArgs = {
  proposal?: Maybe<ProposalUpdateParams>
};


export type RootMutationTypeCopyResourceArgs = {
  contextId: Scalars['String'],
  resourceId: Scalars['String']
};


export type RootMutationTypeDeleteScenarioArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleCreateParams>
};


export type RootMutationTypeSendInviteArgs = {
  email: Scalars['String']
};


export type RootMutationTypeUpdateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationUpdateParams>
};


export type RootMutationTypeCharacteriseArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeCreateClaimArgs = {
  claim: ClaimCreateParams
};


export type RootMutationTypeCreateProductBatchArgs = {
  productBatch: ProductBatchCreateParams
};


export type RootMutationTypeCreateOrganizationArgs = {
  organization: AgentCreateParams
};


export type RootMutationTypeUpdateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleUpdateParams>
};


export type RootMutationTypeCreateFulfillmentArgs = {
  fulfillment: FulfillmentCreateParams
};


export type RootMutationTypeCreateProcessArgs = {
  process: ProcessCreateParams
};


export type RootMutationTypeDeleteEconomicEventArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteEconomicResourceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeUpdateCommentArgs = {
  comment: CommentInput,
  commentId: Scalars['String']
};


export type RootMutationTypeCreateReplyArgs = {
  comment: CommentInput,
  inReplyToId: Scalars['String'],
  threadId: Scalars['String']
};


export type RootMutationTypeUpdateEconomicResourceArgs = {
  resource: EconomicResourceUpdateParams
};


export type RootMutationTypeCreateLikeArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeUpdateScenarioArgs = {
  plan: ScenarioUpdateParams
};


export type RootMutationTypeDeleteScenarioDefinitionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateOfferArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeDeleteIntentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdateAgentRelationshipArgs = {
  relationship: AgentRelationshipUpdateParams
};


export type RootMutationTypeDeleteFulfillmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateOrganisationArgs = {
  contextId?: Maybe<Scalars['String']>,
  organisation: OrganisationInput
};


export type RootMutationTypeUpdateEconomicEventArgs = {
  event: EconomicEventUpdateParams
};


export type RootMutationTypeCreateNeedArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeDeleteResourceSpecificationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowCreateParams>
};


export type RootMutationTypeDeleteSatisfactionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdateSettlementArgs = {
  s0ettlement: SettlementUpdateParams
};


export type RootMutationTypeUpdateClaimArgs = {
  claim: ClaimUpdateParams
};


export type RootMutationTypeUpdateCommitmentArgs = {
  commitment?: Maybe<CommitmentUpdateParams>
};


export type RootMutationTypeUpdateUnitArgs = {
  unit: UnitUpdateParams
};


export type RootMutationTypeDeactivateUserArgs = {
  id: Scalars['String']
};


export type RootMutationTypeCreateProposalArgs = {
  proposal?: Maybe<ProposalCreateParams>
};


export type RootMutationTypeCreateCategoryArgs = {
  category?: Maybe<CategoryInput>,
  character?: Maybe<CharacterInput>,
  profile?: Maybe<ProfileInput>
};


export type RootMutationTypeDeleteRecipeProcessArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeFetchWebMetadataArgs = {
  url: Scalars['String']
};


export type RootMutationTypeResetPasswordArgs = {
  password: Scalars['String'],
  token: Scalars['String']
};


export type RootMutationTypeDeleteRegisterEmailDomainAccessArgs = {
  id: Scalars['String']
};


export type RootMutationTypeUpdateProcessArgs = {
  process: ProcessUpdateParams
};


export type RootMutationTypeDeleteRegisterEmailAccessArgs = {
  id: Scalars['String']
};


export type RootMutationTypeDeleteProposedIntentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateSessionArgs = {
  email?: Maybe<Scalars['String']>,
  login?: Maybe<Scalars['String']>,
  password: Scalars['String']
};


export type RootMutationTypeDeleteSettlementArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdateAgreementArgs = {
  agreement?: Maybe<AgreementUpdateParams>
};


export type RootMutationTypeCreateUnitArgs = {
  unit: UnitCreateParams
};


export type RootMutationTypeDeleteOrganizationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteClaimArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessCreateParams>
};


export type RootMutationTypeCreateIntentArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeUpdateFulfillmentArgs = {
  fulfillment: FulfillmentUpdateParams
};


export type RootMutationTypeCreatePlanArgs = {
  plan: PlanCreateParams
};


export type RootMutationTypeCreateAgreementArgs = {
  agreement?: Maybe<AgreementCreateParams>
};


export type RootMutationTypeUpdateCollectionArgs = {
  collection: CollectionUpdateInput,
  collectionId: Scalars['String'],
  icon?: Maybe<UploadInput>
};


export type RootMutationTypeUpdateScenarioDefinitionArgs = {
  plan: ScenarioDefinitionUpdateParams
};


export type RootMutationTypeCreateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionCreateParams>
};


export type RootMutationTypeUpdateAppreciationArgs = {
  appreciation: AppreciationUpdateParams
};


export type RootMutationTypeCreateAgentRelationshipArgs = {
  relationship: AgentRelationshipCreateParams
};


export type RootMutationTypeUpdateIntentArgs = {
  intent?: Maybe<IntentUpdateParams>
};


export type RootMutationTypeDeleteRecipeResourceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateThreadArgs = {
  comment: CommentInput,
  contextId?: Maybe<Scalars['String']>
};


export type RootMutationTypeCreateUserArgs = {
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>,
  user: RegistrationInput
};


export type RootMutationTypeDeleteUnitArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionUpdateParams>
};


export type RootMutationTypeUpdatePlanArgs = {
  plan: PlanUpdateParams
};


export type RootMutationTypeCreateCollectionArgs = {
  collection: CollectionInput,
  contextId?: Maybe<Scalars['String']>,
  icon?: Maybe<UploadInput>
};


export type RootMutationTypeDeleteSelfArgs = {
  iAmSure: Scalars['Boolean']
};


export type RootMutationTypeDeleteAgentRelationshipRoleArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreatePersonArgs = {
  person: AgentCreateParams
};


export type RootMutationTypeProposeIntentArgs = {
  publishedIn: Scalars['ID'],
  publishes: Scalars['ID'],
  reciprocal?: Maybe<Scalars['Boolean']>
};


export type RootMutationTypeCreateCommunityArgs = {
  community: CommunityInput,
  contextId?: Maybe<Scalars['String']>,
  icon?: Maybe<UploadInput>,
  image?: Maybe<UploadInput>
};


export type RootMutationTypeCreateFeatureArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteSpatialThingArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteRecipeExchangeArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeCreateFlagArgs = {
  contextId: Scalars['String'],
  message: Scalars['String']
};


export type RootMutationTypeUpdateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessUpdateParams>
};


export type RootMutationTypeUpdateResourceArgs = {
  content?: Maybe<UploadInput>,
  icon?: Maybe<UploadInput>,
  resource: ResourceInput,
  resourceId: Scalars['String']
};


export type RootMutationTypeDeleteProposedToArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeUpdateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowUpdateParams>
};


export type RootMutationTypeDeleteProcessArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeIngestTaxonomyTagArgs = {
  taxonomyTagId?: Maybe<Scalars['Int']>
};


export type RootMutationTypeUpdateCategoryArgs = {
  category?: Maybe<CategoryInput>,
  categoryId?: Maybe<Scalars['ID']>,
  character?: Maybe<CharacterInput>,
  profile?: Maybe<ProfileInput>
};


export type RootMutationTypeDeleteAgreementArgs = {
  id: Scalars['ID']
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  proposals?: Maybe<Array<Proposal>>,
  plan?: Maybe<Plan>,
  economicResource?: Maybe<EconomicResource>,
  /** Get paginated list of economic resources */
  economicResourcesPages: EconomicResourcePage,
  /** Get list of categories we know about */
  categories: CategoriesPage,
  /** Get a taxonomy_tag by ID  */
  taxonomyTag?: Maybe<TaxonomyTag>,
  commitments?: Maybe<Array<Commitment>>,
  /** Get list of profiles. You usually would query for a type associated with profile, rather than profiles directly. */
  profiles: ProfilesPage,
  agreements?: Maybe<Array<Agreement>>,
  /** Get list of organisations, most recent activity first */
  organisations: OrganisationsPage,
  /** Get paginated list of economic events */
  economicEventsPages: EconomicEventPage,
  /** Loads all agents publicly registered within this collaboration space */
  agents?: Maybe<Array<Agent>>,
  /** Loads all people who have publicly registered with this collaboration space. */
  people?: Maybe<Array<Person>>,
  recipeProcess?: Maybe<RecipeProcess>,
  /** Get paginated list of proposals */
  proposalsPages: ProposalsPage,
  recipeFlow?: Maybe<RecipeFlow>,
  unitsPages: UnitsPage,
  recipeProcesses?: Maybe<Array<RecipeProcess>>,
  activity?: Maybe<Activity>,
  measures?: Maybe<Array<Measure>>,
  /** Get paginated list of processes */
  processesPages: ProcessPage,
  /** TEMPORARY - get filtered but non-paginated list of proposals */
  proposalsFiltered?: Maybe<Array<Maybe<Proposal>>>,
  claims?: Maybe<Array<Claim>>,
  processSpecifications?: Maybe<Array<ProcessSpecification>>,
  recipeResources?: Maybe<Array<RecipeResource>>,
  /** Get a comment by its id */
  comment?: Maybe<Comment>,
  /** Retrieve details of an agent relationship by its ID */
  agentRelationship?: Maybe<AgentRelationship>,
  scenarioDefinition?: Maybe<ScenarioDefinition>,
  /** Get a collection by id */
  collection?: Maybe<Collection>,
  /** Get a user, by either username or ID */
  user?: Maybe<User>,
  settlement?: Maybe<Settlement>,
  claim?: Maybe<Claim>,
  spatialThing?: Maybe<SpatialThing>,
  /** Find an agent (person or organization) by their ID */
  agent?: Maybe<Agent>,
  /** Loads details of the currently authenticated REA agent */
  myAgent?: Maybe<Agent>,
  spatialThings?: Maybe<Array<SpatialThing>>,
  /** Get list of languages we know about */
  languages: LanguagesPage,
  scenarios?: Maybe<Array<Scenario>>,
  intents?: Maybe<Array<Intent>>,
  /** TEMPORARY - get filtered but non-paginated list of resources */
  economicResourcesFiltered?: Maybe<Array<Maybe<EconomicResource>>>,
  actions?: Maybe<Array<Action>>,
  productBatches?: Maybe<Array<ProductBatch>>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  scenario?: Maybe<Scenario>,
  commitment?: Maybe<Commitment>,
  /** Find a person by their ID */
  person?: Maybe<Person>,
  recipeExchange?: Maybe<RecipeExchange>,
  economicResources?: Maybe<Array<EconomicResource>>,
  /** Loads all organizations publicly registered within this collaboration space */
  organizations?: Maybe<Array<Organization>>,
  /** Fetch a like by ID */
  like?: Maybe<Like>,
  country?: Maybe<Country>,
  resourceSpecification?: Maybe<ResourceSpecification>,
  /** Get a community */
  community?: Maybe<Community>,
  /** Get paginated list of organizations */
  organizationsPages: AgentsPage,
  /** Get paginated list of intents */
  intentsPages: IntentsPage,
  /** Check if a user exists with a username */
  usernameAvailable: Scalars['Boolean'],
  /** Get paginated list of people */
  peoplePages: AgentsPage,
  productBatch?: Maybe<ProductBatch>,
  agreement?: Maybe<Agreement>,
  /** Get a resource */
  resource?: Maybe<Resource>,
  /** Get paginated list of active offers (intents with no receiver) */
  offersPages: IntentsPage,
  measure?: Maybe<Measure>,
  /** Find an organization (group) agent by its ID */
  organization?: Maybe<Organization>,
  fulfillments?: Maybe<Array<Fulfillment>>,
  /** Get a character by id. You usually would query for a type associated with character, rather than characters directly. */
  character?: Maybe<Character>,
  economicEvent?: Maybe<EconomicEvent>,
  processes?: Maybe<Array<Process>>,
  spatialThingsPages: SpatialThingsPage,
  registerEmailAccesses: RegisterEmailAccessesPage,
  /** Retrieve details of all the relationships between all agents registered in this collaboration space */
  agentRelationships?: Maybe<Array<AgentRelationship>>,
  process?: Maybe<Process>,
  /** TEMPORARY - get filtered but non-paginated list of intents */
  intentsFiltered?: Maybe<Array<Maybe<Intent>>>,
  scenarioDefinitions?: Maybe<Array<ScenarioDefinition>>,
  plans?: Maybe<Array<Plan>>,
  /** Retrieves a follow by id */
  follow?: Maybe<Follow>,
  /** Retrieve all possible kinds of associations that agents may have with one another in this collaboration space */
  agentRelationshipRoles?: Maybe<Array<AgentRelationshipRole>>,
  fulfillment?: Maybe<Fulfillment>,
  registerEmailDomainAccesses: RegisterEmailDomainAccessesPage,
  /** Get list of characters. You usually would query for a type associated with character, rather than characters directly. */
  characters: CharactersPage,
  /** Get list of known users */
  users: UsersPage,
  action?: Maybe<Action>,
  feature?: Maybe<Feature>,
  satisfaction?: Maybe<Satisfaction>,
  recipeFlows?: Maybe<Array<RecipeFlow>>,
  settlements?: Maybe<Array<Settlement>>,
  measuresPages: MeasuresPage,
  processSpecification?: Maybe<ProcessSpecification>,
  recipeResource?: Maybe<RecipeResource>,
  /** Get a taggable by ID  */
  taggable?: Maybe<Taggable>,
  /** Get a thread */
  thread?: Maybe<Thread>,
  recipeExchanges?: Maybe<Array<RecipeExchange>>,
  /** Get a profile by id. You usually would query for a type associated with profile, rather than profiles directly. */
  profile?: Maybe<Profile>,
  /** Retrieve details of an agent relationship role by its ID */
  agentRelationshipRole?: Maybe<AgentRelationshipRole>,
  language?: Maybe<Language>,
  units?: Maybe<Array<Unit>>,
  resourceSpecifications?: Maybe<Array<ResourceSpecification>>,
  economicEventsFiltered?: Maybe<Array<EconomicEvent>>,
  features?: Maybe<FeaturesPage>,
  /** Get list of communities, most followed first */
  communities: CommunitiesPage,
  satisfactions?: Maybe<Array<Satisfaction>>,
  /** Get my user */
  me?: Maybe<Me>,
  flag?: Maybe<Flag>,
  /** Get a organisation by id */
  organisation?: Maybe<Organisation>,
  /** Get list of countries we know about */
  countries: CountriesPages,
  /** Get a category by ID  */
  category?: Maybe<Category>,
  intent?: Maybe<Intent>,
  /** Get paginated list of active needs (intents with no provider) */
  needsPages: IntentsPage,
  /** Get list of collections, most recent activity first */
  collections: CollectionsPage,
  /** Get list of taxonomy_tags we know about */
  taxonomyTags: TaxonomyTagsPage,
  flags?: Maybe<FlagsPage>,
  unit?: Maybe<Unit>,
  proposal?: Maybe<Proposal>,
  /** A logical object for the local instance */
  instance?: Maybe<Instance>,
};


export type RootQueryTypeProposalsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypePlanArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourcesPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCategoriesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeTaxonomyTagArgs = {
  pointerId?: Maybe<Scalars['String']>,
  tagId?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCommitmentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProfilesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  facets?: Maybe<Array<Scalars['String']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeAgreementsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeOrganisationsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeEconomicEventsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeAgentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypePeopleArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeProcessArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProposalsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeRecipeFlowArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUnitsPagesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeRecipeProcessesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeActivityArgs = {
  activityId: Scalars['String']
};


export type RootQueryTypeMeasuresArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessesPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeProposalsFilteredArgs = {
  agent?: Maybe<Array<Maybe<Scalars['ID']>>>,
  atLocation?: Maybe<Array<Maybe<Scalars['ID']>>>,
  geolocation?: Maybe<GeolocationFilters>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootQueryTypeClaimsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessSpecificationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeResourcesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommentArgs = {
  commentId: Scalars['String']
};


export type RootQueryTypeAgentRelationshipArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenarioDefinitionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCollectionArgs = {
  collectionId: Scalars['String']
};


export type RootQueryTypeUserArgs = {
  userId?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>
};


export type RootQueryTypeSettlementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeClaimArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeLanguagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeScenariosArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeIntentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourcesFilteredArgs = {
  agent?: Maybe<Array<Maybe<Scalars['ID']>>>,
  currentLocation?: Maybe<Array<Maybe<Scalars['ID']>>>,
  geolocation?: Maybe<GeolocationFilters>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>,
  state?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootQueryTypeProductBatchesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicEventsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenarioArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommitmentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypePersonArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeExchangeArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourcesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeOrganizationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeLikeArgs = {
  likeId: Scalars['String']
};


export type RootQueryTypeCountryArgs = {
  countryId: Scalars['String']
};


export type RootQueryTypeResourceSpecificationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommunityArgs = {
  communityId: Scalars['String']
};


export type RootQueryTypeOrganizationsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeIntentsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeUsernameAvailableArgs = {
  username: Scalars['String']
};


export type RootQueryTypePeoplePagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeProductBatchArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgreementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceArgs = {
  resourceId: Scalars['String']
};


export type RootQueryTypeOffersPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeMeasureArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeOrganizationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFulfillmentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCharacterArgs = {
  characterId: Scalars['String']
};


export type RootQueryTypeEconomicEventArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingsPagesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeRegisterEmailAccessesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeAgentRelationshipsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeIntentsFilteredArgs = {
  action?: Maybe<Array<Maybe<Scalars['ID']>>>,
  agent?: Maybe<Array<Maybe<Scalars['ID']>>>,
  atLocation?: Maybe<Array<Maybe<Scalars['ID']>>>,
  geolocation?: Maybe<GeolocationFilters>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>,
  provider?: Maybe<Array<Maybe<Scalars['ID']>>>,
  receiver?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootQueryTypeScenarioDefinitionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypePlansArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFollowArgs = {
  followId: Scalars['String']
};


export type RootQueryTypeAgentRelationshipRolesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFulfillmentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRegisterEmailDomainAccessesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCharactersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  facets?: Maybe<Array<Scalars['String']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeUsersArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeActionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFeatureArgs = {
  featureId: Scalars['String']
};


export type RootQueryTypeSatisfactionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeFlowsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSettlementsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeMeasuresPagesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeProcessSpecificationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeResourceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeTaggableArgs = {
  id?: Maybe<Scalars['String']>
};


export type RootQueryTypeThreadArgs = {
  threadId: Scalars['String']
};


export type RootQueryTypeRecipeExchangesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProfileArgs = {
  profileId: Scalars['String']
};


export type RootQueryTypeAgentRelationshipRoleArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeLanguageArgs = {
  languageId: Scalars['String']
};


export type RootQueryTypeUnitsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceSpecificationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicEventsFilteredArgs = {
  action?: Maybe<Scalars['ID']>,
  endDate?: Maybe<Scalars['String']>,
  providerId?: Maybe<Scalars['ID']>,
  receiverId?: Maybe<Scalars['ID']>,
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  startDate?: Maybe<Scalars['String']>
};


export type RootQueryTypeFeaturesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCommunitiesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeSatisfactionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFlagArgs = {
  flagId: Scalars['String']
};


export type RootQueryTypeOrganisationArgs = {
  organisationId: Scalars['String']
};


export type RootQueryTypeCountriesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCategoryArgs = {
  categoryId?: Maybe<Scalars['String']>
};


export type RootQueryTypeIntentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeNeedsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCollectionsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeTaxonomyTagsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeFlagsArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeUnitArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProposalArgs = {
  id?: Maybe<Scalars['ID']>
};

/** 
 * Represents many-to-many relationships between intents and commitments or events
 * that partially or full satisfy one or more intents.
 **/
export type Satisfaction = {
   __typename?: 'Satisfaction',
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: EventOrCommitment,
  /** An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Intent,
};

export type SatisfactionCreateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`Commitment`|`EconomicEvent`) A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy: Scalars['ID'],
  /** (`Intent`) An intent satisfied fully or partially by an economic event or commitment. */
  satisfies: Scalars['ID'],
};

export type SatisfactionResponse = {
   __typename?: 'SatisfactionResponse',
  satisfaction?: Maybe<Satisfaction>,
};

export type SatisfactionUpdateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`Commitment`|`EconomicEvent`) A commitment or economic event fully or partially satisfying an intent. */
  satisfiedBy?: Maybe<Scalars['ID']>,
  /** (`Intent`) An intent satisfied fully or partially by an economic event or commitment. */
  satisfies?: Maybe<Scalars['ID']>,
};

/** An estimated or analytical logical collection of higher level processes used for budgeting, analysis, plan refinement, etc. */
export type Scenario = {
   __typename?: 'Scenario',
  /** The scenario definition for this scenario, for example yearly budget. */
  definedAs?: Maybe<ScenarioDefinition>,
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** An informal or formal textual identifier for a scenario. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scenario>,
};

export type ScenarioCreateParams = {
  /** (`ScenarioDefinition`) The scenario definition for this scenario, for example yearly budget. */
  definedAs: Scalars['ID'],
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** An informal or formal textual identifier for a scenario. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** The type definition of one or more scenarios, such as Yearly Budget. */
export type ScenarioDefinition = {
   __typename?: 'ScenarioDefinition',
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<Duration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a scenario definition. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ScenarioDefinitionCreateParams = {
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<IDuration>,
  /** An informal or formal textual identifier for a scenario definition. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ScenarioDefinitionResponse = {
   __typename?: 'ScenarioDefinitionResponse',
  scenarioDefinition?: Maybe<ScenarioDefinition>,
};

export type ScenarioDefinitionUpdateParams = {
  /** The duration of the scenario, often an accounting period. */
  hasDuration?: Maybe<IDuration>,
  id: Scalars['ID'],
  /** An informal or formal textual identifier for a scenario definition. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ScenarioResponse = {
   __typename?: 'ScenarioResponse',
  scenario?: Maybe<Scenario>,
};

export type ScenarioUpdateParams = {
  /** (`ScenarioDefinition`) The scenario definition for this scenario, for example yearly budget. */
  definedAs: Scalars['ID'],
  /** The beginning date/time of the scenario, often the beginning of an accounting period. */
  hasBeginning?: Maybe<Scalars['DateTime']>,
  /** The ending date/time of the scenario, often the end of an accounting period. */
  hasEnd?: Maybe<Scalars['DateTime']>,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** An informal or formal textual identifier for a scenario. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Scenario`) This scenario refines another scenario, often as time moves closer or for more detail. */
  refinementOf?: Maybe<Scalars['ID']>,
};

/** Represents many-to-many relationships between claim and economic events that fully or partially settle one or more claims. */
export type Settlement = {
   __typename?: 'Settlement',
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<Measure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<Measure>,
  /** The economic event fully or partially settling a claim. */
  settledBy: EconomicEvent,
  /** A claim which is fully or partially settled by an economic event. */
  settles: Claim,
};

export type SettlementCreateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event fully or partially settling a claim. */
  settledBy: Scalars['ID'],
  /** (`Claim`) A claim which is fully or partially settled by an economic event. */
  settles: Scalars['ID'],
};

export type SettlementResponse = {
   __typename?: 'SettlementResponse',
  settlement?: Maybe<Settlement>,
};

export type SettlementUpdateParams = {
  /** 
 * The amount and unit of the work or use or citation effort-based action. This
   * is often a time duration, but also could be cycle counts or other measures of
   * effort or usefulness.
 **/
  effortQuantity?: Maybe<IMeasure>,
  id: Scalars['ID'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** The amount and unit of the economic resource counted or inventoried. */
  resourceQuantity?: Maybe<IMeasure>,
  /** (`EconomicEvent`) The economic event fully or partially settling a claim. */
  settledBy?: Maybe<Scalars['ID']>,
  /** (`Claim`) A claim which is fully or partially settled by an economic event. */
  settles?: Maybe<Scalars['ID']>,
};

/** A physical mappable location. */
export type SpatialThing = {
   __typename?: 'SpatialThing',
  /** Altitude. */
  alt?: Maybe<Scalars['Float']>,
  canonicalUrl?: Maybe<Scalars['String']>,
  displayUsername?: Maybe<Scalars['String']>,
  geom?: Maybe<Scalars['Json']>,
  id: Scalars['ID'],
  inScopeOf?: Maybe<AnyContext>,
  /** Latitude. */
  lat?: Maybe<Scalars['Float']>,
  /** Longitude. */
  long?: Maybe<Scalars['Float']>,
  /** An address that will be recognized as mappable by mapping software. */
  mappableAddress?: Maybe<Scalars['String']>,
  /** An informal or formal textual identifier for a location. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type SpatialThingCreateParams = {
  /** Altitude. */
  alt?: Maybe<Scalars['Float']>,
  /** Latitude. */
  lat?: Maybe<Scalars['Float']>,
  /** Longitude. */
  long?: Maybe<Scalars['Float']>,
  /** An address that will be recognized as mappable by mapping software. */
  mappableAddress?: Maybe<Scalars['String']>,
  /** An informal or formal textual identifier for a location. Does not imply uniqueness. */
  name: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type SpatialThingResponse = {
   __typename?: 'SpatialThingResponse',
  spatialThing?: Maybe<SpatialThing>,
};

export type SpatialThingsPage = {
   __typename?: 'SpatialThingsPage',
  edges?: Maybe<Array<Maybe<SpatialThing>>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type SpatialThingUpdateParams = {
  /** Altitude. */
  alt?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  /** Latitude. */
  lat?: Maybe<Scalars['Float']>,
  /** Longitude. */
  long?: Maybe<Scalars['Float']>,
  /** An address that will be recognized as mappable by mapping software. */
  mappableAddress?: Maybe<Scalars['String']>,
  /** An informal or formal textual identifier for a location. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

/** A taggable could be a category or hashtag or user or community or etc */
export type Taggable = {
   __typename?: 'Taggable',
  /** The taggable object, like a category or community */
  context?: Maybe<AnyContext>,
  facet?: Maybe<Scalars['String']>,
  /** The numeric primary key of the taggable */
  id?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  prefix?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  /** Things that were tagged with this tag */
  things?: Maybe<Array<Maybe<AnyContext>>>,
};

export type TaxonomyTag = {
   __typename?: 'TaxonomyTag',
  /** The taggable Category that we can use in items, feeds and federation */
  category?: Maybe<Category>,
  /** List of child taxonomy_tag (in a tree-based taxonomy) */
  childrenTaxonomyTags?: Maybe<Array<Maybe<TaxonomyTagsPage>>>,
  /** The numeric primary key of the taxonomy_tag */
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  /** The parent taxonomy_tag (in a tree-based taxonomy) */
  parentTag?: Maybe<TaxonomyTag>,
  /** The ULID/pointer ID of the taxonomy_tag. Only exists once the tag is used in the app. */
  pointerId?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
};

export type TaxonomyTagsPage = {
   __typename?: 'TaxonomyTagsPage',
  edges: Array<TaxonomyTag>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** A thread is essentially a list of comments */
export type Thread = {
   __typename?: 'Thread',
  /** A url for the thread, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** Comments in the thread, most recently created first */
  comments?: Maybe<CommentsPage>,
  /** The object the thread is attached to */
  context?: Maybe<AnyContext>,
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
  /** A name/title for the thread */
  name?: Maybe<Scalars['String']>,
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

export type ThreadsPage = {
   __typename?: 'ThreadsPage',
  edges: Array<Thread>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** Defines the unit of time measured in a temporal `Duration`. */
export enum TimeUnit {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Month = 'month',
  Second = 'second',
  Week = 'week',
  Year = 'year'
}

/** 
 * Defines a unit of measurement, along with its display symbol.
 * From OM2 vocabulary.
 **/
export type Unit = {
   __typename?: 'Unit',
  /** Added for CommonsPub */
  canonicalUrl?: Maybe<Scalars['URI']>,
  id: Scalars['ID'],
  inScopeOf?: Maybe<AnyContext>,
  /** A human readable label for the unit, can be language specific. */
  label: Scalars['String'],
  /** A standard display symbol for a unit of measure. */
  symbol: Scalars['String'],
};

export type UnitCreateParams = {
  inScopeOf?: Maybe<Scalars['ID']>,
  /** A human readable label for the unit, can be language specific. */
  label: Scalars['String'],
  /** A standard display symbol for a unit of measure. */
  symbol: Scalars['String'],
};

export type UnitResponse = {
   __typename?: 'UnitResponse',
  unit?: Maybe<Unit>,
};

export type UnitsPage = {
   __typename?: 'UnitsPage',
  edges?: Maybe<Array<Unit>>,
  pageInfo?: Maybe<PageInfo>,
  totalCount?: Maybe<Scalars['Int']>,
};

export type UnitUpdateParams = {
  /** The primary key of the unit to update. */
  id: Scalars['ID'],
  /** A human readable label for the unit, can be language specific. */
  label?: Maybe<Scalars['String']>,
  /** A standard display symbol for a unit of measure. */
  symbol?: Maybe<Scalars['String']>,
};

export type UpdateProfileInput = {
  email?: Maybe<Scalars['String']>,
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
  /** A url for the user, may be to a remote instance */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The current user's flag of this user, if any */
  myFlag?: Maybe<Flag>,
  /** The collections a user is following, most recently followed first */
  collectionFollows?: Maybe<FollowsPage>,
  /** The current user's follow of this user, if any */
  myFollow?: Maybe<Follow>,
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  /** User's geo coordinates. See also location. */
  geolocation?: Maybe<SpatialThing>,
  /** An instance-unique identifier shared with communities and collections */
  preferredUsername: Scalars['String'],
  /** Free text description of user's location. See also geolocation. */
  location?: Maybe<Scalars['String']>,
  /** 
 * Activities of others the user is following, most recently created
   * first. Only available to the current user under `me`
 **/
  inbox?: Maybe<ActivitiesPage>,
  /** An instance-local ULID identifying the user */
  id: Scalars['ID'],
  /** The users a user is following, most recently followed first */
  userFollows?: Maybe<FollowsPage>,
  /** A valid URL */
  website?: Maybe<Scalars['String']>,
  /** Whether the user has a public profile */
  isPublic: Scalars['Boolean'],
  /** Whether an instance admin has disabled the user's account */
  isDisabled: Scalars['Boolean'],
  /** Whether the user is local to the instance */
  isLocal: Scalars['Boolean'],
  /** A preferred username + the host domain */
  displayUsername: Scalars['String'],
  /** Total number of followers, including private follows */
  followerCount?: Maybe<Scalars['Int']>,
  /** Subscriptions users have to the collection */
  follows?: Maybe<FollowsPage>,
  /** When the user last updated their profile */
  updatedAt: Scalars['String'],
  /** Total number of things the user follows, including privately */
  followCount?: Maybe<Scalars['Int']>,
  /** An avatar url */
  icon?: Maybe<Content>,
  /** The last time the user did anything */
  lastActivity?: Maybe<Scalars['String']>,
  /** Total number of likers, including those we can't see */
  likerCount?: Maybe<Scalars['Int']>,
  /** Possibly biographical information */
  summary?: Maybe<Scalars['String']>,
  /** A header background image url */
  image?: Maybe<Content>,
  /** The likes a user has created */
  likes?: Maybe<LikesPage>,
  /** Activities of the user, most recently created first */
  outbox?: Maybe<ActivitiesPage>,
  /** The communities a user is following, most recently followed first */
  communityFollows?: Maybe<FollowsPage>,
  /** Total number of likes, including those we can't see */
  likeCount?: Maybe<Scalars['Int']>,
  /** The current user's like of this user, if any */
  myLike?: Maybe<Like>,
  /** The likes a user has from other people */
  likers?: Maybe<LikesPage>,
  /** When the user signed up */
  createdAt: Scalars['String'],
  /** Subscriptions users have to the collection */
  followers?: Maybe<FollowsPage>,
  /** Comments the user has made, most recently created first */
  comments?: Maybe<CommentsPage>,
  /** A name field */
  name?: Maybe<Scalars['String']>,
};


/** User profile information */
export type UserCollectionFollowsArgs = {
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
export type UserUserFollowsArgs = {
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
export type UserLikesArgs = {
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
export type UserCommunityFollowsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


/** User profile information */
export type UserLikersArgs = {
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


/** User profile information */
export type UserCommentsArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type UsersPage = {
   __typename?: 'UsersPage',
  edges: Array<User>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
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
        "kind": "INTERFACE",
        "name": "Agent",
        "possibleTypes": [
          {
            "name": "Organization"
          },
          {
            "name": "Person"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AnyContext",
        "possibleTypes": [
          {
            "name": "Category"
          },
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
            "name": "Intent"
          },
          {
            "name": "Like"
          },
          {
            "name": "Organisation"
          },
          {
            "name": "Resource"
          },
          {
            "name": "SpatialThing"
          },
          {
            "name": "Taggable"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "AccountingScope",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "Collection"
          },
          {
            "name": "Community"
          },
          {
            "name": "Organisation"
          },
          {
            "name": "Organization"
          },
          {
            "name": "Person"
          },
          {
            "name": "Taggable"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "EventOrCommitment",
        "possibleTypes": [
          {
            "name": "Commitment"
          },
          {
            "name": "EconomicEvent"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ProductionFlowItem",
        "possibleTypes": [
          {
            "name": "EconomicResource"
          },
          {
            "name": "Process"
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
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Proposal: ResolverTypeWrapper<Omit<Proposal, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  URI: ResolverTypeWrapper<Scalars['URI']>,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Agent: ResolverTypeWrapper<Agent>,
  AgentType: AgentType,
  String: ResolverTypeWrapper<Scalars['String']>,
  agentCommitmentSearchParams: AgentCommitmentSearchParams,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Commitment: ResolverTypeWrapper<Omit<Commitment, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  Action: ResolverTypeWrapper<Action>,
  SpatialThing: ResolverTypeWrapper<Omit<SpatialThing, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversTypes['AnyContext']> }>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Json: ResolverTypeWrapper<Scalars['Json']>,
  AnyContext: ResolversTypes['Category'] | ResolversTypes['Collection'] | ResolversTypes['Comment'] | ResolversTypes['Community'] | ResolversTypes['Flag'] | ResolversTypes['Follow'] | ResolversTypes['Intent'] | ResolversTypes['Like'] | ResolversTypes['Organisation'] | ResolversTypes['Resource'] | ResolversTypes['SpatialThing'] | ResolversTypes['Taggable'] | ResolversTypes['User'],
  Category: ResolverTypeWrapper<Omit<Category, 'caretaker'> & { caretaker?: Maybe<ResolversTypes['AnyContext']> }>,
  Character: ResolverTypeWrapper<Omit<Character, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  CollectionsPage: ResolverTypeWrapper<CollectionsPage>,
  Collection: ResolverTypeWrapper<Omit<Collection, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  Community: ResolverTypeWrapper<Omit<Community, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  User: ResolverTypeWrapper<User>,
  Flag: ResolverTypeWrapper<Omit<Flag, 'context'> & { context: ResolversTypes['AnyContext'] }>,
  FollowsPage: ResolverTypeWrapper<FollowsPage>,
  Follow: ResolverTypeWrapper<Omit<Follow, 'context'> & { context: ResolversTypes['AnyContext'] }>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  ActivitiesPage: ResolverTypeWrapper<ActivitiesPage>,
  Activity: ResolverTypeWrapper<Omit<Activity, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  ActivityVerb: ActivityVerb,
  Content: ResolverTypeWrapper<Content>,
  FileMetadata: ResolverTypeWrapper<FileMetadata>,
  FileIntrinsics: ResolverTypeWrapper<FileIntrinsics>,
  ContentMirror: ResolverTypeWrapper<ContentMirror>,
  ContentUpload: ResolverTypeWrapper<ContentUpload>,
  LikesPage: ResolverTypeWrapper<LikesPage>,
  Like: ResolverTypeWrapper<Omit<Like, 'context'> & { context: ResolversTypes['AnyContext'] }>,
  CommentsPage: ResolverTypeWrapper<CommentsPage>,
  Comment: ResolverTypeWrapper<Comment>,
  FlagsPage: ResolverTypeWrapper<FlagsPage>,
  Thread: ResolverTypeWrapper<Omit<Thread, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  ThreadsPage: ResolverTypeWrapper<ThreadsPage>,
  ResourcesPage: ResolverTypeWrapper<ResourcesPage>,
  Resource: ResolverTypeWrapper<Omit<Resource, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  CommunitiesPage: ResolverTypeWrapper<CommunitiesPage>,
  OrganisationsPage: ResolverTypeWrapper<OrganisationsPage>,
  Organisation: ResolverTypeWrapper<Organisation>,
  Profile: ResolverTypeWrapper<Profile>,
  CategoriesPage: ResolverTypeWrapper<CategoriesPage>,
  Intent: ResolverTypeWrapper<Omit<Intent, 'inScopeOf' | 'tags'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversTypes['AnyContext']>>> }>,
  Measure: ResolverTypeWrapper<Measure>,
  Unit: ResolverTypeWrapper<Omit<Unit, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversTypes['AnyContext']> }>,
  AccountingScope: ResolversTypes['Category'] | ResolversTypes['Collection'] | ResolversTypes['Community'] | ResolversTypes['Organisation'] | ResolversTypes['Organization'] | ResolversTypes['Person'] | ResolversTypes['Taggable'] | ResolversTypes['User'],
  Organization: ResolverTypeWrapper<Omit<Organization, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  agentEventSearchParams: AgentEventSearchParams,
  EconomicEvent: ResolverTypeWrapper<Omit<EconomicEvent, 'inScopeOf' | 'tags' | 'trace' | 'track'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversTypes['AnyContext']>>>, trace?: Maybe<Array<ResolversTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversTypes['ProductionFlowItem']>> }>,
  Appreciation: ResolverTypeWrapper<Appreciation>,
  Fulfillment: ResolverTypeWrapper<Fulfillment>,
  Process: ResolverTypeWrapper<Omit<Process, 'inScopeOf' | 'tags'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, tags?: Maybe<Array<ResolversTypes['AnyContext']>> }>,
  ProcessSpecification: ResolverTypeWrapper<ProcessSpecification>,
  Scenario: ResolverTypeWrapper<Omit<Scenario, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  ScenarioDefinition: ResolverTypeWrapper<ScenarioDefinition>,
  Duration: ResolverTypeWrapper<Duration>,
  TimeUnit: TimeUnit,
  Plan: ResolverTypeWrapper<Omit<Plan, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  planProcessSearchParams: PlanProcessSearchParams,
  Agreement: ResolverTypeWrapper<Agreement>,
  ResourceSpecification: ResolverTypeWrapper<ResourceSpecification>,
  EconomicResource: ResolverTypeWrapper<EconomicResource>,
  ProductBatch: ResolverTypeWrapper<ProductBatch>,
  Satisfaction: ResolverTypeWrapper<Omit<Satisfaction, 'satisfiedBy'> & { satisfiedBy: ResolversTypes['EventOrCommitment'] }>,
  EventOrCommitment: ResolversTypes['Commitment'] | ResolversTypes['EconomicEvent'],
  ProductionFlowItem: ResolversTypes['EconomicResource'] | ResolversTypes['Process'],
  agentIntentSearchParams: AgentIntentSearchParams,
  agentResourceSearchParams: AgentResourceSearchParams,
  agentPlanSearchParams: AgentPlanSearchParams,
  agentProcessSearchParams: AgentProcessSearchParams,
  AgentRelationship: ResolverTypeWrapper<Omit<AgentRelationship, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  AgentRelationshipRole: ResolverTypeWrapper<AgentRelationshipRole>,
  Person: ResolverTypeWrapper<Person>,
  Taggable: ResolverTypeWrapper<Omit<Taggable, 'context' | 'things'> & { context?: Maybe<ResolversTypes['AnyContext']>, things?: Maybe<Array<Maybe<ResolversTypes['AnyContext']>>> }>,
  ProposedIntent: ResolverTypeWrapper<ProposedIntent>,
  ProposedTo: ResolverTypeWrapper<ProposedTo>,
  EconomicResourcePage: ResolverTypeWrapper<EconomicResourcePage>,
  TaxonomyTag: ResolverTypeWrapper<TaxonomyTag>,
  TaxonomyTagsPage: ResolverTypeWrapper<TaxonomyTagsPage>,
  ProfilesPage: ResolverTypeWrapper<ProfilesPage>,
  EconomicEventPage: ResolverTypeWrapper<EconomicEventPage>,
  RecipeProcess: ResolverTypeWrapper<RecipeProcess>,
  ProposalsPage: ResolverTypeWrapper<ProposalsPage>,
  RecipeFlow: ResolverTypeWrapper<RecipeFlow>,
  RecipeResource: ResolverTypeWrapper<RecipeResource>,
  UnitsPage: ResolverTypeWrapper<UnitsPage>,
  ProcessPage: ResolverTypeWrapper<ProcessPage>,
  GeolocationFilters: GeolocationFilters,
  GeolocationDistance: GeolocationDistance,
  GeolocationPoint: GeolocationPoint,
  Claim: ResolverTypeWrapper<Omit<Claim, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  Settlement: ResolverTypeWrapper<Settlement>,
  LanguagesPage: ResolverTypeWrapper<LanguagesPage>,
  Language: ResolverTypeWrapper<Language>,
  RecipeExchange: ResolverTypeWrapper<RecipeExchange>,
  Country: ResolverTypeWrapper<Country>,
  AgentsPage: ResolverTypeWrapper<AgentsPage>,
  IntentsPage: ResolverTypeWrapper<IntentsPage>,
  SpatialThingsPage: ResolverTypeWrapper<SpatialThingsPage>,
  RegisterEmailAccessesPage: ResolverTypeWrapper<RegisterEmailAccessesPage>,
  RegisterEmailAccess: ResolverTypeWrapper<RegisterEmailAccess>,
  RegisterEmailDomainAccessesPage: ResolverTypeWrapper<RegisterEmailDomainAccessesPage>,
  RegisterEmailDomainAccess: ResolverTypeWrapper<RegisterEmailDomainAccess>,
  CharactersPage: ResolverTypeWrapper<CharactersPage>,
  UsersPage: ResolverTypeWrapper<UsersPage>,
  Feature: ResolverTypeWrapper<Omit<Feature, 'context'> & { context?: Maybe<ResolversTypes['AnyContext']> }>,
  MeasuresPage: ResolverTypeWrapper<MeasuresPage>,
  FeaturesPage: ResolverTypeWrapper<FeaturesPage>,
  Me: ResolverTypeWrapper<Me>,
  CountriesPages: ResolverTypeWrapper<CountriesPages>,
  Instance: ResolverTypeWrapper<Instance>,
  RootMutationType: ResolverTypeWrapper<{}>,
  ProductBatchUpdateParams: ProductBatchUpdateParams,
  ProductBatchResponse: ResolverTypeWrapper<ProductBatchResponse>,
  RecipeExchangeUpdateParams: RecipeExchangeUpdateParams,
  RecipeExchangeResponse: ResolverTypeWrapper<RecipeExchangeResponse>,
  UploadInput: UploadInput,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  ResourceInput: ResourceInput,
  OrganisationUpdateInput: OrganisationUpdateInput,
  UpdateProfileInput: UpdateProfileInput,
  SpatialThingCreateParams: SpatialThingCreateParams,
  SpatialThingResponse: ResolverTypeWrapper<SpatialThingResponse>,
  ScenarioDefinitionCreateParams: ScenarioDefinitionCreateParams,
  IDuration: IDuration,
  ScenarioDefinitionResponse: ResolverTypeWrapper<ScenarioDefinitionResponse>,
  AgentUpdateParams: AgentUpdateParams,
  PersonResponse: ResolverTypeWrapper<PersonResponse>,
  CommunityUpdateInput: CommunityUpdateInput,
  ProposedToResponse: ResolverTypeWrapper<ProposedToResponse>,
  CommitmentCreateParams: CommitmentCreateParams,
  IMeasure: IMeasure,
  CommitmentResponse: ResolverTypeWrapper<CommitmentResponse>,
  SettlementCreateParams: SettlementCreateParams,
  SettlementResponse: ResolverTypeWrapper<SettlementResponse>,
  ResourceSpecificationCreateParams: ResourceSpecificationCreateParams,
  ResourceSpecificationResponse: ResolverTypeWrapper<ResourceSpecificationResponse>,
  RecipeResourceUpdateParams: RecipeResourceUpdateParams,
  RecipeResourceResponse: ResolverTypeWrapper<RecipeResourceResponse>,
  ScenarioCreateParams: ScenarioCreateParams,
  ScenarioResponse: ResolverTypeWrapper<ScenarioResponse>,
  RecipeExchangeCreateParams: RecipeExchangeCreateParams,
  RecipeResourceCreateParams: RecipeResourceCreateParams,
  ProcessSpecificationCreateParams: ProcessSpecificationCreateParams,
  ProcessSpecificationResponse: ResolverTypeWrapper<ProcessSpecificationResponse>,
  EconomicEventCreateParams: EconomicEventCreateParams,
  EconomicResourceCreateParams: EconomicResourceCreateParams,
  EconomicEventResponse: ResolverTypeWrapper<EconomicEventResponse>,
  OrganizationResponse: ResolverTypeWrapper<OrganizationResponse>,
  SpatialThingUpdateParams: SpatialThingUpdateParams,
  AppreciationCreateParams: AppreciationCreateParams,
  AppreciationResponse: ResolverTypeWrapper<AppreciationResponse>,
  ProcessSpecificationUpdateParams: ProcessSpecificationUpdateParams,
  AuthPayload: ResolverTypeWrapper<AuthPayload>,
  ProposalUpdateParams: ProposalUpdateParams,
  ProposalResponse: ResolverTypeWrapper<ProposalResponse>,
  AgentRelationshipRoleCreateParams: AgentRelationshipRoleCreateParams,
  AgentRelationshipRoleResponse: ResolverTypeWrapper<AgentRelationshipRoleResponse>,
  ResourceSpecificationUpdateParams: ResourceSpecificationUpdateParams,
  ClaimCreateParams: ClaimCreateParams,
  ClaimResponse: ResolverTypeWrapper<ClaimResponse>,
  ProductBatchCreateParams: ProductBatchCreateParams,
  AgentCreateParams: AgentCreateParams,
  AgentRelationshipRoleUpdateParams: AgentRelationshipRoleUpdateParams,
  FulfillmentCreateParams: FulfillmentCreateParams,
  FulfillmentResponse: ResolverTypeWrapper<FulfillmentResponse>,
  ProcessCreateParams: ProcessCreateParams,
  ProcessResponse: ResolverTypeWrapper<ProcessResponse>,
  CommentInput: CommentInput,
  EconomicResourceUpdateParams: EconomicResourceUpdateParams,
  EconomicResourceResponse: ResolverTypeWrapper<EconomicResourceResponse>,
  ScenarioUpdateParams: ScenarioUpdateParams,
  IntentCreateParams: IntentCreateParams,
  IntentResponse: ResolverTypeWrapper<IntentResponse>,
  AgentRelationshipUpdateParams: AgentRelationshipUpdateParams,
  AgentRelationshipResponse: ResolverTypeWrapper<AgentRelationshipResponse>,
  OrganisationInput: OrganisationInput,
  EconomicEventUpdateParams: EconomicEventUpdateParams,
  RecipeFlowCreateParams: RecipeFlowCreateParams,
  RecipeFlowResponse: ResolverTypeWrapper<RecipeFlowResponse>,
  SettlementUpdateParams: SettlementUpdateParams,
  ClaimUpdateParams: ClaimUpdateParams,
  CommitmentUpdateParams: CommitmentUpdateParams,
  UnitUpdateParams: UnitUpdateParams,
  UnitResponse: ResolverTypeWrapper<UnitResponse>,
  ProposalCreateParams: ProposalCreateParams,
  CategoryInput: CategoryInput,
  CharacterInput: CharacterInput,
  ProfileInput: ProfileInput,
  WebMetadata: ResolverTypeWrapper<WebMetadata>,
  ProcessUpdateParams: ProcessUpdateParams,
  AgreementUpdateParams: AgreementUpdateParams,
  AgreementResponse: ResolverTypeWrapper<AgreementResponse>,
  UnitCreateParams: UnitCreateParams,
  RecipeProcessCreateParams: RecipeProcessCreateParams,
  RecipeProcessResponse: ResolverTypeWrapper<RecipeProcessResponse>,
  FulfillmentUpdateParams: FulfillmentUpdateParams,
  PlanCreateParams: PlanCreateParams,
  PlanResponse: ResolverTypeWrapper<PlanResponse>,
  AgreementCreateParams: AgreementCreateParams,
  CollectionUpdateInput: CollectionUpdateInput,
  ScenarioDefinitionUpdateParams: ScenarioDefinitionUpdateParams,
  SatisfactionCreateParams: SatisfactionCreateParams,
  SatisfactionResponse: ResolverTypeWrapper<SatisfactionResponse>,
  AppreciationUpdateParams: AppreciationUpdateParams,
  AgentRelationshipCreateParams: AgentRelationshipCreateParams,
  IntentUpdateParams: IntentUpdateParams,
  RegistrationInput: RegistrationInput,
  SatisfactionUpdateParams: SatisfactionUpdateParams,
  PlanUpdateParams: PlanUpdateParams,
  CollectionInput: CollectionInput,
  ProposedIntentResponse: ResolverTypeWrapper<ProposedIntentResponse>,
  CommunityInput: CommunityInput,
  RecipeProcessUpdateParams: RecipeProcessUpdateParams,
  RecipeFlowUpdateParams: RecipeFlowUpdateParams,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  Int: Scalars['Int'],
  ID: Scalars['ID'],
  Proposal: Omit<Proposal, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  URI: Scalars['URI'],
  DateTime: Scalars['DateTime'],
  Agent: Agent,
  AgentType: AgentType,
  String: Scalars['String'],
  agentCommitmentSearchParams: AgentCommitmentSearchParams,
  Boolean: Scalars['Boolean'],
  Commitment: Omit<Commitment, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  Action: Action,
  SpatialThing: Omit<SpatialThing, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversParentTypes['AnyContext']> },
  Float: Scalars['Float'],
  Json: Scalars['Json'],
  AnyContext: ResolversParentTypes['Category'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Comment'] | ResolversParentTypes['Community'] | ResolversParentTypes['Flag'] | ResolversParentTypes['Follow'] | ResolversParentTypes['Intent'] | ResolversParentTypes['Like'] | ResolversParentTypes['Organisation'] | ResolversParentTypes['Resource'] | ResolversParentTypes['SpatialThing'] | ResolversParentTypes['Taggable'] | ResolversParentTypes['User'],
  Category: Omit<Category, 'caretaker'> & { caretaker?: Maybe<ResolversParentTypes['AnyContext']> },
  Character: Omit<Character, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  Cursor: Scalars['Cursor'],
  CollectionsPage: CollectionsPage,
  Collection: Omit<Collection, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  Community: Omit<Community, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  User: User,
  Flag: Omit<Flag, 'context'> & { context: ResolversParentTypes['AnyContext'] },
  FollowsPage: FollowsPage,
  Follow: Omit<Follow, 'context'> & { context: ResolversParentTypes['AnyContext'] },
  PageInfo: PageInfo,
  ActivitiesPage: ActivitiesPage,
  Activity: Omit<Activity, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  ActivityVerb: ActivityVerb,
  Content: Content,
  FileMetadata: FileMetadata,
  FileIntrinsics: FileIntrinsics,
  ContentMirror: ContentMirror,
  ContentUpload: ContentUpload,
  LikesPage: LikesPage,
  Like: Omit<Like, 'context'> & { context: ResolversParentTypes['AnyContext'] },
  CommentsPage: CommentsPage,
  Comment: Comment,
  FlagsPage: FlagsPage,
  Thread: Omit<Thread, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  ThreadsPage: ThreadsPage,
  ResourcesPage: ResourcesPage,
  Resource: Omit<Resource, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  CommunitiesPage: CommunitiesPage,
  OrganisationsPage: OrganisationsPage,
  Organisation: Organisation,
  Profile: Profile,
  CategoriesPage: CategoriesPage,
  Intent: Omit<Intent, 'inScopeOf' | 'tags'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversParentTypes['AnyContext']>>> },
  Measure: Measure,
  Unit: Omit<Unit, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversParentTypes['AnyContext']> },
  AccountingScope: ResolversParentTypes['Category'] | ResolversParentTypes['Collection'] | ResolversParentTypes['Community'] | ResolversParentTypes['Organisation'] | ResolversParentTypes['Organization'] | ResolversParentTypes['Person'] | ResolversParentTypes['Taggable'] | ResolversParentTypes['User'],
  Organization: Omit<Organization, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  agentEventSearchParams: AgentEventSearchParams,
  EconomicEvent: Omit<EconomicEvent, 'inScopeOf' | 'tags' | 'trace' | 'track'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversParentTypes['AnyContext']>>>, trace?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>> },
  Appreciation: Appreciation,
  Fulfillment: Fulfillment,
  Process: Omit<Process, 'inScopeOf' | 'tags'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, tags?: Maybe<Array<ResolversParentTypes['AnyContext']>> },
  ProcessSpecification: ProcessSpecification,
  Scenario: Omit<Scenario, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  ScenarioDefinition: ScenarioDefinition,
  Duration: Duration,
  TimeUnit: TimeUnit,
  Plan: Omit<Plan, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  planProcessSearchParams: PlanProcessSearchParams,
  Agreement: Agreement,
  ResourceSpecification: ResourceSpecification,
  EconomicResource: EconomicResource,
  ProductBatch: ProductBatch,
  Satisfaction: Omit<Satisfaction, 'satisfiedBy'> & { satisfiedBy: ResolversParentTypes['EventOrCommitment'] },
  EventOrCommitment: ResolversParentTypes['Commitment'] | ResolversParentTypes['EconomicEvent'],
  ProductionFlowItem: ResolversParentTypes['EconomicResource'] | ResolversParentTypes['Process'],
  agentIntentSearchParams: AgentIntentSearchParams,
  agentResourceSearchParams: AgentResourceSearchParams,
  agentPlanSearchParams: AgentPlanSearchParams,
  agentProcessSearchParams: AgentProcessSearchParams,
  AgentRelationship: Omit<AgentRelationship, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  AgentRelationshipRole: AgentRelationshipRole,
  Person: Person,
  Taggable: Omit<Taggable, 'context' | 'things'> & { context?: Maybe<ResolversParentTypes['AnyContext']>, things?: Maybe<Array<Maybe<ResolversParentTypes['AnyContext']>>> },
  ProposedIntent: ProposedIntent,
  ProposedTo: ProposedTo,
  EconomicResourcePage: EconomicResourcePage,
  TaxonomyTag: TaxonomyTag,
  TaxonomyTagsPage: TaxonomyTagsPage,
  ProfilesPage: ProfilesPage,
  EconomicEventPage: EconomicEventPage,
  RecipeProcess: RecipeProcess,
  ProposalsPage: ProposalsPage,
  RecipeFlow: RecipeFlow,
  RecipeResource: RecipeResource,
  UnitsPage: UnitsPage,
  ProcessPage: ProcessPage,
  GeolocationFilters: GeolocationFilters,
  GeolocationDistance: GeolocationDistance,
  GeolocationPoint: GeolocationPoint,
  Claim: Omit<Claim, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  Settlement: Settlement,
  LanguagesPage: LanguagesPage,
  Language: Language,
  RecipeExchange: RecipeExchange,
  Country: Country,
  AgentsPage: AgentsPage,
  IntentsPage: IntentsPage,
  SpatialThingsPage: SpatialThingsPage,
  RegisterEmailAccessesPage: RegisterEmailAccessesPage,
  RegisterEmailAccess: RegisterEmailAccess,
  RegisterEmailDomainAccessesPage: RegisterEmailDomainAccessesPage,
  RegisterEmailDomainAccess: RegisterEmailDomainAccess,
  CharactersPage: CharactersPage,
  UsersPage: UsersPage,
  Feature: Omit<Feature, 'context'> & { context?: Maybe<ResolversParentTypes['AnyContext']> },
  MeasuresPage: MeasuresPage,
  FeaturesPage: FeaturesPage,
  Me: Me,
  CountriesPages: CountriesPages,
  Instance: Instance,
  RootMutationType: {},
  ProductBatchUpdateParams: ProductBatchUpdateParams,
  ProductBatchResponse: ProductBatchResponse,
  RecipeExchangeUpdateParams: RecipeExchangeUpdateParams,
  RecipeExchangeResponse: RecipeExchangeResponse,
  UploadInput: UploadInput,
  Upload: Scalars['Upload'],
  ResourceInput: ResourceInput,
  OrganisationUpdateInput: OrganisationUpdateInput,
  UpdateProfileInput: UpdateProfileInput,
  SpatialThingCreateParams: SpatialThingCreateParams,
  SpatialThingResponse: SpatialThingResponse,
  ScenarioDefinitionCreateParams: ScenarioDefinitionCreateParams,
  IDuration: IDuration,
  ScenarioDefinitionResponse: ScenarioDefinitionResponse,
  AgentUpdateParams: AgentUpdateParams,
  PersonResponse: PersonResponse,
  CommunityUpdateInput: CommunityUpdateInput,
  ProposedToResponse: ProposedToResponse,
  CommitmentCreateParams: CommitmentCreateParams,
  IMeasure: IMeasure,
  CommitmentResponse: CommitmentResponse,
  SettlementCreateParams: SettlementCreateParams,
  SettlementResponse: SettlementResponse,
  ResourceSpecificationCreateParams: ResourceSpecificationCreateParams,
  ResourceSpecificationResponse: ResourceSpecificationResponse,
  RecipeResourceUpdateParams: RecipeResourceUpdateParams,
  RecipeResourceResponse: RecipeResourceResponse,
  ScenarioCreateParams: ScenarioCreateParams,
  ScenarioResponse: ScenarioResponse,
  RecipeExchangeCreateParams: RecipeExchangeCreateParams,
  RecipeResourceCreateParams: RecipeResourceCreateParams,
  ProcessSpecificationCreateParams: ProcessSpecificationCreateParams,
  ProcessSpecificationResponse: ProcessSpecificationResponse,
  EconomicEventCreateParams: EconomicEventCreateParams,
  EconomicResourceCreateParams: EconomicResourceCreateParams,
  EconomicEventResponse: EconomicEventResponse,
  OrganizationResponse: OrganizationResponse,
  SpatialThingUpdateParams: SpatialThingUpdateParams,
  AppreciationCreateParams: AppreciationCreateParams,
  AppreciationResponse: AppreciationResponse,
  ProcessSpecificationUpdateParams: ProcessSpecificationUpdateParams,
  AuthPayload: AuthPayload,
  ProposalUpdateParams: ProposalUpdateParams,
  ProposalResponse: ProposalResponse,
  AgentRelationshipRoleCreateParams: AgentRelationshipRoleCreateParams,
  AgentRelationshipRoleResponse: AgentRelationshipRoleResponse,
  ResourceSpecificationUpdateParams: ResourceSpecificationUpdateParams,
  ClaimCreateParams: ClaimCreateParams,
  ClaimResponse: ClaimResponse,
  ProductBatchCreateParams: ProductBatchCreateParams,
  AgentCreateParams: AgentCreateParams,
  AgentRelationshipRoleUpdateParams: AgentRelationshipRoleUpdateParams,
  FulfillmentCreateParams: FulfillmentCreateParams,
  FulfillmentResponse: FulfillmentResponse,
  ProcessCreateParams: ProcessCreateParams,
  ProcessResponse: ProcessResponse,
  CommentInput: CommentInput,
  EconomicResourceUpdateParams: EconomicResourceUpdateParams,
  EconomicResourceResponse: EconomicResourceResponse,
  ScenarioUpdateParams: ScenarioUpdateParams,
  IntentCreateParams: IntentCreateParams,
  IntentResponse: IntentResponse,
  AgentRelationshipUpdateParams: AgentRelationshipUpdateParams,
  AgentRelationshipResponse: AgentRelationshipResponse,
  OrganisationInput: OrganisationInput,
  EconomicEventUpdateParams: EconomicEventUpdateParams,
  RecipeFlowCreateParams: RecipeFlowCreateParams,
  RecipeFlowResponse: RecipeFlowResponse,
  SettlementUpdateParams: SettlementUpdateParams,
  ClaimUpdateParams: ClaimUpdateParams,
  CommitmentUpdateParams: CommitmentUpdateParams,
  UnitUpdateParams: UnitUpdateParams,
  UnitResponse: UnitResponse,
  ProposalCreateParams: ProposalCreateParams,
  CategoryInput: CategoryInput,
  CharacterInput: CharacterInput,
  ProfileInput: ProfileInput,
  WebMetadata: WebMetadata,
  ProcessUpdateParams: ProcessUpdateParams,
  AgreementUpdateParams: AgreementUpdateParams,
  AgreementResponse: AgreementResponse,
  UnitCreateParams: UnitCreateParams,
  RecipeProcessCreateParams: RecipeProcessCreateParams,
  RecipeProcessResponse: RecipeProcessResponse,
  FulfillmentUpdateParams: FulfillmentUpdateParams,
  PlanCreateParams: PlanCreateParams,
  PlanResponse: PlanResponse,
  AgreementCreateParams: AgreementCreateParams,
  CollectionUpdateInput: CollectionUpdateInput,
  ScenarioDefinitionUpdateParams: ScenarioDefinitionUpdateParams,
  SatisfactionCreateParams: SatisfactionCreateParams,
  SatisfactionResponse: SatisfactionResponse,
  AppreciationUpdateParams: AppreciationUpdateParams,
  AgentRelationshipCreateParams: AgentRelationshipCreateParams,
  IntentUpdateParams: IntentUpdateParams,
  RegistrationInput: RegistrationInput,
  SatisfactionUpdateParams: SatisfactionUpdateParams,
  PlanUpdateParams: PlanUpdateParams,
  CollectionInput: CollectionInput,
  ProposedIntentResponse: ProposedIntentResponse,
  CommunityInput: CommunityInput,
  RecipeProcessUpdateParams: RecipeProcessUpdateParams,
  RecipeFlowUpdateParams: RecipeFlowUpdateParams,
};

export type AccountingScopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountingScope'] = ResolversParentTypes['AccountingScope']> = {
  __resolveType: TypeResolveFn<'Category' | 'Collection' | 'Community' | 'Organisation' | 'Organization' | 'Person' | 'Taggable' | 'User', ParentType, ContextType>
};

export type ActionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Action'] = ResolversParentTypes['Action']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inputOutput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  onhandEffect?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pairsWith?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceEffect?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ActivitiesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ActivitiesPage'] = ResolversParentTypes['ActivitiesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Activity']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  verb?: Resolver<ResolversTypes['ActivityVerb'], ParentType, ContextType>,
};

export type AgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  __resolveType: TypeResolveFn<'Organization' | 'Person', ParentType, ContextType>,
  agentType?: Resolver<Maybe<ResolversTypes['AgentType']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, AgentCommitmentsArgs>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, AgentEconomicEventsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, AgentIntentsArgs>,
  inventoriedEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, AgentInventoriedEconomicResourcesArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, AgentPlansArgs>,
  primaryLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, AgentProcessesArgs>,
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType>,
  relationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, AgentRelationshipsArgs>,
  relationshipsAsObject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, AgentRelationshipsAsObjectArgs>,
  relationshipsAsSubject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, AgentRelationshipsAsSubjectArgs>,
  roles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType>,
};

export type AgentRelationshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationship'] = ResolversParentTypes['AgentRelationship']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  object?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  relationship?: Resolver<ResolversTypes['AgentRelationshipRole'], ParentType, ContextType>,
  subject?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
};

export type AgentRelationshipResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationshipResponse'] = ResolversParentTypes['AgentRelationshipResponse']> = {
  agentRelationship?: Resolver<ResolversTypes['AgentRelationship'], ParentType, ContextType>,
};

export type AgentRelationshipRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationshipRole'] = ResolversParentTypes['AgentRelationshipRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inverseRoleLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  roleLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type AgentRelationshipRoleResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentRelationshipRoleResponse'] = ResolversParentTypes['AgentRelationshipRoleResponse']> = {
  agentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRole']>, ParentType, ContextType>,
};

export type AgentsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentsPage'] = ResolversParentTypes['AgentsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Agent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type AgreementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agreement'] = ResolversParentTypes['Agreement']> = {
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  involvedAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AgreementResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgreementResponse'] = ResolversParentTypes['AgreementResponse']> = {
  agreement?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType>,
};

export type AnyContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContext'] = ResolversParentTypes['AnyContext']> = {
  __resolveType: TypeResolveFn<'Category' | 'Collection' | 'Comment' | 'Community' | 'Flag' | 'Follow' | 'Intent' | 'Like' | 'Organisation' | 'Resource' | 'SpatialThing' | 'Taggable' | 'User', ParentType, ContextType>
};

export type AppreciationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Appreciation'] = ResolversParentTypes['Appreciation']> = {
  appreciationOf?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  appreciationWith?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type AppreciationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AppreciationResponse'] = ResolversParentTypes['AppreciationResponse']> = {
  appreciation?: Resolver<Maybe<ResolversTypes['Appreciation']>, ParentType, ContextType>,
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>,
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CategoriesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesPage'] = ResolversParentTypes['CategoriesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  caretaker?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  facet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parentCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
  parentCategoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>,
  subCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoriesPage']>>>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  collections?: Resolver<Maybe<ResolversTypes['CollectionsPage']>, ParentType, ContextType, CharacterCollectionsArgs>,
  communities?: Resolver<Maybe<ResolversTypes['CommunitiesPage']>, ParentType, ContextType, CharacterCommunitiesArgs>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  facet?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, CharacterFollowersArgs>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  organisations?: Resolver<Maybe<ResolversTypes['OrganisationsPage']>, ParentType, ContextType, CharacterOrganisationsArgs>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, CharacterOutboxArgs>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  resources?: Resolver<Maybe<ResolversTypes['ResourcesPage']>, ParentType, ContextType, CharacterResourcesArgs>,
  threads?: Resolver<Maybe<ResolversTypes['ThreadsPage']>, ParentType, ContextType, CharacterThreadsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CharactersPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CharactersPage'] = ResolversParentTypes['CharactersPage']> = {
  edges?: Resolver<Array<ResolversTypes['Character']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ClaimResolvers<ContextType = any, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  receiver?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  triggeredBy?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
};

export type ClaimResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimResponse'] = ResolversParentTypes['ClaimResponse']> = {
  claim?: Resolver<Maybe<ResolversTypes['Claim']>, ParentType, ContextType>,
};

export type CollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
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
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type CommentsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentsPage'] = ResolversParentTypes['CommentsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CommitmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Commitment'] = ResolversParentTypes['Commitment']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  clauseOf?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  fulfilledBy?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasPointInTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  independentDemandOf?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>,
  inputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  involvedAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  receiver?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfies?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType>,
};

export type CommitmentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitmentResponse'] = ResolversParentTypes['CommitmentResponse']> = {
  commitment?: Resolver<Maybe<ResolversTypes['Commitment']>, ParentType, ContextType>,
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
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
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

export type CountriesPagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['CountriesPages'] = ResolversParentTypes['CountriesPages']> = {
  edges?: Resolver<Array<ResolversTypes['Country']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  continentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id3letter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  idIso?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  languageMain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mainTz?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nameEng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nameEngFormal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nameLocal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  telPrefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tld?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DurationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Duration'] = ResolversParentTypes['Duration']> = {
  numericDuration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  unitType?: Resolver<ResolversTypes['TimeUnit'], ParentType, ContextType>,
};

export type EconomicEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicEvent'] = ResolversParentTypes['EconomicEvent']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  appreciatedBy?: Resolver<Maybe<Array<ResolversTypes['Appreciation']>>, ParentType, ContextType>,
  appreciationOf?: Resolver<Maybe<Array<ResolversTypes['Appreciation']>>, ParentType, ContextType>,
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  fulfills?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasPointInTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  inputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  realizationOf?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType>,
  receiver?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfies?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnyContext']>>>, ParentType, ContextType>,
  toResourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType>,
  track?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType>,
  triggeredBy?: Resolver<Maybe<ResolversTypes['EconomicEvent']>, ParentType, ContextType>,
};

export type EconomicEventPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicEventPage'] = ResolversParentTypes['EconomicEventPage']> = {
  edges?: Resolver<Array<ResolversTypes['EconomicEvent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type EconomicEventResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicEventResponse'] = ResolversParentTypes['EconomicEventResponse']> = {
  economicEvent?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  economicResource?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
};

export type EconomicResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicResource'] = ResolversParentTypes['EconomicResource']> = {
  accountingQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  classifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  conformsTo?: Resolver<ResolversTypes['ResourceSpecification'], ParentType, ContextType>,
  containedIn?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  contains?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType>,
  currentLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  lot?: Resolver<Maybe<ResolversTypes['ProductBatch']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  onhandQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  primaryAccountable?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  stage?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
  state?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  track?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  trackingIdentifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  unitOfEffort?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export type EconomicResourcePageResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicResourcePage'] = ResolversParentTypes['EconomicResourcePage']> = {
  edges?: Resolver<Array<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type EconomicResourceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicResourceResponse'] = ResolversParentTypes['EconomicResourceResponse']> = {
  economicResource?: Resolver<ResolversTypes['EconomicResource'], ParentType, ContextType>,
};

export type EventOrCommitmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventOrCommitment'] = ResolversParentTypes['EventOrCommitment']> = {
  __resolveType: TypeResolveFn<'Commitment' | 'EconomicEvent', ParentType, ContextType>
};

export type FeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Feature'] = ResolversParentTypes['Feature']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
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
  context?: Resolver<ResolversTypes['AnyContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isResolved?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type FlagsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FlagsPage'] = ResolversParentTypes['FlagsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Flag']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['AnyContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type FollowsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['FollowsPage'] = ResolversParentTypes['FollowsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Follow']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type FulfillmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Fulfillment'] = ResolversParentTypes['Fulfillment']> = {
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  fulfilledBy?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  fulfills?: Resolver<ResolversTypes['Commitment'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
};

export type FulfillmentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FulfillmentResponse'] = ResolversParentTypes['FulfillmentResponse']> = {
  fulfillment?: Resolver<Maybe<ResolversTypes['Fulfillment']>, ParentType, ContextType>,
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

export type IntentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Intent'] = ResolversParentTypes['Intent']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  availableQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasPointInTime?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  inputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputOf?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  provider?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  publishedIn?: Resolver<Maybe<Array<ResolversTypes['ProposedIntent']>>, ParentType, ContextType>,
  receiver?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  resourceInventoriedAs?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfiedBy?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnyContext']>>>, ParentType, ContextType>,
};

export type IntentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntentResponse'] = ResolversParentTypes['IntentResponse']> = {
  intent?: Resolver<ResolversTypes['Intent'], ParentType, ContextType>,
};

export type IntentsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['IntentsPage'] = ResolversParentTypes['IntentsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Intent']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Json'], any> {
  name: 'Json'
}

export type LanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  languageType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mainCountryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  mainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  nativeName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parentLanguageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rtl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  speakersMil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  speakersNative?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  speakersNativeTotal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  subName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type LanguagesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['LanguagesPage'] = ResolversParentTypes['LanguagesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Language']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<ResolversTypes['AnyContext'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
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
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  wantsEmailDigest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  wantsNotifications?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
};

export type MeasureResolvers<ContextType = any, ParentType extends ResolversParentTypes['Measure'] = ResolversParentTypes['Measure']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  hasNumericalValue?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  hasUnit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type MeasuresPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MeasuresPage'] = ResolversParentTypes['MeasuresPage']> = {
  edges?: Resolver<Maybe<Array<ResolversTypes['Measure']>>, ParentType, ContextType>,
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>,
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type OrganisationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organisation'] = ResolversParentTypes['Organisation']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, OrganisationFlagsArgs>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, OrganisationFollowersArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, OrganisationLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, OrganisationOutboxArgs>,
  preferredUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  threads?: Resolver<Maybe<ResolversTypes['ThreadsPage']>, ParentType, ContextType, OrganisationThreadsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type OrganisationsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganisationsPage'] = ResolversParentTypes['OrganisationsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Organisation']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  agentType?: Resolver<Maybe<ResolversTypes['AgentType']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, OrganizationCommitmentsArgs>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, OrganizationEconomicEventsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, OrganizationIntentsArgs>,
  inventoriedEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, OrganizationInventoriedEconomicResourcesArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, OrganizationPlansArgs>,
  primaryLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, OrganizationProcessesArgs>,
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType>,
  relationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, OrganizationRelationshipsArgs>,
  relationshipsAsObject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, OrganizationRelationshipsAsObjectArgs>,
  relationshipsAsSubject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, OrganizationRelationshipsAsSubjectArgs>,
  roles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType>,
};

export type OrganizationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationResponse'] = ResolversParentTypes['OrganizationResponse']> = {
  agent?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>,
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<Array<ResolversTypes['Cursor']>>, ParentType, ContextType>,
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  startCursor?: Resolver<Maybe<Array<ResolversTypes['Cursor']>>, ParentType, ContextType>,
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  agentType?: Resolver<Maybe<ResolversTypes['AgentType']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, PersonCommitmentsArgs>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, PersonEconomicEventsArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, PersonIntentsArgs>,
  inventoriedEconomicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, PersonInventoriedEconomicResourcesArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, PersonPlansArgs>,
  primaryLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, PersonProcessesArgs>,
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType>,
  relationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, PersonRelationshipsArgs>,
  relationshipsAsObject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, PersonRelationshipsAsObjectArgs>,
  relationshipsAsSubject?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, PersonRelationshipsAsSubjectArgs>,
  roles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType>,
};

export type PersonResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonResponse'] = ResolversParentTypes['PersonResponse']> = {
  agent?: Resolver<ResolversTypes['Person'], ParentType, ContextType>,
};

export type PlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['Plan'] = ResolversParentTypes['Plan']> = {
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  due?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  independentDemands?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, PlanProcessesArgs>,
  refinementOf?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
};

export type PlanResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlanResponse'] = ResolversParentTypes['PlanResponse']> = {
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>,
};

export type ProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['Process'] = ResolversParentTypes['Process']> = {
  basedOn?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
  classifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  committedInputs?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, ProcessCommittedInputsArgs>,
  committedOutputs?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, ProcessCommittedOutputsArgs>,
  deletable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  finished?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  inputs?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, ProcessInputsArgs>,
  intendedInputs?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, ProcessIntendedInputsArgs>,
  intendedOutputs?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, ProcessIntendedOutputsArgs>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nestedIn?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
  nextProcesses?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  outputs?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, ProcessOutputsArgs>,
  plannedWithin?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType>,
  previousProcesses?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType>,
  tags?: Resolver<Maybe<Array<ResolversTypes['AnyContext']>>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  track?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
  unplannedEconomicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, ProcessUnplannedEconomicEventsArgs>,
  workingAgents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType>,
};

export type ProcessPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessPage'] = ResolversParentTypes['ProcessPage']> = {
  edges?: Resolver<Array<ResolversTypes['Process']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ProcessResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessResponse'] = ResolversParentTypes['ProcessResponse']> = {
  process?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
};

export type ProcessSpecificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessSpecification'] = ResolversParentTypes['ProcessSpecification']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ProcessSpecificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProcessSpecificationResponse'] = ResolversParentTypes['ProcessSpecificationResponse']> = {
  processSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
};

export type ProductBatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBatch'] = ResolversParentTypes['ProductBatch']> = {
  batchNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  expiryDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  productionDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
};

export type ProductBatchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductBatchResponse'] = ResolversParentTypes['ProductBatchResponse']> = {
  productBatch?: Resolver<ResolversTypes['ProductBatch'], ParentType, ContextType>,
};

export type ProductionFlowItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductionFlowItem'] = ResolversParentTypes['ProductionFlowItem']> = {
  __resolveType: TypeResolveFn<'EconomicResource' | 'Process', ParentType, ContextType>
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, ProfileFlagsArgs>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, ProfileLikersArgs>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ProfilesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfilesPage'] = ResolversParentTypes['ProfilesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Profile']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ProposalResolvers<ContextType = any, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  created?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  eligibleLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  publishedTo?: Resolver<Maybe<Array<ResolversTypes['ProposedTo']>>, ParentType, ContextType>,
  publishes?: Resolver<Maybe<Array<ResolversTypes['ProposedIntent']>>, ParentType, ContextType>,
  unitBased?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type ProposalResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalResponse'] = ResolversParentTypes['ProposalResponse']> = {
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType>,
};

export type ProposalsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposalsPage'] = ResolversParentTypes['ProposalsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Proposal']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ProposedIntentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedIntent'] = ResolversParentTypes['ProposedIntent']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  publishedIn?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>,
  publishes?: Resolver<ResolversTypes['Intent'], ParentType, ContextType>,
  reciprocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
};

export type ProposedIntentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedIntentResponse'] = ResolversParentTypes['ProposedIntentResponse']> = {
  proposedIntent?: Resolver<Maybe<ResolversTypes['ProposedIntent']>, ParentType, ContextType>,
};

export type ProposedToResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedTo'] = ResolversParentTypes['ProposedTo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  proposed?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType>,
  proposedTo?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
};

export type ProposedToResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProposedToResponse'] = ResolversParentTypes['ProposedToResponse']> = {
  proposedTo?: Resolver<Maybe<ResolversTypes['ProposedTo']>, ParentType, ContextType>,
};

export type RecipeExchangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeExchange'] = ResolversParentTypes['RecipeExchange']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type RecipeExchangeResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeExchangeResponse'] = ResolversParentTypes['RecipeExchangeResponse']> = {
  recipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchange']>, ParentType, ContextType>,
};

export type RecipeFlowResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeFlow'] = ResolversParentTypes['RecipeFlow']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  recipeFlowResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType>,
  recipeInputOf?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType>,
  recipeOutputOf?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
};

export type RecipeFlowResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeFlowResponse'] = ResolversParentTypes['RecipeFlowResponse']> = {
  recipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlow']>, ParentType, ContextType>,
};

export type RecipeProcessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeProcess'] = ResolversParentTypes['RecipeProcess']> = {
  hasDuration?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  processClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  processConformsTo?: Resolver<ResolversTypes['ProcessSpecification'], ParentType, ContextType>,
};

export type RecipeProcessResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeProcessResponse'] = ResolversParentTypes['RecipeProcessResponse']> = {
  recipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType>,
};

export type RecipeResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeResource'] = ResolversParentTypes['RecipeResource']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  substitutable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  unitOfEffort?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
  unitOfResource?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export type RecipeResourceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecipeResourceResponse'] = ResolversParentTypes['RecipeResourceResponse']> = {
  recipeResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType>,
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
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  publicAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  mimeType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  embedType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  embedCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  accessibilityFeature?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  freeAccess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, ResourceLikersArgs>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  license?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, ResourceFlagsArgs>,
};

export type ResourcesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourcesPage'] = ResolversParentTypes['ResourcesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Resource']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ResourceSpecificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSpecification'] = ResolversParentTypes['ResourceSpecification']> = {
  conformingResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType>,
  defaultUnitOfEffort?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
  defaultUnitOfResource?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
};

export type ResourceSpecificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSpecificationResponse'] = ResolversParentTypes['ResourceSpecificationResponse']> = {
  resourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
};

export type RootMutationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootMutationType'] = ResolversParentTypes['RootMutationType']> = {
  updateProductBatch?: Resolver<Maybe<ResolversTypes['ProductBatchResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProductBatchArgs, 'productBatch'>>,
  resetPasswordRequest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeResetPasswordRequestArgs, 'email'>>,
  updateRecipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchangeResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeExchangeArgs>,
  createResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateResourceArgs, 'content' | 'resource'>>,
  updateOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateOrganisationArgs, 'organisation' | 'organisationId'>>,
  createRegisterEmailDomainAccess?: Resolver<ResolversTypes['RegisterEmailDomainAccess'], ParentType, ContextType, RequireFields<RootMutationTypeCreateRegisterEmailDomainAccessArgs, 'domain'>>,
  updateProfile?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProfileArgs, 'profile'>>,
  deleteCommitment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteCommitmentArgs, 'id'>>,
  createSpatialThing?: Resolver<Maybe<ResolversTypes['SpatialThingResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSpatialThingArgs, 'spatialThing'>>,
  createScenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinitionResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateScenarioDefinitionArgs, 'plan'>>,
  deleteAgentRelationship?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgentRelationshipArgs, 'id'>>,
  updatePerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdatePersonArgs, 'person'>>,
  updateCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCommunityArgs, 'community' | 'communityId'>>,
  deletePlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeletePlanArgs, 'id'>>,
  proposeTo?: Resolver<Maybe<ResolversTypes['ProposedToResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeProposeToArgs, 'proposed' | 'proposedTo'>>,
  createCommitment?: Resolver<Maybe<ResolversTypes['CommitmentResponse']>, ParentType, ContextType, RootMutationTypeCreateCommitmentArgs>,
  makeTaggable?: Resolver<Maybe<ResolversTypes['Taggable']>, ParentType, ContextType, RootMutationTypeMakeTaggableArgs>,
  deleteRecipeFlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeFlowArgs, 'id'>>,
  deleteProposal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposalArgs, 'id'>>,
  createSettlement?: Resolver<Maybe<ResolversTypes['SettlementResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSettlementArgs, 'settlement'>>,
  createFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFollowArgs, 'contextId'>>,
  addProfileTo?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<RootMutationTypeAddProfileToArgs, 'contextId'>>,
  tag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeTagArgs, 'taggables' | 'thing'>>,
  createResourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecificationResponse']>, ParentType, ContextType, RootMutationTypeCreateResourceSpecificationArgs>,
  updateRecipeResource?: Resolver<Maybe<ResolversTypes['RecipeResourceResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeResourceArgs>,
  createScenario?: Resolver<Maybe<ResolversTypes['ScenarioResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateScenarioArgs, 'plan'>>,
  createRecipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchangeResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeExchangeArgs>,
  createRecipeResource?: Resolver<Maybe<ResolversTypes['RecipeResourceResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeResourceArgs>,
  deleteProductBatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProductBatchArgs, 'id'>>,
  createProcessSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecificationResponse']>, ParentType, ContextType, RootMutationTypeCreateProcessSpecificationArgs>,
  createEconomicEvent?: Resolver<Maybe<ResolversTypes['EconomicEventResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateEconomicEventArgs, 'event'>>,
  resolveFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootMutationTypeResolveFlagArgs, 'flagId'>>,
  deleteAppreciation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAppreciationArgs, 'id'>>,
  updateOrganization?: Resolver<Maybe<ResolversTypes['OrganizationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateOrganizationArgs, 'organization'>>,
  updateSpatialThing?: Resolver<Maybe<ResolversTypes['SpatialThingResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateSpatialThingArgs, 'spatialThing'>>,
  createAppreciation?: Resolver<Maybe<ResolversTypes['AppreciationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateAppreciationArgs, 'appreciation'>>,
  deletePerson?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeletePersonArgs, 'id'>>,
  createRegisterEmailAccess?: Resolver<ResolversTypes['RegisterEmailAccess'], ParentType, ContextType, RequireFields<RootMutationTypeCreateRegisterEmailAccessArgs, 'email'>>,
  createFollowByUrl?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFollowByUrlArgs, 'url'>>,
  updateProcessSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecificationResponse']>, ParentType, ContextType, RootMutationTypeUpdateProcessSpecificationArgs>,
  deleteProcessSpecification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProcessSpecificationArgs, 'id'>>,
  confirmEmail?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeConfirmEmailArgs, 'token'>>,
  updateProposal?: Resolver<Maybe<ResolversTypes['ProposalResponse']>, ParentType, ContextType, RootMutationTypeUpdateProposalArgs>,
  copyResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeCopyResourceArgs, 'contextId' | 'resourceId'>>,
  deleteScenario?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteScenarioArgs, 'id'>>,
  createAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRoleResponse']>, ParentType, ContextType, RootMutationTypeCreateAgentRelationshipRoleArgs>,
  sendInvite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeSendInviteArgs, 'email'>>,
  updateResourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecificationResponse']>, ParentType, ContextType, RootMutationTypeUpdateResourceSpecificationArgs>,
  characterise?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<RootMutationTypeCharacteriseArgs, 'contextId'>>,
  createClaim?: Resolver<Maybe<ResolversTypes['ClaimResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateClaimArgs, 'claim'>>,
  createProductBatch?: Resolver<Maybe<ResolversTypes['ProductBatchResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateProductBatchArgs, 'productBatch'>>,
  createOrganization?: Resolver<Maybe<ResolversTypes['OrganizationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateOrganizationArgs, 'organization'>>,
  updateAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRoleResponse']>, ParentType, ContextType, RootMutationTypeUpdateAgentRelationshipRoleArgs>,
  createFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFulfillmentArgs, 'fulfillment'>>,
  createProcess?: Resolver<Maybe<ResolversTypes['ProcessResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateProcessArgs, 'process'>>,
  deleteEconomicEvent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteEconomicEventArgs, 'id'>>,
  deleteEconomicResource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteEconomicResourceArgs, 'id'>>,
  delete?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteArgs, 'contextId'>>,
  updateComment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCommentArgs, 'comment' | 'commentId'>>,
  deleteSession?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  createReply?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateReplyArgs, 'comment' | 'inReplyToId' | 'threadId'>>,
  updateEconomicResource?: Resolver<Maybe<ResolversTypes['EconomicResourceResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateEconomicResourceArgs, 'resource'>>,
  createLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateLikeArgs, 'contextId'>>,
  updateScenario?: Resolver<Maybe<ResolversTypes['ScenarioResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateScenarioArgs, 'plan'>>,
  deleteScenarioDefinition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteScenarioDefinitionArgs, 'id'>>,
  createOffer?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateOfferArgs>,
  deleteIntent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteIntentArgs, 'id'>>,
  updateAgentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationshipResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateAgentRelationshipArgs, 'relationship'>>,
  deleteFulfillment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteFulfillmentArgs, 'id'>>,
  createOrganisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateOrganisationArgs, 'organisation'>>,
  updateEconomicEvent?: Resolver<Maybe<ResolversTypes['EconomicEventResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateEconomicEventArgs, 'event'>>,
  createNeed?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateNeedArgs>,
  deleteResourceSpecification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteResourceSpecificationArgs, 'id'>>,
  createRecipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlowResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeFlowArgs>,
  deleteSatisfaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSatisfactionArgs, 'id'>>,
  updateSettlement?: Resolver<Maybe<ResolversTypes['SettlementResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateSettlementArgs, 's0ettlement'>>,
  updateClaim?: Resolver<Maybe<ResolversTypes['ClaimResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateClaimArgs, 'claim'>>,
  updateCommitment?: Resolver<Maybe<ResolversTypes['CommitmentResponse']>, ParentType, ContextType, RootMutationTypeUpdateCommitmentArgs>,
  updateUnit?: Resolver<Maybe<ResolversTypes['UnitResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateUnitArgs, 'unit'>>,
  deactivateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<RootMutationTypeDeactivateUserArgs, 'id'>>,
  createProposal?: Resolver<Maybe<ResolversTypes['ProposalResponse']>, ParentType, ContextType, RootMutationTypeCreateProposalArgs>,
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RootMutationTypeCreateCategoryArgs>,
  deleteRecipeProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeProcessArgs, 'id'>>,
  fetchWebMetadata?: Resolver<Maybe<ResolversTypes['WebMetadata']>, ParentType, ContextType, RequireFields<RootMutationTypeFetchWebMetadataArgs, 'url'>>,
  resetPassword?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeResetPasswordArgs, 'password' | 'token'>>,
  deleteRegisterEmailDomainAccess?: Resolver<Maybe<ResolversTypes['RegisterEmailDomainAccess']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRegisterEmailDomainAccessArgs, 'id'>>,
  updateProcess?: Resolver<Maybe<ResolversTypes['ProcessResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProcessArgs, 'process'>>,
  deleteRegisterEmailAccess?: Resolver<Maybe<ResolversTypes['RegisterEmailAccess']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRegisterEmailAccessArgs, 'id'>>,
  deleteProposedIntent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposedIntentArgs, 'id'>>,
  createSession?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSessionArgs, 'password'>>,
  deleteSettlement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSettlementArgs, 'id'>>,
  updateAgreement?: Resolver<Maybe<ResolversTypes['AgreementResponse']>, ParentType, ContextType, RootMutationTypeUpdateAgreementArgs>,
  createUnit?: Resolver<Maybe<ResolversTypes['UnitResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateUnitArgs, 'unit'>>,
  deleteOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteOrganizationArgs, 'id'>>,
  deleteClaim?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteClaimArgs, 'id'>>,
  createRecipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcessResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeProcessArgs>,
  createIntent?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateIntentArgs>,
  updateFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateFulfillmentArgs, 'fulfillment'>>,
  createPlan?: Resolver<Maybe<ResolversTypes['PlanResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePlanArgs, 'plan'>>,
  createAgreement?: Resolver<Maybe<ResolversTypes['AgreementResponse']>, ParentType, ContextType, RootMutationTypeCreateAgreementArgs>,
  updateCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateCollectionArgs, 'collection' | 'collectionId'>>,
  updateScenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinitionResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateScenarioDefinitionArgs, 'plan'>>,
  createSatisfaction?: Resolver<Maybe<ResolversTypes['SatisfactionResponse']>, ParentType, ContextType, RootMutationTypeCreateSatisfactionArgs>,
  updateAppreciation?: Resolver<Maybe<ResolversTypes['AppreciationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateAppreciationArgs, 'appreciation'>>,
  createAgentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationshipResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateAgentRelationshipArgs, 'relationship'>>,
  updateIntent?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeUpdateIntentArgs>,
  deleteRecipeResource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeResourceArgs, 'id'>>,
  createThread?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateThreadArgs, 'comment'>>,
  createUser?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateUserArgs, 'user'>>,
  deleteUnit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteUnitArgs, 'id'>>,
  updateSatisfaction?: Resolver<Maybe<ResolversTypes['SatisfactionResponse']>, ParentType, ContextType, RootMutationTypeUpdateSatisfactionArgs>,
  updatePlan?: Resolver<Maybe<ResolversTypes['PlanResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdatePlanArgs, 'plan'>>,
  createCollection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateCollectionArgs, 'collection'>>,
  deleteSelf?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSelfArgs, 'iAmSure'>>,
  deleteAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgentRelationshipRoleArgs, 'id'>>,
  createPerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePersonArgs, 'person'>>,
  proposeIntent?: Resolver<Maybe<ResolversTypes['ProposedIntentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeProposeIntentArgs, 'publishedIn' | 'publishes'>>,
  createCommunity?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateCommunityArgs, 'community'>>,
  createFeature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFeatureArgs, 'contextId'>>,
  deleteSpatialThing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSpatialThingArgs, 'id'>>,
  deleteRecipeExchange?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeExchangeArgs, 'id'>>,
  createFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFlagArgs, 'contextId' | 'message'>>,
  updateRecipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcessResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeProcessArgs>,
  updateResource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateResourceArgs, 'resource' | 'resourceId'>>,
  deleteProposedTo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposedToArgs, 'id'>>,
  updateRecipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlowResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeFlowArgs>,
  deleteProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProcessArgs, 'id'>>,
  ingestTaxonomyTag?: Resolver<Maybe<ResolversTypes['Taggable']>, ParentType, ContextType, RootMutationTypeIngestTaxonomyTagArgs>,
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RootMutationTypeUpdateCategoryArgs>,
  deleteAgreement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgreementArgs, 'id'>>,
};

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = {
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType, RootQueryTypeProposalsArgs>,
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RootQueryTypePlanArgs>,
  economicResource?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType, RootQueryTypeEconomicResourceArgs>,
  economicResourcesPages?: Resolver<ResolversTypes['EconomicResourcePage'], ParentType, ContextType, RootQueryTypeEconomicResourcesPagesArgs>,
  categories?: Resolver<ResolversTypes['CategoriesPage'], ParentType, ContextType, RootQueryTypeCategoriesArgs>,
  taxonomyTag?: Resolver<Maybe<ResolversTypes['TaxonomyTag']>, ParentType, ContextType, RootQueryTypeTaxonomyTagArgs>,
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, RootQueryTypeCommitmentsArgs>,
  profiles?: Resolver<ResolversTypes['ProfilesPage'], ParentType, ContextType, RootQueryTypeProfilesArgs>,
  agreements?: Resolver<Maybe<Array<ResolversTypes['Agreement']>>, ParentType, ContextType, RootQueryTypeAgreementsArgs>,
  organisations?: Resolver<ResolversTypes['OrganisationsPage'], ParentType, ContextType, RootQueryTypeOrganisationsArgs>,
  economicEventsPages?: Resolver<ResolversTypes['EconomicEventPage'], ParentType, ContextType, RootQueryTypeEconomicEventsPagesArgs>,
  agents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType, RootQueryTypeAgentsArgs>,
  people?: Resolver<Maybe<Array<ResolversTypes['Person']>>, ParentType, ContextType, RootQueryTypePeopleArgs>,
  recipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType, RootQueryTypeRecipeProcessArgs>,
  proposalsPages?: Resolver<ResolversTypes['ProposalsPage'], ParentType, ContextType, RootQueryTypeProposalsPagesArgs>,
  recipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlow']>, ParentType, ContextType, RootQueryTypeRecipeFlowArgs>,
  unitsPages?: Resolver<ResolversTypes['UnitsPage'], ParentType, ContextType, RootQueryTypeUnitsPagesArgs>,
  recipeProcesses?: Resolver<Maybe<Array<ResolversTypes['RecipeProcess']>>, ParentType, ContextType, RootQueryTypeRecipeProcessesArgs>,
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootQueryTypeActivityArgs, 'activityId'>>,
  measures?: Resolver<Maybe<Array<ResolversTypes['Measure']>>, ParentType, ContextType, RootQueryTypeMeasuresArgs>,
  processesPages?: Resolver<ResolversTypes['ProcessPage'], ParentType, ContextType, RootQueryTypeProcessesPagesArgs>,
  proposalsFiltered?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proposal']>>>, ParentType, ContextType, RootQueryTypeProposalsFilteredArgs>,
  claims?: Resolver<Maybe<Array<ResolversTypes['Claim']>>, ParentType, ContextType, RootQueryTypeClaimsArgs>,
  processSpecifications?: Resolver<Maybe<Array<ResolversTypes['ProcessSpecification']>>, ParentType, ContextType, RootQueryTypeProcessSpecificationsArgs>,
  recipeResources?: Resolver<Maybe<Array<ResolversTypes['RecipeResource']>>, ParentType, ContextType, RootQueryTypeRecipeResourcesArgs>,
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<RootQueryTypeCommentArgs, 'commentId'>>,
  agentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationship']>, ParentType, ContextType, RootQueryTypeAgentRelationshipArgs>,
  scenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType, RootQueryTypeScenarioDefinitionArgs>,
  collection?: Resolver<Maybe<ResolversTypes['Collection']>, ParentType, ContextType, RequireFields<RootQueryTypeCollectionArgs, 'collectionId'>>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RootQueryTypeUserArgs>,
  settlement?: Resolver<Maybe<ResolversTypes['Settlement']>, ParentType, ContextType, RootQueryTypeSettlementArgs>,
  claim?: Resolver<Maybe<ResolversTypes['Claim']>, ParentType, ContextType, RootQueryTypeClaimArgs>,
  spatialThing?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType, RootQueryTypeSpatialThingArgs>,
  agent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RootQueryTypeAgentArgs>,
  myAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  spatialThings?: Resolver<Maybe<Array<ResolversTypes['SpatialThing']>>, ParentType, ContextType, RootQueryTypeSpatialThingsArgs>,
  languages?: Resolver<ResolversTypes['LanguagesPage'], ParentType, ContextType, RootQueryTypeLanguagesArgs>,
  scenarios?: Resolver<Maybe<Array<ResolversTypes['Scenario']>>, ParentType, ContextType, RootQueryTypeScenariosArgs>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, RootQueryTypeIntentsArgs>,
  economicResourcesFiltered?: Resolver<Maybe<Array<Maybe<ResolversTypes['EconomicResource']>>>, ParentType, ContextType, RootQueryTypeEconomicResourcesFilteredArgs>,
  actions?: Resolver<Maybe<Array<ResolversTypes['Action']>>, ParentType, ContextType>,
  productBatches?: Resolver<Maybe<Array<ResolversTypes['ProductBatch']>>, ParentType, ContextType, RootQueryTypeProductBatchesArgs>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, RootQueryTypeEconomicEventsArgs>,
  scenario?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType, RootQueryTypeScenarioArgs>,
  commitment?: Resolver<Maybe<ResolversTypes['Commitment']>, ParentType, ContextType, RootQueryTypeCommitmentArgs>,
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RootQueryTypePersonArgs>,
  recipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchange']>, ParentType, ContextType, RootQueryTypeRecipeExchangeArgs>,
  economicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, RootQueryTypeEconomicResourcesArgs>,
  organizations?: Resolver<Maybe<Array<ResolversTypes['Organization']>>, ParentType, ContextType, RootQueryTypeOrganizationsArgs>,
  like?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType, RequireFields<RootQueryTypeLikeArgs, 'likeId'>>,
  country?: Resolver<Maybe<ResolversTypes['Country']>, ParentType, ContextType, RequireFields<RootQueryTypeCountryArgs, 'countryId'>>,
  resourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType, RootQueryTypeResourceSpecificationArgs>,
  community?: Resolver<Maybe<ResolversTypes['Community']>, ParentType, ContextType, RequireFields<RootQueryTypeCommunityArgs, 'communityId'>>,
  organizationsPages?: Resolver<ResolversTypes['AgentsPage'], ParentType, ContextType, RootQueryTypeOrganizationsPagesArgs>,
  intentsPages?: Resolver<ResolversTypes['IntentsPage'], ParentType, ContextType, RootQueryTypeIntentsPagesArgs>,
  usernameAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<RootQueryTypeUsernameAvailableArgs, 'username'>>,
  peoplePages?: Resolver<ResolversTypes['AgentsPage'], ParentType, ContextType, RootQueryTypePeoplePagesArgs>,
  productBatch?: Resolver<Maybe<ResolversTypes['ProductBatch']>, ParentType, ContextType, RootQueryTypeProductBatchArgs>,
  agreement?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType, RootQueryTypeAgreementArgs>,
  resource?: Resolver<Maybe<ResolversTypes['Resource']>, ParentType, ContextType, RequireFields<RootQueryTypeResourceArgs, 'resourceId'>>,
  offersPages?: Resolver<ResolversTypes['IntentsPage'], ParentType, ContextType, RootQueryTypeOffersPagesArgs>,
  measure?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType, RootQueryTypeMeasureArgs>,
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RootQueryTypeOrganizationArgs>,
  fulfillments?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType, RootQueryTypeFulfillmentsArgs>,
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType, RequireFields<RootQueryTypeCharacterArgs, 'characterId'>>,
  economicEvent?: Resolver<Maybe<ResolversTypes['EconomicEvent']>, ParentType, ContextType, RootQueryTypeEconomicEventArgs>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, RootQueryTypeProcessesArgs>,
  spatialThingsPages?: Resolver<ResolversTypes['SpatialThingsPage'], ParentType, ContextType, RootQueryTypeSpatialThingsPagesArgs>,
  registerEmailAccesses?: Resolver<ResolversTypes['RegisterEmailAccessesPage'], ParentType, ContextType, RootQueryTypeRegisterEmailAccessesArgs>,
  agentRelationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, RootQueryTypeAgentRelationshipsArgs>,
  process?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType, RootQueryTypeProcessArgs>,
  intentsFiltered?: Resolver<Maybe<Array<Maybe<ResolversTypes['Intent']>>>, ParentType, ContextType, RootQueryTypeIntentsFilteredArgs>,
  scenarioDefinitions?: Resolver<Maybe<Array<ResolversTypes['ScenarioDefinition']>>, ParentType, ContextType, RootQueryTypeScenarioDefinitionsArgs>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, RootQueryTypePlansArgs>,
  follow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType, RequireFields<RootQueryTypeFollowArgs, 'followId'>>,
  agentRelationshipRoles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType, RootQueryTypeAgentRelationshipRolesArgs>,
  fulfillment?: Resolver<Maybe<ResolversTypes['Fulfillment']>, ParentType, ContextType, RootQueryTypeFulfillmentArgs>,
  registerEmailDomainAccesses?: Resolver<ResolversTypes['RegisterEmailDomainAccessesPage'], ParentType, ContextType, RootQueryTypeRegisterEmailDomainAccessesArgs>,
  characters?: Resolver<ResolversTypes['CharactersPage'], ParentType, ContextType, RootQueryTypeCharactersArgs>,
  users?: Resolver<ResolversTypes['UsersPage'], ParentType, ContextType, RootQueryTypeUsersArgs>,
  action?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType, RootQueryTypeActionArgs>,
  feature?: Resolver<Maybe<ResolversTypes['Feature']>, ParentType, ContextType, RequireFields<RootQueryTypeFeatureArgs, 'featureId'>>,
  satisfaction?: Resolver<Maybe<ResolversTypes['Satisfaction']>, ParentType, ContextType, RootQueryTypeSatisfactionArgs>,
  recipeFlows?: Resolver<Maybe<Array<ResolversTypes['RecipeFlow']>>, ParentType, ContextType, RootQueryTypeRecipeFlowsArgs>,
  settlements?: Resolver<Maybe<Array<ResolversTypes['Settlement']>>, ParentType, ContextType, RootQueryTypeSettlementsArgs>,
  measuresPages?: Resolver<ResolversTypes['MeasuresPage'], ParentType, ContextType, RootQueryTypeMeasuresPagesArgs>,
  processSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType, RootQueryTypeProcessSpecificationArgs>,
  recipeResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType, RootQueryTypeRecipeResourceArgs>,
  taggable?: Resolver<Maybe<ResolversTypes['Taggable']>, ParentType, ContextType, RootQueryTypeTaggableArgs>,
  thread?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<RootQueryTypeThreadArgs, 'threadId'>>,
  recipeExchanges?: Resolver<Maybe<Array<ResolversTypes['RecipeExchange']>>, ParentType, ContextType, RootQueryTypeRecipeExchangesArgs>,
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<RootQueryTypeProfileArgs, 'profileId'>>,
  agentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRole']>, ParentType, ContextType, RootQueryTypeAgentRelationshipRoleArgs>,
  language?: Resolver<Maybe<ResolversTypes['Language']>, ParentType, ContextType, RequireFields<RootQueryTypeLanguageArgs, 'languageId'>>,
  units?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType, RootQueryTypeUnitsArgs>,
  resourceSpecifications?: Resolver<Maybe<Array<ResolversTypes['ResourceSpecification']>>, ParentType, ContextType, RootQueryTypeResourceSpecificationsArgs>,
  economicEventsFiltered?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, RootQueryTypeEconomicEventsFilteredArgs>,
  features?: Resolver<Maybe<ResolversTypes['FeaturesPage']>, ParentType, ContextType, RootQueryTypeFeaturesArgs>,
  communities?: Resolver<ResolversTypes['CommunitiesPage'], ParentType, ContextType, RootQueryTypeCommunitiesArgs>,
  satisfactions?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType, RootQueryTypeSatisfactionsArgs>,
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>,
  flag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType, RequireFields<RootQueryTypeFlagArgs, 'flagId'>>,
  organisation?: Resolver<Maybe<ResolversTypes['Organisation']>, ParentType, ContextType, RequireFields<RootQueryTypeOrganisationArgs, 'organisationId'>>,
  countries?: Resolver<ResolversTypes['CountriesPages'], ParentType, ContextType, RootQueryTypeCountriesArgs>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RootQueryTypeCategoryArgs>,
  intent?: Resolver<Maybe<ResolversTypes['Intent']>, ParentType, ContextType, RootQueryTypeIntentArgs>,
  needsPages?: Resolver<ResolversTypes['IntentsPage'], ParentType, ContextType, RootQueryTypeNeedsPagesArgs>,
  collections?: Resolver<ResolversTypes['CollectionsPage'], ParentType, ContextType, RootQueryTypeCollectionsArgs>,
  taxonomyTags?: Resolver<ResolversTypes['TaxonomyTagsPage'], ParentType, ContextType, RootQueryTypeTaxonomyTagsArgs>,
  flags?: Resolver<Maybe<ResolversTypes['FlagsPage']>, ParentType, ContextType, RootQueryTypeFlagsArgs>,
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RootQueryTypeUnitArgs>,
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RootQueryTypeProposalArgs>,
  instance?: Resolver<Maybe<ResolversTypes['Instance']>, ParentType, ContextType>,
};

export type SatisfactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Satisfaction'] = ResolversParentTypes['Satisfaction']> = {
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  satisfiedBy?: Resolver<ResolversTypes['EventOrCommitment'], ParentType, ContextType>,
  satisfies?: Resolver<ResolversTypes['Intent'], ParentType, ContextType>,
};

export type SatisfactionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SatisfactionResponse'] = ResolversParentTypes['SatisfactionResponse']> = {
  satisfaction?: Resolver<Maybe<ResolversTypes['Satisfaction']>, ParentType, ContextType>,
};

export type ScenarioResolvers<ContextType = any, ParentType extends ResolversParentTypes['Scenario'] = ResolversParentTypes['Scenario']> = {
  definedAs?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType>,
  hasBeginning?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  hasEnd?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  refinementOf?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
};

export type ScenarioDefinitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScenarioDefinition'] = ResolversParentTypes['ScenarioDefinition']> = {
  hasDuration?: Resolver<Maybe<ResolversTypes['Duration']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ScenarioDefinitionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScenarioDefinitionResponse'] = ResolversParentTypes['ScenarioDefinitionResponse']> = {
  scenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType>,
};

export type ScenarioResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ScenarioResponse'] = ResolversParentTypes['ScenarioResponse']> = {
  scenario?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType>,
};

export type SettlementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Settlement'] = ResolversParentTypes['Settlement']> = {
  effortQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  settledBy?: Resolver<ResolversTypes['EconomicEvent'], ParentType, ContextType>,
  settles?: Resolver<ResolversTypes['Claim'], ParentType, ContextType>,
};

export type SettlementResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SettlementResponse'] = ResolversParentTypes['SettlementResponse']> = {
  settlement?: Resolver<Maybe<ResolversTypes['Settlement']>, ParentType, ContextType>,
};

export type SpatialThingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpatialThing'] = ResolversParentTypes['SpatialThing']> = {
  alt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  geom?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  lat?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  long?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  mappableAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type SpatialThingResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpatialThingResponse'] = ResolversParentTypes['SpatialThingResponse']> = {
  spatialThing?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
};

export type SpatialThingsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpatialThingsPage'] = ResolversParentTypes['SpatialThingsPage']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['SpatialThing']>>>, ParentType, ContextType>,
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>,
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export type TaggableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Taggable'] = ResolversParentTypes['Taggable']> = {
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  facet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  things?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnyContext']>>>, ParentType, ContextType>,
};

export type TaxonomyTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyTag'] = ResolversParentTypes['TaxonomyTag']> = {
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
  childrenTaxonomyTags?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxonomyTagsPage']>>>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parentTag?: Resolver<Maybe<ResolversTypes['TaxonomyTag']>, ParentType, ContextType>,
  pointerId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type TaxonomyTagsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxonomyTagsPage'] = ResolversParentTypes['TaxonomyTagsPage']> = {
  edges?: Resolver<Array<ResolversTypes['TaxonomyTag']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ThreadResolvers<ContextType = any, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, ThreadCommentsArgs>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, ThreadFollowersArgs>,
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  isHidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  lastActivity?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type ThreadsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ThreadsPage'] = ResolversParentTypes['ThreadsPage']> = {
  edges?: Resolver<Array<ResolversTypes['Thread']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type UnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['Unit'] = ResolversParentTypes['Unit']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type UnitResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitResponse'] = ResolversParentTypes['UnitResponse']> = {
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType>,
};

export type UnitsPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UnitsPage'] = ResolversParentTypes['UnitsPage']> = {
  edges?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType>,
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>,
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export interface UriScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URI'], any> {
  name: 'URI'
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  myFlag?: Resolver<Maybe<ResolversTypes['Flag']>, ParentType, ContextType>,
  collectionFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserCollectionFollowsArgs>,
  myFollow?: Resolver<Maybe<ResolversTypes['Follow']>, ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  geolocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  preferredUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  inbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, UserInboxArgs>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  userFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserUserFollowsArgs>,
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isPublic?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  isLocal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  displayUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  follows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserFollowsArgs>,
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  lastActivity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  likerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType>,
  likes?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, UserLikesArgs>,
  outbox?: Resolver<Maybe<ResolversTypes['ActivitiesPage']>, ParentType, ContextType, UserOutboxArgs>,
  communityFollows?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserCommunityFollowsArgs>,
  likeCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  myLike?: Resolver<Maybe<ResolversTypes['Like']>, ParentType, ContextType>,
  likers?: Resolver<Maybe<ResolversTypes['LikesPage']>, ParentType, ContextType, UserLikersArgs>,
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  followers?: Resolver<Maybe<ResolversTypes['FollowsPage']>, ParentType, ContextType, UserFollowersArgs>,
  comments?: Resolver<Maybe<ResolversTypes['CommentsPage']>, ParentType, ContextType, UserCommentsArgs>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type UsersPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPage'] = ResolversParentTypes['UsersPage']> = {
  edges?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
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
  AccountingScope?: AccountingScopeResolvers,
  Action?: ActionResolvers<ContextType>,
  ActivitiesPage?: ActivitiesPageResolvers<ContextType>,
  Activity?: ActivityResolvers<ContextType>,
  Agent?: AgentResolvers,
  AgentRelationship?: AgentRelationshipResolvers<ContextType>,
  AgentRelationshipResponse?: AgentRelationshipResponseResolvers<ContextType>,
  AgentRelationshipRole?: AgentRelationshipRoleResolvers<ContextType>,
  AgentRelationshipRoleResponse?: AgentRelationshipRoleResponseResolvers<ContextType>,
  AgentsPage?: AgentsPageResolvers<ContextType>,
  Agreement?: AgreementResolvers<ContextType>,
  AgreementResponse?: AgreementResponseResolvers<ContextType>,
  AnyContext?: AnyContextResolvers,
  Appreciation?: AppreciationResolvers<ContextType>,
  AppreciationResponse?: AppreciationResponseResolvers<ContextType>,
  AuthPayload?: AuthPayloadResolvers<ContextType>,
  CategoriesPage?: CategoriesPageResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Character?: CharacterResolvers<ContextType>,
  CharactersPage?: CharactersPageResolvers<ContextType>,
  Claim?: ClaimResolvers<ContextType>,
  ClaimResponse?: ClaimResponseResolvers<ContextType>,
  Collection?: CollectionResolvers<ContextType>,
  CollectionsPage?: CollectionsPageResolvers<ContextType>,
  Comment?: CommentResolvers<ContextType>,
  CommentsPage?: CommentsPageResolvers<ContextType>,
  Commitment?: CommitmentResolvers<ContextType>,
  CommitmentResponse?: CommitmentResponseResolvers<ContextType>,
  CommunitiesPage?: CommunitiesPageResolvers<ContextType>,
  Community?: CommunityResolvers<ContextType>,
  Content?: ContentResolvers<ContextType>,
  ContentMirror?: ContentMirrorResolvers<ContextType>,
  ContentUpload?: ContentUploadResolvers<ContextType>,
  CountriesPages?: CountriesPagesResolvers<ContextType>,
  Country?: CountryResolvers<ContextType>,
  Cursor?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  Duration?: DurationResolvers<ContextType>,
  EconomicEvent?: EconomicEventResolvers<ContextType>,
  EconomicEventPage?: EconomicEventPageResolvers<ContextType>,
  EconomicEventResponse?: EconomicEventResponseResolvers<ContextType>,
  EconomicResource?: EconomicResourceResolvers<ContextType>,
  EconomicResourcePage?: EconomicResourcePageResolvers<ContextType>,
  EconomicResourceResponse?: EconomicResourceResponseResolvers<ContextType>,
  EventOrCommitment?: EventOrCommitmentResolvers,
  Feature?: FeatureResolvers<ContextType>,
  FeaturesPage?: FeaturesPageResolvers<ContextType>,
  FileIntrinsics?: FileIntrinsicsResolvers<ContextType>,
  FileMetadata?: FileMetadataResolvers<ContextType>,
  Flag?: FlagResolvers<ContextType>,
  FlagsPage?: FlagsPageResolvers<ContextType>,
  Follow?: FollowResolvers<ContextType>,
  FollowsPage?: FollowsPageResolvers<ContextType>,
  Fulfillment?: FulfillmentResolvers<ContextType>,
  FulfillmentResponse?: FulfillmentResponseResolvers<ContextType>,
  Instance?: InstanceResolvers<ContextType>,
  Intent?: IntentResolvers<ContextType>,
  IntentResponse?: IntentResponseResolvers<ContextType>,
  IntentsPage?: IntentsPageResolvers<ContextType>,
  Json?: GraphQLScalarType,
  Language?: LanguageResolvers<ContextType>,
  LanguagesPage?: LanguagesPageResolvers<ContextType>,
  Like?: LikeResolvers<ContextType>,
  LikesPage?: LikesPageResolvers<ContextType>,
  Me?: MeResolvers<ContextType>,
  Measure?: MeasureResolvers<ContextType>,
  MeasuresPage?: MeasuresPageResolvers<ContextType>,
  Organisation?: OrganisationResolvers<ContextType>,
  OrganisationsPage?: OrganisationsPageResolvers<ContextType>,
  Organization?: OrganizationResolvers<ContextType>,
  OrganizationResponse?: OrganizationResponseResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Person?: PersonResolvers<ContextType>,
  PersonResponse?: PersonResponseResolvers<ContextType>,
  Plan?: PlanResolvers<ContextType>,
  PlanResponse?: PlanResponseResolvers<ContextType>,
  Process?: ProcessResolvers<ContextType>,
  ProcessPage?: ProcessPageResolvers<ContextType>,
  ProcessResponse?: ProcessResponseResolvers<ContextType>,
  ProcessSpecification?: ProcessSpecificationResolvers<ContextType>,
  ProcessSpecificationResponse?: ProcessSpecificationResponseResolvers<ContextType>,
  ProductBatch?: ProductBatchResolvers<ContextType>,
  ProductBatchResponse?: ProductBatchResponseResolvers<ContextType>,
  ProductionFlowItem?: ProductionFlowItemResolvers,
  Profile?: ProfileResolvers<ContextType>,
  ProfilesPage?: ProfilesPageResolvers<ContextType>,
  Proposal?: ProposalResolvers<ContextType>,
  ProposalResponse?: ProposalResponseResolvers<ContextType>,
  ProposalsPage?: ProposalsPageResolvers<ContextType>,
  ProposedIntent?: ProposedIntentResolvers<ContextType>,
  ProposedIntentResponse?: ProposedIntentResponseResolvers<ContextType>,
  ProposedTo?: ProposedToResolvers<ContextType>,
  ProposedToResponse?: ProposedToResponseResolvers<ContextType>,
  RecipeExchange?: RecipeExchangeResolvers<ContextType>,
  RecipeExchangeResponse?: RecipeExchangeResponseResolvers<ContextType>,
  RecipeFlow?: RecipeFlowResolvers<ContextType>,
  RecipeFlowResponse?: RecipeFlowResponseResolvers<ContextType>,
  RecipeProcess?: RecipeProcessResolvers<ContextType>,
  RecipeProcessResponse?: RecipeProcessResponseResolvers<ContextType>,
  RecipeResource?: RecipeResourceResolvers<ContextType>,
  RecipeResourceResponse?: RecipeResourceResponseResolvers<ContextType>,
  RegisterEmailAccess?: RegisterEmailAccessResolvers<ContextType>,
  RegisterEmailAccessesPage?: RegisterEmailAccessesPageResolvers<ContextType>,
  RegisterEmailDomainAccess?: RegisterEmailDomainAccessResolvers<ContextType>,
  RegisterEmailDomainAccessesPage?: RegisterEmailDomainAccessesPageResolvers<ContextType>,
  Resource?: ResourceResolvers<ContextType>,
  ResourcesPage?: ResourcesPageResolvers<ContextType>,
  ResourceSpecification?: ResourceSpecificationResolvers<ContextType>,
  ResourceSpecificationResponse?: ResourceSpecificationResponseResolvers<ContextType>,
  RootMutationType?: RootMutationTypeResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  Satisfaction?: SatisfactionResolvers<ContextType>,
  SatisfactionResponse?: SatisfactionResponseResolvers<ContextType>,
  Scenario?: ScenarioResolvers<ContextType>,
  ScenarioDefinition?: ScenarioDefinitionResolvers<ContextType>,
  ScenarioDefinitionResponse?: ScenarioDefinitionResponseResolvers<ContextType>,
  ScenarioResponse?: ScenarioResponseResolvers<ContextType>,
  Settlement?: SettlementResolvers<ContextType>,
  SettlementResponse?: SettlementResponseResolvers<ContextType>,
  SpatialThing?: SpatialThingResolvers<ContextType>,
  SpatialThingResponse?: SpatialThingResponseResolvers<ContextType>,
  SpatialThingsPage?: SpatialThingsPageResolvers<ContextType>,
  Taggable?: TaggableResolvers<ContextType>,
  TaxonomyTag?: TaxonomyTagResolvers<ContextType>,
  TaxonomyTagsPage?: TaxonomyTagsPageResolvers<ContextType>,
  Thread?: ThreadResolvers<ContextType>,
  ThreadsPage?: ThreadsPageResolvers<ContextType>,
  Unit?: UnitResolvers<ContextType>,
  UnitResponse?: UnitResponseResolvers<ContextType>,
  UnitsPage?: UnitsPageResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  URI?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UsersPage?: UsersPageResolvers<ContextType>,
  WebMetadata?: WebMetadataResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
