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
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-12 w-full items-center justify-center rounded-xl bg-fuchsia-600 px-6 font-heading text-2xl leading-none font-medium text-white transition-colors hover:bg-fuchsia-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 ${className}`.trim()}
    >
      {label}
    </button>
  );
}

export default EnableGamificationCTA;
