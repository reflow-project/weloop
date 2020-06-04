import { i18nMark, Trans } from '@lingui/react';
import { /* Textarea,*/ /* Checkbox, */ Input, Label } from '@rebass/forms';
import React from 'react';
import { XCircle } from 'react-feather';
import { Box, /* Flex, */ Text } from 'rebass/styled-components';
import { FormikHook } from 'ui/@types/types';
import Button from 'ui/elements/Button';
import ConfirmationModal from 'ui/modules/ConfirmationModal';
import Modal, { Actions, ContainerForm, Row } from 'ui/modules/Modal';
// import DropzoneArea from 'ui/modules/DropzoneModal';
import styled from 'ui/themes/styled';
import { LocaleContext } from 'context/global/localizationCtx';
import { LoadMore } from 'ui/modules/Loadmore';

const tt = {
  placeholders: {
    domain: i18nMark('Enter domain (e.g. moodle.com)')
  }
};

export interface Props {
  formikAddDomain: FormikHook<WithDomain>;
  formikRemoveDomain: FormikHook<WithDomain>;
  domainsList: string[];
  loadMoreDomains: FormikHook | null;
}

export interface WithDomain {
  domain: string;
}

// export const Instance = props => (
const Instance: React.FC<Props> = ({
  formikAddDomain,
  formikRemoveDomain,
  domainsList,
  loadMoreDomains
}) => {
  const { i18n } = React.useContext(LocaleContext);

  return (
    <Box>
      <Text px={3} mt={2} variant="heading">
        <span style={{ marginRight: '8px' }} aria-label="icon" role="img">
          🎨
        </span>
        Customize your instance
      </Text>
      {/* <Row>
      <ContainerForm>
        <label>
          <Trans>Name</Trans>
        </label>
        <Input />
      </ContainerForm>
    </Row>
    <Row>
      <ContainerForm>
        <label>
          <Trans>Description</Trans>
        </label>
        <Textarea />
      </ContainerForm>
    </Row>
    <Row>
      <ContainerForm>
        <label>
          <Trans>Instance background</Trans>
        </label>
        <Bg>
          <DropzoneArea
            initialUrl={''}
            // formikForm={}
          />
        </Bg>
      </ContainerForm>
    </Row> */}
      {/* <Row>
        <ContainerForm>
          <Invite>
            <Label>
              <Checkbox id="inviteOnly" name="inviteOnly" />
              This instance is invite only
            </Label>
          </Invite>
        </ContainerForm>
      </Row> */}
      <DomainWrapper>
        <Label pt={3}>
          <Trans>Add Domain to allowlist</Trans>
        </Label>
        <DomainContainerForm>
          <DomainInput
            placeholder={tt.placeholders.domain}
            disabled={formikAddDomain.isSubmitting}
            name="domain"
            value={formikAddDomain.values.domain}
            onChange={formikAddDomain.handleChange}
          />
          <Actions>
            <Button
              variant="primary"
              isSubmitting={formikAddDomain.isSubmitting}
              isDisabled={formikAddDomain.isSubmitting}
              type="submit"
              style={{ marginLeft: '10px' }}
              onClick={formikAddDomain.submitForm}
            >
              <Trans>Add</Trans>
            </Button>
          </Actions>
        </DomainContainerForm>
      </DomainWrapper>
      <Box p={3}>
        <Text p={3} variant="suptitle">
          <Trans>Allowed Domains</Trans>
        </Text>
        {domainsList.map((domain, i) => (
          <ListRow key={i}>
            <DomainText>{domain}</DomainText>
            <Delete onClick={() => formikRemoveDomain.setValues({ domain })}>
              <XCircle size={21} />
            </Delete>
          </ListRow>
        ))}
        {loadMoreDomains ? <LoadMore LoadMoreFormik={loadMoreDomains} /> : null}{' '}
        {/* FIX ME after add LoadMoreFormik */}
      </Box>
      {formikRemoveDomain.values.domain && (
        <Modal closeModal={() => formikRemoveDomain.setValues({ domain: '' })}>
          <ConfirmationModal
            done={() => formikRemoveDomain.setValues({ domain: '' })}
            formik={formikRemoveDomain}
            modalAction={i18n._(`Delete domain from allowlist`)}
            modalDescription={i18n._(
              `Are you sure you want to delete ${formikRemoveDomain.values.domain} from allowlist?`
            )}
            modalTitle={i18n._(`Delete`)}
          />
        </Modal>
      )}

      <Text variant="suptitle" p={3}>
        <Trans>More options will be available soon</Trans>
      </Text>
    </Box>
  );
};

// const Invite = styled(Flex)`
//   align-items: center;
//   label {
//     width: 100%;
//     line-height: auto;
//     align-items: center;
//   }
// `;

const DomainText = styled(Text)`
  flex:1;
  // color: ${props => props.theme.colors.medium};
`;

const DomainContainerForm = styled(ContainerForm)`
  display: flex;
  align-items: center;
`;

const DomainWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.lighter};
`;

const DomainInput = styled(Input)`
  && {
    flex: 1;
    color: ${props => props.theme.colors.mediumdark};
  }
`;

const ListRow = styled(Row)`
  align-items: center;
`;

const Delete = styled(Box)`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg{
    stroke: ${props => props.theme.colors.medium};
  }
  &:hover {
    // background: ${props => props.theme.colors.lighter};
    svg{
      stroke: ${props => props.theme.colors.primary};
    }
  }
`;

export default Instance;
// const Bg = styled(Box)``;
