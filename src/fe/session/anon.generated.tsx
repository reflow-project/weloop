import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ResetPwdMutationVariables = {
  email: Types.Scalars['String'],
  url: Types.Scalars['String']
};


export type ResetPwdMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'requestResetPassword'>
);

export type ChangePasswordMutationVariables = {
  oldPassword: Types.Scalars['String'],
  password: Types.Scalars['String'],
  passwordConfirmation: Types.Scalars['String']
};


export type ChangePasswordMutation = (
  { __typename: 'RootMutationType' }
  & { changePassword: Types.Maybe<(
    { __typename: 'Me' }
    & Pick<Types.Me, 'accountId'>
  )> }
);

export type UpdateLostPasswordMutationVariables = {
  token: Types.Scalars['String'],
  password: Types.Scalars['String'],
  passwordConfirmation: Types.Scalars['String']
};


export type UpdateLostPasswordMutation = (
  { __typename: 'RootMutationType' }
  & { changePassword: Types.Maybe<(
    { __typename: 'Me' }
    & Pick<Types.Me, 'accountId'>
  )> }
);

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
  email: Types.Scalars['String'],
  url: Types.Scalars['String']
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
  password: Types.Scalars['String'],
  url: Types.Scalars['String']
};


export type AnonSignUpMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'signup'>
);


export const ResetPwdDocument = gql`
    mutation resetPwd($email: String!, $url: String!) {
  requestResetPassword(email: $email, url: $url)
}
    `;
export type ResetPwdMutationFn = ApolloReactCommon.MutationFunction<ResetPwdMutation, ResetPwdMutationVariables>;

/**
 * __useResetPwdMutation__
 *
 * To run a mutation, you first call `useResetPwdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPwdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPwdMutation, { data, loading, error }] = useResetPwdMutation({
 *   variables: {
 *      email: // value for 'email'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useResetPwdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPwdMutation, ResetPwdMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPwdMutation, ResetPwdMutationVariables>(ResetPwdDocument, baseOptions);
      }
export type ResetPwdMutationHookResult = ReturnType<typeof useResetPwdMutation>;
export type ResetPwdMutationResult = ApolloReactCommon.MutationResult<ResetPwdMutation>;
export type ResetPwdMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPwdMutation, ResetPwdMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation changePassword($oldPassword: String!, $password: String!, $passwordConfirmation: String!) {
  changePassword(oldPassword: $oldPassword, password: $password, passwordConfirmation: $passwordConfirmation) {
    accountId
  }
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const UpdateLostPasswordDocument = gql`
    mutation updateLostPassword($token: String!, $password: String!, $passwordConfirmation: String!) {
  changePassword(token: $token, password: $password, passwordConfirmation: $passwordConfirmation) {
    accountId
  }
}
    `;
export type UpdateLostPasswordMutationFn = ApolloReactCommon.MutationFunction<UpdateLostPasswordMutation, UpdateLostPasswordMutationVariables>;

/**
 * __useUpdateLostPasswordMutation__
 *
 * To run a mutation, you first call `useUpdateLostPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLostPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLostPasswordMutation, { data, loading, error }] = useUpdateLostPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *   },
 * });
 */
export function useUpdateLostPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateLostPasswordMutation, UpdateLostPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateLostPasswordMutation, UpdateLostPasswordMutationVariables>(UpdateLostPasswordDocument, baseOptions);
      }
export type UpdateLostPasswordMutationHookResult = ReturnType<typeof useUpdateLostPasswordMutation>;
export type UpdateLostPasswordMutationResult = ApolloReactCommon.MutationResult<UpdateLostPasswordMutation>;
export type UpdateLostPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateLostPasswordMutation, UpdateLostPasswordMutationVariables>;
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
    mutation requestConfirmEmail($email: String!, $url: String!) {
  requestConfirmEmail(email: $email, url: $url)
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
 *      url: // value for 'url'
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
    mutation anonSignUp($email: String!, $password: String!, $url: String!) {
  signup(email: $email, password: $password, url: $url)
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
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAnonSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AnonSignUpMutation, AnonSignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<AnonSignUpMutation, AnonSignUpMutationVariables>(AnonSignUpDocument, baseOptions);
      }
export type AnonSignUpMutationHookResult = ReturnType<typeof useAnonSignUpMutation>;
export type AnonSignUpMutationResult = ApolloReactCommon.MutationResult<AnonSignUpMutation>;
export type AnonSignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<AnonSignUpMutation, AnonSignUpMutationVariables>;


export interface ResetPwdMutationOperation {
  operationName: 'resetPwd'
  result: ResetPwdMutation
  variables: ResetPwdMutationVariables
  type: 'mutation'
}
export const ResetPwdMutationName:ResetPwdMutationOperation['operationName'] = 'resetPwd'

export const ResetPwdMutationRefetch = (
  variables:ResetPwdMutationVariables, 
  context?:any
)=>({
  query:ResetPwdDocument,
  variables,
  context
})
      


export interface ChangePasswordMutationOperation {
  operationName: 'changePassword'
  result: ChangePasswordMutation
  variables: ChangePasswordMutationVariables
  type: 'mutation'
}
export const ChangePasswordMutationName:ChangePasswordMutationOperation['operationName'] = 'changePassword'

export const ChangePasswordMutationRefetch = (
  variables:ChangePasswordMutationVariables, 
  context?:any
)=>({
  query:ChangePasswordDocument,
  variables,
  context
})
      


export interface UpdateLostPasswordMutationOperation {
  operationName: 'updateLostPassword'
  result: UpdateLostPasswordMutation
  variables: UpdateLostPasswordMutationVariables
  type: 'mutation'
}
export const UpdateLostPasswordMutationName:UpdateLostPasswordMutationOperation['operationName'] = 'updateLostPassword'

export const UpdateLostPasswordMutationRefetch = (
  variables:UpdateLostPasswordMutationVariables, 
  context?:any
)=>({
  query:UpdateLostPasswordDocument,
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
      
