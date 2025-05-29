import { Card } from '@repo/ui/card';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-28 grid bg-white text-center">
        <Card></Card>
      </div>
    </main>
  );
}
