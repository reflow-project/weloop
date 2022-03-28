import { useAnon } from 'fe/session/useAnon';
import React, { FC, useEffect, useMemo } from 'react';
import ConfirmEmailUI, { Props } from 'ui/pages/confirmEmail';
import { useHistory } from 'react-router-dom';
import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';

export interface ConfirmEmailPage {
  token: string;
}

const confirmEmailPageTitle = t`Confirm your email`;

export const ConfirmEmailPage: FC<ConfirmEmailPage> = ({ token }) => {
  usePageTitle(confirmEmailPageTitle);
  const { confirmEmail, confirmEmailStatus } = useAnon();
  const welcomeUsername = confirmEmailStatus.data?.confirmEmail?.accountId;
  const { push } = useHistory();

  useEffect(() => {
    if (welcomeUsername) {
      // setTimeout(() => push('/'), 2000);
    }
  }, [welcomeUsername, push]);

  useEffect(() => {
    confirmEmail(token);
  }, [token, confirmEmail]);

  const props = useMemo<Props>(
    () =>
      confirmEmailStatus.loading
        ? { result: null }
        : confirmEmailStatus.error
        ? { result: { error: confirmEmailStatus.error.message } }
        : welcomeUsername
        ? { result: { error: null, username: welcomeUsername } }
        : { result: { error: 'No Data Received' } },

    [confirmEmailStatus, welcomeUsername]
  );

  return <ConfirmEmailUI {...props} />;
};
