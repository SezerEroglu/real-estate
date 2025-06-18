import ErrorPage from '@/components/ErrorPage/error-page';

export default function CartEmpty() {
  return (
    <ErrorPage
      title="Your cart is Empty"
      description={'Add items to your cart!'}
    />
  );
}
