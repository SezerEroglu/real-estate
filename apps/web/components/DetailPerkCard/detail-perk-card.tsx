import { cn } from '@heroui/react';
import FamilySvg from '@/components/svg/Family/family-svg';
import GiftSvg from '@/components/svg/Gift/gift-svg';
import GreatOfferSvg from '@/components/svg/GreatOffer/great-offer-svg';
import OutdoorActivitySvg from '@/components/svg/OutdoorActivity/outdoor-activity-svg';
import StarSvg from '@/components/svg/Star/star-svg';

export interface DetailsPerkCardProps {
  perk:
    | 'greatOffer'
    | 'outdoorActivity'
    | 'perfectAsGift'
    | 'forFamily'
    | 'ourRecommendation';
}
export default function DetailsPerkCard({ perk }: DetailsPerkCardProps) {
  const perkText = {
    greatOffer: 'Tolles Angebot',
    outdoorActivity: 'Outdoor Aktivität',
    perfectAsGift: 'Perfekt als Geschenk',
    forFamily: 'Für die Familie',
    ourRecommendation: 'Unsere Empfehlung',
  }[perk];
  const svgClassname = cn('text-primary-foreground text-3xl');
  const perkIcon = {
    greatOffer: <GreatOfferSvg className={svgClassname} />,
    outdoorActivity: <OutdoorActivitySvg className={svgClassname} />,
    perfectAsGift: <GiftSvg className={svgClassname} />,
    forFamily: <FamilySvg className={svgClassname} />,
    ourRecommendation: <StarSvg className={svgClassname} />,
  }[perk];

  return (
    <div className="mx-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-divider/50 bg-primary px-6 py-4 text-xl font-medium text-primary-foreground md:mx-0 md:w-auto">
      <span>{perkIcon}</span>
      <span className="text-xs md:text-xl">{perkText}</span>
    </div>
  );
}
