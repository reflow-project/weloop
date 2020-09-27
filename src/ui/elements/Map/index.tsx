import React, { FC } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import './leaflet.css';
import styled from 'styled-components';

export interface PositionProps {
  lat: number;
  lng: number;
}

export interface MarkerProps {
  position: PositionProps;
  popup?: React.ReactNode;
}

export interface MapProps {
  tileUrl?: string;
  tileAttribution?: string;
  center: PositionProps;
  markers?: Array<MarkerProps>;
  zoom: number;
}

const defaultAttribution =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const defaultTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

export const Map: FC<MapProps> = ({
  center,
  zoom = 13,
  markers = [],
  tileAttribution = defaultAttribution
}) => {
  return (
    <Wrapper>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer url={defaultTileUrl} attribution={tileAttribution} />
        {markers.map(({ position, popup }) => (
          <Marker position={position}>{popup && <Popup>{popup}</Popup>}</Marker>
        ))}
      </LeafletMap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export default Map;
