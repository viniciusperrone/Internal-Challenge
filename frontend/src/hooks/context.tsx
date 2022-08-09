import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  return (
    <Context.Provider value={{ openSidebar, setOpenSidebar }}>
      {children}
    </Context.Provider>
  );
}
