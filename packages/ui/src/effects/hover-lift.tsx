export type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
};

export default function HoverLift({
  children,
  className = '',
}: HoverLiftProps) {
  return (
    <div
      className={`transition-transform duration-300 ease-in-out hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
