import * as React from 'react';
import { FormikHook } from 'ui/@types/types';
import { Header } from 'ui/modules/Header';
import { WrapperPanel } from 'ui/elements/Panel';
import { LoadMore } from 'ui/modules/Loadmore';
import {
  Wrapper,
  WrapperCont,
  MainContainer,
  HomeBox,
  ObjectsList,
  CollectionsWrapper
} from 'ui/elements/Layout';

export interface Props {
  CollectionsBoxes: JSX.Element;
  LoadMoreFormik: FormikHook;
}

export const AllCollections: React.FC<Props> = ({
  CollectionsBoxes,
  LoadMoreFormik
}) => {
  return (
    <MainContainer>
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Header name="All Collections" />
            <ObjectsList>
              <CollectionsWrapper>{CollectionsBoxes}</CollectionsWrapper>
            </ObjectsList>
            {LoadMoreFormik && <LoadMore LoadMoreFormik={LoadMoreFormik} />}
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <WrapperPanel />
    </MainContainer>
  );
};
