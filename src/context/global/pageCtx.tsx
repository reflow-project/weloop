import { APP_NAME } from 'mn-constants';
import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { LocaleContext } from './localizationCtx';
import { MessageDescriptor } from '@lingui/core';

type SubTitleDescOrFalse = MessageDescriptor | false;
type SubTitle = string | undefined;
export interface PageCtx {
  setTitle(subTitle: SubTitleDescOrFalse, values?: any): void;
}
export const PageCtx = createContext<PageCtx>({ setTitle: _ => _ });
export const ProvidePageCtx: React.FC = ({ children }) => {
  const { i18n } = useContext(LocaleContext);
  const [subTitle, setSubTitle] = useState<SubTitle>();
  const setTitle = useCallback<PageCtx['setTitle']>(
    (subTitle, values) => {
      setSubTitle(subTitle === false ? void 0 : i18n._({ ...subTitle, values }));
    },
    [i18n]
  );

  const ctx = useMemo<PageCtx>(
    () => ({
      setTitle
    }),
    [setTitle]
  );
  const title = subTitle ? `${APP_NAME} - ${subTitle}` : APP_NAME;
  //console.table({ title, subTitle });
  return (
    <PageCtx.Provider value={ctx}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </PageCtx.Provider>
  );
};

export const usePageTitle = (subTitle: SubTitleDescOrFalse, values?: any) =>
  useContext(PageCtx).setTitle(subTitle, values);
