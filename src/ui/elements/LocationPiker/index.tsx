import { Dispatch, FC } from 'react';
import * as React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';
import styled from '../../themes/styled';

type LocationPikerProps = {
  formik: any;
  onSelect: Dispatch<any>;
};

interface LatLng {
  lat: number;
  lng: number;
}

interface AutocompletionRequest {
  bounds?: [LatLng, LatLng];
  componentRestrictions?: { country: string | string[] };
  location?: LatLng;
  offset?: number;
  radius?: number;
  types?: string[];
}

export const LocationPiker: FC<LocationPikerProps> = ({ formik, onSelect }) => {
  const autocompleteSelect = (address: any) => {
    geocodeByAddress(address.label).then((results: any) => {
      if (!results[0]) return;
      onSelect(true);
      formik.handleChange({ target: { name: 'name', value: results[0].formatted_address } });
      formik.handleChange({ target: { name: 'lat', value: results[0].geometry.location.lng() } });
      formik.handleChange({ target: { name: 'long', value: results[0].geometry.location.lat() } });
    });
  };

  return (
    <WrapperSelect>
      <GooglePlacesAutocomplete
        selectProps={{
          placeholder: 'Please add your city and country location',
          onChange: autocompleteSelect,
          classNamePrefix: 'zenpub'
        }}
        onLoadFailed={error => console.error('Could not inject Google script', error)}
        apiKey="AIzaSyBlbsdiikbCINjPLwD7NNwtsA8-vTcrr0g"
      />
    </WrapperSelect>
  );
};

const WrapperSelect = styled('div')`
  margin-bottom: 10px;
  position: relative;
  z-index: 100;
  small {
    display: block;
    padding-top: 6px;
    font-size: 10px;
    color: #aaa;
  }
 [class*="css-2b097c-container"] > div > div,
 [class*="css-2b097c-container"] > div {
    display: flex;
    height: 36px;
    margin: 0;
    font-family: 'Arial', sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
 
  .css-2b097c-container > div {
    border-color: #05244f !important;
    box-shadow: none;

    small {
      display: none;
    }
  }
  
  .zenpub__menu > div {
    display: block !important;
    background: #fff;
    min-height: 120px;
    min-width: 100%;
    padding: 20px;
    z-index: 200;
    box-shadow: 0px 2px 4px 0px #0000001f;
  }
  .zenpub__menuList > * ,
  .zenpub__menuList > * > * {
     display: block;
  }
  .zenpub__input {
    width: 100%;
    height: 36px;
    margin: 0;
  }
  .select__control {
    border: 1px solid #05244f;
    border-radius: 4px;
    height: 40px;
  }
  cursor: 'pointer';
  }
`;
