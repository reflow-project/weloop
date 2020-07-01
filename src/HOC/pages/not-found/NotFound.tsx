import { t } from '@lingui/macro';
import { usePageTitle } from 'context/global/pageCtx';
import React, { FC } from 'react';
import { NotFound } from 'ui/pages/notFound';

export interface NotFoundHOC {}

const notFoundPageTitle = t`Page Not Found`;

export const NotFoundHOC: FC<NotFoundHOC> = () => {
  usePageTitle(notFoundPageTitle, {});
  return <NotFound />;
};
