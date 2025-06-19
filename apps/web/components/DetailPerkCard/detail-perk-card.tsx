import { ReactNode } from 'react';
import { cn } from '@heroui/react';
import BuildingSVG from '@/components/svg/Building/building';
import ClockSVG from '@/components/svg/Clock/clock';
import MoneySVG from '@/components/svg/Money/clock';

export interface DetailsPerkCardProps {
  perk:
    | 'Exclusive Early Access'
    | 'High Rental Demand'
    | 'Iconic Location Boost'
    | 'ROI-Optimized Investment'
    | 'Resale Value Advantage'
    | 'Downtown Priority Listing'
    | 'Eco-Investment Incentive'
    | 'Low Holding Costs'
    | 'Sustainability Grants Eligible';
}
export default function DetailsPerkCard({ perk }: DetailsPerkCardProps) {
  const svgClassname = cn('text-primary-foreground text-3xl w-6 h-6');

  const perkTextMap: Record<DetailsPerkCardProps['perk'], string> = {
    'Exclusive Early Access': 'Exclusive Early Access',
    'High Rental Demand': 'High Rental Demand',
    'Iconic Location Boost': 'Iconic Location Boost',
    'ROI-Optimized Investment': 'ROI-Optimized Investment',
    'Resale Value Advantage': 'Resale Value Advantage',
    'Downtown Priority Listing': 'Downtown Priority Listing',
    'Eco-Investment Incentive': 'Eco-Investment Incentive',
    'Low Holding Costs': 'Low Holding Costs',
    'Sustainability Grants Eligible': 'Sustainability Grants Eligible',
  };

  const perkIconMap: Record<DetailsPerkCardProps['perk'], ReactNode> = {
    'Exclusive Early Access': <ClockSVG className={svgClassname} />,
    'High Rental Demand': <MoneySVG className={svgClassname} />,
    'Iconic Location Boost': <BuildingSVG className={svgClassname} />,
    'ROI-Optimized Investment': <MoneySVG className={svgClassname} />,
    'Resale Value Advantage': <MoneySVG className={svgClassname} />,
    'Downtown Priority Listing': <MoneySVG className={svgClassname} />,
    'Eco-Investment Incentive': <MoneySVG className={svgClassname} />,
    'Low Holding Costs': <MoneySVG className={svgClassname} />,
    'Sustainability Grants Eligible': <MoneySVG className={svgClassname} />,
  };

  return (
    <div className="mx-auto inline-flex w-full items-center justify-center gap-2 rounded-lg border border-divider/50 bg-primary px-6 py-4 text-xl font-medium text-primary-foreground md:mx-0 md:w-auto">
      <span>{perkIconMap[perk]}</span>
      <span className="text-xs md:text-xl">{perkTextMap[perk]}</span>
    </div>
  );
}
