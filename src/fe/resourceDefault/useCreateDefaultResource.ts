import { useMemo, useState, useEffect } from 'react';
import { Slide, toast } from 'react-toastify';

import { useCallOrNotifyMustLogin } from '../../HOC/lib/notifyMustLogin';
import { EconomicEventsFilteredQueryRefetch } from '../../HOC/modules/EconomicEventManager/EconomicEventManager.generated';
import { useEconomicEventsFilteredQuery } from '../../HOC/modules/EconomicEventManager/EconomicEventManager.generated';
import { useMe } from '../session/useMe';
import { useCreateDefaultEconomicEventMutation } from './useCreateResource.generated';

// https://github.com/reflow-project/weloop/issues/87
// solution:
// 1) get providers list and check - is User in this list?
// 2) if user is  - he is sign in
// 3) else he is sign in and create default resource

export interface TCreateDefaultResource {
  note: string;
  name: string;
  action: string;
}

export const useCreateDefaultResource = () => {
  const [createResourceMut, createResourceMutStatus] = useCreateDefaultEconomicEventMutation();
  const { me } = useMe();

  const { data } = useEconomicEventsFilteredQuery({
    variables: { action: 'transfer' }
  });
  const providers = data?.economicEventsFiltered?.map(el => el.provider);
  const [isAgent, setIsAgent] = useState(true);

  useEffect(() => {
    if (providers === undefined || me === undefined) return;

    setIsAgent(!!providers?.some(agent => agent.id === me?.user.id));
  }, [providers, me]);

  const create = useCallOrNotifyMustLogin(
    async ({ note, name, action }: TCreateDefaultResource) => {
      if (createResourceMutStatus.loading) {
        return;
      }

      return createResourceMut({
        variables: {
          note,
          name,
          action
        },
        refetchQueries: [EconomicEventsFilteredQueryRefetch({ action: 'transfer' })]
      })
        .then(() => {
          setIsAgent(true);
          toast.success(`You name added in providers list`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
        })
        .catch((error: any) => {
          toast.error(`You name does not add in providers list: ${error}`, {
            position: 'top-right',
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          });
        });
    },
    [createResourceMutStatus, createResourceMut]
  );
  const createDefaultResource = isAgent ? null : create;

  return useMemo(() => {
    return {
      createDefaultResource,
      isAgent
    };
  }, [createDefaultResource, isAgent]);
};
