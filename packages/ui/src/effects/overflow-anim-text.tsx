export default function OverflowAnimText({
  text,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className="box-border w-full max-w-fit overflow-hidden whitespace-nowrap">
      <p className="animate-move relative inline-block">{text}</p>
    </div>
  );
}
