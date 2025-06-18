import StepIndicator from '@repo/ui/step-indicator';

export interface CartStepIndicatorProps {
  step: number;
}
export default function CartStepIndicator({ step }: CartStepIndicatorProps) {
  const steps = ['Cart', 'Checkout', 'Payment', 'Acquisition'];

  return <StepIndicator step={step} steps={steps} />;
}
