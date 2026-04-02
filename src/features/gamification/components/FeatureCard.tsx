import cardBackground from '../../../assets/backgrounds/card-background.svg';

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

export function FeatureCard({ title, description, icon, iconAlt }: FeatureCardProps) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-[hsla(300,92%,95%,1)] bg-white px-5 pt-7 pb-[22px] text-center shadow-[0px_7px_10px_0px_hsla(0,0%,0%,0.05)]">
      <img
        src={cardBackground}
        alt="Decorative background"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      />

      <div className="relative z-10 mx-auto mb-[18px] flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[var(--icon-border)]">
  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg">
    <img src={icon} alt={iconAlt} className="h-6 w-6" />
  </div>
</div>

      <h3 className="relative z-10 mb-2 font-heading text-[16px] leading-[1.25] font-medium tracking-[0px] text-[var(--card-title)]">
        {title}
      </h3>

        <p className="relative z-10 mx-auto max-w-[250px] text-[14px] leading-[1.5] text-[var(--body-text-color)] color-gray-500">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
