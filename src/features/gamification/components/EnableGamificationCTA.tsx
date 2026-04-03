"use client";

import { useState } from "react";
import { RewardModal } from "@/features/gamification/components/RewardModal/RewardModal";

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
  const [isRewardModalOpen, setIsRewardModalOpen] = useState(false);

  const handleCtaClick = () => {
    onClick?.();
    setIsRewardModalOpen(true);
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

      <RewardModal open={isRewardModalOpen} onOpenChange={setIsRewardModalOpen} />
    </>
  );
}

export default EnableGamificationCTA;
