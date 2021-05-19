import * as ApolloReactHooks from '@apollo/react-hooks'
import gql from 'graphql-tag';
import * as Types from '../../../graphql/types.generated'

export type InventoryItemVariables = {
  id: Types.Maybe<Types.Scalars['ID']>
};

export const inventoryItemQuery = gql`
 query ($id: ID) {
  economicResource(id: $id) {
    id
    name
    note
    image
  }
}
`;

export function useInventoryItemQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<any, InventoryItemVariables>) {
  return ApolloReactHooks.useQuery<any, InventoryItemVariables>(inventoryItemQuery, baseOptions);
}