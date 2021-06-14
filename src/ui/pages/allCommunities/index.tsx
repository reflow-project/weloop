import { Trans } from '@lingui/macro';
import { useReducer } from 'react';
import * as React from 'react';
import { Plus } from 'react-feather';
import { Text } from 'rebass/styled-components';
import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import { FormikHook } from 'ui/@types/types';
import { Wrapper, WrapperCont, MainContainer, HomeBox, ObjectsList } from 'ui/elements/Layout';
import { SidePanelHOC } from 'HOC/modules/SidePanel/SidePanel';
import { useNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { CreateIntentPanelHOC } from '../../../HOC/modules/CreateIntentPanel/createIntentPanelHOC';
import { CreateResourcePanelHOC } from '../../../HOC/modules/CreateResourcePanel/CreateResourcePanelHOC';
import Modal from '../../modules/Modal';
import { ButtonWrapper, CreateItemButton } from '../community';

export interface Props {
  CommunitiesBoxes: React.ReactElement;
  LoadMoreFormik: FormikHook;
}
export const AllCommunities: React.FC<Props> = ({ CommunitiesBoxes, LoadMoreFormik }) => {
  const notifiedMustLogin = useNotifyMustLogin();
  const [showCreateResource, toggleShowCreateResource] = useReducer(
    is => !notifiedMustLogin() && !is,
    false
  );

  const [openIntent, setOpenIntent] = useReducer(is => !notifiedMustLogin() && !is, false);

  const CreateResourceModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      <CreateResourcePanelHOC done={toggleShowCreateResource} />
    </Modal>
  ) : null;

  const OpenIntentModal = openIntent ? (
    <Modal
      closeModal={() => {
        setOpenIntent();
      }}
    >
      <CreateIntentPanelHOC done={setOpenIntent} />
    </Modal>
  ) : null;

  return (
    <MainContainer>
      {CreateResourceModal}
      {OpenIntentModal}
      <HomeBox>
        <WrapperCont>
          <Wrapper>
            <Header name="All Communities" />
            <ButtonWrapper>
              <CreateItemButton variant="primary" onClick={setOpenIntent}>
                <Plus size={16} color={'#fff'} />
                <Text variant="button">
                  <Trans>Create a new intent</Trans>
                </Text>
              </CreateItemButton>
              <CreateItemButton variant="primary" onClick={() => toggleShowCreateResource()}>
                <Plus size={16} color={'#fff'} />
                <Text variant="button">
                  <Trans>Create a new resource</Trans>
                </Text>
              </CreateItemButton>
            </ButtonWrapper>
            <ObjectsList>{CommunitiesBoxes}</ObjectsList>
            <LoadMore LoadMoreFormik={LoadMoreFormik} />
          </Wrapper>
        </WrapperCont>
      </HomeBox>
      <SidePanelHOC />
    </MainContainer>
  );
};
