import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [modal, setModal] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<'create' | 'update' | null>(null);
  return (
    <Context.Provider value={{ modal, setModal, typeModal, setTypeModal }}>
      {children}
    </Context.Provider>
  );
}
