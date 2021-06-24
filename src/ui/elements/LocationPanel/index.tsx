import { Trans } from '@lingui/macro';
import { i18nMark } from '@lingui/react';
import { FC, useState } from 'react';
import * as React from 'react';
import { CustomAlert, Heading } from 'rebass/styled-components';
import { CollectionContainerForm } from '../../modules/CreateCollectionPanel/style';
import { FormGroup, FormLabel } from '../../modules/EconomicEventManager/styles';
import styled from '../../themes/styled';
import Button from '../Button';
import { LocationPiker } from '../LocationPiker';
import Input from '../Input';
import { Map } from '../Map';
import { Container, CounterChars, Header } from 'ui/modules/Modal';
import { Hero, HeroInfo } from 'ui/modules/CreateCollectionPanel/style';

export type LocationPanelProps = {
  formik: any;
};

export const LocationPanel: FC<LocationPanelProps> = ({ formik }) => {
  const [showLocationPanel, setShowLocationData] = useState(false);

  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Header>
          <Heading m={2}>
            <Trans>{i18nMark('Create Location')}</Trans>
          </Heading>
        </Header>

        <Hero>
          <HeroInfo>
            <WrapperSelect>
              <CollectionContainerForm>
                <LocationPiker formik={formik} onSelect={setShowLocationData} />
              </CollectionContainerForm>
              {showLocationPanel && (
                <div className="d-flex">
                  <div className="item_col-6">
                    <Map
                      center={{ lat: formik.values.lat, lng: formik.values.long }}
                      zoom={12}
                    ></Map>
                  </div>
                  <div className="item_col-6">
                    <FormGroup>
                      <FormLabel>{i18nMark('Name')}</FormLabel>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        disabled={formik.isSubmitting}
                        onChange={formik.handleChange}
                        placeholder={i18nMark('Location name')}
                        value={formik.values.name}
                      />
                      <CounterChars>{60 - formik.values.name.length}</CounterChars>
                    </FormGroup>
                    {formik.errors.name && (
                      <CustomAlert variant="negative">{formik.errors.name}</CustomAlert>
                    )}
                    <div className="d-flex">
                      <div className="item_col-6">
                        <FormGroup>
                          <FormLabel>{i18nMark('Lat')}</FormLabel>
                          <Input
                            type="text"
                            id="lat"
                            name="lat"
                            readOnly={true}
                            disabled={formik.isSubmitting}
                            onChange={formik.handleChange}
                            placeholder={i18nMark('Name')}
                            value={formik.values.lat}
                          />
                        </FormGroup>
                      </div>

                      <div className="item_col-6">
                        <FormGroup>
                          <FormLabel>{i18nMark('Long')}</FormLabel>
                          <Input
                            type="text"
                            id="long"
                            name="long"
                            readOnly={true}
                            disabled={formik.isSubmitting}
                            onChange={formik.handleChange}
                            value={formik.values.long}
                          />
                        </FormGroup>
                      </div>
                    </div>

                    <FormGroup>
                      <FormLabel>note</FormLabel>
                      <Input
                        id="note"
                        type="textarea"
                        name="note"
                        onChange={formik.handleChange}
                        placeholder={i18nMark('Note')}
                        value={formik.values.note}
                      />
                    </FormGroup>
                    {formik.errors.note && (
                      <CustomAlert variant="negative">{formik.errors.note}</CustomAlert>
                    )}

                    <Button
                      variant="primary"
                      type="submit"
                      onClick={formik.handleSubmit}
                      fullWidth={true}
                    >
                      <Trans>Create Location</Trans>
                    </Button>
                  </div>
                </div>
              )}
            </WrapperSelect>
          </HeroInfo>
        </Hero>
      </form>
    </Container>
  );
};

const WrapperSelect = styled('div')`
  margin-bottom: 10px;
  
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    .item_col-6 {
      flex-basis: calc(50% - 5px);
    }
  }
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
  
  .zenpub__menu {
    background: #fff;
    max-height: 200px;
    padding: 20;
    box-shadow: 0px 2px 4px 0px #0000001f;
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
