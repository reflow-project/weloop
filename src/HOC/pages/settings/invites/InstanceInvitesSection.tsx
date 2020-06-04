import React, { FC, useMemo } from 'react';
import Invites, { Props } from 'ui/pages/settings/invites';
import { useInstanceRegistrationAllowLists } from 'fe/settings/instance/registration/allowlist/instanceRegistrationAllowLists';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { EMAIL_REGEX } from 'mn-constants';

export interface InstanceInvitesSection {}

export const withEmailValidation = Yup.object().shape({
  email: Yup.string().matches(EMAIL_REGEX)
});

export const InstanceInvitesSection: FC<InstanceInvitesSection> = () => {
  const {
    removeEmail,
    addEmail,
    listEmailsPage,
    sendInviteEmail
  } = useInstanceRegistrationAllowLists();
  const [loadMoreEmails] = listEmailsPage.formiks;
  const formikAddEmail = useFormik<{ email: string }>({
    initialValues: { email: '' },
    validationSchema: withEmailValidation,
    onSubmit: ({ email }) => {
      return email ? addEmail(email) : undefined;
    }
  });

  const formikRemoveEmail = useFormik<{ email: string }>({
    initialValues: { email: '' },
    validationSchema: withEmailValidation,
    onSubmit: ({ email }) => {
      const emailId = listEmailsPage.edges.find(_ => email === _.email)?.id;
      return emailId ? removeEmail(emailId) : undefined;
    }
  });

  const formikSendInvite = useFormik<{ email: string }>({
    initialValues: { email: '' },
    validationSchema: withEmailValidation,
    onSubmit: ({ email }) => {
      return sendInviteEmail(email);
    }
  });

  const emailsList: Props['emailsList'] = useMemo(
    () => listEmailsPage.edges.map(_ => _.email),
    [listEmailsPage]
  );

  const props = useMemo<Props>(() => {
    return {
      formikAddEmail,
      formikRemoveEmail,
      formikSendInvite,
      emailsList,
      loadMoreEmails
    };
  }, [
    formikAddEmail,
    formikRemoveEmail,
    formikSendInvite,
    emailsList,
    loadMoreEmails
  ]);
  return <Invites {...props} />;
};
