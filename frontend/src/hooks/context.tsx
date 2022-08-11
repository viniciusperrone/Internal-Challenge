import React, { createContext, useState } from 'react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export interface IToDoSelected {
  id: number;
  title: string;
  status: string;
}

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [modal, setModal] = useState<boolean>(false);
  const [confetti, setConfetti] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<'create' | 'update' | null>(null);
  const [todoSelected, setTodoSelected] = useState<IToDoSelected>(
    {} as IToDoSelected,
  );
  return (
    <Context.Provider
      value={{
        modal,
        setModal,
        confetti,
        setConfetti,
        typeModal,
        setTypeModal,
        todoSelected,
        setTodoSelected,
      }}
    >
      {children}
    </Context.Provider>
  );
}
