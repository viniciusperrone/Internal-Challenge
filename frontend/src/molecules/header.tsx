import NotificationsSVG from 'assets/notifications.svg';
import Image from 'next/image';

export function Header() {
  return (
    <div className="bg-white w-full h-16 shadow-xl flex items-center justify-end px-6">
      <Image src={NotificationsSVG} />
    </div>
  );
}
