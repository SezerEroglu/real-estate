import {
  estate2DetailImages,
  estate2PartnerImage,
} from '@/public/images/images';
import { ItemModel } from '@/types/ItemModel/item-model';

export const estateItem2: ItemModel = {
  id: 'estate-palm-villa-001',
  properties: {
    actualPrice: 8000,
    displayImages: {
      fallbackImage: { ...estate2DetailImages[0] },
    },
    srcs: { pictures: estate2DetailImages },
    maxCustomerQuantity: 30,
    path: 'estate-palm-villa-001',
    partner: {
      name: 'Azure Living Group',
      image: estate2PartnerImage.fallback!,
    },
    perks: [
      { perk: 'ROI-Optimized Investment' },
      { perk: 'Resale Value Advantage' },
      { perk: 'Downtown Priority Listing' },
    ],
    title: 'Palm Jumeirah Beachfront Villa',
    subtitle:
      'Seafront luxury with panoramic Gulf views and private rooftop lounge',
    description:
      'Located on the world-famous Palm Jumeirah, this contemporary beachfront villa offers glass-fronted architecture, elegant interiors, and a seamless connection to the sea. Designed for both privacy and prestige, it’s the epitome of coastal Dubai living.',
    contents: [
      {
        title: 'Architectural Elegance',
        body: 'The villa showcases a modern glass façade with clean lines and open spatial design. From its beachfront setting to the private infinity pool, every exterior detail is tailored to deliver coastal serenity and high-end design.',
      },
      {
        title: 'Seaside Living Room',
        body: 'A bright, expansive living area with floor-to-ceiling views of the Arabian Gulf. Finished with designer furniture and marble accents, the space is ideal for relaxation or hosting in style.',
      },
      {
        title: 'Open-Concept Kitchen',
        body: 'Centrally placed, the kitchen features a marble waterfall island, integrated appliances, and minimalist cabinetry. It’s perfect for daily cooking or elegant entertaining.',
      },
      {
        title: 'Master Retreat with Ocean View',
        body: 'The master suite is a sanctuary of calm, offering a king-sized bed, direct access to a sea-view balcony, and a refined interior palette of warm neutrals and soft lighting.',
      },
      {
        title: 'Rooftop Sunset Terrace',
        body: 'Unwind above the waves on your private rooftop terrace with rattan seating, tropical greenery, and panoramic views of the coastline. A perfect place for sunset moments or starlit evenings.',
      },
    ],
  },
};

export default estateItem2;
