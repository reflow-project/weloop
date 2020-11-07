import React from 'react';
import { MapProps } from 'ui/elements/Map';

export const getMapProps = (): MapProps => ({
  center: { lat: 41.396, lng: 2.192 },
  markers: [
    {
      position: { lat: 41.396, lng: 2.192 },
      popup: (
        <>
          <a href="https://fablabbcn.org/" target="_blank" rel="noreferrer noopener">
            Fab Lab BCN
          </a>
        </>
      )
    },
    {
      position: { lat: 41.395847, lng: 2.192779 },
      popup: 'Marker text as string'
    }
  ],
  zoom: 13
});
