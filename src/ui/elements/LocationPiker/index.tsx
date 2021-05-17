import * as React from 'react';
import GooglePlacesAutocomplete, { geocodeByAddress } from 'react-google-places-autocomplete';
import styled from '../../themes/styled';

export const LocationPiker = () => {
  const [data] = React.useState<any>({});
  const [autocomplete, setAutocomplete] = React.useState<any>('');
  const autocompleteSelect = (address: any) => {
    geocodeByAddress(address.description).then((results: any) => {
      if (!results[0]) return;

      const names = ['', ''];
      const fullName = [];
      results[0].address_components.forEach((item: any) => {
        if (item.types.indexOf('administrative_area_level_1') > -1) names[0] = item.short_name;
        if (item.types.indexOf('country') > -1) names[1] = item.short_name;
        // if (item.types.indexOf('locality') > -1) names[1] = item.short_name
      });
      if (names[0]) fullName.push(names[0]);
      if (names[1]) fullName.push(names[1]);

      setAutocomplete({
        // @ts-ignore
        autocomplete: fullName.join(', ') || null,
        data: {
          ...data,
          location: fullName.join(', ') || null
        }
      });
    });
  };

  return (
    <WrapperSelect>
      <GooglePlacesAutocomplete
        //@ts-ignore
        placeholder="Please add your city and country location"
        inputClassName="reflow__input"
        suggestionsClassNames="reflow__suggestions"
        initialValue={autocomplete}
        onSelect={autocompleteSelect}
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
  
   .reflow__input {
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
