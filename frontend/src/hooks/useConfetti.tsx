import { useContext } from 'react';
import { Context } from './context';

type ContextProps = {
  confetti: boolean;
  setConfetti: (confetti: boolean) => void;
};

export function useConfetti() {
  const context = useContext(Context);

  const { confetti, setConfetti } = context as ContextProps;

  return {
    confetti,
    setConfetti,
  };
}
