import * as ApolloReactHooks from '@apollo/react-hooks'
import gql from 'graphql-tag';
import * as Types from '../../../graphql/types.generated'

export type InventoryPageQueryVariables = {
  agent: Types.Maybe<Types.Scalars['ID']>
};

export const inventoryListQuery = gql`
 query ($agent: ID) {
  economicResourcesFiltered(agent: $agent) {
    id
    name
    note
  }
}
`;

export function useInventoryListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<any, InventoryPageQueryVariables>) {
  return ApolloReactHooks.useQuery<any, InventoryPageQueryVariables>(inventoryListQuery, baseOptions);
}