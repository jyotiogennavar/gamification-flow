import { Bell } from 'lucide-react';

type NavbarProps = {
  title?: string;
  notificationCount?: number;
  profileAlt?: string;
};

export function Navbar({
  title = 'Gamification',
  notificationCount = 5,
  profileAlt = 'User profile',
}: NavbarProps) {
  return (
    <header
      aria-label="Top navigation"
      className="box-border flex h-[72px] w-full items-center justify-between border-b border-[#f0edf4] bg-white px-8"
    >
      <h1 className="m-0 font-heading text-[28px] leading-[1.15] font-semibold tracking-[-0.4px] text-[#17111f]">
        {title}
      </h1>

      <div className="flex items-center gap-3.5">
        <button
          type="button"
          aria-label={`Notifications (${notificationCount})`}
          className="relative inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-[#4b4455]"
        >
          <Bell size={18} strokeWidth={1.9} />
          <span
            aria-hidden="true"
            className="absolute top-px right-px box-border h-4 min-w-4 rounded-full bg-[#ff4d4f] px-1 text-center text-[10px] leading-4 font-bold text-white"
          >
            {notificationCount}
          </span>
        </button>

        <div
          role="img"
          aria-label={profileAlt}
          className="h-[34px] w-[34px] rounded-full border border-[#e7d8c9] bg-[linear-gradient(135deg,_#f6d6b6_0%,_#e8ba91_45%,_#9a5f3e_100%)] shadow-[0_1px_3px_rgba(14,16,19,0.14)]"
        />
      </div>
    </header>
  );
}

export default Navbar;
