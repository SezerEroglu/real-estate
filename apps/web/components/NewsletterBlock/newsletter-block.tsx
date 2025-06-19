import { NewsletterForm } from '@/components/NewsletterForm/index';

export default function NewsletterBlock() {
  return (
    <div
      id="newsletter"
      className="container mx-auto my-16 w-full scroll-mt-40 md:scroll-mt-20 lg:scroll-mt-16"
    >
      <div className="text-primary1-foreground relative grid min-h-[820px] overflow-hidden rounded-3xl bg-[url('/images/newsletter-bg.jpg')] bg-contain lg:grid-cols-2">
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,hsl(var(--heroui-primary2)/0.3)_25%,hsl(var(--heroui-primary2)/1)_30%)] transition-background md:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,hsl(var(--heroui-primary2)/0.3)_35%,hsl(var(--heroui-primary2)/1)_40%)] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0)_0%,hsl(var(--heroui-primary2)/1)_60%,hsl(var(--heroui-primary2)/1)_100%)]" />

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
