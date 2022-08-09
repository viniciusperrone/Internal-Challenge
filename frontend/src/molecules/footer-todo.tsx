import Image from 'next/image';
import { Status } from '@atoms/status-todo';
import WatchSVG from 'assets/watch.svg';

type FooterProps = {
  date: string;
  status: string;
};

export function Footer({ date, status }: FooterProps) {
  return (
    <footer className="w-full p-[18px] border-t border-zinc-400 bottom-0 flex flex-row justify-between">
      <div className="flex flex-row gap-[10px]">
        <Image src={WatchSVG} />
        <p className="text-[14px] font-inter font-normal text-primary">
          {date}
        </p>
      </div>
      <Status status={status} />
    </footer>
  );
}
