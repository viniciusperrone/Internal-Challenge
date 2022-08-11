import { useContext } from 'react';
import { Context, IToDo } from './context';

type ContextProps = {
  todo: IToDo[];
  setTodo: (todo: IToDo[]) => void;
  search: IToDo;
  setSearch: (todo: IToDo) => void;
  searchClick: boolean;
  setSearchClick: (searchClick: boolean) => void;
};

export function useTodo() {
  const context = useContext(Context);

  const { todo, setTodo, search, setSearch, searchClick, setSearchClick } =
    context as ContextProps;

  return {
    todo,
    setTodo,
    search,
    setSearch,
    searchClick,
    setSearchClick,
  };
}
