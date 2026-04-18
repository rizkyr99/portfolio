import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  tone?: "light" | "dark";
};

export function StringDivider({ className, tone = "dark" }: Props) {
  const color = tone === "dark" ? "bg-rosewood/40" : "bg-cream/40";
  const widths = [2.5, 2, 1.6, 1.2, 0.9, 0.6];

  return (
    <div
      className={cn("w-full flex flex-col gap-[6px] py-4", className)}
      aria-hidden
    >
      {widths.map((h, i) => (
        <div
          key={i}
          className={cn("w-full rounded-full", color)}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}
