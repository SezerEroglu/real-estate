import NextImage, { StaticImageData } from 'next/image';
import OverflowAnimText from './overflow-anim-text';

export default function EstateItem({
  estate,
}: {
  estate: {
    id: string;
    properties: {
      name: string;
      pricing: {
        totalValue: number | string;
        sharePercentage: number | string;
      };
      building: { bedrooms: number; bathrooms: number; area: string };
      location: string;
      images: [string | StaticImageData];
    };
  };
}) {
  return (
    <div className="estate-item relative h-80 max-w-[45vw] overflow-hidden rounded-lg border border-[#393D47] bg-[#19191F] shadow-md">
      <div className="relative h-1/2">
        <NextImage
          className="h-full w-full max-w-full object-cover"
          src={estate.properties.images[0]}
          alt={estate.properties.name}
        />
      </div>
      <div className="whitespace-nowrap p-4 text-white">
        <OverflowAnimText text={estate.properties.name} />
        <OverflowAnimText text={estate.properties.location} />
        <OverflowAnimText text="short" />
        <OverflowAnimText text={`Price: \$${estate.properties.pricing.totalValue}`} />
        <p></p>
      </div>
    </div>
  );
}
