
import BellIcon from '@/assets/icons/bell.svg';
import AvatarIcon from '@/assets/avatar.png';

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
      className="box-border flex h-[64px] w-full items-center justify-between bg-white px-8"
    >
      <h3 className="m-0 font-heading text-[18px] font-semibold leading-[140%] tracking-[0px] text-[#17111f]">
        {title}
      </h3>

      <div className="flex items-center gap-3.5">
        <button
          type="button"
          aria-label={`Notifications (${notificationCount})`}
          className="relative inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full border-none bg-transparent text-[#4b4455]"
        >
          <img src={BellIcon} alt="Bell" />
          {notificationCount > 0 && (
            <span className="absolute right-[1px] top-[-1px] inline-flex min-h-[16px] min-w-[16px] items-center justify-center rounded-full bg-[#f0437d] px-1 text-[10px] font-semibold leading-none text-white">
              {notificationCount}
            </span>
          )}
        </button>

        <div
          role="img"
          aria-label={profileAlt}
          className="h-[34px] w-[34px] rounded-full border border-[#e7d8c9] bg-[linear-gradient(135deg,_#f6d6b6_0%,_#e8ba91_45%,_#9a5f3e_100%)] shadow-[0_1px_3px_rgba(14,16,19,0.14)]"
        >
          <img src={AvatarIcon} alt="Avatar" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
