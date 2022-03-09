import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateSpatialThingMutationVariables = {
  lat?: Types.Maybe<Types.Scalars['Float']>,
  long?: Types.Maybe<Types.Scalars['Float']>,
  name: Types.Scalars['String'],
  note?: Types.Maybe<Types.Scalars['String']>
};


export type CreateSpatialThingMutation = (
  { __typename: 'RootMutationType' }
  & { createSpatialThing: Types.Maybe<(
    { __typename: 'SpatialThingResponse' }
    & { spatialThing: Types.Maybe<(
      { __typename: 'SpatialThing' }
      & Pick<Types.SpatialThing, 'id' | 'lat' | 'long' | 'name' | 'note'>
    )> }
  )> }
);


export const CreateSpatialThingDocument = gql`
    mutation createSpatialThing($lat: Float, $long: Float, $name: String!, $note: String) {
  createSpatialThing(spatialThing: {lat: $lat, long: $long, name: $name, note: $note}) {
    spatialThing {
      id
      lat
      long
      name
      note
    }
  }
}
    `;
export type CreateSpatialThingMutationFn = ApolloReactCommon.MutationFunction<CreateSpatialThingMutation, CreateSpatialThingMutationVariables>;

/**
 * __useCreateSpatialThingMutation__
 *
 * To run a mutation, you first call `useCreateSpatialThingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSpatialThingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSpatialThingMutation, { data, loading, error }] = useCreateSpatialThingMutation({
 *   variables: {
 *      lat: // value for 'lat'
 *      long: // value for 'long'
 *      name: // value for 'name'
 *      note: // value for 'note'
 *   },
 * });
 */
export function useCreateSpatialThingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSpatialThingMutation, CreateSpatialThingMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSpatialThingMutation, CreateSpatialThingMutationVariables>(CreateSpatialThingDocument, baseOptions);
      }
export type CreateSpatialThingMutationHookResult = ReturnType<typeof useCreateSpatialThingMutation>;
export type CreateSpatialThingMutationResult = ApolloReactCommon.MutationResult<CreateSpatialThingMutation>;
export type CreateSpatialThingMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSpatialThingMutation, CreateSpatialThingMutationVariables>;


export interface CreateSpatialThingMutationOperation {
  operationName: 'createSpatialThing'
  result: CreateSpatialThingMutation
  variables: CreateSpatialThingMutationVariables
  type: 'mutation'
}
export const CreateSpatialThingMutationName:CreateSpatialThingMutationOperation['operationName'] = 'createSpatialThing'

export const CreateSpatialThingMutationRefetch = (
  variables:CreateSpatialThingMutationVariables, 
  context?:any
)=>({
  query:CreateSpatialThingDocument,
  variables,
  context
})
      
