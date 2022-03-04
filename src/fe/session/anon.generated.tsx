import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AnonResetPasswordRequestMutationVariables = {
  email: Types.Scalars['String']
};


export type AnonResetPasswordRequestMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'requestResetPassword'>
);

export type AnonLoginMutationVariables = {
  email: Types.Scalars['String'],
  password: Types.Scalars['String']
};


export type AnonLoginMutation = (
  { __typename: 'RootMutationType' }
  & { login: Types.Maybe<(
    { __typename: 'LoginResponse' }
    & Pick<Types.LoginResponse, 'token' | 'currentUsername' | 'currentAccountId'>
    & { currentUser: Types.Maybe<(
      { __typename: 'User' }
      & Pick<Types.User, 'id'>
      & { profile: Types.Maybe<(
        { __typename: 'Profile' }
        & Pick<Types.Profile, 'name' | 'summary'>
      )> }
    )> }
  )> }
);

export type RequestConfirmEmailMutationVariables = {
  email: Types.Scalars['String']
};


export type RequestConfirmEmailMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'requestConfirmEmail'>
);

export type ConfirmEmailMutationVariables = {
  token: Types.Scalars['String']
};


export type ConfirmEmailMutation = (
  { __typename: 'RootMutationType' }
  & { confirmEmail: Types.Maybe<(
    { __typename: 'Me' }
    & Pick<Types.Me, 'accountId'>
  )> }
);

export type AnonSignUpMutationVariables = {
  email: Types.Scalars['String'],
  password: Types.Scalars['String']
};


export type AnonSignUpMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'signup'>
);


export const AnonResetPasswordRequestDocument = gql`
    mutation anonResetPasswordRequest($email: String!) {
  requestResetPassword(email: $email)
}
    `;
export type AnonResetPasswordRequestMutationFn = ApolloReactCommon.MutationFunction<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>;

/**
 * __useAnonResetPasswordRequestMutation__
 *
 * To run a mutation, you first call `useAnonResetPasswordRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonResetPasswordRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonResetPasswordRequestMutation, { data, loading, error }] = useAnonResetPasswordRequestMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAnonResetPasswordRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>(AnonResetPasswordRequestDocument, baseOptions);
      }
export type AnonResetPasswordRequestMutationHookResult = ReturnType<typeof useAnonResetPasswordRequestMutation>;
export type AnonResetPasswordRequestMutationResult = ApolloReactCommon.MutationResult<AnonResetPasswordRequestMutation>;
export type AnonResetPasswordRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonResetPasswordRequestMutation, AnonResetPasswordRequestMutationVariables>;
export const AnonLoginDocument = gql`
    mutation anonLogin($email: String!, $password: String!) {
  login(emailOrUsername: $email, password: $password) {
    token
    currentUsername
    currentAccountId
    currentUser {
      id
      profile {
        name
        summary
      }
    }
  }
}
    `;
export type AnonLoginMutationFn = ApolloReactCommon.MutationFunction<AnonLoginMutation, AnonLoginMutationVariables>;

/**
 * __useAnonLoginMutation__
 *
 * To run a mutation, you first call `useAnonLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonLoginMutation, { data, loading, error }] = useAnonLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAnonLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonLoginMutation, AnonLoginMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonLoginMutation, AnonLoginMutationVariables>(AnonLoginDocument, baseOptions);
      }
export type AnonLoginMutationHookResult = ReturnType<typeof useAnonLoginMutation>;
export type AnonLoginMutationResult = ApolloReactCommon.MutationResult<AnonLoginMutation>;
export type AnonLoginMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonLoginMutation, AnonLoginMutationVariables>;
export const RequestConfirmEmailDocument = gql`
    mutation requestConfirmEmail($email: String!) {
  requestConfirmEmail(email: $email)
}
    `;
export type RequestConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<RequestConfirmEmailMutation, RequestConfirmEmailMutationVariables>;

/**
 * __useRequestConfirmEmailMutation__
 *
 * To run a mutation, you first call `useRequestConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestConfirmEmailMutation, { data, loading, error }] = useRequestConfirmEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestConfirmEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestConfirmEmailMutation, RequestConfirmEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestConfirmEmailMutation, RequestConfirmEmailMutationVariables>(RequestConfirmEmailDocument, baseOptions);
      }
export type RequestConfirmEmailMutationHookResult = ReturnType<typeof useRequestConfirmEmailMutation>;
export type RequestConfirmEmailMutationResult = ApolloReactCommon.MutationResult<RequestConfirmEmailMutation>;
export type RequestConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestConfirmEmailMutation, RequestConfirmEmailMutationVariables>;
export const ConfirmEmailDocument = gql`
    mutation confirmEmail($token: String!) {
  confirmEmail(token: $token) {
    accountId
  }
}
    `;
export type ConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, baseOptions);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = ApolloReactCommon.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const AnonSignUpDocument = gql`
    mutation anonSignUp($email: String!, $password: String!) {
  signup(email: $email, password: $password)
}
    `;
export type AnonSignUpMutationFn = ApolloReactCommon.MutationFunction<AnonSignUpMutation, AnonSignUpMutationVariables>;

/**
 * __useAnonSignUpMutation__
 *
 * To run a mutation, you first call `useAnonSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonSignUpMutation, { data, loading, error }] = useAnonSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAnonSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonSignUpMutation, AnonSignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonSignUpMutation, AnonSignUpMutationVariables>(AnonSignUpDocument, baseOptions);
      }
export type AnonSignUpMutationHookResult = ReturnType<typeof useAnonSignUpMutation>;
export type AnonSignUpMutationResult = ApolloReactCommon.MutationResult<AnonSignUpMutation>;
export type AnonSignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonSignUpMutation, AnonSignUpMutationVariables>;


export interface AnonResetPasswordRequestMutationOperation {
  operationName: 'anonResetPasswordRequest'
  result: AnonResetPasswordRequestMutation
  variables: AnonResetPasswordRequestMutationVariables
  type: 'mutation'
}
export const AnonResetPasswordRequestMutationName:AnonResetPasswordRequestMutationOperation['operationName'] = 'anonResetPasswordRequest'

export const AnonResetPasswordRequestMutationRefetch = (
  variables:AnonResetPasswordRequestMutationVariables, 
  context?:any
)=>({
  query:AnonResetPasswordRequestDocument,
  variables,
  context
})
      


export interface AnonLoginMutationOperation {
  operationName: 'anonLogin'
  result: AnonLoginMutation
  variables: AnonLoginMutationVariables
  type: 'mutation'
}
export const AnonLoginMutationName:AnonLoginMutationOperation['operationName'] = 'anonLogin'

export const AnonLoginMutationRefetch = (
  variables:AnonLoginMutationVariables, 
  context?:any
)=>({
  query:AnonLoginDocument,
  variables,
  context
})
      


export interface RequestConfirmEmailMutationOperation {
  operationName: 'requestConfirmEmail'
  result: RequestConfirmEmailMutation
  variables: RequestConfirmEmailMutationVariables
  type: 'mutation'
}
export const RequestConfirmEmailMutationName:RequestConfirmEmailMutationOperation['operationName'] = 'requestConfirmEmail'

export const RequestConfirmEmailMutationRefetch = (
  variables:RequestConfirmEmailMutationVariables, 
  context?:any
)=>({
  query:RequestConfirmEmailDocument,
  variables,
  context
})
      


export interface ConfirmEmailMutationOperation {
  operationName: 'confirmEmail'
  result: ConfirmEmailMutation
  variables: ConfirmEmailMutationVariables
  type: 'mutation'
}
export const ConfirmEmailMutationName:ConfirmEmailMutationOperation['operationName'] = 'confirmEmail'

export const ConfirmEmailMutationRefetch = (
  variables:ConfirmEmailMutationVariables, 
  context?:any
)=>({
  query:ConfirmEmailDocument,
  variables,
  context
})
      


export interface AnonSignUpMutationOperation {
  operationName: 'anonSignUp'
  result: AnonSignUpMutation
  variables: AnonSignUpMutationVariables
  type: 'mutation'
}
export const AnonSignUpMutationName:AnonSignUpMutationOperation['operationName'] = 'anonSignUp'

export const AnonSignUpMutationRefetch = (
  variables:AnonSignUpMutationVariables, 
  context?:any
)=>({
  query:AnonSignUpDocument,
  variables,
  context
})
      
