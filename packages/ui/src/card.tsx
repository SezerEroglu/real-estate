import { Button } from '@heroui/button';

export function Card() {
  return (
    <Button
      size="sm"
      color="warning"
      className="rounded-md border border-red-500 px-8 md:w-auto"
      href="/profile"
    >
      Test Button 6
    </Button>
  );
}
