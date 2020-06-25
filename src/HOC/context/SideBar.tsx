import React, { createContext, FC, useMemo, useReducer } from 'react';

export interface SideBarContext {
  isOpen: boolean;
  toggleOpen(): unknown;
}
export const SideBarContext = createContext<SideBarContext>({
  isOpen: true,
  toggleOpen: () => true
});
export const ProvideSideBarContext: FC = ({ children }) => {
  const [isOpen, toggleOpen] = useReducer(is => !is, true);
  const ctx = useMemo<SideBarContext>(
    () => ({
      isOpen,
      toggleOpen
    }),
    [isOpen, toggleOpen]
  );
  return <SideBarContext.Provider value={ctx}>{children}</SideBarContext.Provider>;
};
