import { FC } from 'react';
import * as React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';
import { FormikHook } from '../../@types/types';
import { CreateIntentFormValues } from '../../modules/CreateIntentPanel';
import styled from '../../themes/styled';

type LocationPikerProps = {
  formik: FormikHook<CreateIntentFormValues>;
};

export const LocationPiker: FC<LocationPikerProps> = ({ formik }) => {
  const autocompleteSelect = (address: any) => {
    geocodeByAddress(address.label).then((results: any) => {
      if (!results[0]) return;
      formik.handleChange({ target: { name: 'atLocation', value: results[0].place_id } } as any);
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
        apiKey="AIzaSyBlbsdiikbCINjPLwD7NNwtsA8-vTcrr0g"
        autocompletionRequest={{
          bounds: [
            {
              lat: 99,
              lng: 99
            },
            {
              lat: 100,
              lng: 100
            }
          ]
        }}
      />
    </WrapperSelect>
  );
};

const WrapperSelect = styled('div')`
  margin-bottom: 10px;
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
  
  .zenpub__menuList {
    background: #fff;
    max-height: 200px;
    padding: 20;
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
