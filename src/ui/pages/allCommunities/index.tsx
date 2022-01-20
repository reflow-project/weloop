import { Trans } from '@lingui/macro';
import { useLayoutEffect, useReducer, useState } from 'react';
import * as React from 'react';
import { Plus } from 'react-feather';
import { Text } from 'rebass/styled-components';
import { Header } from 'ui/modules/Header';
import { LoadMore } from 'ui/modules/Loadmore';
import { FormikHook } from 'ui/@types/types';
import { Container } from 'ui/modules/Modal';
import { Wrapper, MainContainer, HomeBox, ObjectsList } from 'ui/elements/Layout';
import { useNotifyMustLogin } from '../../../HOC/lib/notifyMustLogin';
import { CreateIntentPanelHOC } from '../../../HOC/modules/CreateIntentPanel/createIntentPanelHOC';
import { CreateLocationPanelHOC } from '../../../HOC/modules/CreateLocationPanel/CreateLocationPanelHOK';
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
  const [showCreateLocation, toggleShowCreateLocation] = React.useState(false);
  const [openIntent, setOpenIntent] = useReducer(is => !notifiedMustLogin() && !is, false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const CreateResourceModal = showCreateResource ? (
    <Modal closeModal={toggleShowCreateResource}>
      {showCreateLocation ? (
        <CreateLocationPanelHOC done={toggleShowCreateLocation} />
      ) : (
        <CreateResourcePanelHOC
          done={toggleShowCreateResource}
          toggleCreateLocation={toggleShowCreateLocation}
        />
      )}
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
        <Container>
          <Wrapper>
            <Header name="All Communities" />
            <ButtonWrapper>
              <CreateItemButton variant="primary" onClick={setOpenIntent}>
                <Plus size={16} color={'#fff'} />
                <Text variant="button">
                  <Trans>{windowWidth < 998 ? 'Add intent' : 'Create a new intent'}</Trans>
                </Text>
              </CreateItemButton>
              <CreateItemButton variant="primary" onClick={() => toggleShowCreateResource()}>
                <Plus size={16} color={'#fff'} />
                <Text variant="button">
                  <Trans>{windowWidth < 998 ? 'Add resource' : 'Create a new resource'}</Trans>
                </Text>
              </CreateItemButton>
            </ButtonWrapper>
            <ObjectsList>{CommunitiesBoxes}</ObjectsList>
            <LoadMore LoadMoreFormik={LoadMoreFormik} />
          </Wrapper>
        </Container>
      </HomeBox>
    </MainContainer>
  );
};
