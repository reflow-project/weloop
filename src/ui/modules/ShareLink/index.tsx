// Add a resource to collection - step 1

import { i18nMark } from '@lingui/react';
import { clearFix } from 'polished';
import * as React from 'react';
import { FormikHook } from 'ui/@types/types';
import styled from 'ui/themes/styled';
import { Search } from 'react-feather';
import Loader from 'ui/elements/Loader';
import { Row } from 'ui/modules/Modal';
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
        <ContainerForm>
          <SearchInput
            placeholder={i18n._(tt.placeholders.url)}
            onChange={props.FetchLinkFormik.handleChange}
            name="fetchUrl"
            value={props.FetchLinkFormik.values.fetchUrl}
          />
          <Span
            disabled={props.FetchLinkFormik.isSubmitting}
            type="submit"
            onClick={props.FetchLinkFormik.submitForm}
          >
            <Search width={18} height={18} strokeWidth={2} />
          </Span>
        </ContainerForm>
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

const FetchedRow = styled(Row)`
  background: ${props => props.theme.colors.appInverse};
  border-top: ${props => props.theme.colors.border};
`;

const WrapperLoader = styled.div`
  padding: 10px;
`;

const SearchInput = styled(Input)`
  height: 40px;
  background: white;
  border-radius: 2px;
  border: ${props => props.theme.colors.border};
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
  &:hover {
    svg {
      stroke: ${props => props.theme.colors.secondary};
    }
  }
  .--rtl & {
    left: 2px;
    right: auto;
  }
`;

const ContainerForm = styled.div`
  flex: 1;
  ${clearFix()};
  position: relative;
  & form {
    width: 100%;
  }
`;
