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

export interface IToDo {
  id: number;
  title: string;
  description: string;
  status: string;
  fromDate: Date | string;
  deadlineDate: Date | string;
}

export interface IToDoSearch extends Omit<IToDo, 'description' | 'id'> {}

export const Context = createContext({});

export default function ContextProvider({ children }: Props) {
  const [modal, setModal] = useState<boolean>(false);
  const [confetti, setConfetti] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<'create' | 'update' | null>(null);
  const [todoSelected, setTodoSelected] = useState<IToDoSelected[]>();
  const [todo, setTodo] = useState<IToDo[]>();
  const [searchClick, setSearchClick] = useState<boolean>(false);
  const [search, setSearch] = useState<IToDo>({} as IToDo);

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
        todo,
        setTodo,
        search,
        setSearch,
        searchClick,
        setSearchClick,
      }}
    >
      {children}
    </Context.Provider>
  );
}
