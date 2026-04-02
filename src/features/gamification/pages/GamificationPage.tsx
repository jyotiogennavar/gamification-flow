import { GamificationHero } from '../components/GamificationHero';
import { FeatureCards } from '../components/FeatureCards';

export function GamificationPage() {
  return (
    <main className="min-h-screen bg-white">
      <GamificationHero />
      <FeatureCards />
    </main>
  );
}

export default GamificationPage;
