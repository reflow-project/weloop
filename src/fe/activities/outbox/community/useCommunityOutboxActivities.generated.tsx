import * as Types from '../../../../graphql/types.generated';

import { ActivityPreviewFragment } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import { FullPageInfoFragment } from '../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../@fragments/misc.generated';
import { ActivityPreviewFragmentDoc } from '../../../../HOC/modules/previews/activity/ActivityPreview.generated';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CommunityOutboxActivitiesQueryVariables = {
  communityId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>,
  after?: Types.Maybe<Array<Types.Maybe<Types.Scalars['Cursor']>>>
};


export type CommunityOutboxActivitiesQuery = (
  { __typename: 'RootQueryType' }
  & { community: Types.Maybe<(
    { __typename: 'Community' }
    & Pick<Types.Community, 'id'>
    & { outbox: Types.Maybe<(
      { __typename: 'ActivitiesPage' }
      & Pick<Types.ActivitiesPage, 'totalCount'>
      & { pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ), edges: Array<(
        { __typename: 'Activity' }
        & CommunityOutboxActivityFragment
      )> }
    )> }
  )> }
);

export type CommunityOutboxActivityFragment = (
  { __typename: 'Activity' }
  & ActivityPreviewFragment
);

export const CommunityOutboxActivityFragmentDoc = gql`
    fragment CommunityOutboxActivity on Activity {
  ...ActivityPreview
}
    ${ActivityPreviewFragmentDoc}`;
export const CommunityOutboxActivitiesDocument = gql`
    query communityOutboxActivities($communityId: String!, $limit: Int, $before: [Cursor], $after: [Cursor]) {
  community(communityId: $communityId) @connection(key: "communityOutboxActivities", filter: ["communityId"]) {
    id
    outbox(limit: $limit, before: $before, after: $after) {
      totalCount
      pageInfo {
        ...FullPageInfo
      }
      edges {
        ...CommunityOutboxActivity
      }
    }
  }
}
    ${FullPageInfoFragmentDoc}
${CommunityOutboxActivityFragmentDoc}`;
export type CommunityOutboxActivitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables>, 'query'> & ({ variables: CommunityOutboxActivitiesQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const CommunityOutboxActivitiesComponent = (props: CommunityOutboxActivitiesComponentProps) => (
      <ApolloReactComponents.Query<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables> query={CommunityOutboxActivitiesDocument} {...props} />
    );
    
export type CommunityOutboxActivitiesProps<TChildProps = {}> = ApolloReactHoc.DataProps<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables> & TChildProps;
export function withCommunityOutboxActivities<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CommunityOutboxActivitiesQuery,
  CommunityOutboxActivitiesQueryVariables,
  CommunityOutboxActivitiesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables, CommunityOutboxActivitiesProps<TChildProps>>(CommunityOutboxActivitiesDocument, {
      alias: 'communityOutboxActivities',
      ...operationOptions
    });
};

/**
 * __useCommunityOutboxActivitiesQuery__
 *
 * To run a query within a React component, call `useCommunityOutboxActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommunityOutboxActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommunityOutboxActivitiesQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useCommunityOutboxActivitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables>(CommunityOutboxActivitiesDocument, baseOptions);
      }
export function useCommunityOutboxActivitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables>(CommunityOutboxActivitiesDocument, baseOptions);
        }
export type CommunityOutboxActivitiesQueryHookResult = ReturnType<typeof useCommunityOutboxActivitiesQuery>;
export type CommunityOutboxActivitiesLazyQueryHookResult = ReturnType<typeof useCommunityOutboxActivitiesLazyQuery>;
export type CommunityOutboxActivitiesQueryResult = ApolloReactCommon.QueryResult<CommunityOutboxActivitiesQuery, CommunityOutboxActivitiesQueryVariables>;


export interface CommunityOutboxActivitiesQueryOperation {
  operationName: 'communityOutboxActivities'
  result: CommunityOutboxActivitiesQuery
  variables: CommunityOutboxActivitiesQueryVariables
  type: 'query'
}
