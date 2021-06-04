import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Box, Heading } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { FormikHook } from 'ui/@types/types';
import { CustomSelect as Select } from '../../elements/CustomSelect';
import DropzoneArea from '../DropzoneModal';
import { FormGroup, FormLabel } from '../EconomicEventManager/styles';
import Input, { CustomAlert } from '../../elements/Input';
import { Actions, AlertWrapper, Container, CounterChars, Header } from 'ui/modules/Modal';
import { Hero, CollectionContainerForm, HeroInfo } from '../CreateCollectionPanel/style';
import * as Types from '../../../graphql/types.generated';

export type UpdateResourceVariables = {
  name: string;
  note?: string;
  atLocation?: { id: string; value: string; label: string };
  image: string | File | undefined | any;
};

export type TUpdateResourcePanel = {
  title: string;
  done: any;
  formik: FormikHook<UpdateResourceVariables>;
  spatialThings?:
    | Types.Maybe<
        { __typename: 'SpatialThing' } & Pick<Types.SpatialThing, 'name' | 'id' | 'lat' | 'long'>
      >[]
    | null;
};

export const UpdateResourcePanel: FC<TUpdateResourcePanel> = ({
  title,
  formik,
  done,
  spatialThings
}) => {
  const onIconFileSelected = React.useCallback(
    (file: File) => formik.setValues({ ...formik.values, image: file }),
    [formik]
  );

  const initialIconUrl = 'string' === typeof formik.values.image ? formik.values.image : '';
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Header>
          <Heading m={2}>
            <Trans>{title}</Trans>
          </Heading>
        </Header>

        <Hero>
          <HeroInfo>
            <CollectionContainerForm>
              <div className="d-flex">
                <Box sx={{ width: '140', height: '140' }} className="item_photo">
                  <DropzoneArea
                    initialUrl={initialIconUrl}
                    onFileSelect={onIconFileSelected}
                    filePattern="image/*"
                  />
                  <p />
                  <FormLabel>Image URL</FormLabel>
                  <Input
                    type="text"
                    id="image"
                    name="image"
                    onChange={formik.handleChange}
                    placeholder={i18nMark('Image')}
                    value={
                      typeof formik.values.image !== 'object'
                        ? formik.values.image
                        : formik.values.image.path
                    }
                  />
                </Box>

                <div className="item_info">
                  <Box>
                    <FormGroup>
                      <FormLabel>{i18nMark('Resource')}</FormLabel>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        disabled={formik.isSubmitting}
                        onChange={formik.handleChange}
                        placeholder={i18nMark('Name of your resource')}
                        value={formik.values.name}
                      />
                      <CounterChars>{60 - formik.values.name.length}</CounterChars>
                    </FormGroup>
                    {formik.errors.name && (
                      <CustomAlert variant="negative">{formik.errors.name}</CustomAlert>
                    )}
                  </Box>
                  <Box>
                    <FormLabel>{i18nMark('location')}</FormLabel>
                    <Select
                      onSelect={(name, option) => {
                        formik.setValues({ ...formik.values, [name]: option });
                      }}
                      options={spatialThings?.map((el: any) => ({
                        id: el.id,
                        value: el.id,
                        label: el.name
                      }))}
                      placeholder={i18nMark('CustomSelect location')}
                      value={formik.values.atLocation || { id: '', value: '', label: '' }}
                      variant="primary"
                      id="atLocation"
                      name="atLocation"
                    />
                    {formik.errors.atLocation && (
                      <AlertWrapper>
                        <CustomAlert variant="negative">{formik.errors.atLocation}</CustomAlert>
                      </AlertWrapper>
                    )}
                  </Box>

                  <CollectionContainerForm>
                    <FormGroup>
                      <FormLabel>{i18nMark('Note')}</FormLabel>
                      <Input
                        type="textarea"
                        id="note"
                        name="note"
                        onChange={formik.handleChange}
                        placeholder={i18nMark('Note')}
                        value={formik.values.note}
                      />
                      <CounterChars>
                        {formik.values.note ? 500 - formik.values.note.length : 500}
                      </CounterChars>
                    </FormGroup>
                    {formik.errors.note && (
                      <CustomAlert variant="negative">{formik.errors.note}</CustomAlert>
                    )}
                  </CollectionContainerForm>
                </div>
              </div>
            </CollectionContainerForm>
          </HeroInfo>
        </Hero>
        <Actions mb={3}>
          <Button
            variant="primary"
            isSubmitting={formik.isSubmitting}
            isDisabled={formik.isSubmitting}
            type="submit"
            style={{ marginLeft: '10px' }}
          >
            <Trans>Update</Trans>
          </Button>
          <Button variant="outline" onClick={done}>
            <Trans>Cancel</Trans>
          </Button>
        </Actions>
      </form>
      <ToastContainer />
    </Container>
  );
};
