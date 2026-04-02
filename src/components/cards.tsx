import applicationsIcon from '../assets/icons/applications.svg';
import crownIcon from '../assets/icons/crown.svg';
import giftIcon from '../assets/icons/gift.svg';
import cardBackground from '../assets/backgrounds/card-background.svg';

type CardItem = {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
};

const cards: CardItem[] = [
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
    icon: applicationsIcon,
    iconAlt: 'Incentives icon',
  },
];

export function Cards() {
  return (
    <section
      aria-label="Feature cards"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}
    >
      {cards.map((card) => (
        <article
          key={card.title}
          style={{
            width: '292px',
            height: '200px',
            borderRadius: '8px',
            border: '1px solid hsla(300, 92%, 95%, 1)',
            boxShadow: '0px 7px 10px 0px hsla(0, 0%, 0%, 0.05)',
            backgroundImage: `url(${cardBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '28px 20px 22px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '12px',
              backgroundColor: 'hsla(297, 100%, 97%, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '18px',
            }}
          >
            <img src={card.icon} alt={card.iconAlt} width={24} height={24} />
          </div>

          <h3
            style={{
              margin: 0,
              fontSize: '16.5px',
              lineHeight: 1.25,
              letterSpacing: 0,
              marginBottom: '8px',
              color: '#08060d',
              fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
              fontWeight: 500,
            }}
          >
            {card.title}
          </h3>

          <p
            style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#6b6375',
              maxWidth: '250px',
            }}
          >
            {card.description}
          </p>
        </article>
      ))}
    </section>
  );
}

export default Cards;
