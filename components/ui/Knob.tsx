"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange?: (v: number) => void;
  label?: string;
  size?: number;
  className?: string;
};

export function Knob({
  value,
  min = 0,
  max = 10,
  onChange,
  label,
  size = 48,
  className,
}: Props) {
  const range = max - min;
  const pct = (value - min) / range;
  const angle = -135 + pct * 270;

  const step = () => {
    if (!onChange) return;
    const next = value >= max ? min : value + 1;
    onChange(next);
  };

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <button
        type="button"
        onClick={step}
        aria-label={label ?? "knob"}
        className="relative rounded-full bg-gradient-to-br from-chrome to-zinc-400 shadow-chrome cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-butterscotch"
        style={{ width: size, height: size }}
      >
        <motion.span
          className="absolute left-1/2 top-1 -translate-x-1/2 w-[2px] bg-rosewood rounded-full"
          style={{ height: size * 0.35, transformOrigin: `50% ${size / 2 - 4}px` }}
          animate={{ rotate: angle }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
        <span className="absolute inset-[18%] rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500" />
      </button>
      {label && (
        <span className="text-[10px] uppercase tracking-widest text-rosewood/70 font-mono">
          {label}
        </span>
      )}
    </div>
  );
}
