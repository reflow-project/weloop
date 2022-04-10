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
   * Is actually a string or integer, typically an ID.
   * Can also be include encoded data describing how a query is ordered.
   * May be extended in future.
 **/
  Cursor: any,
  /** Arbitrary json stored as a string */
  Json: any,
  /** The `URI` type simply declares a reference to an external web URL, Holochain entry or other resource. */
  URI: any,
  /** 
 * The `DateTime` scalar type represents a date and time in the UTC
   * timezone. The DateTime appears in a JSON response as an ISO8601 formatted
   * string, including UTC timezone ("Z"). The parsed date and time string will
   * be converted to UTC if there is an offset.
 **/
  DateTime: any,
  /** Represents an uploaded file. */
  Upload: any,
};

/** 
 * A boundary or context grouped around some other record- used for documenting, accounting, planning.
 * ## extended for Bonfire (default was `Person | Organization`)
 **/
export type AccountingScope = Category | Organization | Person | Tag;

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

export type Activity = {
   __typename?: 'Activity',
  directReplies?: Maybe<Array<Maybe<Replied>>>,
  id?: Maybe<Scalars['ID']>,
  object?: Maybe<AnyContext>,
  objectId?: Maybe<Scalars['String']>,
  subject?: Maybe<AnyCharacter>,
  subjectId?: Maybe<Scalars['String']>,
  verb?: Maybe<Verb>,
};


export type ActivityDirectRepliesArgs = {
  paginate?: Maybe<Paginate>
};

export type ActivityFilters = {
  activityId?: Maybe<Scalars['ID']>,
  objectId?: Maybe<Scalars['ID']>,
};

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
  filter?: Maybe<IntentSearchParams>
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

/** Any type of character (eg. Category, Thread, Geolocation, etc), actor (eg. User/Person), or agent (eg. Organisation) */
export type AnyCharacter = Category | SpatialThing | User;

/** Any type of known object */
export type AnyContext = Activity | Category | EconomicEvent | Follow | Intent | Post | Process | SpatialThing | Tag | User;

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
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  facet?: Maybe<Scalars['String']>,
  /** The numeric primary key of the category */
  id?: Maybe<Scalars['ID']>,
  name?: Maybe<Scalars['String']>,
  /** The parent category (in a tree-based taxonomy) */
  parentCategory?: Maybe<Category>,
  parentCategoryId?: Maybe<Scalars['String']>,
  prefix?: Maybe<Scalars['String']>,
  /** List of child categories (in a tree-based taxonomy) */
  subCategories?: Maybe<Array<Maybe<CategoriesPage>>>,
  summary?: Maybe<Scalars['String']>,
};

export type CategoryInput = {
  /** A JSON document containing more info beyond the default fields */
  extraInfo?: Maybe<Scalars['Json']>,
  facet?: Maybe<Scalars['String']>,
  name: Scalars['String'],
  parentCategory?: Maybe<Scalars['ID']>,
  prefix?: Maybe<Scalars['String']>,
  sameAsCategory?: Maybe<Scalars['ID']>,
  summary?: Maybe<Scalars['String']>,
};

export type Character = {
   __typename?: 'Character',
  username?: Maybe<Scalars['String']>,
};

export type CharacterFilters = {
  autocomplete?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['ID']>,
  username?: Maybe<Scalars['String']>,
};

export type CharacterInput = {
  username?: Maybe<Scalars['String']>,
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
  /** Specifies if a calculation will be applied to this claim when an economic event is logged. */
  calculatedUsing?: Maybe<ValueCalculation>,
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
  /** The value calculation (if any) used to generate this event. */
  calculatedUsing?: Maybe<ValueCalculation>,
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


/** 
 * An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 **/
export type EconomicEventTraceArgs = {
  recurseLimit?: Maybe<Scalars['Int']>
};


/** 
 * An observed economic flow, as opposed to a flow planned to happen in the future.
 * This could reflect a change in the quantity of an economic resource. It is also
 * defined by its behavior in relation to the economic resource (see `Action`)
 **/
export type EconomicEventTrackArgs = {
  recurseLimit?: Maybe<Scalars['Int']>
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
  /** Any reciprocal events created by found value calculations. */
  reciprocalEvents?: Maybe<Array<EconomicEvent>>,
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
  conformsTo?: Maybe<ResourceSpecification>,
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
  tags?: Maybe<Array<AnyContext>>,
  trace?: Maybe<Array<ProductionFlowItem>>,
  track?: Maybe<Array<ProductionFlowItem>>,
  /** 
 * Sometimes called serial number, used when each item must have a traceable
   * identifier (like a computer). Could also be used for other unique tracking
   * identifiers needed for resources.
 **/
  trackingIdentifier?: Maybe<Scalars['String']>,
  /** The unit used for use or work or cite actions for this resource. */
  unitOfEffort?: Maybe<Unit>,
};


/** A resource which is useful to people or the ecosystem. */
export type EconomicResourceTraceArgs = {
  recurseLimit?: Maybe<Scalars['Int']>
};


/** A resource which is useful to people or the ecosystem. */
export type EconomicResourceTrackArgs = {
  recurseLimit?: Maybe<Scalars['Int']>
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

export type FeedFilters = {
  feedName?: Maybe<Scalars['String']>,
};

export type Follow = {
   __typename?: 'Follow',
  followedCharacter?: Maybe<Character>,
  followedProfile?: Maybe<Profile>,
  followerCharacter?: Maybe<Character>,
  followerProfile?: Maybe<Profile>,
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

export type ImagesUpload = {
  icon?: Maybe<Scalars['Upload']>,
  image?: Maybe<Scalars['Upload']>,
};

/** Mutation input structure for defining measurements. Should be nulled if not present, rather than empty. */
export type IMeasure = {
  /** A number representing the quantity, will be paired with a unit. */
  hasNumericalValue: Scalars['Float'],
  /** (`Unit`) A unit of measure. */
  hasUnit: Scalars['ID'],
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
  /** The uri to an image relevant to the intent, such as a photo. */
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

/** Query parameters for reading `Intent`s related to an `Agent` */
export type IntentSearchParams = {
  action?: Maybe<Array<Maybe<Scalars['ID']>>>,
  agent?: Maybe<Array<Maybe<Scalars['ID']>>>,
  atLocation?: Maybe<Array<Maybe<Scalars['ID']>>>,
  classifiedAs?: Maybe<Array<Maybe<Scalars['URI']>>>,
  endDate?: Maybe<Scalars['DateTime']>,
  finished?: Maybe<Scalars['Boolean']>,
  geolocation?: Maybe<GeolocationFilters>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>,
  provider?: Maybe<Array<Maybe<Scalars['ID']>>>,
  receiver?: Maybe<Array<Maybe<Scalars['ID']>>>,
  searchString?: Maybe<Scalars['String']>,
  startDate?: Maybe<Scalars['DateTime']>,
  status?: Maybe<Scalars['String']>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
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


export type LoginResponse = {
   __typename?: 'LoginResponse',
  currentAccountId?: Maybe<Scalars['String']>,
  currentUser?: Maybe<User>,
  currentUsername?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

export type Me = {
   __typename?: 'Me',
  accountId?: Maybe<Scalars['ID']>,
  flagsForModeration?: Maybe<Array<Maybe<Activity>>>,
  followed?: Maybe<Array<Maybe<Follow>>>,
  followers?: Maybe<Array<Maybe<Follow>>>,
  likeActivities?: Maybe<Array<Maybe<Activity>>>,
  /** a bearer token used for authentication */
  token?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  userFeed?: Maybe<Array<Maybe<Activity>>>,
  userNotifications?: Maybe<Array<Maybe<Activity>>>,
  users?: Maybe<Array<Maybe<User>>>,
};


export type MeFlagsForModerationArgs = {
  paginate?: Maybe<Paginate>
};


export type MeFollowedArgs = {
  paginate?: Maybe<Paginate>
};


export type MeFollowersArgs = {
  paginate?: Maybe<Paginate>
};


export type MeLikeActivitiesArgs = {
  paginate?: Maybe<Paginate>
};


export type MeUserFeedArgs = {
  paginate?: Maybe<Paginate>
};


export type MeUserNotificationsArgs = {
  paginate?: Maybe<Paginate>
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

/** Things that can be observed. */
export type ObservableObject = EconomicResource | Organization | Person;

/** 
 * Possible qualitative assessment of an `ObservableProperty`.
 * (eg. property "contamination" may have phenomenon like "high", "some", "none")
 **/
export type ObservablePhenomenon = {
   __typename?: 'ObservablePhenomenon',
  /** What observable property does this assessment apply to? */
  choiceOf?: Maybe<ObservableProperty>,
  /** 
 * A numerical representation of this phenomenon, to be used when automatic
   * analysis is needed (like value calculation formulas).
 **/
  formulaQuantifier?: Maybe<Scalars['Float']>,
  id: Scalars['ID'],
  /** A name for this phenomenon (eg. high, ripe, organic). Unique to each ObservableProperty. */
  label: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

/** 
 * Possible qualitative assessment of an `ObservableProperty`.
 * (eg. property "contamination" may have phenomenon like "high", "some", "none")
 **/
export type ObservablePhenomenonInputParams = {
  /** What observable property does this assessment apply to? */
  choiceOf: Scalars['ID'],
  /** 
 * A numerical representation of this phenomenon, to be used when automatic
   * analysis is needed (like value calculation formulas). For example, a series of
   * phenomenon of high, medium, low, or none could be assigned formula quantifiers
   * of 100, 50, 10, or 0.
 **/
  formulaQuantifier?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['ID']>,
  /** A name for this phenomenon (eg. high, ripe, organic). Unique to each ObservableProperty. */
  label: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ObservablePhenomenonPage = {
   __typename?: 'ObservablePhenomenonPage',
  edges: Array<ObservablePhenomenon>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** Types of things that can be observed or measured as part of `Observation`. */
export type ObservableProperty = {
   __typename?: 'ObservableProperty',
  hasChoices?: Maybe<Array<ObservablePhenomenon>>,
  id: Scalars['ID'],
  /** A name for something that can be observed (eg, temperature, weight, contamination...) */
  label: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

/** Types of things that can be observed or measured as part of `Observation`. */
export type ObservablePropertyInputParams = {
  id?: Maybe<Scalars['ID']>,
  /** A name for something that can be observed (eg, temperature, weight, contamination...) */
  label: Scalars['String'],
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
};

export type ObservablePropertyPage = {
   __typename?: 'ObservablePropertyPage',
  edges: Array<ObservableProperty>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** Can contain either a unit+measure or a qualitative assessment. */
export type ObservableResult = Measure | ObservablePhenomenon;

/** An observation event that records the measurement or assessement of an economic resource. */
export type Observation = {
   __typename?: 'Observation',
  /** The place where an observation occured. Usually mappable. */
  atLocation?: Maybe<SpatialThing>,
  /** Thing that was observed (like `EconomicResource` or `Agent`) */
  hasFeatureOfInterest: ObservableObject,
  /** 
 * The result of the observation, which can be one of:
   * - Unit and measurement of what was observed (in the case of quantitative measurements)
   * - Name and other information (using `ObservablePhenomenon`) about what was
   * observed (in the case of qualitative measurements)
 **/
  hasResult: ObservableResult,
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** 
 * The person (`Agent`) or a machine like a sensor (`EconomicResource` or
   * `ResourceSpecification`) who actually conducted the observation
 **/
  madeBySensor: Observer,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** Optionally defines the economic process during which this event occured */
  observedDuring?: Maybe<Process>,
  /** Type of measurement (eg, temperature, weight...). */
  observedProperty: ObservableProperty,
  /** The agent who is providing the observation */
  provider: Agent,
  /** The date and time at which the observation event. */
  resultTime: Scalars['DateTime'],
};

export type ObservationInputParams = {
  /** (`SpatialThing`) The place where an observation occured.  Usually mappable. */
  atLocation?: Maybe<Scalars['ID']>,
  /** (`EconomicResource` or `Agent`) Thing that was observed */
  hasFeatureOfInterest: Scalars['ID'],
  id?: Maybe<Scalars['ID']>,
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  /** 
 * (`Person` or `EconomicResource` or `ResourceSpecification`) The person or
   * machine or sensor who actually conducted the observation
 **/
  madeBySensor?: Maybe<Scalars['ID']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** (`Process`) Optionally defines the economic process during which this event occured */
  observedDuring?: Maybe<Scalars['ID']>,
  /** (`ObservableProperty`) Type of measurement (eg, temperature, weight...). */
  observedProperty: Scalars['ID'],
  /** (`Person` or `Organization`) The agent who is providing the observation */
  provider?: Maybe<Scalars['ID']>,
  /** 
 * Alternatively to `resultPhenomenon`: Unit and measurement of what was observed
   * (only in the case of quantitative measurements)
 **/
  resultMeasure?: Maybe<IMeasure>,
  /** 
 * Alternatively to `resultMeasure`: (`ObservablePhenomenon`) Name and other
   * information about what was observed (only in the case of qualitative measurements)
 **/
  resultPhenomenon?: Maybe<Scalars['ID']>,
  /** The date and time at which the observation occurred. */
  resultTime?: Maybe<Scalars['DateTime']>,
};

export type ObservationPage = {
   __typename?: 'ObservationPage',
  edges: Array<Observation>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

/** Agent (usually a person) or machine like a sensor that conducts observations. */
export type Observer = EconomicResource | Organization | Person | ResourceSpecification;

/** A formal or informal group, or legal organization. */
export type Organization = {
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
  filter?: Maybe<IntentSearchParams>
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
  /** 
 * Cursor pointing to the last of the results returned, to be used with `after`
   * query parameter if the backend supports forward pagination.
 **/
  endCursor?: Maybe<Array<Scalars['Cursor']>>,
  /** 
 * True if there are more results after `endCursor`. If unable to be determined,
   * implementations should return `true` to allow for requerying.
 **/
  hasNextPage?: Maybe<Scalars['Boolean']>,
  /** 
 * True if there are more results before `startCursor`. If unable to be
   * determined, implementations should return `true` to allow for requerying.
 **/
  hasPreviousPage?: Maybe<Scalars['Boolean']>,
  /** 
 * Cursor pointing to the first of the results returned, to be used with `before`
   * query parameter if the backend supports reverse pagination.
 **/
  startCursor?: Maybe<Array<Scalars['Cursor']>>,
  /** Returns the total result count, if it can be determined. */
  totalCount?: Maybe<Scalars['Int']>,
};

export type Paginate = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>,
};

/** A natural person. */
export type Person = {
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
  filter?: Maybe<IntentSearchParams>
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

export type Post = {
   __typename?: 'Post',
  activity?: Maybe<Activity>,
  id?: Maybe<Scalars['ID']>,
  postContent?: Maybe<PostContent>,
};

export type PostContent = {
   __typename?: 'PostContent',
  htmlBody?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type PostContentInput = {
  htmlBody?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

export type PostFilters = {
  id?: Maybe<Scalars['ID']>,
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
  trace?: Maybe<Array<ProductionFlowItem>>,
  track?: Maybe<Array<ProductionFlowItem>>,
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
  action?: Maybe<Scalars['ID']>,
  filter?: Maybe<IntentSearchParams>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessIntendedOutputsArgs = {
  action?: Maybe<Scalars['ID']>,
  filter?: Maybe<IntentSearchParams>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessOutputsArgs = {
  action?: Maybe<Scalars['ID']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessTraceArgs = {
  recurseLimit?: Maybe<Scalars['Int']>
};


/** An activity that changes inputs into outputs.  It could transform or transport economic resource(s). */
export type ProcessTrackArgs = {
  recurseLimit?: Maybe<Scalars['Int']>
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

export type ProductionFlowItem = EconomicEvent | EconomicResource | Process;

export type Profile = {
   __typename?: 'Profile',
  icon?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
};

export type ProfileInput = {
  location?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  summary?: Maybe<Scalars['String']>,
  website?: Maybe<Scalars['String']>,
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
  processConformsTo?: Maybe<ProcessSpecification>,
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

export type Replied = {
   __typename?: 'Replied',
  activity?: Maybe<Activity>,
  directReplies?: Maybe<Array<Maybe<Replied>>>,
  post?: Maybe<Post>,
  postContent?: Maybe<PostContent>,
  replyToId?: Maybe<Scalars['ID']>,
  threadId?: Maybe<Scalars['ID']>,
};


export type RepliedDirectRepliesArgs = {
  paginate?: Maybe<Paginate>
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
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<AnyContext>>,
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
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
};

export type ResourceSpecificationPage = {
   __typename?: 'ResourceSpecificationPage',
  edges: Array<ResourceSpecification>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
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
  /** 
 * Tags/Categories in a taxonomy, linked to resourceClassifiedAs:
   * References one or more concepts in a common taxonomy or other classification
   * scheme for purposes of categorization or grouping.
 **/
  tags?: Maybe<Array<Scalars['ID']>>,
};

export type RootMutationType = {
   __typename?: 'RootMutationType',
  /** 
 * Share the current user identity with a team member. This will give them full
   * access to the currently authenticated user identity. Warning: anyone you add
   * will have full access over this user identity, meaning they can post as this
   * user, read private messages, etc.
 **/
  addTeamMember?: Maybe<Scalars['String']>,
  boost?: Maybe<Activity>,
  /** Change account password */
  changePassword?: Maybe<Me>,
  /** Confirm email address using a token generated upon `signup` or with `request_confirm_email` and emailed to the user. */
  confirmEmail?: Maybe<Me>,
  createAgentRelationship?: Maybe<AgentRelationshipResponse>,
  createAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>,
  createAgreement?: Maybe<AgreementResponse>,
  createAppreciation?: Maybe<AppreciationResponse>,
  /** Create a new Category */
  createCategory?: Maybe<Category>,
  createClaim?: Maybe<ClaimResponse>,
  createCommitment?: Maybe<CommitmentResponse>,
  createEconomicEvent?: Maybe<EconomicEventResponse>,
  createFulfillment?: Maybe<FulfillmentResponse>,
  createIntent?: Maybe<IntentResponse>,
  /** Creates a new need for the logged in user, will ignore any receiver specified. */
  createNeed?: Maybe<IntentResponse>,
  createObservablePhenomenon?: Maybe<ObservablePhenomenon>,
  createObservableProperty?: Maybe<ObservableProperty>,
  createObservation: Observation,
  /** Creates a new offer for the logged in user, will ignore any provider specified. */
  createOffer?: Maybe<IntentResponse>,
  /** Registers a new organization (group agent) with the collaboration space */
  createOrganization?: Maybe<OrganizationResponse>,
  /** Registers a new (human) person with the collaboration space */
  createPerson?: Maybe<PersonResponse>,
  createPlan?: Maybe<PlanResponse>,
  createPost?: Maybe<Post>,
  createProcess?: Maybe<ProcessResponse>,
  createProcessSpecification?: Maybe<ProcessSpecificationResponse>,
  createProductBatch?: Maybe<ProductBatchResponse>,
  createProposal?: Maybe<ProposalResponse>,
  createRecipeExchange?: Maybe<RecipeExchangeResponse>,
  createRecipeFlow?: Maybe<RecipeFlowResponse>,
  createRecipeProcess?: Maybe<RecipeProcessResponse>,
  createRecipeResource?: Maybe<RecipeResourceResponse>,
  createResourceSpecification?: Maybe<ResourceSpecificationResponse>,
  createSatisfaction?: Maybe<SatisfactionResponse>,
  createScenario?: Maybe<ScenarioResponse>,
  createScenarioDefinition?: Maybe<ScenarioDefinitionResponse>,
  createSettlement?: Maybe<SettlementResponse>,
  createSpatialThing?: Maybe<SpatialThingResponse>,
  createUnit?: Maybe<UnitResponse>,
  /** Request a new user identity for the authenticated account */
  createUser?: Maybe<Me>,
  createValueCalculation?: Maybe<ValueCalculationResponse>,
  /** Delete more or less anything */
  delete?: Maybe<AnyContext>,
  deleteAgentRelationship?: Maybe<Scalars['Boolean']>,
  deleteAgentRelationshipRole?: Maybe<Scalars['Boolean']>,
  deleteAgreement?: Maybe<Scalars['Boolean']>,
  deleteAppreciation?: Maybe<Scalars['Boolean']>,
  deleteClaim?: Maybe<Scalars['Boolean']>,
  deleteCommitment?: Maybe<Scalars['Boolean']>,
  deleteEconomicEvent?: Maybe<Scalars['Boolean']>,
  deleteEconomicResource?: Maybe<Scalars['Boolean']>,
  deleteFulfillment?: Maybe<Scalars['Boolean']>,
  deleteIntent?: Maybe<Scalars['Boolean']>,
  deleteObservablePhenomenon?: Maybe<Scalars['Boolean']>,
  deleteObservableProperty?: Maybe<Scalars['Boolean']>,
  deleteObservation?: Maybe<Scalars['Boolean']>,
  /** Erase record of an organization and thus remove it from the collaboration space */
  deleteOrganization?: Maybe<Scalars['Boolean']>,
  /** Erase record of a person and thus remove them from the collaboration space */
  deletePerson?: Maybe<Scalars['Boolean']>,
  deletePlan?: Maybe<Scalars['Boolean']>,
  deleteProcess?: Maybe<Scalars['Boolean']>,
  deleteProcessSpecification?: Maybe<Scalars['Boolean']>,
  deleteProductBatch?: Maybe<Scalars['Boolean']>,
  deleteProposal?: Maybe<Scalars['Boolean']>,
  deleteProposedIntent?: Maybe<Scalars['Boolean']>,
  deleteProposedTo?: Maybe<Scalars['Boolean']>,
  deleteRecipeExchange?: Maybe<Scalars['Boolean']>,
  deleteRecipeFlow?: Maybe<Scalars['Boolean']>,
  deleteRecipeProcess?: Maybe<Scalars['Boolean']>,
  deleteRecipeResource?: Maybe<Scalars['Boolean']>,
  deleteResourceSpecification?: Maybe<Scalars['Boolean']>,
  deleteSatisfaction?: Maybe<Scalars['Boolean']>,
  deleteScenario?: Maybe<Scalars['Boolean']>,
  deleteScenarioDefinition?: Maybe<Scalars['Boolean']>,
  deleteSettlement?: Maybe<Scalars['Boolean']>,
  deleteSpatialThing?: Maybe<Scalars['Boolean']>,
  deleteUnit?: Maybe<Scalars['Boolean']>,
  deleteValueCalculation?: Maybe<Scalars['Boolean']>,
  flag?: Maybe<Activity>,
  follow?: Maybe<Activity>,
  like?: Maybe<Activity>,
  /** Authenticate an account and/or user */
  login?: Maybe<LoginResponse>,
  /** 
 * Include an existing intent as part of a proposal.
   * @param publishedIn the (`Proposal`) to include the intent in
   * @param publishes the (`Intent`) to include as part of the proposal
 **/
  proposeIntent?: Maybe<ProposedIntentResponse>,
  /** 
 * Send a proposal to another agent.
   * @param proposed the (`Proposal`) to send to an involved agent
   * @param proposedTo the (`Agent`) to include in the proposal
 **/
  proposeTo?: Maybe<ProposedToResponse>,
  /** Request a new confirmation email */
  requestConfirmEmail?: Maybe<Scalars['String']>,
  /** Request an email to be sent to reset a forgotten password */
  requestResetPassword?: Maybe<Scalars['String']>,
  /** Switch to a user (among those from the authenticated account) */
  selectUser?: Maybe<LoginResponse>,
  /** Register a new account. Returns the created `account_id` */
  signup?: Maybe<Scalars['String']>,
  /** Tag a thing (using a Pointer) with one or more Tags (or Categories, or even Pointers to anything that can become tag) */
  tag?: Maybe<Scalars['Boolean']>,
  updateAgentRelationship?: Maybe<AgentRelationshipResponse>,
  updateAgentRelationshipRole?: Maybe<AgentRelationshipRoleResponse>,
  updateAgreement?: Maybe<AgreementResponse>,
  updateAppreciation?: Maybe<AppreciationResponse>,
  /** Update a category */
  updateCategory?: Maybe<Category>,
  updateClaim?: Maybe<ClaimResponse>,
  updateCommitment?: Maybe<CommitmentResponse>,
  updateEconomicEvent?: Maybe<EconomicEventResponse>,
  updateEconomicResource?: Maybe<EconomicResourceResponse>,
  updateFulfillment?: Maybe<FulfillmentResponse>,
  updateIntent?: Maybe<IntentResponse>,
  updateObservablePhenomenon?: Maybe<ObservablePhenomenon>,
  updateObservableProperty?: Maybe<ObservableProperty>,
  updateObservation: Observation,
  /** Update organization profile details */
  updateOrganization?: Maybe<OrganizationResponse>,
  /** Update profile details */
  updatePerson?: Maybe<PersonResponse>,
  updatePlan?: Maybe<PlanResponse>,
  updateProcess?: Maybe<ProcessResponse>,
  updateProcessSpecification?: Maybe<ProcessSpecificationResponse>,
  updateProductBatch?: Maybe<ProductBatchResponse>,
  updateProposal?: Maybe<ProposalResponse>,
  updateRecipeExchange?: Maybe<RecipeExchangeResponse>,
  updateRecipeFlow?: Maybe<RecipeFlowResponse>,
  updateRecipeProcess?: Maybe<RecipeProcessResponse>,
  updateRecipeResource?: Maybe<RecipeResourceResponse>,
  updateResourceSpecification?: Maybe<ResourceSpecificationResponse>,
  updateSatisfaction?: Maybe<SatisfactionResponse>,
  updateScenario?: Maybe<ScenarioResponse>,
  updateScenarioDefinition?: Maybe<ScenarioDefinitionResponse>,
  updateSettlement?: Maybe<SettlementResponse>,
  updateSpatialThing?: Maybe<SpatialThingResponse>,
  updateUnit?: Maybe<UnitResponse>,
  /** Edit user profile */
  updateUser?: Maybe<Me>,
  updateValueCalculation?: Maybe<ValueCalculationResponse>,
};


export type RootMutationTypeAddTeamMemberArgs = {
  label: Scalars['String'],
  usernameOrEmail: Scalars['String']
};


export type RootMutationTypeBoostArgs = {
  id: Scalars['String']
};


export type RootMutationTypeChangePasswordArgs = {
  oldPassword?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  passwordConfirmation: Scalars['String'],
  token?: Maybe<Scalars['String']>
};


export type RootMutationTypeConfirmEmailArgs = {
  token: Scalars['String']
};


export type RootMutationTypeCreateAgentRelationshipArgs = {
  relationship: AgentRelationshipCreateParams
};


export type RootMutationTypeCreateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleCreateParams>
};


export type RootMutationTypeCreateAgreementArgs = {
  agreement?: Maybe<AgreementCreateParams>
};


export type RootMutationTypeCreateAppreciationArgs = {
  appreciation: AppreciationCreateParams
};


export type RootMutationTypeCreateCategoryArgs = {
  category?: Maybe<CategoryInput>
};


export type RootMutationTypeCreateClaimArgs = {
  claim: ClaimCreateParams
};


export type RootMutationTypeCreateCommitmentArgs = {
  commitment?: Maybe<CommitmentCreateParams>
};


export type RootMutationTypeCreateEconomicEventArgs = {
  event: EconomicEventCreateParams,
  newInventoriedResource?: Maybe<EconomicResourceCreateParams>
};


export type RootMutationTypeCreateFulfillmentArgs = {
  fulfillment: FulfillmentCreateParams
};


export type RootMutationTypeCreateIntentArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeCreateNeedArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeCreateObservablePhenomenonArgs = {
  observablePhenomenon: ObservablePhenomenonInputParams
};


export type RootMutationTypeCreateObservablePropertyArgs = {
  observableProperty: ObservablePropertyInputParams
};


export type RootMutationTypeCreateObservationArgs = {
  observation: ObservationInputParams
};


export type RootMutationTypeCreateOfferArgs = {
  intent?: Maybe<IntentCreateParams>
};


export type RootMutationTypeCreateOrganizationArgs = {
  organization: AgentCreateParams
};


export type RootMutationTypeCreatePersonArgs = {
  person: AgentCreateParams
};


export type RootMutationTypeCreatePlanArgs = {
  plan: PlanCreateParams
};


export type RootMutationTypeCreatePostArgs = {
  postContent: PostContentInput,
  replyTo?: Maybe<Scalars['ID']>,
  toCircles?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootMutationTypeCreateProcessArgs = {
  process: ProcessCreateParams
};


export type RootMutationTypeCreateProcessSpecificationArgs = {
  processSpecification?: Maybe<ProcessSpecificationCreateParams>
};


export type RootMutationTypeCreateProductBatchArgs = {
  productBatch: ProductBatchCreateParams
};


export type RootMutationTypeCreateProposalArgs = {
  proposal?: Maybe<ProposalCreateParams>
};


export type RootMutationTypeCreateRecipeExchangeArgs = {
  recipeExchange?: Maybe<RecipeExchangeCreateParams>
};


export type RootMutationTypeCreateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowCreateParams>
};


export type RootMutationTypeCreateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessCreateParams>
};


export type RootMutationTypeCreateRecipeResourceArgs = {
  recipeResource?: Maybe<RecipeResourceCreateParams>
};


export type RootMutationTypeCreateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationCreateParams>
};


export type RootMutationTypeCreateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionCreateParams>
};


export type RootMutationTypeCreateScenarioArgs = {
  plan: ScenarioCreateParams
};


export type RootMutationTypeCreateScenarioDefinitionArgs = {
  plan: ScenarioDefinitionCreateParams
};


export type RootMutationTypeCreateSettlementArgs = {
  settlement: SettlementCreateParams
};


export type RootMutationTypeCreateSpatialThingArgs = {
  inScopeOf?: Maybe<Scalars['ID']>,
  spatialThing: SpatialThingCreateParams
};


export type RootMutationTypeCreateUnitArgs = {
  unit: UnitCreateParams
};


export type RootMutationTypeCreateUserArgs = {
  character: CharacterInput,
  images?: Maybe<ImagesUpload>,
  profile: ProfileInput
};


export type RootMutationTypeCreateValueCalculationArgs = {
  valueCalculation: ValueCalculationCreateParams
};


export type RootMutationTypeDeleteArgs = {
  contextId: Scalars['String']
};


export type RootMutationTypeDeleteAgentRelationshipArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteAgentRelationshipRoleArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteAgreementArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteAppreciationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteClaimArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteCommitmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteEconomicEventArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteEconomicResourceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteFulfillmentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteIntentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteObservablePhenomenonArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteObservablePropertyArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteObservationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteOrganizationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeletePersonArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeletePlanArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProcessArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProcessSpecificationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProductBatchArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProposalArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProposedIntentArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteProposedToArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteRecipeExchangeArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteRecipeFlowArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteRecipeProcessArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteRecipeResourceArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteResourceSpecificationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteSatisfactionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteScenarioArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteScenarioDefinitionArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteSettlementArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteSpatialThingArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteUnitArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeDeleteValueCalculationArgs = {
  id: Scalars['ID']
};


export type RootMutationTypeFlagArgs = {
  id: Scalars['String']
};


export type RootMutationTypeFollowArgs = {
  id: Scalars['String'],
  username: Scalars['String']
};


export type RootMutationTypeLikeArgs = {
  id: Scalars['String']
};


export type RootMutationTypeLoginArgs = {
  emailOrUsername: Scalars['String'],
  password: Scalars['String']
};


export type RootMutationTypeProposeIntentArgs = {
  publishedIn: Scalars['ID'],
  publishes: Scalars['ID'],
  reciprocal?: Maybe<Scalars['Boolean']>
};


export type RootMutationTypeProposeToArgs = {
  proposed: Scalars['ID'],
  proposedTo: Scalars['ID']
};


export type RootMutationTypeRequestConfirmEmailArgs = {
  email: Scalars['String'],
  url?: Maybe<Scalars['String']>
};


export type RootMutationTypeRequestResetPasswordArgs = {
  email: Scalars['String'],
  url?: Maybe<Scalars['String']>
};


export type RootMutationTypeSelectUserArgs = {
  username: Scalars['String']
};


export type RootMutationTypeSignupArgs = {
  email: Scalars['String'],
  inviteCode?: Maybe<Scalars['String']>,
  password: Scalars['String'],
  url?: Maybe<Scalars['String']>
};


export type RootMutationTypeTagArgs = {
  tags: Array<Maybe<Scalars['String']>>,
  thing: Scalars['String']
};


export type RootMutationTypeUpdateAgentRelationshipArgs = {
  relationship: AgentRelationshipUpdateParams
};


export type RootMutationTypeUpdateAgentRelationshipRoleArgs = {
  agentRelationshipRole?: Maybe<AgentRelationshipRoleUpdateParams>
};


export type RootMutationTypeUpdateAgreementArgs = {
  agreement?: Maybe<AgreementUpdateParams>
};


export type RootMutationTypeUpdateAppreciationArgs = {
  appreciation: AppreciationUpdateParams
};


export type RootMutationTypeUpdateCategoryArgs = {
  category?: Maybe<CategoryInput>,
  categoryId?: Maybe<Scalars['ID']>
};


export type RootMutationTypeUpdateClaimArgs = {
  claim: ClaimUpdateParams
};


export type RootMutationTypeUpdateCommitmentArgs = {
  commitment?: Maybe<CommitmentUpdateParams>
};


export type RootMutationTypeUpdateEconomicEventArgs = {
  event: EconomicEventUpdateParams
};


export type RootMutationTypeUpdateEconomicResourceArgs = {
  resource: EconomicResourceUpdateParams
};


export type RootMutationTypeUpdateFulfillmentArgs = {
  fulfillment: FulfillmentUpdateParams
};


export type RootMutationTypeUpdateIntentArgs = {
  intent?: Maybe<IntentUpdateParams>
};


export type RootMutationTypeUpdateObservablePhenomenonArgs = {
  observablePhenomenon: ObservablePhenomenonInputParams
};


export type RootMutationTypeUpdateObservablePropertyArgs = {
  observableProperty: ObservablePropertyInputParams
};


export type RootMutationTypeUpdateObservationArgs = {
  observation: ObservationInputParams
};


export type RootMutationTypeUpdateOrganizationArgs = {
  organization: AgentUpdateParams
};


export type RootMutationTypeUpdatePersonArgs = {
  person: AgentUpdateParams
};


export type RootMutationTypeUpdatePlanArgs = {
  plan: PlanUpdateParams
};


export type RootMutationTypeUpdateProcessArgs = {
  process: ProcessUpdateParams
};


export type RootMutationTypeUpdateProcessSpecificationArgs = {
  processSpecification?: Maybe<ProcessSpecificationUpdateParams>
};


export type RootMutationTypeUpdateProductBatchArgs = {
  productBatch: ProductBatchUpdateParams
};


export type RootMutationTypeUpdateProposalArgs = {
  proposal?: Maybe<ProposalUpdateParams>
};


export type RootMutationTypeUpdateRecipeExchangeArgs = {
  recipeExchange?: Maybe<RecipeExchangeUpdateParams>
};


export type RootMutationTypeUpdateRecipeFlowArgs = {
  recipeFlow?: Maybe<RecipeFlowUpdateParams>
};


export type RootMutationTypeUpdateRecipeProcessArgs = {
  recipeProcess?: Maybe<RecipeProcessUpdateParams>
};


export type RootMutationTypeUpdateRecipeResourceArgs = {
  recipeResource?: Maybe<RecipeResourceUpdateParams>
};


export type RootMutationTypeUpdateResourceSpecificationArgs = {
  resourceSpecification?: Maybe<ResourceSpecificationUpdateParams>
};


export type RootMutationTypeUpdateSatisfactionArgs = {
  satisfaction?: Maybe<SatisfactionUpdateParams>
};


export type RootMutationTypeUpdateScenarioArgs = {
  plan: ScenarioUpdateParams
};


export type RootMutationTypeUpdateScenarioDefinitionArgs = {
  plan: ScenarioDefinitionUpdateParams
};


export type RootMutationTypeUpdateSettlementArgs = {
  s0ettlement: SettlementUpdateParams
};


export type RootMutationTypeUpdateSpatialThingArgs = {
  spatialThing: SpatialThingUpdateParams
};


export type RootMutationTypeUpdateUnitArgs = {
  unit: UnitUpdateParams
};


export type RootMutationTypeUpdateUserArgs = {
  images?: Maybe<ImagesUpload>,
  profile?: Maybe<ProfileInput>
};


export type RootMutationTypeUpdateValueCalculationArgs = {
  valueCalculation: ValueCalculationUpdateParams
};

export type RootQueryType = {
   __typename?: 'RootQueryType',
  action?: Maybe<Action>,
  actions?: Maybe<Array<Action>>,
  /** Get an activity */
  activity?: Maybe<Activity>,
  /** Find an agent (person or organization) by their ID */
  agent?: Maybe<Agent>,
  /** Retrieve details of an agent relationship by its ID */
  agentRelationship?: Maybe<AgentRelationship>,
  /** Retrieve details of an agent relationship role by its ID */
  agentRelationshipRole?: Maybe<AgentRelationshipRole>,
  /** Retrieve all possible kinds of associations that agents may have with one another in this collaboration space */
  agentRelationshipRoles?: Maybe<Array<AgentRelationshipRole>>,
  /** Retrieve details of all the relationships between all agents registered in this collaboration space */
  agentRelationships?: Maybe<Array<AgentRelationship>>,
  /** Loads all agents publicly registered within this collaboration space */
  agents?: Maybe<Array<Agent>>,
  agreement?: Maybe<Agreement>,
  agreements?: Maybe<Array<Agreement>>,
  /** Get list of categories we know about */
  categories: CategoriesPage,
  /** Get a category by ID */
  category?: Maybe<Category>,
  claim?: Maybe<Claim>,
  claims?: Maybe<Array<Claim>>,
  commitment?: Maybe<Commitment>,
  commitments?: Maybe<Array<Commitment>>,
  economicEvent?: Maybe<EconomicEvent>,
  economicEvents?: Maybe<Array<EconomicEvent>>,
  economicEventsFiltered?: Maybe<Array<EconomicEvent>>,
  /** Get paginated list of economic events */
  economicEventsPages: EconomicEventPage,
  economicResource?: Maybe<EconomicResource>,
  economicResources?: Maybe<Array<EconomicResource>>,
  /** TEMPORARY - get filtered but non-paginated list of resources */
  economicResourcesFiltered?: Maybe<Array<Maybe<EconomicResource>>>,
  /** Get paginated list of economic resources */
  economicResourcesPages: EconomicResourcePage,
  /** Get activities in a feed */
  feed?: Maybe<Array<Maybe<Activity>>>,
  fulfillment?: Maybe<Fulfillment>,
  fulfillments?: Maybe<Array<Fulfillment>>,
  intent?: Maybe<Intent>,
  intents?: Maybe<Array<Intent>>,
  /** Get paginated list of intents */
  intentsPages: IntentsPage,
  /** Get information about and for the current account and/or user */
  me?: Maybe<Me>,
  measure?: Maybe<Measure>,
  measures?: Maybe<Array<Measure>>,
  measuresPages: MeasuresPage,
  /** Loads details of the currently authenticated REA agent */
  myAgent?: Maybe<Agent>,
  /** Get paginated list of active needs (intents with no provider) */
  needsPages: IntentsPage,
  observablePhenomenon?: Maybe<ObservablePhenomenon>,
  /** Get paginated list of observable phenomenon */
  observablePhenomenonPages: ObservablePhenomenonPage,
  observablePhenomenons?: Maybe<Array<ObservablePhenomenon>>,
  observableProperties?: Maybe<Array<ObservableProperty>>,
  /** Get paginated list of observable properties */
  observablePropertiesPages: ObservablePropertyPage,
  observableProperty?: Maybe<ObservableProperty>,
  observation?: Maybe<Observation>,
  observations?: Maybe<Array<Observation>>,
  /** Get paginated list of observations */
  observationsPages: ObservationPage,
  /** Get paginated list of active offers (intents with no receiver) */
  offersPages: IntentsPage,
  /** Find an organization (group) agent by its ID */
  organization?: Maybe<Organization>,
  /** Loads all organizations publicly registered within this collaboration space */
  organizations?: Maybe<Array<Organization>>,
  /** Get paginated list of organizations */
  organizationsPages: AgentsPage,
  /** Loads all people who have publicly registered with this collaboration space. */
  people?: Maybe<Array<Person>>,
  /** Get paginated list of people */
  peoplePages: AgentsPage,
  /** Find a person by their ID */
  person?: Maybe<Person>,
  plan?: Maybe<Plan>,
  plans?: Maybe<Array<Plan>>,
  /** Get a post */
  post?: Maybe<Post>,
  /** Get all posts */
  posts?: Maybe<Array<Maybe<Post>>>,
  process?: Maybe<Process>,
  processSpecification?: Maybe<ProcessSpecification>,
  processSpecifications?: Maybe<Array<ProcessSpecification>>,
  processes?: Maybe<Array<Process>>,
  /** Get paginated list of processes */
  processesPages: ProcessPage,
  productBatch?: Maybe<ProductBatch>,
  productBatches?: Maybe<Array<ProductBatch>>,
  proposal?: Maybe<Proposal>,
  proposals?: Maybe<Array<Proposal>>,
  /** TEMPORARY - get filtered but non-paginated list of proposals */
  proposalsFiltered?: Maybe<Array<Maybe<Proposal>>>,
  /** Get paginated list of proposals */
  proposalsPages: ProposalsPage,
  recipeExchange?: Maybe<RecipeExchange>,
  recipeExchanges?: Maybe<Array<RecipeExchange>>,
  recipeFlow?: Maybe<RecipeFlow>,
  recipeFlows?: Maybe<Array<RecipeFlow>>,
  recipeProcess?: Maybe<RecipeProcess>,
  recipeProcesses?: Maybe<Array<RecipeProcess>>,
  recipeResource?: Maybe<RecipeResource>,
  recipeResources?: Maybe<Array<RecipeResource>>,
  resourceSpecification?: Maybe<ResourceSpecification>,
  resourceSpecifications?: Maybe<Array<ResourceSpecification>>,
  /** Get paginated list of resource specifications */
  resourceSpecificationsPages: ResourceSpecificationPage,
  satisfaction?: Maybe<Satisfaction>,
  satisfactions?: Maybe<Array<Satisfaction>>,
  scenario?: Maybe<Scenario>,
  scenarioDefinition?: Maybe<ScenarioDefinition>,
  scenarioDefinitions?: Maybe<Array<ScenarioDefinition>>,
  scenarios?: Maybe<Array<Scenario>>,
  settlement?: Maybe<Settlement>,
  settlements?: Maybe<Array<Settlement>>,
  spatialThing?: Maybe<SpatialThing>,
  spatialThings?: Maybe<Array<SpatialThing>>,
  spatialThingsPages: SpatialThingsPage,
  /** Get a tag by ID */
  tag?: Maybe<Tag>,
  unit?: Maybe<Unit>,
  units?: Maybe<Array<Unit>>,
  unitsPages: UnitsPage,
  /** Get a user */
  user?: Maybe<User>,
  valueCalculation?: Maybe<ValueCalculation>,
  valueCalculationsPages: ValueCalculationPage,
};


export type RootQueryTypeActionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeActivityArgs = {
  filter?: Maybe<ActivityFilters>
};


export type RootQueryTypeAgentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentRelationshipArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentRelationshipRoleArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentRelationshipRolesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentRelationshipsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgreementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeAgreementsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCategoriesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeCategoryArgs = {
  categoryId?: Maybe<Scalars['ID']>
};


export type RootQueryTypeClaimArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeClaimsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommitmentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeCommitmentsArgs = {
  filter?: Maybe<AgentCommitmentSearchParams>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicEventArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicEventsArgs = {
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


export type RootQueryTypeEconomicEventsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeEconomicResourceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourcesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeEconomicResourcesFilteredArgs = {
  agent?: Maybe<Array<Maybe<Scalars['ID']>>>,
  currentLocation?: Maybe<Array<Maybe<Scalars['ID']>>>,
  geolocation?: Maybe<GeolocationFilters>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>,
  state?: Maybe<Array<Maybe<Scalars['ID']>>>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>,
  trackingIdentifier?: Maybe<Array<Maybe<Scalars['String']>>>
};


export type RootQueryTypeEconomicResourcesPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeFeedArgs = {
  filter?: Maybe<FeedFilters>,
  paginate?: Maybe<Paginate>
};


export type RootQueryTypeFulfillmentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeFulfillmentsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeIntentArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeIntentsArgs = {
  filter?: Maybe<IntentSearchParams>,
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeIntentsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeMeasureArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeMeasuresArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeMeasuresPagesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeNeedsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeObservablePhenomenonArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeObservablePhenomenonPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeObservablePhenomenonsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeObservablePropertiesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeObservablePropertiesPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeObservablePropertyArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeObservationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeObservationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeObservationsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  agent?: Maybe<Array<Scalars['ID']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  hasFeatureOfInterest?: Maybe<Array<Scalars['ID']>>,
  limit?: Maybe<Scalars['Int']>,
  madeBySensor?: Maybe<Array<Scalars['ID']>>,
  observedDuring?: Maybe<Array<Scalars['ID']>>,
  observedProperty?: Maybe<Array<Scalars['ID']>>,
  provider?: Maybe<Array<Scalars['ID']>>
};


export type RootQueryTypeOffersPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeOrganizationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeOrganizationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeOrganizationsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypePeopleArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypePeoplePagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypePersonArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypePlanArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypePlansArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypePostArgs = {
  filter?: Maybe<PostFilters>
};


export type RootQueryTypeProcessArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessSpecificationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessSpecificationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProcessesPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeProductBatchArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProductBatchesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProposalArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProposalsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeProposalsFilteredArgs = {
  agent?: Maybe<Array<Maybe<Scalars['ID']>>>,
  atLocation?: Maybe<Array<Maybe<Scalars['ID']>>>,
  geolocation?: Maybe<GeolocationFilters>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootQueryTypeProposalsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeRecipeExchangeArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeExchangesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeFlowArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeFlowsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeProcessArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeProcessesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeResourceArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeRecipeResourcesArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceSpecificationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceSpecificationsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeResourceSpecificationsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  inScopeOf?: Maybe<Array<Maybe<Scalars['ID']>>>,
  limit?: Maybe<Scalars['Int']>,
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
};


export type RootQueryTypeSatisfactionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSatisfactionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenarioArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenarioDefinitionArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenarioDefinitionsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeScenariosArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSettlementArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSettlementsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeSpatialThingsPagesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeTagArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUnitArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUnitsArgs = {
  limit?: Maybe<Scalars['Int']>,
  start?: Maybe<Scalars['ID']>
};


export type RootQueryTypeUnitsPagesArgs = {
  after?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  before?: Maybe<Array<Maybe<Scalars['Cursor']>>>,
  limit?: Maybe<Scalars['Int']>
};


export type RootQueryTypeUserArgs = {
  filter?: Maybe<CharacterFilters>
};


export type RootQueryTypeValueCalculationArgs = {
  id?: Maybe<Scalars['ID']>
};


export type RootQueryTypeValueCalculationsPagesArgs = {
  after?: Maybe<Array<Scalars['Cursor']>>,
  before?: Maybe<Array<Scalars['Cursor']>>,
  limit?: Maybe<Scalars['Int']>
};

export type RootSubscriptionType = {
   __typename?: 'RootSubscriptionType',
  intentCreated?: Maybe<Intent>,
};


export type RootSubscriptionTypeIntentCreatedArgs = {
  context?: Maybe<Scalars['String']>
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

/** A tag could be a category or hashtag or user or community or etc */
export type Tag = {
   __typename?: 'Tag',
  /** Unique URL (on original instance) */
  canonicalUrl?: Maybe<Scalars['String']>,
  /** The object used as a tag (eg. Category, Geolocation, Hashtag, User...) */
  context?: Maybe<AnyContext>,
  /** Unique URL (on original instance) */
  displayUsername?: Maybe<Scalars['String']>,
  /** The primary key of the tag */
  id?: Maybe<Scalars['ID']>,
  /** Name of the tag (derived from its context) */
  name?: Maybe<Scalars['String']>,
  /** Description of the tag (derived from its context) */
  summary?: Maybe<Scalars['String']>,
  /** Objects that were tagged with this tag */
  tagged?: Maybe<Array<Maybe<AnyContext>>>,
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



export type User = {
   __typename?: 'User',
  character?: Maybe<Character>,
  id?: Maybe<Scalars['ID']>,
  isInstanceAdmin?: Maybe<Scalars['Boolean']>,
  posts?: Maybe<Array<Maybe<Post>>>,
  profile?: Maybe<Profile>,
  userActivities?: Maybe<Array<Maybe<Activity>>>,
};


export type UserPostsArgs = {
  paginate?: Maybe<Paginate>
};


export type UserUserActivitiesArgs = {
  paginate?: Maybe<Paginate>
};

/** A calculation performed using custom formulas for a certain context. */
export type ValueCalculation = {
   __typename?: 'ValueCalculation',
  /** Relates a value calculation to a verb, such as consume, produce, work, improve, etc. */
  action: Action,
  formula: Scalars['String'],
  id: Scalars['ID'],
  /** Grouping around something to create a boundary or context, used for documenting, accounting, planning. */
  inScopeOf?: Maybe<Array<AccountingScope>>,
  /** An informal or formal textual identifier for an item. Does not imply uniqueness. */
  name?: Maybe<Scalars['String']>,
  /** A textual description or comment. */
  note?: Maybe<Scalars['String']>,
  /** References a concept in a common taxonomy or other classification scheme for purposes of categorization or grouping. */
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  /** Used to filter valueCalculations to find the one that matches the event. */
  resourceConformsTo?: Maybe<ResourceSpecification>,
  /** Relates a value calculation to a verb, like action, but for the related event. */
  valueAction: Action,
  /** The resource specification the event will apply to. */
  valueResourceConformsTo?: Maybe<ResourceSpecification>,
  /** References the unit used for the event. */
  valueUnit: Unit,
};

export type ValueCalculationCreateParams = {
  action: Scalars['ID'],
  formula: Scalars['String'],
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  name?: Maybe<Scalars['String']>,
  note?: Maybe<Scalars['String']>,
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  resourceConformsTo?: Maybe<Scalars['ID']>,
  valueAction: Scalars['ID'],
  valueResourceConformsTo?: Maybe<Scalars['ID']>,
  valueUnit: Scalars['ID'],
};

export type ValueCalculationPage = {
   __typename?: 'ValueCalculationPage',
  edges: Array<ValueCalculation>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type ValueCalculationResponse = {
   __typename?: 'ValueCalculationResponse',
  valueCalculation?: Maybe<ValueCalculation>,
};

export type ValueCalculationUpdateParams = {
  action?: Maybe<Scalars['ID']>,
  formula?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  inScopeOf?: Maybe<Array<Scalars['ID']>>,
  name?: Maybe<Scalars['String']>,
  note?: Maybe<Scalars['String']>,
  resourceClassifiedAs?: Maybe<Array<Scalars['URI']>>,
  resourceConformsTo?: Maybe<Scalars['ID']>,
  valueAction?: Maybe<Scalars['ID']>,
  valueResourceConformsTo?: Maybe<Scalars['ID']>,
  valueUnit?: Maybe<Scalars['ID']>,
};

export type Verb = {
   __typename?: 'Verb',
  verb?: Maybe<Scalars['String']>,
  verbDisplay?: Maybe<Scalars['String']>,
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
        "name": "AnyContext",
        "possibleTypes": [
          {
            "name": "Activity"
          },
          {
            "name": "Category"
          },
          {
            "name": "EconomicEvent"
          },
          {
            "name": "Follow"
          },
          {
            "name": "Intent"
          },
          {
            "name": "Post"
          },
          {
            "name": "Process"
          },
          {
            "name": "SpatialThing"
          },
          {
            "name": "Tag"
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
            "name": "Organization"
          },
          {
            "name": "Person"
          },
          {
            "name": "Tag"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Agent",
        "possibleTypes": []
      },
      {
        "kind": "UNION",
        "name": "ProductionFlowItem",
        "possibleTypes": [
          {
            "name": "EconomicEvent"
          },
          {
            "name": "EconomicResource"
          },
          {
            "name": "Process"
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
        "name": "AnyCharacter",
        "possibleTypes": [
          {
            "name": "Category"
          },
          {
            "name": "SpatialThing"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ObservableObject",
        "possibleTypes": [
          {
            "name": "EconomicResource"
          },
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
        "name": "ObservableResult",
        "possibleTypes": [
          {
            "name": "Measure"
          },
          {
            "name": "ObservablePhenomenon"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Observer",
        "possibleTypes": [
          {
            "name": "EconomicResource"
          },
          {
            "name": "Organization"
          },
          {
            "name": "Person"
          },
          {
            "name": "ResourceSpecification"
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
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Action: ResolverTypeWrapper<Action>,
  String: ResolverTypeWrapper<Scalars['String']>,
  ActivityFilters: ActivityFilters,
  Activity: ResolverTypeWrapper<Omit<Activity, 'object' | 'subject'> & { object?: Maybe<ResolversTypes['AnyContext']>, subject?: Maybe<ResolversTypes['AnyCharacter']> }>,
  Paginate: Paginate,
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Replied: ResolverTypeWrapper<Replied>,
  Post: ResolverTypeWrapper<Post>,
  PostContent: ResolverTypeWrapper<PostContent>,
  AnyContext: ResolversTypes['Activity'] | ResolversTypes['Category'] | ResolversTypes['EconomicEvent'] | ResolversTypes['Follow'] | ResolversTypes['Intent'] | ResolversTypes['Post'] | ResolversTypes['Process'] | ResolversTypes['SpatialThing'] | ResolversTypes['Tag'] | ResolversTypes['User'],
  Category: ResolverTypeWrapper<Omit<Category, 'caretaker'> & { caretaker?: Maybe<ResolversTypes['AnyContext']> }>,
  Json: ResolverTypeWrapper<Scalars['Json']>,
  CategoriesPage: ResolverTypeWrapper<CategoriesPage>,
  PageInfo: ResolverTypeWrapper<PageInfo>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  EconomicEvent: ResolverTypeWrapper<Omit<EconomicEvent, 'inScopeOf' | 'tags' | 'trace' | 'track'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversTypes['AnyContext']>>>, trace?: Maybe<Array<ResolversTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversTypes['ProductionFlowItem']>> }>,
  URI: ResolverTypeWrapper<Scalars['URI']>,
  Appreciation: ResolverTypeWrapper<Appreciation>,
  SpatialThing: ResolverTypeWrapper<Omit<SpatialThing, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversTypes['AnyContext']> }>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  ValueCalculation: ResolverTypeWrapper<Omit<ValueCalculation, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  AccountingScope: ResolversTypes['Category'] | ResolversTypes['Organization'] | ResolversTypes['Person'] | ResolversTypes['Tag'],
  Organization: ResolverTypeWrapper<Omit<Organization, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  AgentType: AgentType,
  agentCommitmentSearchParams: AgentCommitmentSearchParams,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Commitment: ResolverTypeWrapper<Omit<Commitment, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  Agreement: ResolverTypeWrapper<Agreement>,
  Agent: ResolverTypeWrapper<Agent>,
  agentEventSearchParams: AgentEventSearchParams,
  IntentSearchParams: IntentSearchParams,
  GeolocationFilters: GeolocationFilters,
  GeolocationDistance: GeolocationDistance,
  GeolocationPoint: GeolocationPoint,
  Intent: ResolverTypeWrapper<Omit<Intent, 'inScopeOf' | 'tags'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversTypes['AnyContext']>>> }>,
  Measure: ResolverTypeWrapper<Measure>,
  Unit: ResolverTypeWrapper<Omit<Unit, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversTypes['AnyContext']> }>,
  Process: ResolverTypeWrapper<Omit<Process, 'inScopeOf' | 'tags' | 'trace' | 'track'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, tags?: Maybe<Array<ResolversTypes['AnyContext']>>, trace?: Maybe<Array<ResolversTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversTypes['ProductionFlowItem']>> }>,
  ProcessSpecification: ResolverTypeWrapper<ProcessSpecification>,
  Scenario: ResolverTypeWrapper<Omit<Scenario, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  ScenarioDefinition: ResolverTypeWrapper<ScenarioDefinition>,
  Duration: ResolverTypeWrapper<Duration>,
  TimeUnit: TimeUnit,
  Plan: ResolverTypeWrapper<Omit<Plan, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  planProcessSearchParams: PlanProcessSearchParams,
  ProductionFlowItem: ResolversTypes['EconomicEvent'] | ResolversTypes['EconomicResource'] | ResolversTypes['Process'],
  EconomicResource: ResolverTypeWrapper<Omit<EconomicResource, 'tags' | 'trace' | 'track'> & { tags?: Maybe<Array<ResolversTypes['AnyContext']>>, trace?: Maybe<Array<ResolversTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversTypes['ProductionFlowItem']>> }>,
  ResourceSpecification: ResolverTypeWrapper<Omit<ResourceSpecification, 'tags'> & { tags?: Maybe<Array<ResolversTypes['AnyContext']>> }>,
  ProductBatch: ResolverTypeWrapper<ProductBatch>,
  ProposedIntent: ResolverTypeWrapper<ProposedIntent>,
  Proposal: ResolverTypeWrapper<Omit<Proposal, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  ProposedTo: ResolverTypeWrapper<ProposedTo>,
  Satisfaction: ResolverTypeWrapper<Omit<Satisfaction, 'satisfiedBy'> & { satisfiedBy: ResolversTypes['EventOrCommitment'] }>,
  EventOrCommitment: ResolversTypes['Commitment'] | ResolversTypes['EconomicEvent'],
  agentResourceSearchParams: AgentResourceSearchParams,
  agentPlanSearchParams: AgentPlanSearchParams,
  agentProcessSearchParams: AgentProcessSearchParams,
  AgentRelationship: ResolverTypeWrapper<Omit<AgentRelationship, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  AgentRelationshipRole: ResolverTypeWrapper<AgentRelationshipRole>,
  Fulfillment: ResolverTypeWrapper<Fulfillment>,
  Person: ResolverTypeWrapper<Person>,
  Tag: ResolverTypeWrapper<Omit<Tag, 'context' | 'tagged'> & { context?: Maybe<ResolversTypes['AnyContext']>, tagged?: Maybe<Array<Maybe<ResolversTypes['AnyContext']>>> }>,
  Follow: ResolverTypeWrapper<Follow>,
  Character: ResolverTypeWrapper<Character>,
  Profile: ResolverTypeWrapper<Profile>,
  User: ResolverTypeWrapper<User>,
  AnyCharacter: ResolversTypes['Category'] | ResolversTypes['SpatialThing'] | ResolversTypes['User'],
  Verb: ResolverTypeWrapper<Verb>,
  Claim: ResolverTypeWrapper<Omit<Claim, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>> }>,
  EconomicEventPage: ResolverTypeWrapper<EconomicEventPage>,
  EconomicResourcePage: ResolverTypeWrapper<EconomicResourcePage>,
  FeedFilters: FeedFilters,
  IntentsPage: ResolverTypeWrapper<IntentsPage>,
  Me: ResolverTypeWrapper<Me>,
  MeasuresPage: ResolverTypeWrapper<MeasuresPage>,
  ObservablePhenomenon: ResolverTypeWrapper<ObservablePhenomenon>,
  ObservableProperty: ResolverTypeWrapper<ObservableProperty>,
  ObservablePhenomenonPage: ResolverTypeWrapper<ObservablePhenomenonPage>,
  ObservablePropertyPage: ResolverTypeWrapper<ObservablePropertyPage>,
  Observation: ResolverTypeWrapper<Omit<Observation, 'hasFeatureOfInterest' | 'hasResult' | 'inScopeOf' | 'madeBySensor'> & { hasFeatureOfInterest: ResolversTypes['ObservableObject'], hasResult: ResolversTypes['ObservableResult'], inScopeOf?: Maybe<Array<ResolversTypes['AccountingScope']>>, madeBySensor: ResolversTypes['Observer'] }>,
  ObservableObject: ResolversTypes['EconomicResource'] | ResolversTypes['Organization'] | ResolversTypes['Person'],
  ObservableResult: ResolversTypes['Measure'] | ResolversTypes['ObservablePhenomenon'],
  Observer: ResolversTypes['EconomicResource'] | ResolversTypes['Organization'] | ResolversTypes['Person'] | ResolversTypes['ResourceSpecification'],
  ObservationPage: ResolverTypeWrapper<ObservationPage>,
  AgentsPage: ResolverTypeWrapper<AgentsPage>,
  PostFilters: PostFilters,
  ProcessPage: ResolverTypeWrapper<ProcessPage>,
  ProposalsPage: ResolverTypeWrapper<ProposalsPage>,
  RecipeExchange: ResolverTypeWrapper<RecipeExchange>,
  RecipeFlow: ResolverTypeWrapper<RecipeFlow>,
  RecipeResource: ResolverTypeWrapper<RecipeResource>,
  RecipeProcess: ResolverTypeWrapper<RecipeProcess>,
  ResourceSpecificationPage: ResolverTypeWrapper<ResourceSpecificationPage>,
  Settlement: ResolverTypeWrapper<Settlement>,
  SpatialThingsPage: ResolverTypeWrapper<SpatialThingsPage>,
  UnitsPage: ResolverTypeWrapper<UnitsPage>,
  CharacterFilters: CharacterFilters,
  ValueCalculationPage: ResolverTypeWrapper<ValueCalculationPage>,
  RootMutationType: ResolverTypeWrapper<{}>,
  AgentRelationshipCreateParams: AgentRelationshipCreateParams,
  AgentRelationshipResponse: ResolverTypeWrapper<AgentRelationshipResponse>,
  AgentRelationshipRoleCreateParams: AgentRelationshipRoleCreateParams,
  AgentRelationshipRoleResponse: ResolverTypeWrapper<AgentRelationshipRoleResponse>,
  AgreementCreateParams: AgreementCreateParams,
  AgreementResponse: ResolverTypeWrapper<AgreementResponse>,
  AppreciationCreateParams: AppreciationCreateParams,
  AppreciationResponse: ResolverTypeWrapper<AppreciationResponse>,
  CategoryInput: CategoryInput,
  ClaimCreateParams: ClaimCreateParams,
  IMeasure: IMeasure,
  ClaimResponse: ResolverTypeWrapper<ClaimResponse>,
  CommitmentCreateParams: CommitmentCreateParams,
  CommitmentResponse: ResolverTypeWrapper<CommitmentResponse>,
  EconomicEventCreateParams: EconomicEventCreateParams,
  EconomicResourceCreateParams: EconomicResourceCreateParams,
  EconomicEventResponse: ResolverTypeWrapper<EconomicEventResponse>,
  FulfillmentCreateParams: FulfillmentCreateParams,
  FulfillmentResponse: ResolverTypeWrapper<FulfillmentResponse>,
  IntentCreateParams: IntentCreateParams,
  IntentResponse: ResolverTypeWrapper<IntentResponse>,
  ObservablePhenomenonInputParams: ObservablePhenomenonInputParams,
  ObservablePropertyInputParams: ObservablePropertyInputParams,
  ObservationInputParams: ObservationInputParams,
  AgentCreateParams: AgentCreateParams,
  OrganizationResponse: ResolverTypeWrapper<OrganizationResponse>,
  PersonResponse: ResolverTypeWrapper<PersonResponse>,
  PlanCreateParams: PlanCreateParams,
  PlanResponse: ResolverTypeWrapper<PlanResponse>,
  PostContentInput: PostContentInput,
  ProcessCreateParams: ProcessCreateParams,
  ProcessResponse: ResolverTypeWrapper<ProcessResponse>,
  ProcessSpecificationCreateParams: ProcessSpecificationCreateParams,
  ProcessSpecificationResponse: ResolverTypeWrapper<ProcessSpecificationResponse>,
  ProductBatchCreateParams: ProductBatchCreateParams,
  ProductBatchResponse: ResolverTypeWrapper<ProductBatchResponse>,
  ProposalCreateParams: ProposalCreateParams,
  ProposalResponse: ResolverTypeWrapper<ProposalResponse>,
  RecipeExchangeCreateParams: RecipeExchangeCreateParams,
  RecipeExchangeResponse: ResolverTypeWrapper<RecipeExchangeResponse>,
  RecipeFlowCreateParams: RecipeFlowCreateParams,
  RecipeFlowResponse: ResolverTypeWrapper<RecipeFlowResponse>,
  RecipeProcessCreateParams: RecipeProcessCreateParams,
  IDuration: IDuration,
  RecipeProcessResponse: ResolverTypeWrapper<RecipeProcessResponse>,
  RecipeResourceCreateParams: RecipeResourceCreateParams,
  RecipeResourceResponse: ResolverTypeWrapper<RecipeResourceResponse>,
  ResourceSpecificationCreateParams: ResourceSpecificationCreateParams,
  ResourceSpecificationResponse: ResolverTypeWrapper<ResourceSpecificationResponse>,
  SatisfactionCreateParams: SatisfactionCreateParams,
  SatisfactionResponse: ResolverTypeWrapper<SatisfactionResponse>,
  ScenarioCreateParams: ScenarioCreateParams,
  ScenarioResponse: ResolverTypeWrapper<ScenarioResponse>,
  ScenarioDefinitionCreateParams: ScenarioDefinitionCreateParams,
  ScenarioDefinitionResponse: ResolverTypeWrapper<ScenarioDefinitionResponse>,
  SettlementCreateParams: SettlementCreateParams,
  SettlementResponse: ResolverTypeWrapper<SettlementResponse>,
  SpatialThingCreateParams: SpatialThingCreateParams,
  SpatialThingResponse: ResolverTypeWrapper<SpatialThingResponse>,
  UnitCreateParams: UnitCreateParams,
  UnitResponse: ResolverTypeWrapper<UnitResponse>,
  CharacterInput: CharacterInput,
  ImagesUpload: ImagesUpload,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
  ProfileInput: ProfileInput,
  ValueCalculationCreateParams: ValueCalculationCreateParams,
  ValueCalculationResponse: ResolverTypeWrapper<ValueCalculationResponse>,
  LoginResponse: ResolverTypeWrapper<LoginResponse>,
  ProposedIntentResponse: ResolverTypeWrapper<ProposedIntentResponse>,
  ProposedToResponse: ResolverTypeWrapper<ProposedToResponse>,
  AgentRelationshipUpdateParams: AgentRelationshipUpdateParams,
  AgentRelationshipRoleUpdateParams: AgentRelationshipRoleUpdateParams,
  AgreementUpdateParams: AgreementUpdateParams,
  AppreciationUpdateParams: AppreciationUpdateParams,
  ClaimUpdateParams: ClaimUpdateParams,
  CommitmentUpdateParams: CommitmentUpdateParams,
  EconomicEventUpdateParams: EconomicEventUpdateParams,
  EconomicResourceUpdateParams: EconomicResourceUpdateParams,
  EconomicResourceResponse: ResolverTypeWrapper<EconomicResourceResponse>,
  FulfillmentUpdateParams: FulfillmentUpdateParams,
  IntentUpdateParams: IntentUpdateParams,
  AgentUpdateParams: AgentUpdateParams,
  PlanUpdateParams: PlanUpdateParams,
  ProcessUpdateParams: ProcessUpdateParams,
  ProcessSpecificationUpdateParams: ProcessSpecificationUpdateParams,
  ProductBatchUpdateParams: ProductBatchUpdateParams,
  ProposalUpdateParams: ProposalUpdateParams,
  RecipeExchangeUpdateParams: RecipeExchangeUpdateParams,
  RecipeFlowUpdateParams: RecipeFlowUpdateParams,
  RecipeProcessUpdateParams: RecipeProcessUpdateParams,
  RecipeResourceUpdateParams: RecipeResourceUpdateParams,
  ResourceSpecificationUpdateParams: ResourceSpecificationUpdateParams,
  SatisfactionUpdateParams: SatisfactionUpdateParams,
  ScenarioUpdateParams: ScenarioUpdateParams,
  ScenarioDefinitionUpdateParams: ScenarioDefinitionUpdateParams,
  SettlementUpdateParams: SettlementUpdateParams,
  SpatialThingUpdateParams: SpatialThingUpdateParams,
  UnitUpdateParams: UnitUpdateParams,
  ValueCalculationUpdateParams: ValueCalculationUpdateParams,
  RootSubscriptionType: ResolverTypeWrapper<{}>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  RootQueryType: {},
  ID: Scalars['ID'],
  Action: Action,
  String: Scalars['String'],
  ActivityFilters: ActivityFilters,
  Activity: Omit<Activity, 'object' | 'subject'> & { object?: Maybe<ResolversParentTypes['AnyContext']>, subject?: Maybe<ResolversParentTypes['AnyCharacter']> },
  Paginate: Paginate,
  Cursor: Scalars['Cursor'],
  Int: Scalars['Int'],
  Replied: Replied,
  Post: Post,
  PostContent: PostContent,
  AnyContext: ResolversParentTypes['Activity'] | ResolversParentTypes['Category'] | ResolversParentTypes['EconomicEvent'] | ResolversParentTypes['Follow'] | ResolversParentTypes['Intent'] | ResolversParentTypes['Post'] | ResolversParentTypes['Process'] | ResolversParentTypes['SpatialThing'] | ResolversParentTypes['Tag'] | ResolversParentTypes['User'],
  Category: Omit<Category, 'caretaker'> & { caretaker?: Maybe<ResolversParentTypes['AnyContext']> },
  Json: Scalars['Json'],
  CategoriesPage: CategoriesPage,
  PageInfo: PageInfo,
  Boolean: Scalars['Boolean'],
  EconomicEvent: Omit<EconomicEvent, 'inScopeOf' | 'tags' | 'trace' | 'track'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversParentTypes['AnyContext']>>>, trace?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>> },
  URI: Scalars['URI'],
  Appreciation: Appreciation,
  SpatialThing: Omit<SpatialThing, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversParentTypes['AnyContext']> },
  Float: Scalars['Float'],
  ValueCalculation: Omit<ValueCalculation, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  AccountingScope: ResolversParentTypes['Category'] | ResolversParentTypes['Organization'] | ResolversParentTypes['Person'] | ResolversParentTypes['Tag'],
  Organization: Omit<Organization, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  AgentType: AgentType,
  agentCommitmentSearchParams: AgentCommitmentSearchParams,
  DateTime: Scalars['DateTime'],
  Commitment: Omit<Commitment, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  Agreement: Agreement,
  Agent: Agent,
  agentEventSearchParams: AgentEventSearchParams,
  IntentSearchParams: IntentSearchParams,
  GeolocationFilters: GeolocationFilters,
  GeolocationDistance: GeolocationDistance,
  GeolocationPoint: GeolocationPoint,
  Intent: Omit<Intent, 'inScopeOf' | 'tags'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, tags?: Maybe<Array<Maybe<ResolversParentTypes['AnyContext']>>> },
  Measure: Measure,
  Unit: Omit<Unit, 'inScopeOf'> & { inScopeOf?: Maybe<ResolversParentTypes['AnyContext']> },
  Process: Omit<Process, 'inScopeOf' | 'tags' | 'trace' | 'track'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, tags?: Maybe<Array<ResolversParentTypes['AnyContext']>>, trace?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>> },
  ProcessSpecification: ProcessSpecification,
  Scenario: Omit<Scenario, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  ScenarioDefinition: ScenarioDefinition,
  Duration: Duration,
  TimeUnit: TimeUnit,
  Plan: Omit<Plan, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  planProcessSearchParams: PlanProcessSearchParams,
  ProductionFlowItem: ResolversParentTypes['EconomicEvent'] | ResolversParentTypes['EconomicResource'] | ResolversParentTypes['Process'],
  EconomicResource: Omit<EconomicResource, 'tags' | 'trace' | 'track'> & { tags?: Maybe<Array<ResolversParentTypes['AnyContext']>>, trace?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>>, track?: Maybe<Array<ResolversParentTypes['ProductionFlowItem']>> },
  ResourceSpecification: Omit<ResourceSpecification, 'tags'> & { tags?: Maybe<Array<ResolversParentTypes['AnyContext']>> },
  ProductBatch: ProductBatch,
  ProposedIntent: ProposedIntent,
  Proposal: Omit<Proposal, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  ProposedTo: ProposedTo,
  Satisfaction: Omit<Satisfaction, 'satisfiedBy'> & { satisfiedBy: ResolversParentTypes['EventOrCommitment'] },
  EventOrCommitment: ResolversParentTypes['Commitment'] | ResolversParentTypes['EconomicEvent'],
  agentResourceSearchParams: AgentResourceSearchParams,
  agentPlanSearchParams: AgentPlanSearchParams,
  agentProcessSearchParams: AgentProcessSearchParams,
  AgentRelationship: Omit<AgentRelationship, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  AgentRelationshipRole: AgentRelationshipRole,
  Fulfillment: Fulfillment,
  Person: Person,
  Tag: Omit<Tag, 'context' | 'tagged'> & { context?: Maybe<ResolversParentTypes['AnyContext']>, tagged?: Maybe<Array<Maybe<ResolversParentTypes['AnyContext']>>> },
  Follow: Follow,
  Character: Character,
  Profile: Profile,
  User: User,
  AnyCharacter: ResolversParentTypes['Category'] | ResolversParentTypes['SpatialThing'] | ResolversParentTypes['User'],
  Verb: Verb,
  Claim: Omit<Claim, 'inScopeOf'> & { inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>> },
  EconomicEventPage: EconomicEventPage,
  EconomicResourcePage: EconomicResourcePage,
  FeedFilters: FeedFilters,
  IntentsPage: IntentsPage,
  Me: Me,
  MeasuresPage: MeasuresPage,
  ObservablePhenomenon: ObservablePhenomenon,
  ObservableProperty: ObservableProperty,
  ObservablePhenomenonPage: ObservablePhenomenonPage,
  ObservablePropertyPage: ObservablePropertyPage,
  Observation: Omit<Observation, 'hasFeatureOfInterest' | 'hasResult' | 'inScopeOf' | 'madeBySensor'> & { hasFeatureOfInterest: ResolversParentTypes['ObservableObject'], hasResult: ResolversParentTypes['ObservableResult'], inScopeOf?: Maybe<Array<ResolversParentTypes['AccountingScope']>>, madeBySensor: ResolversParentTypes['Observer'] },
  ObservableObject: ResolversParentTypes['EconomicResource'] | ResolversParentTypes['Organization'] | ResolversParentTypes['Person'],
  ObservableResult: ResolversParentTypes['Measure'] | ResolversParentTypes['ObservablePhenomenon'],
  Observer: ResolversParentTypes['EconomicResource'] | ResolversParentTypes['Organization'] | ResolversParentTypes['Person'] | ResolversParentTypes['ResourceSpecification'],
  ObservationPage: ObservationPage,
  AgentsPage: AgentsPage,
  PostFilters: PostFilters,
  ProcessPage: ProcessPage,
  ProposalsPage: ProposalsPage,
  RecipeExchange: RecipeExchange,
  RecipeFlow: RecipeFlow,
  RecipeResource: RecipeResource,
  RecipeProcess: RecipeProcess,
  ResourceSpecificationPage: ResourceSpecificationPage,
  Settlement: Settlement,
  SpatialThingsPage: SpatialThingsPage,
  UnitsPage: UnitsPage,
  CharacterFilters: CharacterFilters,
  ValueCalculationPage: ValueCalculationPage,
  RootMutationType: {},
  AgentRelationshipCreateParams: AgentRelationshipCreateParams,
  AgentRelationshipResponse: AgentRelationshipResponse,
  AgentRelationshipRoleCreateParams: AgentRelationshipRoleCreateParams,
  AgentRelationshipRoleResponse: AgentRelationshipRoleResponse,
  AgreementCreateParams: AgreementCreateParams,
  AgreementResponse: AgreementResponse,
  AppreciationCreateParams: AppreciationCreateParams,
  AppreciationResponse: AppreciationResponse,
  CategoryInput: CategoryInput,
  ClaimCreateParams: ClaimCreateParams,
  IMeasure: IMeasure,
  ClaimResponse: ClaimResponse,
  CommitmentCreateParams: CommitmentCreateParams,
  CommitmentResponse: CommitmentResponse,
  EconomicEventCreateParams: EconomicEventCreateParams,
  EconomicResourceCreateParams: EconomicResourceCreateParams,
  EconomicEventResponse: EconomicEventResponse,
  FulfillmentCreateParams: FulfillmentCreateParams,
  FulfillmentResponse: FulfillmentResponse,
  IntentCreateParams: IntentCreateParams,
  IntentResponse: IntentResponse,
  ObservablePhenomenonInputParams: ObservablePhenomenonInputParams,
  ObservablePropertyInputParams: ObservablePropertyInputParams,
  ObservationInputParams: ObservationInputParams,
  AgentCreateParams: AgentCreateParams,
  OrganizationResponse: OrganizationResponse,
  PersonResponse: PersonResponse,
  PlanCreateParams: PlanCreateParams,
  PlanResponse: PlanResponse,
  PostContentInput: PostContentInput,
  ProcessCreateParams: ProcessCreateParams,
  ProcessResponse: ProcessResponse,
  ProcessSpecificationCreateParams: ProcessSpecificationCreateParams,
  ProcessSpecificationResponse: ProcessSpecificationResponse,
  ProductBatchCreateParams: ProductBatchCreateParams,
  ProductBatchResponse: ProductBatchResponse,
  ProposalCreateParams: ProposalCreateParams,
  ProposalResponse: ProposalResponse,
  RecipeExchangeCreateParams: RecipeExchangeCreateParams,
  RecipeExchangeResponse: RecipeExchangeResponse,
  RecipeFlowCreateParams: RecipeFlowCreateParams,
  RecipeFlowResponse: RecipeFlowResponse,
  RecipeProcessCreateParams: RecipeProcessCreateParams,
  IDuration: IDuration,
  RecipeProcessResponse: RecipeProcessResponse,
  RecipeResourceCreateParams: RecipeResourceCreateParams,
  RecipeResourceResponse: RecipeResourceResponse,
  ResourceSpecificationCreateParams: ResourceSpecificationCreateParams,
  ResourceSpecificationResponse: ResourceSpecificationResponse,
  SatisfactionCreateParams: SatisfactionCreateParams,
  SatisfactionResponse: SatisfactionResponse,
  ScenarioCreateParams: ScenarioCreateParams,
  ScenarioResponse: ScenarioResponse,
  ScenarioDefinitionCreateParams: ScenarioDefinitionCreateParams,
  ScenarioDefinitionResponse: ScenarioDefinitionResponse,
  SettlementCreateParams: SettlementCreateParams,
  SettlementResponse: SettlementResponse,
  SpatialThingCreateParams: SpatialThingCreateParams,
  SpatialThingResponse: SpatialThingResponse,
  UnitCreateParams: UnitCreateParams,
  UnitResponse: UnitResponse,
  CharacterInput: CharacterInput,
  ImagesUpload: ImagesUpload,
  Upload: Scalars['Upload'],
  ProfileInput: ProfileInput,
  ValueCalculationCreateParams: ValueCalculationCreateParams,
  ValueCalculationResponse: ValueCalculationResponse,
  LoginResponse: LoginResponse,
  ProposedIntentResponse: ProposedIntentResponse,
  ProposedToResponse: ProposedToResponse,
  AgentRelationshipUpdateParams: AgentRelationshipUpdateParams,
  AgentRelationshipRoleUpdateParams: AgentRelationshipRoleUpdateParams,
  AgreementUpdateParams: AgreementUpdateParams,
  AppreciationUpdateParams: AppreciationUpdateParams,
  ClaimUpdateParams: ClaimUpdateParams,
  CommitmentUpdateParams: CommitmentUpdateParams,
  EconomicEventUpdateParams: EconomicEventUpdateParams,
  EconomicResourceUpdateParams: EconomicResourceUpdateParams,
  EconomicResourceResponse: EconomicResourceResponse,
  FulfillmentUpdateParams: FulfillmentUpdateParams,
  IntentUpdateParams: IntentUpdateParams,
  AgentUpdateParams: AgentUpdateParams,
  PlanUpdateParams: PlanUpdateParams,
  ProcessUpdateParams: ProcessUpdateParams,
  ProcessSpecificationUpdateParams: ProcessSpecificationUpdateParams,
  ProductBatchUpdateParams: ProductBatchUpdateParams,
  ProposalUpdateParams: ProposalUpdateParams,
  RecipeExchangeUpdateParams: RecipeExchangeUpdateParams,
  RecipeFlowUpdateParams: RecipeFlowUpdateParams,
  RecipeProcessUpdateParams: RecipeProcessUpdateParams,
  RecipeResourceUpdateParams: RecipeResourceUpdateParams,
  ResourceSpecificationUpdateParams: ResourceSpecificationUpdateParams,
  SatisfactionUpdateParams: SatisfactionUpdateParams,
  ScenarioUpdateParams: ScenarioUpdateParams,
  ScenarioDefinitionUpdateParams: ScenarioDefinitionUpdateParams,
  SettlementUpdateParams: SettlementUpdateParams,
  SpatialThingUpdateParams: SpatialThingUpdateParams,
  UnitUpdateParams: UnitUpdateParams,
  ValueCalculationUpdateParams: ValueCalculationUpdateParams,
  RootSubscriptionType: {},
};

export type AccountingScopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountingScope'] = ResolversParentTypes['AccountingScope']> = {
  __resolveType: TypeResolveFn<'Category' | 'Organization' | 'Person' | 'Tag', ParentType, ContextType>
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

export type ActivityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activity'] = ResolversParentTypes['Activity']> = {
  directReplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Replied']>>>, ParentType, ContextType, ActivityDirectRepliesArgs>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  object?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  objectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  subject?: Resolver<Maybe<ResolversTypes['AnyCharacter']>, ParentType, ContextType>,
  subjectId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  verb?: Resolver<Maybe<ResolversTypes['Verb']>, ParentType, ContextType>,
};

export type AgentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agent'] = ResolversParentTypes['Agent']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>,
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

export type AnyCharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyCharacter'] = ResolversParentTypes['AnyCharacter']> = {
  __resolveType: TypeResolveFn<'Category' | 'SpatialThing' | 'User', ParentType, ContextType>
};

export type AnyContextResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnyContext'] = ResolversParentTypes['AnyContext']> = {
  __resolveType: TypeResolveFn<'Activity' | 'Category' | 'EconomicEvent' | 'Follow' | 'Intent' | 'Post' | 'Process' | 'SpatialThing' | 'Tag' | 'User', ParentType, ContextType>
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

export type CategoriesPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoriesPage'] = ResolversParentTypes['CategoriesPage']> = {
  edges?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  caretaker?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  extraInfo?: Resolver<Maybe<ResolversTypes['Json']>, ParentType, ContextType>,
  facet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  parentCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>,
  parentCategoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  subCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes['CategoriesPage']>>>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type CharacterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Character'] = ResolversParentTypes['Character']> = {
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ClaimResolvers<ContextType = any, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  agreedIn?: Resolver<Maybe<ResolversTypes['URI']>, ParentType, ContextType>,
  calculatedUsing?: Resolver<Maybe<ResolversTypes['ValueCalculation']>, ParentType, ContextType>,
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
  calculatedUsing?: Resolver<Maybe<ResolversTypes['ValueCalculation']>, ParentType, ContextType>,
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
  trace?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType, EconomicEventTraceArgs>,
  track?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType, EconomicEventTrackArgs>,
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
  reciprocalEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType>,
};

export type EconomicResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EconomicResource'] = ResolversParentTypes['EconomicResource']> = {
  accountingQuantity?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType>,
  classifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  conformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
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
  tags?: Resolver<Maybe<Array<ResolversTypes['AnyContext']>>, ParentType, ContextType>,
  trace?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType, EconomicResourceTraceArgs>,
  track?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType, EconomicResourceTrackArgs>,
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

export type FollowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Follow'] = ResolversParentTypes['Follow']> = {
  followedCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>,
  followedProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>,
  followerCharacter?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>,
  followerProfile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>,
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

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  currentAccountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  currentUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  currentUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  accountId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  flagsForModeration?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, MeFlagsForModerationArgs>,
  followed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Follow']>>>, ParentType, ContextType, MeFollowedArgs>,
  followers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Follow']>>>, ParentType, ContextType, MeFollowersArgs>,
  likeActivities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, MeLikeActivitiesArgs>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userFeed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, MeUserFeedArgs>,
  userNotifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, MeUserNotificationsArgs>,
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
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

export type ObservableObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservableObject'] = ResolversParentTypes['ObservableObject']> = {
  __resolveType: TypeResolveFn<'EconomicResource' | 'Organization' | 'Person', ParentType, ContextType>
};

export type ObservablePhenomenonResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservablePhenomenon'] = ResolversParentTypes['ObservablePhenomenon']> = {
  choiceOf?: Resolver<Maybe<ResolversTypes['ObservableProperty']>, ParentType, ContextType>,
  formulaQuantifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ObservablePhenomenonPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservablePhenomenonPage'] = ResolversParentTypes['ObservablePhenomenonPage']> = {
  edges?: Resolver<Array<ResolversTypes['ObservablePhenomenon']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ObservablePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservableProperty'] = ResolversParentTypes['ObservableProperty']> = {
  hasChoices?: Resolver<Maybe<Array<ResolversTypes['ObservablePhenomenon']>>, ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type ObservablePropertyPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservablePropertyPage'] = ResolversParentTypes['ObservablePropertyPage']> = {
  edges?: Resolver<Array<ResolversTypes['ObservableProperty']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ObservableResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservableResult'] = ResolversParentTypes['ObservableResult']> = {
  __resolveType: TypeResolveFn<'Measure' | 'ObservablePhenomenon', ParentType, ContextType>
};

export type ObservationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Observation'] = ResolversParentTypes['Observation']> = {
  atLocation?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType>,
  hasFeatureOfInterest?: Resolver<ResolversTypes['ObservableObject'], ParentType, ContextType>,
  hasResult?: Resolver<ResolversTypes['ObservableResult'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  madeBySensor?: Resolver<ResolversTypes['Observer'], ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  observedDuring?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType>,
  observedProperty?: Resolver<ResolversTypes['ObservableProperty'], ParentType, ContextType>,
  provider?: Resolver<ResolversTypes['Agent'], ParentType, ContextType>,
  resultTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>,
};

export type ObservationPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObservationPage'] = ResolversParentTypes['ObservationPage']> = {
  edges?: Resolver<Array<ResolversTypes['Observation']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ObserverResolvers<ContextType = any, ParentType extends ResolversParentTypes['Observer'] = ResolversParentTypes['Observer']> = {
  __resolveType: TypeResolveFn<'EconomicResource' | 'Organization' | 'Person' | 'ResourceSpecification', ParentType, ContextType>
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
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
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

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  postContent?: Resolver<Maybe<ResolversTypes['PostContent']>, ParentType, ContextType>,
};

export type PostContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostContent'] = ResolversParentTypes['PostContent']> = {
  htmlBody?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
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
  trace?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType, ProcessTraceArgs>,
  track?: Resolver<Maybe<Array<ResolversTypes['ProductionFlowItem']>>, ParentType, ContextType, ProcessTrackArgs>,
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
  __resolveType: TypeResolveFn<'EconomicEvent' | 'EconomicResource' | 'Process', ParentType, ContextType>
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
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
  processConformsTo?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType>,
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

export type RepliedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Replied'] = ResolversParentTypes['Replied']> = {
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType>,
  directReplies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Replied']>>>, ParentType, ContextType, RepliedDirectRepliesArgs>,
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>,
  postContent?: Resolver<Maybe<ResolversTypes['PostContent']>, ParentType, ContextType>,
  replyToId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  threadId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
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
  tags?: Resolver<Maybe<Array<ResolversTypes['AnyContext']>>, ParentType, ContextType>,
};

export type ResourceSpecificationPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSpecificationPage'] = ResolversParentTypes['ResourceSpecificationPage']> = {
  edges?: Resolver<Array<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ResourceSpecificationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResourceSpecificationResponse'] = ResolversParentTypes['ResourceSpecificationResponse']> = {
  resourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
};

export type RootMutationTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootMutationType'] = ResolversParentTypes['RootMutationType']> = {
  addTeamMember?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<RootMutationTypeAddTeamMemberArgs, 'label' | 'usernameOrEmail'>>,
  boost?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootMutationTypeBoostArgs, 'id'>>,
  changePassword?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeChangePasswordArgs, 'password' | 'passwordConfirmation'>>,
  confirmEmail?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeConfirmEmailArgs, 'token'>>,
  createAgentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationshipResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateAgentRelationshipArgs, 'relationship'>>,
  createAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRoleResponse']>, ParentType, ContextType, RootMutationTypeCreateAgentRelationshipRoleArgs>,
  createAgreement?: Resolver<Maybe<ResolversTypes['AgreementResponse']>, ParentType, ContextType, RootMutationTypeCreateAgreementArgs>,
  createAppreciation?: Resolver<Maybe<ResolversTypes['AppreciationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateAppreciationArgs, 'appreciation'>>,
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RootMutationTypeCreateCategoryArgs>,
  createClaim?: Resolver<Maybe<ResolversTypes['ClaimResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateClaimArgs, 'claim'>>,
  createCommitment?: Resolver<Maybe<ResolversTypes['CommitmentResponse']>, ParentType, ContextType, RootMutationTypeCreateCommitmentArgs>,
  createEconomicEvent?: Resolver<Maybe<ResolversTypes['EconomicEventResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateEconomicEventArgs, 'event'>>,
  createFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateFulfillmentArgs, 'fulfillment'>>,
  createIntent?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateIntentArgs>,
  createNeed?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateNeedArgs>,
  createObservablePhenomenon?: Resolver<Maybe<ResolversTypes['ObservablePhenomenon']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateObservablePhenomenonArgs, 'observablePhenomenon'>>,
  createObservableProperty?: Resolver<Maybe<ResolversTypes['ObservableProperty']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateObservablePropertyArgs, 'observableProperty'>>,
  createObservation?: Resolver<ResolversTypes['Observation'], ParentType, ContextType, RequireFields<RootMutationTypeCreateObservationArgs, 'observation'>>,
  createOffer?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeCreateOfferArgs>,
  createOrganization?: Resolver<Maybe<ResolversTypes['OrganizationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateOrganizationArgs, 'organization'>>,
  createPerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePersonArgs, 'person'>>,
  createPlan?: Resolver<Maybe<ResolversTypes['PlanResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePlanArgs, 'plan'>>,
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<RootMutationTypeCreatePostArgs, 'postContent'>>,
  createProcess?: Resolver<Maybe<ResolversTypes['ProcessResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateProcessArgs, 'process'>>,
  createProcessSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecificationResponse']>, ParentType, ContextType, RootMutationTypeCreateProcessSpecificationArgs>,
  createProductBatch?: Resolver<Maybe<ResolversTypes['ProductBatchResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateProductBatchArgs, 'productBatch'>>,
  createProposal?: Resolver<Maybe<ResolversTypes['ProposalResponse']>, ParentType, ContextType, RootMutationTypeCreateProposalArgs>,
  createRecipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchangeResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeExchangeArgs>,
  createRecipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlowResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeFlowArgs>,
  createRecipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcessResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeProcessArgs>,
  createRecipeResource?: Resolver<Maybe<ResolversTypes['RecipeResourceResponse']>, ParentType, ContextType, RootMutationTypeCreateRecipeResourceArgs>,
  createResourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecificationResponse']>, ParentType, ContextType, RootMutationTypeCreateResourceSpecificationArgs>,
  createSatisfaction?: Resolver<Maybe<ResolversTypes['SatisfactionResponse']>, ParentType, ContextType, RootMutationTypeCreateSatisfactionArgs>,
  createScenario?: Resolver<Maybe<ResolversTypes['ScenarioResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateScenarioArgs, 'plan'>>,
  createScenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinitionResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateScenarioDefinitionArgs, 'plan'>>,
  createSettlement?: Resolver<Maybe<ResolversTypes['SettlementResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSettlementArgs, 'settlement'>>,
  createSpatialThing?: Resolver<Maybe<ResolversTypes['SpatialThingResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateSpatialThingArgs, 'spatialThing'>>,
  createUnit?: Resolver<Maybe<ResolversTypes['UnitResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateUnitArgs, 'unit'>>,
  createUser?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateUserArgs, 'character' | 'profile'>>,
  createValueCalculation?: Resolver<Maybe<ResolversTypes['ValueCalculationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeCreateValueCalculationArgs, 'valueCalculation'>>,
  delete?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteArgs, 'contextId'>>,
  deleteAgentRelationship?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgentRelationshipArgs, 'id'>>,
  deleteAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgentRelationshipRoleArgs, 'id'>>,
  deleteAgreement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAgreementArgs, 'id'>>,
  deleteAppreciation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteAppreciationArgs, 'id'>>,
  deleteClaim?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteClaimArgs, 'id'>>,
  deleteCommitment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteCommitmentArgs, 'id'>>,
  deleteEconomicEvent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteEconomicEventArgs, 'id'>>,
  deleteEconomicResource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteEconomicResourceArgs, 'id'>>,
  deleteFulfillment?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteFulfillmentArgs, 'id'>>,
  deleteIntent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteIntentArgs, 'id'>>,
  deleteObservablePhenomenon?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteObservablePhenomenonArgs, 'id'>>,
  deleteObservableProperty?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteObservablePropertyArgs, 'id'>>,
  deleteObservation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteObservationArgs, 'id'>>,
  deleteOrganization?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteOrganizationArgs, 'id'>>,
  deletePerson?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeletePersonArgs, 'id'>>,
  deletePlan?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeletePlanArgs, 'id'>>,
  deleteProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProcessArgs, 'id'>>,
  deleteProcessSpecification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProcessSpecificationArgs, 'id'>>,
  deleteProductBatch?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProductBatchArgs, 'id'>>,
  deleteProposal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposalArgs, 'id'>>,
  deleteProposedIntent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposedIntentArgs, 'id'>>,
  deleteProposedTo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteProposedToArgs, 'id'>>,
  deleteRecipeExchange?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeExchangeArgs, 'id'>>,
  deleteRecipeFlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeFlowArgs, 'id'>>,
  deleteRecipeProcess?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeProcessArgs, 'id'>>,
  deleteRecipeResource?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteRecipeResourceArgs, 'id'>>,
  deleteResourceSpecification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteResourceSpecificationArgs, 'id'>>,
  deleteSatisfaction?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSatisfactionArgs, 'id'>>,
  deleteScenario?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteScenarioArgs, 'id'>>,
  deleteScenarioDefinition?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteScenarioDefinitionArgs, 'id'>>,
  deleteSettlement?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSettlementArgs, 'id'>>,
  deleteSpatialThing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteSpatialThingArgs, 'id'>>,
  deleteUnit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteUnitArgs, 'id'>>,
  deleteValueCalculation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeDeleteValueCalculationArgs, 'id'>>,
  flag?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootMutationTypeFlagArgs, 'id'>>,
  follow?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootMutationTypeFollowArgs, 'id' | 'username'>>,
  like?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RequireFields<RootMutationTypeLikeArgs, 'id'>>,
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeLoginArgs, 'emailOrUsername' | 'password'>>,
  proposeIntent?: Resolver<Maybe<ResolversTypes['ProposedIntentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeProposeIntentArgs, 'publishedIn' | 'publishes'>>,
  proposeTo?: Resolver<Maybe<ResolversTypes['ProposedToResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeProposeToArgs, 'proposed' | 'proposedTo'>>,
  requestConfirmEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<RootMutationTypeRequestConfirmEmailArgs, 'email'>>,
  requestResetPassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<RootMutationTypeRequestResetPasswordArgs, 'email'>>,
  selectUser?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeSelectUserArgs, 'username'>>,
  signup?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<RootMutationTypeSignupArgs, 'email' | 'password'>>,
  tag?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<RootMutationTypeTagArgs, 'tags' | 'thing'>>,
  updateAgentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationshipResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateAgentRelationshipArgs, 'relationship'>>,
  updateAgentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRoleResponse']>, ParentType, ContextType, RootMutationTypeUpdateAgentRelationshipRoleArgs>,
  updateAgreement?: Resolver<Maybe<ResolversTypes['AgreementResponse']>, ParentType, ContextType, RootMutationTypeUpdateAgreementArgs>,
  updateAppreciation?: Resolver<Maybe<ResolversTypes['AppreciationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateAppreciationArgs, 'appreciation'>>,
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RootMutationTypeUpdateCategoryArgs>,
  updateClaim?: Resolver<Maybe<ResolversTypes['ClaimResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateClaimArgs, 'claim'>>,
  updateCommitment?: Resolver<Maybe<ResolversTypes['CommitmentResponse']>, ParentType, ContextType, RootMutationTypeUpdateCommitmentArgs>,
  updateEconomicEvent?: Resolver<Maybe<ResolversTypes['EconomicEventResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateEconomicEventArgs, 'event'>>,
  updateEconomicResource?: Resolver<Maybe<ResolversTypes['EconomicResourceResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateEconomicResourceArgs, 'resource'>>,
  updateFulfillment?: Resolver<Maybe<ResolversTypes['FulfillmentResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateFulfillmentArgs, 'fulfillment'>>,
  updateIntent?: Resolver<Maybe<ResolversTypes['IntentResponse']>, ParentType, ContextType, RootMutationTypeUpdateIntentArgs>,
  updateObservablePhenomenon?: Resolver<Maybe<ResolversTypes['ObservablePhenomenon']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateObservablePhenomenonArgs, 'observablePhenomenon'>>,
  updateObservableProperty?: Resolver<Maybe<ResolversTypes['ObservableProperty']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateObservablePropertyArgs, 'observableProperty'>>,
  updateObservation?: Resolver<ResolversTypes['Observation'], ParentType, ContextType, RequireFields<RootMutationTypeUpdateObservationArgs, 'observation'>>,
  updateOrganization?: Resolver<Maybe<ResolversTypes['OrganizationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateOrganizationArgs, 'organization'>>,
  updatePerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdatePersonArgs, 'person'>>,
  updatePlan?: Resolver<Maybe<ResolversTypes['PlanResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdatePlanArgs, 'plan'>>,
  updateProcess?: Resolver<Maybe<ResolversTypes['ProcessResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProcessArgs, 'process'>>,
  updateProcessSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecificationResponse']>, ParentType, ContextType, RootMutationTypeUpdateProcessSpecificationArgs>,
  updateProductBatch?: Resolver<Maybe<ResolversTypes['ProductBatchResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateProductBatchArgs, 'productBatch'>>,
  updateProposal?: Resolver<Maybe<ResolversTypes['ProposalResponse']>, ParentType, ContextType, RootMutationTypeUpdateProposalArgs>,
  updateRecipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchangeResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeExchangeArgs>,
  updateRecipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlowResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeFlowArgs>,
  updateRecipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcessResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeProcessArgs>,
  updateRecipeResource?: Resolver<Maybe<ResolversTypes['RecipeResourceResponse']>, ParentType, ContextType, RootMutationTypeUpdateRecipeResourceArgs>,
  updateResourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecificationResponse']>, ParentType, ContextType, RootMutationTypeUpdateResourceSpecificationArgs>,
  updateSatisfaction?: Resolver<Maybe<ResolversTypes['SatisfactionResponse']>, ParentType, ContextType, RootMutationTypeUpdateSatisfactionArgs>,
  updateScenario?: Resolver<Maybe<ResolversTypes['ScenarioResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateScenarioArgs, 'plan'>>,
  updateScenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinitionResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateScenarioDefinitionArgs, 'plan'>>,
  updateSettlement?: Resolver<Maybe<ResolversTypes['SettlementResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateSettlementArgs, 's0ettlement'>>,
  updateSpatialThing?: Resolver<Maybe<ResolversTypes['SpatialThingResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateSpatialThingArgs, 'spatialThing'>>,
  updateUnit?: Resolver<Maybe<ResolversTypes['UnitResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateUnitArgs, 'unit'>>,
  updateUser?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType, RootMutationTypeUpdateUserArgs>,
  updateValueCalculation?: Resolver<Maybe<ResolversTypes['ValueCalculationResponse']>, ParentType, ContextType, RequireFields<RootMutationTypeUpdateValueCalculationArgs, 'valueCalculation'>>,
};

export type RootQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootQueryType'] = ResolversParentTypes['RootQueryType']> = {
  action?: Resolver<Maybe<ResolversTypes['Action']>, ParentType, ContextType, RootQueryTypeActionArgs>,
  actions?: Resolver<Maybe<Array<ResolversTypes['Action']>>, ParentType, ContextType>,
  activity?: Resolver<Maybe<ResolversTypes['Activity']>, ParentType, ContextType, RootQueryTypeActivityArgs>,
  agent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType, RootQueryTypeAgentArgs>,
  agentRelationship?: Resolver<Maybe<ResolversTypes['AgentRelationship']>, ParentType, ContextType, RootQueryTypeAgentRelationshipArgs>,
  agentRelationshipRole?: Resolver<Maybe<ResolversTypes['AgentRelationshipRole']>, ParentType, ContextType, RootQueryTypeAgentRelationshipRoleArgs>,
  agentRelationshipRoles?: Resolver<Maybe<Array<ResolversTypes['AgentRelationshipRole']>>, ParentType, ContextType, RootQueryTypeAgentRelationshipRolesArgs>,
  agentRelationships?: Resolver<Maybe<Array<ResolversTypes['AgentRelationship']>>, ParentType, ContextType, RootQueryTypeAgentRelationshipsArgs>,
  agents?: Resolver<Maybe<Array<ResolversTypes['Agent']>>, ParentType, ContextType, RootQueryTypeAgentsArgs>,
  agreement?: Resolver<Maybe<ResolversTypes['Agreement']>, ParentType, ContextType, RootQueryTypeAgreementArgs>,
  agreements?: Resolver<Maybe<Array<ResolversTypes['Agreement']>>, ParentType, ContextType, RootQueryTypeAgreementsArgs>,
  categories?: Resolver<ResolversTypes['CategoriesPage'], ParentType, ContextType, RootQueryTypeCategoriesArgs>,
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RootQueryTypeCategoryArgs>,
  claim?: Resolver<Maybe<ResolversTypes['Claim']>, ParentType, ContextType, RootQueryTypeClaimArgs>,
  claims?: Resolver<Maybe<Array<ResolversTypes['Claim']>>, ParentType, ContextType, RootQueryTypeClaimsArgs>,
  commitment?: Resolver<Maybe<ResolversTypes['Commitment']>, ParentType, ContextType, RootQueryTypeCommitmentArgs>,
  commitments?: Resolver<Maybe<Array<ResolversTypes['Commitment']>>, ParentType, ContextType, RootQueryTypeCommitmentsArgs>,
  economicEvent?: Resolver<Maybe<ResolversTypes['EconomicEvent']>, ParentType, ContextType, RootQueryTypeEconomicEventArgs>,
  economicEvents?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, RootQueryTypeEconomicEventsArgs>,
  economicEventsFiltered?: Resolver<Maybe<Array<ResolversTypes['EconomicEvent']>>, ParentType, ContextType, RootQueryTypeEconomicEventsFilteredArgs>,
  economicEventsPages?: Resolver<ResolversTypes['EconomicEventPage'], ParentType, ContextType, RootQueryTypeEconomicEventsPagesArgs>,
  economicResource?: Resolver<Maybe<ResolversTypes['EconomicResource']>, ParentType, ContextType, RootQueryTypeEconomicResourceArgs>,
  economicResources?: Resolver<Maybe<Array<ResolversTypes['EconomicResource']>>, ParentType, ContextType, RootQueryTypeEconomicResourcesArgs>,
  economicResourcesFiltered?: Resolver<Maybe<Array<Maybe<ResolversTypes['EconomicResource']>>>, ParentType, ContextType, RootQueryTypeEconomicResourcesFilteredArgs>,
  economicResourcesPages?: Resolver<ResolversTypes['EconomicResourcePage'], ParentType, ContextType, RootQueryTypeEconomicResourcesPagesArgs>,
  feed?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, RootQueryTypeFeedArgs>,
  fulfillment?: Resolver<Maybe<ResolversTypes['Fulfillment']>, ParentType, ContextType, RootQueryTypeFulfillmentArgs>,
  fulfillments?: Resolver<Maybe<Array<ResolversTypes['Fulfillment']>>, ParentType, ContextType, RootQueryTypeFulfillmentsArgs>,
  intent?: Resolver<Maybe<ResolversTypes['Intent']>, ParentType, ContextType, RootQueryTypeIntentArgs>,
  intents?: Resolver<Maybe<Array<ResolversTypes['Intent']>>, ParentType, ContextType, RootQueryTypeIntentsArgs>,
  intentsPages?: Resolver<ResolversTypes['IntentsPage'], ParentType, ContextType, RootQueryTypeIntentsPagesArgs>,
  me?: Resolver<Maybe<ResolversTypes['Me']>, ParentType, ContextType>,
  measure?: Resolver<Maybe<ResolversTypes['Measure']>, ParentType, ContextType, RootQueryTypeMeasureArgs>,
  measures?: Resolver<Maybe<Array<ResolversTypes['Measure']>>, ParentType, ContextType, RootQueryTypeMeasuresArgs>,
  measuresPages?: Resolver<ResolversTypes['MeasuresPage'], ParentType, ContextType, RootQueryTypeMeasuresPagesArgs>,
  myAgent?: Resolver<Maybe<ResolversTypes['Agent']>, ParentType, ContextType>,
  needsPages?: Resolver<ResolversTypes['IntentsPage'], ParentType, ContextType, RootQueryTypeNeedsPagesArgs>,
  observablePhenomenon?: Resolver<Maybe<ResolversTypes['ObservablePhenomenon']>, ParentType, ContextType, RootQueryTypeObservablePhenomenonArgs>,
  observablePhenomenonPages?: Resolver<ResolversTypes['ObservablePhenomenonPage'], ParentType, ContextType, RootQueryTypeObservablePhenomenonPagesArgs>,
  observablePhenomenons?: Resolver<Maybe<Array<ResolversTypes['ObservablePhenomenon']>>, ParentType, ContextType, RootQueryTypeObservablePhenomenonsArgs>,
  observableProperties?: Resolver<Maybe<Array<ResolversTypes['ObservableProperty']>>, ParentType, ContextType, RootQueryTypeObservablePropertiesArgs>,
  observablePropertiesPages?: Resolver<ResolversTypes['ObservablePropertyPage'], ParentType, ContextType, RootQueryTypeObservablePropertiesPagesArgs>,
  observableProperty?: Resolver<Maybe<ResolversTypes['ObservableProperty']>, ParentType, ContextType, RootQueryTypeObservablePropertyArgs>,
  observation?: Resolver<Maybe<ResolversTypes['Observation']>, ParentType, ContextType, RootQueryTypeObservationArgs>,
  observations?: Resolver<Maybe<Array<ResolversTypes['Observation']>>, ParentType, ContextType, RootQueryTypeObservationsArgs>,
  observationsPages?: Resolver<ResolversTypes['ObservationPage'], ParentType, ContextType, RootQueryTypeObservationsPagesArgs>,
  offersPages?: Resolver<ResolversTypes['IntentsPage'], ParentType, ContextType, RootQueryTypeOffersPagesArgs>,
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RootQueryTypeOrganizationArgs>,
  organizations?: Resolver<Maybe<Array<ResolversTypes['Organization']>>, ParentType, ContextType, RootQueryTypeOrganizationsArgs>,
  organizationsPages?: Resolver<ResolversTypes['AgentsPage'], ParentType, ContextType, RootQueryTypeOrganizationsPagesArgs>,
  people?: Resolver<Maybe<Array<ResolversTypes['Person']>>, ParentType, ContextType, RootQueryTypePeopleArgs>,
  peoplePages?: Resolver<ResolversTypes['AgentsPage'], ParentType, ContextType, RootQueryTypePeoplePagesArgs>,
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RootQueryTypePersonArgs>,
  plan?: Resolver<Maybe<ResolversTypes['Plan']>, ParentType, ContextType, RootQueryTypePlanArgs>,
  plans?: Resolver<Maybe<Array<ResolversTypes['Plan']>>, ParentType, ContextType, RootQueryTypePlansArgs>,
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RootQueryTypePostArgs>,
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>,
  process?: Resolver<Maybe<ResolversTypes['Process']>, ParentType, ContextType, RootQueryTypeProcessArgs>,
  processSpecification?: Resolver<Maybe<ResolversTypes['ProcessSpecification']>, ParentType, ContextType, RootQueryTypeProcessSpecificationArgs>,
  processSpecifications?: Resolver<Maybe<Array<ResolversTypes['ProcessSpecification']>>, ParentType, ContextType, RootQueryTypeProcessSpecificationsArgs>,
  processes?: Resolver<Maybe<Array<ResolversTypes['Process']>>, ParentType, ContextType, RootQueryTypeProcessesArgs>,
  processesPages?: Resolver<ResolversTypes['ProcessPage'], ParentType, ContextType, RootQueryTypeProcessesPagesArgs>,
  productBatch?: Resolver<Maybe<ResolversTypes['ProductBatch']>, ParentType, ContextType, RootQueryTypeProductBatchArgs>,
  productBatches?: Resolver<Maybe<Array<ResolversTypes['ProductBatch']>>, ParentType, ContextType, RootQueryTypeProductBatchesArgs>,
  proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RootQueryTypeProposalArgs>,
  proposals?: Resolver<Maybe<Array<ResolversTypes['Proposal']>>, ParentType, ContextType, RootQueryTypeProposalsArgs>,
  proposalsFiltered?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proposal']>>>, ParentType, ContextType, RootQueryTypeProposalsFilteredArgs>,
  proposalsPages?: Resolver<ResolversTypes['ProposalsPage'], ParentType, ContextType, RootQueryTypeProposalsPagesArgs>,
  recipeExchange?: Resolver<Maybe<ResolversTypes['RecipeExchange']>, ParentType, ContextType, RootQueryTypeRecipeExchangeArgs>,
  recipeExchanges?: Resolver<Maybe<Array<ResolversTypes['RecipeExchange']>>, ParentType, ContextType, RootQueryTypeRecipeExchangesArgs>,
  recipeFlow?: Resolver<Maybe<ResolversTypes['RecipeFlow']>, ParentType, ContextType, RootQueryTypeRecipeFlowArgs>,
  recipeFlows?: Resolver<Maybe<Array<ResolversTypes['RecipeFlow']>>, ParentType, ContextType, RootQueryTypeRecipeFlowsArgs>,
  recipeProcess?: Resolver<Maybe<ResolversTypes['RecipeProcess']>, ParentType, ContextType, RootQueryTypeRecipeProcessArgs>,
  recipeProcesses?: Resolver<Maybe<Array<ResolversTypes['RecipeProcess']>>, ParentType, ContextType, RootQueryTypeRecipeProcessesArgs>,
  recipeResource?: Resolver<Maybe<ResolversTypes['RecipeResource']>, ParentType, ContextType, RootQueryTypeRecipeResourceArgs>,
  recipeResources?: Resolver<Maybe<Array<ResolversTypes['RecipeResource']>>, ParentType, ContextType, RootQueryTypeRecipeResourcesArgs>,
  resourceSpecification?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType, RootQueryTypeResourceSpecificationArgs>,
  resourceSpecifications?: Resolver<Maybe<Array<ResolversTypes['ResourceSpecification']>>, ParentType, ContextType, RootQueryTypeResourceSpecificationsArgs>,
  resourceSpecificationsPages?: Resolver<ResolversTypes['ResourceSpecificationPage'], ParentType, ContextType, RootQueryTypeResourceSpecificationsPagesArgs>,
  satisfaction?: Resolver<Maybe<ResolversTypes['Satisfaction']>, ParentType, ContextType, RootQueryTypeSatisfactionArgs>,
  satisfactions?: Resolver<Maybe<Array<ResolversTypes['Satisfaction']>>, ParentType, ContextType, RootQueryTypeSatisfactionsArgs>,
  scenario?: Resolver<Maybe<ResolversTypes['Scenario']>, ParentType, ContextType, RootQueryTypeScenarioArgs>,
  scenarioDefinition?: Resolver<Maybe<ResolversTypes['ScenarioDefinition']>, ParentType, ContextType, RootQueryTypeScenarioDefinitionArgs>,
  scenarioDefinitions?: Resolver<Maybe<Array<ResolversTypes['ScenarioDefinition']>>, ParentType, ContextType, RootQueryTypeScenarioDefinitionsArgs>,
  scenarios?: Resolver<Maybe<Array<ResolversTypes['Scenario']>>, ParentType, ContextType, RootQueryTypeScenariosArgs>,
  settlement?: Resolver<Maybe<ResolversTypes['Settlement']>, ParentType, ContextType, RootQueryTypeSettlementArgs>,
  settlements?: Resolver<Maybe<Array<ResolversTypes['Settlement']>>, ParentType, ContextType, RootQueryTypeSettlementsArgs>,
  spatialThing?: Resolver<Maybe<ResolversTypes['SpatialThing']>, ParentType, ContextType, RootQueryTypeSpatialThingArgs>,
  spatialThings?: Resolver<Maybe<Array<ResolversTypes['SpatialThing']>>, ParentType, ContextType, RootQueryTypeSpatialThingsArgs>,
  spatialThingsPages?: Resolver<ResolversTypes['SpatialThingsPage'], ParentType, ContextType, RootQueryTypeSpatialThingsPagesArgs>,
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RootQueryTypeTagArgs>,
  unit?: Resolver<Maybe<ResolversTypes['Unit']>, ParentType, ContextType, RootQueryTypeUnitArgs>,
  units?: Resolver<Maybe<Array<ResolversTypes['Unit']>>, ParentType, ContextType, RootQueryTypeUnitsArgs>,
  unitsPages?: Resolver<ResolversTypes['UnitsPage'], ParentType, ContextType, RootQueryTypeUnitsPagesArgs>,
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RootQueryTypeUserArgs>,
  valueCalculation?: Resolver<Maybe<ResolversTypes['ValueCalculation']>, ParentType, ContextType, RootQueryTypeValueCalculationArgs>,
  valueCalculationsPages?: Resolver<ResolversTypes['ValueCalculationPage'], ParentType, ContextType, RootQueryTypeValueCalculationsPagesArgs>,
};

export type RootSubscriptionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['RootSubscriptionType'] = ResolversParentTypes['RootSubscriptionType']> = {
  intentCreated?: SubscriptionResolver<Maybe<ResolversTypes['Intent']>, "intentCreated", ParentType, ContextType, RootSubscriptionTypeIntentCreatedArgs>,
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

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = {
  canonicalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  context?: Resolver<Maybe<ResolversTypes['AnyContext']>, ParentType, ContextType>,
  displayUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tagged?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnyContext']>>>, ParentType, ContextType>,
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
  character?: Resolver<Maybe<ResolversTypes['Character']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  isInstanceAdmin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType, UserPostsArgs>,
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>,
  userActivities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Activity']>>>, ParentType, ContextType, UserUserActivitiesArgs>,
};

export type ValueCalculationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValueCalculation'] = ResolversParentTypes['ValueCalculation']> = {
  action?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  formula?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  inScopeOf?: Resolver<Maybe<Array<ResolversTypes['AccountingScope']>>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  resourceClassifiedAs?: Resolver<Maybe<Array<ResolversTypes['URI']>>, ParentType, ContextType>,
  resourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  valueAction?: Resolver<ResolversTypes['Action'], ParentType, ContextType>,
  valueResourceConformsTo?: Resolver<Maybe<ResolversTypes['ResourceSpecification']>, ParentType, ContextType>,
  valueUnit?: Resolver<ResolversTypes['Unit'], ParentType, ContextType>,
};

export type ValueCalculationPageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValueCalculationPage'] = ResolversParentTypes['ValueCalculationPage']> = {
  edges?: Resolver<Array<ResolversTypes['ValueCalculation']>, ParentType, ContextType>,
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
};

export type ValueCalculationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ValueCalculationResponse'] = ResolversParentTypes['ValueCalculationResponse']> = {
  valueCalculation?: Resolver<Maybe<ResolversTypes['ValueCalculation']>, ParentType, ContextType>,
};

export type VerbResolvers<ContextType = any, ParentType extends ResolversParentTypes['Verb'] = ResolversParentTypes['Verb']> = {
  verb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  verbDisplay?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  AccountingScope?: AccountingScopeResolvers,
  Action?: ActionResolvers<ContextType>,
  Activity?: ActivityResolvers<ContextType>,
  Agent?: AgentResolvers,
  AgentRelationship?: AgentRelationshipResolvers<ContextType>,
  AgentRelationshipResponse?: AgentRelationshipResponseResolvers<ContextType>,
  AgentRelationshipRole?: AgentRelationshipRoleResolvers<ContextType>,
  AgentRelationshipRoleResponse?: AgentRelationshipRoleResponseResolvers<ContextType>,
  AgentsPage?: AgentsPageResolvers<ContextType>,
  Agreement?: AgreementResolvers<ContextType>,
  AgreementResponse?: AgreementResponseResolvers<ContextType>,
  AnyCharacter?: AnyCharacterResolvers,
  AnyContext?: AnyContextResolvers,
  Appreciation?: AppreciationResolvers<ContextType>,
  AppreciationResponse?: AppreciationResponseResolvers<ContextType>,
  CategoriesPage?: CategoriesPageResolvers<ContextType>,
  Category?: CategoryResolvers<ContextType>,
  Character?: CharacterResolvers<ContextType>,
  Claim?: ClaimResolvers<ContextType>,
  ClaimResponse?: ClaimResponseResolvers<ContextType>,
  Commitment?: CommitmentResolvers<ContextType>,
  CommitmentResponse?: CommitmentResponseResolvers<ContextType>,
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
  Follow?: FollowResolvers<ContextType>,
  Fulfillment?: FulfillmentResolvers<ContextType>,
  FulfillmentResponse?: FulfillmentResponseResolvers<ContextType>,
  Intent?: IntentResolvers<ContextType>,
  IntentResponse?: IntentResponseResolvers<ContextType>,
  IntentsPage?: IntentsPageResolvers<ContextType>,
  Json?: GraphQLScalarType,
  LoginResponse?: LoginResponseResolvers<ContextType>,
  Me?: MeResolvers<ContextType>,
  Measure?: MeasureResolvers<ContextType>,
  MeasuresPage?: MeasuresPageResolvers<ContextType>,
  ObservableObject?: ObservableObjectResolvers,
  ObservablePhenomenon?: ObservablePhenomenonResolvers<ContextType>,
  ObservablePhenomenonPage?: ObservablePhenomenonPageResolvers<ContextType>,
  ObservableProperty?: ObservablePropertyResolvers<ContextType>,
  ObservablePropertyPage?: ObservablePropertyPageResolvers<ContextType>,
  ObservableResult?: ObservableResultResolvers,
  Observation?: ObservationResolvers<ContextType>,
  ObservationPage?: ObservationPageResolvers<ContextType>,
  Observer?: ObserverResolvers,
  Organization?: OrganizationResolvers<ContextType>,
  OrganizationResponse?: OrganizationResponseResolvers<ContextType>,
  PageInfo?: PageInfoResolvers<ContextType>,
  Person?: PersonResolvers<ContextType>,
  PersonResponse?: PersonResponseResolvers<ContextType>,
  Plan?: PlanResolvers<ContextType>,
  PlanResponse?: PlanResponseResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  PostContent?: PostContentResolvers<ContextType>,
  Process?: ProcessResolvers<ContextType>,
  ProcessPage?: ProcessPageResolvers<ContextType>,
  ProcessResponse?: ProcessResponseResolvers<ContextType>,
  ProcessSpecification?: ProcessSpecificationResolvers<ContextType>,
  ProcessSpecificationResponse?: ProcessSpecificationResponseResolvers<ContextType>,
  ProductBatch?: ProductBatchResolvers<ContextType>,
  ProductBatchResponse?: ProductBatchResponseResolvers<ContextType>,
  ProductionFlowItem?: ProductionFlowItemResolvers,
  Profile?: ProfileResolvers<ContextType>,
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
  Replied?: RepliedResolvers<ContextType>,
  ResourceSpecification?: ResourceSpecificationResolvers<ContextType>,
  ResourceSpecificationPage?: ResourceSpecificationPageResolvers<ContextType>,
  ResourceSpecificationResponse?: ResourceSpecificationResponseResolvers<ContextType>,
  RootMutationType?: RootMutationTypeResolvers<ContextType>,
  RootQueryType?: RootQueryTypeResolvers<ContextType>,
  RootSubscriptionType?: RootSubscriptionTypeResolvers<ContextType>,
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
  Tag?: TagResolvers<ContextType>,
  Unit?: UnitResolvers<ContextType>,
  UnitResponse?: UnitResponseResolvers<ContextType>,
  UnitsPage?: UnitsPageResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  URI?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  ValueCalculation?: ValueCalculationResolvers<ContextType>,
  ValueCalculationPage?: ValueCalculationPageResolvers<ContextType>,
  ValueCalculationResponse?: ValueCalculationResponseResolvers<ContextType>,
  Verb?: VerbResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
