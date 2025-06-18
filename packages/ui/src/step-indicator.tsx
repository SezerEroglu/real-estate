import { Fragment } from 'react';
import { IconCircleCheck } from './svg/icon-circle-check';
import { cn } from '@heroui/react';

export interface StepIndicatorProps {
  step: number;
  steps: Array<string>;
}
export default function StepIndicator({ step, steps }: StepIndicatorProps) {
  if (step < 0 || step > steps.length + 1) {
    throw new Error(`Invalid step. Must be between 0 and ${steps.length + 1}.`);
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {steps.map((stepTitle, stepIndex) => (
        <Fragment key={stepIndex}>
          <div className="flex flex-col items-center justify-center gap-2">
            <IconCircleCheck
              className={cn(
                'h-12 w-12',
                stepIndex === step - 1
                  ? 'fill-secondary text-secondary-foreground'
                  : 'text-primary/25',
                stepIndex < step - 1 && 'fill-primary text-primary-foreground',
              )}
            />
            <span className="font-bold text-foreground">{stepTitle}</span>
          </div>
          {stepIndex < steps.length - 1 && (
            <div
              className={cn(
                'mb-8 h-[3px] grow overflow-hidden rounded-full bg-primary',
                stepIndex <= step - 2 ? '' : 'opacity-50',
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
