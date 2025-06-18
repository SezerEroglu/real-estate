import ErrorPage from '@/components/ErrorPage/error-page';

export default function CartLoading() {
  return (
    <ErrorPage
      title="One Moment Please"
      description={'Your cart is loading...'}
    />
  );
}
