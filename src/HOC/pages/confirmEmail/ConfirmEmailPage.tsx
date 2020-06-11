import { useAnon } from 'fe/session/useAnon';
import React, { FC, useEffect, useMemo } from 'react';
import ConfirmEmailUI, { Props } from 'ui/pages/confirmEmail';
import { useHistory } from 'react-router-dom';

export interface ConfirmEmailPage {
  token: string;
}
export const ConfirmEmailPage: FC<ConfirmEmailPage> = ({ token }) => {
  const { push } = useHistory();
  const { confirmEmail, confirmEmailStatus } = useAnon();
  const welcomeUsername = confirmEmailStatus.data?.confirmEmail?.me.user.name;
  useEffect(() => {
    if (welcomeUsername) {
      setTimeout(() => push('/'), 2000);
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
