import { i18n } from 'context/global/localizationCtx';
import { useInstanceRegistrationAllowLists } from 'fe/settings/instance/registration/allowlist/instanceRegistrationAllowLists';
import { useFormik } from 'formik';
import { DOMAIN_REGEX } from 'mn-constants';
import React, { FC, useCallback, useMemo, useState } from 'react';
import { ConfirmationPanel } from 'ui/modules/ConfirmationPanel';
import Modal from 'ui/modules/Modal';
import Instance, { Props } from 'ui/pages/settings/instance';
import * as Yup from 'yup';

export const withEmailDomainValidation = Yup.object().shape({
  domain: Yup.string().matches(DOMAIN_REGEX)
});

export interface InstanceSettingsSection {}

export const InstanceSettingsSection: FC<InstanceSettingsSection> = () => {
  const [domainToRemove, setDomainToRemove] = useState<string>();
  const unsetDomainToRemove = useCallback(() => setDomainToRemove(undefined), []);
  const {
    removeEmailDomain,
    addEmailDomain,
    listEmailDomainsPage,
    removeEmailDomainStatus
  } = useInstanceRegistrationAllowLists();
  const [loadMoreDomains] = listEmailDomainsPage.formiks;
  const formikAddDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    validationSchema: withEmailDomainValidation,
    onSubmit: ({ domain }, { resetForm }) => {
      return domain ? addEmailDomain(domain).then(() => resetForm()) : undefined;
    }
  });

  const domainsList: Props['domainsList'] = useMemo(
    () => listEmailDomainsPage.edges.map(_ => _.domain),
    [listEmailDomainsPage]
  );

  const removeDomain = useCallback(() => {
    const domainId = listEmailDomainsPage.edges.find(_ => domainToRemove === _.domain)?.id;
    if (!domainId) {
      unsetDomainToRemove();
      return;
    }
    removeEmailDomain(domainId).then(unsetDomainToRemove);
  }, [domainToRemove, listEmailDomainsPage.edges, removeEmailDomain, unsetDomainToRemove]);

  const RemoveDomainConfirmModal = domainToRemove ? (
    <Modal closeModal={() => setDomainToRemove(undefined)}>
      <ConfirmationPanel
        cancel={unsetDomainToRemove}
        confirm={removeDomain}
        action={i18n._(`Delete domain from allowlist`)}
        description={i18n._(`Are you sure you want to delete ${domainToRemove} from allowlist?`)}
        title={i18n._(`Delete`)}
        waiting={removeEmailDomainStatus.loading}
      />
    </Modal>
  ) : null;

  const props = useMemo<Props>(() => {
    return {
      formikAddDomain,
      removeDomain: setDomainToRemove,
      domainsList,
      loadMoreDomains
    };
  }, [formikAddDomain, domainsList, loadMoreDomains]);
  return (
    <>
      {RemoveDomainConfirmModal}
      <Instance {...props} />
    </>
  );
};
