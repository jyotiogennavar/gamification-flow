import purpleSquareTileBackground from '../../../assets/backgrounds/purple-square-tile-background.svg';
import { EnableGamificationCTA } from './EnableGamificationCTA';

export function GamificationHero() {
  return (
    <section className="px-4 py-5">
      <div className="relative mx-auto max-w-[960px] overflow-hidden bg-white px-4 py-8 sm:px-6 lg:px-8">
        <img
          src={purpleSquareTileBackground}
          alt="Decorative purple tile background"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />

        <div className=" mx-auto flex max-w-[354px] flex-col items-center text-center">
          <h1 className="m-0 font-heading text-[28px] font-semibold leading-[140%] tracking-[0px] text-[var(--heading-text-color)]">
            Gamify your Campaign
          </h1>
          <p className="mt-8 text-[16px] font-normal leading-[140%] text-[var(--body-text-color)]">
            Enable gamification to start crafting your custom reward system.
          </p>
          <EnableGamificationCTA className="mt-7 text-[16px] text-white" />
        </div>
      </div>
    </section>
  );
}

export default GamificationHero;
