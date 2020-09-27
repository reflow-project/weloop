import React, { FC } from 'react';
import { Map, MapProps } from 'ui/elements/Map';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';

export const Maps: FC<MapProps> = ({ center, zoom = 13, markers = [] }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Map center={center} zoom={zoom} markers={markers}></Map>
          </Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

export default Maps;
