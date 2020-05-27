// Add a resource to collection - step 1

import { i18nMark } from '@lingui/react';
import * as React from 'react';
import { FormikHook } from 'ui/@types/types';
import styled from 'ui/themes/styled';
import { Search } from 'react-feather';
import { Box } from 'rebass/styled-components';
import Loader from 'ui/elements/Loader';
import { Input } from '@rebass/forms';
import { LocaleContext } from '../../../context/global/localizationCtx';
import Alert from 'ui/elements/Alert';
import { Fetched, ShareResource } from './fetched';
const tt = {
  placeholders: {
    url: i18nMark('Enter the URL of the resource'),
    name: i18nMark('A name or title for the resource'),
    summary: i18nMark(
      'Please type or copy/paste a summary about the resource...'
    ),
    submit: i18nMark('Fetch the resource'),
    image: i18nMark('Enter the URL of an image to represent the resource')
  }
};

export interface Props {
  FetchLinkFormik: FormikHook<{ fetchUrl: string }>;
  isFetched: boolean;
  formik: FormikHook<ShareResource>;
  cancelFetched(): any;
}

export const ShareLink = (props: Props) => {
  const { i18n } = React.useContext(LocaleContext);

  return (
    <>
      <FetchedRow>
        <Form onSubmit={props.FetchLinkFormik.handleSubmit}>
          <SearchInput
            placeholder={i18n._(tt.placeholders.url)}
            onChange={props.FetchLinkFormik.handleChange}
            name="fetchUrl"
            value={props.FetchLinkFormik.values.fetchUrl}
          />
          <Span
            disabled={props.FetchLinkFormik.isSubmitting}
            type="submit"
            // onClick={props.FetchLinkFormik.submitForm}
          >
            <Search width={18} height={18} strokeWidth={2} />
          </Span>
        </Form>
        {props.FetchLinkFormik.errors.fetchUrl && (
          <Alert variant="negative">
            {props.FetchLinkFormik.errors.fetchUrl}
          </Alert>
        )}
      </FetchedRow>
      {props.FetchLinkFormik.isSubmitting ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : null}
      {props.isFetched ? (
        <Fetched formik={props.formik} cancel={props.cancelFetched} />
      ) : null}
    </>
  );
};

const Form = styled.form`
  position: relative;
`;

const FetchedRow = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  border-top: ${props => props.theme.colors.border};
  padding: 16px;
`;

const WrapperLoader = styled.div`
  padding: 10px;
`;

const SearchInput = styled(Input)`
  height: 40px;
  background: ${props => props.theme.colors.appInverse};
  border-radius: 4px;
  border: 3px solid ${props => props.theme.colors.medium} !important;
`;

const Span = styled.button`
  position: absolute;
  right: 2px;
  top: 2px;
  border: 0;
  background: transparent;
  box-shadow: none;
  width: 40px;
  height: 37px;
  cursor: pointer;
  color: ${props => props.theme.colors.gray};
  svg {
    stroke: ${props => props.theme.colors.secondary} !important;
  }
  .--rtl & {
    left: 2px;
    right: auto;
  }
`;
