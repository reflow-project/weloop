import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProvideAlgoliaContext } from './algolia';
import { ProvideLocalizationCtx } from './localizationCtx';
import { ProvidePageCtx } from './pageCtx';

interface Props {
  children: React.ReactNode;
}
export const ProvideContexts: React.FC<Props> = ({ children }) => {
  return (
    <ProvideLocalizationCtx>
      <ProvidePageCtx>
        <BrowserRouter>
          <ProvideAlgoliaContext>{children}</ProvideAlgoliaContext>
        </BrowserRouter>
      </ProvidePageCtx>
    </ProvideLocalizationCtx>
  );
};
