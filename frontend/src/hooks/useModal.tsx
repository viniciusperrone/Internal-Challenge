import { useContext } from 'react';
import { Context } from './context';

type ContextProps = {
  modal: boolean;
  setModal: (modal: boolean) => void;
  typeModal: 'create' | 'update' | null;
  setTypeModal: (type: string | null) => void;
};

export function useModal() {
  const context = useContext(Context);

  const { modal, setModal, typeModal, setTypeModal } = context as ContextProps;

  return {
    modal,
    setModal,
    typeModal,
    setTypeModal,
  };
}
