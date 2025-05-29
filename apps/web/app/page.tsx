'use client';

import { Button } from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';

export default function HardcodedRippleTest() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 bg-primary-50 p-12">
      <h1 className="mb-8 text-3xl font-bold">
        Hardcoded EstateButton Ripple Test
      </h1>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div
          className="relative flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-8 shadow-lg"
          style={{ minHeight: '150px' }}
        >
          <span className="font-medium text-gray-700">Default</span>
          <Button>Default Button 2</Button>
        </div>

        <div
          className="relative flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-8 shadow-lg"
          style={{ minHeight: '150px' }}
        >
          <span className="font-medium text-gray-700">Estate Variant</span>
          <EstateButton color="estate" size="estate">
            Estate Button
          </EstateButton>
        </div>

        <div
          className="relative flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-8 shadow-lg"
          style={{ minHeight: '150px' }}
        >
          <span className="font-medium text-gray-700">Small Size</span>
          <EstateButton size="sm" color="primary">
            Small Button
          </EstateButton>
        </div>

        <div
          className="relative flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-8 shadow-lg"
          style={{ minHeight: '150px' }}
        >
          <span className="font-medium text-gray-700">Large Size</span>
          <EstateButton size="lg">Large Button</EstateButton>
        </div>
      </div>
    </main>
  );
}
