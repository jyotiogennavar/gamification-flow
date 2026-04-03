"use client";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { RewardModal } from "@/features/gamification/components/RewardModal/RewardModal";
import { openRewardModal } from "@/features/gamification/store/gamification.slice";

type EnableGamificationCTAProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
};

export function EnableGamificationCTA({
  label = 'Enable Gamification',
  onClick,
  className = '',
}: EnableGamificationCTAProps) {
  const dispatch = useAppDispatch();
  const isRewardModalOpen = useAppSelector((state) => state.gamification.isRewardModalOpen);

  const handleCtaClick = () => {
    onClick?.();
    dispatch(openRewardModal());
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCtaClick}
        className={`flex h-12 w-full items-center justify-center rounded-xl bg-[var(--primary)] px-6 font-heading text-2xl leading-none font-medium text-white transition-colors hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 ${className}`.trim()}
      >
        {label}
      </button>

      {isRewardModalOpen && <RewardModal />}
    </>
  );
}

export default EnableGamificationCTA;
