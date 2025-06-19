import { NewsletterForm } from '@/components/NewsletterForm/index';

export default function NewsletterBlock() {
  return (
    <div
      id="newsletter"
      className="container mx-auto my-16 w-full scroll-mt-40 px-4 md:scroll-mt-20 lg:scroll-mt-16"
    >
      <div className="to-primary1 text-primary1-foreground relative grid min-h-[820px] overflow-hidden rounded-3xl bg-gradient-to-b from-transparent transition-background lg:grid-cols-2 lg:bg-gradient-to-r">
        <div
          className={'absolute bottom-0 left-0 right-0 top-0 overflow-hidden'}
        />
        <div />
        <div className="z-20 mt-[65vw] flex items-center justify-center md:mt-[400px] md:p-20 lg:mt-0">
          <div className="bg-primary2 text-primary2-foreground m-4 w-full rounded-2xl border-divider/20 p-4 md:p-10 lg:rounded-[20px] lg:border">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
