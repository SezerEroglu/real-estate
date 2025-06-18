import ErrorPage from '@/components/ErrorPage/error-page';

export default function NotFound() {
  return (
    <ErrorPage
      title="404"
      subtitle="Page not found"
      description="The requested page could not be found."
    />
  );
}
