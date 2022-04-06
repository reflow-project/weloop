import React from 'react';
import { TUpdatePasswordPanel } from 'HOC/modules/UpdatePasswordPanel/UpdatePasswordPanelHOK';
import Modal, { Actions, AlertWrapper, Container, Header } from '../Modal';
import { Heading } from 'rebass/styled-components';
import { Trans } from '@lingui/macro';
import { CollectionContainerForm, Hero, HeroInfo } from '../CreateCollectionPanel/style';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import { i18nMark } from '@lingui/react';
import Input, { CustomAlert } from '../../elements/Input';
import Button from '../../elements/Button';
import { ToastContainer } from 'react-toastify';

export const UpdatePasswordPanelUI: React.FC<TUpdatePasswordPanel> = ({
  formik,
  isOpen,
  cancel
}) => {
  return isOpen ? (
    <Modal closeModal={cancel}>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <Header>
            <Heading m={2}>
              <Trans>Update Password</Trans>
            </Heading>
          </Header>

          <Hero>
            <HeroInfo>
              <CollectionContainerForm>
                <FormGroup>
                  <FormLabel>{i18nMark('Old Password')}</FormLabel>
                  <Input
                    type="password"
                    id="oldPassword"
                    name="oldPassword"
                    disabled={formik.isSubmitting}
                    onChange={formik.handleChange}
                    hint={{ class: 'error', value: '' }}
                    placeholder={i18nMark('Input your old password')}
                    value={formik.values.oldPassword}
                  />
                </FormGroup>
                {formik.touched && formik.errors.oldPassword && (
                  <AlertWrapper>
                    <CustomAlert variant="negative">{formik.errors.oldPassword}</CustomAlert>
                  </AlertWrapper>
                )}
              </CollectionContainerForm>
              <CollectionContainerForm>
                <FormGroup>
                  <FormLabel>{i18nMark('New password')}</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    disabled={formik.isSubmitting}
                    onChange={formik.handleChange}
                    hint={{ class: 'error', value: '' }}
                    placeholder={i18nMark('Input your new password')}
                    value={formik.values.password}
                  />
                </FormGroup>
                {formik.errors.password && (
                  <AlertWrapper>
                    <CustomAlert variant="negative">{formik.errors.password}</CustomAlert>
                  </AlertWrapper>
                )}
              </CollectionContainerForm>
              <CollectionContainerForm>
                <FormGroup>
                  <FormLabel>{i18nMark('Confirm password')}</FormLabel>
                  <Input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    disabled={formik.isSubmitting}
                    onChange={formik.handleChange}
                    hint={{ class: 'error', value: '' }}
                    placeholder={i18nMark('Confirm your new password')}
                    value={formik.values.passwordConfirm}
                  />
                </FormGroup>
                {formik.errors.passwordConfirm && (
                  <AlertWrapper>
                    <CustomAlert variant="negative">{formik.errors.passwordConfirm}</CustomAlert>
                  </AlertWrapper>
                )}
              </CollectionContainerForm>
            </HeroInfo>
          </Hero>
          <Actions>
            <Button
              variant="primary"
              isSubmitting={formik.isSubmitting}
              isDisabled={formik.isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
            >
              <Trans>Save</Trans>
            </Button>
            <Button variant="outline" onClick={cancel}>
              <Trans>Cancel</Trans>
            </Button>
          </Actions>
        </form>
        <ToastContainer />
      </Container>
    </Modal>
  ) : null;
};
