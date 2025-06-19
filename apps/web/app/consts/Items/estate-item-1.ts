import {
  estate1DetailImages,
  estate1PartnerImage,
} from '@/public/images/images';
import { ItemModel } from '@/types/ItemModel/item-model';

export const estateItem1: ItemModel = {
  id: 'estate-downtown-penthouse-001',
  properties: {
    maxCustomerQuantity: 30,
    displayImages: {
      fallbackImage: { ...estate1DetailImages[0] },
    },
    path: 'estate-downtown-penthouse-001',
    srcs: { pictures: estate1DetailImages },
    actualPrice: 10000,
    partner: {
      name: 'Skyline Estates Dubai',
      image: estate1PartnerImage.fallback!,
    },
    perks: [
      { perk: 'Exclusive Early Access' },
      { perk: 'High Rental Demand' },
      { perk: 'Iconic Location Boost' },
    ],
    title: 'Downtown Dubai Sky-High Penthouse',
    subtitle: 'Luxury living above the skyline with Burj Khalifa views',
    description:
      'Perched in the heart of Downtown Dubai, this ultra-modern penthouse offers panoramic views, double-height ceilings, and a rooftop terrace with a private plunge pool. Designed for the modern urban dweller, every detail reflects sophistication and comfort.',
    contents: [
      {
        title: 'Panoramic City Views',
        body: 'Enjoy uninterrupted skyline views from every room, with floor-to-ceiling windows framing the majestic Burj Khalifa and the vibrant Downtown district. Day or night, the scenery is nothing short of spectacular.',
      },
      {
        title: 'Double-Height Living Area',
        body: 'The centerpiece of the penthouse is its soaring living space with elegant lighting, a floating staircase, and sleek modern furnishings. Designed for both relaxation and entertaining, the layout merges comfort with contemporary design.',
      },
      {
        title: 'Smart Gourmet Kitchen',
        body: 'A chef’s dream kitchen equipped with matte black cabinetry, brushed gold accents, a central island, and smart appliances. Whether cooking or hosting, the space delivers performance and style.',
      },
      {
        title: 'Private Rooftop Terrace',
        body: 'Escape to your private rooftop featuring an infinity plunge pool, fire pit lounge, and 360-degree views of Dubai’s iconic skyline. Ideal for sunset dinners or late-night gatherings under the stars.',
      },
      {
        title: 'Five-Star Bathroom Experience',
        body: 'Indulge in spa-level relaxation with a freestanding soaking tub, marble walls, and ambient lighting. The bathroom offers peaceful seclusion with breathtaking views.',
      },
    ],
  },
};

export default estateItem1;
