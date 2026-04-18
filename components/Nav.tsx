"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Section = { id: string; label: string; fret: string };

const sections: Section[] = [
  { id: "home", label: "Home", fret: "0" },
  { id: "about", label: "About", fret: "III" },
  { id: "skills", label: "Skills", fret: "V" },
  { id: "projects", label: "Projects", fret: "VII" },
  { id: "experience", label: "Experience", fret: "IX" },
  { id: "writing", label: "Writing", fret: "XII" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-cream/75 border-b border-rosewood/10">
      <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
        <Link
          href="#home"
          className="font-display text-lg tracking-tight text-rosewood hover:text-sunburst-amber transition-colors"
        >
          <span className="sr-only">Home</span>
          <span aria-hidden>///</span>
        </Link>

        <button
          className="md:hidden text-rosewood font-mono text-xs uppercase tracking-widest"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="toggle navigation"
        >
          {open ? "close" : "menu"}
        </button>

        <nav className="hidden md:flex items-center gap-5">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex flex-col items-center text-xs font-mono text-rosewood/70 hover:text-rosewood transition-colors"
            >
              <span
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center border transition-all text-[10px]",
                  active === s.id
                    ? "border-rosewood bg-rosewood text-cream shadow-chrome"
                    : "border-rosewood/30"
                )}
                aria-hidden
              >
                {s.fret}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-widest">
                {s.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-rosewood/10 bg-cream/95">
          <ul className="px-5 py-3 flex flex-col gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 text-rosewood font-mono text-sm"
                >
                  <span className="w-7 h-7 rounded-full border border-rosewood/30 flex items-center justify-center text-[10px]">
                    {s.fret}
                  </span>
                  <span className="uppercase tracking-widest text-xs">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
