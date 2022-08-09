import { ReactNode } from 'react';

type ModalContainer = {
  children: ReactNode;
};
export function Container({ children }: ModalContainer) {
  return (
    <div className="w-full h-full bg-black opacity-95 absolute flex justify-center items-center">
      {children}
    </div>
  );
}
