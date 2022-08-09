import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ ...rest }: ButtonProps) {
  return (
    <button
      className="bg-purple-600 w-[120px] h-10 rounded-[8px] hover:shadow-xl transition-colors"
      {...rest}
    >
      <p className="text-[14px] font-inter font-semibold text-white">
        Novo To Do
      </p>
    </button>
  );
}
