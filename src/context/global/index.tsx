import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProvideAlgoliaContext } from './algolia';
import { ProvideLocalizationCtx } from './localizationCtx';

interface Props {
  children: React.ReactNode;
}
export const ProvideContexts: React.FC<Props> = ({ children }) => {
  return (
    <ProvideLocalizationCtx>
      <BrowserRouter>
        <ProvideAlgoliaContext>{children}</ProvideAlgoliaContext>
      </BrowserRouter>
    </ProvideLocalizationCtx>
  );
};
