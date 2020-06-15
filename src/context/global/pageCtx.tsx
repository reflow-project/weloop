import { APP_NAME } from 'mn-constants';
import React, { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';
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
    (subTitleToSet, values) => {
      const nextSubTitle = subTitleToSet === false ? void 0 : i18n._({ ...subTitleToSet, values });
      if (nextSubTitle === subTitle) {
        return;
      }
      setSubTitle(nextSubTitle);
    },
    [i18n, subTitle]
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

export const usePageTitle = (subTitle: SubTitleDescOrFalse, values?: any) => {
  const { setTitle } = useContext(PageCtx);
  // https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#warnings-for-some-updates-during-render
  useEffect(() => {
    setTitle(subTitle, values);
  }, [setTitle, subTitle, values]);
};
