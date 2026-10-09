interface ProgressBarProps {
  value: number;
  className?: string;
}

export default function ProgressBar({
  value,
  className = "",
}: ProgressBarProps) {
  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-surface-muted ${className}`}
    >
      <div
        className="h-full rounded-full bg-success transition-all duration-500"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}