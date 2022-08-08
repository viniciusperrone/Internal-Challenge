import { ReactSVGElement, ReactNode } from 'react';
import classname from 'classnames';
import { useRouter } from 'next/router';
import ToDoSVG from 'assets/todo-list.svg';
import Image, { StaticImageData } from 'next/image';
import icons from 'utils/icons';

type SidebarNavigationProps = {
  name?: string;
  description: string;
  icon: string;
  children?: ReactNode;
};

export function Button({
  name = '/',
  description,
  icon,
  children,
}: SidebarNavigationProps) {
  const { pathname } = useRouter();

  const Icon = icons[icon];

  console.log(icons);

  return (
    <div
      className={classname(
        'w-full h-10 flex items-center px-[13px] gap-[10px]',
        {
          'bg-[#242A38] rounded-lg': pathname === name,
        },
      )}
    >
      <Image src={Icon} />
      <p
        className={classname('text-[14px] font-inter', {
          'text-secondary': pathname === name,
          'text-primary': pathname !== name,
        })}
      >
        {description}
      </p>
    </div>
  );
}
