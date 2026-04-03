import { GamificationHero } from '../components/GamificationHero';
import { FeatureCards } from '../components/FeatureCards';

export function GamificationPage() {
  return (
    <main className="bg-white">
      <GamificationHero />
      <FeatureCards />
    </main>
  );
}

export default GamificationPage;
