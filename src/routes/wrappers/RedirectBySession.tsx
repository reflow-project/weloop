import { useMe } from 'fe/session/useMe';
import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
interface Props {
  to: string;
}

export const RedirectAuthenticated: FC<Props> = ({ children, to }) => {
  const { me, loading } = useMe();

  if (loading) {
    return null;
  }

  if (me) {
    return <Redirect to={to} />;
  }

  return <>{children}</>;
};
export const RedirectAuthenticatedToHome: FC = ({ children }) => (
  <RedirectAuthenticated to="/">{children}</RedirectAuthenticated>
);

export const RedirectAnonymous: FC<Props> = ({ children, to }) => {
  const { me, loading } = useMe();
  if (loading) {
    return null;
  }

  if (!me) {
    return <Redirect to={to} />;
  }

  return <>{children}</>;
};

export const RedirectAnonymousToLogin: FC = ({ children }) => (
  <RedirectAnonymous to="/login">{children}</RedirectAnonymous>
);
