import * as Types from '../../../graphql/types.generated';

import { ShareLinkWebMetaFragment } from '../../../HOC/modules/ShareLink/shareLink.generated';
import gql from 'graphql-tag';
import { ShareLinkWebMetaFragmentDoc } from '../../../HOC/modules/ShareLink/shareLink.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type ShareLinkFetchWebMetaMutationVariables = {
  url: Types.Scalars['String']
};


export type ShareLinkFetchWebMetaMutation = (
  { __typename: 'RootMutationType' }
  & { fetchWebMetadata: Types.Maybe<(
    { __typename: 'WebMetadata' }
    & ShareLinkWebMetaFragment
  )> }
);


export const ShareLinkFetchWebMetaDocument = gql`
    mutation shareLinkFetchWebMeta($url: String!) {
  fetchWebMetadata(url: $url) {
    ...ShareLinkWebMeta
  }
}
    ${ShareLinkWebMetaFragmentDoc}`;
export type ShareLinkFetchWebMetaMutationFn = ApolloReactCommon.MutationFunction<ShareLinkFetchWebMetaMutation, ShareLinkFetchWebMetaMutationVariables>;

/**
 * __useShareLinkFetchWebMetaMutation__
 *
 * To run a mutation, you first call `useShareLinkFetchWebMetaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareLinkFetchWebMetaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareLinkFetchWebMetaMutation, { data, loading, error }] = useShareLinkFetchWebMetaMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useShareLinkFetchWebMetaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ShareLinkFetchWebMetaMutation, ShareLinkFetchWebMetaMutationVariables>) {
        return ApolloReactHooks.useMutation<ShareLinkFetchWebMetaMutation, ShareLinkFetchWebMetaMutationVariables>(ShareLinkFetchWebMetaDocument, baseOptions);
      }
export type ShareLinkFetchWebMetaMutationHookResult = ReturnType<typeof useShareLinkFetchWebMetaMutation>;
export type ShareLinkFetchWebMetaMutationResult = ApolloReactCommon.MutationResult<ShareLinkFetchWebMetaMutation>;
export type ShareLinkFetchWebMetaMutationOptions = ApolloReactCommon.BaseMutationOptions<ShareLinkFetchWebMetaMutation, ShareLinkFetchWebMetaMutationVariables>;


export interface ShareLinkFetchWebMetaMutationOperation {
  operationName: 'shareLinkFetchWebMeta'
  result: ShareLinkFetchWebMetaMutation
  variables: ShareLinkFetchWebMetaMutationVariables
  type: 'mutation'
}
export const ShareLinkFetchWebMetaMutationName:ShareLinkFetchWebMetaMutationOperation['operationName'] = 'shareLinkFetchWebMeta'

export const ShareLinkFetchWebMetaMutationRefetch = (
  variables:ShareLinkFetchWebMetaMutationVariables, 
  context?:any
)=>({
  query:ShareLinkFetchWebMetaDocument,
  variables,
  context
})
      
