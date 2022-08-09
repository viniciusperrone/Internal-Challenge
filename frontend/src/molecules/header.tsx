import { HTMLAttributes } from 'React';
import { isMobile, isDesktop } from 'react-device-detect';
import Image from 'next/image';
import classname from 'classnames';
import NotificationsSVG from 'assets/notifications.svg';
import Logo from 'assets/logo.svg';

interface HeaderProps extends HTMLAttributes<HTMLSpanElement> {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <div
      className={classname(
        'bg-white w-full h-16 shadow-xl flex items-center px-6',
        {
          'justify-between': !isMobile,
          'justify-end': isMobile,
        },
      )}
    >
      {!isMobile && (
        <span {...rest}>
          <Image src={Logo} />
        </span>
      )}
      <Image src={NotificationsSVG} />
    </div>
  );
}
