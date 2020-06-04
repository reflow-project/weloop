import { Settings } from 'luxon';
import { Catalog, Catalogs, I18n, setupI18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
  useCallback
} from 'react';
import { IS_DEV, LocaleDef, locales as available } from '../../mn-constants';
import {
  createLocalSessionKVStorage,
  LOCAL
} from 'util/keyvaluestore/localSessionStorage';
const LOCALIZATION_STORE = 'LOCALIZATION';
const LOCALE_KEY = '#locale';
const kvstore = createLocalSessionKVStorage(LOCAL)(LOCALIZATION_STORE);
export type LocaleContextT = {
  current: LocaleDef;
  i18n: I18n;
  available: LocaleDef[];
  set(locale: LocaleDef): void;
};
const getStoredLocaleCode = (): string | null => kvstore.get(LOCALE_KEY);
const setStoredLocaleCode = (localeCode: string): void =>
  kvstore.set(LOCALE_KEY, localeCode);

const savedLangCode = getStoredLocaleCode();
const defaultLocale =
  (savedLangCode && available.find(locale => locale.code === savedLangCode)) ||
  available[0];

export const i18n = setupI18n({
  locales: available.map(locale => locale.code)
});
export const LocaleContext = createContext<LocaleContextT>({
  current: defaultLocale,
  i18n,
  available,
  set: () => void 0
});
export const ProvideLocalizationCtx: React.FC = ({ children }) => {
  const [current, setCurrent] = useState(defaultLocale);
  const [catalogs, setCatalogs] = useState<Catalogs>({});
  useEffect(() => {
    setHTMLDirection(current.rtl);
    if (catalogs[current.code]) {
      return;
    }
    loadCatalog(current.code)
      .then(cat => setCatalogs({ ...catalogs, [current.code]: cat }))
      .catch(err =>
        console.error(`Error loading Locale: ${current.code}`, err)
      );
  }, [catalogs, current]);

  const set = useCallback(
    (locale: LocaleDef) => {
      setCurrent(locale);
      const { code } = locale;
      Settings.defaultLocale = code.split('_')[0];
      setStoredLocaleCode(code);
    },
    [setCurrent]
  );

  const localeContextValue = useMemo<LocaleContextT>(
    () => ({
      current,
      available,
      i18n,
      set
    }),
    [current, set]
  );

  return (
    <I18nProvider i18n={i18n} language={current.code} catalogs={catalogs}>
      <LocaleContext.Provider value={localeContextValue}>
        {children}
      </LocaleContext.Provider>
    </I18nProvider>
  );
};

const loadCatalog = async (localeCode: string): Promise<Catalog> => {
  if (IS_DEV) {
    return import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `@lingui/loader!../../locales/${localeCode}/messages.po`
    );
  } else {
    return import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `../../locales/${localeCode}/messages.js`
    );
  }
};

const setHTMLDirection = (RTL: boolean) => {
  const htmlEl = document.querySelector('html');
  if (htmlEl) {
    const dir = RTL ? 'rtl' : 'ltr';
    htmlEl.style.direction = dir;
    htmlEl.classList.remove('--rtl', '--ltr');
    htmlEl.classList.add(`--${dir}`);
  }
};
