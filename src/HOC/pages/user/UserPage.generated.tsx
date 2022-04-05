import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateUserMutationVariables = {
  profileName: Types.Scalars['String'],
  userName?: Types.Maybe<Types.Scalars['String']>,
  summary?: Types.Maybe<Types.Scalars['String']>
};


export type CreateUserMutation = (
  { __typename: 'RootMutationType' }
  & { createUser: Types.Maybe<(
    { __typename: 'Me' }
    & Pick<Types.Me, 'accountId'>
    & { user: Types.Maybe<(
      { __typename: 'User' }
      & { character: Types.Maybe<(
        { __typename: 'Character' }
        & Pick<Types.Character, 'username'>
      )>, profile: Types.Maybe<(
        { __typename: 'Profile' }
        & Pick<Types.Profile, 'name' | 'summary'>
      )> }
    )> }
  )> }
);

export type UpdateUserMutationVariables = {
  userName?: Types.Maybe<Types.Scalars['String']>,
  summary?: Types.Maybe<Types.Scalars['String']>
};


export type UpdateUserMutation = (
  { __typename: 'RootMutationType' }
  & { updateUser: Types.Maybe<(
    { __typename: 'Me' }
    & Pick<Types.Me, 'accountId'>
    & { user: Types.Maybe<(
      { __typename: 'User' }
      & { character: Types.Maybe<(
        { __typename: 'Character' }
        & Pick<Types.Character, 'username'>
      )> }
    )> }
  )> }
);


export const CreateUserDocument = gql`
    mutation createUser($profileName: String!, $userName: String, $summary: String) {
  createUser(profile: {name: $profileName, summary: $summary}, character: {username: $userName}) {
    accountId
    user {
      character {
        username
      }
      profile {
        name
        summary
      }
    }
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      profileName: // value for 'profileName'
 *      userName: // value for 'userName'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($userName: String, $summary: String) {
  updateUser(profile: {summary: $summary, name: $userName}) {
    accountId
    user {
      character {
        username
      }
    }
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      userName: // value for 'userName'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, baseOptions);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;


export interface CreateUserMutationOperation {
  operationName: 'createUser'
  result: CreateUserMutation
  variables: CreateUserMutationVariables
  type: 'mutation'
}
export const CreateUserMutationName:CreateUserMutationOperation['operationName'] = 'createUser'

export const CreateUserMutationRefetch = (
  variables:CreateUserMutationVariables, 
  context?:any
)=>({
  query:CreateUserDocument,
  variables,
  context
})
      


export interface UpdateUserMutationOperation {
  operationName: 'updateUser'
  result: UpdateUserMutation
  variables: UpdateUserMutationVariables
  type: 'mutation'
}
export const UpdateUserMutationName:UpdateUserMutationOperation['operationName'] = 'updateUser'

export const UpdateUserMutationRefetch = (
  variables:UpdateUserMutationVariables, 
  context?:any
)=>({
  query:UpdateUserDocument,
  variables,
  context
})
      
