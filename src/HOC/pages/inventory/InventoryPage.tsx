import React, { FC, useEffect, useReducer, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Modal from 'ui/modules/Modal';
import { Inventory } from 'ui/pages/inventory';
import { Filter } from 'ui/modules/Filter';
import { useNotifyMustLogin } from '../../lib/notifyMustLogin';
import { CreateLocationPanelHOC } from '../../modules/CreateLocationPanel/CreateLocationPanelHOK';
import { CreateResourcePanelHOC } from '../../modules/CreateResourcePanel/CreateResourcePanelHOC';
import { useEconomicResourcesFilteredQuery } from './InventoryPage.generated';
import { ASC } from 'util/constants/pagination';
import { notEmptyValue } from 'util/main';

const queryString = require('query-string');

export interface PrimaryAccountable {
  id: string;
  name: string;
  image: string;
  relationshipsAsObject?: any;
  intents: {
    id: string;
    name: string;
    note?: string;
    image?: string | null;
  }[];
  onhandQuantity?: {
    hasNumericalValue: string;
    hasUnit?: {
      label: string;
      symbol: string;
    };
  };
  accountingQuantity?: {
    hasNumericalValue: number;
    hasUnit?: {
      label: string;
      symbol: string;
    };
  };
}

export interface EconomicResource {
  id: string;
  name: string;
  note: string;
  eventNote?: string;
  hasPointInTime?: string;
  image?: string;
  primaryAccountable: PrimaryAccountable;
  currentLocation?: {
    id: string;
    name: string;
    lat: string;
    long: string;
  };
  unitOfEffort: any;
  containedIn: any;
  contains: any;
  lot: any;
  stage: any;
  trackingIdentifier?: string | null;
  onhandQuantity?: {
    id: string;
    hasNumericalValue: number;
    hasUnit: {
      id: string;
      label: string;
    };
  };
  trace?: {
    id: string;
    hasTimePoint?: string;
  };
  track?: {
    id: string;
    note: string;
    hasTimePoint?: string;
    resourceQuantity: {
      hasNumericalValue: number;
      hasUnit: {
        id: string;
        label: string;
      };
    };
    action?: {
      id: string;
      label: string;
    };
    provider: {
      id: string;
      name: string;
    };
    receiver: {
      id: string;
      name: string;
    };
  }[];
}

const INITIAL_FILTER = {
  sort: '',
  order: '',
  search: '',
  trace: false,
  track: false
};

export type FilterType = {
  sort?: string;
  order?: string;
  search?: string;
  trace?: boolean;
  track?: boolean;
};

export const InventoryPage: FC = () => {
  const location = useLocation();
  let history = useHistory();
  const currentUser = location.pathname.split('/')[2];
  const [showCreateLocation, toggleShowCreateLocation] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredInventory, setFilteredInventory] = useState<Array<any>>([]);
  const [filter, setFilter] = useState(INITIAL_FILTER);

  useEffect(() => {
    const query = location.search;
    const queryStringGetter = queryString.parse(query);

    query?.length && setIsOpen(true);
    setFilter(queryStringGetter);
    // eslint-disable-next-line
  }, []);

  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => !notifiedMustLogin() && !is,
    false
  );
  const CreateResourceModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      {showCreateLocation ? (
        <CreateLocationPanelHOC done={toggleShowCreateLocation} />
      ) : (
        <CreateResourcePanelHOC
          done={toggleShowCreateResource}
          toggleCreateLocation={toggleShowCreateLocation}
        />
      )}
    </Modal>
  ) : null;

  const { data } = useEconomicResourcesFilteredQuery({
    variables: { agent: currentUser ? [currentUser] : [] }
  });
  const inventory = data?.economicResourcesFiltered || [];

  useEffect(() => {
    if (inventory.length) {
      checkFilter(true);
    }
    // eslint-disable-next-line
  }, [inventory]);

  const triggerOpen = (value: boolean) => {
    setIsOpen(value);
  };

  useEffect(() => {
    checkFilter(filter.trace);
    // eslint-disable-next-line
  }, [filter.trace]);

  useEffect(() => {
    checkFilter(filter.track);
    // eslint-disable-next-line
  }, [filter.track]);

  useEffect(() => {
    filter.search && checkFilter(filter.search);
    // eslint-disable-next-line
  }, [filter.search]);

  useEffect(() => {
    let newInventory = [...filteredInventory];
    newInventory = newInventory.sort(function(a: any, b: any) {
      if (a[filter.sort] > b[filter.sort]) {
        return 1;
      }
      if (a[filter.sort] < b[filter.sort]) {
        return -1;
      }

      return 0;
    });

    if (filter.order !== ASC) {
      setFilteredInventory(newInventory);
    } else {
      setFilteredInventory(newInventory.reverse());
    }
    // eslint-disable-next-line
  }, [filter.order]);

  useEffect(() => {
    const queryStringSetter = queryString.stringify(notEmptyValue(filter));
    history.push({
      search: queryStringSetter
    });
    checkFilter(true);
    // eslint-disable-next-line
  }, [filter]);

  const handleFilterChange = (prop: FilterType, isClear?: boolean) => {
    if (isClear) {
      setFilter(INITIAL_FILTER);
      return;
    }
    setFilter(prev => ({
      ...prev,
      ...prop
    }));
  };

  const handleClear = () => {
    setFilter(INITIAL_FILTER);
    setFilteredInventory(inventory);
  };

  const checkFilter = (data: any) => {
    const query = location.search;

    if (query.length || data) {
      let newList = [...inventory];
      if (filter.trace) {
        newList = newList.filter((item: any) => item.trace.length);
      }
      if (filter.track) {
        newList = newList.filter((item: any) => item.track.length);
      }
      if (filter.search) {
        newList = newList.filter(item =>
          item?.name?.toLowerCase().includes(filter.search.toLowerCase())
        );
      }
      if (filter.order) {
        newList = newList.sort(function(a: any, b: any) {
          if (a[filter.sort] > b[filter.sort]) {
            return 1;
          }
          if (a[filter.sort] < b[filter.sort]) {
            return -1;
          }

          return 0;
        });
      }

      if (filter.order && filter.order !== ASC) {
        setFilteredInventory(newList);
      } else {
        setFilteredInventory(newList.reverse());
      }

      setFilteredInventory(newList);
    } else {
      setFilteredInventory(inventory);
    }
  };

  return (
    <>
      {CreateResourceModal}
      <Inventory inventory={filteredInventory} done={toggleShowCreateResource}>
        <Filter
          isOpen={isOpen}
          triggerOpen={triggerOpen}
          onChange={handleFilterChange}
          onClear={handleClear}
          filterSet={filter}
        />
      </Inventory>
    </>
  );
};
