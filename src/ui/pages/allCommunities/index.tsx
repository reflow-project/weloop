import * as React from 'react';
import { Header } from 'ui/modules/Header';
import { WrapperPanel } from 'ui/elements/Panel';
import { LoadMore } from 'ui/modules/Loadmore';
import { FormikHook } from 'ui/@types/types';
import { Wrapper, WrapperCont, MainContainer, HomeBox, ObjectsList } from 'ui/elements/Layout';

export interface Props {
  CommunitiesBoxes: React.ReactElement;
  LoadMoreFormik: FormikHook;
}

export const AllCommunities: React.FC<Props> = ({ CommunitiesBoxes, LoadMoreFormik }) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Header name="All Communities" />
            <ObjectsList>{CommunitiesBoxes}</ObjectsList>
            <LoadMore LoadMoreFormik={LoadMoreFormik} />
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel />
    </MainContainer>
  );
};
