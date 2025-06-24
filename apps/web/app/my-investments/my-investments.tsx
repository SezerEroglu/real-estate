import Image from 'next/image';
// adjust if needed
import Link from 'next/link';
import { cn } from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';
import { IconArrowRight } from '@repo/ui/svg/icon-arrow-right';
import { ItemModel } from '@/types/ItemModel/item-model';

export type MyInvestmentsPageProps = {
  investments: Array<{
    item: ItemModel;
    ownershipPercent: number;
    investedAmount: number;
    transactionId: string;
    status: 'Confirmed' | 'Pending' | 'Denied';
    totalRevenue: number;
    estimatedAnnualRevenue: number;
    totalValueBought: number;
    currentMarketValue: number;
    valuePerShare: number;
    userShares: number;
    totalShares: number;
  }>;
};

export default function MyInvestmentsPage({
  investments,
}: MyInvestmentsPageProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-row gap-x-5">
        <EstateButton
          startContent={<IconArrowRight className="-rotate-180" />}
          color="secondary"
          className="border border-divider"
          href="/"
          as={Link}
        >
          Back
        </EstateButton>

        <h1 className="mb-8 text-3xl font-bold">My Investments</h1>
      </div>
      <div className="space-y-6">
        {investments.map(
          (
            {
              item,
              ownershipPercent,
              investedAmount,
              transactionId,
              status,
              totalRevenue,
              totalValueBought,
              currentMarketValue,
              estimatedAnnualRevenue,
              totalShares,
              userShares,
              valuePerShare,
            },
            index,
          ) => (
            <div
              key={item.id + index}
              className="items-center gap-6 rounded-xl bg-primary1 p-4 text-primary1-foreground shadow md:flex"
            >
              <div className="relative aspect-video h-auto w-full overflow-hidden rounded-lg md:max-w-72">
                <Image
                  src={
                    item.properties.displayImages.desktopImage?.src ||
                    item.properties.displayImages.fallbackImage.src!
                  }
                  alt={item.properties.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex-1 space-y-2 md:mt-0">
                <h2 className="text-xl font-semibold">
                  {item.properties.title}
                </h2>
                <p className="text-sm">{item.properties.subtitle}</p>

                <div className="mt-2 grid grid-cols-1 gap-x-2 gap-y-2 text-sm">
                  {/* 1. Transaction ID */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Transaction ID:</span>
                    <span className="truncate text-start font-medium">
                      {transactionId}
                    </span>
                  </div>

                  {/* 2. Status */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="self-center text-end">Status:</span>
                    <span
                      className={cn(
                        'w-min self-center rounded-md border border-divider px-4 py-2 text-start font-medium',
                        (() => {
                          if (status === 'Confirmed')
                            return 'bg-success text-success-foreground';
                          if (status === 'Pending')
                            return 'bg-warning text-warning-foreground';
                          return 'bg-danger text-danger-foreground';
                        })(),
                      )}
                    >
                      {status}
                    </span>
                  </div>

                  {/* 3. Ownership Share */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Ownership Share:</span>
                    <span className="text-start font-medium">
                      {ownershipPercent}%
                    </span>
                  </div>

                  {/* 4. User Shares */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Your Shares:</span>
                    <span className="text-start font-medium">{userShares}</span>
                  </div>

                  {/* 5. Invested Amount */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Invested Amount:</span>
                    <span className="text-start font-medium">
                      ${investedAmount.toLocaleString()}
                    </span>
                  </div>

                  {/* 6. Total Value Bought */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Total Value Bought:</span>
                    <span className="text-start font-medium">
                      ${totalValueBought}
                    </span>
                  </div>

                  {/* 7. Current Market Value */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="self-center text-end">
                      Current Market Value:
                    </span>
                    <div className="flex flex-row gap-x-4">
                      <span className="self-center text-start font-medium">
                        ${currentMarketValue}
                      </span>
                      {(() => {
                        if (currentMarketValue === totalValueBought)
                          return (
                            <div className="self-center rounded-xl bg-warning p-2">
                              <IconArrowRight className="h-6 w-6 text-warning-foreground" />
                            </div>
                          );
                        if (currentMarketValue > totalValueBought)
                          return (
                            <div className="self-center rounded-xl bg-success p-2">
                              <IconArrowRight className="h-6 w-6 -rotate-90 text-success-foreground" />
                            </div>
                          );
                        return (
                          <div className="self-center rounded-xl bg-danger p-2">
                            <IconArrowRight className="h-6 w-6 rotate-90 text-danger-foreground" />
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  {/* 8. Value Per Share */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Value Per Share:</span>
                    <span className="text-start font-medium">
                      ${valuePerShare}
                    </span>
                  </div>

                  {/* 9. Total Revenue */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Total Revenue:</span>
                    <span className="text-start font-medium">
                      ${totalRevenue}
                    </span>
                  </div>

                  {/* 10. Estimated Annual Revenue */}
                  <div className="col-span-1 grid grid-cols-2 gap-4 rounded-xl bg-primary2 px-3 py-2">
                    <span className="text-end">Estimated Annual Revenue:</span>
                    <span className="text-start font-medium">
                      ${estimatedAnnualRevenue}
                    </span>
                  </div>
                </div>

                <div className="pt-3">
                  <EstateButton
                    href={'item/' + item.properties.path}
                    color="primary"
                    as={Link}
                    className="border border-divider"
                  >
                    View Property
                  </EstateButton>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
