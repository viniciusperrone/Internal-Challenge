import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button
      className="bg-purple-600 w-full h-10 rounded-[8px] hover:shadow-xl transition-colors"
      {...rest}
    >
      <p className="text-[14px] font-inter font-semibold text-white">{title}</p>
    </button>
  );
}
