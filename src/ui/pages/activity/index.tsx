import * as React from 'react';
import { HomeBox, MainContainer, Wrapper, WrapperCont } from 'ui/elements/Layout';

export interface Props {
  userId: string | null;
}

export const Activity: React.FC<Props> = ({ userId }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>hi {userId}</Wrapper>
        </WrapperCont>
      </HomeBox>
    </MainContainer>
  );
};

export default Activity;
