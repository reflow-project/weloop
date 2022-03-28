import * as Types from '../../../graphql/types.generated';

import { FullPageInfoFragment } from '../../../@fragments/misc.generated';
import { FlagPreviewFragment } from '../../../HOC/modules/previews/flag/FlagPreview.generated';
import gql from 'graphql-tag';
import { FlagPreviewFragmentDoc } from '../../../HOC/modules/previews/flag/FlagPreview.generated';
import { FullPageInfoFragmentDoc } from '../../../@fragments/misc.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';



export type AllFlagsQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type AllFlagsQuery = (
  { __typename: 'RootQueryType' }
  & { flags: Types.Maybe<(
    { __typename: 'FlagsPage' }
    & Pick<Types.FlagsPage, 'totalCount'>
    & { edges: Array<(
      { __typename: 'Flag' }
      & FlagPreviewFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & FullPageInfoFragment
    ) }
  )> }
);


export const AllFlagsDocument = gql`
    query allFlags($limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  flags(limit: $limit, before: $before, after: $after) @connection(key: "allFlags") {
    edges {
      ...FlagPreview
    }
    totalCount
    pageInfo {
      ...FullPageInfo
    }
  }
}
    ${FlagPreviewFragmentDoc}
${FullPageInfoFragmentDoc}`;

/**
 * __useAllFlagsQuery__
 *
 * To run a query within a React component, call `useAllFlagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFlagsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFlagsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAllFlagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllFlagsQuery, AllFlagsQueryVariables>) {
        return ApolloReactHooks.useQuery<AllFlagsQuery, AllFlagsQueryVariables>(AllFlagsDocument, baseOptions);
      }
export function useAllFlagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllFlagsQuery, AllFlagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllFlagsQuery, AllFlagsQueryVariables>(AllFlagsDocument, baseOptions);
        }
export type AllFlagsQueryHookResult = ReturnType<typeof useAllFlagsQuery>;
export type AllFlagsLazyQueryHookResult = ReturnType<typeof useAllFlagsLazyQuery>;
export type AllFlagsQueryResult = ApolloReactCommon.QueryResult<AllFlagsQuery, AllFlagsQueryVariables>;


export interface AllFlagsQueryOperation {
  operationName: 'allFlags'
  result: AllFlagsQuery
  variables: AllFlagsQueryVariables
  type: 'query'
}
export const AllFlagsQueryName:AllFlagsQueryOperation['operationName'] = 'allFlags'

export const AllFlagsQueryRefetch = (
  variables:AllFlagsQueryVariables, 
  context?:any
)=>({
  query:AllFlagsDocument,
  variables,
  context
})
      
