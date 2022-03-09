import { useMemo } from 'react';
import { SpatialThingsPagesQueryRefetch } from '../../../HOC/modules/EconomicEventManager/EconomicEventManager.generated';
import { useCreateSpatialThingMutation } from './useAddLocation.generated';
import { useCallOrNotifyMustLogin } from 'HOC/lib/notifyMustLogin';

export interface AddLocation {
  name: string;
  lat?: number;
  long?: number;
  note?: string;
}
export const useAddLocation = () => {
  const [createSpatialThing, createSpatialThingStatus] = useCreateSpatialThingMutation();

  const createLocation: any = useCallOrNotifyMustLogin(
    async ({ name, lat, long, note }: AddLocation) => {
      if (createSpatialThingStatus.loading) {
        return;
      }

      return createSpatialThing({
        variables: {
          lat,
          long,
          name,
          note
        },
        refetchQueries: [SpatialThingsPagesQueryRefetch({})]
      });
    },
    [createSpatialThing, createSpatialThingStatus]
  );
  return useMemo(() => {
    return {
      createLocation
    };
  }, [createLocation]);
};
