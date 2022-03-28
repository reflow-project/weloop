import * as Types from '../../../graphql/types.generated';

import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import { LikePreviewFragment } from '../../../HOC/modules/previews/like/LikePreview.generated';
import gql from 'graphql-tag';
import { LikePreviewFragmentDoc } from '../../../HOC/modules/previews/like/LikePreview.generated';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type UserLikesQueryVariables = {
  userId: Types.Scalars['String'],
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type UserLikesQuery = (
  { __typename: 'RootQueryType' }
  & { user: Types.Maybe<(
    { __typename: 'User' }
    & Pick<Types.User, 'id'>
    & { likes: Types.Maybe<(
      { __typename: 'LikesPage' }
      & Pick<Types.LikesPage, 'totalCount'>
      & { edges: Array<(
        { __typename: 'Like' }
        & LikePreviewFragment
      )>, pageInfo: (
        { __typename: 'PageInfo' }
        & FullPageInfoFragment
      ) }
    )> }
  )> }
);


export const UserLikesDocument = gql`
    query userLikes($userId: String!, $limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  user(userId: $userId) {
    id
    likes(limit: $limit, before: $before, after: $after) @connection(key: "userLikes") {
      edges {
        ...LikePreview
      }
      totalCount
      pageInfo {
        ...FullPageInfo
      }
    }
  }
}
    ${LikePreviewFragmentDoc}
${FullPageInfoFragmentDoc}`;

/**
 * __useUserLikesQuery__
 *
 * To run a query within a React component, call `useUserLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserLikesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useUserLikesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserLikesQuery, UserLikesQueryVariables>) {
        return ApolloReactHooks.useQuery<UserLikesQuery, UserLikesQueryVariables>(UserLikesDocument, baseOptions);
      }
export function useUserLikesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserLikesQuery, UserLikesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserLikesQuery, UserLikesQueryVariables>(UserLikesDocument, baseOptions);
        }
export type UserLikesQueryHookResult = ReturnType<typeof useUserLikesQuery>;
export type UserLikesLazyQueryHookResult = ReturnType<typeof useUserLikesLazyQuery>;
export type UserLikesQueryResult = ApolloReactCommon.QueryResult<UserLikesQuery, UserLikesQueryVariables>;


export interface UserLikesQueryOperation {
  operationName: 'userLikes'
  result: UserLikesQuery
  variables: UserLikesQueryVariables
  type: 'query'
}
export const UserLikesQueryName:UserLikesQueryOperation['operationName'] = 'userLikes'

export const UserLikesQueryRefetch = (
  variables:UserLikesQueryVariables, 
  context?:any
)=>({
  query:UserLikesDocument,
  variables,
  context
})
      
