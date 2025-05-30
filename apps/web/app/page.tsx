'use client';

import EstateItem from '@repo/ui/estate-item';
import HomePageHeroBanner from '@repo/ui/home-page-hero-banner';
import EstateItem1 from '@/public/images/Estate-Item-1-Luxury-Apartment.jpg';
import HeroBanner from '@/public/images/home-page-hero-banner.jpg';

export default function Page() {
  return (
    <div className="w-full">
      <HomePageHeroBanner src={HeroBanner}>
        <p className="rounded-xl bg-background/75 p-1 text-center font-sans text-3xl font-semibold text-[#1DD75B]">
          Buy property fractions without any hassle.
        </p>
      </HomePageHeroBanner>
      <div className="my-4 grid grid-cols-2 gap-y-4">
        <div className="col-span-1 flex items-center justify-center">
          <EstateItem
            estate={{
              id: '123',
              properties: {
                building: { area: '1000 ft', bathrooms: 5, bedrooms: 2 },
                location: 'New York, NY',
                name: 'Luxury Apartment',
                pricing: {
                  totalValue: 500000,
                  sharePercentage: 0.5,
                },
                images: [EstateItem1],
              },
            }}
          ></EstateItem>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <EstateItem
            estate={{
              id: '123',
              properties: {
                building: { area: '1000 ft', bathrooms: 5, bedrooms: 2 },
                location: 'New York, NY',
                name: 'Luxury Apartment',
                pricing: {
                  totalValue: 500000,
                  sharePercentage: 0.5,
                },
                images: [EstateItem1],
              },
            }}
          ></EstateItem>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <EstateItem
            estate={{
              id: '123',
              properties: {
                building: { area: '1000 ft', bathrooms: 5, bedrooms: 2 },
                location: 'New York, NY',
                name: 'Luxury Apartment',
                pricing: {
                  totalValue: 500000,
                  sharePercentage: 0.5,
                },
                images: [EstateItem1],
              },
            }}
          ></EstateItem>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <EstateItem
            estate={{
              id: '123',
              properties: {
                building: { area: '1000 ft', bathrooms: 5, bedrooms: 2 },
                location: 'New York, NY',
                name: 'Luxury Apartment',
                pricing: {
                  totalValue: 500000,
                  sharePercentage: 0.5,
                },
                images: [EstateItem1],
              },
            }}
          ></EstateItem>
        </div>
      </div>
    </div>
  );
}
