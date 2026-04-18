"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Option = { value: string; label: string };

type Props = {
  options: [Option, Option, Option];
  value: string;
  onChange: (v: string) => void;
  className?: string;
};

export function PickupSwitch({ options, value, onChange, className }: Props) {
  const activeIndex = Math.max(
    0,
    options.findIndex((o) => o.value === value)
  );

  return (
    <div className={cn("inline-flex flex-col items-center gap-3", className)}>
      <div className="relative flex items-center justify-between w-48 h-10 px-2 rounded-full bg-gradient-to-b from-zinc-200 to-zinc-400 shadow-chrome chrome-edge">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-cream to-chrome shadow-md"
          animate={{ left: `${8 + activeIndex * 72}px` }}
          transition={{ type: "spring", stiffness: 320, damping: 26 }}
        />
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            aria-pressed={opt.value === value}
            aria-label={opt.label}
            className="relative z-10 w-8 h-8 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-butterscotch"
          />
        ))}
      </div>
      <div className="flex gap-3 text-[10px] uppercase tracking-widest text-rosewood/70 font-mono">
        {options.map((opt) => (
          <span
            key={opt.value}
            className={cn(
              "transition-colors",
              opt.value === value ? "text-rosewood font-semibold" : ""
            )}
          >
            {opt.label}
          </span>
        ))}
      </div>
    </div>
  );
}
