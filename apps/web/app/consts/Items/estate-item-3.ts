import {
  estate3DetailImages,
  estate3PartnerImage,
} from '@/public/images/images';
import { ItemModel } from '@/types/ItemModel/item-model';

export const estateItem3: ItemModel = {
  id: 'estate-al-barari-001',
  properties: {
    maxCustomerQuantity: 30,
    path: 'estate-al-barari-001',
    srcs: { pictures: estate3DetailImages },
    actualPrice: 7500,
    displayImages: {
      fallbackImage: { ...estate3DetailImages[0] },
    },
    partner: {
      name: 'Serenity Developments',
      image: estate3PartnerImage.fallback!,
    },
    perks: [
      { perk: 'Eco-Investment Incentive' },
      { perk: 'Low Holding Costs' },
      { perk: 'Sustainability Grants Eligible' },
    ],
    title: 'Al Barari Desert-Luxe Retreat',
    subtitle: 'Nature-first living in Dubai’s greenest enclave',
    description:
      'Tucked into the lush landscape of Al Barari, this eco-luxury villa blends organic materials, peaceful interiors, and a lifestyle rooted in nature. From rooftop yoga sessions to herb-filled kitchens, every detail supports mindful, sustainable living.',
    contents: [
      {
        title: 'Eco-Modern Architecture',
        body: 'Designed with earth-toned materials, stonework, and clean lines, the villa integrates seamlessly into the natural surroundings. Lush gardens and water features complete this private oasis in the desert.',
      },
      {
        title: 'Nature-Inspired Living Room',
        body: 'Clay walls, teak furnishings, and floor-to-ceiling doors connect the interior living space directly to the garden. Natural textures and soft lighting promote a calm and grounded atmosphere.',
      },
      {
        title: 'Organic Chef’s Kitchen',
        body: 'Crafted from wood and stone, the kitchen features a central island and a vertical herb wall, encouraging clean eating and a connection to nature. It’s both functional and meditative.',
      },
      {
        title: 'Zen Bedroom Retreat',
        body: 'The bedroom combines canopy linens, a hanging chair, and indoor greenery to create a soft, earthy, and tranquil sleep space with views of the garden outside.',
      },
      {
        title: 'Rooftop Garden Escape',
        body: 'Above the villa, the rooftop garden offers a yoga deck, pergola shade, and stunning desert views — an ideal space for solitude, meditation, or slow mornings in nature.',
      },
    ],
  },
};

export default estateItem3;
