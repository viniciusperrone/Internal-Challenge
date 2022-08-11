import { Dispatch, SetStateAction, useContext } from 'react';
import { Context, IToDoSelected } from './context';

type ContextProps = {
  todoSelected: IToDoSelected;
  setTodoSelected: (todo: IToDoSelected) => void;
};

export function useSelectedTodo() {
  const context = useContext(Context);

  const { todoSelected, setTodoSelected } = context as ContextProps;

  return {
    todoSelected,
    setTodoSelected,
  };
}
