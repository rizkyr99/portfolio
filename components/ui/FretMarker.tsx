import { cn } from "@/lib/cn";

type Props = {
  variant?: "single" | "double";
  size?: "sm" | "md" | "lg";
  filled?: boolean;
  className?: string;
};

const sizeMap = {
  sm: "w-2 h-2",
  md: "w-3 h-3",
  lg: "w-4 h-4",
};

export function FretMarker({
  variant = "single",
  size = "md",
  filled = true,
  className,
}: Props) {
  const dotClass = cn(
    "rounded-full",
    sizeMap[size],
    filled ? "bg-cream shadow-[0_0_6px_rgba(245,238,228,0.4)]" : "border border-cream/50"
  );

  if (variant === "double") {
    return (
      <span
        className={cn("inline-flex items-center gap-1.5", className)}
        aria-hidden
      >
        <span className={dotClass} />
        <span className={dotClass} />
      </span>
    );
  }

  return <span className={cn(dotClass, "inline-block", className)} aria-hidden />;
}
