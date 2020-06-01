import React, { FC, useMemo } from 'react';
import Instance, { Props } from 'ui/pages/settings/instance';
import { useInstanceRegistrationAllowLists } from 'fe/settings/instance/registration/allowlist/instanceRegistrationAllowLists';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DOMAIN_REGEX } from 'mn-constants';

export const withEmailDomainValidation = Yup.object().shape({
  domain: Yup.string().matches(DOMAIN_REGEX)
});

export interface InstanceSettingsSection {}

export const InstanceSettingsSection: FC<InstanceSettingsSection> = () => {
  const {
    removeEmailDomain,
    addEmailDomain,
    listEmailDomainsPage
  } = useInstanceRegistrationAllowLists();
  const [loadMoreDomains] = listEmailDomainsPage.formiks;
  const formikAddDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    validationSchema: withEmailDomainValidation,
    onSubmit: ({ domain }) => {
      return domain ? addEmailDomain(domain) : undefined;
    }
  });
  const formikRemoveDomain = useFormik<{ domain: string }>({
    initialValues: { domain: '' },
    validationSchema: withEmailDomainValidation,
    onSubmit: async ({ domain }) => {
      const domainId = listEmailDomainsPage.edges.find(_ => domain === _.domain)
        ?.id;
      await (domainId ? removeEmailDomain(domainId) : undefined);
      formikRemoveDomain.setValues({ domain: '' });
    }
  });

  const domainsList: Props['domainsList'] = useMemo(
    () => listEmailDomainsPage.edges.map(_ => _.domain),
    [listEmailDomainsPage]
  );

  const props = useMemo<Props>(() => {
    return {
      formikAddDomain,
      formikRemoveDomain,
      domainsList,
      loadMoreDomains
    };
  }, [formikAddDomain, formikRemoveDomain, domainsList]);
  return <Instance {...props} />;
};
