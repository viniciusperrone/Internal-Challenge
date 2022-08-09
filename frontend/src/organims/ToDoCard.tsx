import { HtmlHTMLAttributes } from 'react';

import { Title } from '@atoms/title-default';
import { Description } from '@atoms/description-default';
import { Footer } from '@molecules/footer-todo';

interface CardToDo extends HtmlHTMLAttributes<HTMLSpanElement> {
  title: string;
  description: string;
  date: string;
  status: string;
}

export function Card({ title, description, date, status, ...rest }: CardToDo) {
  return (
    <span
      className="w-[350px] h-[200px] bg-white rounded-[8px] shadow-md flex flex-col justify-between gap-4 pt-[32px]"
      {...rest}
    >
      <main className="flex-1 flex flex-col px-6">
        <Title title={title} />
        <Description description={description} />
      </main>
      <Footer date={date} status={status} />
    </span>
  );
}
