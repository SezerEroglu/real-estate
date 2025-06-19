import { HeroSlider } from '@repo/ui/hero-slider';
import { HeroSliderItem, HeroSliderItemProps } from '@repo/ui/hero-slider-item';
import HomePageHeroBanner, {
  type HomePageHeroBannerProps,
} from '@repo/ui/home-page-hero-banner';
import estateItem1 from '@/app/consts/Items/estate-item-1';
import estateItem2 from '@/app/consts/Items/estate-item-2';
import estateItem3 from '@/app/consts/Items/estate-item-3';
import NewsletterBlock from '@/components/NewsletterBlock/newsletter-block';
import { mapItemToHomePageHeroBannerProps } from '@/utils/ModelUtils/item-model-to-hero-banner';
import { mapItemToHeroSliderItemProps } from '@/utils/ModelUtils/item-model-to-hero-slider-item';

export default function Page() {
  const heroBannerItem: HomePageHeroBannerProps =
    mapItemToHomePageHeroBannerProps(estateItem1);
  const heroSliderItems: HeroSliderItemProps[] = [
    estateItem1,
    estateItem2,
    estateItem3,
  ].map((item) => mapItemToHeroSliderItemProps(item));

  return (
    <div className="mx-auto w-full">
      <div className="grid-cols-12">
        <div className="container col-span-full mx-auto mt-10 px-4">
          <HomePageHeroBanner
            properties={heroBannerItem.properties}
            targetUrl={heroBannerItem.targetUrl}
          />
        </div>
        <div className="container col-span-full mx-auto mt-10 px-4">
          <HeroSlider title="Highlights">
            {heroSliderItems.map((item, index) => (
              <HeroSliderItem
                key={index}
                properties={item.properties}
                targetUrl={item.targetUrl}
              ></HeroSliderItem>
            ))}
          </HeroSlider>
        </div>
        <div className="container col-span-full mx-auto mt-10 px-4">
          <NewsletterBlock />
        </div>
      </div>
    </div>
  );
}
