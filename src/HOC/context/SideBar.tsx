import React, {
  createContext,
  useState,
  useCallback,
  FC,
  useMemo
} from 'react';

export interface SideBarContext {
  isOpen;
  toggleOpen(): boolean;
}
export const SideBarContext = createContext<SideBarContext>({
  isOpen: true,
  toggleOpen: () => true
});
export const ProvideSideBarContext: FC = ({ children }) => {
  const [isOpen, setOpen] = useState(true);
  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
    return !isOpen;
  }, [isOpen]);
  const ctx = useMemo<SideBarContext>(
    () => ({
      isOpen,
      toggleOpen
    }),
    [isOpen, toggleOpen]
  );
  return (
    <SideBarContext.Provider value={ctx}>{children}</SideBarContext.Provider>
  );
};
