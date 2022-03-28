import * as Types from '../../../../../graphql/types.generated';

import { FullPageInfoFragment } from '../../../../../@fragments/misc.generated';
import gql from 'graphql-tag';
import { FullPageInfoFragmentDoc } from '../../../../../@fragments/misc.generated';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type AddEmailDomainToAllowListMutationVariables = {
  domain: Types.Scalars['String']
};


export type AddEmailDomainToAllowListMutation = (
  { __typename: 'RootMutationType' }
  & { createRegisterEmailDomainAccess: (
    { __typename: 'RegisterEmailDomainAccess' }
    & Pick<Types.RegisterEmailDomainAccess, 'domain' | 'id'>
  ) }
);

export type RemoveEmailDomainFromAllowListMutationVariables = {
  id: Types.Scalars['String']
};


export type RemoveEmailDomainFromAllowListMutation = (
  { __typename: 'RootMutationType' }
  & { deleteRegisterEmailDomainAccess: Types.Maybe<(
    { __typename: 'RegisterEmailDomainAccess' }
    & Pick<Types.RegisterEmailDomainAccess, 'id'>
  )> }
);

export type AddEmailToAllowListMutationVariables = {
  email: Types.Scalars['String']
};


export type AddEmailToAllowListMutation = (
  { __typename: 'RootMutationType' }
  & { createRegisterEmailAccess: (
    { __typename: 'RegisterEmailAccess' }
    & Pick<Types.RegisterEmailAccess, 'email' | 'id'>
  ) }
);

export type RemoveEmailFromAllowListMutationVariables = {
  id: Types.Scalars['String']
};


export type RemoveEmailFromAllowListMutation = (
  { __typename: 'RootMutationType' }
  & { deleteRegisterEmailAccess: Types.Maybe<(
    { __typename: 'RegisterEmailAccess' }
    & Pick<Types.RegisterEmailAccess, 'id'>
  )> }
);

export type SendInviteEmailMutationVariables = {
  email: Types.Scalars['String']
};


export type SendInviteEmailMutation = (
  { __typename: 'RootMutationType' }
  & Pick<Types.RootMutationType, 'sendInvite'>
);

export type InstanceRegisterEmailAccessesQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type InstanceRegisterEmailAccessesQuery = (
  { __typename: 'RootQueryType' }
  & { registerEmailAccesses: (
    { __typename: 'RegisterEmailAccessesPage' }
    & Pick<Types.RegisterEmailAccessesPage, 'totalCount'>
    & { pageInfo: (
      { __typename: 'PageInfo' }
      & FullPageInfoFragment
    ), edges: Array<(
      { __typename: 'RegisterEmailAccess' }
      & Pick<Types.RegisterEmailAccess, 'id' | 'email'>
    )> }
  ) }
);

export type InstanceRegisterEmailDomainAccessesQueryVariables = {
  limit?: Types.Maybe<Types.Scalars['Int']>,
  before?: Types.Maybe<Array<Types.Scalars['Cursor']>>,
  after?: Types.Maybe<Array<Types.Scalars['Cursor']>>
};


export type InstanceRegisterEmailDomainAccessesQuery = (
  { __typename: 'RootQueryType' }
  & { registerEmailDomainAccesses: (
    { __typename: 'RegisterEmailDomainAccessesPage' }
    & Pick<Types.RegisterEmailDomainAccessesPage, 'totalCount'>
    & { pageInfo: (
      { __typename: 'PageInfo' }
      & FullPageInfoFragment
    ), edges: Array<(
      { __typename: 'RegisterEmailDomainAccess' }
      & Pick<Types.RegisterEmailDomainAccess, 'id' | 'domain'>
    )> }
  ) }
);


export const AddEmailDomainToAllowListDocument = gql`
    mutation addEmailDomainToAllowList($domain: String!) {
  createRegisterEmailDomainAccess(domain: $domain) {
    domain
    id
  }
}
    `;
export type AddEmailDomainToAllowListMutationFn = ApolloReactCommon.MutationFunction<AddEmailDomainToAllowListMutation, AddEmailDomainToAllowListMutationVariables>;

/**
 * __useAddEmailDomainToAllowListMutation__
 *
 * To run a mutation, you first call `useAddEmailDomainToAllowListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmailDomainToAllowListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmailDomainToAllowListMutation, { data, loading, error }] = useAddEmailDomainToAllowListMutation({
 *   variables: {
 *      domain: // value for 'domain'
 *   },
 * });
 */
export function useAddEmailDomainToAllowListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddEmailDomainToAllowListMutation, AddEmailDomainToAllowListMutationVariables>) {
        return ApolloReactHooks.useMutation<AddEmailDomainToAllowListMutation, AddEmailDomainToAllowListMutationVariables>(AddEmailDomainToAllowListDocument, baseOptions);
      }
export type AddEmailDomainToAllowListMutationHookResult = ReturnType<typeof useAddEmailDomainToAllowListMutation>;
export type AddEmailDomainToAllowListMutationResult = ApolloReactCommon.MutationResult<AddEmailDomainToAllowListMutation>;
export type AddEmailDomainToAllowListMutationOptions = ApolloReactCommon.BaseMutationOptions<AddEmailDomainToAllowListMutation, AddEmailDomainToAllowListMutationVariables>;
export const RemoveEmailDomainFromAllowListDocument = gql`
    mutation removeEmailDomainFromAllowList($id: String!) {
  deleteRegisterEmailDomainAccess(id: $id) {
    id
  }
}
    `;
export type RemoveEmailDomainFromAllowListMutationFn = ApolloReactCommon.MutationFunction<RemoveEmailDomainFromAllowListMutation, RemoveEmailDomainFromAllowListMutationVariables>;

/**
 * __useRemoveEmailDomainFromAllowListMutation__
 *
 * To run a mutation, you first call `useRemoveEmailDomainFromAllowListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEmailDomainFromAllowListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEmailDomainFromAllowListMutation, { data, loading, error }] = useRemoveEmailDomainFromAllowListMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEmailDomainFromAllowListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveEmailDomainFromAllowListMutation, RemoveEmailDomainFromAllowListMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveEmailDomainFromAllowListMutation, RemoveEmailDomainFromAllowListMutationVariables>(RemoveEmailDomainFromAllowListDocument, baseOptions);
      }
export type RemoveEmailDomainFromAllowListMutationHookResult = ReturnType<typeof useRemoveEmailDomainFromAllowListMutation>;
export type RemoveEmailDomainFromAllowListMutationResult = ApolloReactCommon.MutationResult<RemoveEmailDomainFromAllowListMutation>;
export type RemoveEmailDomainFromAllowListMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveEmailDomainFromAllowListMutation, RemoveEmailDomainFromAllowListMutationVariables>;
export const AddEmailToAllowListDocument = gql`
    mutation addEmailToAllowList($email: String!) {
  createRegisterEmailAccess(email: $email) {
    email
    id
  }
}
    `;
export type AddEmailToAllowListMutationFn = ApolloReactCommon.MutationFunction<AddEmailToAllowListMutation, AddEmailToAllowListMutationVariables>;

/**
 * __useAddEmailToAllowListMutation__
 *
 * To run a mutation, you first call `useAddEmailToAllowListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddEmailToAllowListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addEmailToAllowListMutation, { data, loading, error }] = useAddEmailToAllowListMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useAddEmailToAllowListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddEmailToAllowListMutation, AddEmailToAllowListMutationVariables>) {
        return ApolloReactHooks.useMutation<AddEmailToAllowListMutation, AddEmailToAllowListMutationVariables>(AddEmailToAllowListDocument, baseOptions);
      }
export type AddEmailToAllowListMutationHookResult = ReturnType<typeof useAddEmailToAllowListMutation>;
export type AddEmailToAllowListMutationResult = ApolloReactCommon.MutationResult<AddEmailToAllowListMutation>;
export type AddEmailToAllowListMutationOptions = ApolloReactCommon.BaseMutationOptions<AddEmailToAllowListMutation, AddEmailToAllowListMutationVariables>;
export const RemoveEmailFromAllowListDocument = gql`
    mutation removeEmailFromAllowList($id: String!) {
  deleteRegisterEmailAccess(id: $id) {
    id
  }
}
    `;
export type RemoveEmailFromAllowListMutationFn = ApolloReactCommon.MutationFunction<RemoveEmailFromAllowListMutation, RemoveEmailFromAllowListMutationVariables>;

/**
 * __useRemoveEmailFromAllowListMutation__
 *
 * To run a mutation, you first call `useRemoveEmailFromAllowListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveEmailFromAllowListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeEmailFromAllowListMutation, { data, loading, error }] = useRemoveEmailFromAllowListMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveEmailFromAllowListMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveEmailFromAllowListMutation, RemoveEmailFromAllowListMutationVariables>) {
        return ApolloReactHooks.useMutation<RemoveEmailFromAllowListMutation, RemoveEmailFromAllowListMutationVariables>(RemoveEmailFromAllowListDocument, baseOptions);
      }
export type RemoveEmailFromAllowListMutationHookResult = ReturnType<typeof useRemoveEmailFromAllowListMutation>;
export type RemoveEmailFromAllowListMutationResult = ApolloReactCommon.MutationResult<RemoveEmailFromAllowListMutation>;
export type RemoveEmailFromAllowListMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveEmailFromAllowListMutation, RemoveEmailFromAllowListMutationVariables>;
export const SendInviteEmailDocument = gql`
    mutation sendInviteEmail($email: String!) {
  sendInvite(email: $email)
}
    `;
export type SendInviteEmailMutationFn = ApolloReactCommon.MutationFunction<SendInviteEmailMutation, SendInviteEmailMutationVariables>;

/**
 * __useSendInviteEmailMutation__
 *
 * To run a mutation, you first call `useSendInviteEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInviteEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInviteEmailMutation, { data, loading, error }] = useSendInviteEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendInviteEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendInviteEmailMutation, SendInviteEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<SendInviteEmailMutation, SendInviteEmailMutationVariables>(SendInviteEmailDocument, baseOptions);
      }
export type SendInviteEmailMutationHookResult = ReturnType<typeof useSendInviteEmailMutation>;
export type SendInviteEmailMutationResult = ApolloReactCommon.MutationResult<SendInviteEmailMutation>;
export type SendInviteEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<SendInviteEmailMutation, SendInviteEmailMutationVariables>;
export const InstanceRegisterEmailAccessesDocument = gql`
    query instanceRegisterEmailAccesses($limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  registerEmailAccesses(limit: $limit, before: $before, after: $after) @connection(key: "instanceRegisterEmailAccesses") {
    totalCount
    pageInfo {
      ...FullPageInfo
    }
    edges {
      id
      email
    }
  }
}
    ${FullPageInfoFragmentDoc}`;

/**
 * __useInstanceRegisterEmailAccessesQuery__
 *
 * To run a query within a React component, call `useInstanceRegisterEmailAccessesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceRegisterEmailAccessesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceRegisterEmailAccessesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInstanceRegisterEmailAccessesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceRegisterEmailAccessesQuery, InstanceRegisterEmailAccessesQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceRegisterEmailAccessesQuery, InstanceRegisterEmailAccessesQueryVariables>(InstanceRegisterEmailAccessesDocument, baseOptions);
      }
export function useInstanceRegisterEmailAccessesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceRegisterEmailAccessesQuery, InstanceRegisterEmailAccessesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceRegisterEmailAccessesQuery, InstanceRegisterEmailAccessesQueryVariables>(InstanceRegisterEmailAccessesDocument, baseOptions);
        }
export type InstanceRegisterEmailAccessesQueryHookResult = ReturnType<typeof useInstanceRegisterEmailAccessesQuery>;
export type InstanceRegisterEmailAccessesLazyQueryHookResult = ReturnType<typeof useInstanceRegisterEmailAccessesLazyQuery>;
export type InstanceRegisterEmailAccessesQueryResult = ApolloReactCommon.QueryResult<InstanceRegisterEmailAccessesQuery, InstanceRegisterEmailAccessesQueryVariables>;
export const InstanceRegisterEmailDomainAccessesDocument = gql`
    query instanceRegisterEmailDomainAccesses($limit: Int, $before: [Cursor!], $after: [Cursor!]) {
  registerEmailDomainAccesses(limit: $limit, before: $before, after: $after) @connection(key: "instanceRegisterEmailDomainAccesses") {
    totalCount
    pageInfo {
      ...FullPageInfo
    }
    edges {
      id
      domain
    }
  }
}
    ${FullPageInfoFragmentDoc}`;

/**
 * __useInstanceRegisterEmailDomainAccessesQuery__
 *
 * To run a query within a React component, call `useInstanceRegisterEmailDomainAccessesQuery` and pass it any options that fit your needs.
 * When your component renders, `useInstanceRegisterEmailDomainAccessesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInstanceRegisterEmailDomainAccessesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useInstanceRegisterEmailDomainAccessesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InstanceRegisterEmailDomainAccessesQuery, InstanceRegisterEmailDomainAccessesQueryVariables>) {
        return ApolloReactHooks.useQuery<InstanceRegisterEmailDomainAccessesQuery, InstanceRegisterEmailDomainAccessesQueryVariables>(InstanceRegisterEmailDomainAccessesDocument, baseOptions);
      }
export function useInstanceRegisterEmailDomainAccessesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InstanceRegisterEmailDomainAccessesQuery, InstanceRegisterEmailDomainAccessesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InstanceRegisterEmailDomainAccessesQuery, InstanceRegisterEmailDomainAccessesQueryVariables>(InstanceRegisterEmailDomainAccessesDocument, baseOptions);
        }
export type InstanceRegisterEmailDomainAccessesQueryHookResult = ReturnType<typeof useInstanceRegisterEmailDomainAccessesQuery>;
export type InstanceRegisterEmailDomainAccessesLazyQueryHookResult = ReturnType<typeof useInstanceRegisterEmailDomainAccessesLazyQuery>;
export type InstanceRegisterEmailDomainAccessesQueryResult = ApolloReactCommon.QueryResult<InstanceRegisterEmailDomainAccessesQuery, InstanceRegisterEmailDomainAccessesQueryVariables>;


export interface AddEmailDomainToAllowListMutationOperation {
  operationName: 'addEmailDomainToAllowList'
  result: AddEmailDomainToAllowListMutation
  variables: AddEmailDomainToAllowListMutationVariables
  type: 'mutation'
}
export const AddEmailDomainToAllowListMutationName:AddEmailDomainToAllowListMutationOperation['operationName'] = 'addEmailDomainToAllowList'

export const AddEmailDomainToAllowListMutationRefetch = (
  variables:AddEmailDomainToAllowListMutationVariables, 
  context?:any
)=>({
  query:AddEmailDomainToAllowListDocument,
  variables,
  context
})
      


export interface RemoveEmailDomainFromAllowListMutationOperation {
  operationName: 'removeEmailDomainFromAllowList'
  result: RemoveEmailDomainFromAllowListMutation
  variables: RemoveEmailDomainFromAllowListMutationVariables
  type: 'mutation'
}
export const RemoveEmailDomainFromAllowListMutationName:RemoveEmailDomainFromAllowListMutationOperation['operationName'] = 'removeEmailDomainFromAllowList'

export const RemoveEmailDomainFromAllowListMutationRefetch = (
  variables:RemoveEmailDomainFromAllowListMutationVariables, 
  context?:any
)=>({
  query:RemoveEmailDomainFromAllowListDocument,
  variables,
  context
})
      


export interface AddEmailToAllowListMutationOperation {
  operationName: 'addEmailToAllowList'
  result: AddEmailToAllowListMutation
  variables: AddEmailToAllowListMutationVariables
  type: 'mutation'
}
export const AddEmailToAllowListMutationName:AddEmailToAllowListMutationOperation['operationName'] = 'addEmailToAllowList'

export const AddEmailToAllowListMutationRefetch = (
  variables:AddEmailToAllowListMutationVariables, 
  context?:any
)=>({
  query:AddEmailToAllowListDocument,
  variables,
  context
})
      


export interface RemoveEmailFromAllowListMutationOperation {
  operationName: 'removeEmailFromAllowList'
  result: RemoveEmailFromAllowListMutation
  variables: RemoveEmailFromAllowListMutationVariables
  type: 'mutation'
}
export const RemoveEmailFromAllowListMutationName:RemoveEmailFromAllowListMutationOperation['operationName'] = 'removeEmailFromAllowList'

export const RemoveEmailFromAllowListMutationRefetch = (
  variables:RemoveEmailFromAllowListMutationVariables, 
  context?:any
)=>({
  query:RemoveEmailFromAllowListDocument,
  variables,
  context
})
      


export interface SendInviteEmailMutationOperation {
  operationName: 'sendInviteEmail'
  result: SendInviteEmailMutation
  variables: SendInviteEmailMutationVariables
  type: 'mutation'
}
export const SendInviteEmailMutationName:SendInviteEmailMutationOperation['operationName'] = 'sendInviteEmail'

export const SendInviteEmailMutationRefetch = (
  variables:SendInviteEmailMutationVariables, 
  context?:any
)=>({
  query:SendInviteEmailDocument,
  variables,
  context
})
      


export interface InstanceRegisterEmailAccessesQueryOperation {
  operationName: 'instanceRegisterEmailAccesses'
  result: InstanceRegisterEmailAccessesQuery
  variables: InstanceRegisterEmailAccessesQueryVariables
  type: 'query'
}
export const InstanceRegisterEmailAccessesQueryName:InstanceRegisterEmailAccessesQueryOperation['operationName'] = 'instanceRegisterEmailAccesses'

export const InstanceRegisterEmailAccessesQueryRefetch = (
  variables:InstanceRegisterEmailAccessesQueryVariables, 
  context?:any
)=>({
  query:InstanceRegisterEmailAccessesDocument,
  variables,
  context
})
      


export interface InstanceRegisterEmailDomainAccessesQueryOperation {
  operationName: 'instanceRegisterEmailDomainAccesses'
  result: InstanceRegisterEmailDomainAccessesQuery
  variables: InstanceRegisterEmailDomainAccessesQueryVariables
  type: 'query'
}
export const InstanceRegisterEmailDomainAccessesQueryName:InstanceRegisterEmailDomainAccessesQueryOperation['operationName'] = 'instanceRegisterEmailDomainAccesses'

export const InstanceRegisterEmailDomainAccessesQueryRefetch = (
  variables:InstanceRegisterEmailDomainAccessesQueryVariables, 
  context?:any
)=>({
  query:InstanceRegisterEmailDomainAccessesDocument,
  variables,
  context
})
      
