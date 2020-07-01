import { useInstanceRegistrationAllowLists } from 'fe/settings/instance/registration/allowlist/instanceRegistrationAllowLists';
import { useFormik } from 'formik';
import { EMAIL_REGEX } from 'mn-constants';
import React, { FC, useMemo } from 'react';
import Invites, { Props } from 'ui/pages/settings/invites';
import * as Yup from 'yup';

export interface InstanceInvitesSection {}

export const withEmailValidation = Yup.object().shape({
  email: Yup.string().matches(EMAIL_REGEX)
});

export const InstanceInvitesSection: FC<InstanceInvitesSection> = () => {
  const { addEmail, listEmailsPage, sendInviteEmail } = useInstanceRegistrationAllowLists();
  const [loadMoreEmails] = listEmailsPage.formiks;
  const formikAddEmail = useFormik<{ email: string }>({
    initialValues: { email: '' },
    validationSchema: withEmailValidation,
    onSubmit: ({ email }, { resetForm }) => {
      return email ? addEmail(email).then(() => resetForm()) : undefined;
    }
  });

  const emailsList: Props['emailsList'] = useMemo(() => listEmailsPage.edges.map(_ => _.email), [
    listEmailsPage
  ]);

  const props = useMemo<Props>(() => {
    return {
      formikAddEmail,
      sendInvite: sendInviteEmail,
      emailsList,
      loadMoreEmails
    };
  }, [formikAddEmail, sendInviteEmail, emailsList, loadMoreEmails]);
  return <Invites {...props} />;
};
