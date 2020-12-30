import React, { FC } from 'react';
import { Map as LeafletMap, Marker, Popup, TileLayer } from 'react-leaflet';
import './leaflet.css';
import styled from 'styled-components';
import { theme } from 'ui/themes/default.theme';
import { divIcon, LatLngBounds, LatLngLiteral } from 'leaflet';
import { MapPin } from 'react-feather';
import ReactDOMServer from 'react-dom/server';

export interface MarkerProps {
  position: LatLngLiteral;
  popup?: React.ReactNode;
}

export interface MapProps {
  tileUrl?: string;
  tileAttribution?: string;
  center?: LatLngLiteral;
  markers?: Array<MarkerProps>;
  zoom: number;
}

const defaultAttribution =
  '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const defaultTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const mapPin = ReactDOMServer.renderToString(
  <MapPin size="30" color={theme.colors.primary} fill={theme.colors.secondary} />
);
const markerIcon = divIcon({ className: 'maker--pin', html: mapPin, iconSize: [30, 30] });

export const Map: FC<MapProps> = ({
  center,
  zoom = 20,
  markers = [],
  tileAttribution = defaultAttribution
}) => {
  const bounds = new LatLngBounds(markers.map(({ position }) => [position.lat, position.lng]));

  return (
    <Wrapper>
      <LeafletMap
        center={center ?? bounds.getCenter()}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url={defaultTileUrl} attribution={tileAttribution} />
        {markers.map(({ position, popup }) => (
          <Marker icon={markerIcon} position={position}>
            {popup && <Popup>{popup}</Popup>}
          </Marker>
        ))}
      </LeafletMap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export default Map;
