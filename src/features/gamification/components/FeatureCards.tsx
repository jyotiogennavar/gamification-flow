
import { FeatureCard, type FeatureCardProps } from './FeatureCard';

// Icons
import ticketSaleIcon from '../../../assets/icons/ticket-sale.svg';
import crownIcon from '../../../assets/icons/crown.svg';
import giftIcon from '../../../assets/icons/gift.svg';

// Cards
const cards: FeatureCardProps[] = [
  {
    title: 'Reward Your Ambassadors',
    description: 'Boost campaign performance by setting up rewards for ambassadors',
    icon: giftIcon,
    iconAlt: 'Gift icon',
  },
  {
    title: 'Set Milestones',
    description: 'Set up custom goals for sales, posts, or time-based achievements',
    icon: crownIcon,
    iconAlt: 'Crown icon',
  },
  {
    title: 'Customise Incentives',
    description: 'Create custom incentives like flat fees, free products, or special commissions.',
    icon: ticketSaleIcon,
    iconAlt: 'Ticket sale icon',
  },
];

export function FeatureCards() {
  return (
    <section className="flex flex-wrap justify-center gap-6">
      {cards.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </section>
  );
}

export default FeatureCards;
