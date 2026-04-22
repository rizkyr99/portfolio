import { cn } from "@/lib/cn";
import { FretMarker } from "./ui/FretMarker";

type Props = {
  eyebrow: string;
  title: string;
  fret?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, fret, className }: Readonly<Props>) {
  return (
    <div className={cn("flex flex-col gap-3 mb-10", className)}>
      <div className="flex items-center gap-3 text-rosewood/60 dark:text-cream/60">
        <FretMarker size="sm" variant="single" />
        <span className="font-mono text-[11px] uppercase tracking-[0.25em]">
          {eyebrow}
        </span>
        {fret && (
          <span className="font-mono text-[11px] ml-auto opacity-60">
            fret {fret}
          </span>
        )}
      </div>
      <h2 className="font-display text-4xl sm:text-5xl text-rosewood dark:text-cream font-light tracking-tight">
        {title}
      </h2>
    </div>
  );
}
