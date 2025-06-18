import CartCostOverview from '@/components/CartCostOverview/cart-cost-overview';
import CartItemList from '@/components/CartItemList/cart-item-list';
import CartRequired from '@/components/CartRequired/cart-required';
import CartStepIndicator from '@/components/CartStepIndicator/cart-step-indicator';
import { PaymentIconApple } from '@/components/svg/PaymentIconApple/payment-icon-apple';
import { PaymentIconGoogle } from '@/components/svg/PaymentIconGoogle/payment-icon-google';
import { PaymentIconMastercard } from '@/components/svg/PaymentIconMastercard/payment-icon-mastercard';
import { PaymentIconPaypal } from '@/components/svg/PaymentIconPaypal/payment-icon-paypal';
import { PaymentIconVisa } from '@/components/svg/PaymentIconVisa/payment-icon-visa';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
const pageInfo = {
  pageName: 'aldi-deals-cart',
  pageType: 'aldi-sued-ci-template',
  primaryCategory: 'ALDI SUED CI',
  subCategory: 'aldi-deals',
  subSubCategory: 'checkout-checkout',
};

export default function Page() {
  return (
    <CartRequired>
      <div className="mx-auto max-w-5xl">
        <CartStepIndicator step={1} />
      </div>
      <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
        <div className="col-span-full flex flex-col gap-10 lg:col-span-8">
          <div className="rounded-[20px] bg-content2 p-10 text-content2-foreground">
            <h1 className="border-b pb-4 text-3xl font-bold">Your Cart</h1>
            <div>
              <CartItemList />
            </div>
          </div>

          <div className="hidden rounded-[20px] bg-content2 p-10 text-content2-foreground lg:flex lg:flex-col lg:items-center lg:gap-5">
            <h2 className="text-lg font-medium">
              We support the following payment methods
            </h2>

            <div className="flex flex-row flex-wrap gap-6">
              <PaymentIconMastercard />
              <PaymentIconVisa />
              <PaymentIconApple />
              <PaymentIconPaypal />
              <PaymentIconGoogle />
            </div>
          </div>
        </div>
        <div className="col-span-full flex flex-col gap-10 lg:col-span-4">
          <div className="w-full">
            <CartCostOverview />
          </div>
          <div className="hidden rounded-[20px] bg-content2 p-10 text-content2-foreground md:flex md:flex-col md:items-center md:gap-5 lg:hidden">
            <h2 className="text-lg font-medium">
              We support the following payment methods
            </h2>

            <div className="flex flex-row flex-wrap gap-6">
              <PaymentIconMastercard />
              <PaymentIconVisa />
              <PaymentIconApple />
              <PaymentIconPaypal />
              <PaymentIconGoogle />
            </div>
          </div>
        </div>
      </div>
    </CartRequired>
  );
}
