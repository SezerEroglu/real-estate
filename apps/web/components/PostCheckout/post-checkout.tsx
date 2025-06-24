'use client';

import { useEffect } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { cn, Divider } from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';
import confetti from 'canvas-confetti';
import { allItems } from '@/app/consts/Items/index';

export default function PostCheckout() {
  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x: 0, y: 0.6 }, // left side
      angle: 45,
    });

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x: 1, y: 0.6 }, // right side
      angle: 135,
    });
  }, []);
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="space-y-6 rounded-2xl bg-primary2 p-8 text-center text-primary2-foreground shadow-lg">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary1 text-3xl text-primary1-foreground">
            ✅
          </div>
        </div>

        <h1 className="text-2xl font-bold">Investment Confirmed</h1>
        <p className="">
          Thank you for investing in{' '}
          <span className="font-medium">Downtown Loft Apartments</span>. Your
          share purchase has been successfully recorded.
        </p>

        <div className="rounded-xl border border-divider bg-primary1 p-2 text-left text-primary1-foreground">
          <p className="mb-2 p-4 font-medium">Investment Details</p>
          <div className="rounded-lg border border-divider p-4">
            {Object.entries(allItems).map((item, index) => (
              <div key={index}>
                {index !== 0 && <Divider className="my-4" />}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  {/* Text Details Section (spans 2 columns on md and up) */}
                  <div className="col-span-2 space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-y-3">
                      <div className="col-span-1">Property:</div>
                      <div className="col-span-1 font-medium">
                        {item[1].properties.title}
                      </div>

                      <div className="col-span-1">Amount Invested:</div>
                      <div className="col-span-1">
                        ${item[1].properties.actualPrice}
                      </div>

                      <div className="col-span-1">Ownership Share:</div>
                      <div className="col-span-1">2.5%</div>

                      <div className="col-span-1">Transaction ID:</div>
                      <div className="col-span-1">INV-48F3D92B</div>

                      <div className="col-span-1 self-center">Status:</div>
                      <div
                        className={cn(
                          'col-span-1 w-min rounded-md px-4 py-2 font-medium',
                          (() => {
                            if (index % 3 == 0)
                              return 'bg-success text-success-foreground';
                            if (index % 3 == 1)
                              return 'bg-warning text-warning-foreground';
                            return 'bg-danger text-danger-foreground';
                          })(),
                        )}
                      >
                        {(() => {
                          if (index % 3 == 0) return 'Confirmed';
                          if (index % 3 == 1) return 'Warning';
                          return 'Denied';
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Image Section (only visible md and up) */}
                  <div className="col-span-2 aspect-video w-full md:col-span-1">
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <NextImage
                        src={
                          item[1].properties.displayImages.fallbackImage.src!
                        }
                        alt="Property Image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-6">
          <EstateButton
            href="/my-investments"
            color="primary"
            className="inline-block rounded-xl px-6 py-3 transition"
            as={Link}
          >
            Go to My Investments
          </EstateButton>

          <p className="text-sm text-primary1-foreground opacity-50">
            Your digital ownership certificate and investment documents will be
            available in your dashboard shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
