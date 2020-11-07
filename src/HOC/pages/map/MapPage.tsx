import React from 'react';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import { getMapProps } from 'ui/mock/map';
import Maps from 'ui/pages/maps';

//TODO: call hook from /fe/.../
// Map centers around a community location
// i.e. for reflow amsterdam will display a map of intents with amsterdam city as the center

export const MapPageHOC = () => {
  usePageTitle(t`Map`);
  return <Maps {...getMapProps()} />;
};
