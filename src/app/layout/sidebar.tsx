import homeIcon from '@/assets/icons/home.svg';
import brainIcon from '@/assets/icons/brain.svg';
import briefcaseIcon from '@/assets/icons/briefcase.svg';
import applicationsIcon from '@/assets/icons/applications.svg';
import walletIcon from '@/assets/icons/wallet.svg';
import profileIcon from '@/assets/icons/Profile.svg';
import { cn } from '@/lib/utils';

type SidebarItem = {
  label: string;
  icon: string;
  iconAlt: string;
  active?: boolean;
};

const menuItems: SidebarItem[] = [
  { label: 'Home', icon: homeIcon , iconAlt: "Home"},
  { label: 'Insights', icon: brainIcon, iconAlt: "Insights" },
  { label: 'Gamification', icon: briefcaseIcon,iconAlt: "Gamification", active: true },
  { label: 'Applications', icon: applicationsIcon, iconAlt: "Applications" },
  { label: 'Payments', icon: walletIcon, iconAlt: "Payments" },
];

export function Sidebar() {
  return (
    <aside
      aria-label="Main sidebar navigation"
      className="flex min-h-screen w-[188px] flex-col border-r border-[#f3d9f9] bg-[#fff8ff] px-[14px] pb-5 pt-[18px] box-border"
    >
      <div className="mb-[34px] flex items-center gap-[8px] px-2">
        <div
          aria-hidden="true"
          className="h-[22px] w-[22px] rounded-[8px] bg-[radial-gradient(circle_at_32%_30%,#f5b8ff_0%,#c04de8_56%,#9333ea_100%)] shadow-[0_2px_8px_rgba(170,59,255,0.35)]"
        />
        <span className="font-heading text-[18px] leading-[1.1] font-semibold tracking-[-0.3px] text-[#5c5169]">
          loftyinflu
        </span>
      </div>

      <nav aria-label="Primary">
        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {menuItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                aria-current={item.active ? 'page' : undefined}
                className={cn(
                  'flex w-full cursor-pointer items-center gap-2 rounded-lg border-none px-3 py-[10px] text-left font-heading leading-[1.2]',
                  item.active
                    ? 'bg-white text-[#d61be3] shadow-[0_2px_8px_rgba(127,78,137,0.08)]'
                    : 'bg-transparent text-[#5b5663]'
                )}
              >
                <img src={item.icon} alt={item.iconAlt} className="h-5 w-5" aria-hidden="true" />
                <span className={cn('text-[14px]', item.active ? 'font-semibold' : 'font-medium')}>
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
          className="mt-auto flex cursor-pointer items-center gap-2 rounded-lg border-none bg-transparent px-3 py-[10px] font-heading text-[14px] font-medium text-[#5b5663]"
      >
        <img src={profileIcon} alt="Profile" className="h-5 w-5" aria-hidden="true" />
        <span>Settings</span>
      </button>
    </aside>
  );
}

export default Sidebar;
