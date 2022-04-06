import { Trans } from '@lingui/macro';
import * as React from 'react';
import Select from 'react-select';
import { Box } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import { ActionsSimple, ContainerForm, Row } from 'ui/modules/Modal';
// import { ArrowLeft, ArrowRight } from 'react-feather';
// import media from 'styled-media-query';

// const Header = styled(Flex)`
//   border-bottom: ${props => props.theme.colors.border};
//   svg {
//     cursor: pointer;
//   }
//   ${media.greaterThan('1005px')`
// display: none;
// `};
// `;

// const TabHeading = styled(Heading)`
//   margin-left: 8px;
//   .--rtl & {
//     margin-right: 8px;
//     margin-left: 0px;
//   }
// `;

export interface EditPreferences {
  moodleWebsite: string;
}

export interface Props extends LanguageSelectProps {
  formik: FormikHook<EditPreferences>;
}

type LanguageSelectProps = {
  current: { value: string; label: string };
  locales: { value: string; label: string }[];
  setLocale(code: string): unknown;
};

export const LanguageSelect: React.FC<LanguageSelectProps> = props => {
  return (
    <Select
      options={props.locales as any}
      defaultValue={props.current}
      onChange={selectedCode => {
        const selection = Array.isArray(selectedCode) ? selectedCode[0] : selectedCode;
        if (!selection) {
          return;
        }
        props.setLocale(selection.value);
      }}
    />
  );
};
const Preferences: React.FC<Props> = props => (
  <Box>
    <Row>
      <ContainerForm>
        <label>
          <Trans>Select language</Trans>
        </label>
        <LanguageSelect {...props} />
        <ActionsSimple sx={{ height: 'inherit !important' }}>
          <Button
            variant="primary"
            isSubmitting={props.formik.isSubmitting}
            isDisabled={props.formik.isSubmitting}
            type="submit"
            style={{ marginLeft: '10px' }}
            onClick={props.formik.submitForm}
          >
            <Trans>Save</Trans>
          </Button>
        </ActionsSimple>
      </ContainerForm>
    </Row>
  </Box>
);

export default Preferences;
