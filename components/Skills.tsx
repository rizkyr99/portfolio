"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FretMarker } from "./ui/FretMarker";
import { cn } from "@/lib/cn";
type SkillItem = { name: string; level: number };
type SkillGroup = { group: string; items: SkillItem[] };

function SkillChip({ name, index }: { name: string; index: number }) {
  const [pressed, setPressed] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 6 }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
      onTapStart={() => setPressed(true)}
      onTap={() => setPressed(false)}
      onTapCancel={() => setPressed(false)}
      className={cn(
        "relative px-4 py-2 rounded-full font-display text-base transition-colors duration-200 outline-none",
        "border border-cream/15 text-cream/80",
        "hover:text-cream hover:border-butterscotch/60 hover:bg-butterscotch/10",
        pressed && "text-butterscotch border-butterscotch bg-butterscotch/15",
      )}
    >
      {/* glow on hover */}
      <motion.span
        className="absolute inset-0 rounded-full bg-butterscotch/10 blur-sm"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden
      />
      <span className="relative">{name}</span>
    </motion.button>
  );
}

export function Skills({ skills }: Readonly<{ skills: SkillGroup[] }>) {
  const [active, setActive] = useState<string | null>(null);

  const displayed = active ? skills.filter((g) => g.group === active) : skills;

  return (
    <section
      id="skills"
      className="relative py-24 px-6 fretboard-bg text-cream overflow-hidden"
    >
      {/* strings */}
      <div
        className="absolute inset-0 flex flex-col justify-evenly opacity-30 pointer-events-none"
        aria-hidden
      >
        {["a", "b", "c", "d", "e", "f", "g"].map((k) => (
          <div key={k} className="h-px w-full bg-chrome/60" />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-cream/60">
            <FretMarker size="sm" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em]">Skills</span>
            <span className="font-mono text-[11px] ml-auto opacity-60">fret V</span>
          </div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-cream font-light tracking-tight">
            Tools in the case.
          </h2>
        </div>

        {/* group filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActive(null)}
            className={cn(
              "font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-150",
              active === null
                ? "border-butterscotch bg-butterscotch/10 text-butterscotch"
                : "border-cream/20 text-cream/50 hover:border-cream/40 hover:text-cream/70"
            )}
          >
            All
          </button>
          {skills.map((g) => (
            <button
              key={g.group}
              onClick={() => setActive(active === g.group ? null : g.group)}
              className={cn(
                "font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border transition-colors duration-150",
                active === g.group
                  ? "border-butterscotch bg-butterscotch/10 text-butterscotch"
                  : "border-cream/20 text-cream/50 hover:border-cream/40 hover:text-cream/70"
              )}
            >
              {g.group}
            </button>
          ))}
        </div>

        {/* skill chips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active ?? "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-10"
          >
            {displayed.map((group) => (
              <div key={group.group}>
                <div className="flex items-center gap-3 mb-5">
                  <FretMarker variant="double" size="sm" />
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-butterscotch">
                    {group.group}
                  </h3>
                  <div className="flex-1 h-px bg-cream/10" />
                </div>

                <motion.ul className="flex flex-wrap gap-2.5">
                  <AnimatePresence>
                    {group.items.map((s, i) => (
                      <li key={s.name}>
                        <SkillChip name={s.name} index={i} />
                      </li>
                    ))}
                  </AnimatePresence>
                </motion.ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
