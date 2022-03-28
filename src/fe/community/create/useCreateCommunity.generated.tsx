import * as Types from '../../../graphql/types.generated';

import { CommunityPageDataFragment } from '../../../HOC/pages/community/CommunityPage.generated';
import gql from 'graphql-tag';
import { CommunityPageDataFragmentDoc } from '../../../HOC/pages/community/CommunityPage.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CreateCommunityMutationVariables = {
  community: Types.CommunityInput,
  icon?: Types.Maybe<Types.UploadInput>
};


export type CreateCommunityMutation = (
  { __typename: 'RootMutationType' }
  & { createCommunity: Types.Maybe<(
    { __typename: 'Community' }
    & CommunityPageDataFragment
  )> }
);


export const CreateCommunityDocument = gql`
    mutation createCommunity($community: CommunityInput!, $icon: UploadInput) {
  createCommunity(community: $community, icon: $icon) {
    ...CommunityPageData
  }
}
    ${CommunityPageDataFragmentDoc}`;
export type CreateCommunityMutationFn = ApolloReactCommon.MutationFunction<CreateCommunityMutation, CreateCommunityMutationVariables>;

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      community: // value for 'community'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useCreateCommunityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCommunityMutation, CreateCommunityMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCommunityMutation, CreateCommunityMutationVariables>(CreateCommunityDocument, baseOptions);
      }
export type CreateCommunityMutationHookResult = ReturnType<typeof useCreateCommunityMutation>;
export type CreateCommunityMutationResult = ApolloReactCommon.MutationResult<CreateCommunityMutation>;
export type CreateCommunityMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCommunityMutation, CreateCommunityMutationVariables>;


export interface CreateCommunityMutationOperation {
  operationName: 'createCommunity'
  result: CreateCommunityMutation
  variables: CreateCommunityMutationVariables
  type: 'mutation'
}
export const CreateCommunityMutationName:CreateCommunityMutationOperation['operationName'] = 'createCommunity'

export const CreateCommunityMutationRefetch = (
  variables:CreateCommunityMutationVariables, 
  context?:any
)=>({
  query:CreateCommunityDocument,
  variables,
  context
})
      
