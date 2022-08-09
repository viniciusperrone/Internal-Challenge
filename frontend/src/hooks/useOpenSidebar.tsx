import { Dispatch, SetStateAction, useContext } from 'react';
import { Context } from './context';

type ContextProps = {
  openSidebar: boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

export function useOpenSidebar() {
  const context = useContext(Context);

  const { openSidebar, setOpenSidebar } = context as ContextProps;

  return {
    openSidebar,
    setOpenSidebar,
  };
}
