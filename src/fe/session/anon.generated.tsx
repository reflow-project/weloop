import * as Types from '../../graphql/types.generated';

import { UseMeDataFragment } from './me.generated';
import gql from 'graphql-tag';
import { UseMeDataFragmentDoc } from './me.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type AnonResetPasswordMutationVariables = {
  password: Types.Scalars['String'],
  token: Types.Scalars['String']
};


export type AnonResetPasswordMutation = (
  { __typename: 'RootMutationType' }
  & { resetPassword: Types.Maybe<(
    { __typename: 'AuthPayload' }
    & AuthDataFragment
  )> }
);

export type AnonResetPasswordRequestMutationVariables = {
  email: Types.Scalars['String']
};


export type AnonResetPasswordRequestMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'resetPasswordRequest'>
);

export type AnonLoginMutationVariables = {
  email: Types.Scalars['String'],
  password: Types.Scalars['String']
};


export type AnonLoginMutation = (
  { __typename: 'RootMutationType' }
  & { createSession: Types.Maybe<(
    { __typename: 'AuthPayload' }
    & AuthDataFragment
  )> }
);

export type AnonConfirmEmailMutationVariables = {
  token: Types.Scalars['String']
};


export type AnonConfirmEmailMutation = (
  { __typename: 'RootMutationType' }
  & { confirmEmail: Types.Maybe<(
    { __typename: 'AuthPayload' }
    & AuthDataFragment
  )> }
);

export type AnonSignUpMutationVariables = {
  registration: Types.RegistrationInput
};


export type AnonSignUpMutation = (
  { __typename: 'RootMutationType' }
  & { createUser: Types.Maybe<(
    { __typename: 'Me' }
    & UseMeDataFragment
  )> }
);

export type AnonUsernameAvailableQueryVariables = {
  username: Types.Scalars['String']
};


export type AnonUsernameAvailableQuery = (
  { __typename: 'RootQueryType' }
  & Pick<Types.RootQueryType, 'usernameAvailable'>
);

export type AuthDataFragment = (
  { __typename: 'AuthPayload' }
  & Pick<Types.AuthPayload, 'token'>
  & { me: (
    { __typename: 'Me' }
    & UseMeDataFragment
  ) }
);

export const AuthDataFragmentDoc = gql`
    fragment AuthData on AuthPayload {
  me {
    ...UseMeData
  }
  token
}
    ${UseMeDataFragmentDoc}`;
export const AnonResetPasswordDocument = gql`
    mutation anonResetPassword($password: String!, $token: String!) {
  resetPassword(token: $token, password: $password) {
    ...AuthData
  }
}
    ${AuthDataFragmentDoc}`;
export type AnonResetPasswordMutationFn = ApolloReactCommon.MutationFunction<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>;

/**
 * __useAnonResetPasswordMutation__
 *
 * To run a mutation, you first call `useAnonResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonResetPasswordMutation, { data, loading, error }] = useAnonResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAnonResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>(AnonResetPasswordDocument, baseOptions);
      }
export type AnonResetPasswordMutationHookResult = ReturnType<typeof useAnonResetPasswordMutation>;
export type AnonResetPasswordMutationResult = ApolloReactCommon.MutationResult<AnonResetPasswordMutation>;
export type AnonResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonResetPasswordMutation, AnonResetPasswordMutationVariables>;
export const AnonResetPasswordRequestDocument = gql`
    mutation anonResetPasswordRequest($email: String!) {
  resetPasswordRequest(email: $email)
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
  createSession(email: $email, password: $password) {
    ...AuthData
  }
}
    ${AuthDataFragmentDoc}`;
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
export const AnonConfirmEmailDocument = gql`
    mutation anonConfirmEmail($token: String!) {
  confirmEmail(token: $token) {
    ...AuthData
  }
}
    ${AuthDataFragmentDoc}`;
export type AnonConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<AnonConfirmEmailMutation, AnonConfirmEmailMutationVariables>;

/**
 * __useAnonConfirmEmailMutation__
 *
 * To run a mutation, you first call `useAnonConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnonConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [anonConfirmEmailMutation, { data, loading, error }] = useAnonConfirmEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useAnonConfirmEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonConfirmEmailMutation, AnonConfirmEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonConfirmEmailMutation, AnonConfirmEmailMutationVariables>(AnonConfirmEmailDocument, baseOptions);
      }
export type AnonConfirmEmailMutationHookResult = ReturnType<typeof useAnonConfirmEmailMutation>;
export type AnonConfirmEmailMutationResult = ApolloReactCommon.MutationResult<AnonConfirmEmailMutation>;
export type AnonConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonConfirmEmailMutation, AnonConfirmEmailMutationVariables>;
export const AnonSignUpDocument = gql`
    mutation anonSignUp($registration: RegistrationInput!) {
  createUser(user: $registration) {
    ...UseMeData
  }
}
    ${UseMeDataFragmentDoc}`;
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
 *      registration: // value for 'registration'
 *   },
 * });
 */
export function useAnonSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonSignUpMutation, AnonSignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonSignUpMutation, AnonSignUpMutationVariables>(AnonSignUpDocument, baseOptions);
      }
export type AnonSignUpMutationHookResult = ReturnType<typeof useAnonSignUpMutation>;
export type AnonSignUpMutationResult = ApolloReactCommon.MutationResult<AnonSignUpMutation>;
export type AnonSignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonSignUpMutation, AnonSignUpMutationVariables>;
export const AnonUsernameAvailableDocument = gql`
    query anonUsernameAvailable($username: String!) {
  usernameAvailable(username: $username)
}
    `;

/**
 * __useAnonUsernameAvailableQuery__
 *
 * To run a query within a React component, call `useAnonUsernameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useAnonUsernameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAnonUsernameAvailableQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useAnonUsernameAvailableQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AnonUsernameAvailableQuery, AnonUsernameAvailableQueryVariables>) {
        return ApolloReactHooks.useQuery<AnonUsernameAvailableQuery, AnonUsernameAvailableQueryVariables>(AnonUsernameAvailableDocument, baseOptions);
      }
export function useAnonUsernameAvailableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AnonUsernameAvailableQuery, AnonUsernameAvailableQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AnonUsernameAvailableQuery, AnonUsernameAvailableQueryVariables>(AnonUsernameAvailableDocument, baseOptions);
        }
export type AnonUsernameAvailableQueryHookResult = ReturnType<typeof useAnonUsernameAvailableQuery>;
export type AnonUsernameAvailableLazyQueryHookResult = ReturnType<typeof useAnonUsernameAvailableLazyQuery>;
export type AnonUsernameAvailableQueryResult = ApolloReactCommon.QueryResult<AnonUsernameAvailableQuery, AnonUsernameAvailableQueryVariables>;


export interface AnonResetPasswordMutationOperation {
  operationName: 'anonResetPassword'
  result: AnonResetPasswordMutation
  variables: AnonResetPasswordMutationVariables
  type: 'mutation'
}
export const AnonResetPasswordMutationName:AnonResetPasswordMutationOperation['operationName'] = 'anonResetPassword'

export const AnonResetPasswordMutationRefetch = (
  variables:AnonResetPasswordMutationVariables, 
  context?:any
)=>({
  query:AnonResetPasswordDocument,
  variables,
  context
})
      


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
      


export interface AnonConfirmEmailMutationOperation {
  operationName: 'anonConfirmEmail'
  result: AnonConfirmEmailMutation
  variables: AnonConfirmEmailMutationVariables
  type: 'mutation'
}
export const AnonConfirmEmailMutationName:AnonConfirmEmailMutationOperation['operationName'] = 'anonConfirmEmail'

export const AnonConfirmEmailMutationRefetch = (
  variables:AnonConfirmEmailMutationVariables, 
  context?:any
)=>({
  query:AnonConfirmEmailDocument,
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
      


export interface AnonUsernameAvailableQueryOperation {
  operationName: 'anonUsernameAvailable'
  result: AnonUsernameAvailableQuery
  variables: AnonUsernameAvailableQueryVariables
  type: 'query'
}
export const AnonUsernameAvailableQueryName:AnonUsernameAvailableQueryOperation['operationName'] = 'anonUsernameAvailable'

export const AnonUsernameAvailableQueryRefetch = (
  variables:AnonUsernameAvailableQueryVariables, 
  context?:any
)=>({
  query:AnonUsernameAvailableDocument,
  variables,
  context
})
      
