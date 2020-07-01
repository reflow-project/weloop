import React from 'react';
import styled from 'ui/themes/styled';
import { Box } from 'rebass/styled-components';
import Button from 'ui/elements/Button';
import { Trans } from '@lingui/macro';
import { FormikHook } from 'ui/@types/types';

export interface Props {
  LoadMoreFormik: FormikHook;
}

export const LoadMore: React.FC<Props> = props => {
  return (
    <Wrapper p={2}>
      <Button
        isSubmitting={props.LoadMoreFormik.isSubmitting}
        isDisabled={props.LoadMoreFormik.isSubmitting}
        onClick={props.LoadMoreFormik.submitForm}
        variant="outline"
      >
        <Trans>Load more</Trans>
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  background: ${props => props.theme.colors.appInverse};
  button {
    width: 100%;
  }
`;
